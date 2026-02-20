import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-28">
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-premium/20 blur-3xl" />

      <div className="section-container relative grid items-center gap-14 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Unlimited Premium Streaming. <span className="text-accent">Anytime. Anywhere.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Access 15,000+ Live Channels, Movies & Series in HD, FHD & 4K.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#trial" className="rounded-2xl bg-accent px-7 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
              Start Free Trial
            </a>
            <a href="#pricing" className="rounded-2xl border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-premium hover:text-premium">
              View Pricing
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-card glow-ring rounded-3xl p-5"
        >
          <Image
            src="/images/hero-streaming.svg"
            alt="NexusView IPTV interface preview on a streaming screen"
            width={900}
            height={560}
            priority
            className="h-auto w-full rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
