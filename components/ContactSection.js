import { useState } from 'react';
import SectionTitle from './SectionTitle';

const initialForm = { name: '', email: '', device: '', message: '' };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) next.email = 'Valid email is required';
    if (!form.device.trim()) next.device = 'Please enter your device';
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters';
    return next;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <section id="contact" className="section-container">
      <SectionTitle
        eyebrow="Get Started"
        title="Request Your Free Trial Activation"
        subtitle="Send your details and our support team will help you set up instantly."
      />
      <form onSubmit={onSubmit} noValidate className="mx-auto grid max-w-3xl gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
        <input className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none focus:border-premium" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        {errors.name && <p className="text-sm text-accent">{errors.name}</p>}
        <input className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none focus:border-premium" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        {errors.email && <p className="text-sm text-accent">{errors.email}</p>}
        <input className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none focus:border-premium" placeholder="Preferred Device" value={form.device} onChange={(e) => setForm({ ...form, device: e.target.value })} />
        {errors.device && <p className="text-sm text-accent">{errors.device}</p>}
        <textarea className="min-h-28 rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none focus:border-premium" placeholder="Tell us what channels or content you want..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        {errors.message && <p className="text-sm text-accent">{errors.message}</p>}
        <button type="submit" className="rounded-xl bg-accent px-6 py-3 font-semibold shadow-glow">Submit Request</button>
        {submitted && <p className="text-sm text-green-400">Thanks! We received your request and will contact you soon.</p>}
      </form>
    </section>
  );
}
