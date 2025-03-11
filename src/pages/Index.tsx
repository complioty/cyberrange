
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
  ExternalLink
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
      <div className="container mx-auto px-4 py-16 space-y-24">
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
          
          <div className="p-6 text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-black/5 px-4 py-2 rounded-full border border-black/30">
              <span className="text-black font-medium text-sm">// Premium Domain For Sale</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-tight">
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
            
            <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
              {'>'} Launch your cybersecurity training platform, CTF competition, or ethical hacking business with this premium domain.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                onClick={() => handleContactClick('single')}
                className="w-full sm:w-auto bg-black hover:bg-black/80 text-white border border-black px-8 py-6 text-lg rounded-none font-mono">
                <Mail className="w-5 h-5 mr-2" />
                ./contact.sh
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border-2 border-black text-black hover:bg-black/5 px-8 py-6 text-lg rounded-none font-mono">
                cat pricing.txt
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center text-black border-b-2 border-black pb-2">[root@cyberrange]# ls -la /benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-2 border-black hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-300 p-6">
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-none bg-black/5 w-fit mb-4 border-2 border-black">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
                  <p className="text-black/70 flex-grow">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="pt-12 scroll-mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center text-black border-b-2 border-black pb-2">[root@cyberrange]# cat /etc/pricing.conf</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Single Domain Card */}
            <Card className="p-8 bg-white border-2 border-black hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-300">
              <div className="space-y-6">
                <div className="p-3 rounded-none bg-black/5 w-fit border-2 border-black">
                  <Database className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black">Single Domain</h3>
                <div className="h-px bg-black/20 my-4"></div>
                <ul className="space-y-3">
                  {[
                    "Full ownership rights",
                    "Immediate transfer process", 
                    "Premium cybersecurity branding"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <p className="text-black/70 text-sm mb-1">$ cat price.txt</p>
                  <div className="text-3xl font-bold text-black mb-6">€20,000</div>
                  <Button 
                    onClick={() => handleContactClick('single')}
                    className="w-full bg-black hover:bg-black/80 text-white border border-black py-6 font-mono rounded-none">
                    <Mail className="w-4 h-4 mr-2" />
                    ./purchase_single.sh
                  </Button>
                </div>
              </div>
            </Card>

            {/* Bundle Card - Premium Option */}
            <Card className="p-8 bg-white border-2 border-black hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 text-sm font-medium border border-black">
                ROOT ACCESS
              </div>
              <div className="space-y-6">
                <div className="p-3 rounded-none bg-black/5 w-fit border-2 border-black">
                  <Network className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black">Domain Bundle</h3>
                <div className="h-px bg-black/20 my-4"></div>
                <ul className="space-y-3">
                  {[
                    "Both cyberrange.one & cyberrange.company",
                    "Complete market dominance",
                    "Cross-platform branding synergy",
                    "Enhanced SEO potential"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <p className="text-black/70 text-sm mb-1">$ sudo cat price.txt</p>
                  <div className="text-3xl font-bold text-black mb-6">€30,000</div>
                  <Button 
                    onClick={() => handleContactClick('bundle')}
                    className="w-full bg-black hover:bg-black/80 text-white border border-black py-6 font-mono rounded-none">
                    <Mail className="w-4 h-4 mr-2" />
                    ./purchase_bundle.sh
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* ASCII Art Footer */}
        <div className="text-center text-black/60 pt-12 border-t-2 border-black/20">
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
          <Link to="/impressum" className="text-black hover:text-black/80 mt-2 inline-block text-xs underline">
            ./impressum.sh
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
