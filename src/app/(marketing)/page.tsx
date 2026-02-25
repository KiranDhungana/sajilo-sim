import {
  HeroSection,
  PopularDestinations,
  PromoBanners,
  JumpToSection,
  ESimOffersSection,
  ESimProcessSection,
  CustomerReviewsSection,
} from "@/features/home/components";

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <PopularDestinations />
      <PromoBanners />
      <JumpToSection />
      <ESimOffersSection />
      <ESimProcessSection />
      <CustomerReviewsSection />
    </main>
  );
}
