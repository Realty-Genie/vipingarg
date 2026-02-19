export default function Programs() {
  const programs = [
    {
      title: "CFA Program",
      description: "End-to-end structured coaching for CFA Levels I, II and III. Designed for working professionals and full-time candidates seeking comprehensive preparation with strategic exam focus.",
      points: [
        "Complete syllabus coverage across all topics",
        "Topic-wise problem solving with worked examples",
        "Exam technique mastery and time management",
        "Mock exam intensive sessions with performance review",
      ],
      button: { label: "Download Batch PDF", href: "#" },
      accent: "border-top-gold",
    },
    {
      title: "Canadian Securities Institute Exams",
      description: "Professional preparation for Canadian financial certifications. Tailored for individuals pursuing careers in Canadian banking, investment management, and financial advisory.",
      points: [
        "CSC | IFC | CPH structured coverage",
        "Concept clarity with real-world application",
        "Exam-focused strategy and question patterns",
        "Career-aligned insights for the Canadian market",
      ],
      button: { label: "Contact to Enroll", href: "#contact" },
      accent: "border-top-navy",
    },
    {
      title: "University Finance Tutoring",
      description: "Advanced academic tutoring for undergraduate and graduate finance students. Covers core subjects with example-driven methodology and exam-oriented preparation.",
      points: [
        "Corporate Finance fundamentals and advanced topics",
        "Portfolio Management theory and application",
        "Investment Analysis frameworks and valuation",
        "Example-driven teaching with real case studies",
      ],
      button: { label: "Request Coaching Call", href: "#contact" },
      accent: "border-top-navy",
    },
  ];

  return (
    <section id="programs" className="section-padding bg-grey-50">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Comprehensive Programs
          </h2>
          <p className="text-grey-500 text-sm mt-2 max-w-lg mx-auto">
            In-depth, structured coaching programs designed for professional certification success and academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {programs.map((program, i) => (
            <div
              key={i}
              className={`bg-white border border-grey-200 flex flex-col card-hover ${program.accent}`}
            >
              <div className="p-6 flex-1">
                <h3 className="text-lg font-bold text-navy mb-2">{program.title}</h3>
                <p className="text-grey-600 text-sm mb-5 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.points.map((point, j) => (
                    <li key={j} className="text-grey-700 text-sm flex items-start gap-2.5">
                      <span className="text-navy-accent font-bold mt-0.5 flex-shrink-0 text-xs">■</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <a
                  href={program.button.href}
                  className="block bg-navy text-white text-sm font-semibold px-4 py-3 text-center hover:bg-navy-dark transition-colors duration-200"
                >
                  {program.button.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
