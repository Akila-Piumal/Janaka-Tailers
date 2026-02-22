import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Get in Touch</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold">
          Contact <span className="gold-text-gradient">Us</span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Info */}
        <div className="space-y-6">
          {[
            { icon: MapPin, title: "Visit Us", lines: ["No. 45, Baduraliya, rd", "Pelawatta, Sri Lanka"] },
            { icon: Phone, title: "Call Us", lines: ["+94 77 984 5592", "WhatsApp: +94 76 776 2592"] },
            { icon: Mail, title: "Email Us", lines: ["info@janakatailers.lk"] },
            { icon: Clock, title: "Working Hours", lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: Closed"] },
          ].map(({ icon: Icon, title, lines }) => (
            <div key={title} className="glass-card rounded-lg p-6 flex gap-4 hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                {lines.map((l) => (
                  <p key={l} className="text-cream-dark text-sm">{l}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Social */}
          <div className="flex gap-4 pt-2">
            <a href="https://web.facebook.com/profile.php?id=61556980211573&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-cream-dark hover:text-primary hover:border-primary/40 transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-cream-dark hover:text-primary hover:border-primary/40 transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="glass-card rounded-lg overflow-hidden h-[400px] lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.909338200268!2d80.21690009999999!3d6.405680399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3d15988f344e1%3A0x9663d4be74ff410d!2sND%20pelawaththa!5e0!3m2!1sen!2slk!4v1771749405356!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 400 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Janaka Tailers location"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
