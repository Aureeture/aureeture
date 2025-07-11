"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MessageCircle, Calendar, Clock, Users, Brain, Video } from "lucide-react"
import Link from "next/link"

const aiCopilots = [
  {
    name: "PMPulse",
    domain: "Product Management",
    description: "Expert in product strategy, user research, and roadmapping. Available 24/7 for instant guidance.",
    avatar: "/placeholder.svg?height=80&width=80",
    specialties: ["Product Strategy", "User Research", "Roadmapping", "Analytics"],
    responseTime: "Instant",
    rating: 4.9,
    conversations: "10,000+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "CodeCompass",
    domain: "Software Development",
    description:
      "Your coding mentor for programming, system design, and best practices. Debug code and learn efficiently.",
    avatar: "/placeholder.svg?height=80&width=80",
    specialties: ["Full-Stack Development", "System Design", "Code Review", "Debugging"],
    responseTime: "Instant",
    rating: 4.8,
    conversations: "15,000+",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "DataGuide",
    domain: "Data Science",
    description: "Master data analysis, machine learning, and statistical modeling with personalized guidance.",
    avatar: "/placeholder.svg?height=80&width=80",
    specialties: ["Machine Learning", "Data Analysis", "Statistics", "Python/R"],
    responseTime: "Instant",
    rating: 4.9,
    conversations: "8,000+",
    color: "from-purple-500 to-violet-500",
  },
]

const humanMentors = [
  {
    name: "Sarah Chen",
    title: "Senior Product Manager",
    company: "Google",
    domain: "Product Management",
    experience: "8 years",
    rating: 4.9,
    reviews: 127,
    hourlyRate: "$150",
    avatar: "/placeholder.svg?height=80&width=80",
    specialties: ["B2B Products", "Growth Strategy", "Team Leadership"],
    availability: "Mon-Fri, 9AM-6PM PST",
    languages: ["English", "Mandarin"],
    bio: "Led product teams at Google and Meta, specializing in B2B growth products. Passionate about mentoring the next generation of PMs.",
  },
  {
    name: "Marcus Johnson",
    title: "Staff Software Engineer",
    company: "Netflix",
    domain: "Software Development",
    experience: "12 years",
    rating: 4.8,
    reviews: 89,
    hourlyRate: "$180",
    avatar: "/placeholder.svg?height=80&width=80",
    specialties: ["Distributed Systems", "Microservices", "Leadership"],
    availability: "Tue-Thu, 6PM-9PM PST",
    languages: ["English", "Spanish"],
    bio: "Built scalable systems at Netflix and Uber. Expert in distributed systems and engineering leadership.",
  },
  {
    name: "Dr. Priya Patel",
    title: "Principal Data Scientist",
    company: "Microsoft",
    domain: "Data Science",
    experience: "10 years",
    rating: 5.0,
    reviews: 156,
    hourlyRate: "$200",
    avatar: "/placeholder.svg?height=80&width=80",
    specialties: ["Deep Learning", "NLP", "Research"],
    availability: "Weekends, 10AM-4PM PST",
    languages: ["English", "Hindi"],
    bio: "PhD in Machine Learning from Stanford. Leading AI research at Microsoft with focus on NLP and computer vision.",
  },
  {
    name: "Alex Rivera",
    title: "Design Director",
    company: "Airbnb",
    domain: "UI/UX Design",
    experience: "9 years",
    rating: 4.9,
    reviews: 203,
    hourlyRate: "$160",
    avatar: "/placeholder.svg?height=80&width=80",
    specialties: ["Design Systems", "User Research", "Team Management"],
    availability: "Mon-Wed, 7PM-10PM PST",
    languages: ["English", "Spanish"],
    bio: "Led design teams at Airbnb and Spotify. Expert in building design systems and user-centered products.",
  },
  {
    name: "David Kim",
    title: "VP of Business Development",
    company: "Stripe",
    domain: "Business & Finance",
    experience: "15 years",
    rating: 4.7,
    reviews: 94,
    hourlyRate: "$220",
    avatar: "/placeholder.svg?height=80&width=80",
    specialties: ["Strategic Partnerships", "Financial Modeling", "M&A"],
    availability: "Fri-Sat, 2PM-6PM PST",
    languages: ["English", "Korean"],
    bio: "Former McKinsey consultant, now leading BD at Stripe. Expert in strategic partnerships and financial strategy.",
  },
  {
    name: "Emma Thompson",
    title: "Founder & CEO",
    company: "GreenTech Innovations",
    domain: "Entrepreneurship",
    experience: "7 years",
    rating: 4.8,
    reviews: 67,
    hourlyRate: "$190",
    avatar: "/placeholder.svg?height=80&width=80",
    specialties: ["Fundraising", "Product-Market Fit", "Team Building"],
    availability: "Sun-Mon, 8AM-12PM PST",
    languages: ["English", "French"],
    bio: "Serial entrepreneur with 2 successful exits. Raised $50M+ in funding and passionate about sustainable tech.",
  },
]

// Add this function to handle booking
// const handleBookCall = (mentorName: string) => {
//   alert(`Booking session with ${mentorName}. You will be redirected to the scheduling page.`)
// }

// // Add this function to handle AI chat
// const handleChatNow = (copilotName: string) => {
//   alert(`Starting chat with ${copilotName}. Opening AI chat interface...`)
// }

export default function MentorsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Meet Your Mentors
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get guidance from AI Copilots available 24/7 and connect with industry experts from top companies. Choose
              the mentorship style that works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Copilots Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Copilots - Available 24/7</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get instant answers, code reviews, and personalized guidance from our specialized AI mentors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {aiCopilots.map((copilot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${copilot.color} flex items-center justify-center`}
                      >
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{copilot.name}</h3>
                        <p className="text-purple-400 text-sm">{copilot.domain}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4">{copilot.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{copilot.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">{copilot.conversations} chats</div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {copilot.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-purple-500/10 text-purple-300 border-purple-500/20 text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1 text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">Always Available</span>
                      </div>
                      <span className="text-sm text-gray-400">{copilot.responseTime}</span>
                    </div>

                    <Link href="/coming-soon">
                      <Button className={`w-full bg-gradient-to-r ${copilot.color} hover:opacity-90 text-white`}>
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chat Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Mentors Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Human Mentors - Industry Experts</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Connect with seasoned professionals from top companies for personalized career guidance and industry
              insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {humanMentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                        <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                          {mentor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white">{mentor.name}</h3>
                        <p className="text-purple-400 text-sm">{mentor.title}</p>
                        <p className="text-gray-400 text-sm">{mentor.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{mentor.rating}</span>
                        <span className="text-xs text-gray-400">({mentor.reviews} reviews)</span>
                      </div>
                      <Badge variant="outline" className="border-purple-500/40 text-purple-400 text-xs">
                        {mentor.domain}
                      </Badge>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{mentor.bio}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Experience:</span>
                        <span>{mentor.experience}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Rate:</span>
                        <span className="font-semibold">{mentor.hourlyRate}/hour</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {mentor.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-blue-500/10 text-blue-300 border-blue-500/20 text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="text-xs text-gray-400 mb-4">
                      <div className="flex items-center space-x-1 mb-1">
                        <Clock className="h-3 w-3" />
                        <span>{mentor.availability}</span>
                      </div>
                      <div>Languages: {mentor.languages.join(", ")}</div>
                    </div>

                    <Link href="/coming-soon">
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book a Call
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Mentorship Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Mentorship Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you choose AI or human mentors, our platform ensures you get the guidance you need to accelerate
              your career growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AI Mentorship */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Mentorship</h3>
              </div>

              <div className="space-y-4">
                {[
                  "Instant responses to your questions",
                  "Code reviews and debugging help",
                  "Personalized learning recommendations",
                  "Progress tracking and goal setting",
                  "Available 24/7 across all time zones",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Human Mentorship */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Human Mentorship</h3>
              </div>

              <div className="space-y-4">
                {[
                  "One-on-one video calls with experts",
                  "Industry insights and career advice",
                  "Resume reviews and interview prep",
                  "Networking opportunities and referrals",
                  "Long-term career planning and strategy",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Mentorship Journey</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need instant AI guidance or personalized human mentorship, we have the perfect match for your
              career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/coming-soon">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with AI Copilot
                </Button>
              </Link>
              <Link href="/coming-soon">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg"
                >
                  <Video className="mr-2 h-5 w-5" />
                  Book Human Mentor
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
