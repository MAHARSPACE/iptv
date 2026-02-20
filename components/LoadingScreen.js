import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto mb-4 h-12 w-12 rounded-full border-4 border-accent border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">NexusView IPTV</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
