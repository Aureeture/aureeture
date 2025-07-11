'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.394 2.08a1 1 0 01.812 0l7 3a1 1 0 010 1.84l-7 3a1 1 0 01-.812 0l-7-3a1 1 0 010-1.84l7-3z" />
        <path d="M2.884 7.5L10 10.5l7.116-3L10 4.5 2.884 7.5z" />
        <path d="M3 13.5a1 1 0 01.5-.866l6.5 3.5a1 1 0 001 0l6.5-3.5A1 1 0 0118 13.5v-3a1 1 0 00-1.384-.93l-5.5 2.38a1 1 0 01-.812 0l-5.5-2.38A1 1 0 003 10.5v3z" />
      </svg>
    ),
    title: 'Personalized Learning Path',
    description: 'Get a customized learning journey tailored to your skills, interests, and career goals.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'AI-Powered Matching',
    description: 'Our advanced AI matches you with the perfect career paths based on your unique profile.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
      </svg>
    ),
    title: 'Expert Mentorship',
    description: 'Connect with industry professionals who can guide you through your career journey.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1z" />
        <path fillRule="evenodd" d="M10 16a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Real-World Projects',
    description: 'Build a portfolio with hands-on projects that impress employers.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h2a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Career Support',
    description: 'Get help with resumes, interviews, and job search strategies from career experts.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
      </svg>
    ),
    title: 'Global Community',
    description: 'Join a network of ambitious learners and professionals from around the world.'
  }
];

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="relative z-10 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Shape Your Future?
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join thousands of students who are already building their dream careers with Aureeture AI. Start your personalized journey today.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/auth?tab=signup">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 rounded-xl transform transition-all duration-300 hover:scale-105"
                >
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/#features">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-white border-gray-600 hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
            
            <motion.p 
              className="mt-6 text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Free assessment • Get matched instantly • No credit card required
            </motion.p>
          </div>
          
          {/* Background elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full filter blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-70"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Aureeture?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're redefining career development with AI-powered personalization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/auth?tab=signup">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 rounded-xl transform transition-all duration-300 hover:scale-105"
              >
                Start Your Free Journey Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="relative py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg
            className="h-12 w-12 text-yellow-400 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.208 8.064 3.072 0 5.28-2.496 5.28-5.28 0-3.008-2.112-5.216-5.12-5.216-.576 0-1.088.064-1.6.128.064-.896.768-3.264 2.368-5.76L9.352 4zm13.184 0c-4.8 3.456-8.32 9.088-8.32 15.36 0 5.12 3.072 8.064 6.208 8.064 3.072 0 5.28-2.496 5.28-5.28 0-3.008-2.112-5.216-5.12-5.216-.576 0-1.088.064-1.6.128.064-.896.768-3.264 2.368-5.76L22.536 4z" />
          </svg>
          <blockquote className="text-xl md:text-2xl font-medium text-white mb-8 max-w-3xl mx-auto">
            <p>"Aureeture completely transformed my career trajectory. The AI-powered guidance helped me discover opportunities I never knew existed."</p>
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
              AS
            </div>
            <div className="text-left">
              <p className="font-medium text-white">Alex Smith</p>
              <p className="text-purple-300">Software Engineer at TechCorp</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to take the first step?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their careers with Aureeture AI.
          </p>
          <Link href="/auth?tab=signup">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 rounded-xl transform transition-all duration-300 hover:scale-105"
            >
              Start Your Journey Now
            </Button>
          </Link>
          <p className="mt-4 text-sm text-gray-400">No credit card required • 100% free to get started</p>
        </div>
      </div>
    </div>
  );
}
