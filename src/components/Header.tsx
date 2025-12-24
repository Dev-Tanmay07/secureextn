import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Download", href: "#download" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="container mx-auto max-w-6xl glass-strong rounded-2xl px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-button">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            SecureShield
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button variant="hero" size="sm">
          Install Now
        </Button>
      </nav>
    </header>
  );
};
