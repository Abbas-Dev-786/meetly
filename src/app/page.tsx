import HeroSection from "@/components/home/hero-section";
import FeatureSection from "@/components/home/features-section";
import HowItWorkSection from "@/components/home/how-it-works-section";
import CTA from "@/components/shared/cta";
import TestimonialSection from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <HowItWorkSection />
      <CTA />
    </>
  );
}
