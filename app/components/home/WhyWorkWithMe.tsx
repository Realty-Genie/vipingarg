export default function WhyWorkWithMe() {
  const points = [
    "CFA Charterholder with an MBA in Finance",
    "Over a decade of teaching experience across professional and academic programs",
    "Practical exposure to capital markets, fintech, and real estate finance",
    "Structured, concept-first approach — not sales-driven",
    "Canada-focused, compliance-aware guidance",
  ];

  return (
    <section className="hero-bg py-14 md:py-16">
      <div className="container-main relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left */}
          <div>
            <div className="section-divider-gold !mx-0" style={{ margin: 0 }} />
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-4">
              Why Clients Choose Vipin Garg
            </h2>
            <ul className="space-y-4 mb-6">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-white/85 text-sm leading-relaxed">
                  <span className="w-6 h-6 flex-shrink-0 bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-[10px] font-bold mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="bg-white/5 border border-white/10 p-7 md:p-8">
            <p className="text-navy-100 text-sm leading-relaxed italic mb-5">
              &ldquo;Whether you&rsquo;re studying, investing, or buying property — decisions matter. I help you make them well.&rdquo;
            </p>
            <div className="w-full h-px bg-white/10 my-5" />
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-gold">CFA</div>
                <div className="text-navy-200 text-[10px] uppercase tracking-wider mt-1">Charterholder</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-gold">MBA</div>
                <div className="text-navy-200 text-[10px] uppercase tracking-wider mt-1">Finance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-gold">10+</div>
                <div className="text-navy-200 text-[10px] uppercase tracking-wider mt-1">Years Teaching</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-gold">Canada</div>
                <div className="text-navy-200 text-[10px] uppercase tracking-wider mt-1">& Global</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
