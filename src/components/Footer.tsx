import { Shield, Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              SecureShield
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © 2024 SecureShield. Protecting your browsing experience.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
