import { useState } from "react";
import { CheckCircle } from "lucide-react";

const serviceOptions = [
  "Custom Suits",
  "Wedding Suits",
  "Alterations",
  "Shirt Stitching",
  "Uniform Stitching",
];

const AppointmentSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", date: "", time: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.service) e.service = "Select a service";
    if (!form.date) e.date = "Select a date";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const inputClass =
    "w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors";

  if (submitted) {
    return (
      <section id="appointment" className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-lg text-center">
          <CheckCircle className="mx-auto text-primary mb-6" size={64} />
          <h2 className="font-serif text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-cream-dark">
            Your appointment request has been submitted. We'll contact you shortly to confirm.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" }); }}
            className="mt-8 border border-primary/40 text-foreground px-6 py-3 rounded-sm text-sm font-medium tracking-wider uppercase hover:bg-primary/10 transition-colors"
          >
            Book Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Schedule a Visit</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Book an <span className="gold-text-gradient">Appointment</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="glass-card rounded-lg p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <input name="name" placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} maxLength={100} />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} maxLength={20} />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>
          <input name="email" type="email" placeholder="Email (optional)" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} maxLength={255} />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          <div>
            <select name="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputClass}>
              <option value="">Select Service *</option>
              {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <input name="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} />
              {errors.date && <p className="text-destructive text-xs mt-1">{errors.date}</p>}
            </div>
            <input name="time" type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={inputClass} />
          </div>
          <textarea name="message" placeholder="Additional message (optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className={inputClass} maxLength={1000} />
          <button type="submit" className="w-full gold-gradient text-primary-foreground py-4 rounded-sm text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity">
            Submit Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentSection;
