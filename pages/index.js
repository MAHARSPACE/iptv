import Head from 'next/head';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DevicesSection from '@/components/DevicesSection';
import PricingSection from '@/components/PricingSection';
import TrialBanner from '@/components/TrialBanner';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>NexusView IPTV | Premium Live TV, Movies & 4K Streaming</title>
        <meta
          name="description"
          content="NexusView IPTV gives you 15,000+ live channels and 40,000+ movies & series in HD, FHD, and 4K with anti-freeze technology and 24/7 support."
        />
        <meta property="og:title" content="NexusView IPTV - Unlimited Premium Streaming" />
        <meta
          property="og:description"
          content="Try NexusView IPTV free for 24 hours. Premium channels, ultra-fast servers, and seamless multi-device support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexusviewiptv.com" />
        <meta property="og:image" content="/og-image.svg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <LoadingScreen show={loading} />
      <div className="relative overflow-hidden">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <DevicesSection />
        <PricingSection />
        <TrialBanner />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
