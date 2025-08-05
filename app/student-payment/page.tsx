"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    BrainCircuit,
    Lightbulb,
    Rocket,
    Users,
    TrendingUp,
    Award,
    ShieldCheck,
    ArrowRight,
    Zap,
    GraduationCap,
    Star,
} from "lucide-react"

export default function StudentPaymentPage() {
    const [isProcessing, setIsProcessing] = useState(false)

    const bootcampPlan = {
        price: 1699,
        originalPrice: 2999,
        duration: "3-Day GenAI & Entrepreneurship Bootcamp",
        badge: "Limited Seats",
    }

    // The final amount is now simply the plan's price
    const totalAmount = bootcampPlan.price

    const handleRegistrationRedirect = () => {
        setIsProcessing(true)
        // Redirect to the external registration page
        window.location.href = "https://konfhub.com/aureeture-ai-3-day-innovation-career-discovery-bootcamp"
    }
    
    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    }

    const valueProps = [
        {
            icon: Lightbulb,
            title: "AI-Powered Ideation",
            desc: "Learn to leverage GenAI to discover and validate groundbreaking startup ideas.",
        },
        {
            icon: Rocket,
            title: "Build an MVP in Days",
            desc: "Get hands-on experience turning your concept into a functional Minimum Viable Product.",
        },
        {
            icon: Award,
            title: "Master the Winning Pitch",
            desc: "Craft and deliver a compelling pitch that captivates judges and investors.",
        },
    ]

    const whoIsThisFor = [
        {
            icon: GraduationCap,
            title: "The Aspiring Founder",
            desc: "You have the ambition to start your own company and need the roadmap to get started.",
        },
        {
            icon: Zap,
            title: "The Curious Innovator",
            desc: "You love building, creating, and want to explore how AI can bring your ideas to life.",
        },
        {
            icon: Star,
            title: "The Future Leader",
            desc: "You're eager to gain leadership, product management, and real-world project experience.",
        },
    ]

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">
            {/* Background decorative gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10">
                {/* Hero Section */}
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center py-24 sm:py-32 px-4"
                >
                    <Badge variant="outline" className="border-purple-400/50 text-purple-300 bg-purple-900/20 text-sm px-4 py-1 mb-4">
                        GenAI & Entrepreneurship Bootcamp
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                        Go From <span className="bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">Idea to MVP</span> in 3 Days
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 mb-10">
                        Join India's most innovative student bootcamp. Stop just learning about AI—start building with it. Launch a real project, network with founders, and supercharge your career.
                    </p>
                    <Button onClick={scrollToPricing} size="lg" className="bg-white text-black font-bold hover:bg-gray-200 text-lg px-10 py-7 rounded-full">
                        Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.section>

                {/* Value Proposition Section */}
                <section className="py-16 sm:py-24 px-4 bg-white/5">
                    <div className="max-w-7xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What You'll Build & Master</h2>
                            <p className="max-w-2xl mx-auto text-gray-400">
                                This isn't a lecture series. It's a hands-on sprint to build tangible skills and a portfolio piece.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {valueProps.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <Card className="bg-gray-900/50 border-purple-500/20 h-full text-center p-8 transition-all duration-300 hover:border-purple-500/60 hover:scale-105">
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-sky-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <item.icon className="h-8 w-8 text-sky-300" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who is this for Section */}
                 <section className="py-16 sm:py-24 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Is This Bootcamp For You?</h2>
                            <p className="max-w-2xl mx-auto text-gray-400">If you fit one of these profiles, you're in the right place.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {whoIsThisFor.map((card, i) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-gray-900/30 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center"
                                >
                                    <card.icon className="h-10 w-10 text-purple-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                                    <p className="text-gray-400">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Pricing & CTA Section */}
                <section id="pricing" className="py-16 sm:py-24 px-4">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-gradient-to-br from-gray-900 to-black border-purple-500/30">
                                <CardContent className="p-8 sm:p-12 text-center">
                                    <h2 className="text-3xl font-bold mb-4">Get Your All-Access Pass</h2>
                                    <p className="text-gray-400 mb-8">One price, unlimited possibilities. Seats are filling up fast!</p>

                                    <div className="my-8">
                                        <span className="text-5xl font-bold text-white">₹{totalAmount.toLocaleString('en-IN')}</span>
                                        <span className="text-xl text-gray-500 line-through ml-2">₹{bootcampPlan.originalPrice}</span>
                                        <p className="text-purple-400 font-semibold mt-2">Special Student Offer</p>
                                    </div>
                                    
                                    <ul className="space-y-3 text-left my-10 max-w-sm mx-auto">
                                        {[
                                            "3 Days of Live, Interactive Sessions",
                                            "Full Access to GenAI Tools & Mentors",
                                            "Team Formation & Networking Events",
                                            "Certificate of Completion",
                                            "Entry to the Aureeture Founders Club",
                                        ].map(feature => (
                                            <li key={feature} className="flex items-center">
                                                <ShieldCheck className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        onClick={handleRegistrationRedirect}
                                        disabled={isProcessing}
                                        className="w-full bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-700 hover:to-sky-700 text-white font-bold py-7 text-xl rounded-lg"
                                    >
                                        {isProcessing ? (
                                            <div className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Redirecting...
                                            </div>
                                        ) : (
                                            `Pay & Register (₹${totalAmount.toLocaleString('en-IN')})`
                                        )}
                                    </Button>
                                    <p className="text-xs text-gray-500 mt-4">
                                        You will be redirected to our secure payment partner, KonfHub.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    )
}
