
import React, { useEffect, useRef } from "react";
import { ArrowRight, Shield, Server, Lock } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(".fade-in-section");
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 -z-10"></div>
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-radial from-blue-100/30 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={containerRef} className="staggered-fade-in">
            <div className="chip mb-4">Introducing Luka</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Business AI + Cloud{" "}
              <span className="text-gradient">in a Box</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              The privacy-forward Cloud & AI solution you can hold in your
              hands. Secure, self-contained, and ready to transform your
              business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#waitlist" className="btn-primary">
                Join Beta Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#features" className="btn-secondary">
                Explore Features
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-luka-blue mb-3">
                    <Server className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">Self-Contained</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-luka-blue mb-3">
                    <Shield className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Secure by Design
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-luka-blue mb-3">
                    <Lock className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Privacy-Forward
                </p>
              </div>
            </div>
          </div>

          <div className="relative fade-in-section">
            {/* Device mockups container with perspective */}
            <div className="relative md:h-[500px] flex items-center justify-center">
              {/* Blue gradient background */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-300/50 to-transparent rounded-full blur-2xl opacity-70 animate-pulse"></div>
              
              {/* Desktop mockup */}
              <div className="relative z-20 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-[650px] border-8 border-gray-200 transform md:translate-x-10 md:translate-y-5">
                <div className="h-6 bg-gray-200 flex items-center px-2">
                  <div className="flex space-x-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="bg-luka-blue p-3 pb-20">
                  <div className="flex justify-center items-center h-full">
                    <div className="text-center text-white">
                      <h3 className="text-5xl font-bold mb-2">LUKA</h3>
                      <div className="text-xl font-light">Business AI + Cloud</div>
                      <div className="grid grid-cols-4 gap-3 mt-6">
                        <div className="bg-white/10 p-2 rounded-lg">
                          <Server className="h-5 w-5 text-white mx-auto" />
                        </div>
                        <div className="bg-white/10 p-2 rounded-lg">
                          <Shield className="h-5 w-5 text-white mx-auto" />
                        </div>
                        <div className="bg-white/10 p-2 rounded-lg">
                          <Lock className="h-5 w-5 text-white mx-auto" />
                        </div>
                        <div className="bg-white/10 p-2 rounded-lg">
                          <svg className="h-5 w-5 text-white mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile mockup positioned in front */}
              <div className="absolute z-30 bottom-0 left-0 md:left-4 md:bottom-4 bg-white rounded-[28px] shadow-2xl border-[8px] border-gray-200 w-[240px] transform translate-y-12 md:translate-y-0">
                <div className="h-6 bg-gray-100 flex items-center justify-center rounded-t-lg">
                  <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
                </div>
                <div className="bg-luka-blue text-white p-3 h-[400px] rounded-b-lg flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                      <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="text-sm">LUKA Assistant</div>
                    <div className="ml-auto flex space-x-2">
                      <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-3 rounded-lg mb-2 self-start max-w-[85%]">
                    <p className="text-xs text-white">How can I help with your business needs today?</p>
                  </div>
                  
                  <div className="bg-white/5 p-3 rounded-lg mb-2 self-end max-w-[85%]">
                    <p className="text-xs text-white/90">Can you help analyze these sales reports?</p>
                  </div>
                  
                  <div className="bg-white/10 p-3 rounded-lg self-start max-w-[85%]">
                    <p className="text-xs text-white">I'll analyze your sales data and prepare a detailed report with trends and recommendations for growth.</p>
                  </div>
                  
                  <div className="mt-auto p-2 flex items-center bg-white/5 rounded-full">
                    <div className="w-full bg-white/10 rounded-full py-1.5 px-3 text-xs text-white/60">
                      Type a message...
                    </div>
                    <div className="ml-2 p-1.5 bg-white/10 rounded-full">
                      <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
