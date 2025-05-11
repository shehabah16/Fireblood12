import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MoreInOneSection from "@/components/MoreInOneSection";
import TasteOfDeterminationSection from "@/components/TasteOfDeterminationSection";
import IngredientsSection from "@/components/IngredientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = "Fireblood - Fuel Your Fire";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Fireblood is foundational nutrition for your high paced life, covered in one daily scoop.';
    document.head.appendChild(metaDescription);
    
    // Add favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '/images/icons/flame-logo-red.svg';
    favicon.type = 'image/svg+xml';
    document.head.appendChild(favicon);
    
    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    // Observe all animatable elements
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(element);
    });
    
    // Clean up
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
      if (metaDescription.parentNode) {
        metaDescription.parentNode.removeChild(metaDescription);
      }
      if (favicon.parentNode) {
        favicon.parentNode.removeChild(favicon);
      }
    };
  }, []);

  // Smooth scroll function for navigation
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={scrollToSection} />
      <main>
        <div id="home">
          <HeroSection onButtonClick={scrollToSection} />
        </div>
        <MoreInOneSection />
        <TasteOfDeterminationSection />
        <IngredientsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
