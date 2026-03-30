import { MessageSquare, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Recover Your Lost Revenue?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Join 500+ Indian businesses already automating their WhatsApp follow-ups. Start your free trial today.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 h-12">
            Start Free Trial — It's Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="#" className="flex items-center gap-2 font-bold text-lg text-background mb-4">
                <MessageSquare className="h-5 w-5 text-accent" />
                FollowUpCash
              </a>
              <p className="text-sm text-background/50 leading-relaxed">
                WhatsApp Revenue Automation for Indian local service businesses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-background mb-4 text-sm">Product</h4>
              <div className="space-y-2">
                {["How It Works", "Industries", "Pricing", "FAQ"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase().replace(/ /g, "-")}`} className="block text-sm text-background/50 hover:text-background transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-background mb-4 text-sm">Company</h4>
              <div className="space-y-2">
                {["About Us", "Blog", "Careers", "Privacy Policy", "Terms of Service"].map((link) => (
                  <a key={link} href="#" className="block text-sm text-background/50 hover:text-background transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-background mb-4 text-sm">Contact</h4>
              <div className="space-y-3">
                <a href="https://wa.me/919876543210" className="flex items-center gap-2 text-sm text-background/50 hover:text-background transition-colors">
                  <Phone className="h-4 w-4" /> +91 98765 43210
                </a>
                <a href="mailto:hello@followupcash.com" className="flex items-center gap-2 text-sm text-background/50 hover:text-background transition-colors">
                  <Mail className="h-4 w-4" /> hello@followupcash.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/40">
              © 2026 FollowUpCash. All rights reserved.
            </p>
            <p className="text-sm text-background/40">
              Made in India 🇮🇳
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
