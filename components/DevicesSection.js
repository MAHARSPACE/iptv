import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const devices = [
  { name: 'Smart TV', image: '/images/devices/smart-tv.svg' },
  { name: 'Android', image: '/images/devices/android.svg' },
  { name: 'iPhone', image: '/images/devices/iphone.svg' },
  { name: 'Firestick', image: '/images/devices/firestick.svg' },
  { name: 'Windows / Mac', image: '/images/devices/desktop.svg' },
  { name: 'MAG Box', image: '/images/devices/mag-box.svg' }
];

export default function DevicesSection() {
  return (
    <section id="devices" className="section-container">
      <SectionTitle
        eyebrow="Devices"
        title="Watch NexusView IPTV on All Your Devices"
        subtitle="Set up in minutes and stream on your preferred platform with smooth playback."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {devices.map((device, idx) => (
          <motion.div
            key={device.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="glass-card rounded-2xl p-6 text-center"
          >
            <Image
              src={device.image}
              alt={`${device.name} device icon`}
              width={84}
              height={84}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{device.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
