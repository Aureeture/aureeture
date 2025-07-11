import { useEffect, useState } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import { authAPI } from '@/lib/api';

const useAuth = () => {
  const { user: clerkUser, isLoaded: clerkLoaded } = useUser();
  const { signOut } = useClerk();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user profile from our backend when Clerk user changes
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!clerkLoaded) return;
      
      try {
        setLoading(true);
        
        if (clerkUser) {
          // Get user profile from our backend
          const { data } = await authAPI.getMe();
          setUser(data.data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error('Failed to fetch user profile:', err);
        setError(err.response?.data?.error || 'Failed to load user profile');
        
        // If unauthorized, sign out the user
        if (err.response?.status === 401) {
          await signOut();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [clerkUser, clerkLoaded, signOut]);

  // Update user profile
  const updateProfile = async (profileData) => {
    try {
      setLoading(true);
      const { data } = await authAPI.updateProfile(profileData);
      setUser(data.data);
      return { success: true, data: data.data };
    } catch (err) {
      console.error('Failed to update profile:', err);
      const errorMsg = err.response?.data?.error || 'Failed to update profile';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  // Delete user account
  const deleteAccount = async () => {
    try {
      setLoading(true);
      await authAPI.deleteAccount();
      await signOut();
      return { success: true };
    } catch (err) {
      console.error('Failed to delete account:', err);
      const errorMsg = err.response?.data?.error || 'Failed to delete account';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    updateProfile,
    deleteAccount,
    signOut: async () => {
      await signOut();
      setUser(null);
    },
  };
};

export default useAuth;
