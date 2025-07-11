export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Copilot {
  id: string
  name: string
  domain: string
  description: string
  color: string
  skills: string[]
  students: string
  projects: string
}

export interface Project {
  id: string
  title: string
  company: string
  domain: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  xp: number
  duration: string
  description: string
  tags: string[]
  featured: boolean
}

export interface Mentor {
  id: string
  name: string
  title: string
  company: string
  domain: string
  experience: string
  rating: number
  reviews: number
  hourlyRate: string
  avatar: string
  specialties: string[]
  availability: string
  languages: string[]
  bio: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface NewsletterForm {
  email: string
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}
