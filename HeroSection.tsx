import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FlameIcon } from "lucide-react";

interface HeroSectionProps {
  onButtonClick: (sectionId: string) => void;
}

export default function HeroSection({ onButtonClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen pt-16 bg-black text-white flex items-center relative overflow-hidden">
      {/* Main background with dark overlay */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Background image with subtle capsule shapes */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="w-full h-full bg-[url('/images/fire%20blood%202.jpeg')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      
      <div className="container-fireblood relative z-10 w-full py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Product Image */}
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/images/products/fireblood-product-1.png" 
                alt="Fireblood Supplement Containers" 
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
          
          {/* Right side - Hero Content */}
          <div className="order-1 md:order-2 text-center md:text-right">
            <div className="flex justify-center md:justify-end mb-4">
              <img 
                src="/images/icons/fireblood-flame.svg" 
                alt="Fireblood Logo" 
                className="h-20 w-auto md:h-28 footer-logo"
              />
            </div>
            
            <h1 className="fireblood-title text-white mb-4">
              <span className="block">FUEL</span>
              <span className="block">YOUR</span>
              <span className="block">FIRE</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg ml-auto">
              FOUNDATIONAL NUTRITION FOR YOUR<br />
              HIGH PACED LIFE COVERED IN ONE DAILY<br />
              SCOOP.
            </p>
            
            <div className="flex flex-col items-center md:items-end space-y-4">
              <div className="flex items-center justify-center md:justify-end">
                <FlameIcon className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-gray-300">Fuel your fire: Feel unstoppable today!</span>
              </div>
              
              <a 
                href="https://getfireblood.com/choose-your-path" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  className="w-full min-w-[200px] bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-white font-bold py-3 px-6 rounded-sm shadow-lg transition duration-300 border border-red-500"
                >
                  GET FIREBLOOD
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
