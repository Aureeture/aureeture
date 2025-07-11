"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Bell } from "lucide-react"
import Link from "next/link"

export default function ComingSoonPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-16 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Icon */}
          <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
            <Clock className="h-12 w-12 text-white" />
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              We're working hard to bring you something amazing. This page will be available soon!
            </p>
          </div>

          {/* Notification */}
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-lg p-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Bell className="h-5 w-5 text-purple-400" />
              <span className="text-purple-400 font-semibold">Stay Updated</span>
            </div>
            <p className="text-gray-300 text-sm">
              Follow us on social media or contact us directly to get notified when this feature launches.
            </p>
          </div>

          {/* Back Button */}
          <div className="pt-4">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
