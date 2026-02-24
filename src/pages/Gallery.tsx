import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import gallerySuit from "@/assets/gallery-suit-1.png";
import galleryWedding1 from "@/assets/gallery-wedding-1.jpg";
import galleryWedding2 from "@/assets/gallery-wedding-2.jpg";
import galleryWedding3 from "@/assets/gallery-wedding-3.jpg";
import galleryWedding4 from "@/assets/gallery-wedding-4.jpg";
import galleryWedding5 from "@/assets/gallery-wedding-5.jpg";
import galleryWedding6 from "@/assets/gallery-wedding-6.jpg";
import galleryWedding7 from "@/assets/gallery-wedding-7.jpg";
import galleryWedding8 from "@/assets/gallery-wedding-8.jpg";
import galleryShirts from "@/assets/gallery-shirts.jpg";
import galleryUniforms from "@/assets/gallery-uniforms.jpg";
import ThemeToggle from "@/components/ThemeToggle";

const images = [
  { src: gallerySuit, alt: "Custom navy suit", label: "Custom Suits" },
  { src: galleryWedding1, alt: "Wedding suit", label: "Wedding Wear" },
  { src: galleryShirts, alt: "Premium shirts", label: "Shirts" },
  { src: galleryWedding2, alt: "Wedding suit", label: "Wedding Wear" },
  { src: galleryUniforms, alt: "Uniforms", label: "Uniforms" },
  { src: galleryWedding3, alt: "Wedding suit", label: "Wedding Wear" },
  { src: galleryWedding4, alt: "Wedding suit", label: "Wedding Wear" },
  { src: galleryWedding5, alt: "Wedding suit", label: "Wedding Wear" },
  { src: galleryWedding6, alt: "Wedding suit", label: "Wedding Wear" },
  { src: galleryWedding7, alt: "Wedding suit", label: "Wedding Wear" },
  { src: galleryWedding8, alt: "Wedding suit", label: "Wedding Wear" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium tracking-wider uppercase">Back</span>
          </Link>
          <span className="font-serif text-xl font-bold gold-text-gradient">Janaka Tailers</span>
          <ThemeToggle />
        </div>
      </header>

      {/* Gallery Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Our Work</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            The <span className="gold-text-gradient">Gallery</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our complete collection of bespoke tailoring, from custom suits to traditional wear.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-500 flex items-end p-4">
                <span className="text-foreground font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {img.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors">
            <X size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
