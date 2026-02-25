import { Shirt, Gem, Scissors, Ruler, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Shirt,
    title: "Custom Suits",
    description: "Bespoke suits tailored to your exact measurements and style preferences, crafted from premium fabrics.",
  },
  {
    icon: Gem,
    title: "Wedding Suits",
    description: "Make your special day perfect with our exquisite wedding suits designed for elegance and comfort.",
  },
  {
    icon: Scissors,
    title: "Alterations",
    description: "Expert alterations to ensure your existing garments fit flawlessly. Quick turnaround guaranteed.",
  },
  {
    icon: Ruler,
    title: "Shirt Stitching",
    description: "Custom-made shirts in any style, from formal to casual, using the finest cotton and linen fabrics.",
  },
  {
    icon: Users,
    title: "Uniform Stitching",
    description: "Professional uniforms for schools, offices, and organizations. Bulk orders welcome with competitive pricing.",
  }
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">What We Offer</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold">
          Our <span className="gold-text-gradient">Services</span>
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="glass-card rounded-lg p-8 group hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_hsl(37_45%_58%/0.15)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
              <s.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
            <p className="text-cream-dark text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
