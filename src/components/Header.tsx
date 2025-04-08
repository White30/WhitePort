
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 shadow-md backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-microsoft-blue">
          Gonçalo Branco
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-gray-700 hover:text-microsoft-blue transition-colors rounded-md"
            >
              {item.name}
            </a>
          ))}
          <Button className="ml-2 bg-microsoft-blue hover:bg-microsoft-blue/90">
            <a href="#contact">Contact Me</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 px-4 text-gray-700 hover:bg-gray-100 hover:text-microsoft-blue rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="mt-2 w-full bg-microsoft-blue hover:bg-microsoft-blue/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
