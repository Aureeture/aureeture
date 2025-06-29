"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Check,
    CreditCard,
    Smartphone,
    Building2,
    Brain,
    Target,
    Users,
    Award,
    FileText,
    TrendingUp,
    X,
    CheckCircle,
    ArrowRight,
    GraduationCap,
    BookOpen,
    Coffee,
    Zap,
    Star,
    Clock,
} from "lucide-react"

interface StudentPaymentFormData {
    plan: "basic" | "premium" | "ultimate" | "bootcamp"
    paymentMethod: "upi" | "card" | "netbanking"
    upiId: string
    cardName: string
    cardNumber: string
    cardCvv: string
    cardExpiry: string
    discountCode: string
    studentId: string
    collegeName: string
}

export default function StudentPaymentPage() {
    const [formData, setFormData] = useState<StudentPaymentFormData>({
        plan: "premium",
        paymentMethod: "upi",
        upiId: "",
        cardName: "",
        cardNumber: "",
        cardCvv: "",
        cardExpiry: "",
        discountCode: "",
        studentId: "",
        collegeName: "",
    })

    const [discountApplied, setDiscountApplied] = useState(false)
    const [discountError, setDiscountError] = useState("")
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [studentVerified, setStudentVerified] = useState(false)

    const studentPlans = {
        basic: {
            price: 99,
            originalPrice: 199,
            period: "month",
            savings: 100,
            popular: false,
            duration: "3 months access",
            badge: "Starter",
            color: "from-green-500 to-emerald-500",
        },
        premium: {
            price: 199,
            originalPrice: 399,
            period: "month",
            savings: 200,
            popular: true,
            duration: "6 months access",
            badge: "Most Popular",
            color: "from-purple-500 to-blue-500",
        },
        ultimate: {
            price: 299,
            originalPrice: 599,
            period: "month",
            savings: 300,
            popular: false,
            duration: "12 months access",
            badge: "Best Value",
            color: "from-orange-500 to-red-500",
        },
        bootcamp: {
            price: 996,
            originalPrice: 1500,
            period: "event",
            savings: 504,
            popular: false,
            duration: "3 Days Bootcamp",
            badge: "Limited Time",
            color: "from-gray-700 to-gray-900",
        },
    }

    const planFeatures = {
        basic: [
            { icon: Brain, text: "2 AI Copilot Sessions/week", included: true },
            { icon: BookOpen, text: "Basic Learning Path", included: true },
            { icon: Target, text: "5 Practice Projects", included: true },
            { icon: Users, text: "Community Access", included: true },
            { icon: Award, text: "Basic Certificates", included: true },
            { icon: TrendingUp, text: "Progress Tracking", included: false },
            { icon: FileText, text: "1:1 Mentor Sessions", included: false },
            { icon: Zap, text: "Interview Prep", included: false },
        ],
        premium: [
            { icon: Brain, text: "Unlimited AI Copilot Access", included: true },
            { icon: BookOpen, text: "Personalized Learning Path", included: true },
            { icon: Target, text: "15 Real-World Projects", included: true },
            { icon: Users, text: "Premium Community", included: true },
            { icon: Award, text: "Verified Certificates", included: true },
            { icon: TrendingUp, text: "Advanced Analytics", included: true },
            { icon: FileText, text: "2 Mentor Sessions/month", included: true },
            { icon: Zap, text: "AI Interview Simulator", included: false },
        ],
        ultimate: [
            { icon: Brain, text: "Unlimited AI Copilot Access", included: true },
            { icon: BookOpen, text: "Custom Learning Path", included: true },
            { icon: Target, text: "Unlimited Projects", included: true },
            { icon: Users, text: "Exclusive Student Network", included: true },
            { icon: Award, text: "Industry Certificates", included: true },
            { icon: TrendingUp, text: "Career Analytics Dashboard", included: true },
            { icon: FileText, text: "Weekly Mentor Sessions", included: true },
            { icon: Zap, text: "Full Interview Prep Suite", included: true },
        ],
        bootcamp: [
            { icon: Brain, text: "24/7 AI Bootcamp Mentor", included: true },
            { icon: Target, text: "Bootcamp Project Templates", included: true },
            { icon: Users, text: "Team Formation Support", included: true },
            { icon: Award, text: "Pitch Deck Templates", included: true },
            { icon: TrendingUp, text: "Real-time Code Reviews", included: true },
            { icon: FileText, text: "Expert Judge Connections", included: true },
            { icon: Zap, text: "Winning Strategy Sessions", included: true },
            { icon: Clock, text: "48hr Support Guarantee", included: true },
        ],
    }

    const currentPlan = studentPlans[formData.plan]
    const currentFeatures = planFeatures[formData.plan]
    const studentDiscount = studentVerified ? 0.2 : 0 // 20% student discount
    const discountAmount = discountApplied ? Math.round(currentPlan.price * 0.15) : 0 // 15% promo discount
    const studentDiscountAmount = Math.round(currentPlan.price * studentDiscount)
    const subtotal = currentPlan.price - discountAmount - studentDiscountAmount
    const tax = Math.round(subtotal * 0.18)
    const total = subtotal + tax

    const handleDiscountApply = () => {
        const validCodes = ["STUDENT15", "NEWBIE", "WELCOME15"]
        if (validCodes.includes(formData.discountCode.toUpperCase())) {
            setDiscountApplied(true)
            setDiscountError("")
        } else if (formData.discountCode === "") {
            setDiscountError("Please enter a discount code")
        } else {
            setDiscountError("Invalid discount code")
            setDiscountApplied(false)
        }
    }

    const handleStudentVerification = () => {
        if (formData.studentId && formData.collegeName) {
            setStudentVerified(true)
        }
    }

    const handlePayment = async () => {
        setIsProcessing(true)
        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false)
            setShowSuccessModal(true)
        }, 2000)
    }

    const formatCardNumber = (value: string) => {
        const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
        const matches = v.match(/\d{4,16}/g)
        const match = (matches && matches[0]) || ""
        const parts = []
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4))
        }
        if (parts.length) {
            return parts.join(" ")
        } else {
            return v
        }
    }

    return (
        <div className="bg-black text-white min-h-screen pt-16">
            {/* Student Hero Section */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30 mb-6 px-6 py-3 text-base">
                            <GraduationCap className="w-5 h-5 mr-2" />
                            Student Special Pricing
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Launch Your Career
                            <br />
                            <span className="text-white">While You Study</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
                            Special student pricing designed for college budgets. Get AI-powered career guidance, real projects, and
                            industry mentorship at prices that won't break the bank.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center space-x-2">
                                <Coffee className="h-5 w-5 text-green-400" />
                                <span className="text-gray-300">Less than a coffee per day</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="h-5 w-5 text-blue-400" />
                                <span className="text-gray-300">Flexible monthly plans</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Star className="h-5 w-5 text-purple-400" />
                                <span className="text-gray-300">Student-only community</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Student Plan Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {Object.entries(studentPlans).map(([key, plan], index) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative ${formData.plan === key ? "scale-105" : ""} transition-transform duration-300`}
                            >
                                <Card
                                    className={`cursor-pointer transition-all duration-300 h-full flex flex-col ${formData.plan === key
                                            ? key === "bootcamp"
                                                ? "border-gray-500/80 bg-gray-700/30"
                                                : "border-purple-500/60 bg-purple-500/10"
                                            : key === "bootcamp"
                                                ? "border-gray-600/40 hover:border-white/60 hover:bg-white/5 bg-gray-800/20"
                                                : "border-purple-500/20 hover:border-purple-500/40"
                                        } ${plan.popular ? "ring-2 ring-purple-500/30" : ""}`}
                                    onClick={() =>
                                        setFormData({ ...formData, plan: key as "basic" | "premium" | "ultimate" | "bootcamp" })
                                    }
                                >
                                    <CardContent className="p-6 text-center flex flex-col h-full">
                                        {(plan.popular || key === "bootcamp") && (
                                            <Badge
                                                className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${key === "bootcamp"
                                                        ? "bg-gradient-to-r from-gray-700 to-gray-900 text-gray-200"
                                                        : "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                                                    }`}
                                            >
                                                {plan.badge}
                                            </Badge>
                                        )}

                                        <div
                                            className={`w-14 h-14 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                                        >
                                            {key === "bootcamp" ? (
                                                <Zap className="h-7 w-7 text-white" />
                                            ) : (
                                                <GraduationCap className="h-7 w-7 text-white" />
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 capitalize text-white">
                                            {key === "bootcamp" ? "Bootcamp Prep" : key}
                                        </h3>
                                        <p className="text-gray-400 mb-4 text-sm">{plan.duration}</p>

                                        <div className="mb-4 flex-grow">
                                            <div className="flex items-center justify-center space-x-2 mb-2">
                                                <span className="text-3xl font-bold text-white">₹{plan.price}</span>
                                                <span className="text-gray-400 text-sm">/{plan.period}</span>
                                            </div>
                                            <div className="flex items-center justify-center space-x-2 mb-3">
                                                <span className="text-gray-500 line-through text-sm">₹{plan.originalPrice}</span>
                                                <span
                                                    className={`font-semibold text-sm ${key === "bootcamp" ? "text-gray-400" : "text-green-400"}`}
                                                >
                                                    Save ₹{plan.savings}
                                                </span>
                                            </div>
                                            {key === "bootcamp" && (
                                                <p className="text-xs text-gray-400">⚡ Use promo code for ₹999 final price</p>
                                            )}
                                        </div>

                                        <div className="space-y-2 mb-6 flex-grow">
                                            {planFeatures[key as keyof typeof planFeatures].slice(0, 4).map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-2 text-left">
                                                    <Check
                                                        className={`h-3 w-3 flex-shrink-0 ${key === "bootcamp" ? "text-gray-400" : "text-green-400"}`}
                                                    />
                                                    <span className="text-gray-300 text-xs">{feature.text}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Button
                                            className={`w-full mt-auto ${formData.plan === key
                                                    ? key === "bootcamp"
                                                        ? "bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white"
                                                        : "bg-gradient-to-r from-purple-500 to-blue-500"
                                                    : "bg-gray-700 hover:bg-gray-600"
                                                }`}
                                        >
                                            {formData.plan === key ? "Selected" : "Choose Plan"}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bootcamp Special Section */}
            {formData.plan === "Bootcamp" && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <Card className="bg-black/30 backdrop-blur-sm border border-white/10">
                        <CardContent className="p-8">
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                                    <Zap className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">🏆 Bootcamp Success Package</h3>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                    Everything you need to dominate your next Bootcamp! From ideation to presentation, our AI mentors and
                                    expert resources will guide you to victory.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        icon: Brain,
                                        title: "AI Strategy Coach",
                                        description: "24/7 AI mentor for ideation, problem-solving, and technical guidance",
                                    },
                                    {
                                        icon: Users,
                                        title: "Team Building",
                                        description: "Connect with skilled teammates and form winning combinations",
                                    },
                                    {
                                        icon: Target,
                                        title: "Project Templates",
                                        description: "Pre-built templates for popular bootcamp categories and themes",
                                    },
                                    {
                                        icon: Award,
                                        title: "Pitch Mastery",
                                        description: "Perfect your presentation with expert feedback and templates",
                                    },
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-600/30"
                                    >
                                        <feature.icon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                        <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                                        <p className="text-gray-400 text-sm">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 bg-gradient-to-r from-gray-800/20 to-gray-900/30 rounded-lg border border-gray-600/30">
                                <div className="flex items-center justify-center space-x-4 text-gray-300">
                                    <Clock className="h-5 w-5" />
                                    <span className="font-semibold">Apply Promo Code to Avail Offers – Final Price ₹999 (Incl. GST)</span>
                                    <Clock className="h-5 w-5" />
                                </div>

                                <p className="text-center text-gray-400 text-sm mt-2">
                                Perfect for upcoming bootcamp, coding competitions, and innovation challenges
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            )}

            {/* Payment Form Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Payment Form */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Student Verification */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card className="bg-gray-900/50 border-green-500/20">
                                    <CardContent className="p-8">
                                        <div className="flex items-center space-x-3 mb-6">
                                            <GraduationCap className="h-6 w-6 text-green-400" />
                                            <h3 className="text-2xl font-bold text-white">Student Verification</h3>
                                            {studentVerified && <Badge className="bg-green-500/20 text-green-300">Verified</Badge>}
                                        </div>
                                        <p className="text-gray-300 mb-6">
                                            Verify your student status to unlock an additional 20% discount on all plans!
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div>
                                                <Label htmlFor="studentId" className="text-gray-300">
                                                    Student ID
                                                </Label>
                                                <Input
                                                    id="studentId"
                                                    placeholder="Your student ID"
                                                    value={formData.studentId}
                                                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                                                    className="bg-gray-800/50 border-gray-600 focus:border-green-500 text-white mt-2"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="collegeName" className="text-gray-300">
                                                    College/University
                                                </Label>
                                                <Input
                                                    id="collegeName"
                                                    placeholder="Your institution name"
                                                    value={formData.collegeName}
                                                    onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                                                    className="bg-gray-800/50 border-gray-600 focus:border-green-500 text-white mt-2"
                                                />
                                            </div>
                                        </div>
                                        <Button
                                            onClick={handleStudentVerification}
                                            disabled={!formData.studentId || !formData.collegeName || studentVerified}
                                            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                                        >
                                            {studentVerified ? "Verified ✓" : "Verify Student Status"}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Payment Method Selection */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <Card className="bg-gray-900/50 border-purple-500/20">
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-bold mb-6 text-white">Payment Method</h3>
                                        <RadioGroup
                                            value={formData.paymentMethod}
                                            onValueChange={(value: "upi" | "card" | "netbanking") =>
                                                setFormData({ ...formData, paymentMethod: value })
                                            }
                                            className="space-y-4"
                                        >
                                            <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700 hover:border-purple-500/40 transition-colors">
                                                <RadioGroupItem value="upi" id="upi" />
                                                <Smartphone className="h-5 w-5 text-purple-400" />
                                                <Label htmlFor="upi" className="flex-1 cursor-pointer">
                                                    UPI Payment
                                                </Label>
                                                <Badge variant="outline" className="border-green-500/40 text-green-400">
                                                    Instant
                                                </Badge>
                                            </div>
                                            <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700 hover:border-purple-500/40 transition-colors">
                                                <RadioGroupItem value="card" id="card" />
                                                <CreditCard className="h-5 w-5 text-purple-400" />
                                                <Label htmlFor="card" className="flex-1 cursor-pointer">
                                                    Debit/Credit Card
                                                </Label>
                                                <Badge variant="outline" className="border-blue-500/40 text-blue-400">
                                                    Secure
                                                </Badge>
                                            </div>
                                            <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700 hover:border-purple-500/40 transition-colors">
                                                <RadioGroupItem value="netbanking" id="netbanking" />
                                                <Building2 className="h-5 w-5 text-purple-400" />
                                                <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                                                    Net Banking
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Payment Details */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Card className="bg-gray-900/50 border-purple-500/20">
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-bold mb-6 text-white">Payment Details</h3>

                                        <AnimatePresence mode="wait">
                                            {formData.paymentMethod === "upi" && (
                                                <motion.div
                                                    key="upi"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-4"
                                                >
                                                    <div>
                                                        <Label htmlFor="upiId" className="text-gray-300">
                                                            UPI ID
                                                        </Label>
                                                        <Input
                                                            id="upiId"
                                                            placeholder="yourname@upi"
                                                            value={formData.upiId}
                                                            onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                                                            className="bg-gray-800/50 border-gray-600 focus:border-purple-500 text-white mt-2"
                                                        />
                                                        <p className="text-xs text-gray-500 mt-2">
                                                            Popular UPI apps: PhonePe, Google Pay, Paytm, BHIM
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {formData.paymentMethod === "card" && (
                                                <motion.div
                                                    key="card"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-4"
                                                >
                                                    <div>
                                                        <Label htmlFor="cardName" className="text-gray-300">
                                                            Cardholder Name
                                                        </Label>
                                                        <Input
                                                            id="cardName"
                                                            placeholder="As written on card"
                                                            value={formData.cardName}
                                                            onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                                                            className="bg-gray-800/50 border-gray-600 focus:border-purple-500 text-white mt-2"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label htmlFor="cardNumber" className="text-gray-300">
                                                            Card Number
                                                        </Label>
                                                        <Input
                                                            id="cardNumber"
                                                            placeholder="1234 5678 9012 3456"
                                                            value={formData.cardNumber}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, cardNumber: formatCardNumber(e.target.value) })
                                                            }
                                                            maxLength={19}
                                                            className="bg-gray-800/50 border-gray-600 focus:border-purple-500 text-white mt-2"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <Label htmlFor="cardExpiry" className="text-gray-300">
                                                                Expiry Date
                                                            </Label>
                                                            <Input
                                                                id="cardExpiry"
                                                                placeholder="MM/YY"
                                                                value={formData.cardExpiry}
                                                                onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                                                                className="bg-gray-800/50 border-gray-600 focus:border-purple-500 text-white mt-2"
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="cardCvv" className="text-gray-300">
                                                                CVV
                                                            </Label>
                                                            <Input
                                                                id="cardCvv"
                                                                placeholder="123"
                                                                value={formData.cardCvv}
                                                                onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
                                                                maxLength={3}
                                                                className="bg-gray-800/50 border-gray-600 focus:border-purple-500 text-white mt-2"
                                                            />
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {formData.paymentMethod === "netbanking" && (
                                                <motion.div
                                                    key="netbanking"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="text-center py-8"
                                                >
                                                    <Building2 className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                                                    <p className="text-gray-300 mb-2">
                                                        You will be redirected to your bank's secure payment page.
                                                    </p>
                                                    <p className="text-sm text-gray-500">Supports all major Indian banks</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Discount Code */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Card className="bg-gray-900/50 border-purple-500/20">
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-bold mb-6 text-white">Promo Code</h3>
                                        {formData.plan === "Bootcamp" && (
                                            <div className="mb-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                                                <p className="text-yellow-300 text-sm font-medium">
                                                    💡 Apply the promo code to get an exclusive discount!                                                </p>
                                            </div>
                                        )}
                                        <div className="flex space-x-4">
                                            <Input
                                                placeholder="Enter promo code (try: STUDENT15)"
                                                value={formData.discountCode}
                                                onChange={(e) => setFormData({ ...formData, discountCode: e.target.value })}
                                                className="bg-gray-800/50 border-gray-600 focus:border-purple-500 text-white flex-1"
                                            />
                                            <Button
                                                onClick={handleDiscountApply}
                                                variant="outline"
                                                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                                            >
                                                Apply
                                            </Button>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                                                STUDENT15
                                            </Badge>
                                            <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                                                NEWBIE
                                            </Badge>
                                            <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                                                WELCOME15
                                            </Badge>
                                        </div>
                                        <AnimatePresence>
                                            {discountApplied && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="flex items-center space-x-2 mt-4 text-green-400"
                                                >
                                                    <CheckCircle className="h-5 w-5" />
                                                    <span>
                                                        Applied! 15% off
                                                        {formData.plan === "bootcamp" && " - Final price now ₹999!"}
                                                    </span>
                                                </motion.div>
                                            )}
                                            {discountError && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="flex items-center space-x-2 mt-4 text-red-400"
                                                >
                                                    <X className="h-5 w-5" />
                                                    <span>{discountError}</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Price Breakdown - Sticky */}
                        <div className="lg:sticky lg:top-24 lg:h-fit">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <Card className="bg-gray-900/50 border-purple-500/20">
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-bold mb-6 text-white">Order Summary</h3>

                                        {/* Selected Plan */}
                                        <div className="mb-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-semibold text-white capitalize">{formData.plan} Plan</span>
                                                <Badge className={`bg-gradient-to-r ${currentPlan.color} text-white`}>
                                                    {currentPlan.badge}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-gray-400">{currentPlan.duration}</p>
                                        </div>

                                        {/* Features Preview */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                                            <div className="space-y-2">
                                                {currentFeatures.slice(0, 5).map((feature, index) => (
                                                    <div key={index} className="flex items-center space-x-2">
                                                        <Check className="h-4 w-4 text-green-400" />
                                                        <span className="text-sm text-gray-300">{feature.text}</span>
                                                    </div>
                                                ))}
                                                {currentFeatures.length > 5 && (
                                                    <p className="text-sm text-purple-400">+{currentFeatures.length - 5} more features</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Price Breakdown */}
                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-300">{formData.plan} Plan</span>
                                                <span className="text-white font-semibold">₹{currentPlan.price}</span>
                                            </div>

                                            {studentVerified && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    className="flex justify-between items-center text-green-400"
                                                >
                                                    <span>Student Discount (20%)</span>
                                                    <span>-₹{studentDiscountAmount}</span>
                                                </motion.div>
                                            )}

                                            {discountApplied && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    className="flex justify-between items-center text-green-400"
                                                >
                                                    <span>Promo Discount (15%)</span>
                                                    <span>-₹{discountAmount}</span>
                                                </motion.div>
                                            )}

                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-300">GST (18%)</span>
                                                <span className="text-white">₹{tax}</span>
                                            </div>

                                            <div className="border-t border-gray-700 pt-4">
                                                <motion.div
                                                    key={total}
                                                    initial={{ scale: 1.05 }}
                                                    animate={{ scale: 1 }}
                                                    className="flex justify-between items-center text-xl font-bold"
                                                >
                                                    <span className="text-white">Total</span>
                                                    <span className="text-green-400">₹{total}</span>
                                                </motion.div>
                                                {formData.plan === "bootcamp" && discountApplied && total === 999 && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        className="mt-2 p-2 bg-green-500/10 border border-green-500/20 rounded-lg"
                                                    >
                                                        <p className="text-green-400 text-sm font-medium text-center">
                                                            🎉 Perfect! Final price is exactly ₹999
                                                        </p>
                                                    </motion.div>
                                                )}
                                                <p className="text-sm text-gray-500 mt-2">
                                                    That's just ₹{Math.round(total / 30)}/day for a month!
                                                </p>
                                            </div>
                                        </div>

                                        <Button
                                            onClick={handlePayment}
                                            disabled={isProcessing}
                                            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-4 text-lg"
                                        >
                                            {isProcessing ? (
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    <span>Processing...</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center space-x-2">
                                                    <span>Start Learning Now</span>
                                                    <ArrowRight className="h-5 w-5" />
                                                </div>
                                            )}
                                        </Button>

                                        <p className="text-xs text-gray-500 text-center mt-4">
                                            🔒 Secure payment • 7-day money-back guarantee
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccessModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-gray-900 border border-green-500/20 rounded-2xl p-8 max-w-md w-full text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                                className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <GraduationCap className="h-10 w-10 text-white" />
                            </motion.div>

                            <h3 className="text-2xl font-bold text-white mb-4">🎉 Welcome to Aureeture!</h3>
                            <p className="text-gray-300 mb-8">
                                Your payment was successful! You now have access to your {formData.plan} plan. Let's start building your
                                dream career!
                            </p>

                            <div className="space-y-4">
                                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                                    Start Learning Journey
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => setShowSuccessModal(false)}
                                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                                >
                                    Explore Features
                                </Button>
                            </div>

                            <p className="text-xs text-gray-500 mt-6">
                                Check your email for login credentials and getting started guide
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
