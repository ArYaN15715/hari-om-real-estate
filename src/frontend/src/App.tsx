import CategoriesSection from "./components/CategoriesSection";
import CtaSection from "./components/CtaSection";
import FeaturedPlots from "./components/FeaturedPlots";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <FeaturedPlots />
      <WhyChooseUs />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
}
