import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Owner, SparkleWash Car Detailing",
    location: "Pune",
    quote: "We were losing ₹1.5L every month in repeat customers. FollowUpCash automated our 30-day reminders — now 40% of customers rebook automatically.",
  },
  {
    name: "Dr. Priya Mehta",
    role: "Director, SmileCare Dental Clinic",
    location: "Mumbai",
    quote: "Patient no-shows dropped by 60%. The WhatsApp reminders feel personal, not spammy. Our patients actually thank us for the reminders!",
  },
  {
    name: "Vikram Patel",
    role: "Owner, FitZone Gym",
    location: "Ahmedabad",
    quote: "Membership renewals increased 35% in the first month itself. The revenue dashboard finally showed us which follow-ups actually convert.",
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-primary/[0.03]">
      <div className="container mx-auto px-4">
        {/* Beta positioning — honest, scarcity-driven */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-5 py-2 text-sm font-semibold text-accent mb-6">
            <Users className="h-4 w-4" />
            Limited Early Access
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Currently Onboarding 50 Founding Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Be one of the first to get priority access, direct founder support, and early-adopter pricing locked forever.
          </p>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">What early users are saying</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/50 bg-card shadow-lg shadow-primary/5">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-accent/30 mb-3" />
                <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role} • {t.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
