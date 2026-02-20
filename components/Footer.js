export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="section-container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-xl font-bold">NexusView IPTV</p>
            <p className="mt-2 text-sm text-gray-400">Premium IPTV streaming built for performance and reliability.</p>
          </div>
          <div>
            <p className="font-semibold">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>Email: support@nexusviewiptv.com</li>
              <li>WhatsApp: +1 (555) 014-8891</li>
              <li>Available: 24/7</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} NexusView IPTV. All rights reserved.</p>
      </div>
    </footer>
  );
}
