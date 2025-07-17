'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  educationLevel: string;
  fieldOfStudy: string;
  graduationYear: string;
  careerInterests: string[];
  skills: string;
  goals: string;
  hearAboutUs: string;
  agreeToTerms: boolean;
  bootcampInterest: string;
};

export default function RegistrationPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    educationLevel: '',
    fieldOfStudy: '',
    graduationYear: '',
    careerInterests: [],
    skills: '',
    goals: '',
    hearAboutUs: '',
    agreeToTerms: false,
    bootcampInterest: '',
  });

  const educationLevels = [
    'High School',
    'Undergraduate',
    'Graduate',
    'Postgraduate',
    'Working Professional',
    'Other',
  ];

  const careerInterests = [
    'Software Development',
    'Data Science',
    'Artificial Intelligence',
    'Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Web Development',
    'Mobile Development',
    'UX/UI Design',
    'Product Management',
    'Digital Marketing',
    'Business Analytics',
    'Finance',
    'Healthcare',
    'Other',
  ];

  const hearAboutUsOptions = [
    'Social Media',
    'Search Engine',
    'Friend/Family',
    'School/University',
    'Online Ad',
    'Blog/Article',
    'Other',
  ];

  const bootcampOptions = ['Yes', 'No'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (interest: string, isChecked: boolean) => {
    setFormData(prev => ({
      ...prev,
      careerInterests: isChecked
        ? [...prev.careerInterests, interest]
        : prev.careerInterests.filter(item => item !== interest),
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.fullName.trim()) return 'Full Name is required';
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return 'Valid Email is required';
    } else if (step === 3) {
      if (!formData.hearAboutUs) return 'Please select how you heard about us';
      if (!formData.agreeToTerms) return 'You must agree to the Terms of Service and Privacy Policy';
    }
    return null;
  };

  const nextStep = () => {
    const validationError = validateStep();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (step < 3) {
      nextStep();
      return;
    }

    const validationError = validateStep();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (!process.env.NEXT_PUBLIC_API_URL) {
      setError('API configuration error. Please contact support.');
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      router.push('/');
    } catch (error) {
      console.error('Registration failed:', error);
      setError(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepOne = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Personal Information</h2>
      <p className="text-gray-300">Let's start with some basic information about you.</p>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName" className="text-gray-300">Full Name *</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 bg-gray-900 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 bg-gray-900 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 bg-gray-900 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepTwo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Education & Career</h2>
      <p className="text-gray-300">Tell us about your education and career aspirations.</p>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="educationLevel" className="text-gray-300">Current Education Level</Label>
            <Select
              value={formData.educationLevel}
              onValueChange={(value) => handleSelectChange('educationLevel', value)}
            >
              <SelectTrigger className="mt-1 bg-gray-900 border-gray-700 text-white focus:ring-purple-500">
                <SelectValue placeholder="Select education level" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700 text-white">
                {educationLevels.map(level => (
                  <SelectItem key={level} value={level} className="hover:bg-gray-800">
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="fieldOfStudy" className="text-gray-300">Field of Study</Label>
            <Input
              id="fieldOfStudy"
              name="fieldOfStudy"
              type="text"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              className="mt-1 bg-gray-900 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
              placeholder="e.g., Computer Science, Business"
            />
          </div>
        </div>
        
        <div>
          <Label className="text-gray-300">Career Interests</Label>
          <p className="text-sm text-gray-400 mb-2">Select all that apply</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {careerInterests.map(interest => (
              <div key={interest} className="flex items-center space-x-2">
                <Checkbox
                  id={`interest-${interest}`}
                  checked={formData.careerInterests.includes(interest)}
                  onCheckedChange={(checked) => handleCheckboxChange(interest, checked as boolean)}
                  className="border-gray-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                />
                <label
                  htmlFor={`interest-${interest}`}
                  className="text-sm font-medium text-gray-300 cursor-pointer"
                >
                  {interest}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <Label htmlFor="goals" className="text-gray-300">
            What are your career goals? (Optional)
          </Label>
          <p className="text-sm text-gray-400 mb-2">Tell us what you hope to achieve with Aureeture</p>
          <textarea
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
            placeholder="I want to become a..."
          />
        </div>
      </div>
    </div>
  );

  const renderStepThree = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Almost There!</h2>
      <p className="text-gray-300">Just a few more details to complete your registration.</p>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="skills" className="text-gray-300">
            Your Skills (Optional)
          </Label>
          <p className="text-sm text-gray-400 mb-2">List your top skills separated by commas</p>
          <Input
            id="skills"
            name="skills"
            type="text"
            value={formData.skills}
            onChange={handleChange}
            className="mt-1 bg-gray-900 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
            placeholder="e.g., JavaScript, Python, UI/UX Design, Project Management"
          />
        </div>
        
        <div>
          <Label htmlFor="bootcampInterest" className="text-gray-300">
            Would you be interested in participating in the upcoming 3 days bootcamp?
          </Label>
          <Select
            value={formData.bootcampInterest}
            onValueChange={(value) => handleSelectChange('bootcampInterest', value)}
          >
            <SelectTrigger className="mt-1 bg-gray-900 border-gray-700 text-white focus:ring-purple-500">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-700 text-white">
              {bootcampOptions.map(option => (
                <SelectItem key={option} value={option} className="hover:bg-gray-800">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="hearAboutUs" className="text-gray-300">
            How did you hear about us? *
          </Label>
          <Select
            value={formData.hearAboutUs}
            onValueChange={(value) => handleSelectChange('hearAboutUs', value)}
          >
            <SelectTrigger className="mt-1 bg-gray-900 border-gray-700 text-white focus:ring-purple-500">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-700 text-white">
              {hearAboutUsOptions.map(option => (
                <SelectItem key={option} value={option} className="hover:bg-gray-800">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-start space-x-3 pt-2">
          <Checkbox
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
            className="mt-1 border-gray-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
            required
          />
          <div className="text-sm">
            <label htmlFor="agreeToTerms" className="font-medium text-gray-300 cursor-pointer">
              I agree to Aureeture's{' '}
              <a href="/terms" className="text-purple-400 hover:underline">Terms of Service</a> and{' '}
              <a href="/privacy" className="text-purple-400 hover:underline">Privacy Policy</a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProgressSteps = () => (
    <div className="flex items-center justify-between mb-8 max-w-2xl mx-auto relative">
      {[1, 2, 3].map((stepNumber) => (
        <div key={stepNumber} className="flex flex-col items-center z-10">
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step === stepNumber
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : step > stepNumber
                ? 'bg-green-500 text-white'
                : 'bg-gray-800 text-gray-400'
            }`}
          >
            {stepNumber}
          </div>
          <span
            className={`mt-2 text-xs font-medium ${
              step === stepNumber ? 'text-white' : 'text-gray-400'
            }`}
          >
            {stepNumber === 1 ? 'Personal' : stepNumber === 2 ? 'Education' : 'Complete'}
          </span>
        </div>
      ))}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -z-10">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Start Your Journey with Aureeture</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of students who are already building their dream careers with Aureeture AI.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 backdrop-blur-lg rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/10 p-8"
        >
          <div className="relative mb-12">
            {renderProgressSteps()}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="text-red-500 text-center p-3 bg-red-500/10 rounded-md">{error}</div>
            )}
            {step === 1 && renderStepOne()}
            {step === 2 && renderStepTwo()}
            {step === 3 && renderStepThree()}

            <div className="flex justify-between pt-6 border-t border-gray-800">
              <Button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                variant="outline"
                className="border-cyan-400 text-gray-300 hover:bg-cyan-500/20 hover:text-white hover:border-cyan-300 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 shadow-sm font-medium"
              >
                Back
              </Button>
              
              <Button
                type={step === 3 ? 'submit' : 'button'}
                onClick={step < 3 ? nextStep : undefined}
                disabled={isSubmitting || (step === 3 && !formData.agreeToTerms)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {step === 3 ? 'Submitting...' : 'Continue'}
                  </span>
                ) : step === 3 ? (
                  'Complete Registration'
                ) : (
                  'Continue'
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
