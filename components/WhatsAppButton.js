const whatsappLink =
  'https://wa.me/15550148891?text=' + encodeURIComponent('Hi, I want to start NexusView IPTV free trial.');

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 p-4 text-xl text-white shadow-lg transition hover:scale-105"
    >
      💬
    </a>
  );
}
