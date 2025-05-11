import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";

interface CTASectionProps {
  onButtonClick: (sectionId: string) => void;
}

export default function CTASection({ onButtonClick }: CTASectionProps) {
  const stats = [
    { value: "20,000+", label: "Happy Customers" },
    { value: "4.9/5", label: "Customer Rating" },
    { value: "30-Day", label: "Money-Back Guarantee" }
  ];

  return (
    <section className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
            Ready to Transform Your Energy & Wellness?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-100">
            Join thousands of satisfied customers who have made Fireblood an essential part of their daily routine.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 text-lg"
              onClick={() => onButtonClick("pricing")}
            >
              Get Fireblood Now
            </Button>
            <Button 
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full border-2 border-white transition duration-300 text-lg"
              onClick={() => onButtonClick("benefits")}
            >
              Learn More
            </Button>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
