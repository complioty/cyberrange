import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Mail, 
  Terminal,
  Bug,
  Cpu,
  Code,
  Network,
  Database,
  ArrowRight,
  ExternalLink,
  Globe
} from 'lucide-react';

const Index = () => {
  const [hostname, setHostname] = useState<string>('');

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  const isDomainOne = hostname.includes('cyberrange.one');
  const isDomainTraining = hostname.includes('cyberrange.training');
  const displayDomain = isDomainOne ? 'cyberrange.one' : 
                        isDomainTraining ? 'cyberrange.training' : 'cyberrange.company';
  
  const handleContactClick = (type: string) => {
    let subject = "Inquiry about ";
    if (type === 'bundle') {
      subject += "Domain Bundle";
    } else if (type === 'complete') {
      subject += "Complete Package";
    } else {
      subject += displayDomain;
    }
    window.location.href = `mailto:Philip.empl@gmx.de?subject=${subject}`;
  };

  const features = [
    { 
      icon: <Terminal className="w-5 h-5 text-black" />, 
      title: "Command & Control", 
      description: "Perfect domain for cyber attack simulations and security exercises"
    },
    { 
      icon: <Bug className="w-5 h-5 text-black" />, 
      title: "Vulnerability Lab", 
      description: "Ideal for penetration testing and vulnerability assessments"
    },
    { 
      icon: <Cpu className="w-5 h-5 text-black" />, 
      title: "Technical Infrastructure", 
      description: "Domain name that resonates with cybersecurity professionals"
    },
    { 
      icon: <Code className="w-5 h-5 text-black" />, 
      title: "Exploit Development", 
      description: "Suitable for ethical hacking training and education"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <div className="container mx-auto px-4 py-8 md:py-16 space-y-12 md:space-y-24">
        {/* Terminal Header */}
        <div className="max-w-4xl mx-auto bg-white border-2 border-black rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] overflow-hidden">
          <div className="flex items-center bg-black px-4 py-2">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-xs text-white">root@cyberrange:~# <span className="animate-pulse">_</span></p>
          </div>
          
          <div className="p-4 md:p-6 text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-black/5 px-3 py-1 md:px-4 md:py-2 rounded-full border border-black/30">
              <span className="text-black font-medium text-xs md:text-sm">// domain for sale</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black tracking-tight leading-tight break-words">
              <Typewriter
                options={{
                  strings: [`$ ${displayDomain}`],
                  autoStart: true,
                  loop: true,
                  delay: 120,
                  deleteSpeed: 40,
                  waitBeforeDeleteMs: 2000
                }}
              />
            </h1>
            
            <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
              {'>'} Launch your cybersecurity training platform, CTF competition, or ethical hacking business with this premium domain.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                onClick={() => handleContactClick('single')}
                className="w-full sm:w-auto bg-black hover:bg-black/80 text-white border border-black px-4 py-3 md:px-8 md:py-6 text-base md:text-lg rounded-none font-mono">
                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                ./contact.sh
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border-2 border-black text-black hover:bg-black/5 px-4 py-3 md:px-8 md:py-6 text-base md:text-lg rounded-none font-mono">
                cat pricing.txt
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-10 text-center text-black border-b-2 border-black pb-2">[root@cyberrange]# ls -la /benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-2 border-black hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-300 p-4 md:p-6">
                <div className="flex flex-col h-full">
                  <div className="p-2 md:p-3 rounded-none bg-black/5 w-fit mb-3 md:mb-4 border-2 border-black">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-black">{feature.title}</h3>
                  <p className="text-sm md:text-base text-black/70 flex-grow">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="pt-8 md:pt-12 scroll-mt-16 md:scroll-mt-24 max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-10 text-center text-black border-b-2 border-black pb-2">[root@cyberrange]# cat /etc/pricing.conf</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Single Domain Card */}
            <Card className="bg-white border-2 border-black hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-300 flex flex-col">
              <div className="p-5 md:p-8 flex-grow">
                <div className="p-2 md:p-3 rounded-none bg-black/5 w-fit border-2 border-black">
                  <Database className="w-5 h-5 md:w-6 md:h-6 text-black" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black mt-4 md:mt-6">Single Domain</h3>
                <div className="h-px bg-black/20 my-3 md:my-4"></div>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "Full ownership rights",
                    "Immediate transfer process", 
                    "Premium cybersecurity branding",
                    "Choose one: cyberrange.one, cyberrange.company, or cyberrange.training"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-black/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 md:p-8 pt-0 mt-auto">
                <p className="text-black/70 text-xs md:text-sm mb-1">$ cat price.txt</p>
                <div className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">30.000€</div>
                <Button 
                  onClick={() => handleContactClick('single')}
                  className="w-full bg-black hover:bg-black/80 text-white border border-black py-3 md:py-6 font-mono rounded-none text-sm md:text-base">
                  <Mail className="w-4 h-4 mr-2" />
                  ./purchase_single.sh
                </Button>
              </div>
            </Card>

            {/* Bundle Card */}
            <Card className="bg-white border-2 border-black hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-300 relative flex flex-col">
              <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 text-xs md:text-sm font-medium border border-black">
                ROOT ACCESS
              </div>
              <div className="p-5 md:p-8 flex-grow">
                <div className="p-2 md:p-3 rounded-none bg-black/5 w-fit border-2 border-black">
                  <Network className="w-5 h-5 md:w-6 md:h-6 text-black" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black mt-4 md:mt-6">Domain Bundle</h3>
                <div className="h-px bg-black/20 my-3 md:my-4"></div>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "All three premium domains included",
                    "cyberrange.one + cyberrange.company + cyberrange.training",
                    "Complete market dominance",
                    "Ultimate cyber range branding portfolio"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-black/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 md:p-8 pt-0 mt-auto">
                <p className="text-black/70 text-xs md:text-sm mb-1">$ sudo cat price.txt</p>
                <div className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">50.000€</div>
                <Button 
                  onClick={() => handleContactClick('bundle')}
                  className="w-full bg-black hover:bg-black/80 text-white border border-black py-3 md:py-6 font-mono rounded-none text-sm md:text-base">
                  <Mail className="w-4 h-4 mr-2" />
                  ./purchase_bundle.sh
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-black/60 pt-8 md:pt-12 border-t-2 border-black/20">
          <Link to="/impressum" className="text-black hover:text-black/80 inline-block text-xs underline">
            ./impressum.sh
          </Link>
          <p className="text-xs mt-2">© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
