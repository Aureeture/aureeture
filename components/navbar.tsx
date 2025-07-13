"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { usePathname } from "next/navigation"
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Career Paths", href: "/career-paths" },
  { name: "Projects", href: "/projects" },
  { name: "Mentors", href: "/mentors" },
  { name: "Features", href: "/features" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Student Plans", href: "/student-payment" },
]

const NavLink = memo(({ item, isActive, onClick }: { item: NavItem, isActive: boolean, onClick: () => void }) => (
  <Link
    href={item.href}
    onClick={onClick}
    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      isActive
        ? "text-white bg-purple-500/20 shadow-lg shadow-purple-500/25"
        : "text-gray-300 hover:text-white hover:bg-white/5"
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    {item.name}
    {isActive && (
      <motion.div
        layoutId="activeTab"
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30"
        initial={false}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        aria-hidden="true"
      />
    )}
  </Link>
))

NavLink.displayName = 'NavLink';

const MobileAuthButton = () => {
  const { isAuthenticated, user, logout } = useAuth();

  if (isAuthenticated) {
    return (
      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-3 px-4 py-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="" alt={user?.name || 'User'} />
            <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
        </div>
        <Link
          href="/profile"
          className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
        >
          Profile
        </Link>
        <button
          onClick={logout}
          className="w-full text-left px-4 py-3 text-base font-medium text-red-400 hover:bg-red-500/10 rounded-lg"
        >
          Logout
        </button>
      </div>
    );
  }

  return null; // Removed the "Join Aureeture AI" button
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-lg border-b border-purple-500/30 shadow-lg shadow-purple-500/10"
          : "bg-black/80 backdrop-blur-md border-b border-purple-500/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link 
            href="/" 
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
            aria-label="Home"
          >
            <div className="relative w-40 h-10 md:w-48 md:h-12">
              <Image
                src="/aureeture.logo.png"
                alt="Aureeture Logo"
                fill
                className="object-contain rounded-xl shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                priority
                sizes="(max-width: 768px) 10rem, 12rem"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                isActive={pathname === item.href}
                onClick={closeMenu}
              />
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Contact us"
            >
              Contact Us
            </Link>
            {/* Removed AuthButton */}
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-purple-500/20 overflow-hidden"
            aria-hidden={!isOpen}
          >
            <nav className="px-4 py-6 space-y-3" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      pathname === item.href
                        ? "text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    onClick={closeMenu}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-gray-700">
                {/* Removed MobileAuthButton */}
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
