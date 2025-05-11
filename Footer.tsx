export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-neutral-900">
      <div className="container-fireblood mx-auto">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/images/icons/fireblood-flame.svg" 
              alt="Fireblood Logo" 
              className="h-20 w-auto footer-logo"
            />
          </div>
          
          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Fireblood Nutrition. All rights reserved.</p>
            <p className="mt-2 text-xs">
              These statements have not been evaluated by the Food and Drug Administration. 
              This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
