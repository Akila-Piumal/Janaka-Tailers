import heroImg from "@/assets/hero-tailor.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Janaka Tailers luxury tailoring" className="w-full h-full object-cover" />
        {/* Light mode: subtle warm overlay; Dark mode: deep overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background dark:from-background/80 dark:via-background/60 dark:to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-6 animate-fade-up">
          Since 2010 · Sri Lanka
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-up-delay-1 text-foreground">
          Perfect Fit.
          <br />
          <span className="gold-text-gradient">Timeless Style.</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
          Premium tailoring services in Sri Lanka. Handcrafted excellence for the modern gentleman and woman.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <a
            href="#appointment"
            className="gold-gradient text-primary-foreground px-8 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="border border-foreground/30 text-foreground px-8 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-foreground/10 transition-colors"
          >
            View Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-primary/40 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
