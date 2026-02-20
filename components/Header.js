export default function Header() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="text-xl font-bold">NexusView IPTV</a>
        <nav className="hidden gap-6 text-sm text-gray-200 md:flex">
          <a href="#features">Features</a>
          <a href="#devices">Devices</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#trial" className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold">Free Trial</a>
      </div>
    </header>
  );
}
