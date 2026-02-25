import { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      {/* Newsletter */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="max-w-xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-2xl font-bold mb-3">Stay in Style</h3>
          <p className="text-cream-dark text-sm mb-6">Subscribe for exclusive offers, new arrivals, and tailoring tips.</p>
          {subscribed ? (
            <p className="text-primary text-sm font-medium">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="flex-1 bg-secondary/50 border border-border rounded-sm px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button type="submit" className="gold-gradient text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          )}
        </motion.div>

        {/* Links */}
        <motion.div
          className="grid sm:grid-cols-3 gap-8 text-center sm:text-left border-t border-border/50 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <span className="font-serif text-xl font-bold gold-text-gradient">Janaka Tailers</span>
            <p className="text-cream-dark text-sm mt-2">Premium tailoring since 2010.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-3 tracking-wider uppercase">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block text-cream-dark text-sm hover:text-primary transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-3 tracking-wider uppercase">Contact</h4>
            <p className="text-cream-dark text-sm">+94 77 984 5592</p>
            <p className="text-cream-dark text-sm">info@janakatailers.lk</p>
            <p className="text-cream-dark text-sm mt-1">Baduraliya Rd, Pelawatta</p>
          </div>
        </motion.div>

        <div className="text-center text-muted-foreground text-xs mt-8 pt-6 border-t border-border/50">
          © {new Date().getFullYear()} Janaka Tailers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
