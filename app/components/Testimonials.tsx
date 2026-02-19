export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The structured teaching and exam strategy significantly improved my confidence and performance. Vipin's approach to breaking down complex financial concepts made my CFA preparation systematic and effective.",
      author: "CFA Level II Candidate",
      designation: "Investment Analyst, Toronto",
    },
    {
      quote:
        "Clear explanations with practical examples made complex topics simple and intuitive. The Canadian Securities exam preparation was thorough, covering every concept with real-world relevance.",
      author: "CSC Graduate",
      designation: "Banking Professional, Vancouver",
    },
    {
      quote:
        "Exceptional clarity in financial management and portfolio concepts. The example-driven teaching style ensured I understood the underlying principles, not just the formulas.",
      author: "MBA Finance Student",
      designation: "University of British Columbia",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Client &amp; Student Experiences
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-navy-50 border border-navy-100 p-6 flex flex-col">
              <div className="text-gold text-4xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-grey-700 text-sm leading-relaxed mb-5 flex-1">
                {t.quote}
              </p>
              <div className="border-t border-navy-100 pt-4">
                <p className="text-navy font-bold text-sm">{t.author}</p>
                <p className="text-grey-500 text-xs mt-0.5">{t.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
