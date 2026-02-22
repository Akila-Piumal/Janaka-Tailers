import { Scissors } from "lucide-react";

const IntroSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-4xl text-center">
      <Scissors className="mx-auto mb-6 text-primary" size={32} />
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
        Crafting <span className="gold-text-gradient">Elegance</span> Since 1995
      </h2>
      <p className="text-cream-dark leading-relaxed text-lg">
        At Janaka Tailers, we believe every stitch tells a story. As one of Sri Lanka's most trusted family-owned tailoring houses, we blend traditional craftsmanship with contemporary design to create garments that fit perfectly and last a lifetime.
      </p>
    </div>
  </section>
);

export default IntroSection;
