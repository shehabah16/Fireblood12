import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "IS FIREBLOOD RIGHT FOR ME?",
      answer: "Fireblood is designed for individuals who lead active lifestyles and want to optimize their physical and mental performance. Whether you're an athlete, professional, parent, or someone looking to enhance their daily health regimen, Fireblood can provide foundational nutritional support."
    },
    {
      question: "WHEN SHOULD I EXPECT TO SEE THE BENEFITS?",
      answer: "Many users report improved energy levels and mental clarity within the first week of consistent use. For more comprehensive benefits like improved recovery and overall wellness, allow 2-4 weeks of daily consumption for your body to fully adapt to the nutritional enhancements."
    },
    {
      question: "WHAT BENEFITS CAN I EXPECT FROM TAKING FIREBLOOD?",
      answer: "Fireblood users typically experience enhanced energy levels, improved mental clarity and focus, better recovery after physical activity, strengthened immune function, and an overall sense of well-being due to the comprehensive blend of essential nutrients, vitamins, and minerals."
    },
    {
      question: "HOW DOES FIREBLOOD TASTE?",
      answer: "Fireblood has a mild, clean taste that's designed to be palatable without excessive sweeteners or artificial flavors. It mixes easily with water and can be combined with your favorite beverage for a personalized experience."
    },
    {
      question: "WHAT PRODUCTS DOES FIREBLOOD REPLACE",
      answer: "Fireblood is designed to replace multiple supplements including multivitamins, mineral supplements, amino acid formulas, and certain performance enhancers. Its comprehensive formula delivers foundational nutrition in one convenient daily scoop."
    },
    {
      question: "WHAT MEASURES DO YOU TAKE TO ENSURE THE QUALITY OF FIREBLOOD?",
      answer: "Fireblood is manufactured in cGMP-certified facilities and undergoes stringent quality control processes. We source premium ingredients and test for purity and potency at multiple stages of production to ensure you receive the highest quality product possible."
    },
    {
      question: "HOW DO I TAKE FIREBLOOD?",
      answer: "Simply mix one scoop of Fireblood with 8-12 oz of water or your preferred beverage. For optimal results, consume daily, preferably in the morning to fuel your day. Consistency is key for experiencing the full benefits."
    }
  ];

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black text-white">
      <div className="container-fireblood mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="fireblood-title mb-2">
            FAQ<span className="text-red-600">'S</span>
          </h2>
          <p className="text-gray-300 uppercase text-lg">OUR MOST COMMONLY ASKED QUESTIONS</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-t border-gray-800 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button 
                className="w-full text-left py-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  <Plus className="h-5 w-5 text-white" />
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 pr-8">{faq.answer}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-800 py-4"></div>
        </div>


      </div>
    </section>
  );
}