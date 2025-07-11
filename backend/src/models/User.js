const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: String,
    lastName: String,
    profileImage: String,
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    preferences: {
      theme: {
        type: String,
        enum: ['light', 'dark', 'system'],
        default: 'system',
      },
      notifications: {
        email: {
          type: Boolean,
          default: true,
        },
        push: {
          type: Boolean,
          default: true,
        },
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Add indexes
userSchema.index({ email: 1 });
userSchema.index({ clerkUserId: 1 });

// Virtual for full name
userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`.trim();
});

// Static method to find or create user from Clerk webhook
export const findOrCreateUser = async (clerkUser) => {
  let user = await this.findOne({ clerkUserId: clerkUser.id });
  
  if (!user) {
    user = new this({
      clerkUserId: clerkUser.id,
      email: clerkUser.email_addresses[0].email_address,
      firstName: clerkUser.first_name,
      lastName: clerkUser.last_name,
      profileImage: clerkUser.profile_image_url,
    });
    await user.save();
  }
  
  return user;
};

const User = mongoose.model('User', userSchema);

export default User;
