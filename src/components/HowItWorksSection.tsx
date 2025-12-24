import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Install Extension",
    description: "Download SecureShield from your browser's extension store with one click.",
  },
  {
    step: "02",
    title: "Browse Safely",
    description: "SecureShield automatically scans every website you visit in real-time.",
  },
  {
    step: "03",
    title: "Get Protected",
    description: "Receive instant alerts when threats are detected and stay safe online.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Protection in <span className="text-gradient">3 Simple Steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              <div className="glass rounded-2xl p-8 h-full">
                <span className="font-display text-5xl font-bold text-primary/20 mb-4 block">
                  {item.step}
                </span>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/40 w-8 h-8" />
              )}
            </div>
          ))}
        </div>

        {/* Before/After comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 border-destructive/30">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-destructive" />
              <h3 className="font-display text-2xl font-semibold">Without SecureShield</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <XCircle className="w-5 h-5 text-destructive/60 mt-0.5 flex-shrink-0" />
                <span>Vulnerable to phishing attacks and fake websites</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <XCircle className="w-5 h-5 text-destructive/60 mt-0.5 flex-shrink-0" />
                <span>Exposed to malware downloads and viruses</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <XCircle className="w-5 h-5 text-destructive/60 mt-0.5 flex-shrink-0" />
                <span>Personal data at risk from tracking scripts</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <XCircle className="w-5 h-5 text-destructive/60 mt-0.5 flex-shrink-0" />
                <span>No warning before entering scam websites</span>
              </li>
            </ul>
          </div>

          <div className="glass rounded-2xl p-8 border-accent/30">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-accent" />
              <h3 className="font-display text-2xl font-semibold">With SecureShield</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Instant detection and blocking of fake sites</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Real-time scanning prevents malware downloads</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Privacy protection blocks trackers and fingerprinting</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Smart alerts warn you before you take risks</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
