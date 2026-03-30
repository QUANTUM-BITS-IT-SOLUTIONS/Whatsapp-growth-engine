import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, IndianRupee } from "lucide-react";

const RevenueCalculator = () => {
  const [leads, setLeads] = useState(100);
  const [currentRate, setCurrentRate] = useState(20);
  const [ticket, setTicket] = useState(8000);

  const improvedRate = Math.min(currentRate + 15, 95);
  const currentRevenue = leads * (currentRate / 100) * ticket;
  const improvedRevenue = leads * (improvedRate / 100) * ticket;
  const extraRevenue = improvedRevenue - currentRevenue;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
            <Calculator className="h-4 w-4" />
            Revenue Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Much Revenue Are <span className="text-destructive">You</span> Losing?
          </h2>
          <p className="text-lg text-muted-foreground">
            Adjust the sliders to see your potential recovery.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-border/50 shadow-xl shadow-primary/5">
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Leads per month */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-foreground">Leads per month</label>
                    <span className="text-sm font-bold text-accent">{leads}</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={500}
                    step={10}
                    value={leads}
                    onChange={(e) => setLeads(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>20</span><span>500</span>
                  </div>
                </div>

                {/* Current conversion rate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-foreground">Current conversion rate</label>
                    <span className="text-sm font-bold text-accent">{currentRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    step={5}
                    value={currentRate}
                    onChange={(e) => setCurrentRate(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5%</span><span>50%</span>
                  </div>
                </div>

                {/* Average ticket */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-foreground">Average ticket size (₹)</label>
                    <span className="text-sm font-bold text-accent">₹{ticket.toLocaleString("en-IN")}</span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={50000}
                    step={500}
                    value={ticket}
                    onChange={(e) => setTicket(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>₹500</span><span>₹50,000</span>
                  </div>
                </div>

                {/* Results */}
                <div className="border-t border-border pt-6">
                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">Current Monthly Revenue</p>
                      <p className="text-xl font-bold text-foreground">₹{currentRevenue.toLocaleString("en-IN")}</p>
                      <p className="text-xs text-muted-foreground">{currentRate}% conversion</p>
                    </div>
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">With FollowUpCash</p>
                      <p className="text-xl font-bold text-accent">₹{improvedRevenue.toLocaleString("en-IN")}</p>
                      <p className="text-xs text-muted-foreground">{improvedRate}% conversion</p>
                    </div>
                    <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                      <p className="text-xs text-accent font-medium mb-1">Extra Revenue / Month</p>
                      <div className="flex items-center justify-center gap-1">
                        <IndianRupee className="h-5 w-5 text-accent" />
                        <p className="text-2xl font-extrabold text-accent">{extraRevenue.toLocaleString("en-IN")}</p>
                      </div>
                      <p className="text-xs text-accent/70 mt-1">That's ₹{(extraRevenue * 12).toLocaleString("en-IN")}/year</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RevenueCalculator;
