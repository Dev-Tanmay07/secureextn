import { Shield, Lock, Eye, Zap, Globe, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Real-Time Protection",
    description: "Instantly blocks malicious websites, phishing attempts, and known threat domains before they can harm you.",
  },
  {
    icon: Eye,
    title: "Smart Detection",
    description: "AI-powered analysis identifies suspicious patterns, fake login pages, and deceptive content in milliseconds.",
  },
  {
    icon: Lock,
    title: "Privacy Guard",
    description: "Prevents tracking scripts, blocks fingerprinting attempts, and keeps your browsing habits private.",
  },
  {
    icon: AlertTriangle,
    title: "Scam Alert System",
    description: "Warns you about known scam sites, fake stores, and fraudulent services before you enter any data.",
  },
  {
    icon: Zap,
    title: "Zero Latency",
    description: "Lightning-fast protection that doesn't slow down your browsing. Security at the speed of thought.",
  },
  {
    icon: Globe,
    title: "Global Threat Database",
    description: "Connected to worldwide security networks, updated every minute with the latest threat intelligence.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Complete <span className="text-gradient">Protection</span> Suite
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combining multiple security technologies into one powerful extension
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
