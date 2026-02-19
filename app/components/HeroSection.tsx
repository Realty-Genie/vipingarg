export default function HeroSection() {
  return (
    <section className="hero-bg pt-[64px] min-h-screen flex flex-col">
      {/* Geometric decorative shapes */}
      <div className="geo-shape w-[280px] h-[280px] top-[100px] right-[8%] rotate-12 opacity-40" />
      <div className="geo-shape w-[160px] h-[160px] bottom-[60px] left-[4%] -rotate-6 opacity-30" />
      <div className="geo-shape w-[100px] h-[100px] top-[45%] right-[35%] rotate-45 opacity-20" />

      <div className="container-main relative z-10 flex-1 flex items-center py-16 md:py-0">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full">
          {/* Left content */}
          <div className="flex-1">
            <div className="badge mb-6">Professional Finance Coaching</div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6 text-white tracking-tight">
              Build Your Financial Future with Clarity, Confidence, and the Right Guidance
            </h1>
            <p className="text-navy-200 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
              Finance coaching for professional exams and academic programs with practical, real-world financial insight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="bg-gold text-navy-dark font-bold text-base px-8 py-4 hover:bg-gold-dark hover:text-white transition-colors duration-200 text-center tracking-wide"
              >
                Request Free Coaching Call
              </a>
              <a
                href="#batches"
                className="border-2 border-white/30 text-white font-semibold text-base px-8 py-4 hover:bg-white/10 transition-colors duration-200 text-center"
              >
                View Full Batch Schedule
              </a>
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-0 border border-white/10 bg-white/5 divide-x divide-white/10">
              <div className="stat-item flex-1 min-w-[140px] py-5">
                <div className="text-3xl font-extrabold text-gold">500+</div>
                <div className="text-xs text-navy-200 mt-1.5 uppercase tracking-wider">Students Coached</div>
              </div>
              <div className="stat-item flex-1 min-w-[140px] py-5">
                <div className="text-3xl font-extrabold text-gold">15+</div>
                <div className="text-xs text-navy-200 mt-1.5 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="stat-item flex-1 min-w-[140px] py-5">
                <div className="text-3xl font-extrabold text-gold">3</div>
                <div className="text-xs text-navy-200 mt-1.5 uppercase tracking-wider">CFA Levels Covered</div>
              </div>
            </div>
          </div>

          {/* Right - Professional portrait placeholder */}
          <div className="flex-shrink-0 w-full md:w-[380px] lg:w-[440px]">
            <div className="relative">
              <div className="bg-navy-light/50 border border-white/10 w-full aspect-[3/4] flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-32 h-32 mx-auto mb-5 bg-navy-accent/30 border-2 border-gold/40 flex items-center justify-center">
                    <span className="text-6xl font-black text-white/70">VG</span>
                  </div>
                  <p className="text-white/40 text-sm uppercase tracking-widest">Vipin Garg</p>
                  <p className="text-white/25 text-xs mt-1.5">Finance Coaching Professional</p>
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
