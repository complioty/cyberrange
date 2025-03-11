
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Globe, 
  Zap, 
  Mail, 
  Lock, 
  Server, 
  Check, 
  ArrowRight,
  TrendingUp
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
      icon: <Lock className="w-5 h-5 text-cyan-500" />, 
      title: "Security-First Branding", 
      description: "Instantly communicate trust and security to your visitors"
    },
    { 
      icon: <TrendingUp className="w-5 h-5 text-cyan-500" />, 
      title: "Industry Recognition", 
      description: "Stand out in the competitive cybersecurity market"
    },
    { 
      icon: <Server className="w-5 h-5 text-cyan-500" />, 
      title: "Technical Authority", 
      description: "A domain that speaks to technical expertise and capability"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background grid with cyber effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Glowing orbs effect */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <div className="text-center space-y-8 animate-fade-in max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-cyan-900 px-4 py-2 rounded-full border border-cyan-800">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Premium Domain For Sale</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-200 tracking-tight">
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
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Secure your position at the forefront of cybersecurity with this powerful, premium domain that resonates with authority and trust.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              onClick={() => handleContactClick('single')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-6 text-lg rounded-lg">
              <Mail className="w-5 h-5 mr-2" />
              Inquire Now
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-cyan-400 text-cyan-400 hover:bg-cyan-950 px-8 py-6 text-lg rounded-lg">
              View Pricing
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">Why This Domain?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-800 transition-all duration-300 p-6">
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-full bg-slate-700/50 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-slate-300 flex-grow">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="pt-12 scroll-mt-24 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">Investment Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Single Domain Card */}
            <Card className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-700 shadow-[0_0_20px_rgba(0,150,255,0.1)] hover:shadow-[0_0_30px_rgba(0,150,255,0.2)] transition-all duration-300">
              <div className="space-y-6">
                <div className="p-3 rounded-full bg-blue-900/30 w-fit">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Single Domain</h3>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-4"></div>
                <ul className="space-y-3">
                  {[
                    "Full ownership rights",
                    "Immediate transfer process", 
                    "Premium cybersecurity branding"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <p className="text-slate-400 text-sm mb-1">Investment</p>
                  <div className="text-4xl font-bold text-white mb-6">€20,000</div>
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
            <Card className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-900 hover:border-cyan-700 shadow-[0_0_30px_rgba(0,200,255,0.15)] hover:shadow-[0_0_40px_rgba(0,200,255,0.25)] transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                BEST VALUE
              </div>
              <div className="space-y-6">
                <div className="p-3 rounded-full bg-cyan-900/30 w-fit">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Domain Bundle</h3>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-4"></div>
                <ul className="space-y-3">
                  {[
                    "Both cyberrange.one & cyberrange.company",
                    "Complete market dominance",
                    "Cross-platform branding synergy",
                    "Enhanced SEO potential"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <p className="text-slate-400 text-sm mb-1">Investment</p>
                  <div className="text-4xl font-bold text-white mb-6">€30,000</div>
                  <Button 
                    onClick={() => handleContactClick('bundle')}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-6">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact for Bundle
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 md:p-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-200">
              Secure Your Digital Future Today
            </h2>
            <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
              Don't miss this opportunity to own a premium cybersecurity domain. Position your business at the forefront of the industry.
            </p>
            <Button 
              onClick={() => handleContactClick('bundle')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-6 text-lg rounded-lg">
              <Mail className="w-5 h-5 mr-2" />
              Request More Information
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-400 text-sm pt-12 border-t border-slate-800">
          <p>© {new Date().getFullYear()} All rights reserved</p>
          <Link to="/impressum" className="text-slate-400 hover:text-white mt-2 inline-block">
            Impressum
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
