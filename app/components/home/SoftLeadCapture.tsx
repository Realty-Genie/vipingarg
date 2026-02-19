export default function SoftLeadCapture() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left - Info */}
          <div className="bg-navy p-8 md:p-10 flex flex-col justify-center">
            <div className="section-divider-gold !mx-0 !mb-4" style={{ margin: 0 }} />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Not Sure Where to Start?
            </h2>
            <p className="text-navy-200 text-sm leading-relaxed mb-6">
              If you&rsquo;re exploring options and want clarity before committing, let&rsquo;s talk. Whether it&rsquo;s coaching, investing, or mortgages — a quick conversation can point you in the right direction.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold text-sm mt-0.5">→</span>
                <div>
                  <p className="text-white text-sm font-semibold">Personalized Assessment</p>
                  <p className="text-navy-200 text-xs">Understand your situation and goals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold text-sm mt-0.5">→</span>
                <div>
                  <p className="text-white text-sm font-semibold">Clear Recommendations</p>
                  <p className="text-navy-200 text-xs">Get matched with the right service</p>
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
          <div className="bg-grey-50 p-8 md:p-10 border border-grey-200 border-l-0">
            <h3 className="text-lg font-bold text-navy mb-5">Get Personalized Guidance</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-white"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="describes" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                  What Best Describes You?
                </label>
                <select
                  id="describes"
                  name="describes"
                  className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="student">Student / Exam Candidate</option>
                  <option value="investor">Investor</option>
                  <option value="homebuyer">Homebuyer / Property Investor</option>
                </select>
              </div>
              <div>
                <label htmlFor="helpWith" className="block text-grey-700 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                  What Are You Looking For Help With?
                </label>
                <textarea
                  id="helpWith"
                  name="helpWith"
                  rows={3}
                  className="w-full border border-grey-300 px-4 py-3 text-sm text-grey-800 bg-white resize-vertical"
                  placeholder="Tell us briefly about your goals"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-navy-dark text-sm font-bold px-6 py-3.5 hover:bg-gold-dark hover:text-white transition-colors duration-200 tracking-wide"
              >
                Book Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
