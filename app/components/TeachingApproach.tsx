export default function TeachingApproach() {
  return (
    <section id="approach" className="hero-bg py-14 md:py-20">
      <div className="container-main relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left - Content */}
          <div>
            <div className="section-divider-gold !mx-0" style={{ margin: 0 }} />
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-4">
              Teaching Approach
            </h2>
            <p className="text-navy-200 text-sm leading-relaxed mb-6">
              A methodology built on clarity, structure, and real-world relevance.
              Watch how concepts are broken down for maximum understanding.
            </p>
            <ul className="space-y-4">
              {[
                "Concept clarity before memorization",
                "Real-world financial integration",
                "Structured progression system",
                "Exam-focused preparation strategy",
                "Long-term career perspective",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-white/85 text-sm">
                  <span className="w-6 h-6 flex-shrink-0 bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-[10px] font-bold mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Video Placeholder */}
          <div>
            <div className="relative bg-navy-dark/60 border border-white/10 aspect-video flex items-center justify-center group cursor-pointer hover:border-gold/30 transition-colors duration-200">
              {/* Play button */}
              <div className="w-16 h-16 bg-gold/90 flex items-center justify-center group-hover:bg-gold transition-colors duration-200">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-navy-dark ml-1" />
              </div>
              {/* Grid overlay for visual texture */}
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />
              {/* Caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-navy-dark/80 px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-white text-xs font-semibold">Sample Lecture: CFA Level I — Equity Valuation</p>
                  <p className="text-navy-200 text-[10px] mt-0.5">Duration: 12:34</p>
                </div>
                <span className="text-gold text-[10px] font-bold uppercase tracking-wider">Preview</span>
              </div>
            </div>
            <p className="text-navy-200 text-xs mt-3 text-center">
              Explore more lectures on the <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">YouTube channel</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
