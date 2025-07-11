"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, Calendar, MessageCircle, TrendingUp, Users, Zap, Award, GitBranch, Share2 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Copilot Matching",
    description:
      "Get matched with the perfect AI copilot based on your career goals, skills, and learning preferences through our advanced matching algorithm.",
    benefits: [
      "Personalized career path recommendations",
      "Skills gap analysis and improvement plans",
      "Learning style adaptation",
      "Continuous refinement based on progress",
    ],
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Target,
    title: "Dynamic Roadmap Generator",
    description:
      "Receive custom learning paths with weekly goals and daily tasks that adapt to your progress and changing career objectives.",
    benefits: [
      "Weekly milestone planning",
      "Adaptive difficulty adjustment",
      "Multi-path career exploration",
      "Real-time progress tracking",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "Streak Calendar & Gamification",
    description:
      "Stay motivated with our gamified learning system featuring streak tracking, XP points, and achievement badges.",
    benefits: [
      "Daily learning streak tracking",
      "XP points for completed tasks",
      "Achievement badges and milestones",
      "Leaderboards and social challenges",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Chat Copilot",
    description:
      "Access your AI copilot instantly from any page for immediate help, code reviews, and personalized guidance.",
    benefits: [
      "24/7 availability across all pages",
      "Context-aware responses",
      "Code review and debugging help",
      "Instant doubt resolution",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "XP System & Progress Tracker",
    description:
      "Visualize your growth with detailed progress tracking, skill development metrics, and achievement analytics.",
    benefits: [
      "Comprehensive skill progression maps",
      "Weekly and monthly progress reports",
      "Competency level assessments",
      "Goal achievement analytics",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: GitBranch,
    title: "Integrated Project Hub",
    description:
      "Work on real company challenges, submit solutions via GitHub, and build a verified portfolio of your work.",
    benefits: [
      "Real-world project challenges",
      "GitHub integration for submissions",
      "AI-powered code reviews",
      "Verified project portfolio",
    ],
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Share2,
    title: "Public CareerDNA Profiles",
    description:
      "Showcase your skills, projects, and achievements with shareable profiles that employers can discover and verify.",
    benefits: [
      "Professional skill showcases",
      "Verified project portfolios",
      "Employer discovery features",
      "Social proof and endorsements",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Mentor Marketplace",
    description:
      "Connect with industry experts and AI copilots for personalized guidance, career advice, and skill development.",
    benefits: [
      "Expert mentor matching",
      "Flexible scheduling options",
      "Industry-specific guidance",
      "Long-term mentorship relationships",
    ],
    color: "from-teal-500 to-cyan-500",
  },
]

const stats = [
  { label: "Active Users", value: "1,000+", icon: Users },
  { label: "Projects Completed", value: "5,000+", icon: GitBranch },
  { label: "XP Points Earned", value: "2M+", icon: Award },
  { label: "Mentor Sessions", value: "3,000+", icon: MessageCircle },
]

export default function FeaturesPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover what makes Aureeture 2.0 the most comprehensive GenAI-powered career discovery platform. Every
              feature is designed to accelerate your journey to your dream career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                        <Badge variant="outline" className="border-purple-500/40 text-purple-400 text-xs">
                          Core Feature
                        </Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Benefits</h4>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Aureeture?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our unique combination of AI technology and human expertise creates an unparalleled learning experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-First Approach",
                description:
                  "Every feature is powered by advanced AI that learns from your behavior and adapts to your needs.",
                icon: Brain,
                highlights: [
                  "Personalized recommendations",
                  "Adaptive learning paths",
                  "Intelligent progress tracking",
                ],
              },
              {
                title: "Real-World Application",
                description:
                  "Work on actual company projects and build a portfolio that demonstrates real-world skills.",
                icon: GitBranch,
                highlights: ["Live company challenges", "Verified project portfolio", "Industry-relevant skills"],
              },
              {
                title: "Community & Support",
                description: "Join a community of learners and get support from both AI copilots and human mentors.",
                icon: Users,
                highlights: ["24/7 AI support", "Expert human mentors", "Peer learning community"],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.description}</p>
                <div className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <Zap className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aureeture integrates with the tools you already use, making your learning journey smooth and efficient.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "GitHub", description: "Project submissions and portfolio" },
              { name: "LinkedIn", description: "Profile sharing and networking" },
              { name: "Google Calendar", description: "Mentor session scheduling" },
              { name: "Slack", description: "Community discussions" },
              { name: "Zoom", description: "Video mentorship calls" },
              { name: "Figma", description: "Design project collaboration" },
              { name: "VS Code", description: "Code review and debugging" },
              { name: "Notion", description: "Learning notes and planning" },
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 rounded-lg bg-gray-900/30 border border-purple-500/10 hover:border-purple-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-purple-400">{integration.name[0]}</span>
                </div>
                <h4 className="font-semibold text-sm mb-1 text-white">{integration.name}</h4>
                <p className="text-xs text-gray-400">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
