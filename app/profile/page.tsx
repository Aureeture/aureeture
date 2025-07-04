"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  // Simulated authentication state and user info (replace with real logic)
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState<{ name: string; email: string } | null>({
    name: "John Doe",
    email: "john@example.com",
  });
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/"); // Redirect to home if not logged in
    }
  }, [isAuthenticated, router]);

  if (!user) return null;

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-[#181824] border border-purple-900/40 rounded-2xl p-10 shadow-xl w-full max-w-md text-white">
        <h1 className="text-3xl font-bold mb-6 text-purple-300">Your Profile</h1>
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-gray-300">Name:</span>
            <span className="ml-2">{user.name}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-300">Email:</span>
            <span className="ml-2">{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
