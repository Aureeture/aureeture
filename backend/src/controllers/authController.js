import { Clerk } from '@clerk/clerk-sdk-node';
import User from '../models/User';

const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY });

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    
    // Get user from Clerk
    const clerkUser = await clerk.users.getUser(userId);
    
    // Find or create user in our database
    const user = await User.findOrCreateUser(clerkUser);
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/me
// @access  Private
export const updateProfile = async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    const { firstName, lastName, preferences } = req.body;
    
    // Update user in Clerk
    const updatedUser = await clerk.users.updateUser(userId, {
      firstName,
      lastName,
    });
    
    // Update user in our database
    const user = await User.findOneAndUpdate(
      { clerkUserId: userId },
      {
        firstName,
        lastName,
        ...(preferences && { preferences }),
      },
      { new: true, runValidators: true }
    );
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete user account
// @route   DELETE /api/auth/me
// @access  Private
export const deleteAccount = async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    
    // Delete user from Clerk
    await clerk.users.deleteUser(userId);
    
    // Delete user from our database
    await User.findOneAndDelete({ clerkUserId: userId });
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

// Webhook handler for Clerk events
export const handleWebhook = async (req, res, next) => {
  try {
    const evt = await clerk.webhooks.verifyWebhook({
      payload: req.body,
      header: req.headers,
      secret: process.env.CLERK_WEBHOOK_SECRET,
    });
    
    const { id, email_addresses, first_name, last_name, profile_image_url } = evt.data;
    
    switch (evt.type) {
      case 'user.created':
      case 'user.updated':
        await User.findOneAndUpdate(
          { clerkUserId: id },
          {
            email: email_addresses[0].email_address,
            firstName: first_name,
            lastName: last_name,
            profileImage: profile_image_url,
          },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        );
        break;
        
      case 'user.deleted':
        await User.findOneAndDelete({ clerkUserId: id });
        break;
    }
    
    res.status(200).json({ received: true });
  } catch (error) {
    next(error);
  }
};
