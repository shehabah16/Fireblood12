import { Ingredient, Testimonial } from "./types";

// Static data for the website
export const ingredients: Ingredient[] = [
  {
    name: "B-Vitamin Complex",
    description: "Essential B vitamins that support energy metabolism, cognitive function, and cellular health.",
    image: "/images/fireblood 3.jpeg",
    feature: "Scientifically dosed"
  },
  {
    name: "Fireblood Shaker",
    description: "Premium BPA-free shaker bottle with unique S-curve design for perfectly mixed servings every time.",
    image: "/images/products/shaker-bottle.svg",
    feature: "Exclusive Fireblood design"
  },
  {
    name: "Amino Acid Blend",
    description: "A precisely balanced blend of essential amino acids to support muscle recovery and protein synthesis.",
    image: "/images/ingredients/amino-acids.svg",
    feature: "Comprehensive profile"
  },
  {
    name: "Precision Scoop",
    description: "Specially designed measuring scoop ensures you get the perfect 10g serving for optimal results.",
    image: "/images/ingredients/scoop.svg",
    feature: "Perfect measurement every time"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Michael R.",
    title: "Marketing Executive",
    review: "I've tried many supplements over the years, but Fireblood is different. Within a week, I noticed a significant boost in my energy levels, and my focus at work has improved dramatically. It's now an essential part of my morning routine.",
    image: "/images/testimonials/avatar-1.svg",
    stars: 5
  },
  {
    name: "Sarah J.",
    title: "Fitness Instructor",
    review: "As a fitness instructor, I need consistent energy throughout the day. Fireblood gives me clean energy without jitters, and I've noticed my recovery time has improved. I recommend it to all my clients who are serious about their health.",
    image: "/images/testimonials/avatar-2.svg",
    stars: 5
  },
  {
    name: "David L.",
    title: "Software Developer",
    review: "I was skeptical at first, but I'm now on my third month of using Fireblood. The difference in my overall wellbeing is remarkable. I sleep better, have more energy during the day, and even my colleagues have noticed how much more productive I've become.",
    image: "/images/testimonials/avatar-3.svg",
    stars: 4.5
  }
];
