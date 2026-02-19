export default function TargetAudience() {
  const leftItems = [
    "CFA Level I, II and III candidates",
    "Canadian Securities Institute exam candidates (CSC, IFC, CPH)",
    "Undergraduate, MBA, MFin and PhD students",
    "Banking, investment and finance professionals strengthening fundamentals",
  ];

  const rightItems = [
    "Structured exam strategy",
    "Real-world application in banking and investments",
    "CINO-aware exam approach",
    "Lectures with example-driven clarity",
  ];

  return (
    <section className="section-padding bg-navy-50">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            This Coaching Is Designed For
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left column - Who */}
          <div className="bg-white p-7 md:p-8 border border-grey-200 border-top-navy">
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-5">Who Should Enroll</h3>
            <ul className="space-y-4">
              {leftItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-grey-700 text-sm leading-relaxed navy-stripe-left pl-3">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right column - What */}
          <div className="bg-navy p-7 md:p-8">
            <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-5">What You Get</h3>
            <ul className="space-y-4">
              {rightItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-navy-100 text-sm leading-relaxed">
                  <span className="text-gold font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
