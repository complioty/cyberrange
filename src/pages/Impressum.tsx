
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e580_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e580_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>
        
        <Card className="p-8 max-w-3xl mx-auto bg-white shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Legal Notice (Impressum)</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Information according to § 5 TMG</h2>
              <p>This domain is offered for sale by:</p>
              <p className="mt-2">
                Philip Empl<br />
                Address available upon legitimate request
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Contact</h2>
              <Button 
                onClick={() => window.location.href = 'mailto:Philip.empl@gmx.de?subject=Legal Inquiry'}
                className="bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Contact via Email
              </Button>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Disclaimer</h2>
              <h3 className="font-medium mb-1">Liability for Content</h3>
              <p className="text-gray-600 mb-3">
                As a service provider, we are responsible for our own content on these pages according to general laws.
                However, we are not obligated to monitor transmitted or stored third-party information or to investigate
                circumstances that indicate illegal activity.
              </p>
              
              <h3 className="font-medium mb-1">Liability for Links</h3>
              <p className="text-gray-600">
                Our offer contains links to external websites of third parties, on whose contents we have no influence.
                Therefore, we cannot assume any liability for these external contents. The respective provider or
                operator of the pages is always responsible for the content of the linked pages.
              </p>
            </section>
          </div>
        </Card>
      </div>
      
      {/* Footer */}
      <div className="text-center text-gray-500 text-sm py-6">
        <p>© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </div>
  );
};

export default Impressum;
