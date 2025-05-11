import { motion } from "framer-motion";
import { FlaskRound, Search, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { ingredients } from "@/lib/data";

export default function IngredientsSection() {
  const [showAllIngredients, setShowAllIngredients] = useState(false);
  
  const nutritionData = [
    { ingredient: "Vitamin A (as Retinyl Palmitate)", amount: "900ug RE", percentNRV: "125%" },
    { ingredient: "Vitamin D3 (as Cholecalciferol)", amount: "50ug (2000iu)", percentNRV: "250%" },
    { ingredient: "Vitamin E (as D-Alpha Tocopherol and Mixed Tocopherols)", amount: "45mg α-TE", percentNRV: "375%" },
    { ingredient: "Vitamin K1 (as Phylloquinone)", amount: "120ug", percentNRV: "160%" },
    { ingredient: "Vitamin K2 (as Menaquinone-4)", amount: "120ug", percentNRV: "160%" },
    { ingredient: "Vitamin C (as Ascorbic Acid)", amount: "500mg", percentNRV: "625%" },
    { ingredient: "Vitamin B1 (as Thiamine Hydrochloride)", amount: "12mg", percentNRV: "1091%" },
    { ingredient: "Vitamin B2 (as Riboflavin 5'Phosphate)", amount: "10mg", percentNRV: "714%" },
    { ingredient: "Vitamin B3 (as Nicotinamide)", amount: "32mg NE", percentNRV: "200%" },
    { ingredient: "Vitamin B6 (as Pyridoxine 5'Phosphate)", amount: "10mg", percentNRV: "714%" },
    { ingredient: "Folate (as L-5 Methyltetrahydrofolate)", amount: "667ug DFE", percentNRV: "200%" },
    { ingredient: "Vitamin B12 (as Methylcobalamin)", amount: "2.5ug", percentNRV: "100%" },
    { ingredient: "Biotin (as D-Biotin)", amount: "120ug", percentNRV: "240%" },
    { ingredient: "Pantothenic Acid (as Calcium D-Pantothenate)", amount: "20mg", percentNRV: "333%" },
    { ingredient: "Choline (as Phosphatidylcholine)", amount: "100mg", percentNRV: "**" },
    { ingredient: "Potassium (as Potassium Chloride)", amount: "100mg", percentNRV: "5%" },
    { ingredient: "Chloride (as Potassium Chloride and Pink Himalayan Salt)", amount: "148mg", percentNRV: "19%" },
    { ingredient: "Calcium (as Calcium Bisglycinate and Calcium D-Pantothenate)", amount: "50mg", percentNRV: "6.3%" },
    { ingredient: "Magnesium (as Di-Magnesium Malate and Magnesium Bisglycinate)", amount: "100mg", percentNRV: "27%" },
    { ingredient: "Zinc (as Zinc Bisglycinate)", amount: "11mg", percentNRV: "110%" },
    { ingredient: "Copper (as Copper Bisglycinate)", amount: "450ug", percentNRV: "45%" },
    { ingredient: "Manganese (as Manganese Bisglycinate)", amount: "1mg", percentNRV: "50%" },
    { ingredient: "Selenium (as L-Selenomethionine)", amount: "25ug", percentNRV: "46%" },
    { ingredient: "Molybdenum (as Sodium Molybdate Dihydrate)", amount: "20ug", percentNRV: "50%" },
    { ingredient: "Iodine (as Sea Kelp)", amount: "75ug", percentNRV: "50%" },
    { ingredient: "Sodium (as Pink Himalayan Salt)", amount: "40mg", percentNRV: "**" },
    { ingredient: "Methylsulfonylmethane (as OptiMSM®)", amount: "500mg", percentNRV: "**" },
    { ingredient: "L-Leucine", amount: "982mg", percentNRV: "**" },
    { ingredient: "L-Valine", amount: "828.5mg", percentNRV: "**" },
    { ingredient: "L-Isoleucine", amount: "741.5mg", percentNRV: "**" },
    { ingredient: "L-Lysine", amount: "714.5mg", percentNRV: "**" },
    { ingredient: "L-Phenylalanine", amount: "644.5mg", percentNRV: "**" },
    { ingredient: "L-Threonine", amount: "555.5mg", percentNRV: "**" },
    { ingredient: "L-Methionine", amount: "349.5mg", percentNRV: "**" },
    { ingredient: "L-Tryptophan", amount: "184mg", percentNRV: "**" },
    { ingredient: "L-Histidine", amount: "71.5mg", percentNRV: "**" },
    { ingredient: "L-Glycine", amount: "1000mg", percentNRV: "**" },
    { ingredient: "L-Taurine", amount: "500mg", percentNRV: "**" },
    { ingredient: "L-Proline", amount: "250mg", percentNRV: "**" }
  ];

  return (
    <section id="ingredients" className="py-20 bg-gray-950 text-white">
      <div className="container-fireblood mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex justify-center mb-6">
            <img src="/images/icons/blood-drop.svg" alt="Fireblood Logo" className="h-20 w-auto footer-logo" />
          </div>
          <h2 className="fireblood-title mb-4">
            FIREBLOOD <span className="text-red-600">INGREDIENTS</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            We source only the highest quality natural ingredients to create a formula that delivers real results.
          </p>
          
          <div className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-md border border-gray-800 mb-12 animate-on-scroll">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3">
                <img 
                  src="/images/products/fireblood-product-2.png" 
                  alt="Fireblood Ingredients" 
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="md:w-2/3 text-left">
                <h3 className="text-xl font-bold mb-4 text-white">YOUR LOOK INSIDE FIREBLOOD:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">—</span>
                    COMPLETE MULTIVITAMIN FORMULA
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">—</span>
                    BIOAVAILABLE MINERALS
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">—</span>
                    ESSENTIAL AMINO ACID PROFILE
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">—</span>
                    HIGH-DOSE B VITAMINS
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">—</span>
                    PERFORMANCE ANTIOXIDANTS
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">—</span>
                    SCIENTIFICALLY DOSED
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">—</span>
                    PREMIUM BIOAVAILABILITY
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured ingredients with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="animate-on-scroll">
              <motion.div 
                className="ingredient-card bg-gray-900 rounded-md border border-gray-800 shadow-lg overflow-hidden transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={ingredient.image} 
                    alt={ingredient.name} 
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{ingredient.name}</h3>
                  <p className="text-gray-300 mb-4">{ingredient.description}</p>
                  <div className="flex items-center text-sm text-red-500">
                    <FlaskRound className="mr-2 h-4 w-4" />
                    <span>{ingredient.feature}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* Complete ingredients list in table format */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-gray-900 rounded-md border border-gray-800 shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h3 className="text-2xl font-bold mb-4 md:mb-0 text-white">Complete Nutrition Facts</h3>
              <div className="flex items-center">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-300">30 Servings Per Container</span>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-gray-700">
                    <th className="text-left py-3 font-bold text-gray-200">Ingredient</th>
                    <th className="text-left py-3 font-bold text-gray-200">Per Serving</th>
                    <th className="text-left py-3 font-bold text-gray-200">%NRV*</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionData.slice(0, showAllIngredients ? nutritionData.length : 10).map((item, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-2 text-gray-300">{item.ingredient}</td>
                      <td className="py-2 text-gray-300">{item.amount}</td>
                      <td className="py-2 text-gray-300">{item.percentNRV}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 text-center">
              <Button
                variant="ghost"
                className="text-red-500 hover:text-red-400 font-semibold flex items-center gap-1"
                onClick={() => setShowAllIngredients(!showAllIngredients)}
              >
                {showAllIngredients ? (
                  <>
                    Show Less <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show All Ingredients <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
            
            <div className="mt-6 text-xs text-gray-400">
              <p>*NRV = Nutrient Reference Values based on a 2,000 calorie diet.</p>
              <p>**Daily Value not established.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
