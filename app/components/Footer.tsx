import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="container-main pt-16 pb-12 md:pt-20 md:pb-14">
        {/* Top row: Brand + Credentials */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-12 ">
          <div className="mt-12">
            <h3 className="font-extrabold text-2xl tracking-tight mb-1">
              VIPIN GARG
            </h3>
            <p className="text-gold text-xs font-semibold uppercase tracking-[3px]">
              Finance · Investing · Mortgages
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-10" />

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {/* About */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              About
            </h4>
            <p className="text-navy-100 text-[13px] leading-[1.7]">
              Finance coaching, investment guidance, and mortgage solutions —
              brought together by a CFA Charterholder with deep industry
              experience.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/coaching"
                  className="text-navy-100 text-sm hover:text-gold transition-colors"
                >
                  Finance Coaching
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-navy-100 text-sm hover:text-gold transition-colors"
                >
                  Exempt Markets
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-navy-100 text-sm hover:text-gold transition-colors"
                >
                  Mortgage Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/coaching"
                  className="text-navy-100 text-sm hover:text-gold transition-colors"
                >
                  CFA (I, II, III)
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching"
                  className="text-navy-100 text-sm hover:text-gold transition-colors"
                >
                  CSC / IFC / CPH
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching"
                  className="text-navy-100 text-sm hover:text-gold transition-colors"
                >
                  University Finance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <div className="space-y-3 mb-5">
              <p className="text-navy-100 text-sm">info@vipingarg.com</p>
              <p className="text-navy-100 text-sm">Canada</p>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-100 text-sm hover:text-gold transition-colors block"
              >
                YouTube Channel →
              </a>
            </div>
            <a
              href="#contact"
              className="inline-block bg-gold text-navy-dark mb-12 text-sm font-bold px-6 py-2.5 hover:bg-gold-dark hover:text-white transition-colors duration-200 tracking-wide"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-navy-dark">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between py-5 gap-3 m-5">
          <p className="text-navy-200 text-xs">
            © {new Date().getFullYear()} Vipin Garg. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-navy-200 text-xs hover:text-gold transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-navy-200 text-xs hover:text-gold transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-navy-200 text-xs hover:text-gold transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
