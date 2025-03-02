
import React from "react";
import { FileText, MessageSquare, File, Search, Code, Shield, Zap, Server } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="feature-card">
      <div className="mb-4 p-3 rounded-lg w-12 h-12 flex items-center justify-center bg-gradient-to-br from-luka-blue to-luka-purple text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Financial Report Generation",
      description: "Generate comprehensive financial reports that comply with regulations and internal policies."
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Sensitive Meeting Summaries",
      description: "Create accurate, private summaries of your most confidential meetings."
    },
    {
      icon: <File className="h-5 w-5" />,
      title: "File Digitization & Organization",
      description: "Digitize and organize physical and digital files in a secure, searchable format."
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "Integrated Research & eDiscovery",
      description: "Find what you need across your business data with powerful search capabilities."
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Drafting Legal Docs & Contracts",
      description: "Create, review, and refine legal documents and contracts with AI assistance."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Classification Management",
      description: "Manage sensitive and classified information with appropriate security controls."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Billing Code Extraction",
      description: "Automatically extract and organize billing codes from documents and files."
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Client Intake & Conflict Checks",
      description: "Streamline client onboarding while ensuring compliance and avoiding conflicts."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <div className="chip mb-4">Powerful Features</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform every aspect of your business
          </h2>
          <p className="text-lg text-gray-600">
            Luka delivers comprehensive AI capabilities that enhance productivity, security, and insights across your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-section">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
