
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Mail, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <Link to="/" className="inline-flex items-center text-black hover:text-black/80 mb-6 border border-black px-3 py-1 text-sm">
          <ChevronLeft className="w-4 h-4 mr-1" />
          cd ..
        </Link>
        
        {/* Terminal Window */}
        <div className="max-w-3xl mx-auto bg-white border-2 border-black rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] overflow-hidden">
          <div className="flex items-center bg-black px-4 py-2">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-xs text-white">root@cyberrange:~# cat impressum.txt</p>
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-black font-mono">Legal Notice (Impressum)</h1>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-bold mb-2 text-black border-b border-black pb-1"># Information according to § 5 TMG</h2>
                <p className="text-black/70 pl-4">This domain is offered for sale by:</p>
                <pre className="bg-black/5 p-4 mt-2 font-mono border-2 border-black text-black">
{`Dr. Philip Empl
Address available upon legitimate request`}
                </pre>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-2 text-black border-b border-black pb-1"># Contact</h2>
                <Button 
                  onClick={() => window.location.href = 'mailto:Philip.empl@gmx.de?subject=Legal Inquiry'}
                  className="bg-black hover:bg-black/80 text-white mt-2 border border-black py-3 font-mono rounded-none">
                  <Mail className="w-4 h-4 mr-2" />
                  ./contact.sh
                </Button>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-2 text-black border-b border-black pb-1"># Disclaimer</h2>
                <div className="pl-4">
                  <h3 className="font-bold mb-1 text-black">## Liability for Content</h3>
                  <p className="text-black/70 mb-3">
                    As a service provider, we are responsible for our own content on these pages according to general laws.
                    However, we are not obligated to monitor transmitted or stored third-party information or to investigate
                    circumstances that indicate illegal activity.
                  </p>
                  
                  <h3 className="font-bold mb-1 text-black">## Liability for Links</h3>
                  <p className="text-black/70">
                    Our offer contains links to external websites of third parties, on whose contents we have no influence.
                    Therefore, we cannot assume any liability for these external contents. The respective provider or
                    operator of the pages is always responsible for the content of the linked pages.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        
        {/* Terminal Footer */}
        <div className="text-center text-black/60 mt-8">
          <p className="text-xs">
            <span className="text-black/70">root@cyberrange:~#</span> echo "© {new Date().getFullYear()} All rights reserved"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
