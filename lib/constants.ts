export const APP_CONFIG = {
  name: "Aureeture 2.0",
  description: "Your GenAI Career Copilot",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
} as const

export const CONTACT_INFO = {
  email: "career@aureeture.in",
  phone: "+91 7518496446",
  location: "Bangalore, Karnataka, India",
  socialMedia: {
    linkedin: "https://www.linkedin.com/company/aureeture/?viewAsMember=true",
    instagram: "https://www.instagram.com/aureeture_india/",
    twitter: "#",
  },
} as const

export const COPILOTS = [
  {
    id: "pmpulse",
    name: "PMPulse",
    domain: "Product Management",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "codecompass",
    name: "CodeCompass",
    domain: "Software Development",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "dataguide",
    name: "DataGuide",
    domain: "Data Science",
    color: "from-purple-500 to-violet-500",
  },
  {
    id: "designdrive",
    name: "DesignDrive",
    domain: "UI/UX Design",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "bizbrain",
    name: "BizBrain",
    domain: "Business & Finance",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "startupspark",
    name: "StartupSpark",
    domain: "Entrepreneurship",
    color: "from-red-500 to-pink-500",
  },
] as const

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Career Paths", href: "/career-paths" },
  { name: "Projects", href: "/projects" },
  { name: "Mentors", href: "/mentors" },
  { name: "Features", href: "/features" },
  { name: "How We Work", href: "/how-we-work" },
] as const
