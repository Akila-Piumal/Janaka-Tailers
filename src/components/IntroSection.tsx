import { Scissors } from "lucide-react";
import { motion } from "framer-motion";

const IntroSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <Scissors className="mx-auto mb-6 text-primary" size={32} />
      </motion.div>
      <motion.h2
        className="font-serif text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Crafting <span className="gold-text-gradient">Elegance</span> Since 1995
      </motion.h2>
      <motion.p
        className="text-cream-dark leading-relaxed text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        At Janaka Tailers, we believe every stitch tells a story. As one of Sri Lanka's most trusted family-owned tailoring houses, we blend traditional craftsmanship with contemporary design to create garments that fit perfectly and last a lifetime.
      </motion.p>
    </div>
  </section>
);

export default IntroSection;
