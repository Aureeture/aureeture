"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Truck } from "lucide-react";
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

export default function ShippingPolicyPage() {
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
            <Truck className="h-12 w-12 sm:h-14 sm:w-14 text-purple-400 drop-shadow-lg" />
          </div>
          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Shipping Policy
            </h1>
          </div>
          {/* Policy Content */}
          <div className="text-left w-full max-w-5xl mx-auto mt-8">
            <p className="text-base text-gray-300 mb-8">
              At <strong>Aureeture AI</strong>, most of our services are digital in nature and do not involve physical shipping. However, in case any physical product (such as merchandise, kits, or special workshop materials) is ordered through our Platform, the following policy applies:
            </p>
            <PolicySection title="1. Shipping Method">
              <p>
                All physical orders are shipped via <strong>registered domestic courier services</strong> and/or <strong>India Post (Speed Post)</strong>. We strive to use reliable logistics partners to ensure timely delivery of your products.
              </p>
            </PolicySection>
            <PolicySection title="2. Order Processing Time">
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Orders are typically processed and dispatched <strong>within 1 business day</strong> from the date of order confirmation and/or successful payment.</li>
                <li>Dispatch timelines may vary based on the product, delivery location, and service availability.</li>
                <li>Estimated delivery dates are provided at the time of checkout and are subject to courier partner operations.</li>
              </ul>
            </PolicySection>
            <PolicySection title="3. Delivery Address">
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>All orders will be shipped to the <strong>shipping address provided by the customer</strong> during checkout.</li>
                <li>Please ensure your delivery details are accurate to avoid delays or delivery failures.</li>
              </ul>
            </PolicySection>
            <PolicySection title="4. Delivery Confirmation">
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Once your order is shipped, <strong>delivery confirmation</strong> along with tracking details will be sent to your <strong>registered email ID</strong>.</li>
                <li>In the case of delays due to courier issues or unforeseen circumstances, we appreciate your patience and cooperation.</li>
              </ul>
            </PolicySection>
            <PolicySection title="5. Liability Disclaimer">
              <p>
                Aureeture AI is <strong>not liable</strong> for delays caused by third-party courier services or postal authorities. While we will do our best to support any issues that arise, delivery timelines are outside our direct control once the package is dispatched.
              </p>
            </PolicySection>
            <PolicySection title="6. Shipping Charges">
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>If applicable, any <strong>shipping fees</strong> will be clearly mentioned at checkout.</li>
                <li>Please note that <strong>shipping charges (if any) are non-refundable</strong>, even in cases of order cancellation or return (where applicable).</li>
              </ul>
            </PolicySection>
            <PolicySection title="7. Contact Us">
              <p>
                For any queries related to shipping or delivery status, please reach out to our support team:
                <br />
                📩 Email: <a href="mailto:support@aureeture.com" className="text-purple-300 underline">support@aureeture.com</a>
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
