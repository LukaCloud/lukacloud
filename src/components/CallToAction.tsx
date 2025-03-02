
import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon.",
      });
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-luka-navy to-luka-blue text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <div className="chip bg-white bg-opacity-20 text-white mb-4">
              Limited Beta Access
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join the Beta Testing Waitlist today and be the first to experience the future of secure business AI.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white placeholder:text-white placeholder:opacity-60"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-white text-luka-navy font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:bg-opacity-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 disabled:opacity-70"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </button>
              </div>
            </form>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 text-sm opacity-90">
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-300" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-300" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-300" />
                <span>Priority support</span>
              </div>
            </div>
          </div>

          <div className="fade-in-section">
            <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">LUKA Box & Cloud</h3>
              <p className="mb-6 opacity-90">
                Choose the right solution for your business needs, with the security and privacy guarantees you demand.
              </p>

              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20">
                      <span className="font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Luka Cloud</h4>
                    <p className="text-sm opacity-80">
                      Hosted by Cachai with encrypted backups, eliminating frustrating manual tasks and providing end-to-end automation.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20">
                      <span className="font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Luka Box</h4>
                    <p className="text-sm opacity-80">
                      With a Luka Box at your headquarters, powerful AI integrated with your business cloud and securely backed up in the Cachai cloud.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20">
                      <span className="font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Affordable Licensing</h4>
                    <p className="text-sm opacity-80">
                      Efficient, highly scalable, and flexibly priced for a broad range of businesses and organizations.
                    </p>
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

export default CallToAction;
