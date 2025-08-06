"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion" // Assuming you have this from shadcn/ui
import {
    Lightbulb,
    Rocket,
    ShieldCheck,
    ArrowRight,
    Zap,
    Star,
    CalendarDays,
    BotMessageSquare,
    ClipboardCheck,
    BarChart3,
    Compass,
    Quote,
    Sparkles
} from "lucide-react"

// Component for Star Rating
const StarRating = ({ rating = 5 }) => (
    <div className="flex items-center">
        {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
        ))}
    </div>
);


export default function StudentPaymentPage() {
    const [isProcessing, setIsProcessing] = useState(false)

    const bootcampPlan = {
        price: 1699,
        originalPrice: 2999,
        duration: "3-Day Innovation & Career Discovery Bootcamp",
        badge: "FutureMinds Series",
    }

    const totalAmount = bootcampPlan.price

    const handleRegistrationRedirect = () => {
        setIsProcessing(true)
        window.location.href = "https://konfhub.com/aureeture-ai-3-day-innovation-career-discovery-bootcamp"
    }
    
    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    }

    const bootcampJourney = [
        {
            icon: ClipboardCheck,
            title: "Day 1: Career Clarity & Refinement",
            desc: "Kickstart your journey with personalized career guidance. We'll help you refine your resume and optimize your LinkedIn profile to stand out.",
        },
        {
            icon: Zap,
            title: "Day 2: Live Domain Sessions & AI Mentorship",
            desc: "Dive deep into your chosen domain with industry experts and get 24/7 support from our domain-specific AI chatbots for any questions.",
        },
        {
            icon: Rocket,
            title: "Day 3: Roadmap & Placement Strategy",
            desc: "Build your personalized career roadmap and create a concrete strategy for landing top internships and placements with our expert guidance.",
        },
    ]

    const ecosystemFeatures = [
        {
            icon: BarChart3,
            title: "AI-Powered Career Roadmaps",
            desc: "Your journey continues with a tailored roadmap, with weekly checkpoints and growth tracking to keep you on target."
        },
        {
            icon: BotMessageSquare,
            title: "24/7 Domain AI Chatbots",
            desc: "Get instant help with interview prep, project suggestions, and complex concepts from our domain-specific AI mentors."
        },
        {
            icon: CalendarDays,
            title: "Daily Streaks & Habit Builder",
            desc: "Build consistency with daily learning tasks and quizzes designed to create long-term habits and keep you engaged."
        }
    ]

    const testimonials = [
        {
            name: "Priya Sharma",
            college: "IIT Bombay",
            quote: "The Aureeture bootcamp was a game-changer. I went from having a vague idea to a clear career path and a project I'm proud of. The AI mentors are incredibly helpful!",
        },
        {
            name: "Rohan Gupta",
            college: "BITS Pilani",
            quote: "I've been to many workshops, but none had this level of practical application. The focus on building a real roadmap and the post-bootcamp support is unmatched.",
        },
    ]

    const faqs = [
        {
            question: "Is this bootcamp suitable for beginners?",
            answer: "Absolutely! This bootcamp is designed for students at all levels. Whether you're just starting to explore career options or have some experience, our personalized approach ensures you get the maximum value."
        },
        {
            question: "What happens after the 3-day bootcamp ends?",
            answer: "The bootcamp is just your entry point into the Aureeture ecosystem. You'll retain access to key features like our AI chatbots, community platform, and your personalized career roadmap to ensure your growth continues."
        },
        {
            question: "Will I receive a certificate?",
            answer: "Yes, upon successful completion of the bootcamp and the associated project work, you will receive a verified certificate from Aureeture AI that you can share on your LinkedIn profile and resume."
        },
        {
            question: "What if I can't attend one of the live sessions?",
            answer: "We understand that schedules can be tight. All live sessions will be recorded and made available to registered participants, so you can catch up on anything you miss."
        },
    ]

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">
            {/* Sticky Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center space-x-2">
                            <Sparkles className="h-7 w-7 text-purple-400" />
                            <span className="text-xl font-bold">Aureeture AI</span>
                        </div>
                        <Button onClick={scrollToPricing} className="bg-white text-black font-semibold hover:bg-gray-200 hidden sm:flex">
                            Reserve Your Spot
                        </Button>
                    </div>
                </div>
            </header>

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <main className="relative z-10 pt-20"> {/* Add padding-top to avoid content being hidden by header */}
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center pt-20 pb-24 sm:pt-24 sm:pb-32 px-4"
                >
                    <Badge variant="outline" className="border-purple-400/50 text-purple-300 bg-purple-900/20 text-sm px-4 py-1 mb-4">
                        The Aureeture AI: FutureMinds Bootcamp Series
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                        Unlock Your <span className="bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">Career Potential</span> in 3 Days
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 mb-10">
                        This isn't just a bootcamp; it's your entry into Aureeture's 360° career ecosystem. Go from zero to a clear career strategy with personalized roadmaps, AI mentors, and a community of innovators.
                    </p>
                    <Button onClick={scrollToPricing} size="lg" className="bg-white text-black font-bold hover:bg-gray-200 text-lg px-10 py-7 rounded-full">
                        Reserve Your Spot <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.section>

                <section className="py-16 sm:py-24 px-4 bg-white/[.03]">
                    <div className="max-w-7xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your 3-Day Transformation</h2>
                            <p className="max-w-2xl mx-auto text-gray-400">
                                A hands-on sprint where you'll gain practical skills and a clear plan for your future.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {bootcampJourney.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <Card className="bg-gray-900/50 border-white/10 h-full text-center p-8 transition-all duration-300 hover:border-purple-500/60 hover:scale-105 hover:shadow-[0_0_25px_theme(colors.purple.500/0.3)]">
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

                <section className="py-16 sm:py-24 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your Lifelong Career Partner</h2>
                            <p className="max-w-2xl mx-auto text-gray-400">Your pass unlocks continuous growth on the Aureeture AI platform.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {ecosystemFeatures.map((card, i) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }}
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

                <section className="py-16 sm:py-24 px-4 bg-white/[.03]">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Don't Just Take Our Word For It</h2>
                             <p className="max-w-2xl mx-auto text-gray-400">See what students from top colleges are saying about Aureeture.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {testimonials.map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }}
                                >
                                    <Card className="bg-gray-900/50 border-white/10 h-full p-8">
                                        <div className="flex items-center mb-4">
                                            <Quote className="h-8 w-8 text-purple-400/50 -ml-2" />
                                        </div>
                                        <p className="text-gray-300 mb-6 italic">"{t.quote}"</p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-bold text-white">{t.name}</p>
                                                <p className="text-sm text-gray-400">{t.college}</p>
                                            </div>
                                            <StarRating />
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 sm:py-24 px-4">
                    <div className="max-w-3xl mx-auto">
                         <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        </motion.div>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                                    <AccordionTrigger className="text-left text-lg hover:no-underline font-semibold">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 text-base pt-2">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
                
                <section id="pricing" className="py-16 sm:py-24 px-4">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-gradient-to-br from-gray-900 to-black border-purple-500/30">
                                <CardContent className="p-8 sm:p-12 text-center">
                                    <h2 className="text-3xl font-bold mb-4">Ready to Build Your Future?</h2>
                                    <p className="text-gray-400 mb-8">Seats are limited to ensure a high-quality, personalized experience. Reserve your spot now!</p>

                                    <div className="my-8">
                                        <span className="text-5xl font-bold text-white">₹{totalAmount.toLocaleString('en-IN')}</span>
                                        <span className="text-xl text-gray-500 line-through ml-2">₹{bootcampPlan.originalPrice}</span>
                                        <p className="text-purple-400 font-semibold mt-2">{bootcampPlan.badge}</p>
                                    </div>
                                    
                                    <ul className="space-y-3 text-left my-10 max-w-sm mx-auto">
                                       {[
                                            "3 Days of Live, Interactive Bootcamp Sessions",
                                            "Personalized Resume & LinkedIn Review",
                                            "AI-Powered Mock Interview Sessions",
                                            "Your Personalized Career Roadmap",
                                            "Ongoing access to Domain-Specific AI Chatbots",
                                            "Entry to the Aureeture Innovators Circle",
                                            "Verified Certificate of Completion"
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
                                        You will be redirected to our secure registration partner, KonfHub.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    )
}
