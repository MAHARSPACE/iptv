export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-premium">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-gray-300 md:text-lg">{subtitle}</p>}
    </div>
  );
}
