import { Card, CardContent } from "@/components/ui/card";
import { Car, Stethoscope, GraduationCap, Dumbbell, Building2, Sun } from "lucide-react";

const industries = [
  {
    icon: Car,
    label: "Car Detailing",
    story: "Remind customers every 45 days for their next service → Increase repeat bookings by 40%.",
    revenue: "₹45,000/mo extra revenue per shop",
  },
  {
    icon: Stethoscope,
    label: "Clinics",
    story: "Auto-follow up for appointment confirmation + post-visit feedback → Reduce no-shows by 60%.",
    revenue: "₹60,000/mo recovered per clinic",
  },
  {
    icon: GraduationCap,
    label: "Coaching Institutes",
    story: "Nurture enquiries with demo class reminders + fee follow-ups → Convert 2x more students.",
    revenue: "₹80,000/mo in new enrollments",
  },
  {
    icon: Dumbbell,
    label: "Gyms",
    story: "Auto-remind expiring memberships + re-engage lapsed members → 35% more renewals.",
    revenue: "₹35,000/mo in renewals recovered",
  },
  {
    icon: Building2,
    label: "Real Estate",
    story: "Auto-nurture property leads for 60 days with price updates & site visit invites → 3x more visits.",
    revenue: "3x more site visits per month",
  },
  {
    icon: Sun,
    label: "Solar Companies",
    story: "Follow up on quotes + subsidy deadline reminders → Close 40% more installations.",
    revenue: "40% higher close rate",
  },
];

const IndustrySection = () => {
  return (
    <section id="industries" className="py-20 bg-primary/[0.03]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Revenue Stories From <span className="text-accent">Your Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how businesses like yours are recovering lost revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((ind) => (
            <Card key={ind.label} className="border-border/50 bg-card shadow-lg shadow-primary/5 hover:shadow-xl hover:border-accent/30 transition-all group">
              <CardContent className="pt-6 pb-6 px-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <ind.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{ind.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ind.story}</p>
                <p className="text-sm font-bold text-accent">{ind.revenue}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
