import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorks from "@/components/landing/HowItWorks";
import IndustrySection from "@/components/landing/IndustrySection";
import RevenueCalculator from "@/components/landing/RevenueCalculator";
import PricingSection from "@/components/landing/PricingSection";
import SocialProof from "@/components/landing/SocialProof";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorks />
        <IndustrySection />
        <RevenueCalculator />
        <PricingSection />
        <SocialProof />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
