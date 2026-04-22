import React from "react";
import HeroSection from "../components/landing/HeroSection";
import QuoteSection from "../components/landing/QuoteSection";
import IndustriesBar from "../components/landing/IndustriesBar";
import ServicesSection from "../components/landing/ServicesSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import AudienceSection from "../components/landing/AudienceSection";
import WhyUsSection from "../components/landing/WhyUsSection";
import UseCasesSection from "../components/landing/UseCasesSection";
import FAQSection from "../components/landing/FAQSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";
import ParticipantsPhotosSection from "../components/landing/ParticipantsPhotosSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <IndustriesBar />
      <ServicesSection />
      <HowItWorksSection />
      <ParticipantsPhotosSection />
      <AudienceSection />
      <WhyUsSection />
      <UseCasesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
