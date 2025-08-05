"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Brain,
    Target,
    Users,
    Award,
    FileText,
    TrendingUp,
    GraduationCap,
    Clock,
    Zap,
} from "lucide-react"

// The form data interface is now minimal as no user info is collected on this page.
interface StudentPaymentFormData {
    plan: "bootcamp"
}

export default function StudentPaymentPage() {
    const [formData, setFormData] = useState<StudentPaymentFormData>({
        plan: "bootcamp",
    })

    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)

    // Simplified to only include the bootcamp plan
    const studentPlans = {
        bootcamp: {
            price: 1699,
            originalPrice: 2499, // Assuming an original price for context
            period: "event",
            savings: 800,
            duration: "3-Day GenAI & Entrepreneurship Bootcamp",
            badge: "Limited Seats",
            color: "from-pink-500 to-purple-500",
        },
    }

    const planFeatures = {
        bootcamp: [
            { icon: Brain, text: "24/7 AI Bootcamp Mentor" },
            { icon: Target, text: "Real-World Project Templates" },
            { icon: Users, text: "Team Formation & Collaboration" },
            { icon: Award, text: "Pitch Deck & Presentation Mastery" },
            { icon: TrendingUp, text: "Live Code & Idea Reviews" },
            { icon: FileText, text: "Connect with Industry Experts" },
            { icon: Zap, text: "Winning Strategy Sessions" },
            { icon: Clock, text: "Dedicated 48hr Support" },
        ],
    }

    const currentPlan = studentPlans.bootcamp
    const currentFeatures = planFeatures.bootcamp
    
    // Simplified price calculation
    const subtotal = currentPlan.price
    const tax = Math.round(subtotal * 0.18)
    const total = subtotal + tax

    const handlePayment = async () => {
        setIsProcessing(true)
        
        try {
            // The data sent to the backend is now minimal
            const response = await fetch('/api/initiate-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    plan: formData.plan,
                    amount: total * 100, // Amount in paise
                }),
            });

            const data = await response.json();
            
            if (data.success && data.paymentUrl) {
                // Redirect to PhonePe payment page
                window.location.href = data.paymentUrl;
            } else {
                console.error('Payment initiation failed:', data.message);
                setIsProcessing(false);
            }
        } catch (error) {
            console.error('Error initiating payment:', error);
            setIsProcessing(false);
        }
    }

    return (
        <div className="bg-black text-white min-h-screen pt-16">
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Bootcamp Intro Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <Card className="bg-black/30 backdrop-blur-sm border border-white/10">
                            <CardContent className="p-8">
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                                        <Zap className="h-10 w-10 text-white" />
                                    </div>
                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                        🏆 Aureeture's Bootcamp Success Package
                                    </h1>
                                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        Everything you need to dominate your next hackathon or innovation challenge. Go from idea to a winning pitch with our GenAI-powered platform.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                    {planFeatures.bootcamp.slice(0, 4).map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-4"
                                        >
                                            <feature.icon className="h-10 w-10 text-purple-400 mx-auto mb-3" />
                                            <p className="text-gray-300 text-sm">{feature.text}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Price Breakdown & CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="bg-gray-900/50 border-purple-500/20 max-w-2xl mx-auto">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6 text-white text-center">Order Summary</h3>

                                <div className="mb-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold text-white capitalize">Bootcamp Package</span>
                                        <Badge className={`bg-gradient-to-r ${currentPlan.color} text-white`}>
                                            {currentPlan.badge}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-gray-400">{currentPlan.duration}</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Bootcamp Price</span>
                                        <div className="flex items-baseline space-x-2">
                                            <span className="text-gray-500 line-through">₹{currentPlan.originalPrice}</span>
                                            <span className="text-white font-medium">₹{currentPlan.price}</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-700">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-400">Subtotal</span>
                                            <span className="text-white font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-gray-400">GST (18%)</span>
                                            <span className="text-white font-medium">₹{tax.toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-700 pt-4">
                                        <motion.div
                                            key={total}
                                            initial={{ scale: 1.05 }}
                                            animate={{ scale: 1 }}
                                            className="flex justify-between items-center text-xl font-bold"
                                        >
                                            <span className="text-white">Total Amount</span>
                                            <span className="text-green-400">₹{total.toLocaleString('en-IN')}</span>
                                        </motion.div>
                                    </div>
                                </div>

                                <div className="space-y-4 mt-8">
                                    <Button
                                        onClick={handlePayment}
                                        disabled={isProcessing}
                                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-6 text-lg"
                                    >
                                        {isProcessing ? (
                                            <div className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </div>
                                        ) : (
                                            `Pay Now - ₹${total.toLocaleString('en-IN')}`
                                        )}
                                    </Button>

                                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
                                        <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.498 14.382l-.002-.001a1 1 0 00-.579-.209h-.013c-.268 0-.529.102-.726.283l-2.088 1.85a10.3 10.3 0 01-4.406-4.407l1.85-2.087a.999.999 0 00.281-.727v-.014a1 1 0 00-.21-.578l-1.127-1.651a1 1 0 00-1.075-.388l-3.11.83a1 1 0 00-.693 1.21c.17.637.43 1.263.77 1.85 1.104 1.892 2.7 3.487 4.59 4.59.588.34 1.215.6 1.852.77a1 1 0 001.21-.694l.83-3.11z"></path><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"></path></svg>
                                        <span>Secure payment powered by PhonePe</span>
                                    </div>

                                    <p className="text-xs text-gray-500 text-center pt-2 border-t border-gray-800 mt-4">
                                        By proceeding, you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
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

                            <h3 className="text-2xl font-bold text-white mb-4">🎉 Welcome to the Bootcamp!</h3>
                            <p className="text-gray-300 mb-8">
                                Your payment was successful! You're all set for the bootcamp. Let's start building the future!
                            </p>

                            <div className="space-y-4">
                                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                                    Go to Your Dashboard
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => setShowSuccessModal(false)}
                                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                                >
                                    Close
                                </Button>
                            </div>
                            <p className="text-xs text-gray-500 mt-6">
                                Check your email for confirmation and next steps.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
