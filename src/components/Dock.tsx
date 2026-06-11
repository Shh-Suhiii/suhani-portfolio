"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Designs", href: "#designs" },
  { label: "Contact", href: "#contact" },
];

export default function Dock() {
  const [hideDock, setHideDock] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigation = (href: string) => {
    const targetId = href === "#" ? null : href.replace("#", "");

    setIsNavigating(true);

    const startPosition = window.scrollY;
    const targetPosition = !targetId
      ? 0
      : document.getElementById(targetId)?.offsetTop ?? startPosition;

    const distance = targetPosition - startPosition;
    const duration = window.innerWidth >= 768 ? 850 : 650;
    const startTime = performance.now();

    const easeInOutCubic = (progress: number) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsNavigating(false);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const contactSection = document.getElementById("contact");

    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideDock(entry.isIntersecting);
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = links
      .map((link) => link.href.replace("#", ""))
      .filter(Boolean);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection("Home");
        return;
      }

      let currentSection = "Home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          const matchedLink = links.find(
            (link) => link.href === `#${section.id}`
          );

          if (matchedLink) currentSection = matchedLink.label;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isNavigating && (
        <div className="pointer-events-none fixed inset-0 z-[99999] flex items-center justify-center bg-[#07070A]/25 backdrop-blur-[2px]">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#4CC9F0]" />
        </div>
      )}
      <nav
        className={`fixed bottom-4 left-1/2 z-[9999] w-[calc(100vw-28px)] max-w-[430px] -translate-x-1/2 transition-all duration-500 sm:bottom-6 md:bottom-8 md:w-fit md:max-w-none ${
          hideDock
            ? "translate-y-8 opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100 pointer-events-auto"
        }`}
      >
        <div className="relative rounded-full p-[1px] bg-gradient-to-r from-white/20 via-[#7209B7]/50 to-[#4CC9F0]/40 shadow-[0_0_45px_rgba(114,9,183,0.22)]">
          <div className="absolute inset-0 rounded-full bg-[#7209B7]/20 blur-xl" />

          <div className="relative mx-auto flex items-center gap-1 overflow-x-auto whitespace-nowrap rounded-full border border-white/10 bg-[#0B0B10]/80 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl md:gap-1.5 md:px-3 md:py-2.5">
            <div className="mr-1 hidden h-2 w-2 shrink-0 rounded-full bg-[#4CC9F0] shadow-[0_0_16px_rgba(76,201,240,0.9)] md:block" />

            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(link.label);
                  handleNavigation(link.href);
                }}
                className={`group relative flex-shrink-0 overflow-hidden rounded-full px-3 py-2 text-xs transition-all duration-300 md:px-4 md:text-sm ${
                  activeSection === link.label
                    ? "bg-white/[0.09] text-white shadow-[0_0_22px_rgba(76,201,240,0.16)]"
                    : "text-zinc-400 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={`absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-[#7209B7] to-[#4CC9F0] transition-transform duration-300 ${
                    activeSection === link.label
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}