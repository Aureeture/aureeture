'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button';
import { LogOut, User, Mail, Calendar } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function ProfilePage() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  // If not logged in, redirect to login
  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Your Profile</h1>
          <p className="text-gray-400">Manage your account settings and preferences</p>
        </div>

        <Card className="border-purple-500/30 bg-black/50 backdrop-blur-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24 border-2 border-purple-500/50">
                  <AvatarImage src="" alt={user?.name || 'User'} />
                  <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600 text-2xl">
                    {user?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-white">{user?.name}</h2>
                <p className="text-gray-300 flex items-center justify-center sm:justify-start gap-2 mt-1">
                  <Mail className="h-4 w-4" />
                  {user?.email}
                </p>
                <p className="text-sm text-gray-400 flex items-center justify-center sm:justify-start gap-2 mt-2">
                  <Calendar className="h-4 w-4" />
                  Member since {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Account Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400">Full Name</p>
                    <p className="text-white">{user?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Address</p>
                    <p className="text-white">{user?.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Account Type</p>
                    <p className="text-white">Free Account</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-2 text-purple-400 border-purple-500/30 hover:bg-purple-500/10">
                    <User className="h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 text-blue-400 border-blue-500/30 hover:bg-blue-500/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    Change Password
                  </Button>
                  <Button 
                    onClick={logout}
                    variant="outline" 
                    className="w-full justify-start gap-2 text-red-400 border-red-500/30 hover:bg-red-500/10"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-purple-500/30 bg-black/50 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white">Your Activity</CardTitle>
              <CardDescription>Track your learning progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Courses Enrolled</p>
                  <p className="text-2xl font-bold text-white">3</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Courses Completed</p>
                  <p className="text-2xl font-bold text-white">1</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-500/30 bg-black/50 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white">Subscription</CardTitle>
              <CardDescription>Manage your subscription plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Current Plan</p>
                  <p className="text-2xl font-bold text-white">Free Plan</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Upgrade to Pro
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
