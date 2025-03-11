
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Zap, Mail } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e580_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e580_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative z-10 container mx-auto px-4 py-16 space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-medium">Domain For Sale</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
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
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure your digital future with this premium cyber domain
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Single Domain Card */}
          <Card className="p-6 bg-white shadow-xl border border-blue-200 hover:shadow-blue-100/50 transition-all duration-300">
            <div className="space-y-4">
              <Shield className="w-10 h-10 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Single Domain</h3>
              <p className="text-gray-600">Purchase this domain individually</p>
              <div className="text-3xl font-bold text-gray-800">€20,000</div>
              <Button 
                onClick={() => handleContactClick('single')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Contact for Purchase
              </Button>
            </div>
          </Card>

          {/* Bundle Card */}
          <Card className="p-6 bg-white shadow-xl border border-purple-200 hover:shadow-purple-100/50 transition-all duration-300">
            <div className="space-y-4">
              <Zap className="w-10 h-10 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800">Domain Bundle</h3>
              <p className="text-gray-600">Get both cyberrange.one & cyberrange.company</p>
              <div className="text-3xl font-bold text-gray-800">€30,000</div>
              <Button 
                onClick={() => handleContactClick('bundle')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Contact for Bundle
              </Button>
            </div>
          </Card>
        </div>

        {/* Contact Info - Now simplified to just a note about contacting */}
        <div className="text-center space-y-2">
          <p className="text-gray-600">For inquiries, please use the contact buttons above</p>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
