import heroImg from "@/assets/hero-tailor.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with zoom-in animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img src={heroImg} alt="Janaka Tailers luxury tailoring" className="w-full h-full object-cover" />
        {/* Light mode: subtle warm overlay; Dark mode: deep overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background dark:from-background/80 dark:via-background/60 dark:to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Since 2010 · Sri Lanka
        </motion.p>
        <motion.h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Perfect Fit.
          <br />
          <motion.span
            className="gold-text-gradient inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >Timeless Style.</motion.span>
        </motion.h1>
        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          Premium tailoring services in Sri Lanka. Handcrafted excellence for the modern gentleman and woman.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
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
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.6 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-primary/40 animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
