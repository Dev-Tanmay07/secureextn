import { Button } from "@/components/ui/button";
import { Chrome, Globe, Compass } from "lucide-react";

const browsers = [
  {
    name: "Chrome",
    icon: Chrome,
    description: "For Google Chrome",
    link: "#",
    available: true,
  },
  {
    name: "Firefox",
    icon: Globe,
    description: "For Mozilla Firefox",
    link: "#",
    available: true,
  },
  {
    name: "Edge",
    icon: Compass,
    description: "For Microsoft Edge",
    link: "#",
    available: true,
  },
  {
    name: "Safari",
    icon: Compass,
    description: "For Apple Safari",
    link: "#",
    available: false,
  },
];

export const DownloadSection = () => {
  return (
    <section id="download" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-accent text-sm font-medium mb-4">
            Download
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get <span className="text-gradient">SecureShield</span> Now
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Install in seconds. Free to use. No account required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {browsers.map((browser) => (
            <div
              key={browser.name}
              className={`glass-strong rounded-2xl p-6 text-center transition-all duration-300 ${
                browser.available 
                  ? "hover:border-primary/50 hover:shadow-card cursor-pointer" 
                  : "opacity-60"
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center">
                <browser.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-1">
                {browser.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {browser.description}
              </p>
              <Button
                variant={browser.available ? "hero" : "outline"}
                size="sm"
                className="w-full"
                disabled={!browser.available}
              >
                {browser.available ? "Install Free" : "Coming Soon"}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>No Sign-up Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Privacy Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
