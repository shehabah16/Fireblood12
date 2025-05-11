import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container-fireblood mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex justify-center mb-6">
            <img src="/images/icons/flame-logo-red.svg" alt="Fireblood Logo" className="h-14 w-14" />
          </div>
          <h2 className="fireblood-title mb-4">
            CUSTOMER <span className="text-red-600">RESULTS</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real people, real results - see how Fireblood has transformed lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-on-scroll">
              <motion.div 
                className="bg-gray-900 rounded-md border border-gray-800 shadow-lg p-6 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)" }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-amber-400 flex">
                    {Array(5).fill(0).map((_, i) => (
                      i < testimonial.stars ? 
                        <Star key={i} className="h-4 w-4 mr-1 fill-current" /> : 
                        (i === Math.floor(testimonial.stars) && testimonial.stars % 1 !== 0) ? 
                          <StarHalf key={i} className="h-4 w-4 mr-1 fill-current" /> : 
                          <Star key={i} className="h-4 w-4 mr-1 text-gray-700" />
                    ))}
                  </div>
                  <div className="ml-2 text-sm text-gray-400">Verified Purchase</div>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-3 object-cover border border-gray-700"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
