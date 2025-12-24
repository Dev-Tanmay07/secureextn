const stats = [
  { value: "5M+", label: "Protected Users" },
  { value: "99.9%", label: "Threat Detection" },
  { value: "50M+", label: "Threats Blocked" },
  { value: "24/7", label: "Real-time Updates" },
];

export const StatsSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
