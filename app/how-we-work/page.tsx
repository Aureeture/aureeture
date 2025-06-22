"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, UserPlus, Brain, Target, GitBranch, TrendingUp, Users, Briefcase, CheckCircle } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Sign Up & Take Assessment",
    description:
      "Create your account and complete our comprehensive career assessment quiz to understand your interests, skills, and goals.",
    icon: UserPlus,
    details: [
      "Personality and interest assessment",
      "Current skill level evaluation",
      "Career goal identification",
      "Learning preference analysis",
    ],
    duration: "10-15 minutes",
    color: "from-purple-500 to-violet-500",
  },
  {
    number: "02",
    title: "Get Matched with AI Copilot",
    description:
      "Our AI algorithm matches you with the perfect copilot based on your assessment results and career aspirations.",
    icon: Brain,
    details: [
      "AI-powered copilot matching",
      "Personalized learning path creation",
      "Custom roadmap generation",
      "Initial goal setting session",
    ],
    duration: "Instant",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    title: "Follow Your Roadmap",
    description:
      "Start your personalized learning journey with weekly goals, daily tasks, and continuous progress tracking.",
    icon: Target,
    details: [
      "Weekly milestone planning",
      "Daily task assignments",
      "Progress tracking and analytics",
      "Adaptive difficulty adjustment",
    ],
    duration: "Ongoing",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "04",
    title: "Work on Real Projects",
    description:
      "Pull actual company challenges, work on real-world problems, and submit your solutions via GitHub integration.",
    icon: GitBranch,
    details: [
      "Company-submitted challenges",
      "GitHub project submissions",
      "AI-powered code reviews",
      "Portfolio building",
    ],
    duration: "5-14 days per project",
    color: "from-pink-500 to-rose-500",
  },
  {
    number: "05",
    title: "Track Progress & Earn XP",
    description:
      "Monitor your growth through detailed analytics, earn XP points, and unlock achievements as you advance.",
    icon: TrendingUp,
    details: [
      "Comprehensive progress analytics",
      "XP points and achievement system",
      "Skill level assessments",
      "Streak tracking and gamification",
    ],
    duration: "Real-time",
    color: "from-orange-500 to-amber-500",
  },
  {
    number: "06",
    title: "Connect with Mentors",
    description:
      "Engage with AI copilots 24/7 and book sessions with industry experts for personalized guidance and career advice.",
    icon: Users,
    details: [
      "24/7 AI copilot availability",
      "Expert mentor scheduling",
      "Career guidance sessions",
      "Industry insights and networking",
    ],
    duration: "As needed",
    color: "from-red-500 to-pink-500",
  },
  {
    number: "07",
    title: "Launch Your Career",
    description:
      "Use your verified Aureeture profile to apply for jobs, showcase your skills, and connect with potential employers.",
    icon: Briefcase,
    details: [
      "Shareable CareerDNA profile",
      "Verified project portfolio",
      "Employer discovery features",
      "Job application assistance",
    ],
    duration: "Career-long",
    color: "from-indigo-500 to-purple-500",
  },
]

const successMetrics = [
  { label: "Average Time to First Job", value: "3.2 months", icon: Briefcase },
  { label: "Skill Improvement Rate", value: "85%", icon: TrendingUp },
  { label: "Project Completion Rate", value: "92%", icon: CheckCircle },
  { label: "Students Helped", value: "1,000+", icon: Users },
]

export default function HowWeWorkPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              How We Work
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the step-by-step journey that transforms students into industry-ready professionals. Our proven
              methodology combines AI guidance with real-world experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <metric.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Journey to Success</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow our proven 7-step methodology that has helped thousands of students land their dream careers.
            </p>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Left Side - Step Info */}
                      <div className="lg:w-2/3 p-8">
                        <div className="flex items-start space-x-6">
                          {/* Step Number */}
                          <div className="flex-shrink-0">
                            <div
                              className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}
                            >
                              <span className="text-2xl font-bold text-white">{step.number}</span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-4">
                              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                              <Badge variant="outline" className="border-purple-500/40 text-purple-400 text-xs">
                                {step.duration}
                              </Badge>
                            </div>

                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">{step.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {step.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="flex items-center space-x-3">
                                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Visual */}
                      <div className="lg:w-1/3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 flex items-center justify-center">
                        <div
                          className={`w-24 h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}
                        >
                          <step.icon className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Typical Timeline</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here's what a typical student journey looks like from start to career success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Foundation",
                duration: "Weeks 1-4",
                description:
                  "Complete assessment, get matched with copilot, and start your personalized learning path.",
                milestones: [
                  "Assessment completed",
                  "Copilot matched",
                  "First project started",
                  "Learning routine established",
                ],
              },
              {
                phase: "Development",
                duration: "Weeks 5-12",
                description: "Work on multiple projects, build your portfolio, and connect with mentors for guidance.",
                milestones: [
                  "3-5 projects completed",
                  "Portfolio established",
                  "Mentor sessions booked",
                  "Skills significantly improved",
                ],
              },
              {
                phase: "Career Launch",
                duration: "Weeks 13+",
                description: "Leverage your verified profile to apply for jobs and connect with potential employers.",
                milestones: ["Profile optimized", "Job applications sent", "Interviews scheduled", "Career launched"],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-3">
                        {phase.phase}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 text-white">{phase.duration}</h3>
                      <p className="text-gray-300 text-sm">{phase.description}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Key Milestones</h4>
                      {phase.milestones.map((milestone, milestoneIndex) => (
                        <div key={milestoneIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{milestone}</span>
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

      {/* Why Our Method Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Our Method Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our approach combines the best of AI technology with proven educational methodologies and real-world
              application.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Learning",
                description: "Every student gets a unique path tailored to their goals, skills, and learning style.",
                icon: Target,
                benefits: ["Custom roadmaps", "Adaptive difficulty", "Personal pace"],
              },
              {
                title: "Real-World Application",
                description: "Work on actual company projects to build practical skills and a verified portfolio.",
                icon: GitBranch,
                benefits: ["Live projects", "Industry relevance", "Portfolio building"],
              },
              {
                title: "Continuous Support",
                description: "24/7 AI guidance combined with expert human mentorship when you need it most.",
                icon: Users,
                benefits: ["Always available", "Expert guidance", "Community support"],
              },
              {
                title: "Progress Tracking",
                description: "Detailed analytics and gamification keep you motivated and on track.",
                icon: TrendingUp,
                benefits: ["Visual progress", "Achievement system", "Goal tracking"],
              },
              {
                title: "Industry Connection",
                description: "Connect directly with employers through your verified profile and project portfolio.",
                icon: Briefcase,
                benefits: ["Employer discovery", "Verified skills", "Direct connections"],
              },
              {
                title: "Proven Results",
                description: "Thousands of successful career transitions validate our methodology.",
                icon: CheckCircle,
                benefits: ["High success rate", "Fast placement", "Career growth"],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-colors h-full">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    <div className="space-y-1">
                      {item.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-xs text-purple-300">
                          • {benefit}
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have successfully transformed their careers with our proven methodology.
            </p>
            <Link href="/coming-soon">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
              >
                Begin Your Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-gray-500 text-sm mt-4">Takes only 10-15 minutes • Get instant copilot matching</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
