
import React from "react";
import { 
  Server, 
  Users, 
  Brain, 
  Shield, 
  User, 
  Link,
  Globe,
  Lock,
  Database,
  Video,
  FileText,
  PieChart,
  Library,
  Search,
  Code,
  Layers,
  Laptop,
  Smartphone,
  DollarSign,
  HardDrive,
  Mail
} from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  bulletPoints 
}: { 
  icon: React.ReactNode, 
  title: string, 
  bulletPoints: string[] 
}) => {
  return (
    <div className="feature-card">
      <div className="mb-4 p-3 rounded-lg w-12 h-12 flex items-center justify-center bg-gradient-to-br from-luka-blue to-luka-purple text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="text-gray-600 text-sm space-y-2">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-luka-blue mt-1.5 mr-2 flex-shrink-0"></span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Server className="h-5 w-5" />,
      title: "Private Dedicated Cloud",
      bulletPoints: [
        "Easy access anywhere",
        "Encrypted backups",
        "Shared & globally consistent",
        "Independent of cloud providers"
      ]
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Seamless Collaboration",
      bulletPoints: [
        "Shared Documents & Editing",
        "Private Video calls & messaging",
        "Project Management",
        "Analytics, reports & Wiki"
      ]
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "AI for Your Business",
      bulletPoints: [
        "Combined context-driven insights",
        "Library of open-source models & apps",
        "Private RAG",
        "Safe to integrate with sensitive data"
      ]
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure & Private By Design",
      bulletPoints: [
        "Open Source & Zero-trust architecture",
        "No API; Never trains for general use",
        "Strict namespace-level separation",
        "Encrypted backups"
      ]
    },
    {
      icon: <User className="h-5 w-5" />,
      title: "Built For Non-Technical Professionals",
      bulletPoints: [
        "No IT team required",
        "Familiar business cloud applications",
        "Sync across Desktop & Mobile Apps",
        "Predictable & affordable pricing"
      ]
    },
    {
      icon: <Link className="h-5 w-5" />,
      title: "Integrates with Existing Tools",
      bulletPoints: [
        "Access data from FTP, Windows Network Drive, Sharepoint, NFS, Object Storage, etc.",
        "Native integration with iOS, Android, MacOS, Windows, Linux, Outlook, Gmail, and Thunderbird"
      ]
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-section">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              bulletPoints={feature.bulletPoints}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
