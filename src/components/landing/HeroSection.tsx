import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MessageSquare, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-6">
              <MessageSquare className="h-4 w-4" />
              WhatsApp Revenue System
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
              Turn Every WhatsApp Lead Into{" "}
              <span className="text-accent">Revenue</span> — Automatically.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Indian service businesses are losing 30–50% of leads due to missed follow-ups. Recover up to{" "}
              <span className="font-semibold text-foreground">₹2L+ monthly</span> with automated WhatsApp revenue systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 h-12">
                Start 14-Day Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-primary/20">
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              {["No credit card required", "Setup in 5 minutes", "Works in Hindi & English"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp mockup */}
          <div className="hidden lg:flex justify-center">
            <div className="w-80 rounded-3xl bg-card border border-border shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="bg-primary p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">FollowUpCash Bot</p>
                  <p className="text-primary-foreground/60 text-xs">Online</p>
                </div>
              </div>
              <div className="p-4 space-y-3 bg-secondary/30 min-h-[320px]">
                <div className="bg-card rounded-xl rounded-tl-none p-3 shadow-sm max-w-[85%] border border-border">
                  <p className="text-sm text-foreground">Hi Rajesh! 👋 Your car's ceramic coating is due for a refresh. Book now & get 15% off!</p>
                  <p className="text-[10px] text-muted-foreground mt-1">10:30 AM</p>
                </div>
                <div className="bg-accent/15 rounded-xl rounded-tr-none p-3 shadow-sm max-w-[85%] ml-auto">
                  <p className="text-sm text-foreground">Yes, I'm interested! What slots are available?</p>
                  <p className="text-[10px] text-muted-foreground mt-1 text-right">10:32 AM</p>
                </div>
                <div className="bg-card rounded-xl rounded-tl-none p-3 shadow-sm max-w-[85%] border border-border">
                  <p className="text-sm text-foreground">Great! We have Saturday 10 AM or Sunday 2 PM. Which works? 🚗✨</p>
                  <p className="text-[10px] text-muted-foreground mt-1">10:32 AM</p>
                </div>
                <div className="bg-accent/15 rounded-xl rounded-tr-none p-3 shadow-sm max-w-[85%] ml-auto">
                  <p className="text-sm text-foreground">Saturday 10 AM please!</p>
                  <p className="text-[10px] text-muted-foreground mt-1 text-right">10:33 AM</p>
                </div>
                <div className="text-center">
                  <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                    ₹4,500 revenue recovered ✓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
