import SectionTitle from './SectionTitle';

const testimonials = [
  {
    name: 'Daniel M.',
    rating: 5,
    quote: 'The channel quality is insane. Setup on my Firestick took less than 10 minutes.'
  },
  {
    name: 'Sophia R.',
    rating: 5,
    quote: 'I switched from cable and never looked back. 4K sports streams are very stable.'
  },
  {
    name: 'Kareem A.',
    rating: 5,
    quote: 'Support responds quickly on WhatsApp and helped me activate across all devices.'
  },
  {
    name: 'Emily T.',
    rating: 4,
    quote: 'Great value for money. Massive movie collection and smooth playback every night.'
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-container">
      <SectionTitle eyebrow="Reviews" title="Loved by Streamers Worldwide" />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <article key={item.name} className="glass-card rounded-2xl p-6">
            <div className="text-accent">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
            <p className="mt-3 text-gray-200">“{item.quote}”</p>
            <p className="mt-4 text-sm font-semibold text-premium">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
