"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw } from "lucide-react";
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

export default function RefundCancellationPolicyPage() {
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
            <RotateCcw className="h-12 w-12 sm:h-14 sm:w-14 text-purple-400 drop-shadow-lg" />
          </div>
          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Cancellation &amp; Refund Policy
            </h1>
          </div>
          {/* Policy Content */}
          <div className="text-left w-full max-w-5xl mx-auto mt-8">
            <p className="text-base text-gray-300 mb-8">
              At <strong>Aureeture AI</strong>, we strive to deliver the best
              experience in project-building, AI mentorship, and upskilling for
              students and professionals. We understand that plans can change, so
              please review our cancellation and refund policy below.
            </p>

            <PolicySection title="1. Refund Policy">
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  You may request a refund within{" "}
                  <strong>24 hours</strong> of your <strong>initial purchase</strong>{" "}
                  for both monthly and annual subscription plans.
                </li>
                <li>
                  Refunds are only issued if the platform was used for{" "}
                  <strong>less than 30 minutes</strong> during that 24-hour period.
                </li>
                <li>
                  Refunds are applicable only in cases of:
                  <ul className="list-disc ml-6 mt-1">
                    <li>Accidental purchases</li>
                    <li>
                      Technical errors that prevent access to platform features or
                      services as described
                    </li>
                  </ul>
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="2. Non-Refundable Circumstances">
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Requests made after 24 hours from the initial purchase</li>
                <li>
                  Platform usage of 30 minutes or more during the refund eligibility
                  period
                </li>
                <li>Subscriptions that began as free trial conversions</li>
                <li>
                  Dissatisfaction with content, learning experience, or expectations
                </li>
                <li>
                  Violation of our{" "}
                  <a
                    href="/terms-and-conditions"
                    className="text-purple-300 underline"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>Attempted misuse of the refund system</li>
              </ul>
            </PolicySection>

            <PolicySection title="3. How to Request a Refund">
              <ol className="list-decimal ml-5 mt-2 space-y-1">
                <li>
                  Email us at{" "}
                  <a
                    href="mailto:support@aureeture.com"
                    className="text-purple-300 underline"
                  >
                    support@aureeture.com
                  </a>
                </li>
                <li>
                  Use the subject line:{" "}
                  <strong>Refund Request – [Your Registered Email]</strong>
                </li>
                <li>
                  Include your account email address, date of purchase, and a brief
                  explanation of the issue
                </li>
              </ol>
              <p>
                Our team will review your request and respond within{" "}
                <strong>2 business days</strong>.
              </p>
            </PolicySection>

            <PolicySection title="4. Refund Processing Time">
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  If approved, refunds will be processed within{" "}
                  <strong>2 business days</strong>
                </li>
                <li>Funds will be returned to the original payment method</li>
                <li>
                  Depending on your payment provider, it may take{" "}
                  <strong>3–10 business days</strong> for the refund to appear in
                  your account
                </li>
                <li>
                  <strong>If refund is provided, it will be credited within 7 days</strong>
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="5. Subscription Cancellation">
              <p>You may cancel your subscription at any time:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  <strong>iOS Users:</strong> Visit your App Store settings &gt;
                  Subscriptions
                </li>
                <li>
                  <strong>Android Users:</strong> Open Google Play Store &gt;
                  Subscriptions
                </li>
                <li>
                  <strong>Web Users:</strong> Log into your dashboard and manage
                  billing settings
                </li>
              </ul>
              <div className="mt-2 text-gray-400 text-xs italic">
                Note: Cancellation prevents future charges but does{" "}
                <strong>not</strong> generate a refund. Your access to Aureeture
                will remain active until the end of the current billing cycle.
              </div>
            </PolicySection>

            <PolicySection title="6. Free Trial Conversions">
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  Subscriptions that auto-renew after a free trial are{" "}
                  <strong>not eligible for refunds</strong>
                </li>
                <li>
                  You must cancel at least{" "}
                  <strong>24 hours before your trial ends</strong> to avoid being
                  charged
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="7. Need Help?">
              <p>
                If you have questions about cancellation or refund eligibility, reach
                out to us:
                <br />
                📩 <strong>Email</strong>:{" "}
                <a
                  href="mailto:support@aureeture.com"
                  className="text-purple-300 underline"
                >
                  support@aureeture.com
                </a>
                <br />
                🕒 <strong>Support Hours</strong>: Monday to Saturday, 11:00 AM – 8:00
                PM IST
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
