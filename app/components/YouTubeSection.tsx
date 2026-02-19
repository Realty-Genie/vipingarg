export default function YouTubeSection() {
  return (
    <section className="bg-navy-50 border-y border-navy-100">
      <div className="container-main py-12 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="badge mb-3">Free Resources</div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
              Learn Before You Enroll
            </h2>
            <p className="text-grey-600 text-sm max-w-md leading-relaxed">
              Explore sample lectures, exam strategy sessions, and financial insights on YouTube. See the teaching approach before you commit.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-navy text-white text-sm font-semibold px-8 py-3.5 hover:bg-navy-dark transition-colors duration-200"
            >
              Visit YouTube Channel →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
