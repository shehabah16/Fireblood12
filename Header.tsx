import { useState, useEffect } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: "HOME", sectionId: "home" },
    { name: "NUTRITION", sectionId: "ingredients" },
    { name: "RESULTS", sectionId: "testimonials" },
    { name: "FAQ", sectionId: "faq" },
    { name: "GET FIREBLOOD", sectionId: "pricing" },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const navigateToCheckout = () => {
    window.open("https://getfireblood.com/choose-your-path", "_blank");
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-sm' : 'bg-transparent'}`}>
      <div className="container-fireblood px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <button 
          className="flex items-center focus:outline-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="/images/icons/fireblood-flame.svg" 
            alt="Fireblood Logo" 
            className="h-10 w-auto header-logo"
          />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.sectionId)}
                  className="text-white hover:text-red-600 text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Shopping Cart */}
        <div className="flex items-center">
          <button 
            onClick={navigateToCheckout}
            className="flex items-center text-white"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={20} />
            <span className="ml-1 text-white bg-red-600 text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center">0</span>
          </button>
          
          {/* Mobile Menu Button */}
          <button
            className="ml-4 p-1 text-white md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Dropdown */}
      <div className={`px-4 py-4 bg-black/95 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavClick(item.sectionId)}
                className="block w-full text-left py-2 text-white text-sm font-medium hover:text-red-600"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
