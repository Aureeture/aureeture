"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Clock, Award, GitBranch, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Customer Churn Prediction Model",
    company: "Netflix",
    domain: "Data Science",
    difficulty: "Advanced",
    xp: 800,
    duration: "10-12 days",
    description:
      "Build a machine learning model to predict customer churn for Netflix's streaming service. Analyze user behavior patterns, viewing history, and subscription data to identify customers likely to cancel their subscriptions.",
    problemStatement:
      "Netflix loses approximately 2.5% of subscribers monthly. The company needs a predictive model to identify at-risk customers 30 days before they're likely to churn, enabling proactive retention campaigns. Your model should achieve >85% accuracy and provide actionable insights for the retention team.",
    tags: ["Python", "Scikit-learn", "Pandas", "SQL", "Machine Learning", "Data Visualization"],
    requirements: ["Python proficiency", "ML algorithms knowledge", "SQL experience", "Statistical analysis"],
    deliverables: [
      "Trained ML model",
      "Performance analysis report",
      "Feature importance analysis",
      "Retention strategy recommendations",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Mobile Banking App Redesign",
    company: "JPMorgan Chase",
    domain: "UI/UX Design",
    difficulty: "Intermediate",
    xp: 650,
    duration: "8-10 days",
    description:
      "Redesign the mobile banking app interface to improve user experience and increase customer engagement. Focus on simplifying complex financial transactions and enhancing accessibility.",
    problemStatement:
      "Current mobile app has a 3.2/5 rating with users complaining about complex navigation and poor accessibility. The bank needs a complete UX overhaul to compete with fintech apps like Venmo and Cash App. Target: Increase user satisfaction to 4.5/5 and reduce task completion time by 40%.",
    tags: ["Figma", "User Research", "Prototyping", "Accessibility", "Mobile Design", "Financial UX"],
    requirements: ["Figma expertise", "UX research skills", "Mobile design experience", "Accessibility knowledge"],
    deliverables: ["High-fidelity mockups", "Interactive prototype", "User journey maps", "Accessibility audit report"],
    featured: false,
  },
  {
    id: 3,
    title: "E-commerce Recommendation Engine",
    company: "Amazon",
    domain: "Software Development",
    difficulty: "Advanced",
    xp: 900,
    duration: "12-15 days",
    description:
      "Develop a real-time product recommendation system for Amazon's e-commerce platform. Implement collaborative filtering and content-based algorithms to personalize shopping experiences.",
    problemStatement:
      "Amazon's current recommendation system needs optimization to handle 300M+ active users. Build a scalable microservice that processes user behavior in real-time and delivers personalized recommendations with <100ms latency. Target: Increase click-through rate by 25%.",
    tags: ["Python", "Redis", "Apache Kafka", "Docker", "AWS", "Microservices", "Machine Learning"],
    requirements: ["Backend development", "Distributed systems", "ML algorithms", "Cloud platforms"],
    deliverables: ["Microservice architecture", "API documentation", "Performance benchmarks", "Deployment guide"],
    featured: true,
  },
  {
    id: 4,
    title: "Supply Chain Optimization Strategy",
    company: "Walmart",
    domain: "Business & Finance",
    difficulty: "Intermediate",
    xp: 700,
    duration: "9-11 days",
    description:
      "Analyze Walmart's supply chain data to identify optimization opportunities and cost reduction strategies. Focus on inventory management and logistics efficiency.",
    problemStatement:
      "Walmart spends $500B annually on supply chain operations. The company needs data-driven strategies to reduce costs by 5% while maintaining service levels. Analyze inventory turnover, supplier performance, and distribution efficiency to recommend actionable improvements.",
    tags: ["Excel", "SQL", "Tableau", "Supply Chain Analytics", "Financial Modeling", "Operations Research"],
    requirements: ["Business analysis skills", "Excel/SQL proficiency", "Supply chain knowledge", "Financial modeling"],
    deliverables: ["Cost analysis report", "Optimization recommendations", "ROI projections", "Implementation roadmap"],
    featured: false,
  },
  {
    id: 5,
    title: "Social Media Content Strategy",
    company: "Nike",
    domain: "Product Management",
    difficulty: "Beginner",
    xp: 450,
    duration: "6-8 days",
    description:
      "Develop a comprehensive social media content strategy for Nike's new product launch. Create content calendar, engagement tactics, and performance metrics framework.",
    problemStatement:
      "Nike is launching a new sustainable sneaker line targeting Gen Z consumers. The brand needs a 90-day social media strategy to generate 10M impressions and 500K engagements across platforms. Focus on authentic storytelling and influencer partnerships.",
    tags: ["Social Media Strategy", "Content Planning", "Analytics", "Brand Management", "Influencer Marketing"],
    requirements: ["Social media knowledge", "Content creation skills", "Analytics understanding", "Brand strategy"],
    deliverables: ["Content calendar", "Engagement strategy", "Influencer outreach plan", "Success metrics framework"],
    featured: false,
  },
  {
    id: 6,
    title: "Fintech Startup Business Plan",
    company: "Y Combinator",
    domain: "Entrepreneurship",
    difficulty: "Advanced",
    xp: 850,
    duration: "14-16 days",
    description:
      "Create a comprehensive business plan for a fintech startup focused on micro-investing for college students. Include market analysis, financial projections, and go-to-market strategy.",
    problemStatement:
      "Develop a business plan for a micro-investing app targeting 40M+ college students in the US. The app should enable investments starting from $1 with educational content. Create a viable path to $10M ARR within 3 years and prepare for Series A funding.",
    tags: ["Business Planning", "Financial Modeling", "Market Research", "Pitch Deck", "Fundraising", "Fintech"],
    requirements: [
      "Business strategy knowledge",
      "Financial modeling skills",
      "Market research experience",
      "Startup ecosystem understanding",
    ],
    deliverables: ["Complete business plan", "Financial projections", "Market analysis", "Investor pitch deck"],
    featured: true,
  },
  {
    id: 7,
    title: "AI-Powered Customer Service Chatbot",
    company: "Shopify",
    domain: "Software Development",
    difficulty: "Intermediate",
    xp: 600,
    duration: "8-10 days",
    description:
      "Build an intelligent customer service chatbot for Shopify merchants. Implement natural language processing to handle common support queries and integrate with existing help desk systems.",
    problemStatement:
      "Shopify receives 100K+ support tickets monthly. Build an AI chatbot that can resolve 60% of common queries automatically, reducing response time from 4 hours to <1 minute. The bot should handle order tracking, billing questions, and basic troubleshooting.",
    tags: ["Node.js", "OpenAI API", "Natural Language Processing", "REST APIs", "MongoDB", "React"],
    requirements: ["JavaScript proficiency", "API integration", "NLP basics", "Database design"],
    deliverables: ["Working chatbot application", "API documentation", "Training data analysis", "Integration guide"],
    featured: false,
  },
  {
    id: 8,
    title: "Sustainable Fashion Brand Identity",
    company: "Patagonia",
    domain: "UI/UX Design",
    difficulty: "Beginner",
    xp: 400,
    duration: "5-7 days",
    description:
      "Design a complete brand identity for Patagonia's new sustainable fashion line targeting urban millennials. Create logo, color palette, typography, and brand guidelines.",
    problemStatement:
      "Patagonia is launching an urban fashion line to compete with brands like Everlane and Reformation. Create a brand identity that communicates sustainability, style, and urban lifestyle. The brand should appeal to 25-35 year old professionals in major cities.",
    tags: ["Brand Design", "Logo Design", "Typography", "Color Theory", "Brand Guidelines", "Adobe Creative Suite"],
    requirements: [
      "Design software proficiency",
      "Brand strategy understanding",
      "Typography knowledge",
      "Color theory",
    ],
    deliverables: ["Logo variations", "Brand style guide", "Color palette", "Typography system"],
    featured: false,
  },
]

const domains = [
  "All",
  "Data Science",
  "UI/UX Design",
  "Product Management",
  "Software Development",
  "Business & Finance",
  "Entrepreneurship",
]
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDomain, setSelectedDomain] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesDomain = selectedDomain === "All" || project.domain === selectedDomain
    const matchesDifficulty = selectedDifficulty === "All" || project.difficulty === selectedDifficulty

    return matchesSearch && matchesDomain && matchesDifficulty
  })

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Real-World Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Work on actual challenges from top companies. Build your portfolio with verified, industry-relevant
              projects that showcase your skills to potential employers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search projects, companies, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-900/50 border-purple-500/20 focus:border-purple-500/40"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger className="w-48 bg-gray-900/50 border-purple-500/20">
                  <SelectValue placeholder="Select Domain" />
                </SelectTrigger>
                <SelectContent>
                  {domains.map((domain) => (
                    <SelectItem key={domain} value={domain}>
                      {domain}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-40 bg-gray-900/50 border-purple-500/20">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  className={`bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full ${project.featured ? "ring-2 ring-purple-500/30" : ""}`}
                >
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-purple-500/40 text-purple-400 text-xs">
                          {project.domain}
                        </Badge>
                        {project.featured && <Star className="h-4 w-4 text-yellow-400 fill-current" />}
                      </div>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          project.difficulty === "Beginner"
                            ? "bg-green-500/20 text-green-400"
                            : project.difficulty === "Intermediate"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {project.difficulty}
                      </Badge>
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-white">{project.title}</h3>
                    <p className="text-purple-400 text-sm mb-3">by {project.company}</p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                    {/* Stats */}
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        <span>{project.xp} XP</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-purple-500/10 text-purple-300 border-purple-500/20 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-500/10 text-gray-400 text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Link href="/coming-soon">
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                        <GitBranch className="mr-2 h-4 w-4" />
                        Pull Project
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your filters or search terms.</p>
            </div>
          )}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Projects Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our project system mirrors real-world development workflows, giving you authentic experience that
              employers value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Pull Project",
                description:
                  "Choose a project that matches your skill level and interests. Get access to requirements, resources, and timeline.",
                icon: GitBranch,
              },
              {
                step: "02",
                title: "Build & Submit",
                description:
                  "Work on the project using industry-standard tools. Get AI guidance and submit your solution via GitHub.",
                icon: ExternalLink,
              },
              {
                step: "03",
                title: "Get Verified",
                description:
                  "Receive feedback from AI copilots and industry mentors. Earn XP and add verified projects to your portfolio.",
                icon: Award,
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
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm text-purple-400 font-semibold mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Submit Your Work</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to submit a project? Share your GitHub repository link and get instant feedback from our AI
              copilots.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-2">
                <Input
                  placeholder="https://github.com/username/project"
                  className="bg-gray-900/50 border-purple-500/20 focus:border-purple-500/40"
                />
                <Link href="/coming-soon">
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Submit
                  </Button>
                </Link>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              Make sure your repository is public and includes a detailed README file.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
