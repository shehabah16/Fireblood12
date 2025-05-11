import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Apple, Droplet, Leaf } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Mix One Scoop",
      description: "Add one level scoop of Fireblood to 8-10 oz of water or your favorite beverage."
    },
    {
      number: 2,
      title: "Stir or Shake Well",
      description: "Mix thoroughly until completely dissolved for maximum effectiveness."
    },
    {
      number: 3,
      title: "Drink Daily",
      description: "Consume one serving daily, preferably in the morning to maximize energy benefits."
    },
    {
      number: 4,
      title: "Feel The Difference",
      description: "Experience improved energy, focus and wellness within 30 minutes of consumption."
    }
  ];

  const flavorOptions = [
    {
      icon: <Apple className="h-5 w-5" />,
      title: "Fruit Smoothie",
      description: "Blend with your favorite fruits for a delicious morning boost.",
      bgColor: "bg-primary/10",
      textColor: "text-primary"
    },
    {
      icon: <Droplet className="h-5 w-5" />,
      title: "Coconut Water",
      description: "The natural electrolytes complement Fireblood perfectly.",
      bgColor: "bg-secondary/10",
      textColor: "text-secondary"
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "Green Tea",
      description: "Combine with cool green tea for enhanced antioxidant benefits.",
      bgColor: "bg-accent/10",
      textColor: "text-accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            How <span className="text-primary">Fireblood</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple to use, powerful results - follow these steps to maximize your Fireblood experience.
          </p>
        </ScrollAnimation>
        
        <div className="flex flex-wrap items-center mb-20">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 order-2 lg:order-1">
            <div className="max-w-md mx-auto lg:ml-auto lg:mr-0">
              {steps.map((step, index) => (
                <ScrollAnimation key={index} delay={index * 0.15}>
                  <motion.div 
                    className="mb-10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                          {step.number}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-montserrat mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
          
          <ScrollAnimation className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <motion.img 
                src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?q=80&w=500" 
                alt="Person preparing Fireblood supplement" 
                className="rounded-xl shadow-lg w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="font-bold text-primary">Pro Tip</p>
                <p className="text-sm text-gray-600">Try with coconut water for an extra hydration boost!</p>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation className="bg-white rounded-xl shadow-md p-6" delay={0.3}>
          <h3 className="text-xl font-bold font-montserrat mb-4 text-center">Flavor Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flavorOptions.map((flavor, index) => (
              <motion.div 
                key={index}
                className="text-center p-4 rounded-lg bg-gray-50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${flavor.bgColor} ${flavor.textColor} mb-3`}>
                  {flavor.icon}
                </div>
                <h4 className="font-semibold mb-2">{flavor.title}</h4>
                <p className="text-gray-600 text-sm">{flavor.description}</p>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
