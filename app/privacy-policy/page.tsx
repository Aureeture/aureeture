"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";

// Reusable Section Component
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

// Main Page Component
export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="h-12 w-12 sm:h-14 sm:w-14 text-purple-400 drop-shadow-lg" />
          </div>

          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>

          {/* Policy Content */}
          <div className="text-left w-full max-w-5xl mx-auto mt-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6">
              At Aureeture AI ("we", "us", or "our"), we are committed to
              safeguarding your privacy. This Privacy Policy outlines how we
              collect, use, store, share, and protect your personal information
              when you access or use the Aureeture platform, available at{" "}
              <a
                href="https://aureeture.in"
                className="text-purple-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://aureeture.in
              </a>{" "}
              (referred to as the “Platform”), including all related services,
              tools, and interactions.
            </p>

            <PolicySection title="1. Information We Collect">
              <p>
                When you use the Aureeture Platform, we may collect the
                following categories of information:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  <strong>Personal Information:</strong> Information you
                  voluntarily provide while registering or updating your account,
                  such as your name, email address, profile image, educational
                  background, or contact number.
                </li>
                <li>
                  <strong>Usage Data:</strong> Technical information such as
                  device details, IP address, browser type, session activity,
                  referring URLs, and the pages you visit on the Platform.
                </li>
                <li>
                  <strong>Content Input:</strong> Data shared while using our AI
                  Copilots, mentorship features, projects, and community
                  interactions, including text, media, and project files.
                </li>
                <li>
                  <strong>Payment Information:</strong> For users making
                  purchases, we collect transactional details such as product
                  selected, amount, and timestamp via secure third-party payment
                  gateways (we do not store payment credentials).
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="2. How We Use Your Information">
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  Provide, personalize, and improve your experience on the
                  Platform
                </li>
                <li>
                  Facilitate project-building, AI interactions, mentorship
                  feedback, and learning paths
                </li>
                <li>
                  Deliver transactional emails, service alerts, product updates,
                  and support responses
                </li>
                <li>
                  Maintain security, detect fraud, prevent abuse, and enforce our
                  Terms &amp; Conditions
                </li>
                <li>
                  Analyze usage trends and platform engagement to improve
                  performance
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="3. Sharing of Information">
              <p>
                We do not sell or rent your personal information. However, we may
                share it in the following circumstances:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  <strong>Service Providers:</strong> With third-party vendors
                  offering hosting, analytics, customer support, and payment
                  processing services, under confidentiality agreements
                </li>
                <li>
                  <strong>Legal Obligations:</strong> When required by law, legal
                  processes, court orders, or to defend our legal rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or restructuring, your data may be transferred as
                  part of that transaction under strict privacy commitments
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="4. Data Security">
              <p>
                We implement industry-standard security protocols to protect your
                information, including encryption, access controls, and secure
                servers. While we strive to protect your personal information, no
                system can be 100% secure. You are also responsible for keeping
                your credentials safe and confidential.
              </p>
            </PolicySection>

            <PolicySection title="5. Data Retention">
              <p>
                We retain your personal data only as long as necessary to fulfill
                the purposes outlined in this Privacy Policy or to comply with
                legal obligations. User-generated content and account information
                may be retained until your account is deleted or upon specific
                request, subject to applicable laws.
              </p>
            </PolicySection>

            <PolicySection title="6. Your Rights and Choices">
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  Access, update, or delete your account information via your user
                  dashboard
                </li>
                <li>
                  Request complete deletion of your personal data by contacting us
                  at{" "}
                  <a
                    href="mailto:support@aureeture.com"
                    className="text-purple-300 underline"
                  >
                    support@aureeture.com
                  </a>
                </li>
                <li>
                  Opt-out of non-essential communications at any time through
                  provided unsubscribe options
                </li>
              </ul>
              <p>
                We will act on your request in accordance with applicable data
                protection laws and within a reasonable time.
              </p>
            </PolicySection>

            <PolicySection title="7. Cookies and Tracking Technologies">
              <p>
                We use cookies and similar technologies to enhance user
                experience, analyze site traffic, remember preferences, and
                provide relevant content. You can manage your cookie preferences
                via your browser settings.
              </p>
            </PolicySection>

            <PolicySection title="8. Third-Party Services">
              <p>
                The Platform may link to or embed services from third-party
                websites and tools. We are not responsible for their data practices
                or content. We recommend reviewing the privacy policies of any
                third-party service you interact with through our Platform.
              </p>
            </PolicySection>

            <PolicySection title="9. Children's Privacy">
              <p>
                Our Platform is not intended for individuals under the age of 13.
                We do not knowingly collect personal information from children. If
                we become aware that data from a child has been collected, we
                will take steps to delete it promptly.
              </p>
            </PolicySection>

            <PolicySection title="10. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in technology, legal requirements, or our data practices.
                When we do, we will update the "Effective Date" at the top of
                this page. Continued use of the Platform indicates your acceptance
                of the revised policy.
              </p>
            </PolicySection>

            <PolicySection title="11. Contact Us">
              <p>
                If you have questions, requests, or concerns regarding this
                Privacy Policy or our data handling practices, please contact us
                at:
                <br />
                📩 <strong>Email</strong>:{" "}
                <a
                  href="mailto:support@aureeture.com"
                  className="text-purple-300 underline"
                >
                  support@aureeture.com
                </a>
                <br />
                🕒 <strong>Support Hours</strong>: Monday to Saturday, 11:00 AM to
                8:00 PM IST
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
