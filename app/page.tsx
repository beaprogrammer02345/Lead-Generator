import React from 'react';
import Link from 'next/link';
import { HiMail, HiSparkles } from 'react-icons/hi';
import { IoShareSocialSharp } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100">
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;

const Hero: React.FC = () => {
  return (
    <div className="mx-4 mb-14 mt-6 flex flex-1 flex-col items-center text-center sm:mb-12 md:mb-32 md:mt-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 rounded-lg shadow-lg">
      <h1 className="max-w-5xl text-3xl font-extrabold sm:text-5xl md:text-6xl">
        Transform Your Content Into Leads with{' '}
        <span className="bg-gradient-to-r from-red-400 to-purple-300 bg-clip-text text-transparent">
          AI-Powered Tools
        </span>
      </h1>
      <p className="sm:text-md mt-5 max-w-2xl text-lg md:text-xl">
        Our AI tool empowers marketers to effortlessly generate leads through interactive content, turning visitors into customers.
      </p>
      <div className="mt-3 flex max-w-4xl flex-col flex-wrap items-center justify-around sm:w-full sm:flex-row">
        <Link href="/dashboard">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            Get Started Today
          </button>
        </Link>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <FeatureCard
          title="Engaging AI Lead Magnets"
          description="Create interactive content that captivates and converts visitors."
          icon={<HiSparkles className="h-16 w-16 text-blue-500" />}
        />
        <FeatureCard
          title="Effortless Lead Capture"
          description="Automate lead generation through smart forms and chatbots."
          icon={<HiMail className="h-16 w-16 text-blue-500" />}
        />
        <FeatureCard
          title="Social Media Integration"
          description="Easily share your content on social media to maximize reach."
          icon={<IoShareSocialSharp className="h-16 w-16 text-blue-500" />}
        />
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105">
      <div className="mb-4 rounded-full bg-blue-100 p-4 shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50">
      <h2 className="mb-5 text-center text-5xl font-bold">How It Works</h2>
      <div className="mx-auto flex flex-col md:max-w-7xl md:space-y-12">
        {/* Step 1 */}
        <HowItWorksStep
          title="Step 1: Create Your Content"
          description="Utilize our AI to generate engaging content tailored to your audience."
          checks={[
            "User-friendly interface",
            "Customizable templates",
            "AI-driven insights",
          ]}
        />
        {/* Step 2 */}
        <HowItWorksStep
          title="Step 2: Capture Leads"
          description="Deploy interactive lead magnets and capture leads with ease."
          checks={[
            "Instant lead capture",
            "Automated email follow-up",
            "Seamless integration with CRM",
          ]}
        />
        {/* Step 3 */}
        <HowItWorksStep
          title="Step 3: Nurture Your Leads"
          description="Engage and nurture your leads with tailored follow-up strategies."
          checks={[
            "Automated content delivery",
            "Engagement analytics",
            "Personalized marketing workflows",
          ]}
        />
      </div>
    </div>
  );
};

interface HowItWorksStepProps {
  title: string;
  description: string;
  checks: string[];
}

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({ title, description, checks }) => {
  return (
    <div className="flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-blue-500">{title}</h3>
      <p className="mt-2 font-semibold text-gray-600">{description}</p>
      <ul className="mt-2 list-disc list-inside">
        {checks.map((check, index) => (
          <li key={index} className="flex items-center">
            <FaCheck className="mr-2 text-blue-500" />
            {check}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 text-center bg-gray-200">
      <h2 className="text-4xl font-bold mb-4">Ready to Boost Your Marketing?</h2>
      <p className="text-xl mb-6">Join our community of successful marketers and start generating leads today!</p>
      <Link href="/get-started">
        <button className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Start Your Free Trial
        </button>
      </Link>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} AI Marketing Tool. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
