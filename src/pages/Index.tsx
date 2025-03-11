
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
  ArrowRight,
  Terminal,
  Bug,
  Cpu,
  Code,
  Network,
  Database
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
      icon: <Terminal className="w-5 h-5 text-green-400" />, 
      title: "Command & Control", 
      description: "Perfect domain for cyber attack simulations and security exercises"
    },
    { 
      icon: <Bug className="w-5 h-5 text-green-400" />, 
      title: "Vulnerability Lab", 
      description: "Ideal for penetration testing and vulnerability assessments"
    },
    { 
      icon: <Cpu className="w-5 h-5 text-green-400" />, 
      title: "Technical Infrastructure", 
      description: "Domain name that resonates with cybersecurity professionals"
    },
    { 
      icon: <Code className="w-5 h-5 text-green-400" />, 
      title: "Exploit Development", 
      description: "Suitable for ethical hacking training and education"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-green-400 font-mono">
      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Terminal Header */}
        <div className="max-w-4xl mx-auto bg-[#121212] border border-green-500/30 rounded-md shadow-lg overflow-hidden">
          <div className="flex items-center bg-[#1a1a1a] px-4 py-2 border-b border-green-500/20">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-xs text-green-400">root@cyberrange:~# <span className="animate-pulse">_</span></p>
          </div>
          
          <div className="p-6 text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/30">
              <span className="text-green-400 font-medium text-sm">// Premium Domain For Sale</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-green-400 tracking-tight leading-tight">
              <Typewriter
                options={{
                  strings: [`$ ${displayDomain}`],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 80
                }}
              />
            </h1>
            
            <p className="text-lg text-green-300/70 max-w-2xl mx-auto leading-relaxed">
              {'>'} Launch your cybersecurity training platform, CTF competition, or ethical hacking business with this premium domain.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                onClick={() => handleContactClick('single')}
                className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-green-100 border border-green-600 px-8 py-6 text-lg rounded-md font-mono">
                <Mail className="w-5 h-5 mr-2" />
                ./contact.sh
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border-green-700 text-green-400 hover:bg-green-900/30 px-8 py-6 text-lg rounded-md font-mono">
                cat pricing.txt
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center text-green-400 border-b border-green-500/20 pb-2">[root@cyberrange]# ls -la /benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-[#121212] border border-green-500/30 hover:border-green-500/60 transition-all duration-300 p-6 shadow-md hover:shadow-green-900/20 hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-md bg-green-900/20 w-fit mb-4 border border-green-500/20">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-green-400">{feature.title}</h3>
                  <p className="text-green-300/70 flex-grow">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="pt-12 scroll-mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center text-green-400 border-b border-green-500/20 pb-2">[root@cyberrange]# cat /etc/pricing.conf</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Single Domain Card */}
            <Card className="p-8 bg-[#121212] border border-green-500/30 hover:border-green-500/60 shadow-md hover:shadow-green-900/20 hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                <div className="p-3 rounded-md bg-green-900/20 w-fit border border-green-500/20">
                  <Database className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-green-400">Single Domain</h3>
                <div className="h-px bg-green-500/20 my-4"></div>
                <ul className="space-y-3">
                  {[
                    "Full ownership rights",
                    "Immediate transfer process", 
                    "Premium cybersecurity branding"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-300/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <p className="text-green-300/70 text-sm mb-1">$ cat price.txt</p>
                  <div className="text-3xl font-bold text-green-400 mb-6">€20,000</div>
                  <Button 
                    onClick={() => handleContactClick('single')}
                    className="w-full bg-green-700 hover:bg-green-800 text-green-100 border border-green-600 py-6 font-mono">
                    <Mail className="w-4 h-4 mr-2" />
                    ./purchase_single.sh
                  </Button>
                </div>
              </div>
            </Card>

            {/* Bundle Card - Premium Option */}
            <Card className="p-8 bg-[#121212] border border-green-400 hover:border-green-300 shadow-lg hover:shadow-green-900/30 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-700 text-green-100 px-4 py-1 rounded-md text-sm font-medium border border-green-500">
                ROOT ACCESS
              </div>
              <div className="space-y-6">
                <div className="p-3 rounded-md bg-green-900/20 w-fit border border-green-500/20">
                  <Network className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-green-400">Domain Bundle</h3>
                <div className="h-px bg-green-500/20 my-4"></div>
                <ul className="space-y-3">
                  {[
                    "Both cyberrange.one & cyberrange.company",
                    "Complete market dominance",
                    "Cross-platform branding synergy",
                    "Enhanced SEO potential"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-300/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <p className="text-green-300/70 text-sm mb-1">$ sudo cat price.txt</p>
                  <div className="text-3xl font-bold text-green-400 mb-6">€30,000</div>
                  <Button 
                    onClick={() => handleContactClick('bundle')}
                    className="w-full bg-green-700 hover:bg-green-800 text-green-100 border border-green-600 py-6 font-mono">
                    <Mail className="w-4 h-4 mr-2" />
                    ./purchase_bundle.sh
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* ASCII Art Footer */}
        <div className="text-center text-green-500/60 pt-12 border-t border-green-500/20">
          <pre className="text-xs md:text-sm overflow-x-auto scrollbar-none mb-6">
{`
 ██████╗██╗   ██╗██████╗ ███████╗██████╗     ██████╗  █████╗ ███╗   ██╗ ██████╗ ███████╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗    ██╔══██╗██╔══██╗████╗  ██║██╔════╝ ██╔════╝
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝    ██████╔╝███████║██╔██╗ ██║██║  ███╗█████╗  
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗    ██╔══██╗██╔══██║██║╚██╗██║██║   ██║██╔══╝  
╚██████╗   ██║   ██████╔╝███████╗██║  ██║    ██║  ██║██║  ██║██║ ╚████║╚██████╔╝███████╗
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝
`}
          </pre>
          <p className="text-xs">© {new Date().getFullYear()} All rights reserved</p>
          <Link to="/impressum" className="text-green-400 hover:text-green-300 mt-2 inline-block text-xs">
            ./impressum.sh
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
