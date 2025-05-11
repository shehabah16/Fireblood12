import { CheckCircle2, Truck, Medal, RotateCcw } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function FeaturedBanner() {
  const features = [
    {
      icon: <CheckCircle2 className="text-accent text-2xl mr-2" />,
      text: "100% Natural Ingredients"
    },
    {
      icon: <Truck className="text-accent text-2xl mr-2" />,
      text: "Free Shipping Over $50"
    },
    {
      icon: <Medal className="text-accent text-2xl mr-2" />,
      text: "Satisfaction Guaranteed"
    },
    {
      icon: <RotateCcw className="text-accent text-2xl mr-2" />,
      text: "30-Day Money Back"
    }
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center text-center md:text-left">
          {features.map((feature, index) => (
            <ScrollAnimation 
              key={index} 
              className="w-full md:w-auto mb-4 md:mb-0"
              delay={index * 0.1}
            >
              <div className="flex items-center justify-center md:justify-start">
                {feature.icon}
                <span className="font-medium">{feature.text}</span>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
