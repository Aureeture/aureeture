"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Undo2 } from "lucide-react";
import Link from "next/link";

const PolicySection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mt-6">
    <h3 className="text-lg font-semibold text-purple-300 mb-2">{title}</h3>
    <div className="text-sm text-gray-300 space-y-2">{children}</div>
  </section>
);

export default function ReturnPolicyPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-20 flex items-center justify-center">
      <div className="w-full max-w-5xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black border-4 border-gray-900 shadow-2xl rounded-2xl flex items-center justify-center mx-auto">
            <Undo2 className="h-12 w-12 sm:h-14 sm:w-14 text-purple-400 drop-shadow-lg" />
          </div>
          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Return Policy
            </h1>
          </div>
          {/* Policy Content */}
          <div className="text-left w-full max-w-5xl mx-auto mt-8">
            <PolicySection title="1. Digital Products Only">
              <p>
                Aureeture AI provides access to:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>AI Copilots and smart mentorship tools</li>
                <li>Collaborative project environments</li>
                <li>Personalized dashboards and learning content</li>
                <li>Digital assets and educational resources</li>
              </ul>
              <p className="mt-2">
                Because these are <strong>intangible, instantly accessible services</strong>, traditional returns do not apply.
              </p>
            </PolicySection>
            <PolicySection title="2. Refund Eligibility">
              <p>
                While returns are not possible for digital services, you may be eligible for a <strong>refund</strong> under specific circumstances, as outlined in our{" "}
                <a
                  href="https://aureeture.in/cancellation-and-refund-policy"
                  className="text-purple-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cancellation &amp; Refund Policy
                </a>
                :
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Accidental or duplicate purchases</li>
                <li>Critical technical issues that prevent access (and cannot be resolved by our support team)</li>
                <li>Requests made within the eligible timeframe and usage limits</li>
              </ul>
              <p className="mt-2 text-gray-400 text-xs italic">
                Refunds are not provided for dissatisfaction after substantial usage, or for content already consumed.
              </p>
            </PolicySection>
            <PolicySection title="3. Non-Returnable Scenarios">
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>You’ve accessed a significant portion of the platform or tools</li>
                <li>Your subscription converted from a free trial</li>
                <li>Your reason relates to change of mind or general dissatisfaction after usage</li>
                <li>The request falls outside the eligible refund window</li>
              </ul>
            </PolicySection>
            <PolicySection title="4. Subscriptions and Billing">
              <p>
                All subscriptions can be managed directly via your account settings, App Store, or Google Play (depending on the platform used for sign-up). Cancellation stops future billing but does <strong>not trigger a refund</strong> for the current billing cycle. You will retain access until the end of the subscription period.
              </p>
            </PolicySection>
            <PolicySection title="5. Need Help?">
              <p>
                If you have questions or concerns regarding your purchase, our team is happy to assist.
                <br />
                📩 Email us at: <a href="mailto:support@aureeture.com" className="text-purple-300 underline">support@aureeture.com</a>
                <br />
                🕒 Support Hours: Monday to Saturday, 11:00 AM – 8:00 PM IST
              </p>
            </PolicySection>
          </div>
          {/* Back Button */}
          <div className="text-center pt-8 pb-16">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-700 via-fuchsia-700 to-blue-700 hover:from-purple-800 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg w-full sm:w-auto"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
