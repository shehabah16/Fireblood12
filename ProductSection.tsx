import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";
import { CheckCircle } from "lucide-react";

export default function ProductSection() {
  const productFeatures = [
    {
      title: "Natural Energy Boost",
      description: "No crash, no jitters - just clean, sustainable energy to power through your day."
    },
    {
      title: "Enhanced Mental Clarity",
      description: "Focus better and think clearer with our cognitive-supporting blend."
    },
    {
      title: "Immune System Support",
      description: "Fortify your body's natural defenses with essential nutrients and antioxidants."
    },
    {
      title: "Overall Wellness",
      description: "Feel better every day with comprehensive nutritional support."
    }
  ];

  return (
    <section id="product" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <img src="/images/logo/fireblood-logo.svg" alt="Fireblood Logo" className="h-12 w-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Introducing <span className="text-primary">Fireblood</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our premium supplement designed to enhance your body's natural energy systems and boost overall wellness.
          </p>
        </ScrollAnimation>
        
        <div className="flex flex-wrap items-center">
          <ScrollAnimation className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative mx-auto max-w-md lg:mr-auto">
              {/* Product Image */}
              <motion.img 
                src="/images/fireblood-select.png" 
                alt="Fireblood Supplement Bottle" 
                className="rounded-lg shadow-xl w-full h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Product details dots */}
              <motion.div 
                className="absolute top-1/4 -right-4 bg-secondary text-white p-1 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span className="text-xs font-bold">1</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-2/3 -left-4 bg-accent text-white p-1 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <span className="text-xs font-bold">2</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 -right-4 bg-primary text-white p-1 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <span className="text-xs font-bold">3</span>
              </motion.div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation className="w-full lg:w-1/2" delay={0.2}>
            <h3 className="text-2xl font-bold font-montserrat mb-6">Premium Energy & Wellness Formula</h3>
            
            {productFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                className="mb-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-2">
                  <CheckCircle className="text-accent mr-2" />
                  <h4 className="font-semibold text-lg">{feature.title}</h4>
                </div>
                <p className="text-gray-600 pl-7">{feature.description}</p>
              </motion.div>
            ))}
            
            <Button 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-300"
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Get Your Fireblood Now
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
