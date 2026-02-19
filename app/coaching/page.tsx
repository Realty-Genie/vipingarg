import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CoachingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="hero-bg pt-[64px]">
          <div className="container-main relative z-10 py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="badge mb-5">Finance Coaching</div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] mb-5 text-white tracking-tight">
                Finance Coaching That Builds Confidence — Not Just Exam Scores
              </h1>
              <p className="text-navy-200 text-lg md:text-xl mb-3 leading-relaxed">
                CFA · CSC · IFC · CPH · University Finance
              </p>
              <p className="text-navy-200/70 text-sm mb-8 max-w-2xl leading-relaxed">
                Concept-driven, exam-ready, career-aligned coaching.
              </p>
              <a
                href="#coaching-contact"
                className="inline-block bg-gold text-navy-dark font-bold text-sm px-8 py-3.5 hover:bg-gold-dark hover:text-white transition-colors duration-200 tracking-wide"
              >
                Book a Free Coaching Call →
              </a>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="section-padding bg-navy-50">
          <div className="container-main">
            <div className="text-center mb-8">
              <div className="section-divider" />
              <h2 className="text-2xl md:text-3xl font-bold text-navy">
                This Coaching Is Designed For
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-white p-7 md:p-8 border border-grey-200 border-top-navy">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-5">Who Should Enroll</h3>
                <ul className="space-y-4">
                  {[
                    "CFA Level I, II, and III candidates",
                    "Canadian Securities Institute exam candidates (CSC, IFC, CPH)",
                    "Undergraduate, MBA, MFin, and PhD students",
                    "Banking, investment, and finance professionals strengthening fundamentals",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-grey-700 text-sm leading-relaxed navy-stripe-left pl-3">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy p-7 md:p-8">
                <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-5">Why It Works</h3>
                <p className="text-navy-100 text-sm leading-relaxed">
                  Whether you&rsquo;re aiming to clear an exam, understand finance deeply, or advance your career, the approach stays practical and structured.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Coaching Is Different */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
              <div>
                <div className="section-divider !mx-0" style={{ margin: 0 }} />
                <h2 className="text-2xl md:text-3xl font-bold text-navy mt-4 mb-4">
                  How My Coaching Is Different
                </h2>
                <p className="text-grey-600 text-sm leading-relaxed mb-4">
                  Most finance prep focuses on memorization. That&rsquo;s not how finance works in the real world. My coaching emphasizes depth, strategy, and practical understanding.
                </p>
                <p className="text-navy font-semibold text-sm italic">
                  You don&rsquo;t just pass — you understand.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Conceptual clarity before formulas",
                  "Exam strategy aligned with how questions are tested",
                  "Real-world context from capital markets and industry experience",
                  "One-on-one focus, not mass batches",
                  "Canada-specific and globally relevant frameworks",
                ].map((p, i) => (
                  <div key={i} className="navy-stripe-left pl-5 py-3 bg-navy-50 border border-navy-100 border-l-4 border-l-navy">
                    <p className="text-grey-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programs Offered */}
        <section className="section-padding bg-grey-50">
          <div className="container-main">
            <div className="text-center mb-8">
              <div className="section-divider" />
              <h2 className="text-2xl md:text-3xl font-bold text-navy">
                Programs Offered
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {/* CFA */}
              <div className="bg-white border border-grey-200 flex flex-col card-hover border-top-gold">
                <div className="p-6 flex-1">
                  <span className="badge mb-3">Most Popular</span>
                  <h3 className="text-lg font-bold text-navy mb-2">CFA Program</h3>
                  <p className="text-grey-500 text-xs mb-3">Levels I, II &amp; III</p>
                  <div className="w-full h-px bg-grey-200 my-3" />
                  <ul className="space-y-2.5">
                    {[
                      "Complete syllabus coverage",
                      "Topic-wise strategy (Ethics, FRA, Equity, Fixed Income, PM, etc.)",
                      "Exam technique, time management, and revision planning",
                    ].map((p, i) => (
                      <li key={i} className="text-grey-700 text-sm flex items-start gap-2.5">
                        <span className="text-navy-accent font-bold mt-0.5 flex-shrink-0 text-xs">■</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <a href="#coaching-contact" className="block bg-navy text-white text-sm font-semibold px-4 py-3 text-center hover:bg-navy-dark transition-colors duration-200">
                    View CFA Coaching →
                  </a>
                </div>
              </div>

              {/* Canadian Securities */}
              <div className="bg-white border border-grey-200 flex flex-col card-hover border-top-navy">
                <div className="p-6 flex-1">
                  <span className="badge mb-3">Professional</span>
                  <h3 className="text-lg font-bold text-navy mb-2">Canadian Securities Institute Exams</h3>
                  <p className="text-grey-500 text-xs mb-3">CSC | IFC | CPH</p>
                  <div className="w-full h-px bg-grey-200 my-3" />
                  <ul className="space-y-2.5">
                    {[
                      "Career-oriented explanation of content",
                      "CIRO-aware perspective",
                      "Practical application for banking and investment roles",
                    ].map((p, i) => (
                      <li key={i} className="text-grey-700 text-sm flex items-start gap-2.5">
                        <span className="text-navy-accent font-bold mt-0.5 flex-shrink-0 text-xs">■</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <a href="#coaching-contact" className="block bg-navy text-white text-sm font-semibold px-4 py-3 text-center hover:bg-navy-dark transition-colors duration-200">
                    View CSI Exam Coaching →
                  </a>
                </div>
              </div>

              {/* University */}
              <div className="bg-white border border-grey-200 flex flex-col card-hover border-top-navy">
                <div className="p-6 flex-1">
                  <span className="badge mb-3">Academic</span>
                  <h3 className="text-lg font-bold text-navy mb-2">University &amp; Academic Finance Tutoring</h3>
                  <p className="text-grey-500 text-xs mb-3">Undergraduate &amp; Graduate</p>
                  <div className="w-full h-px bg-grey-200 my-3" />
                  <ul className="space-y-2.5">
                    {[
                      "Financial Management & Corporate Finance",
                      "Valuation & Portfolio Management",
                      "Audit & Assurance",
                    ].map((p, i) => (
                      <li key={i} className="text-grey-700 text-sm flex items-start gap-2.5">
                        <span className="text-navy-accent font-bold mt-0.5 flex-shrink-0 text-xs">■</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <a href="#coaching-contact" className="block bg-navy text-white text-sm font-semibold px-4 py-3 text-center hover:bg-navy-dark transition-colors duration-200">
                    View Academic Tutoring →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Coaching Works */}
        <section className="hero-bg py-14 md:py-16">
          <div className="container-main relative z-10">
            <div className="text-center mb-10">
              <div className="section-divider-gold" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
                How Coaching Works
              </h2>
              <p className="text-navy-200 text-sm mt-2">Simple. Focused. Effective.</p>
            </div>
            <div className="max-w-2xl mx-auto">
              {[
                { step: "01", title: "Initial Discussion", desc: "Understand your goal, timeline, and current preparation level." },
                { step: "02", title: "Personalized Plan", desc: "Custom study or learning plan designed around your needs." },
                { step: "03", title: "Regular Sessions", desc: "Online sessions with flexible timing to fit your schedule." },
                { step: "04", title: "Ongoing Support", desc: "Doubt-clearing, revision support, and exam readiness assessment." },
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-5 border-b border-white/8 py-5 last:border-0">
                  <div className="w-10 h-10 flex-shrink-0 bg-gold/15 border border-gold/30 flex items-center justify-center">
                    <span className="text-gold text-sm font-bold">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[15px] mb-1">{s.title}</h3>
                    <p className="text-navy-200 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching Lead Capture */}
        <section id="coaching-contact" className="section-padding bg-white">
          <div className="container-main">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-navy p-8 md:p-10 flex flex-col justify-center">
                <div className="section-divider-gold !mx-0 !mb-4" style={{ margin: 0 }} />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Book a Free 15-Minute Coaching Call
                </h2>
                <p className="text-navy-200 text-sm leading-relaxed mb-6">
                  Use this call to:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-bold text-sm mt-0.5">→</span>
                    <p className="text-white/85 text-sm">Clarify your exam or subject approach</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-bold text-sm mt-0.5">→</span>
                    <p className="text-white/85 text-sm">Understand the effort required</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-bold text-sm mt-0.5">→</span>
                    <p className="text-white/85 text-sm">Decide next steps confidently</p>
                  </div>
                </div>
              </div>
              <div className="bg-grey-50 p-8 md:p-10 border border-grey-200 border-l-0">
                <h3 className="text-lg font-bold text-navy mb-5">Book Free Coaching Call</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="c-name" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">Full Name</label>
                    <input type="text" id="c-name" className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-white" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">Email</label>
                    <input type="email" id="c-email" className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-white" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">Phone Number</label>
                    <input type="tel" id="c-phone" className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-white" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label htmlFor="c-exam" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">Exam / Course</label>
                    <select id="c-exam" className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-white">
                      <option value="">Select an option</option>
                      <option value="cfa-1">CFA Level I</option>
                      <option value="cfa-2">CFA Level II</option>
                      <option value="cfa-3">CFA Level III</option>
                      <option value="csc">CSC</option>
                      <option value="ifc">IFC</option>
                      <option value="cph">CPH</option>
                      <option value="university">University Finance</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="c-message" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea id="c-message" rows={3} className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-white resize-vertical" placeholder="Tell us about your goals" />
                  </div>
                  <button type="submit" className="w-full bg-gold text-navy-dark text-sm font-bold px-6 py-3.5 hover:bg-gold-dark hover:text-white transition-colors duration-200 tracking-wide">
                    Book Free Coaching Call
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
