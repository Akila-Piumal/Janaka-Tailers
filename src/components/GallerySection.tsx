import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import gallerySuit from "@/assets/gallery-suit-1.png";
import galleryWedding1 from "@/assets/gallery-wedding-1.jpg";
import galleryShirts from "@/assets/gallery-shirts.jpg";
import galleryWedding2 from "@/assets/gallery-wedding-2.jpg";
import galleryUniforms from "@/assets/gallery-uniforms.jpg";
import ourPlace from "@/assets/our-place.jpg";

const images = [
  { src: gallerySuit, alt: "Custom navy suit", label: "Custom Suits" },
  { src: galleryWedding1, alt: "Wedding suit", label: "Wedding Wear" },
  { src: galleryShirts, alt: "Premium shirts", label: "Shirts" },
  { src: galleryWedding2, alt: "Wedding suit", label: "Wedding Wear" },
  { src: ourPlace, alt: "Our Place", label: "Our Place" },
  { src: galleryUniforms, alt: "Uniforms", label: "Uniforms" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Our Work</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            The <span className="gold-text-gradient">Gallery</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
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
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-500 flex items-end p-4">
                <span className="text-foreground font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {img.label}
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-block gold-gradient text-primary-foreground px-8 py-3 rounded-sm text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            View More
          </Link>
        </div>
      </div>

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
    </section>
  );
};

export default GallerySection;
