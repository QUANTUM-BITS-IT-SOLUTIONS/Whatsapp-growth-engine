import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this compliant with WhatsApp policies?",
    a: "Yes, 100%. We use the official WhatsApp Business API provided by Meta. All messages follow Meta's commerce and messaging policies. Your number is safe.",
  },
  {
    q: "Will my number get banned?",
    a: "No. Unlike unofficial tools, we use Meta-approved APIs with proper opt-in flows. Your messages are template-approved, which means WhatsApp treats them as legitimate business communications.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "Not at all. If you can use WhatsApp, you can use FollowUpCash. Our onboarding wizard guides you step-by-step. Most business owners are live in under 10 minutes.",
  },
  {
    q: "Can you help set it up?",
    a: "Absolutely. Every new business gets a free onboarding call. Our team will set up your WhatsApp connection, import your leads, and configure your first follow-up sequence — all in 30 minutes.",
  },
  {
    q: "Can I use it in Hindi?",
    a: "Yes! All message templates support Hindi, Hinglish, and regional languages. Our pre-built industry templates come in both Hindi and English variants.",
  },
  {
    q: "What happens after the free trial?",
    a: "Your 14-day free trial includes full access to all Growth plan features. After the trial, choose a plan that fits. No auto-charge — you decide when to upgrade.",
  },
  {
    q: "Can I import my existing customer list?",
    a: "Yes. Upload a CSV or Excel file and we'll map it automatically. You can also add leads manually or connect your website/ad forms for auto-capture.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Questions, Answered
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card shadow-sm">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
