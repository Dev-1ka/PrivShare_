
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Enter Recipient",
    description: "Enter the email or username of the person you want to share your location with.",
  },
  {
    id: 2,
    title: "Encrypt & Share",
    description: "Click the 'Encrypt & Share' button to securely share your current location.",
  },
  {
    id: 3,
    title: "Recipient Access",
    description: "The recipient will receive a secure link to view your location for a limited time.",
  },
  {
    id: 4,
    title: "Auto-Expiration",
    description: "Once viewed or after 24 hours, the shared location expires and can no longer be accessed.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-12 bg-privshare-light-blue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">How PrivShare Works</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Learn how PrivShare keeps your location sharing secure and private
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-10">
              {steps.map((step, index) => (
                <li key={step.id} className="relative flex gap-x-6">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-privshare-blue text-white shadow">
                    {step.id}
                  </div>
                  <div className="flex-auto">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-5 top-12 -ml-px mt-3 h-14 w-0.5 bg-gray-200" />
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="rounded-lg bg-privshare-light-blue/50 p-8">
              <h3 className="text-lg font-semibold text-gray-900">Privacy by Design</h3>
              <p className="mt-4 text-gray-600">
                PrivShare uses end-to-end encryption, ensuring that your location data is encrypted 
                before it leaves your device. We never store your actual location on our servers, and 
                the shared location link automatically expires after being viewed or after 24 hours.
              </p>
              <div className="mt-6 flex items-center">
                <ArrowRight className="h-5 w-5 text-privshare-blue mr-2" />
                <span className="text-sm font-medium text-privshare-blue">
                  Your privacy is our priority
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">
            &copy; {new Date().getFullYear()} PrivShare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;
