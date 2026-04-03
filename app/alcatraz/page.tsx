"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const DONATION_URL = "https://donate.hakuapp.com/donations/new?fundraiser=4490f93b3d3dca736d50";

export default function Alcatraz() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        .font-editorial {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-on-scroll:nth-child(2) { transition-delay: 0.1s; }
        .reveal-on-scroll:nth-child(3) { transition-delay: 0.2s; }
        .reveal-on-scroll:nth-child(4) { transition-delay: 0.3s; }

        .flowing-line {
          background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
          animation: flowDown 2s ease-in-out infinite;
        }

        @keyframes flowDown {
          0%, 100% { opacity: 0.3; transform: translateY(-8px); }
          50% { opacity: 1; transform: translateY(8px); }
        }

        .story-paragraph {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }

        .story-paragraph.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] sm:min-h-screen overflow-hidden flex items-center">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/bike.jpg"
              alt="Liviu training on bike for Escape from Alcatraz triathlon"
              fill
              className="object-cover object-center brightness-[0.5] contrast-105"
              priority
            />
            {/* Overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/60 via-transparent to-[#0a0a0b]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/40 via-transparent to-[#0a0a0b]/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 section-container w-full py-20">
            <div className="max-w-3xl">
              <p className="reveal-on-scroll text-sm tracking-[0.25em] text-white/50 uppercase mb-6">
                Fundraiser
              </p>

              <h1 className="reveal-on-scroll font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6">
                Help me escape Alcatraz.
              </h1>

              <p className="reveal-on-scroll text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
                I&apos;m racing one of the most demanding triathlons in the world to raise money for the American Cancer Society. This is personal.
              </p>

              <div className="reveal-on-scroll flex flex-wrap gap-4">
                <Link
                  href={DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
                >
                  <span>Donate now</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <button
                  onClick={scrollToStory}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm text-white/70 border border-white/[0.15] hover:bg-white/[0.05] hover:border-white/[0.25] transition-all"
                >
                  Read the story
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
            <div className="flowing-line w-px h-10" />
            <svg className="w-4 h-4 text-white/30 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* Quick Context */}
        <section className="py-20 px-6 border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto">
            <div className="reveal-on-scroll grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">The Race</p>
                <p className="text-white/80 leading-relaxed">
                  Escape from Alcatraz Triathlon. 1.5mi swim from Alcatraz Island through frigid Bay waters, 18mi bike, 8mi run with the infamous Sand Ladder.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">The Cause</p>
                <p className="text-white/80 leading-relaxed">
                  Every dollar goes to the American Cancer Society. Research, patient support, and the fight against a disease that has taken too many people too soon.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Why Now</p>
                <p className="text-white/80 leading-relaxed">
                  I spent years avoiding physical challenges after injuries piled up. At the end of 2025, I decided to stop waiting and start moving again.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flow indicator */}
        <div className="flex flex-col items-center py-4">
          <div className="flowing-line w-px h-12" />
          <svg className="w-4 h-4 text-white/20 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Story Section */}
        <section id="story" className="py-20 px-6 scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            <p className="reveal-on-scroll text-sm tracking-[0.25em] text-white/40 uppercase mb-12">
              The Full Story
            </p>

            <div className="space-y-8">
              <p className="reveal-on-scroll text-white/70 text-lg leading-relaxed">
                Today I turn 26. Instead of birthday wishes, help me literally escape Alcatraz.
              </p>

              <p className="reveal-on-scroll text-white/70 text-lg leading-relaxed">
                Weirdly, this story starts in GTA San Andreas and ends with me fundraising for the American Cancer Society.
              </p>

              <p className="reveal-on-scroll text-white/70 text-lg leading-relaxed">
                I&apos;m training for the Escape from Alcatraz triathlon.
              </p>

              <p className="reveal-on-scroll text-white/70 text-lg leading-relaxed">
                Growing up, sports were a big part of my life. Then injuries started piling up. Flat feet. Osgood-Schlatter in both knees. Two broken clavicles took me out of swimming. Then in college I had a spinal cord injury, and that really scrambled something in me. After that, I stopped pushing myself physically and slid into a pretty unhealthy lifestyle for years.
              </p>

              <p className="reveal-on-scroll text-white/70 text-lg leading-relaxed">
                At the end of 2025, I finally decided I either change something or keep going nowhere.
              </p>

              <p className="reveal-on-scroll text-white/70 text-lg leading-relaxed">
                So now, for some reason, I&apos;m training for one of the most unhinged races I could find.
              </p>

              {/* Visual break */}
              <div className="py-8">
                <div className="w-16 h-px bg-white/10 mx-auto" />
              </div>

              <p className="reveal-on-scroll text-white/70 text-lg leading-relaxed">
                Part of why this race feels so surreal is that the first version of it I ever knew was not even real. It was the one in GTA San Andreas.
              </p>

              <p className="reveal-on-scroll text-white/70 text-lg leading-relaxed">
                A friend of mine and I both played it. We would make dumb references from the game, quote lines to each other, and every now and then bring up that ridiculous triathlon in San Fierro, the game&apos;s version of San Francisco. Back then it was just a game mission. Now I&apos;m actually training to do the real thing.
              </p>

              <p className="reveal-on-scroll text-white/90 text-xl leading-relaxed font-medium">
                He is no longer here. Cancer.
              </p>

              <p className="reveal-on-scroll text-white/70 text-lg leading-relaxed">
                And the older I get, the less cancer feels like some distant, unlucky thing that happens somewhere else. It keeps showing up. In friends. In family. In stories that were not supposed to end that early.
              </p>

              {/* Visual break */}
              <div className="py-8">
                <div className="w-16 h-px bg-white/10 mx-auto" />
              </div>

              <p className="reveal-on-scroll text-white/70 text-lg leading-relaxed">
                So this year I&apos;m not really celebrating my birthday. I&apos;m trying to turn it into something that matters.
              </p>

              <p className="reveal-on-scroll text-white/70 text-lg leading-relaxed">
                I&apos;m racing on behalf of the American Cancer Society.
              </p>

              <p className="reveal-on-scroll text-white/70 text-lg leading-relaxed">
                If cancer has touched your life in any way, then this is personal for you too. Please support this if you can. Put something behind the people fighting it now, the people we have lost too soon, and the kind of research that gives the rest of us a better shot.
              </p>

              <p className="reveal-on-scroll text-white/90 text-xl leading-relaxed font-medium italic">
                Every dollar is a step toward research, and every mile I swim, bike, and run is for those who no longer can.
              </p>
            </div>
          </div>
        </section>

        {/* Flow indicator */}
        <div className="flex flex-col items-center py-4">
          <div className="flowing-line w-px h-12" />
          <svg className="w-4 h-4 text-white/20 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Bottom CTA */}
        <section className="py-24 px-6 bg-white/[0.015]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="reveal-on-scroll">
              <h2 className="font-editorial text-3xl md:text-4xl text-white mb-6">
                Be part of this.
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
                Your donation supports cancer research and patient care through the American Cancer Society. Every contribution matters.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-base font-medium hover:bg-white/90 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
                >
                  <span>Donate to the cause</span>
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <p className="text-white/40 text-sm mt-8">
                Can&apos;t donate? Share this page. It helps more than you think.
              </p>
            </div>
          </div>
        </section>

        {/* Footer spacing */}
        <div className="h-16" />
      </div>
    </>
  );
}
