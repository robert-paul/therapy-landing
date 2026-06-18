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

  // Play/pause videos based on selection
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === selectedIndex) {
        video.play().catch(() => {
          // Autoplay blocked, user interaction required
        });
      } else {
        video.pause();
      }
    });
  }, [selectedIndex]);

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
                    muted
                    playsInline
                    preload="metadata"
                  />
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
