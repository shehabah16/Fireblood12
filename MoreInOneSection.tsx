import { motion } from "framer-motion";
import { BrainCircuit, Recycle, Award, Activity, Ban } from "lucide-react";

export default function MoreInOneSection() {
  const features = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-white" />,
      title: "SCIENCE DRIVEN",
      description: "Formulated using the latest nutritional research"
    },
    {
      icon: <Recycle className="h-8 w-8 text-white" />,
      title: "CONTINUAL IMPROVEMENT",
      description: "We constantly refine our formula for optimal results"
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "WARRIOR CERTIFIED",
      description: "Approved by professionals who demand the best"
    },
    {
      icon: <Activity className="h-8 w-8 text-white" />,
      title: "PEAK-MALE PERFORMANCE",
      description: "Designed to unlock your full potential"
    },
    {
      icon: <Ban className="h-8 w-8 text-white" />,
      title: "TASTES TERRIBLE!",
      description: "We focus on function over flavor for maximum benefit"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container-fireblood mx-auto">
        <div className="text-center mb-6 animate-on-scroll">
          <div className="flex justify-center mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-white mx-0.5">★</span>
              ))}
            </div>
          </div>
          <p className="text-gray-300 mb-8">The Warrior's Choice.</p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 animate-on-scroll">
          <h2 className="fireblood-title text-center mb-8">
            MORE-IN-ONE<br />
            <span className="text-white text-4xl md:text-5xl font-bold">NUTRITION</span>
          </h2>
          
          <p className="text-gray-300 mb-8 uppercase text-center">
            FIREBLOOD IS DESIGNED TO REPLACE MULTIPLE<br />
            SUPPLEMENTS BY COVERING NUTRITIONAL GAPS<br />
            WITH ESSENTIAL NUTRIENTS AND VITAMINS. JUST<br />
            ONE SCOOP EACH DAY HELPS MEET YOUR<br />
            FOUNDATIONAL HEALTH NEEDS.
          </p>

          <p className="text-gray-300 uppercase text-center font-semibold mb-12">
            SIMPLY PUT, IT'S A WAY TO INVEST IN YOUR HEALTH<br />
            NOW AND IN THE LONG RUN.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center animate-on-scroll"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-sm font-bold mb-2 text-white">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}