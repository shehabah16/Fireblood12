import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Zap, Brain, Shield, Heart } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Increased Energy",
      description: "Natural, sustainable energy without the crash or jitters of caffeine-heavy products.",
      bgColor: "bg-primary/10",
      textColor: "text-primary"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Mental Clarity",
      description: "Sharper focus and improved cognitive function for peak mental performance.",
      bgColor: "bg-secondary/10",
      textColor: "text-secondary"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Immune Support",
      description: "Strengthen your body's natural defenses against everyday challenges.",
      bgColor: "bg-accent/10",
      textColor: "text-accent"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Physical Performance",
      description: "Optimize your workouts and recovery with improved stamina and endurance.",
      bgColor: "bg-dark/10",
      textColor: "text-dark"
    }
  ];

  const stats = [
    { label: "Energy Improvement", percentage: 92, color: "bg-primary" },
    { label: "Mental Clarity", percentage: 88, color: "bg-secondary" },
    { label: "Overall Wellness", percentage: 85, color: "bg-accent" }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Experience The <span className="text-primary">Benefits</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Fireblood can transform your daily life and help you achieve your wellness goals.
          </p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 section-transition">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <motion.div 
                className="benefit-card bg-white rounded-xl shadow-md p-6 text-center transition-all duration-300"
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${benefit.bgColor} ${benefit.textColor} mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
        
        <ScrollAnimation className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8" delay={0.3}>
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-2xl font-bold font-montserrat mb-4">Real Results You Can Feel</h3>
              <p className="text-gray-600 mb-6">
                Fireblood is designed to provide noticeable improvements in how you feel day-to-day. 
                Our customers report significant positive changes within just 2 weeks of consistent use.
              </p>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  >
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div 
                        className={`${stat.color} h-2.5 rounded-full`} 
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      ></motion.div>
                    </div>
                    <span className="ml-4 text-sm font-medium">{stat.percentage}% {stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500" 
                alt="Person feeling energetic and healthy" 
                className="rounded-xl shadow-md w-full h-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
