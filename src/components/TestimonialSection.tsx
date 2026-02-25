import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajitha Perera",
    text: "The best tailor in Pelawatta. My wedding suit was absolutely perfect — every detail was flawless.",
    role: "Groom, 2024",
  },
  {
    name: "Nimal Fernando",
    text: "I've been coming to Janaka Tailers for over 10 years. Their craftsmanship and attention to detail is unmatched.",
    role: "Loyal Customer",
  },
  {
    name: "Ayesha De Silva",
    text: "Thank you very much for making our wedding mesmerizing. Specially thanks to Janaka for assisting us to choose materials and designs while my husband was abroad. Also the neatness and material quality is top notch.Overall quality of the service is astonishing!",
    role: "Loyal Customer"
  }
  
];

const TestimonialSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Testimonials</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold">
          What Our <span className="gold-text-gradient">Clients</span> Say
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="glass-card rounded-lg p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-cream-dark text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
