import { Button } from "@/components/ui/button";
import { Shield, Download, ChevronDown } from "lucide-react";
import heroShield from "@/assets/hero-shield.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-6 animate-fade-in">
              <Shield className="w-4 h-4 text-primary" />
              <span>Trusted by 5M+ users worldwide</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
              Browse the Web{" "}
              <span className="text-gradient">Fearlessly</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              The ultimate browser extension that protects you from fake websites, 
              phishing attacks, malware, and online scams in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Button variant="hero" size="xl" className="gap-3">
                <Download className="w-5 h-5" />
                Install Free Extension
              </Button>
              <Button variant="glass" size="xl">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>Works on all major browsers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>100% Free</span>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="relative w-full max-w-lg">
              <img
                src={heroShield}
                alt="SecureShield Protection"
                className="w-full h-auto animate-float"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
