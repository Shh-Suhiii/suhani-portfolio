const highlights = [
  {
    title: "Student Mode",
    value: "MCA @ VIT",
    description: "Academics + product building.",
  },
  {
    title: "Builder Mode",
    value: "Apps + Websites",
    description: "Flutter, Next.js, Flask, Firebase.",
  },
  {
    title: "Design Mode",
    value: "UI/UX + Visuals",
    description: "Clean layouts and smooth flows.",
  },
];

const journey = ["BCA", "MCA", "Projects", "Portfolio"];

const traits = ["curious", "consistent", "creative", "problem solver"];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-glow about-glow-one" />
      <div className="about-glow about-glow-two" />
      <div className="about-grid-bg" />
      <div className="about-vignette" />

      <div className="about-shell">
        <div className="about-top-grid">
          <div className="about-heading">
            <p className="about-kicker">About Me</p>
            <h2>
              Sirf code nahi,
              <span> experience build karti hoon.</span>
            </h2>
            <p>
              Main Suhani Rai — Computer Applications student, developer aur UI/UX
              explorer. Mujhe simple ideas ko clean digital products mein convert
              karna pasand hai.
            </p>
          </div>

          <div className="about-avatar-card" aria-label="Suhani Rai avatar">
            <div className="about-avatar-orbit" />
            <div className="about-avatar-frame">
              <img
                src="/images/projects/Avatar4.jpeg"
                alt="Suhani Rai avatar"
                className="about-avatar-img"
              />
            </div>
            <div className="about-avatar-badge">Developer • Designer</div>
          </div>
        </div>

        <div className="about-layout">
          <div className="about-story-card">
            <div className="about-story-top">
              <div>
                <p className="about-card-label">Current Chapter</p>
                <h3>Learning. Building. Improving.</h3>
              </div>
              <div className="about-dot" />
            </div>

            <p className="about-story-text">
              Abhi mera focus hai better development skills, stronger design sense,
              aur real-world projects banana. Yeh portfolio meri academics, projects,
              designs aur growth ka digital space hai.
            </p>

            <div className="about-traits">
              {traits.map((trait) => (
                <span key={trait}>{trait}</span>
              ))}
            </div>
          </div>

          <div className="about-mini-panel">
            <p className="about-card-label">Quick Identity</p>

            <div className="about-identity-stack">
              <div className="about-identity-pill">
                <span>👩‍💻</span>
                <strong>Developer + Designer</strong>
              </div>
              <div className="about-identity-pill">
                <span>🚀</span>
                <strong>Web, Apps, UI</strong>
              </div>
              <div className="about-identity-pill">
                <span>✨</span>
                <strong>Clean + Creative</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="about-highlight-grid">
          {highlights.map((item) => (
            <div key={item.title} className="about-highlight-card">
              <p>{item.title}</p>
              <h3>{item.value}</h3>
              <span>{item.description}</span>
            </div>
          ))}
        </div>

        <div className="about-journey-card desktop-only">
          <div className="about-journey-head">
            <p className="about-card-label">Journey Map</p>
            <span>from academics to real products</span>
          </div>

          <div className="about-journey-line">
            {journey.map((item, index) => (
              <div key={item} className="about-journey-step">
                <div className="about-step-circle">{index + 1}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #07070A;
          color: white;
          padding: 110px 16px 150px;
        }

        .about-glow {
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
        }

        .about-glow-one {
          width: 440px;
          height: 440px;
          right: 8%;
          top: 18%;
          background: rgba(114, 9, 183, 0.16);
          filter: blur(150px);
        }

        .about-glow-two {
          width: 360px;
          height: 360px;
          left: 4%;
          bottom: 12%;
          background: rgba(76, 201, 240, 0.09);
          filter: blur(140px);
        }

        .about-grid-bg {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 96px 96px;
        }

        .about-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, #07070A 78%);
        }

        .about-shell {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
        }

        .about-top-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        .about-heading {
          max-width: 760px;
          position: relative;
        }

        .about-heading::after {
          content: "";
          position: absolute;
          right: -220px;
          top: 38px;
          width: 280px;
          height: 280px;
          border-radius: 9999px;
          border: 1px solid rgba(114,9,183,0.18);
          background: radial-gradient(circle, rgba(114,9,183,0.11), transparent 68%);
          pointer-events: none;
        }

        .about-kicker,
        .about-card-label {
          color: #4CC9F0;
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .about-heading h2 {
          margin-top: 20px;
          font-size: 42px;
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 900;
        }

        .about-heading h2 span {
          background: linear-gradient(to right, #7209B7, #4361EE, #4CC9F0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .about-heading > p:last-child {
          margin-top: 24px;
          max-width: 700px;
          color: #a1a1aa;
          font-size: 16px;
          line-height: 1.8;
        }

        .about-avatar-card {
          position: relative;
          width: min(360px, 100%);
          margin-left: auto;
          display: grid;
          place-items: center;
          isolation: isolate;
        }

        .about-avatar-card::before {
          content: "";
          position: absolute;
          inset: 18%;
          border-radius: 9999px;
          background: rgba(114, 9, 183, 0.26);
          filter: blur(52px);
          z-index: -2;
        }

        .about-avatar-orbit {
          position: absolute;
          inset: -14px;
          border-radius: 9999px;
          border: 1px solid rgba(76, 201, 240, 0.18);
          background: conic-gradient(from 180deg, rgba(76,201,240,0.22), rgba(114,9,183,0.3), rgba(76,201,240,0.18), transparent, rgba(114,9,183,0.28));
          filter: blur(0.2px);
          opacity: 0.55;
          animation: aboutOrbitSpin 18s linear infinite;
          z-index: -1;
        }

        .about-avatar-frame {
          position: relative;
          overflow: hidden;
          width: 320px;
          height: 320px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 0 44px rgba(114, 9, 183, 0.32), 0 0 90px rgba(76, 201, 240, 0.12);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
        }

        .about-avatar-frame:hover {
          transform: translateY(-8px) scale(1.025);
          box-shadow: 0 0 58px rgba(114, 9, 183, 0.42), 0 0 110px rgba(76, 201, 240, 0.16);
        }

        .about-avatar-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .about-avatar-badge {
          position: absolute;
          left: 50%;
          bottom: 8px;
          transform: translateX(-50%);
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(7, 7, 10, 0.72);
          color: #4CC9F0;
          border-radius: 9999px;
          padding: 10px 16px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          backdrop-filter: blur(18px);
          box-shadow: 0 0 28px rgba(76, 201, 240, 0.12);
        }

        @keyframes aboutOrbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .about-layout {
          margin-top: 38px;
          display: grid;
          gap: 20px;
        }

        .about-story-card {
          border-radius: 34px;
          padding: 26px;
        }

        .about-story-card {
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .about-story-card:hover {
          transform: translateY(-5px);
          border-color: rgba(76,201,240,0.35);
          background: rgba(255,255,255,0.05);
        }

        .about-story-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .about-story-top h3 {
          margin-top: 12px;
          font-size: 26px;
          line-height: 1.1;
          font-weight: 800;
        }

        .about-dot {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background: #4CC9F0;
          box-shadow: 0 0 24px rgba(76,201,240,0.9);
          margin-top: 6px;
          flex-shrink: 0;
        }

        .about-story-text {
          margin-top: 22px;
          color: #a1a1aa;
          font-size: 14px;
          line-height: 1.8;
        }

        .about-traits {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }

        .about-traits span {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.035);
          border-radius: 9999px;
          padding: 8px 14px;
          color: #d4d4d8;
          font-size: 12px;
        }

        .about-mini-panel {
          border-radius: 34px;
          padding: 24px;
        }

        .about-identity-stack {
          display: grid;
          gap: 12px;
          margin-top: 20px;
        }

        .about-identity-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.035);
          border-radius: 18px;
          padding: 14px;
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .about-identity-pill:hover {
          transform: translateX(4px);
          border-color: rgba(76,201,240,0.35);
          background: rgba(255,255,255,0.055);
        }

        .about-identity-pill span {
          display: grid;
          place-items: center;
          width: 32px;
          height: 32px;
          border-radius: 9999px;
          background: rgba(76,201,240,0.08);
          box-shadow: 0 0 18px rgba(76,201,240,0.12);
          flex-shrink: 0;
        }

        .about-identity-pill strong {
          color: #e4e4e7;
          font-size: 14px;
          font-weight: 500;
        }

        .about-highlight-grid {
          margin-top: 20px;
          display: grid;
          gap: 16px;
        }

        .about-highlight-card {
          border-radius: 30px;
          padding: 22px;
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .about-highlight-card:hover {
          transform: translateY(-6px);
          border-color: rgba(76,201,240,0.45);
          background: rgba(255,255,255,0.055);
        }

        .about-highlight-card p {
          color: #4CC9F0;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .about-highlight-card h3 {
          margin-top: 14px;
          font-size: 20px;
          font-weight: 800;
        }

        .about-highlight-card span {
          display: block;
          margin-top: 12px;
          color: #a1a1aa;
          font-size: 13px;
          line-height: 1.7;
        }

        .about-journey-card {
          margin-top: 20px;
          border-radius: 34px;
          padding: 26px;
        }

        .about-journey-head {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .about-journey-head span {
          color: #71717a;
          font-size: 13px;
        }

        .about-journey-line {
          position: relative;
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .about-journey-line::before {
          content: "";
          position: absolute;
          left: 8%;
          right: 8%;
          top: 18px;
          height: 1px;
          background: linear-gradient(to right, rgba(114,9,183,0.2), rgba(76,201,240,0.55), rgba(114,9,183,0.2));
        }

        .about-journey-step {
          position: relative;
          text-align: center;
        }

        .about-step-circle {
          position: relative;
          z-index: 2;
          margin: 0 auto;
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          border: 1px solid rgba(76,201,240,0.35);
          background: #0B0B10;
          color: #4CC9F0;
          font-size: 12px;
          box-shadow: 0 0 22px rgba(76,201,240,0.12);
        }

        .about-journey-step p {
          margin-top: 12px;
          color: #e4e4e7;
          font-size: 13px;
        }

        @media (min-width: 768px) {
          .about-layout {
            grid-template-columns: 1.4fr 0.8fr;
          }

          .about-highlight-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .about-section {
            padding: 86px 16px 120px;
          }

          .about-top-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .about-avatar-card {
            width: 100%;
            margin: 0 auto;
            order: 2;
          }

          .about-heading {
            order: 1;
          }

          .about-avatar-frame {
            width: min(270px, 78vw);
            height: min(270px, 78vw);
          }

          .about-avatar-badge {
            bottom: 0;
            font-size: 9px;
            padding: 8px 12px;
            letter-spacing: 0.14em;
          }

          .about-heading::after {
            display: none;
          }

          .about-heading h2 {
            font-size: 34px;
          }

          .about-heading > p:last-child {
            font-size: 14px;
            line-height: 1.75;
          }

          .about-layout {
            margin-top: 30px;
            gap: 16px;
          }

          .about-story-card,
          .about-mini-panel,
          .about-highlight-card {
            border-radius: 26px;
            padding: 20px;
          }

          .about-story-top h3 {
            font-size: 24px;
          }

          .about-story-text {
            font-size: 13px;
          }

          .about-traits span {
            padding: 7px 12px;
            font-size: 11px;
          }

          .about-highlight-grid {
            gap: 12px;
          }

          .about-highlight-card {
            display: grid;
            grid-template-columns: 1fr;
          }

          .about-highlight-card h3 {
            margin-top: 10px;
            font-size: 18px;
          }

          .about-mini-panel {
            padding: 20px;
          }

          .about-identity-stack {
            gap: 10px;
          }

          .about-identity-pill {
            padding: 12px;
          }

          .desktop-only {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
