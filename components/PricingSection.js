import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import pricingData from '@/public/data/pricing.json';

export default function PricingSection() {
  return (
    <section id="pricing" className="section-container">
      <SectionTitle
        eyebrow="Flexible Plans"
        title="Simple Pricing. Premium Experience"
        subtitle="Choose your plan and get instant access to channels, movies, and 4K entertainment."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {pricingData.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className={`glass-card relative rounded-3xl p-7 ${plan.popular ? 'border-accent shadow-glow' : ''}`}
          >
            {plan.popular && (
              <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="mt-2 text-gray-300">{plan.description}</p>
            <p className="mt-5 text-4xl font-extrabold text-premium">{plan.price}</p>
            <ul className="mt-5 space-y-2 text-sm text-gray-200">
              {plan.features.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
            <a
              href="#trial"
              className="mt-6 inline-block rounded-2xl bg-accent px-5 py-3 font-semibold text-white transition hover:shadow-glow"
            >
              Start Free Trial
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
