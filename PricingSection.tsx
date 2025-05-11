import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FlameIcon, CheckCircle, ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-black text-white">
      <div className="container-fireblood mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex justify-center mb-6">
            <img src="/images/icons/flame-logo-red.svg" alt="Fireblood Logo" className="h-14 w-14" />
          </div>
          <h2 className="fireblood-title text-3xl md:text-5xl mb-4">
            GET <span className="text-red-600">FIREBLOOD</span> TODAY
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            FOUNDATIONAL NUTRITION FOR YOUR HIGH PACED LIFE
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gray-900 rounded-md shadow-2xl overflow-hidden p-6 md:p-8 border border-gray-800 animate-on-scroll"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="flex flex-col md:flex-row gap-10 items-center mb-10">
              <div className="w-full md:w-1/2">
                <motion.img 
                  src="/images/products/fireblood-product-3.png" 
                  alt="Fireblood Product" 
                  className="w-full h-auto rounded-md shadow-md"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Premium Formula</h3>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 h-5 w-5 mt-1 mr-3 shrink-0" />
                    <span className="text-gray-300">Complete daily nutrition in one scoop</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 h-5 w-5 mt-1 mr-3 shrink-0" />
                    <span className="text-gray-300">Advanced vitamin & mineral complex</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 h-5 w-5 mt-1 mr-3 shrink-0" />
                    <span className="text-gray-300">Full essential amino acid profile</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 h-5 w-5 mt-1 mr-3 shrink-0" />
                    <span className="text-gray-300">30-day satisfaction guarantee</span>
                  </li>
                </ul>
                
                <a 
                  href="https://getfireblood.com/choose-your-path" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button 
                    className="w-full md:text-lg bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-white font-bold py-4 px-8 rounded-sm shadow-lg transition duration-300 flex items-center justify-center gap-2 border border-red-500"
                  >
                    <FlameIcon className="h-5 w-5" />
                    GET FIREBLOOD NOW
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-md border border-gray-700">
              <div className="flex items-center justify-center md:justify-between flex-wrap gap-4">
                <h4 className="text-xl font-bold text-white text-center md:text-left">100% Satisfaction Guarantee</h4>
                <p className="text-gray-300 text-center md:text-right">
                  If you're not completely satisfied, return within 30 days for a full refund.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
