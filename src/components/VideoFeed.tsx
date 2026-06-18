"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Play/pause videos based on selection and handle mute state
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      video.muted = isMuted;
      if (index === selectedIndex) {
        video.play().catch(() => {
          // Autoplay blocked, user interaction required
        });
      } else {
        video.pause();
      }
    });
  }, [selectedIndex, isMuted]);

  return (
    <div className="video-carousel-container w-full overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {therapists.map((therapist, index) => {
            const isSelected = index === selectedIndex;
            return (
              <div
                key={therapist.video}
                className="embla__slide flex-shrink-0"
              >
                <div
                  className="video-card relative rounded-[32px] bg-[#101214] overflow-hidden shadow-2xl transition-all duration-300 ease-out"
                  style={{
                    transform: isSelected ? "scale(1)" : "scale(var(--carousel-side-scale))",
                    opacity: isSelected ? 1 : "var(--carousel-side-opacity)",
                  }}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={therapist.video}
                    className="h-full w-full object-cover"
                    loop
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                  />
                  {/* Mute/Unmute button - only show on selected video */}
                  {isSelected && (
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors z-10"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? (
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
                            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                          />
                        </svg>
                      ) : (
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
                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          />
                        </svg>
                      )}
                    </button>
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  {/* Therapist info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {therapist.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-3">
                      {therapist.specialty}
                    </p>
                    <button className="w-full bg-[#1868DB] hover:bg-[#1357b8] text-white font-medium py-2 sm:py-2.5 px-4 sm:px-5 rounded-full transition-colors text-[11px] sm:text-sm whitespace-nowrap">
                      Book Free Consultation
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
