import { useState } from "react";
import { cn } from "./utils/cn";

// ─── Icons ────────────────────────────────────────────────────────────────────
function ZapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function HelpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function MusicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function SpeedIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function DeviceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
    </svg>
  );
}

function HeadphonesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Section Components ───────────────────────────────────────────────────────

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-dark-border bg-dark-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-spotify-green">
            <MusicIcon className="h-5 w-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Spoti<span className="text-spotify-green">Catch</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-text-secondary transition-colors hover:text-white">
            Features
          </a>
          <a href="#why" className="text-sm font-medium text-text-secondary transition-colors hover:text-white">
            Why SpotiCatch
          </a>
          <a href="#faq" className="text-sm font-medium text-text-secondary transition-colors hover:text-white">
            FAQ
          </a>
          <a
            href="#convert"
            className="rounded-full bg-spotify-green px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-spotify-green-hover hover:shadow-lg hover:shadow-spotify-green/25"
          >
            Convert Now
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-white md:hidden"
        >
          {mobileOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-dark-border bg-dark-bg px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-3">
            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-dark-card hover:text-white"
            >
              Features
            </a>
            <a
              href="#why"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-dark-card hover:text-white"
            >
              Why SpotiCatch
            </a>
            <a
              href="#faq"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-dark-card hover:text-white"
            >
              FAQ
            </a>
            <a
              href="#convert"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-spotify-green px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-spotify-green-hover"
            >
              Convert Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  const [link, setLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (link.trim()) {
      // In a real app, this would call the conversion API
      alert(`Converting: ${link}\n\nIn a real app, this would process your Spotify link.`);
    }
  };

  return (
    <section id="convert" className="relative min-h-screen overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-spotify-green/10 blur-[120px]" />
      </div>
      <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-spotify-green/5 blur-[100px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-16 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-card/50 px-4 py-1.5">
          <ZapIcon className="h-4 w-4 text-spotify-green" />
          <span className="text-xs font-medium text-text-secondary">
            Free Spotify to MP3 Converter
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Convert your favorite Spotify tracks
          <br />
          <span className="text-gradient">to MP3 — completely free</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl">
          Turn any Spotify track, playlist, or album into high-quality MP3 audio.
          No signup. No limits. No ads.
        </p>

        {/* Converter Input */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-2xl"
        >
          <div className="relative flex items-center gap-2 rounded-2xl border border-dark-border bg-dark-card p-2 shadow-2xl transition-all focus-within:border-spotify-green/50 focus-within:shadow-lg focus-within:shadow-spotify-green/10">
            <div className="flex items-center pl-3">
              <MusicIcon className="h-5 w-5 text-text-muted" />
            </div>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Paste your Spotify link here..."
              className="flex-1 bg-transparent px-2 py-3 text-base text-white placeholder-text-muted outline-none"
            />
            <button
              type="submit"
              disabled={!link.trim()}
              className={cn(
                "flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all",
                link.trim()
                  ? "bg-spotify-green text-black hover:bg-spotify-green-hover hover:shadow-lg hover:shadow-spotify-green/25"
                  : "bg-dark-border text-text-muted cursor-not-allowed"
              )}
            >
              <DownloadIcon className="h-4 w-4" />
              Download
            </button>
          </div>
        </form>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-4 w-4 text-spotify-green" />
            No account needed
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-4 w-4 text-spotify-green" />
            Unlimited downloads
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-4 w-4 text-spotify-green" />
            High quality MP3
          </span>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 max-w-xl rounded-2xl border border-dark-border bg-dark-card/50 p-4">
          <p className="text-xs text-text-muted">
            After clicking "Download", you may have to complete a quick verification step.
          </p>
          <p className="mt-1 text-xs text-text-muted">
            Consider supporting us to keep SpotiCatch fast and ad‑light.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="relative mx-auto mt-24 max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-spotify-green">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            SPOTIFY LINK
            <br />
            <span className="text-gradient">→ MP3 FILE</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Convert any <strong className="text-white">Spotify song, playlist, or album</strong> to a
            high-quality MP3 or FLAC file in three simple steps. No software, no account, completely free.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Copy Link",
              desc: "Copy any Spotify track, playlist, or album link from the Spotify app or web player.",
            },
            {
              step: "02",
              title: "Paste & Convert",
              desc: "Paste the link above and click Download. Our converter processes your track instantly.",
            },
            {
              step: "03",
              title: "Download MP3",
              desc: "Save your high-quality MP3 file with all metadata embedded — ready for offline listening.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="group relative overflow-hidden rounded-2xl border border-dark-border bg-dark-card p-6 transition-all hover:border-spotify-green/20 hover:shadow-lg hover:shadow-spotify-green/5"
            >
              <div className="absolute -right-4 -top-4 text-6xl font-black text-white/5">
                {item.step}
              </div>
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-spotify-green/10 text-spotify-green">
                  <span className="text-lg font-bold">{item.step}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-spotify-green/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <ZapIcon className="h-5 w-5 text-spotify-green" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-spotify-green">
            Features
          </span>
        </div>
        <p className="mx-auto mb-16 max-w-3xl text-center text-text-secondary">
          SpotiCatch is a powerful <strong className="text-white">Spotify to MP3 converter</strong> packed
          with everything you need. Convert tracks, playlists, and albums with full metadata — all from
          your browser.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Full Metadata Card */}
          <div className="lg:col-span-2">
            <div className="group relative h-full overflow-hidden rounded-2xl border border-dark-border bg-dark-card p-6 transition-all hover:border-spotify-green/20 hover:shadow-lg hover:shadow-spotify-green/5 sm:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Album Art Preview */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 rounded-xl bg-dark-card-hover p-3">
                    <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-spotify-green/30 to-emerald-900/30">
                      <div className="flex h-full w-full items-center justify-center">
                        <MusicIcon className="h-6 w-6 text-spotify-green" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Levitating</p>
                      <p className="text-xs text-text-secondary">Dua Lipa</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      { label: "Album", value: "Future Nostalgia" },
                      { label: "Year", value: "2020" },
                      { label: "Cover Art", value: "Embedded" },
                      { label: "Lyrics", value: "Coming soon" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-lg border border-dark-border px-3 py-2"
                      >
                        <span className="text-xs text-text-muted">{item.label}</span>
                        <span className="text-xs font-medium text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="mb-3 text-2xl font-bold text-white">Full Metadata</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Every download includes embedded title, artist, album art, and more. Lyrics support
                    is coming soon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Entire Playlists Card */}
          <div className="lg:col-span-1">
            <div className="group relative h-full overflow-hidden rounded-2xl border border-dark-border bg-dark-card p-6 transition-all hover:border-spotify-green/20 hover:shadow-lg hover:shadow-spotify-green/5 sm:p-8">
              <div className="flex h-full flex-col justify-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-spotify-green/10">
                  <CopyIcon className="h-6 w-6 text-spotify-green" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">Entire Playlists</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Download full <strong className="text-white">Spotify playlists</strong> and albums. Free
                  users get 100 tracks — Plus unlocks unlimited.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="mt-12 text-center">
          <p className="mx-auto max-w-3xl text-text-secondary">
            SpotiCatch is a free online <strong className="text-white">Spotify to MP3 converter</strong>{" "}
            that supports MP3 and FLAC formats. Whether you need a single track or an entire playlist, our
            converter delivers high-quality audio with embedded metadata in seconds — no software
            installation required.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const features = [
    {
      icon: LockIcon,
      title: "No Account Required",
      desc: "Use SpotiCatch without signing up. No login, no email, no personal data collected — just paste a link and convert.",
    },
    {
      icon: GlobeIcon,
      title: "100% Browser-Based",
      desc: "No software to install, no extensions needed. SpotiCatch is an online Spotify to MP3 converter that runs entirely in your browser on any device.",
    },
    {
      icon: SpeedIcon,
      title: "Fast & Reliable",
      desc: "Most tracks convert in under 30 seconds. Our converter engine is optimized for speed so you spend less time waiting.",
    },
    {
      icon: DeviceIcon,
      title: "Works on All Devices",
      desc: "Convert Spotify to MP3 on iPhone, Android, Windows, Mac, or Linux. Any device with a browser works — no app required.",
    },
    {
      icon: HeadphonesIcon,
      title: "High-Quality Audio",
      desc: "Get MP3 at 128kbps for free. Upgrade to Plus for 320kbps MP3 and lossless FLAC — true CD quality.",
    },
    {
      icon: MusicIcon,
      title: "Free Forever",
      desc: "SpotiCatch is a free Spotify to MP3 converter with no hidden fees. Convert unlimited tracks at no cost — Plus is optional for power users.",
    },
  ];

  return (
    <section id="why" className="relative py-24">
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute right-0 bottom-1/3 h-[400px] w-[400px] rounded-full bg-spotify-green/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <CheckIcon className="h-5 w-5 text-spotify-green" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-spotify-green">
            Why SpotiCatch
          </span>
        </div>
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
          Why Choose SpotiCatch
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-text-secondary">
          Thousands of users trust SpotiCatch as their go-to{" "}
          <strong className="text-white">Spotify to MP3 converter</strong>. Here&apos;s why.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-dark-border bg-dark-card p-6 transition-all hover:border-spotify-green/20 hover:shadow-lg hover:shadow-spotify-green/5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-spotify-green/10 transition-colors group-hover:bg-spotify-green/20">
                  <Icon className="h-5 w-5 text-spotify-green" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is SpotiCatch?",
      a: "SpotiCatch is a free online Spotify to MP3 converter that lets you convert any Spotify track, playlist, or album into a downloadable MP3 or FLAC file. No software installation or account creation is required.",
    },
    {
      q: "Is SpotiCatch free to use?",
      a: "Yes, SpotiCatch is completely free. You can convert unlimited tracks at no cost. A Plus plan is available for power users who want higher bitrate MP3 (320kbps) and lossless FLAC support.",
    },
    {
      q: "Do I need to create an account?",
      a: "No, you don't need to sign up or create an account. Simply paste a Spotify link and click download. We don't collect any personal data.",
    },
    {
      q: "What audio quality can I expect?",
      a: "Free users get MP3 at 128kbps. Plus users can upgrade to 320kbps MP3 and lossless FLAC for true CD-quality audio. All downloads include embedded metadata like title, artist, and album art.",
    },
    {
      q: "Can I download entire playlists?",
      a: "Yes, you can paste a playlist or album link and download all tracks. Free users can download up to 100 tracks per playlist. Plus subscribers get unlimited playlist downloads.",
    },
    {
      q: "Is it legal to convert Spotify tracks to MP3?",
      a: "SpotiCatch is designed for personal use only. We encourage users to respect copyright laws and only convert content they have the right to download. Please use the service responsibly.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24">
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-spotify-green/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <HelpIcon className="h-5 w-5 text-spotify-green" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-spotify-green">
            FAQ
          </span>
        </div>
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-text-secondary">
          Everything you need to know about using SpotiCatch as your{" "}
          <strong className="text-white">Spotify to MP3 converter</strong>.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-dark-border bg-dark-card transition-all hover:border-dark-border/80"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-medium text-white sm:text-base">{faq.q}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-text-muted transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === i ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="border-t border-dark-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-text-secondary">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-dark-border bg-dark-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-spotify-green">
              <MusicIcon className="h-4 w-4 text-black" />
            </div>
            <span className="text-lg font-bold text-white">
              Spoti<span className="text-spotify-green">Catch</span>
            </span>
          </a>
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} SpotiCatch. Free Spotify to MP3 Converter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
