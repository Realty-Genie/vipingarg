export default function TrustCredibility() {
  const credentials = [
    { label: "CFA Charterholder", value: "CFA" },
    { label: "MBA (Finance)", value: "MBA" },
    { label: "University Faculty", value: "Faculty" },
    { label: "Capital Markets", value: "Markets" },
  ];

  const points = [
    "University faculty & professional instructor",
    "Experience across banking, capital markets, and financial technology",
    "Serving clients across Canada and globally",
  ];

  return (
    <section className="section-padding bg-navy-50 border-y border-navy-100">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Trust &amp; Credibility
          </h2>
        </div>

        {/* Credentials grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {credentials.map((c, i) => (
            <div key={i} className="bg-white border border-grey-200 p-5 text-center card-hover">
              <div className="text-2xl font-extrabold text-navy mb-1">{c.value}</div>
              <div className="text-grey-500 text-xs uppercase tracking-wider">{c.label}</div>
            </div>
          ))}
        </div>

        {/* Additional points */}
        <div className="max-w-2xl mx-auto bg-white border border-grey-200 p-6">
          <ul className="space-y-3">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-grey-700 text-sm">
                <span className="w-5 h-5 flex-shrink-0 bg-navy text-white text-[10px] font-bold flex items-center justify-center mt-0.5">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
