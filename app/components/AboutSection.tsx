export default function AboutSection() {
  const highlights = [
    "CFA charterholder with institutional finance background",
    "Structured, results-driven coaching methodology",
    "Career-aligned guidance beyond exam preparation",
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="bg-navy-50 border border-navy-100 w-full aspect-[4/3] flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-navy/10 border-2 border-navy/20 flex items-center justify-center">
                  <span className="text-4xl font-black text-navy/50">VG</span>
                </div>
                <p className="text-navy/40 text-xs uppercase tracking-widest">Vipin Garg</p>
              </div>
            </div>
            {/* Experience stat overlay */}
            <div className="absolute -bottom-5 -right-4 md:-right-6 bg-navy p-5 md:p-6 shadow-lg">
              <div className="text-4xl md:text-5xl font-black text-gold leading-none">15+</div>
              <div className="text-white text-xs uppercase tracking-wider mt-1.5">Years of<br />Experience</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-navy-accent text-xs font-bold uppercase tracking-[3px]">About</span>
              <span className="h-px w-10 bg-navy-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy leading-tight mb-4">
              The Journey Behind Professional Finance Coaching
            </h2>
            <p className="text-grey-600 text-sm leading-relaxed mb-5">
              With over 15 years of experience in finance education and professional
              coaching, Vipin Garg brings deep expertise in CFA preparation, Canadian
              Securities Institute exams, and university-level finance instruction.
              Every program is built on the principle that clarity precedes confidence —
              and confidence drives results.
            </p>

            <ul className="space-y-3 mb-7">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-grey-700 text-sm">
                  <span className="w-5 h-5 flex-shrink-0 bg-navy text-white text-[10px] font-bold flex items-center justify-center mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#programs"
              className="inline-block bg-navy text-white text-sm font-semibold px-7 py-3 hover:bg-navy-dark transition-colors duration-200 tracking-wide"
            >
              Explore Programs →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
