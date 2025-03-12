
import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert the email into the waitlist table
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        console.error("Error submitting email:", error);
        
        // Show appropriate error message based on error type
        if (error.code === '23505') { // Unique violation error code
          toast({
            title: "Already registered",
            description: "This email is already on our waitlist.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Submission failed",
            description: "There was an error adding your email. Please try again.",
            variant: "destructive",
          });
        }
      } else {
        // Success case
        toast({
          title: "Success!",
          description: "You've been added to our waitlist. We'll be in touch soon.",
        });
        // Clear the form
        setEmail("");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast({
        title: "Submission failed",
        description: "There was an unexpected error. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <h3 className="text-xl font-semibold mb-4">2 Ways to Get Luka</h3>
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
                      Your data stays in your legal custody with no IT hassle.
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
                      For those who prefer to hold their entire cloud system in their hands. 
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
