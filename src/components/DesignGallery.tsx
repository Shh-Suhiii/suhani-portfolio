const designs = [
  {
    title: "UI Screens",
    subtitle: "Mobile & Web Interfaces",
    description: "Clean layouts, app flows aur modern interface experiments.",
    icon: "▦",
    accent: "design-card-one",
    note: "Interface flow",
  },
  {
    title: "Posters",
    subtitle: "Creative Marketing Designs",
    description: "Social posts, thumbnails aur campaign-style visuals.",
    icon: "◐",
    accent: "design-card-two",
    note: "Visual content",
  },
  {
    title: "Branding",
    subtitle: "Visual Identity Concepts",
    description: "Logos, brand systems aur visual identity explorations.",
    icon: "✦",
    accent: "design-card-three",
    note: "Brand system",
  },
];

export default function DesignGallery() {
  return (
    <section id="designs" className="design-section">
      <div className="design-glow design-glow-one" />
      <div className="design-glow design-glow-two" />
      <div className="design-grid-bg" />
      <div className="design-vignette" />

      <div className="design-shell">
        <div className="design-heading">
          <p className="design-kicker">✦ Design Showcase</p>
          <h2>
            Visuals that make
            <span> products feel alive.</span>
          </h2>
          <p>
            UI concepts, poster designs, branding ideas aur creative visuals —
            jahan design experiments ko polished digital experiences mein convert
            karti hoon.
          </p>
          <div className="design-divider" />
        </div>

        <div className="design-layout">
          {designs.map((item, index) => (
            <article key={item.title} className={`design-card ${item.accent}`}>
              <div className="design-card-shine" />
              <div className="design-preview">
                <div className="design-preview-glow" />
                <div className="design-symbol">{item.icon}</div>
                <div className="design-lines">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="design-card-content">
                <div className="design-card-top">
                  <p>Gallery</p>
                  <span>0{index + 1}</span>
                </div>

                <h3>{item.title}</h3>
                <p className="design-subtitle">{item.subtitle}</p>
                <p className="design-description">{item.description}</p>
                <div className="design-card-footer">
                  <span>{item.note}</span>
                  <span className="design-arrow">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="design-gallery-cta">
          <div>
            <p className="design-gallery-label">Creative Work</p>
            <h3>More designs coming soon.</h3>
          </div>

          <span>✦ Portfolio Gallery</span>
        </div>
      </div>

      <style>{`
        .design-section {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #07070A;
          color: white;
          padding: 110px 16px 170px;
        }

        .design-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 9999px;
        }

        .design-glow-one {
          width: 430px;
          height: 430px;
          right: 4%;
          top: 12%;
          background: rgba(114, 9, 183, 0.16);
          filter: blur(150px);
        }

        .design-glow-two {
          width: 380px;
          height: 380px;
          left: 4%;
          bottom: 10%;
          background: rgba(76, 201, 240, 0.1);
          filter: blur(145px);
        }

        .design-grid-bg {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 96px 96px;
        }

        .design-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, #07070A 78%);
        }

        .design-shell {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
        }

        .design-heading {
          max-width: 820px;
        }

        .design-kicker {
          color: #4CC9F0;
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .design-heading h2 {
          margin-top: 20px;
          font-size: 42px;
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 900;
        }

        .design-heading h2 span {
          background: linear-gradient(to right, #7209B7, #4361EE, #4CC9F0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .design-heading > p:last-of-type {
          margin-top: 22px;
          max-width: 690px;
          color: #a1a1aa;
          font-size: 16px;
          line-height: 1.8;
        }

        .design-divider {
          width: 140px;
          height: 2px;
          margin-top: 24px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #7209B7, #4361EE, #4CC9F0);
          box-shadow: 0 0 24px rgba(76,201,240,0.22);
        }

        .design-layout {
          margin-top: 56px;
          display: grid;
          gap: 22px;
        }

        .design-card {
          position: relative;
          overflow: hidden;
          min-height: 390px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(255,255,255,0.1);
          background: linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025));
          border-radius: 34px;
          padding: 20px;
          backdrop-filter: blur(22px);
          box-shadow: 0 0 70px rgba(0,0,0,0.2);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease;
        }

        .design-card-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.08) 45%, transparent 70%);
          transform: translateX(-120%);
          transition: transform 0.7s ease;
        }

        .design-card:hover .design-card-shine {
          transform: translateX(120%);
        }

        .design-card:hover {
          transform: translateY(-8px) scale(1.015);
          border-color: rgba(76,201,240,0.42);
          background: linear-gradient(145deg, rgba(114,9,183,0.1), rgba(76,201,240,0.045));
          box-shadow: 0 0 80px rgba(76,201,240,0.1);
        }

        .design-card-one {
          background-image: linear-gradient(145deg, rgba(76,201,240,0.09), rgba(255,255,255,0.025));
        }

        .design-card-two {
          background-image: linear-gradient(145deg, rgba(114,9,183,0.1), rgba(255,255,255,0.025));
        }

        .design-card-three {
          background-image: linear-gradient(145deg, rgba(67,97,238,0.1), rgba(76,201,240,0.035));
        }

        .design-preview {
          position: relative;
          min-height: 188px;
          overflow: hidden;
          border-radius: 26px;
          border: 1px solid rgba(255,255,255,0.08);
          background: radial-gradient(circle at center, rgba(255,255,255,0.08), rgba(255,255,255,0.025));
          display: grid;
          place-items: center;
        }

        .design-preview::before {
          content: "";
          position: absolute;
          inset: 18px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 22px;
        }

        .design-preview-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 9999px;
          background: rgba(76,201,240,0.16);
          filter: blur(48px);
        }

        .design-symbol {
          position: relative;
          z-index: 2;
          display: grid;
          place-items: center;
          width: 86px;
          height: 86px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(7,7,10,0.46);
          color: #4CC9F0;
          font-size: 40px;
          box-shadow: 0 0 44px rgba(76,201,240,0.12), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .design-lines {
          position: absolute;
          left: 24px;
          bottom: 24px;
          display: grid;
          gap: 8px;
          width: 120px;
        }

        .design-lines span {
          height: 7px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.1);
        }

        .design-lines span:nth-child(2) {
          width: 72%;
        }

        .design-lines span:nth-child(3) {
          width: 48%;
        }

        .design-card-content {
          position: relative;
          z-index: 2;
          padding: 6px 4px 4px;
        }

        .design-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 18px;
        }

        .design-card-top p {
          color: #4CC9F0;
          font-size: 12px;
          font-weight: 700;
        }

        .design-card-top span {
          color: #71717a;
          font-size: 12px;
        }

        .design-card h3 {
          font-size: 25px;
          line-height: 1.1;
          font-weight: 850;
        }

        .design-subtitle {
          margin-top: 8px;
          color: #d4d4d8;
          font-size: 14px;
        }

        .design-description {
          margin-top: 12px;
          color: #a1a1aa;
          font-size: 13px;
          line-height: 1.7;
        }

        .design-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #71717a;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .design-arrow {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.045);
          color: #4CC9F0;
          font-size: 16px;
          transition: transform 0.35s ease, background 0.35s ease;
        }

        .design-card:hover .design-arrow {
          transform: translate(3px, -3px);
          background: rgba(76,201,240,0.1);
        }

        .design-gallery-cta {
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border: 1px solid rgba(255,255,255,0.1);
          background: linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          border-radius: 28px;
          padding: 24px;
          backdrop-filter: blur(20px);
        }

        .design-gallery-label {
          color: #4CC9F0;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .design-gallery-cta h3 {
          font-size: 22px;
          font-weight: 800;
        }

        .design-gallery-cta span {
          color: #a1a1aa;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        @media (min-width: 768px) {
          .design-layout {
            grid-template-columns: repeat(3, 1fr);
            align-items: stretch;
          }

          .design-card:nth-child(2) {
            transform: translateY(24px);
          }

          .design-card:nth-child(2):hover {
            transform: translateY(16px) scale(1.015);
          }
        }

        @media (min-width: 900px) {
          .design-heading h2 {
            font-size: 62px;
          }
        }

        @media (max-width: 640px) {
          .design-section {
            padding: 86px 16px 145px;
          }

          .design-heading h2 {
            font-size: 34px;
          }

          .design-heading > p:last-of-type {
            font-size: 14px;
            line-height: 1.75;
          }

          .design-layout {
            margin-top: 32px;
            gap: 12px;
          }

          .design-card {
            min-height: 260px;
            border-radius: 24px;
            padding: 16px;
          }

          .design-preview {
            min-height: 120px;
            border-radius: 20px;
          }

          .design-symbol {
            width: 62px;
            height: 62px;
            border-radius: 20px;
            font-size: 28px;
          }

          .design-card h3 {
            font-size: 22px;
          }

          .design-card-top {
            margin-bottom: 12px;
          }

          .design-subtitle {
            margin-top: 6px;
            font-size: 13px;
          }

          .design-description {
            margin-top: 8px;
            font-size: 12px;
            line-height: 1.55;
          }

          .design-lines {
            left: 18px;
            bottom: 18px;
            width: 92px;
            gap: 6px;
          }

          .design-lines span {
            height: 5px;
          }

          .design-card-footer {
            margin-top: 12px;
            padding-top: 12px;
            font-size: 10px;
            letter-spacing: 0.14em;
          }

          .design-arrow {
            width: 30px;
            height: 30px;
            font-size: 14px;
          }

          .design-gallery-cta {
            margin-top: 24px;
            flex-direction: column;
            align-items: flex-start;
            border-radius: 22px;
            padding: 18px;
          }

          .design-gallery-cta h3 {
            font-size: 18px;
          }

          .design-gallery-cta span {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}
