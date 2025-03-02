
import React, { useEffect, useRef } from "react";
import { ArrowRight, Shield, Server, Lock, Computer, Smartphone, MessageSquare } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 -z-10"></div>
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-radial from-blue-300/30 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={containerRef} className="staggered-fade-in">
            <div className="chip mb-4">Introducing Luka</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Business AI + Cloud{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">in a Box</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-lg">
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
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-3">
                    <Server className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm font-medium text-white">Self-Contained</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-3">
                    <Shield className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm font-medium text-white">
                  Secure by Design
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-3">
                    <Lock className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm font-medium text-white">
                  Privacy-Forward
                </p>
              </div>
            </div>
          </div>

          <div className="relative fade-in-section hero-mockups">
            {/* Blue gradient background */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-300/50 to-transparent rounded-full blur-2xl opacity-70 animate-pulse"></div>
            
            {/* Desktop mockup */}
            <div className="relative desktop-container">
              <div className="desktop-mockup bg-white rounded-2xl shadow-2xl overflow-hidden max-w-[650px] border-8 border-gray-50">
                <div className="h-6 bg-gray-100 flex items-center px-2">
                  <div className="flex space-x-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="bg-[#1e88e5] p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/10 p-1.5 rounded">
                        <Computer className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-white/10 p-1.5 rounded">
                        <Smartphone className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-white/10 p-1.5 rounded">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="bg-white/10 p-1.5 rounded-full">
                      <div className="w-4 h-4 rounded-full bg-white/30"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center pt-10 pb-16">
                    <h2 className="text-9xl font-bold text-white opacity-90 mb-1">10</h2>
                    <p className="text-xl text-white opacity-90 mb-6">Introducing the new</p>
                    <h3 className="text-4xl font-bold text-white">LUKA Hub</h3>
                  </div>
                </div>
              </div>
              
              {/* Mobile mockup positioned in front */}
              <div className="mobile-mockup absolute -left-10 bottom-8 z-10 bg-white rounded-[32px] shadow-2xl border-[8px] border-gray-50 w-[260px]">
                <div className="h-6 bg-gray-100 flex items-center justify-center rounded-t-lg">
                  <div className="absolute top-1.5 left-12 text-[10px] text-gray-500">22:47</div>
                  <div className="absolute top-1.5 right-12 flex space-x-1 items-center">
                    <div className="h-2 w-2.5">
                      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-gray-500">
                        <path d="M18 9.5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M18 20.5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M6 15.5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="m15.5 7.5-7 4M15.5 16.5l-7-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    <div className="h-2.5 w-2.5">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full text-gray-500">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.371 9.546C2.587 5.431 6.451 2.524 11 2.524c4.548 0 8.413 2.907 9.629 7.022.209.709.28 1.213.341 1.61a.75.75 0 0 1 0 .688c-.06.397-.132.901-.341 1.61C19.413 17.97 15.548 20.877 11 20.877c-4.548 0-8.413-2.907-9.629-7.022-.209-.709-.28-1.213-.341-1.61a.75.75 0 0 1 0-.688c.06-.397.132-.901.341-1.61ZM11 16.524a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"></path>
                      </svg>
                    </div>
                    <div className="h-2.5 w-2.5 bg-gray-500 rounded-sm"></div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="flex items-center bg-gray-100 rounded-xl p-2">
                    <div className="flex items-center text-gray-500">
                      <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </div>
                    <div className="flex items-center ml-2">
                      <div className="w-7 h-7 rounded-full bg-gray-300 mr-2 overflow-hidden">
                        <img src="public/lovable-uploads/1586e0c5-43f2-4665-92d0-80441f3ad3eb.png" alt="" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Leon Gre...</span>
                    </div>
                    <div className="ml-auto flex space-x-3">
                      <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="mt-2 space-y-2">
                    <div className="bg-gray-100 p-3 rounded-lg relative ml-0 mr-12">
                      <p className="text-xs text-gray-700">Hey Carl, let's meet near Brandenburger Tor at 14:00?</p>
                      <div className="text-[10px] text-gray-500 text-right mt-1">13:41</div>
                      <div className="absolute right-2 bottom-2">
                        <svg className="h-3 w-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex ml-4">
                      <span className="text-xs text-amber-500">👍 1</span>
                      <span className="text-xs text-amber-500 ml-2">😃 1</span>
                    </div>
                    
                    <div className="bg-gray-100 p-1 rounded-lg ml-0 mr-4">
                      <img src="public/lovable-uploads/e443bb7d-55bd-4868-9e5c-af0be09d0edc.png" alt="" className="w-full h-32 object-cover rounded" />
                      <div className="text-[10px] text-gray-500 text-right mt-1">13:42</div>
                      <div className="absolute right-6 bottom-24">
                        <svg className="h-3 w-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-gray-500">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                          <polygon points="10 8 16 12 10 16" strokeWidth="0" fill="currentColor"/>
                        </svg>
                      </button>
                      <div className="flex-1 mx-3 h-1 bg-gray-200 rounded-full relative">
                        <div className="absolute h-1 w-12 bg-blue-500 rounded-full left-0"></div>
                        <div className="absolute h-3 w-3 bg-blue-500 rounded-full left-12 -top-1"></div>
                      </div>
                      <div className="text-[10px] text-gray-500">13:43</div>
                    </div>
                    
                    <div className="bg-gray-100 p-3 rounded-lg relative ml-0 mr-12">
                      <p className="text-xs text-gray-700">Absolutely! Let's do that!</p>
                      <div className="text-[10px] text-gray-500 text-right mt-1">21:09</div>
                      <div className="absolute right-2 bottom-2">
                        <svg className="h-3 w-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex ml-4">
                      <span className="text-xs text-amber-500">👍 1</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center bg-gray-100 rounded-full p-2">
                    <button className="text-gray-500 mr-1">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                    </button>
                    <button className="text-gray-500 mr-2">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    <input type="text" placeholder="Enter a message..." className="text-xs text-gray-500 bg-transparent flex-1 outline-none" />
                    <button className="text-gray-500 ml-2">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </button>
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
