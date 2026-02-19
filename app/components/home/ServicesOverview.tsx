export default function ServicesOverview() {
  const services = [
    {
      title: "Finance Coaching",
      desc: "CFA (Levels I–III), CSC, IFC, CPH, and university finance subjects — taught with real-world context, exam strategy, and conceptual depth.",
      cta: "View Coaching Programs",
      href: "/coaching",
      accent: "border-top-gold",
    },
    {
      title: "Exempt Market Investing",
      desc: "Educational and suitability-based discussions around private market investments offered through licensed dealers.",
      cta: "Learn About Exempt Markets",
      href: "#contact",
      accent: "border-top-navy",
    },
    {
      title: "Mortgage Solutions",
      desc: "Purchase, refinance, and investment property mortgages — structured intelligently, not just rate-focused.",
      cta: "Explore Mortgage Options",
      href: "#contact",
      accent: "border-top-navy",
    },
  ];

  return (
    <section id="services" className="section-padding bg-grey-50">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            How I Can Help
          </h2>
          <p className="text-grey-500 text-sm mt-2 max-w-lg mx-auto">
            Three distinct service streams — all grounded in clarity, structure, and real-world expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} className={`bg-white border border-grey-200 flex flex-col card-hover ${s.accent}`}>
              <div className="p-6 flex-1">
                <h3 className="text-lg font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-grey-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="p-6 pt-0">
                <a
                  href={s.href}
                  className="block bg-navy text-white text-sm font-semibold px-4 py-3 text-center hover:bg-navy-dark transition-colors duration-200"
                >
                  {s.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
