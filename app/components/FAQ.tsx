"use client";

export default function FAQ() {
  const faqs = [
    {
      question: "Do you offer one-on-one coaching?",
      answer:
        "Yes, limited personalized coaching is available based on batch schedule. One-on-one sessions can be arranged for specific topics or exam preparation needs. Contact us for availability and scheduling.",
    },
    {
      question: "Are recordings provided?",
      answer:
        "Yes, recordings are available for enrolled students. All live sessions are recorded and made accessible through the student portal, allowing you to review concepts at your own pace.",
    },
    {
      question: "Do you cover all CFA levels?",
      answer:
        "Yes, structured coaching is available for Levels I, II and III. Each level has a dedicated curriculum with topic-wise coverage, practice problems, and mock exams tailored to the specific level requirements.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-2xl mx-auto border border-grey-200 bg-grey-50">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="border-b border-grey-200 last:border-0 group"
            >
              <summary className="py-5 px-6 text-navy font-semibold text-sm cursor-pointer hover:bg-white transition-colors duration-200">
                {faq.question}
              </summary>
              <div className="faq-answer pb-5 px-6 text-grey-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
