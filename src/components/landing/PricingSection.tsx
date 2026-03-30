import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "1,499",
    description: "For solo business owners getting started with follow-ups",
    features: ["200 leads", "500 messages/mo", "3 follow-up sequences", "1 user", "Email support", "Basic analytics"],
    popular: false,
  },
  {
    name: "Growth",
    price: "2,999",
    description: "For growing businesses serious about revenue recovery",
    features: ["1,000 leads", "2,000 messages/mo", "10 follow-up sequences", "3 users", "Revenue dashboard", "Priority support", "Repeat customer reminders"],
    popular: true,
  },
  {
    name: "Pro",
    price: "5,999",
    description: "For multi-location businesses and agencies",
    features: ["Unlimited leads", "Unlimited messages", "Unlimited sequences", "10 users", "API access", "Dedicated account manager", "Custom integrations", "White-label reports"],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            14-day free trial. No credit card. Cancel anytime.
          </p>
        </div>

        <div className="text-center mb-12">
          <Badge variant="secondary" className="text-sm px-4 py-1.5 font-medium">
            💰 Pay annually & get 2 months free
          </Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-shadow ${
                plan.popular
                  ? "border-accent shadow-xl shadow-accent/10 scale-[1.02]"
                  : "border-border/50 shadow-lg shadow-primary/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-none rounded-bl-lg bg-accent text-accent-foreground text-xs px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-foreground">{plan.name}</CardTitle>
                <div className="mt-3">
                  <span className="text-4xl font-extrabold text-foreground">₹{plan.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Start 14-Day Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
