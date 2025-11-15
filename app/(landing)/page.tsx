import { BenefitsSection } from "@/features/landing/components/benefits-section";
import { FaqsSection } from "@/features/landing/components/faq-section";
import { Footer } from "@/features/landing/components/footer";
import { Header } from "@/features/landing/components/header";
import { HeroSection } from "@/features/landing/components/hero-section";
import { PricingSection } from "@/features/landing/components/pricing-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="xl:mx-auto max-w-6xl mx-7 mt-10">
        <HeroSection />
        <BenefitsSection />
        <PricingSection />
        <FaqsSection />
      </main>
      <Footer />
    </>
  );
}
