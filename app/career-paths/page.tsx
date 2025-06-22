"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Brain, TrendingUp, Zap, Users, Star, ArrowRight, Clock, Award } from "lucide-react"
import Link from "next/link"

const copilots = [
  {
    name: "PMPulse",
    domain: "Product Management",
    description:
      "Master product strategy, user research, roadmapping, and cross-functional leadership. Learn from real product managers at top tech companies.",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
    skills: ["Product Strategy", "User Research", "Roadmapping", "Analytics", "Leadership"],
    duration: "12 weeks",
    projects: 8,
    difficulty: "Intermediate",
  },
  {
    name: "CodeCompass",
    domain: "Software Development",
    description:
      "Learn programming fundamentals, system design, and software engineering best practices. Build real applications from scratch.",
    icon: Brain,
    color: "from-green-500 to-emerald-500",
    skills: ["JavaScript/Python", "System Design", "Databases", "APIs", "DevOps"],
    duration: "16 weeks",
    projects: 12,
    difficulty: "Beginner to Advanced",
  },
  {
    name: "DataGuide",
    domain: "Data Science",
    description:
      "Dive deep into data analysis, machine learning, and statistical modeling. Work with real datasets from industry partners.",
    icon: TrendingUp,
    color: "from-purple-500 to-violet-500",
    skills: ["Python/R", "Machine Learning", "Statistics", "SQL", "Visualization"],
    duration: "14 weeks",
    projects: 10,
    difficulty: "Intermediate",
  },
  {
    name: "DesignDrive",
    domain: "UI/UX Design",
    description:
      "Create beautiful, user-centered digital experiences. Learn design thinking, prototyping, and user testing methodologies.",
    icon: Zap,
    color: "from-pink-500 to-rose-500",
    skills: ["Figma/Sketch", "User Research", "Prototyping", "Design Systems", "Usability Testing"],
    duration: "10 weeks",
    projects: 6,
    difficulty: "Beginner",
  },
  {
    name: "BizBrain",
    domain: "Business & Finance",
    description:
      "Understand markets, financial modeling, and business strategy. Learn from case studies of successful companies.",
    icon: Users,
    color: "from-orange-500 to-amber-500",
    skills: ["Financial Modeling", "Market Analysis", "Strategy", "Excel/PowerBI", "Consulting"],
    duration: "12 weeks",
    projects: 8,
    difficulty: "Intermediate",
  },
  {
    name: "StartupSpark",
    domain: "Entrepreneurship",
    description:
      "Build, launch, and scale your own ventures. Learn from successful entrepreneurs and get hands-on experience.",
    icon: Star,
    color: "from-red-500 to-pink-500",
    skills: ["Business Planning", "Fundraising", "Marketing", "Operations", "Leadership"],
    duration: "20 weeks",
    projects: 15,
    difficulty: "Advanced",
  },
]

export default function CareerPathsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Choose Your Career Path
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get matched with specialized AI Copilots trained in your field of interest. Each copilot provides
              personalized roadmaps, real-world challenges, and 24/7 support to guide your career journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Copilots Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {copilots.map((copilot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-r ${copilot.color} flex items-center justify-center`}
                        >
                          <copilot.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1 text-white">{copilot.name}</h3>
                          <p className="text-purple-400 font-medium">{copilot.domain}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-purple-500/40 text-purple-400">
                        {copilot.difficulty}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">{copilot.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <Clock className="h-5 w-5 text-purple-400 mx-auto mb-1" />
                        <div className="text-sm text-gray-400">Duration</div>
                        <div className="font-semibold">{copilot.duration}</div>
                      </div>
                      <div className="text-center">
                        <Target className="h-5 w-5 text-purple-400 mx-auto mb-1" />
                        <div className="text-sm text-gray-400">Projects</div>
                        <div className="font-semibold">{copilot.projects}</div>
                      </div>
                      <div className="text-center">
                        <Award className="h-5 w-5 text-purple-400 mx-auto mb-1" />
                        <div className="text-sm text-gray-400">Skills</div>
                        <div className="font-semibold">{copilot.skills.length}</div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">KEY SKILLS YOU'LL LEARN</h4>
                      <div className="flex flex-wrap gap-2">
                        {copilot.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-purple-500/10 text-purple-300 border-purple-500/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link href="/coming-soon">
                      <Button
                        className={`w-full bg-gradient-to-r ${copilot.color} hover:opacity-90 text-white font-semibold py-3 group-hover:scale-105 transition-transform`}
                      >
                        Try This Path <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Your Journey Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each career path is designed to take you from beginner to job-ready professional through structured
              learning and real-world application.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Matching",
                description:
                  "Take our comprehensive quiz to get matched with the perfect AI Copilot based on your interests, skills, and career goals.",
              },
              {
                step: "02",
                title: "Personalized Roadmap",
                description:
                  "Receive a custom learning path with weekly milestones, daily tasks, and progress tracking tailored to your pace.",
              },
              {
                step: "03",
                title: "Real Projects & Mentorship",
                description:
                  "Work on actual company challenges, get feedback from AI and human mentors, and build a verified portfolio.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take our quick assessment to discover which career path aligns with your goals and get matched with your
              AI Copilot.
            </p>
            <Link href="/coming-soon">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
              >
                Take Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
