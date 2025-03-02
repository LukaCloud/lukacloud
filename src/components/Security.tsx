
import React from "react";
import { LockKeyhole, CloudOff, ShieldCheck, FileDigit, Scale, Wallet, PencilRuler, Users } from "lucide-react";

const SecurityFeature = ({ icon, title }: { icon: React.ReactNode, title: string }) => {
  return (
    <div className="flex items-center space-x-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 p-2 rounded-lg bg-blue-50 text-luka-blue">
        {icon}
      </div>
      <p className="font-medium text-gray-700">{title}</p>
    </div>
  );
};

const Security = () => {
  return (
    <section id="security" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl -z-10" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-luka-blue opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
              </div>
              
              <div className="glass-card p-6 md:p-8 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-4">Cloud tools, your way.</h3>
                <p className="text-gray-700 mb-8">
                  When you can hold your business cloud in your hand, you know that client data is secure.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <SecurityFeature 
                    icon={<CloudOff className="h-5 w-5" />}
                    title="Zero Data Leakage"
                  />
                  <SecurityFeature 
                    icon={<ShieldCheck className="h-5 w-5" />}
                    title="Secure by Design"
                  />
                  <SecurityFeature 
                    icon={<LockKeyhole className="h-5 w-5" />}
                    title="Closed-Loop System"
                  />
                  <SecurityFeature 
                    icon={<FileDigit className="h-5 w-5" />}
                    title="End-to-End Automation"
                  />
                </div>
                
                <div className="bg-luka-blue bg-opacity-5 p-4 rounded-lg border border-luka-blue border-opacity-20">
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Sensitive business & customer data shouldn't be exposed</span> to the open internet or web-based AI tools. Luka is designed to empower businesses with cutting-edge AI in a physically protected environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in-section order-1 md:order-2">
            <div className="chip mb-4">Security First</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Privacy-forward. <span className="text-gradient">Secure by design.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Luka is a turnkey software suite designed to empower businesses with cutting-edge AI and enterprise tools in a physically protected, closed-loop environment.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-luka-blue bg-opacity-10 flex items-center justify-center text-luka-blue mr-4">
                  <Scale className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Affordable & Predictable License</h3>
                  <p className="text-gray-600">
                    Flexible pricing suitable for all sizes of business without hidden fees.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-luka-blue bg-opacity-10 flex items-center justify-center text-luka-blue mr-4">
                  <Wallet className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Highly Scalable & Portable</h3>
                  <p className="text-gray-600">
                    Grow your capabilities as your business expands, with no migration hassles.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-luka-blue bg-opacity-10 flex items-center justify-center text-luka-blue mr-4">
                  <PencilRuler className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Designed for Non-Technical Users</h3>
                  <p className="text-gray-600">
                    Intuitive interface that requires no specialized IT knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
