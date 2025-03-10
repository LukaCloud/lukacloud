
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
            {/* Device mockup container with transparent background */}
            <div className="devices-mockup transparent-bg">
              <img 
                src="/lovable-uploads/90860045-2085-4152-950b-da278a8a46d4.png" 
                alt="Luka application interface showing desktop and mobile views" 
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
