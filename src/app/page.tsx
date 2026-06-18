import VideoFeed from "@/components/VideoFeed";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1868DB] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold text-[#101214]">
              MindMatch
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-[#292A2E] hover:text-[#1868DB] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#"
              className="text-[#292A2E] hover:text-[#1868DB] transition-colors"
            >
              For Therapists
            </a>
          </nav>
          <a
            href="#hero"
            className="bg-[#1868DB] hover:bg-[#1357b8] text-white font-medium py-2.5 px-6 rounded-full transition-colors"
          >
            Get Started
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-[#E9F2FE] to-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20">
              {/* Left: Text content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#101214] leading-tight mb-6">
                  Find your perfect
                  <br />
                  <span className="text-[#1868DB]">therapist match</span>
                </h1>
                <p className="text-lg md:text-xl text-[#292A2E] mb-8 max-w-xl mx-auto lg:mx-0">
                  Watch short video introductions from licensed therapists.
                  Swipe to discover who resonates with you, then book a free
                  15-minute consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#video-feed"
                    className="bg-[#1868DB] hover:bg-[#1357b8] text-white font-medium py-4 px-8 rounded-full transition-colors text-center"
                  >
                    Start Exploring
                  </a>
                  <a
                    href="#how-it-works"
                    className="bg-[#E9F2FE] hover:bg-[#d4e5fc] text-[#101214] font-medium py-4 px-8 rounded-full transition-colors text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              {/* Right: Video Feed Carousel */}
              <div id="video-feed" className="w-full lg:flex-1 lg:max-w-[600px]">
                <VideoFeed />
              </div>
            </div>
          </div>
        </section>

        {/* Vibe Check Section */}
        <section className="py-12 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left: Text content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101214] leading-tight mb-6">
                  Vibe check your therapist before you commit
                </h2>
                <p className="text-lg md:text-xl text-[#292A2E] mb-8 max-w-xl mx-auto lg:mx-0">
                  <span className="font-semibold text-[#101214]">Book free 15-minute intro calls with as many therapists as you want.</span>{" "}
                  No awkward commitments, no "so are we doing this?" pressure. Just real conversations to find someone who actually gets you.
                </p>
                <a
                  href="#video-feed"
                  className="inline-block bg-[#1868DB] hover:bg-[#1357b8] text-white font-medium py-4 px-8 rounded-full transition-colors"
                >
                  Browse therapists
                </a>
              </div>

              {/* Right: Calendar Visual */}
              <div className="flex-1 w-full max-w-md lg:max-w-lg">
                <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 p-6 md:p-8">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-[#101214]">
                      Intro Calls
                    </h3>
                    <span className="text-sm text-[#292A2E]">This week</span>
                  </div>

                  {/* Calendar Items */}
                  <div className="space-y-3">
                    {/* Completed Session 1 */}
                    <div className="group flex items-center gap-4 p-4 rounded-[24px] bg-[#EFFFD6] transition-transform hover:scale-[1.02]">
                      <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-[#101214] truncate">
                          Dr. Sarah Chen
                        </p>
                        <p className="text-sm text-[#292A2E]">
                          Mon 10:00 AM · 15 min
                        </p>
                      </div>
                    </div>

                    {/* Completed Session 2 */}
                    <div className="group flex items-center gap-4 p-4 rounded-[24px] bg-[#F8EEFE] transition-transform hover:scale-[1.02]">
                      <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-[#101214] truncate">
                          Marcus Thompson, LMFT
                        </p>
                        <p className="text-sm text-[#292A2E]">
                          Tue 2:30 PM · 15 min
                        </p>
                      </div>
                    </div>

                    {/* Current/Highlighted Session */}
                    <div className="group flex items-center gap-4 p-4 rounded-[24px] bg-[#E9F2FE] ring-2 ring-[#1868DB] transition-transform hover:scale-[1.02]">
                      <div className="w-10 h-10 rounded-full bg-[#1868DB] flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-[#101214] truncate">
                          Dr. Emily Rodriguez
                        </p>
                        <p className="text-sm text-[#1868DB] font-medium">
                          Today 4:00 PM · 15 min
                        </p>
                      </div>
                      <button
                        className="px-3 py-1 text-xs font-medium bg-[#1868DB] text-white rounded-full hover:bg-[#1357b8] transition-colors"
                        aria-label="Join call with Dr. Emily Rodriguez"
                      >
                        Join
                      </button>
                    </div>

                    {/* Upcoming Session */}
                    <div className="group flex items-center gap-4 p-4 rounded-[24px] bg-[#FFF5D4] transition-transform hover:scale-[1.02]">
                      <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-[#101214] truncate">
                          James Park, PsyD
                        </p>
                        <p className="text-sm text-[#292A2E]">
                          Thu 11:00 AM · 15 min
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#101214] text-center mb-16">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#E9F2FE] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#1868DB]">1</span>
                </div>
                <h3 className="text-xl font-semibold text-[#101214] mb-3">
                  Watch Video Intros
                </h3>
                <p className="text-[#292A2E]">
                  Swipe through short video introductions from licensed
                  therapists. Get a feel for their personality and approach.
                </p>
              </div>
              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#E9F2FE] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#1868DB]">2</span>
                </div>
                <h3 className="text-xl font-semibold text-[#101214] mb-3">
                  Find Your Match
                </h3>
                <p className="text-[#292A2E]">
                  When someone resonates with you, tap to view their full
                  profile, specialties, and availability.
                </p>
              </div>
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#E9F2FE] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#1868DB]">3</span>
                </div>
                <h3 className="text-xl font-semibold text-[#101214] mb-3">
                  Book Free Consultation
                </h3>
                <p className="text-[#292A2E]">
                  Schedule a free 15-minute video call to make sure it is the
                  right fit before committing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#101214] rounded-[64px] py-16 md:py-24 px-8 md:px-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to start your journey?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Finding the right therapist should not be overwhelming. Our
                video-first approach makes it easy to connect with someone who
                truly understands you.
              </p>
              <a
                href="#hero"
                className="inline-block bg-[#1868DB] hover:bg-[#1357b8] text-white font-medium py-4 px-10 rounded-full transition-colors"
              >
                Start Exploring Therapists
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#E9F2FE] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#1868DB] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold text-[#101214]">
                MindMatch
              </span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#292A2E]">
              <a href="#" className="hover:text-[#1868DB] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#1868DB] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#1868DB] transition-colors">
                For Therapists
              </a>
              <a href="#" className="hover:text-[#1868DB] transition-colors">
                Contact
              </a>
            </nav>
            <p className="text-sm text-[#292A2E]">
              {new Date().getFullYear()} MindMatch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
