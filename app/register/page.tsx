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
  interestedInHackathons: boolean; // ✅ New field
};

export default function RegistrationPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    interestedInHackathons: false, // ✅ Initialize
  });

  const educationLevels = ['High School', 'Undergraduate', 'Graduate', 'Postgraduate', 'Working Professional', 'Other'];
  const careerInterests = [
    'Software Development', 'Data Science', 'Artificial Intelligence', 'Machine Learning', 'Cybersecurity',
    'Cloud Computing', 'Web Development', 'Mobile Development', 'UX/UI Design', 'Product Management',
    'Digital Marketing', 'Business Analytics', 'Finance', 'Healthcare', 'Other',
  ];
  const hearAboutUsOptions = ['Social Media', 'Search Engine', 'Friend/Family', 'School/University', 'Online Ad', 'Blog/Article', 'Other'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interest: string, isChecked: boolean) => {
    setFormData(prev => {
      const updatedInterests = isChecked
        ? [...prev.careerInterests, interest]
        : prev.careerInterests.filter(item => item !== interest);
      return { ...prev, careerInterests: updatedInterests };
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
      return;
    }
    setIsSubmitting(true);
    try {
      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      router.push('/profile');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Keep renderStepOne and renderStepTwo unchanged...

  const renderStepThree = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Almost There!</h2>
      <p className="text-gray-300">Just a few more details to complete your registration.</p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="skills" className="text-gray-300">Your Skills (Optional)</Label>
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
          <Label htmlFor="hearAboutUs" className="text-gray-300">How did you hear about us?</Label>
          <Select
            value={formData.hearAboutUs}
            onValueChange={(value) => handleSelectChange('hearAboutUs', value)}
          >
            <SelectTrigger className="mt-1 bg-gray-900 border-gray-700 text-white focus:ring-purple-500">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-700 text-white">
              {hearAboutUsOptions.map(option => (
                <SelectItem key={option} value={option} className="hover:bg-gray-800">{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* ✅ New Hackathon Interest Checkbox */}
        <div className="pt-2">
          <Label htmlFor="interestedInHackathons" className="text-gray-300">
            Are you interested in participating in Hackathons?
          </Label>
          <div className="flex items-start space-x-3 mt-2">
            <Checkbox
              id="interestedInHackathons"
              checked={formData.interestedInHackathons}
              onCheckedChange={(checked) =>
                setFormData(prev => ({ ...prev, interestedInHackathons: checked as boolean }))
              }
              className="mt-1 border-gray-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
            />
            <span className="text-sm text-gray-300">
              Yes, I’d like to receive updates about upcoming Hackathons.
            </span>
          </div>
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

  // Everything else remains the same — renderStepOne, renderStepTwo, progress UI, form layout, buttons, etc.
}
