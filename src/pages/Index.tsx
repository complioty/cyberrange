
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Zap } from 'lucide-react';

const Index = () => {
  const [hostname, setHostname] = useState<string>('');

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  const isDomainOne = hostname.includes('cyberrange.one');
  const displayDomain = isDomainOne ? 'cyberrange.one' : 'cyberrange.company';

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative z-10 container mx-auto px-4 py-16 space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
            <Globe className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400">Domain For Sale</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
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
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Secure your digital future with this premium cyber domain
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Single Domain Card */}
          <Card className="p-6 bg-black/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
            <div className="space-y-4">
              <Shield className="w-10 h-10 text-purple-400" />
              <h3 className="text-2xl font-bold">Single Domain</h3>
              <p className="text-gray-400">Purchase this domain individually</p>
              <div className="text-3xl font-bold text-white">€20,000</div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Contact for Purchase
              </Button>
            </div>
          </Card>

          {/* Bundle Card */}
          <Card className="p-6 bg-black/50 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
            <div className="space-y-4">
              <Zap className="w-10 h-10 text-cyan-400" />
              <h3 className="text-2xl font-bold">Domain Bundle</h3>
              <p className="text-gray-400">Get both cyberrange.one & cyberrange.company</p>
              <div className="text-3xl font-bold text-white">€30,000</div>
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                Contact for Bundle
              </Button>
            </div>
          </Card>
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
