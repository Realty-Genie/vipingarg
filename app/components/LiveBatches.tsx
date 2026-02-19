export default function LiveBatches() {
  const batches = [
    {
      title: "CFA Program",
      subtitle: "Level I, II & III",
      tag: "Most Popular",
      points: [
        "Complete syllabus coverage",
        "Topic-wise strategy with recordings",
        "Exam technique and mock strategy",
      ],
      buttons: [
        { label: "Download Batch PDF", href: "#", variant: "outline" as const },
        { label: "Contact to Enroll", href: "#contact", variant: "primary" as const },
      ],
    },
    {
      title: "Canadian Securities Institute Exams",
      subtitle: "CSC | IFC | CPH",
      tag: "Professional",
      points: [
        "CSC | IFC | CPH coverage",
        "CINO-aware perspective",
        "Career application focus",
      ],
      buttons: [
        { label: "Download Batch PDF", href: "#", variant: "outline" as const },
        { label: "Contact to Enroll", href: "#contact", variant: "primary" as const },
      ],
    },
    {
      title: "University Finance Tutoring",
      subtitle: "Undergraduate & Graduate",
      tag: "Academic",
      points: [
        "Financial Management",
        "Portfolio Management",
        "Investment Analysis",
      ],
      buttons: [
        { label: "Learn More", href: "#programs", variant: "outline" as const },
        { label: "Request Coaching Call", href: "#contact", variant: "primary" as const },
      ],
    },
  ];

  return (
    <section id="batches" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Upcoming Live Batches
          </h2>
          <p className="text-grey-500 text-sm mt-2 max-w-md mx-auto">
            Structured programs with live instruction, recordings, and exam-focused preparation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {batches.map((batch, i) => (
            <div
              key={i}
              className={`bg-white border border-grey-200 flex flex-col card-hover ${
                i === 0 ? "border-top-gold" : "border-top-navy"
              }`}
            >
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-navy">{batch.title}</h3>
                    <p className="text-grey-500 text-xs mt-0.5">{batch.subtitle}</p>
                  </div>
                  <span className="badge flex-shrink-0 ml-2">{batch.tag}</span>
                </div>
                <div className="w-full h-px bg-grey-200 my-4" />
                <ul className="space-y-3">
                  {batch.points.map((point, j) => (
                    <li key={j} className="text-grey-700 text-sm flex items-start gap-2.5">
                      <span className="text-navy-accent font-bold mt-0.5 flex-shrink-0 text-xs">■</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0 flex flex-col gap-2">
                {batch.buttons.map((btn, k) => (
                  <a
                    key={k}
                    href={btn.href}
                    className={
                      btn.variant === "primary"
                        ? "bg-navy text-white text-sm font-semibold px-4 py-2.5 text-center hover:bg-navy-dark transition-colors duration-200"
                        : "border border-grey-300 text-navy text-sm font-medium px-4 py-2.5 text-center hover:bg-navy-50 hover:border-navy transition-colors duration-200"
                    }
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#batches"
            className="inline-block bg-navy-50 text-navy font-semibold text-sm px-8 py-3 hover:bg-navy-100 transition-colors duration-200 border border-navy-100"
          >
            View Full Batch Schedule →
          </a>
        </div>
      </div>
    </section>
  );
}
