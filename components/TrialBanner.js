import { motion } from 'framer-motion';

export default function TrialBanner() {
  return (
    <section id="trial" className="section-container pt-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-accent/30 bg-gradient-to-r from-accent/20 to-premium/20 p-10 text-center"
      >
        <h2 className="text-3xl font-bold md:text-4xl">Try NexusView FREE for 24 Hours</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-200">Experience premium channels, movies, and 4K quality before choosing your plan.</p>
        <a href="#contact" className="mt-6 inline-block rounded-2xl bg-accent px-6 py-3 font-semibold shadow-glow">
          Get Free Trial Now
        </a>
      </motion.div>
    </section>
  );
}
