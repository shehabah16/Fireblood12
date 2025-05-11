import { motion } from "framer-motion";
import { Zap, Activity, Target } from "lucide-react";

export default function TasteOfDeterminationSection() {
  const benefits = [
    {
      icon: <Zap className="h-10 w-10 text-red-500" />,
      title: "ALL-IN-ONE FORMULA",
      description: "Every sip of Fireblood delivers a comprehensive blend of essential nutrients, meticulously selected to fuel your journey towards peak physical and mental performance."
    },
    {
      icon: <Activity className="h-10 w-10 text-red-500" />,
      title: "NO ADDITIVES, PURE QUALITY",
      description: "We've stripped away the unnecessary, and sourced the finest ingredients. Delivering a potent, robust and uncompromising supplement to support your physical and mental health."
    },
    {
      icon: <Target className="h-10 w-10 text-red-500" />,
      title: "CRAFTED FOR THE WINNERS",
      description: "When your schedule is stacked, training hard and work load high, you need an ally by your side. Fireblood is a daily single scoop nutritional stack giving your body what it needs to excel each day."
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container-fireblood mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl mb-2 text-white uppercase">TASTE OF</h2>
          <h2 className="fireblood-title text-center mb-14">
            <span className="text-white">DETERMINATION</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center animate-on-scroll"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-6 glow-effect">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-4 text-white uppercase">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}