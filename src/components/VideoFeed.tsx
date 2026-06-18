"use client";

import { useEffect, useRef } from "react";

interface Therapist {
  name: string;
  specialty: string;
  video: string;
}

const therapists: Therapist[] = [
  {
    name: "Dr. Sarah Chen",
    specialty: "Anxiety & Depression",
    video: "/videos/counselling-nanaimo.mp4",
  },
  {
    name: "Kyrsti Tam",
    specialty: "Marriage & Family",
    video: "/videos/kyrsti-tam.mp4",
  },
  {
    name: "Dr. Michael Rivera",
    specialty: "Trauma & PTSD",
    video: "/videos/therapist-intro-1.mp4",
  },
  {
    name: "Emily Watson",
    specialty: "Self-Esteem & Growth",
    video: "/videos/empowered-therapy.mp4",
  },
  {
    name: "Taylor Hiers",
    specialty: "Life Transitions",
    video: "/videos/taylor-hiers.mp4",
  },
  {
    name: "Darryon Spencer",
    specialty: "Stress Management",
    video: "/videos/darryon-spencer.mp4",
  },
  {
    name: "Dr. Jessica Moore",
    specialty: "Relationships & Communication",
    video: "/videos/therapist-intro-2.mp4",
  },
];

export default function VideoFeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay blocked, user interaction required
            });
          } else {
            video.pause();
          }
        });
      },
      {
        root: container,
        threshold: 0.6,
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="video-feed relative h-[600px] w-full max-w-[340px] rounded-[40px] bg-[#101214] overflow-hidden shadow-2xl"
    >
      {therapists.map((therapist, index) => (
        <div
          key={therapist.video}
          className="video-item relative h-full w-full flex-shrink-0"
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={therapist.video}
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
            preload="metadata"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          {/* Therapist info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-semibold mb-1">{therapist.name}</h3>
            <p className="text-sm text-white/80 mb-4">{therapist.specialty}</p>
            <button className="w-full bg-[#1868DB] hover:bg-[#1357b8] text-white font-medium py-3 px-6 rounded-full transition-colors">
              Book Free Consultation
            </button>
          </div>
          {/* Scroll indicator */}
          {index === 0 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 animate-bounce">
              <span className="text-xs mb-1">Scroll to explore</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
