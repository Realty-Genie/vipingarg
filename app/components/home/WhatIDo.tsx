export default function WhatIDo() {
  const services = [
    {
      title: "Finance Coaching",
      desc: "For CFA, CSI exams, and university-level subjects",
    },
    {
      title: "Exempt Market Guidance",
      desc: "For investors exploring private equity, private debt, and real estate offerings",
    },
    {
      title: "Mortgage Solutions",
      desc: "Aligned with long-term financial and investment goals",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Left */}
          <div>
            <div className="section-divider !mx-0" style={{ margin: 0 }} />
            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-4 mb-4">
              A Single Platform for Education, Investing &amp; Financing
            </h2>
            <p className="text-grey-600 text-sm leading-relaxed mb-4">
              Most people struggle because finance is fragmented — learning, investing, and financing are treated separately. I bring them together.
            </p>
            <p className="text-navy font-semibold text-sm">
              One advisor. Clear thinking. No noise.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {services.map((s, i) => (
              <div key={i} className="navy-stripe-left pl-5 py-3 bg-navy-50 border border-navy-100 border-l-4 border-l-navy">
                <h3 className="font-bold text-navy text-[15px] mb-1">{s.title}</h3>
                <p className="text-grey-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
