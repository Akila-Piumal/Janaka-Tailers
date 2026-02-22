import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-background/80 backdrop-blur-sm dark:bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <button onClick={() => handleClick("#home")} className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-wide gold-text-gradient">
            Janaka Tailers
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 tracking-wider uppercase"
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
          <button
            onClick={() => handleClick("#appointment")}
            className="gold-gradient text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Book Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border/50 animate-fade-up">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-left text-sm font-medium text-foreground/70 hover:text-primary transition-colors tracking-wider uppercase py-2"
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => handleClick("#appointment")}
                className="gold-gradient text-primary-foreground px-5 py-3 rounded-sm text-sm font-semibold tracking-wider uppercase mt-2"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
