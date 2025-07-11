"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
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

export default function TermsAndConditionsPage() {
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
            <FileText className="h-12 w-12 sm:h-14 sm:w-14 text-purple-400 drop-shadow-lg" />
          </div>
          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Terms &amp; Conditions
            </h1>
          </div>
          {/* Policy Content */}
          <div className="text-left w-full max-w-5xl mx-auto mt-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6">
              <strong>Platform:</strong>{" "}
              <a
                href="https://aureeture.in"
                className="text-purple-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://aureeture.in
              </a>
            </p>

            <PolicySection title="Introduction">
              <p>
                Welcome to Aureeture! These Terms of Service (“Terms”) govern your use of the Aureeture web application and services (“Platform”) provided by <strong>Aureeture AI</strong>. By accessing or using our Platform, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using our Platform.
              </p>
            </PolicySection>

            <PolicySection title="Eligibility">
              <p>
                You must be at least <strong>13 years old</strong> to use our Platform. By accessing or using our services, you represent and warrant that you are at least 13 years of age and legally capable of entering into a binding agreement.
              </p>
            </PolicySection>

            <PolicySection title="Accounts and User Responsibility">
              <p>
                To access certain features, you may need to register and create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
                <br />
                You agree to notify us immediately of any unauthorized use or breach of security. Aureeture is not liable for any loss or damage resulting from your failure to comply with this responsibility.
              </p>
            </PolicySection>

            <PolicySection title="License and Usage Restrictions">
              <p>
                Subject to these Terms, Aureeture AI grants you a limited, non-exclusive, non-transferable, and revocable license to use the Platform for personal, educational, or professional purposes.
              </p>
              <p>
                You agree not to:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Reverse-engineer, decompile, or disassemble any part of the Platform.</li>
                <li>Use bots, scrapers, or other automated tools to access or use the Platform.</li>
                <li>Exploit or distribute the Platform for commercial purposes without written consent.</li>
                <li>Upload or distribute malicious code, spam, or offensive content.</li>
                <li>Interfere with or disrupt the integrity of the Platform or any user’s experience.</li>
              </ul>
            </PolicySection>

            <PolicySection title="In-App Features and Subscriptions">
              <p>
                Aureeture may offer both free and premium (paid) services, including mentorship, AI tools, and project collaboration resources. By subscribing or purchasing any paid features, you agree to:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Pay all applicable fees through authorized payment channels.</li>
                <li>Understand that fees are generally non-refundable unless required by law.</li>
                <li>Manage your subscription renewals or cancellations via the appropriate interface or app store.</li>
              </ul>
              <p>
                Aureeture reserves the right to modify pricing, features, and availability of its services at any time.
              </p>
            </PolicySection>

            <PolicySection title="Intellectual Property">
              <p>
                All rights, title, and interest in the Platform—including but not limited to design, UI, content, code, trademarks, and branding—remain the property of <strong>Aureeture AI</strong> and its licensors.
                <br />
                You are not granted any ownership or intellectual property rights by using the Platform, except for the limited license mentioned above.
              </p>
            </PolicySection>

            <PolicySection title="User Content">
              <p>
                You may create, upload, or share content (such as project ideas, feedback, or messages) through the Platform. You retain ownership of your content but grant Aureeture a <strong>non-exclusive, royalty-free, worldwide license</strong> to use, display, reproduce, and promote it for service enhancement and marketing purposes.
              </p>
              <p>
                You confirm that your content:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Is your original creation or properly licensed.</li>
                <li>Does not infringe on intellectual property, privacy, or rights of others.</li>
                <li>Does not violate any law, regulation, or community standard.</li>
              </ul>
            </PolicySection>

            <PolicySection title="Termination">
              <p>
                Aureeture reserves the right to suspend or terminate your account or access to the Platform at its sole discretion if:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>You breach any of these Terms.</li>
                <li>You misuse or disrupt the platform.</li>
                <li>We are required to do so by law.</li>
              </ul>
              <p>
                Upon termination, you must cease all use and delete any copies of the Platform from your devices.
              </p>
            </PolicySection>

            <PolicySection title="Disclaimers">
              <p>
                The Platform is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, whether express or implied.
                <br />
                We do not guarantee:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>The Platform will be error-free or always available.</li>
                <li>Results from using AI suggestions will be accurate or suited to your needs.</li>
                <li>That user experience will be uninterrupted or secure.</li>
              </ul>
            </PolicySection>

            <PolicySection title="Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Aureeture AI and its affiliates shall not be liable for:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Any indirect, incidental, special, or consequential damages.</li>
                <li>Any loss of profits, data, reputation, or business interruption.</li>
                <li>Any unauthorized access or use of your data.</li>
              </ul>
              <p>
                In no case shall our liability exceed the amount paid by you (if any) in the twelve months prior to the claim.
              </p>
            </PolicySection>

            <PolicySection title="Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless Aureeture AI, its team, and partners from any claims, liabilities, damages, costs, or losses arising from:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Your violation of these Terms.</li>
                <li>Your content infringing on third-party rights.</li>
                <li>Misuse of the Platform.</li>
              </ul>
            </PolicySection>

            <PolicySection title="Governing Law and Jurisdiction">
              <p>
                These Terms are governed by the laws of <strong>India</strong>. Any disputes arising from these Terms or use of the Platform shall be subject to the exclusive jurisdiction of the courts located in <strong>Jaunpur, Uttar Pradesh</strong>.
              </p>
            </PolicySection>

            <PolicySection title="Modifications to Terms">
              <p>
                We may update these Terms from time to time. Changes will be posted on this page, and the “Effective Date” at the top will be updated accordingly. Continued use of the Platform after any changes implies acceptance of the revised Terms.
              </p>
            </PolicySection>

            <PolicySection title="Contact Information">
              <p>
                If you have any questions, concerns, or need assistance related to these Terms, please reach out to us:
                <br />
                📧 Email: <a href="mailto:support@aureeture.com" className="text-purple-300 underline">support@aureeture.com</a>
                <br />
                🕒 Support Hours: Monday – Saturday, 11:00 AM – 8:00 PM IST
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
