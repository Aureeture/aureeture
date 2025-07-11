import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Make sure you are using Next.js 13+ and have the `@next/font` package if needed
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AuthProvider } from "@/contexts/auth-context";

const inter = Inter({ subsets: ["latin"] });

// ✅ SEO metadata
export const metadata: Metadata = {
  title: "Aureeture – Your GenAI Career Copilot",
  description: "Discover, plan, and achieve your dream career with AI-powered guidance.",
  generator: "v0.dev",
  keywords: ["GenAI", "Career Planning", "AI Copilot", "Job Discovery", "Aureeture AI", "Aureeture", "GenAI platfrom"],
  authors: [{ name: "Aureeture Team", url: "https://aureeture.in" }],
  openGraph: {
    title: "Aureeture – Your GenAI Career Copilot",
    description: "Plan your dream career with AI-powered tools and mentorship.",
    url: "https://aureeture.in",
    siteName: "Aureeture",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aureeture – Your GenAI Career Copilot",
    description: "Your personalized AI companion to discover and build your career path.",
    creator: "@aureeture",
  },
  icons: {
    icon: "/aureeture.favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
// ...existing code...