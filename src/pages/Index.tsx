
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Mail, 
  Lock, 
  Server, 
  Check, 
  ArrowRight
} from 'lucide-react';

const Index = () => {
  const [hostname, setHostname] = useState<string>('');

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  const isDomainOne = hostname.includes('cyberrange.one');
  const displayDomain = isDomainOne ? 'cyberrange.one' : 'cyberrange.company';
  
  const handleContactClick = (type: string) => {
    window.location.href = `mailto:Philip.empl@gmx.de?subject=Inquiry about ${type === 'bundle' ? 'Domain Bundle' : displayDomain}`;
  };

  const features = [
    { 
      icon: <Lock className="w-5 h-5 text-blue-400" />, 
      title: "Security-First Branding", 
      description: "Instantly communicate trust and security to visitors"
    },
    { 
      icon: <Server className="w-5 h-5 text-blue-400" />, 
      title: "Technical Authority", 
      description: "A domain that speaks to technical expertise"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
            <span className="text-blue-600 font-medium text-sm">Premium Domain For Sale</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
            <Typewriter
              options={{
                strings: [displayDomain],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 150
              }}
            />
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Position your business at the forefront of cybersecurity with this premium domain name.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              onClick={() => handleContactClick('single')}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-6 text-lg rounded-lg">
              <Mail className="w-5 h-5 mr-2" />
              Inquire Now
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg">
              View Pricing
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center text-gray-900">Why This Domain?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border border-gray-100 hover:border-blue-100 transition-all duration-300 p-6 shadow-sm">
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-full bg-blue-50 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="pt-12 scroll-mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center text-gray-900">Investment Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Single Domain Card */}
            <Card className="p-8 bg-white border border-gray-100 hover:border-blue-200 shadow-sm transition-all duration-300">
              <div className="space-y-6">
                <div className="p-3 rounded-full bg-blue-50 w-fit">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Single Domain</h3>
                <div className="h-px bg-gray-100 my-4"></div>
                <ul className="space-y-3">
                  {[
                    "Full ownership rights",
                    "Immediate transfer process", 
                    "Premium cybersecurity branding"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <p className="text-gray-500 text-sm mb-1">Investment</p>
                  <div className="text-3xl font-bold text-gray-900 mb-6">€20,000</div>
                  <Button 
                    onClick={() => handleContactClick('single')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact for Purchase
                  </Button>
                </div>
              </div>
            </Card>

            {/* Bundle Card - Premium Option */}
            <Card className="p-8 bg-white border border-blue-200 hover:border-blue-300 shadow-md transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                BEST VALUE
              </div>
              <div className="space-y-6">
                <div className="p-3 rounded-full bg-blue-50 w-fit">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Domain Bundle</h3>
                <div className="h-px bg-gray-100 my-4"></div>
                <ul className="space-y-3">
                  {[
                    "Both cyberrange.one & cyberrange.company",
                    "Complete market dominance",
                    "Cross-platform branding synergy",
                    "Enhanced SEO potential"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <p className="text-gray-500 text-sm mb-1">Investment</p>
                  <div className="text-3xl font-bold text-gray-900 mb-6">€30,000</div>
                  <Button 
                    onClick={() => handleContactClick('bundle')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact for Bundle
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm pt-12 border-t border-gray-100">
          <p>© {new Date().getFullYear()} All rights reserved</p>
          <Link to="/impressum" className="text-gray-500 hover:text-gray-700 mt-2 inline-block">
            Impressum
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
