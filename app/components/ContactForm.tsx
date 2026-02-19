export default function ContactForm() {
  return (
    <section id="contact" className="section-padding bg-navy-50">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left - Info panel */}
          <div className="bg-navy p-8 md:p-10 flex flex-col justify-center">
            <div className="section-divider-gold !mx-0 !mb-4" style={{ margin: 0 }} />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Request a Free Coaching Call
            </h2>
            <p className="text-navy-200 text-sm leading-relaxed mb-6">
              Schedule a complimentary consultation to discuss your exam preparation goals, understand the coaching structure, and find the right program for your needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold text-sm mt-0.5">→</span>
                <div>
                  <p className="text-white text-sm font-semibold">Personalized Assessment</p>
                  <p className="text-navy-200 text-xs">Understand your current preparation level</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold text-sm mt-0.5">→</span>
                <div>
                  <p className="text-white text-sm font-semibold">Program Recommendations</p>
                  <p className="text-navy-200 text-xs">Get matched with the right coaching program</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold text-sm mt-0.5">→</span>
                <div>
                  <p className="text-white text-sm font-semibold">No Obligation</p>
                  <p className="text-navy-200 text-xs">Free consultation with no commitment required</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white p-8 md:p-10 border border-grey-200 border-l-0">
            <form className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-grey-50"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-grey-50"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-grey-50"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="course" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                  Exam / Course Interested In
                </label>
                <select
                  id="course"
                  name="course"
                  className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-grey-50"
                >
                  <option value="">Select an option</option>
                  <option value="cfa-1">CFA Level I</option>
                  <option value="cfa-2">CFA Level II</option>
                  <option value="cfa-3">CFA Level III</option>
                  <option value="csc">CSC</option>
                  <option value="ifc">IFC</option>
                  <option value="cph">CPH</option>
                  <option value="university">University Finance Tutoring</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-grey-50 resize-vertical"
                  placeholder="Tell us about your goals"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-navy-dark text-sm font-bold px-6 py-3.5 hover:bg-gold-dark hover:text-white transition-colors duration-200 tracking-wide"
              >
                Request Call
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
