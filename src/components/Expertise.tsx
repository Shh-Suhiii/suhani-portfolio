const expertise = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive and interactive web experiences with reusable components, smooth interfaces and production-ready UI.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    icon: "🖥️",
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications with structured navigation, authentication and responsive user experiences.",
    tools: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs",
    ],
    icon: "📱",
  },
  {
    title: "Backend & Database",
    description:
      "Server-side applications, APIs, authentication, database architecture and full-stack integrations.",
    tools: [
      "Python",
      "Flask",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "REST APIs",
    ],
    icon: "⚡",
  },
  {
    title: "UI/UX & Product Design",
    description:
      "Clean interfaces, brand identities and visual systems designed around usability, consistency and modern aesthetics.",
    tools: [
      "Figma",
      "Canva",
      "Responsive Design",
      "UI/UX",
      "Branding",
      "Prototyping",
    ],
    icon: "🎨",
  },
];

const additionalTools = [
  "Git",
  "GitHub",
  "Vercel",
  "Cloudinary",
  "Postman",
  "REST APIs",
  "Responsive Design",
  "Authentication",
  "API Integration",
  "Cybersecurity (Learning)",
];

export default function Expertise() {
  return (
    <section id="expertise" className="expertise-section">
      <div className="expertise-glow expertise-glow-one" />
      <div className="expertise-glow expertise-glow-two" />
      <div className="expertise-grid-bg" />
      <div className="expertise-vignette" />

      <div className="expertise-shell">
        <div className="expertise-heading">
          <p className="expertise-kicker">
            ✦ Core Stack & Expertise
          </p>

          <h2>
            Tools jo ideas ko
            <span> products mein badalte hain.</span>
          </h2>

          <p>
            Development, design aur backend ke woh tools jinke
            saath main modern, useful aur clean digital products
            build karti hoon.
          </p>

          <div className="expertise-divider" />
        </div>

        {/* MAIN EXPERTISE CARDS */}

        <div className="expertise-layout">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className={`expertise-card expertise-card-${index + 1}`}
            >
              <div className="expertise-card-glow" />

              <div className="expertise-icon-wrap">
                <span>{item.icon}</span>
              </div>

              <div className="expertise-card-content">
                <p className="expertise-number">
                  0{index + 1}
                </p>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

              <div className="expertise-tools">
                {item.tools.map((tool) => (
                  <span key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ALSO WORKING WITH */}

        <div className="expertise-extra">
          <div className="expertise-extra-glow" />

          <div className="expertise-extra-header">
            <div>
              <p className="expertise-extra-kicker">
                ✦ Beyond the Core Stack
              </p>

              <h3>
                Also working with
              </h3>
            </div>

            <p className="expertise-extra-description">
              Tools and technologies I use across development,
              deployment and everyday product workflows.
            </p>
          </div>

          <div className="expertise-extra-tools">
            {additionalTools.map((tool) => (
              <span key={tool}>
                <span className="expertise-tool-dot" />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .expertise-section {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #07070A;
          color: white;
          padding: 120px 16px 150px;
        }

        .expertise-glow {
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
        }

        .expertise-glow-one {
          width: 420px;
          height: 420px;
          left: 6%;
          top: 18%;
          background: rgba(114, 9, 183, 0.15);
          filter: blur(145px);
        }

        .expertise-glow-two {
          width: 420px;
          height: 420px;
          right: 8%;
          bottom: 8%;
          background: rgba(76, 201, 240, 0.1);
          filter: blur(145px);
        }

        .expertise-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              to right,
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            );
          background-size: 96px 96px;
        }

        .expertise-vignette {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at center,
              transparent 0%,
              #07070A 78%
            );
        }

        .expertise-shell {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
        }

        /* HEADING */

        .expertise-heading {
          max-width: 820px;
        }

        .expertise-kicker {
          color: #4CC9F0;
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .expertise-heading h2 {
          margin-top: 20px;
          font-size: 42px;
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 900;
        }

        .expertise-heading h2 span {
          background:
            linear-gradient(
              to right,
              #7209B7,
              #4361EE,
              #4CC9F0
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .expertise-heading > p {
          margin-top: 24px;
          max-width: 680px;
          color: #a1a1aa;
          font-size: 16px;
          line-height: 1.8;
        }

        .expertise-divider {
          width: 140px;
          height: 2px;
          margin-top: 24px;
          border-radius: 999px;
          background:
            linear-gradient(
              90deg,
              #7209B7,
              #4361EE,
              #4CC9F0
            );
          box-shadow:
            0 0 24px
            rgba(76,201,240,0.22);
        }

        /* CARDS */

        .expertise-layout {
          margin-top: 46px;
          display: grid;
          gap: 18px;
        }

        .expertise-card {
          position: relative;
          overflow: hidden;
          min-height: 280px;
          border: 1px solid rgba(255,255,255,0.1);
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.055),
              rgba(255,255,255,0.025)
            );
          border-radius: 34px;
          padding: 26px;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 60px rgba(0,0,0,0.18);
          transition:
            all 0.45s
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .expertise-card:hover {
          transform:
            translateY(-12px)
            scale(1.02);
          border-color:
            rgba(76,201,240,0.45);
          background:
            linear-gradient(
              145deg,
              rgba(114,9,183,0.1),
              rgba(76,201,240,0.045)
            );
          box-shadow:
            0 0 80px
            rgba(114,9,183,0.18);
        }

        .expertise-card-glow {
          position: absolute;
          inset: auto -40px -80px auto;
          width: 180px;
          height: 180px;
          border-radius: 9999px;
          background:
            rgba(76,201,240,0.09);
          filter: blur(50px);
          opacity: 0;
          transition:
            opacity 0.35s ease;
          animation:
            expertiseFloatGlow
            6s ease-in-out infinite;
        }

        .expertise-card:hover
        .expertise-card-glow {
          opacity: 1;
        }

        @keyframes expertiseFloatGlow {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        /* ICON */

        .expertise-icon-wrap {
          position: relative;
          display: grid;
          place-items: center;
          width: 54px;
          height: 54px;
          border-radius: 20px;
          border:
            1px solid
            rgba(255,255,255,0.1);
          background:
            rgba(255,255,255,0.045);
          box-shadow:
            inset 0 1px 0
            rgba(255,255,255,0.08);
        }

        .expertise-icon-wrap span {
          font-size: 28px;
          transition:
            transform 0.35s ease;
        }

        .expertise-card:hover
        .expertise-icon-wrap span {
          transform:
            scale(1.12)
            rotate(-4deg);
        }

        /* CONTENT */

        .expertise-card-content {
          position: relative;
          margin-top: 26px;
        }

        .expertise-number {
          color: #4CC9F0;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .expertise-card-content h3 {
          margin-top: 10px;
          font-size: 24px;
          line-height: 1.1;
          font-weight: 800;
        }

        .expertise-card-content
        > p:last-child {
          margin-top: 14px;
          color: #a1a1aa;
          font-size: 14px;
          line-height: 1.7;
        }

        /* CARD TOOLS */

        .expertise-tools {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }

        .expertise-tools span {
          border:
            1px solid
            rgba(255,255,255,0.1);
          background:
            rgba(255,255,255,0.035);
          border-radius: 9999px;
          padding: 7px 12px;
          color: #d4d4d8;
          font-size: 12px;
          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .expertise-card:hover
        .expertise-tools span {
          border-color:
            rgba(76,201,240,0.28);
          background:
            rgba(255,255,255,0.055);
          color: white;
        }

        /* ==========================================
           ALSO WORKING WITH
        ========================================== */

        .expertise-extra {
          position: relative;
          overflow: hidden;
          margin-top: 64px;
          border:
            1px solid
            rgba(255,255,255,0.1);
          border-radius: 30px;
          padding: 28px;
          background:
            linear-gradient(
              120deg,
              rgba(114,9,183,0.08),
              rgba(255,255,255,0.035),
              rgba(76,201,240,0.06)
            );
          backdrop-filter: blur(22px);
          box-shadow:
            0 0 70px
            rgba(0,0,0,0.18);
        }

        .expertise-extra-glow {
          position: absolute;
          width: 260px;
          height: 260px;
          right: -80px;
          top: -120px;
          border-radius: 9999px;
          background:
            rgba(76,201,240,0.12);
          filter: blur(75px);
          pointer-events: none;
        }

        .expertise-extra-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
        }

        .expertise-extra-kicker {
          color: #4CC9F0;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .expertise-extra h3 {
          margin-top: 8px;
          font-size: 27px;
          font-weight: 800;
          letter-spacing: -0.025em;
        }

        .expertise-extra-description {
          max-width: 430px;
          color: #8f8f99;
          font-size: 13px;
          line-height: 1.7;
        }

        .expertise-extra-tools {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 26px;
          padding-top: 22px;
          border-top:
            1px solid
            rgba(255,255,255,0.08);
        }

        .expertise-extra-tools > span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border:
            1px solid
            rgba(255,255,255,0.1);
          border-radius: 9999px;
          background:
            rgba(255,255,255,0.04);
          padding: 8px 13px;
          color: #d4d4d8;
          font-size: 12px;
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .expertise-extra-tools
        > span:hover {
          transform: translateY(-2px);
          border-color:
            rgba(76,201,240,0.35);
          background:
            rgba(76,201,240,0.07);
          color: white;
        }

        .expertise-tool-dot {
          width: 5px;
          height: 5px;
          flex: 0 0 auto;
          border-radius: 9999px;
          background: #4CC9F0;
          box-shadow:
            0 0 10px
            rgba(76,201,240,0.65);
        }

        /* TABLET */

        @media (min-width: 768px) {
          .expertise-layout {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .expertise-card-1 {
            min-height: 330px;
          }

          .expertise-card-4 {
            min-height: 330px;
          }
        }

        /* DESKTOP */

        @media (min-width: 1024px) {
          .expertise-heading h2 {
            font-size: 62px;
          }

          .expertise-layout {
            grid-template-columns:
              1.1fr 0.9fr 0.9fr 1.1fr;
            align-items: stretch;
          }

          .expertise-card-1,
          .expertise-card-4 {
            transform:
              translateY(28px);
          }

          .expertise-card-1:hover,
          .expertise-card-4:hover {
            transform:
              translateY(16px)
              scale(1.02);
          }
        }

        /* MOBILE */

        @media (max-width: 640px) {
          .expertise-section {
            padding:
              86px 16px 120px;
          }

          .expertise-heading h2 {
            font-size: 34px;
          }

          .expertise-heading > p {
            font-size: 14px;
            line-height: 1.75;
          }

          .expertise-layout {
            margin-top: 28px;
            gap: 12px;
          }

          .expertise-card {
            min-height: auto;
            border-radius: 22px;
            padding: 18px;
          }

          .expertise-icon-wrap {
            width: 46px;
            height: 46px;
            border-radius: 16px;
          }

          .expertise-icon-wrap span {
            font-size: 22px;
          }

          .expertise-card-content {
            margin-top: 16px;
          }

          .expertise-card-content h3 {
            font-size: 18px;
          }

          .expertise-card-content
          > p:last-child {
            font-size: 12px;
            line-height: 1.6;
          }

          .expertise-tools {
            margin-top: 16px;
            gap: 6px;
          }

          .expertise-tools span {
            padding: 6px 10px;
            font-size: 11px;
          }

          /* ALSO WORKING WITH MOBILE */

          .expertise-extra {
            margin-top: 28px;
            border-radius: 22px;
            padding: 19px;
          }

          .expertise-extra-header {
            display: block;
          }

          .expertise-extra h3 {
            margin-top: 7px;
            font-size: 21px;
          }

          .expertise-extra-description {
            margin-top: 10px;
            font-size: 12px;
            line-height: 1.6;
          }

          .expertise-extra-tools {
            margin-top: 18px;
            padding-top: 17px;
            gap: 7px;
          }

          .expertise-extra-tools
          > span {
            padding: 7px 10px;
            font-size: 10px;
          }
        }
      `}</style>
    </section>
  );
}