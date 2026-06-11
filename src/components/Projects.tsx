"use client";

import { useState } from "react";

const projects = [
  {
    title: "LogicalFetch Website",
    tag: "Featured Project",
    description:
      "A modern service-based website built for LogicalFetch with clean UI, responsive pages, backend logic and database integration.",
    tech: "Next.js • Python • MySQL",
    emoji: "⚡",
    logo: "/images/projects/logicalfetch-logo.jpeg",
    accent: "from-violet-500/20 to-cyan-500/10",
    live: "https://logicalfetch.vercel.app",
  },
  {
    title: "KapdaForEveryone Website",
    tag: "Fashion Website",
    description:
      "A clean and responsive fashion-focused website created with frontend fundamentals and modern Tailwind styling.",
    tech: "HTML • CSS • JavaScript • Tailwind",
    emoji: "👕",
    logo: "/images/projects/kfe.png",
    accent: "from-cyan-500/20 to-violet-500/10",
    live: "https://kapdaforeveryone.vercel.app",
  },
  {
    title: "ProjectFetch",
    tag: "Web Application",
    description:
      "A project showcase and dashboard-style platform built with Next.js, Firebase, Python and Flask for dynamic project handling.",
    tech: "Next.js • Firebase • Python • Flask",
    emoji: "🚀",
    logo: "/images/projects/project-fetch.png",
    accent: "from-violet-500/20 to-fuchsia-500/10",
    live: "https://projectfetch.vercel.app",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const activeProject = projects[activeIndex];

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const handleTouchEnd = (touchEnd: number) => {
    if (touchStart === null) return;

    const distance = touchStart - touchEnd;

    if (distance > 50) goNext();
    if (distance < -50) goPrevious();

    setTouchStart(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-glow projects-glow-one" />
      <div className="projects-glow projects-glow-two" />
      <div className="projects-center-glow" />
      <div className="projects-grid-bg" />
      <div className="projects-vignette" />

      <div className="projects-shell">
        <div className="projects-heading">
          <p className="projects-kicker">✦ Featured Projects</p>
          <h2>
            Products I&apos;ve
            <span> Built</span>
          </h2>
          <p>
            Real-world websites and web applications designed with clean UI,
            practical functionality and meaningful user experiences.
          </p>
          <div className="projects-divider" />
        </div>

        <div className="projects-carousel-wrap">
          <button
            type="button"
            onClick={goPrevious}
            className="projects-nav projects-nav-left"
            aria-label="Previous project"
          >
            ←
          </button>

          <div
            className="projects-stack"
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
          >
            {projects.map((project, index) => {
              const offset =
                (index - activeIndex + projects.length) % projects.length;

              return (
                <article
                  key={project.title}
                  className={`projects-card projects-card-${offset} bg-gradient-to-br ${project.accent}`}
                >
                  <div className="projects-card-content">
                    <div className="projects-card-top">
                      <div className="projects-logo-mini">
                        <img src={project.logo} alt={`${project.title} logo`} />
                      </div>
                      <div>
                        <p>{project.tag}</p>
                        <span>
                          0{index + 1} / 0{projects.length}
                        </span>
                      </div>
                    </div>

                    <h3>{project.title}</h3>
                    <p className="projects-description">{project.description}</p>

                    <div className="projects-tech">
                      {project.tech.split(" • ").map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="projects-actions">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        View Live
                      </a>
                      <a
                        href="https://github.com/Shh-Suhiii"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="projects-visual">
                    <div className="projects-logo-showcase">
                      <img src={project.logo} alt={`${project.title} logo`} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="projects-nav projects-nav-right"
            aria-label="Next project"
          >
            →
          </button>
        </div>

        <div className="projects-dots">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={index === activeIndex ? "active" : ""}
              aria-label={`Open ${project.title}`}
            />
          ))}
        </div>

        <div className="projects-hint">
          <p>Swipe left/right or use arrows to explore projects.</p>
        </div>

        <div className="projects-github-card">
          <p>
            More experiments, mini projects and source code are available on my
            GitHub.
          </p>
          <a href="https://github.com/Shh-Suhiii" target="_blank" rel="noreferrer">
            Explore GitHub
          </a>
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background: #07070A;
          color: white;
          padding: 120px 16px 150px;
        }

        .projects-glow,
        .projects-center-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 9999px;
        }

        .projects-glow-one {
          top: 90px;
          left: 0;
          width: 420px;
          height: 420px;
          background: rgba(114, 9, 183, 0.18);
          filter: blur(150px);
        }

        .projects-glow-two {
          right: 0;
          bottom: 0;
          width: 420px;
          height: 420px;
          background: rgba(76, 201, 240, 0.1);
          filter: blur(150px);
        }

        .projects-center-glow {
          left: 50%;
          top: 50%;
          width: 520px;
          height: 520px;
          transform: translate(-50%, -50%);
          background: rgba(114, 9, 183, 0.06);
          filter: blur(180px);
        }

        .projects-grid-bg {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 96px 96px;
        }

        .projects-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, #07070A 78%);
        }

        .projects-shell {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
        }

        .projects-heading {
          max-width: 760px;
        }

        .projects-kicker {
          color: #4CC9F0;
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .projects-heading h2 {
          margin-top: 20px;
          font-size: 44px;
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 900;
        }

        .projects-heading h2 span {
          background: linear-gradient(to right, #7209B7, #4361EE, #4CC9F0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .projects-heading > p:last-of-type {
          margin-top: 22px;
          max-width: 680px;
          color: #a1a1aa;
          font-size: 16px;
          line-height: 1.8;
        }

        .projects-divider {
          width: 140px;
          height: 2px;
          margin-top: 24px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #7209B7, #4361EE, #4CC9F0);
          box-shadow: 0 0 24px rgba(76,201,240,0.22);
        }

        .projects-carousel-wrap {
          position: relative;
          margin-top: 72px;
          min-height: 440px;
          display: grid;
          place-items: center;
        }

        .projects-stack {
          position: relative;
          width: 100%;
          height: 420px;
          perspective: 1400px;
        }

        .projects-card {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 28px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 38px;
          padding: 34px;
          background-color: rgba(255,255,255,0.035);
          backdrop-filter: blur(22px);
          box-shadow: 0 0 80px rgba(0,0,0,0.22);
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease, filter 0.35s ease;
          overflow: hidden;
        }

        .projects-card-0 {
          z-index: 5;
          opacity: 1;
          transform: translateX(0) scale(1) rotate(0deg);
        }

        .projects-card-1 {
          z-index: 4;
          opacity: 0.55;
          transform: translateX(62px) scale(0.92) rotate(4deg);
          filter: blur(1px);
          pointer-events: none;
        }

        .projects-card-2 {
          z-index: 3;
          opacity: 0.28;
          transform: translateX(118px) scale(0.84) rotate(8deg);
          filter: blur(2px);
          pointer-events: none;
        }

        .projects-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          background: radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 42%);
          pointer-events: none;
        }

        .projects-card-content,
        .projects-visual {
          position: relative;
          z-index: 2;
        }

        .projects-card-top {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .projects-logo-mini {
          display: grid;
          place-items: center;
          width: 54px;
          height: 54px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          overflow: hidden;
          padding: 9px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 22px rgba(76,201,240,0.08);
        }

        .projects-logo-mini img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .projects-card-top p {
          color: #4CC9F0;
          font-size: 12px;
          font-weight: 700;
        }

        .projects-card-top span {
          display: inline-block;
          margin-top: 4px;
          color: #71717a;
          font-size: 12px;
        }

        .projects-card h3 {
          margin-top: 30px;
          max-width: 560px;
          font-size: 38px;
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 900;
        }

        .projects-description {
          margin-top: 18px;
          max-width: 600px;
          color: #d4d4d8;
          font-size: 16px;
          line-height: 1.75;
        }

        .projects-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }

        .projects-tech span {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.08);
          border-radius: 9999px;
          padding: 8px 14px;
          color: #e4e4e7;
          font-size: 13px;
          font-weight: 500;
        }

        .projects-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .projects-actions a {
          border-radius: 9999px;
          padding: 11px 18px;
          font-size: 14px;
          font-weight: 700;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .projects-actions a:first-child {
          background: linear-gradient(90deg, #7209B7, #4CC9F0);
          color: white;
        }

        .projects-actions a:last-child {
          border: 1px solid rgba(76,201,240,0.35);
          background: rgba(255,255,255,0.05);
          color: #bae6fd;
        }

        .projects-actions a:hover {
          transform: translateY(-3px);
        }

        .projects-visual {
          display: grid;
          place-items: center;
          min-height: 100%;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 30px;
          background: rgba(7,7,10,0.28);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .projects-logo-showcase {
          display: grid;
          place-items: center;
          position: relative;
          width: 240px;
          height: 240px;
          border-radius: 42px;
          border: 1px solid rgba(255,255,255,0.12);
          background: radial-gradient(circle at center, rgba(255,255,255,0.08), rgba(255,255,255,0.025));
          padding: 34px;
          box-shadow: 0 0 55px rgba(76,201,240,0.14), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .projects-logo-showcase img {
          width: 85%;
          height: 85%;
          object-fit: contain;
          filter: drop-shadow(0 0 24px rgba(76,201,240,0.2));
        }

        .projects-nav {
          position: absolute;
          top: 50%;
          z-index: 20;
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(17,17,24,0.86);
          color: white;
          font-size: 22px;
          backdrop-filter: blur(18px);
          box-shadow: 0 0 35px rgba(0,0,0,0.25);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .projects-nav:hover {
          transform: translateY(-50%) scale(1.08);
          border-color: rgba(76,201,240,0.45);
        }

        .projects-nav-left {
          left: -24px;
          transform: translateY(-50%);
        }

        .projects-nav-right {
          right: -24px;
          transform: translateY(-50%);
        }

        .projects-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 30px;
        }

        .projects-dots button {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.18);
          transition: width 0.3s ease, background 0.3s ease;
        }

        .projects-dots button.active {
          width: 28px;
          background: linear-gradient(90deg, #7209B7, #4CC9F0);
        }

        .projects-hint {
          margin-top: 14px;
          text-align: center;
          color: #71717a;
          font-size: 13px;
        }

        .projects-github-card {
          margin-top: 44px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.035);
          border-radius: 30px;
          padding: 24px;
          text-align: center;
          backdrop-filter: blur(20px);
        }

        .projects-github-card p {
          color: #a1a1aa;
          font-size: 14px;
        }

        .projects-github-card a {
          display: inline-flex;
          margin-top: 16px;
          border: 1px solid rgba(76,201,240,0.32);
          background: rgba(255,255,255,0.05);
          border-radius: 9999px;
          padding: 10px 18px;
          color: #bae6fd;
          font-size: 14px;
          font-weight: 700;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .projects-github-card a:hover {
          transform: translateY(-3px);
          background: rgba(76,201,240,0.1);
        }

        @media (min-width: 900px) {
          .projects-heading h2 {
            font-size: 64px;
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 90px 16px 125px;
          }

          .projects-heading h2 {
            font-size: 34px;
          }

          .projects-heading > p:last-of-type {
            font-size: 14px;
            line-height: 1.75;
          }

          .projects-carousel-wrap {
            margin-top: 42px;
            min-height: 640px;
          }

          .projects-stack {
            height: 610px;
          }

          .projects-card {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            gap: 18px;
            padding: 20px;
            border-radius: 28px;
            overflow: visible;
          }

          .projects-card-1 {
            transform: translateY(28px) scale(0.94) rotate(3deg);
          }

          .projects-card-2 {
            transform: translateY(54px) scale(0.88) rotate(6deg);
          }

          .projects-card h3 {
            margin-top: 22px;
            font-size: 26px;
          }

          .projects-description {
            font-size: 14px;
            line-height: 1.65;
          }

          .projects-visual {
            min-height: 190px;
            border-radius: 24px;
          }

          .projects-logo-showcase {
            width: 150px;
            height: 150px;
            border-radius: 28px;
            padding: 10px;
          }

          .projects-logo-showcase img {
            width: 92%;
            height: 92%;
          }

          .projects-logo-showcase::before {
            content: "";
            position: absolute;
            inset: 18%;
            border-radius: 50%;
            background: rgba(76, 201, 240, 0.18);
            filter: blur(34px);
          }

          .projects-actions {
            margin-top: 24px;
          }

          .projects-actions a {
            flex: 1;
            text-align: center;
            padding: 10px 14px;
            font-size: 13px;
          }

          .projects-nav {
            top: auto;
            bottom: -66px;
            width: 44px;
            height: 44px;
          }

          .projects-nav-left {
            left: calc(50% - 58px);
            transform: none;
          }

          .projects-nav-right {
            right: calc(50% - 58px);
            transform: none;
          }

          .projects-nav:hover {
            transform: scale(1.08);
          }

          .projects-dots {
            margin-top: 72px;
          }

          .projects-hint {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}