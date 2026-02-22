import tailorImg from "@/assets/tailor-working.jpg";
import { Award, Clock, Heart } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg">
            <img src={tailorImg} alt="Master tailor at work" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10" />
        </div>

        {/* Content */}
        <div>
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            A Legacy of <span className="gold-text-gradient">Fine Tailoring</span>
          </h2>
          <p className="text-cream-dark leading-relaxed mb-6">
            Founded in 2010, Janaka Tailers has been a cornerstone of premium tailoring in Sri Lanka for nearly three decades. What began as a small family workshop has grown into one of the most respected names in bespoke tailoring, serving thousands of satisfied clients.
          </p>
          <p className="text-cream-dark leading-relaxed mb-8">
            Our master tailors bring generations of expertise to every garment, combining time-honored techniques with modern aesthetics. Whether it's a bespoke wedding suit or everyday alterations, we treat every piece with the same dedication to perfection.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Clock, label: "30+ Years", sub: "Experience" },
              { icon: Award, label: "5000+", sub: "Happy Clients" },
              { icon: Heart, label: "100%", sub: "Handcrafted" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="text-center p-4 glass-card rounded-lg">
                <Icon className="mx-auto text-primary mb-2" size={24} />
                <p className="font-serif text-xl font-bold text-foreground">{label}</p>
                <p className="text-muted-foreground text-xs">{sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 glass-card rounded-lg border-l-2 border-primary">
            <p className="font-serif text-lg italic text-cream-dark">
              "Our mission is to make every client look and feel their absolute best through the art of tailoring."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
