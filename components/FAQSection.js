import { useState } from 'react';
import SectionTitle from './SectionTitle';

const faqs = [
  { q: 'Is IPTV legal?', a: 'IPTV technology is legal. Content legality depends on regional laws and licensing in your location.' },
  { q: 'What internet speed is required?', a: 'We recommend 20 Mbps for HD, and at least 50 Mbps for stable 4K streaming.' },
  { q: 'How do I get started?', a: 'Choose a plan or request a free trial, then our team sends instant setup instructions.' },
  { q: 'Which devices are supported?', a: 'Smart TVs, Android, iPhone, Firestick, Windows/Mac, and MAG boxes are all supported.' },
  { q: 'Do you offer refunds?', a: 'Please contact support for case-by-case assistance based on account usage and timing.' }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-container">
      <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((item, idx) => {
          const open = idx === openIndex;
          return (
            <div key={item.q} className="glass-card rounded-2xl">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : idx)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold">{item.q}</span>
                <span className="text-accent">{open ? '−' : '+'}</span>
              </button>
              {open && <p className="px-5 pb-5 text-gray-300">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
