"use client"

import type React from "react"

import Link from "next/link"
import Image from 'next/image';
import { useState } from "react"
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone, CheckCircle } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
           {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/aureeture.logo.png"
                alt="Aureeture Logo"
                width={200}
                height={130}
                className="rounded-xl shadow-lg"
              />
              <div className="hidden sm:block">
                {/* <span className="text-white font-bold text-xl tracking-tight">
                  // Aureeture
                </span>
                <div className="text-xs text-purple-400 font-medium">
                  AI Career Copilot
                </div> */}
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Shaping the Future of Careers with GenAI. Empowering students to
              discover, plan, and achieve their dream careers through
              personalized AI guidance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/aureeture/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
              <Link
                href="/coming-soon"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
              </Link>
              <a
                href="https://www.instagram.com/aureeture_india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Career Paths", href: "/career-paths" },
                { name: "Projects", href: "/projects" },
                { name: "Mentors", href: "/mentors" },
                { name: "Features", href: "/features" },
                { name: "How We Work", href: "/how-we-work" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Resources</h3>
            <div className="space-y-3">
              {[
                "Career Assessment",
                "Learning Paths",
                "Success Stories",
                "Help Center",
                "API Documentation",
                "Community Forum",
              ].map((resource) => (
                <Link
                  key={resource}
                  href="/coming-soon"
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  {resource}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:career@aureeture.in"
                className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors text-sm group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>career@aureeture.in</span>
              </a>
              <a
                href="tel:+917518496446"
                className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors text-sm group"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>+91 7518496446</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, Karnataka</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4 border-t border-gray-800">
              <h4 className="text-white font-medium text-sm mb-3">Stay Updated</h4>
              {isSubscribed ? (
                <div className="flex items-center space-x-2 text-green-400 text-sm">
                  <CheckCircle className="h-4 w-4" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-container">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-button">
                    Subscribe
                  </button>
                </form>
              )}
              <p className="text-xs text-gray-500 mt-2">Get updates on new features and career opportunities.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>© 2025 Aureeture. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="/coming-soon" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/coming-soon" className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/coming-soon" className="hover:text-purple-400 transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
            <div className="text-sm text-gray-500">Made with ❤️ for the next generation of professionals</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
