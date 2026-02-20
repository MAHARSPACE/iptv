import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const features = [
  { icon: '📺', title: '15,000+ Live Channels', desc: 'Global channels from sports, entertainment, news, and more.' },
  { icon: '🎬', title: '40,000+ Movies & Series', desc: 'Massive VOD library with latest blockbusters and classic shows.' },
  { icon: '✨', title: '4K / Ultra HD Quality', desc: 'Crisp playback with adaptive quality from HD to Ultra HD.' },
  { icon: '🛡️', title: 'Anti-Freeze Technology', desc: 'Stable servers engineered for uninterrupted streaming sessions.' },
  { icon: '📱', title: 'Multi-Device Support', desc: 'Watch seamlessly across TV, mobile, tablet, and desktop.' },
  { icon: '💬', title: '24/7 Customer Support', desc: 'Fast WhatsApp support for setup, renewal, and troubleshooting.' }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-container relative overflow-hidden">
      <Image
        src="/images/features-bg.svg"
        alt=""
        aria-hidden="true"
        width={1600}
        height={400}
        className="pointer-events-none absolute inset-x-0 top-0 h-72 w-full opacity-60"
      />
      <div className="relative">
        <SectionTitle
          eyebrow="Premium Features"
          title="Everything You Need for Elite IPTV Streaming"
          subtitle="Engineered for speed, reliability, and top-tier content delivery on every screen."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="glass-card rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-premium/40 hover:shadow-premium"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-300">{feature.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
