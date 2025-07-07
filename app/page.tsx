"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Users, Target, Zap, Star, TrendingUp, Play, Sparkles } from "lucide-react"
import Link from "next/link"

const copilots = [
  {
    name: "PMPulse",
    domain: "Product Management",
    description: "Master product strategy, roadmaps, and user research with AI-powered guidance",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
    students: "200+",
    projects: "45+",
  },
  {
    name: "CodeCompass",
    domain: "Software Development",
    description: "Learn programming, system design, and best practices through hands-on projects",
    icon: Brain,
    color: "from-green-500 to-emerald-500",
    students: "350+",
    projects: "80+",
  },
  {
    name: "DataGuide",
    domain: "Data Science",
    description: "Dive into analytics, ML, and data-driven insights with real datasets",
    icon: TrendingUp,
    color: "from-purple-500 to-violet-500",
    students: "180+",
    projects: "35+",
  },
  {
    name: "DesignDrive",
    domain: "UI/UX Design",
    description: "Create beautiful, user-centered digital experiences with modern tools",
    icon: Zap,
    color: "from-pink-500 to-rose-500",
    students: "150+",
    projects: "40+",
  },
  {
    name: "BizBrain",
    domain: "Business & Finance",
    description: "Understand markets, strategy, and financial modeling through case studies",
    icon: Users,
    color: "from-orange-500 to-amber-500",
    students: "90+",
    projects: "25+",
  },
  {
    name: "StartupSpark",
    domain: "Entrepreneurship",
    description: "Build, launch, and scale your own ventures with expert guidance",
    icon: Star,
    color: "from-red-500 to-pink-500",
    students: "75+",
    projects: "30+",
  },
]

const stats = [
  { label: "Students Helped", value: "1,000+", description: "Across 50+ cities" },
  { label: "Hours Saved", value: "10,000+", description: "In learning time" },
  { label: "Mentors Available", value: "50+", description: "Industry experts" },
  { label: "Success Rate", value: "95%", description: "Job placement rate" },
]

export default function HomePage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Trusted by 1,000+ Students Worldwide
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Your GenAI
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Career Copilot
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover, plan, and achieve your dream career with AI-powered guidance, real-world projects, and expert
                mentorship. Join the future of career development.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Link href="/coming-soon">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/coming-soon">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="pt-8">
              <p className="text-sm text-gray-400 mb-4">Trusted by students from</p>
              <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
                {["IIT Delhi", "IIT BHU", "IIT Bombay", "NIT Trichy", "IIM Bangalore", "IIT Madras", "IIM Ahmedabad"].map(
                  (institution) => (
                    <div key={institution} className="text-gray-500 font-medium text-sm">
                      {institution}
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-black/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-black/30 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Meet the{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                Founder
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group max-w-3xl mx-auto"
          >
            <Card className="bg-black/20 backdrop-blur-sm border-purple-500/30 hover:border-purple-500/50 hover:bg-black/30 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 lg:p-8 text-center flex-1 flex flex-col items-center">
                {/* Removed the founder's image placeholder */}
                <h3 className="text-2xl lg:text-3xl font-semibold mb-2 text-white">Rishabh Soni</h3>
                <p className="text-purple-400 text-base font-medium mb-4">Founder, Aureeture</p>
                <p className="text-gray-400 mb-6 leading-relaxed flex-1">
                  Driven by a vision to empower students with purpose-driven learning, I founded Aureeture to bridge the gap between skills and careers in the age of AI. As someone deeply passionate about education, technology, and innovation, I believe students deserve more than just textbooks and theory — they need guidance, mentorship, and tools that truly prepare them for the real world.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  At Aureeture, our mission is simple: turn potential into purpose. We're building an ecosystem where students can explore career paths, discover their strengths, and connect with the opportunities that fit them best — all powered by GenAI.
                </p>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  This is just the beginning, and I’m excited to lead this journey with a community that believes in the future of learning.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What is Aureeture AI */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              What is{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                Aureeture AI?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A revolutionary platform that combines artificial intelligence with human expertise to guide students
              through their career journey, from discovery to achievement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Matching",
                description:
                  "Get matched with the perfect career path based on your skills, interests, and goals through our advanced AI algorithms.",
                features: [
                  "Personality assessment",
                  "Skill gap analysis",
                  "Career recommendations",
                  "Learning style adaptation",
                ],
              },
              {
                icon: Target,
                title: "Personalized Roadmaps",
                description:
                  "Receive custom learning paths with weekly goals, daily tasks, and milestone tracking tailored to your career objectives.",
                features: ["Weekly milestones", "Daily task planning", "Progress tracking", "Adaptive difficulty"],
              },
              {
                icon: Users,
                title: "Real-World Experience",
                description:
                  "Work on actual company projects, build a verified portfolio, and gain practical skills that employers value.",
                features: ["Live company projects", "Portfolio building", "Skill verification", "Industry connections"],
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Card className="bg-black/20 backdrop-blur-sm border-purple-500/30 hover:border-purple-500/50 hover:bg-black/30 transition-all duration-300 h-full group-hover:scale-105 flex flex-col">
                  <CardContent className="p-6 lg:p-8 text-center flex-1 flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed flex-1">{feature.description}</p>
                    <div className="space-y-2 mt-auto">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                          <span className="text-white font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Copilot System */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/30 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Meet Your{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                AI Copilots
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Six specialized AI copilots, each trained in their respective domains to provide expert guidance and
              support tailored to your career goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {copilots.map((copilot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-black/20 backdrop-blur-sm border-purple-500/30 hover:border-purple-500/50 hover:bg-black/30 transition-all duration-300 overflow-hidden h-full group-hover:scale-105 flex flex-col">
                  <CardContent className="p-6 lg:p-8 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${copilot.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <copilot.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Active Students</div>
                        <div className="text-lg font-bold text-purple-400">{copilot.students}</div>
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white">{copilot.name}</h3>
                    <p className="text-purple-400 text-sm font-medium mb-4">{copilot.domain}</p>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">{copilot.description}</p>

                    <div className="flex items-center justify-between mb-6 text-sm">
                      <div className="flex items-center space-x-4">
                        <div>
                          <span className="text-gray-400">Projects: </span>
                          <span className="text-white font-semibold">{copilot.projects}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-green-400/60 text-green-300 bg-green-400/10">
                        Available 24/7
                      </Badge>
                    </div>

                    <div className="mt-auto">
                      <Link href="/coming-soon" className="block">
                        <Button
                          className={`w-full bg-gradient-to-r ${copilot.color} hover:opacity-90 text-white font-semibold transition-all duration-300 group-hover:scale-105`}
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/career-paths">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-purple-500/40 text-purple-400 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300"
              >
                Explore All Career Paths <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to Shape Your{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                Future?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of students who are already building their dream careers with Aureeture AI. Start your
              personalized journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/coming-soon">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-sm text-gray-400">Free assessment • Get matched instantly • No credit card required</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}