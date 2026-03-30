import { Card, CardContent } from "@/components/ui/card";
import { Flame, RefreshCw, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Flame,
    title: "You're Paying for Ads… Then Ignoring the Leads",
    description: "Leads cost ₹200–₹500 each from Meta & Google Ads. But without structured follow-up, that's money down the drain. Every ignored lead = wasted ad spend.",
    emoji: "🔥",
  },
  {
    icon: RefreshCw,
    title: "Customers Forget You in 30 Days",
    description: "Your best customers don't come back — not because they're unhappy, but because nobody reminded them. No reminder = no repeat revenue.",
    emoji: "🔁",
  },
  {
    icon: TrendingDown,
    title: "You Don't Know Where Revenue Is Leaking",
    description: "No dashboard means you're running blind. You can't fix what you can't see. Which leads converted? Which follow-ups worked? You have no idea.",
    emoji: "📉",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-primary/[0.03]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            You're Leaving <span className="text-destructive">Lakhs on the Table</span> Every Month
          </h2>
          <p className="text-lg text-muted-foreground">
            These 3 problems are silently killing revenue for Indian service businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((p) => (
            <Card key={p.title} className="border-border/50 bg-card shadow-lg shadow-primary/5 hover:shadow-xl transition-shadow group">
              <CardContent className="pt-8 pb-6 px-6">
                <span className="text-4xl mb-4 block">{p.emoji}</span>
                <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
