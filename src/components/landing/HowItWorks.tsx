import { MessageSquare, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Connect WhatsApp",
    description: "Link your WhatsApp Business number in 2 minutes. We handle the tech — you just approve.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Turn On Smart Follow-ups",
    description: "Pick from industry-ready templates. Your leads start getting follow-ups automatically — today.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Track Revenue in Real Time",
    description: "See exactly which follow-ups convert, how much revenue you've recovered, and where to double down.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            3 Steps. That's It.
          </h2>
          <p className="text-lg text-muted-foreground">
            No tech skills needed. If you can use WhatsApp, you can use this.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center group">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-accent/40 to-accent/10" />
              )}
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors relative z-10">
                <s.icon className="h-9 w-9 text-accent" />
              </div>
              <span className="text-xs font-bold text-accent tracking-widest uppercase mb-2 block">Step {s.step}</span>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
