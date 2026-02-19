export default function AudienceSelector() {
  const audiences = [
    {
      label: "Student or Professional",
      desc: "Preparing for finance exams or academic courses",
      cta: "Go to Coaching",
      href: "/coaching",
      accent: "border-top-gold",
    },
    {
      label: "Investor",
      desc: "Exploring private markets and alternative investments",
      cta: "Go to Exempt Markets",
      href: "#services",
      accent: "border-top-navy",
    },
    {
      label: "Homebuyer or Real Estate Investor",
      desc: "Looking for smart mortgage options",
      cta: "Go to Mortgages",
      href: "#services",
      accent: "border-top-navy",
    },
  ];

  return (
    <section className="section-padding bg-navy-50">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
            I&rsquo;m here because I&rsquo;m a...
          </h2>
          <p className="text-grey-500 text-sm">Find the right path for your financial goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {audiences.map((a, i) => (
            <div key={i} className={`bg-white border border-grey-200 p-6 flex flex-col card-hover ${a.accent}`}>
              <h3 className="text-lg font-bold text-navy mb-2">{a.label}</h3>
              <p className="text-grey-600 text-sm leading-relaxed mb-5 flex-1">{a.desc}</p>
              <a
                href={a.href}
                className="block bg-navy text-white text-sm font-semibold px-4 py-2.5 text-center hover:bg-navy-dark transition-colors duration-200"
              >
                {a.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
