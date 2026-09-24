const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Flutter",
  "Flask",
  "PostgreSQL",
  "UI/UX",
];

const quickCards = [
  {
    label: "Currently",
    value: "MCA @ VIT",
  },
  {
    label: "I Build",
    value: "Web + Mobile",
  },
  {
    label: "My Approach",
    value: "Clean + Functional",
  },
];

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Effects */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-grid-bg" />
      <div className="hero-vignette" />

      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="hero-ring hero-ring-one" />
      <div className="hero-ring hero-ring-two" />

      <div className="hero-particles" />

      <div className="hero-shell">
        {/* =====================================
            LEFT — CONTENT
        ===================================== */}

        <div className="hero-copy">
          <div className="hero-badge">
            <span className="hero-status-dot" />
            Suhani&apos;s Digital Playground
          </div>

          <h1 className="hero-title">
            Hey, I&apos;m
            <span>Suhani Rai.</span>
          </h1>

          <p className="hero-role">
            Developer <span>•</span> Designer <span>•</span> Builder
          </p>

          <p className="hero-description">
            Developer and designer focused on building clean, functional and
            thoughtfully crafted digital experiences — from responsive web
            platforms to mobile applications and product interfaces.
          </p>

          {/* SKILLS */}

          <div className="hero-skills">
            {skills.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          {/* CTA */}

          <div className="hero-actions">
            <a href="#projects" className="hero-primary-btn">
              View My Work

              <span className="hero-btn-arrow">
                ↗
              </span>
            </a>

            <a href="#contact" className="hero-secondary-btn">
              Let&apos;s Connect
            </a>
          </div>

          {/* QUICK CARDS */}

          <div className="hero-cards">
            {quickCards.map((card) => (
              <div
                key={card.label}
                className="hero-info-card"
              >
                <p>{card.label}</p>
                <h3>{card.value}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
            RIGHT — AVATAR
        ===================================== */}

        <div className="hero-avatar-wrap">
          <div className="hero-avatar-glow" />

          <div className="hero-avatar-card">
            <div className="hero-avatar-frame">
              <img
                src="/images/projects/Avatar2.jpeg"
                alt="Suhani Rai avatar"
              />

              <div className="hero-avatar-overlay" />

              <div className="hero-avatar-caption">
                <p>Developer • Designer</p>
                <h2>Suhani Rai</h2>
              </div>
            </div>
          </div>

          {/* FLOATING BADGES */}

          <div className="hero-float hero-float-one">
            <span>📚</span>
            MCA @ VIT
          </div>

          <div className="hero-float hero-float-two">
            <span>🚀</span>
            Building Real Products
          </div>
        </div>
      </div>

      <style>{`
        /* =========================================
           SECTION
        ========================================= */

        .hero-section {
          position: relative;
          min-height: 100vh;
          overflow: hidden;

          background: #07070A;
          color: white;

          padding: 80px 16px;
        }

        /* =========================================
           ANIMATIONS
        ========================================= */

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0) rotate(2deg);
          }

          50% {
            transform: translateY(-12px) rotate(2deg);
          }
        }

        @keyframes heroGlowPulse {
          0%,
          100% {
            opacity: 0.75;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.06);
          }
        }

        @keyframes heroBadgeShine {
          from {
            transform: translateX(-120%);
          }

          to {
            transform: translateX(220%);
          }
        }

        @keyframes heroDrift {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          50% {
            transform:
              translate3d(18px, -22px, 0)
              scale(1.08);
          }
        }

        @keyframes heroSlowSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes heroStatusPulse {
          0%,
          100% {
            opacity: 0.55;
            box-shadow:
              0 0 0 0
              rgba(76,201,240,0.35);
          }

          50% {
            opacity: 1;
            box-shadow:
              0 0 0 5px
              rgba(76,201,240,0);
          }
        }

        /* =========================================
           BACKGROUND
        ========================================= */

        .hero-glow {
          position: absolute;

          border-radius: 9999px;

          pointer-events: none;
        }

        .hero-glow-one {
          width: 520px;
          height: 520px;

          top: 0;
          left: 50%;

          transform:
            translateX(-50%);

          background:
            rgba(114,9,183,0.2);

          filter: blur(170px);

          animation:
            heroGlowPulse
            6s ease-in-out infinite;
        }

        .hero-glow-two {
          width: 384px;
          height: 384px;

          right: 0;
          bottom: 0;

          background:
            rgba(76,201,240,0.1);

          filter: blur(150px);

          animation:
            heroGlowPulse
            7s ease-in-out infinite reverse;
        }

        .hero-grid-bg {
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

          background-size:
            96px 96px;
        }

        .hero-vignette {
          position: absolute;

          inset: 0;

          background:
            radial-gradient(
              circle at center,
              transparent 0%,
              #07070A 76%
            );
        }

        /* =========================================
           ORBS
        ========================================= */

        .hero-orb {
          position: absolute;

          pointer-events: none;

          border-radius: 9999px;

          opacity: 0.35;

          filter: blur(1px);
        }

        .hero-orb-one {
          width: 220px;
          height: 220px;

          left: 46%;
          top: 28%;

          background:
            radial-gradient(
              circle,
              rgba(114,9,183,0.22),
              transparent 68%
            );

          animation:
            heroDrift
            8s ease-in-out infinite;
        }

        .hero-orb-two {
          width: 180px;
          height: 180px;

          right: 22%;
          bottom: 18%;

          background:
            radial-gradient(
              circle,
              rgba(76,201,240,0.14),
              transparent 70%
            );

          animation:
            heroDrift
            9s ease-in-out infinite reverse;
        }

        /* =========================================
           RINGS
        ========================================= */

        .hero-ring {
          position: absolute;

          pointer-events: none;

          border-radius: 9999px;

          border:
            1px solid
            rgba(255,255,255,0.045);
        }

        .hero-ring-one {
          width: 620px;
          height: 620px;

          left: 50%;
          top: 50%;

          margin-left: -310px;
          margin-top: -310px;

          border-color:
            rgba(114,9,183,0.12);

          animation:
            heroSlowSpin
            34s linear infinite;
        }

        .hero-ring-two {
          width: 420px;
          height: 420px;

          left: 52%;
          top: 50%;

          margin-left: -210px;
          margin-top: -210px;

          border-color:
            rgba(76,201,240,0.08);

          animation:
            heroSlowSpin
            26s linear infinite reverse;
        }

        /* =========================================
           PARTICLES
        ========================================= */

        .hero-particles {
          position: absolute;

          inset: 0;

          pointer-events: none;

          opacity: 0.28;

          background-image:
            radial-gradient(
              circle,
              rgba(76,201,240,0.28) 1px,
              transparent 1px
            ),
            radial-gradient(
              circle,
              rgba(114,9,183,0.24) 1px,
              transparent 1px
            );

          background-size:
            120px 120px,
            180px 180px;

          background-position:
            20px 40px,
            80px 100px;

          mask-image:
            radial-gradient(
              circle at center,
              black 0%,
              transparent 72%
            );

          -webkit-mask-image:
            radial-gradient(
              circle at center,
              black 0%,
              transparent 72%
            );
        }

        /* =========================================
           MAIN SHELL
        ========================================= */

        .hero-shell {
          position: relative;

          z-index: 10;

          width: 100%;
          max-width: 1152px;

          min-height: 84vh;

          margin: 0 auto;

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          gap: 48px;
        }

        /* =========================================
           COPY
        ========================================= */

        .hero-copy {
          width: 100%;
          max-width: 590px;

          text-align: center;

          animation:
            heroFadeUp
            0.8s ease both;
        }

        /* =========================================
           BADGE
        ========================================= */

        .hero-badge {
          position: relative;

          display: inline-flex;
          align-items: center;

          gap: 9px;

          overflow: hidden;

          margin-bottom: 24px;

          border:
            1px solid
            rgba(255,255,255,0.1);

          background:
            rgba(255,255,255,0.04);

          border-radius: 9999px;

          padding: 8px 16px;

          color: #4CC9F0;

          font-size: 10px;
          font-weight: 600;

          letter-spacing: 0.25em;

          text-transform: uppercase;

          backdrop-filter:
            blur(18px);
        }

        .hero-badge::after {
          content: "";

          position: absolute;

          inset: 0;

          width: 45%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.18),
              transparent
            );

          animation:
            heroBadgeShine
            3.5s ease-in-out infinite;
        }

        .hero-status-dot {
          position: relative;

          z-index: 2;

          width: 6px;
          height: 6px;

          flex: 0 0 auto;

          border-radius: 9999px;

          background: #4CC9F0;

          animation:
            heroStatusPulse
            2s ease-in-out infinite;
        }

        /* =========================================
           TITLE
        ========================================= */

        .hero-title {
          font-size: 40px;

          line-height: 0.98;

          letter-spacing: -0.04em;

          font-weight: 900;

          animation:
            heroFadeUp
            0.85s ease both;

          animation-delay:
            0.08s;
        }

        .hero-title span {
          display: block;

          margin-top: 5px;

          background:
            linear-gradient(
              to right,
              #7209B7,
              #4361EE,
              #4CC9F0
            );

          -webkit-background-clip:
            text;

          background-clip:
            text;

          color: transparent;
        }

        /* =========================================
           ROLE
        ========================================= */

        .hero-role {
          margin-top: 18px;

          color: #d4d4d8;

          font-size: 11px;
          font-weight: 600;

          letter-spacing: 0.2em;

          text-transform: uppercase;

          animation:
            heroFadeUp
            0.85s ease both;

          animation-delay:
            0.12s;
        }

        .hero-role span {
          margin:
            0 5px;

          color: #4CC9F0;
        }

        /* =========================================
           DESCRIPTION
        ========================================= */

        .hero-description {
          max-width: 560px;

          margin:
            20px auto 0;

          color: #a1a1aa;

          font-size: 14px;
          line-height: 1.75;

          animation:
            heroFadeUp
            0.85s ease both;

          animation-delay:
            0.16s;
        }

        /* =========================================
           SKILLS
        ========================================= */

        .hero-skills {
          display: flex;

          flex-wrap: wrap;

          justify-content: center;

          gap: 8px;

          margin-top: 26px;

          animation:
            heroFadeUp
            0.85s ease both;

          animation-delay:
            0.22s;
        }

        .hero-skills span {
          border:
            1px solid
            rgba(255,255,255,0.1);

          background:
            rgba(255,255,255,0.035);

          color: #d4d4d8;

          border-radius: 9999px;

          padding: 8px 14px;

          font-size: 11px;

          backdrop-filter:
            blur(18px);

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease,
            background 0.3s ease;
        }

        .hero-skills span:hover {
          transform:
            translateY(-3px);

          border-color:
            rgba(76,201,240,0.45);

          color: white;

          background:
            rgba(76,201,240,0.06);
        }

        /* =========================================
           CTA BUTTONS
        ========================================= */

        .hero-actions {
          display: flex;

          flex-wrap: wrap;

          justify-content: center;

          gap: 12px;

          margin-top: 28px;

          animation:
            heroFadeUp
            0.85s ease both;

          animation-delay:
            0.28s;
        }

        .hero-primary-btn,
        .hero-secondary-btn {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          min-height: 46px;

          border-radius: 9999px;

          padding:
            0 20px;

          font-size: 12px;

          font-weight: 700;

          text-decoration: none;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .hero-primary-btn {
          gap: 10px;

          color: white;

          background:
            linear-gradient(
              90deg,
              #7209B7,
              #4361EE,
              #4CC9F0
            );

          box-shadow:
            0 0 32px
            rgba(114,9,183,0.25);
        }

        .hero-primary-btn:hover {
          transform:
            translateY(-3px);

          box-shadow:
            0 10px 45px
            rgba(114,9,183,0.35);
        }

        .hero-btn-arrow {
          font-size: 16px;

          transition:
            transform 0.3s ease;
        }

        .hero-primary-btn:hover
        .hero-btn-arrow {
          transform:
            translate(2px, -2px);
        }

        .hero-secondary-btn {
          border:
            1px solid
            rgba(76,201,240,0.3);

          background:
            rgba(255,255,255,0.04);

          color: #dff8ff;

          backdrop-filter:
            blur(18px);
        }

        .hero-secondary-btn:hover {
          transform:
            translateY(-3px);

          border-color:
            rgba(76,201,240,0.55);

          background:
            rgba(76,201,240,0.07);
        }

        /* =========================================
           QUICK INFO
        ========================================= */

        .hero-cards {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 10px;

          margin-top: 30px;

          animation:
            heroFadeUp
            0.85s ease both;

          animation-delay:
            0.34s;
        }

        .hero-info-card {
          border:
            1px solid
            rgba(255,255,255,0.1);

          background:
            rgba(255,255,255,0.035);

          border-radius: 20px;

          padding:
            14px 10px;

          text-align: center;

          backdrop-filter:
            blur(18px);

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .hero-info-card:hover {
          transform:
            translateY(-5px);

          border-color:
            rgba(76,201,240,0.5);

          background:
            rgba(255,255,255,0.055);
        }

        .hero-info-card p {
          color: #4CC9F0;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.17em;

          text-transform: uppercase;
        }

        .hero-info-card h3 {
          margin-top: 8px;

          color: #e4e4e7;

          font-size: 11px;

          font-weight: 500;
        }

        /* =========================================
           AVATAR
        ========================================= */

        .hero-avatar-wrap {
          position: relative;

          width:
            min(100%, 330px);

          flex-shrink: 0;

          animation:
            heroFadeUp
            0.9s ease both;

          animation-delay:
            0.22s;
        }

        .hero-avatar-glow {
          position: absolute;

          inset: -24px;

          border-radius: 44px;

          background:
            linear-gradient(
              135deg,
              rgba(114,9,183,0.35),
              rgba(67,97,238,0.1),
              rgba(76,201,240,0.2)
            );

          filter: blur(32px);

          animation:
            heroGlowPulse
            4.5s ease-in-out infinite;
        }

        .hero-avatar-card {
          position: relative;

          border:
            1px solid
            rgba(255,255,255,0.1);

          background:
            rgba(255,255,255,0.04);

          border-radius: 38px;

          padding: 12px;

          box-shadow:
            0 0 80px
            rgba(114,9,183,0.24);

          backdrop-filter:
            blur(18px);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .hero-avatar-card:hover {
          transform:
            translateY(-6px);

          border-color:
            rgba(76,201,240,0.35);

          box-shadow:
            0 0 95px
            rgba(114,9,183,0.34);
        }

        .hero-avatar-frame {
          position: relative;

          height: 410px;

          overflow: hidden;

          border:
            1px solid
            rgba(255,255,255,0.1);

          border-radius: 30px;

          background: #07070A;
        }

        .hero-avatar-frame img {
          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          display: block;

          transition:
            transform 0.6s
            cubic-bezier(0.22,1,0.36,1);
        }

        .hero-avatar-card:hover
        .hero-avatar-frame img {
          transform:
            scale(1.025);
        }

        .hero-avatar-overlay {
          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              to bottom,
              transparent 50%,
              rgba(7,7,10,0.15) 68%,
              rgba(7,7,10,0.88) 100%
            );
        }

        /* =========================================
           AVATAR CAPTION
        ========================================= */

        .hero-avatar-caption {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          padding: 20px;

          z-index: 2;
        }

        .hero-avatar-caption p {
          color: #4CC9F0;

          font-size: 10px;

          letter-spacing: 0.28em;

          text-transform: uppercase;
        }

        .hero-avatar-caption h2 {
          margin-top: 8px;

          font-size: 22px;

          font-weight: 600;
        }

        /* =========================================
           FLOATING CARDS
        ========================================= */

        .hero-float {
          display: none;

          position: absolute;

          z-index: 5;

          align-items: center;

          gap: 7px;

          border:
            1px solid
            rgba(255,255,255,0.1);

          background:
            rgba(17,17,24,0.82);

          border-radius: 16px;

          padding:
            9px 13px;

          color: #d4d4d8;

          font-size: 11px;

          box-shadow:
            0 20px 80px
            rgba(0,0,0,0.35);

          backdrop-filter:
            blur(18px);

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .hero-float:hover {
          transform:
            translateY(-4px);

          border-color:
            rgba(76,201,240,0.45);

          background:
            rgba(17,17,24,0.95);
        }

        .hero-float-one {
          top: 32px;
          left: -28px;
        }

        .hero-float-two {
          right: -28px;
          bottom: 64px;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (min-width: 640px) {
          .hero-title {
            font-size: 56px;
          }

          .hero-description {
            font-size: 15px;
          }

          .hero-info-card {
            border-radius: 24px;

            padding:
              16px 12px;
          }

          .hero-info-card h3 {
            font-size: 13px;
          }

          .hero-float {
            display: flex;
          }
        }

        /* =========================================
           DESKTOP
        ========================================= */

        @media (min-width: 900px) {
          .hero-section {
            padding:
              80px 24px;
          }

          .hero-shell {
            flex-direction: row;

            justify-content:
              space-between;

            align-items: center;

            gap: 56px;
          }

          .hero-copy {
            text-align: left;
          }

          .hero-title {
            font-size: 72px;
          }

          .hero-description {
            margin-left: 0;
            margin-right: 0;

            font-size: 16px;
          }

          .hero-skills,
          .hero-actions {
            justify-content:
              flex-start;
          }

          .hero-avatar-wrap {
            width: 380px;
          }

          .hero-avatar-card {
            transform:
              rotate(2deg);

            animation:
              heroFloat
              5s ease-in-out infinite;
          }

          .hero-avatar-card:hover {
            transform:
              translateY(-6px)
              rotate(2deg);
          }

          .hero-avatar-frame {
            height: 475px;
          }

          .hero-orb-one {
            opacity: 0.55;
          }

          .hero-orb-two {
            opacity: 0.45;
          }
        }

        /* =========================================
           MOBILE / SMALL TABLET
        ========================================= */

        @media (max-width: 899px) {
          .hero-ring,
          .hero-orb,
          .hero-particles {
            opacity: 0.18;
          }
        }

        @media (max-width: 639px) {
          .hero-section {
            padding:
              86px 16px 90px;
          }

          .hero-shell {
            min-height: auto;

            gap: 42px;
          }

          .hero-copy {
            max-width: 100%;
          }

          .hero-badge {
            margin-bottom: 20px;

            padding:
              7px 12px;

            font-size: 8px;

            letter-spacing:
              0.19em;
          }

          .hero-title {
            font-size:
              clamp(40px, 12vw, 50px);
          }

          .hero-role {
            margin-top: 15px;

            font-size: 9px;

            letter-spacing:
              0.15em;
          }

          .hero-description {
            max-width: 430px;

            margin-top: 18px;

            font-size: 13px;

            line-height: 1.7;
          }

          /* SKILLS */

          .hero-skills {
            margin-top: 22px;

            gap: 6px;
          }

          .hero-skills span {
            padding:
              7px 11px;

            font-size: 10px;
          }

          /* CTA */

          .hero-actions {
            margin-top: 24px;

            display: grid;

            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            width: 100%;
          }

          .hero-primary-btn,
          .hero-secondary-btn {
            min-height: 44px;

            padding:
              0 14px;

            font-size: 11px;
          }

          /* QUICK CARDS */

          .hero-cards {
            margin-top: 24px;

            gap: 7px;
          }

          .hero-info-card {
            border-radius: 16px;

            padding:
              12px 6px;
          }

          .hero-info-card p {
            font-size: 7px;

            letter-spacing:
              0.11em;
          }

          .hero-info-card h3 {
            margin-top: 6px;

            font-size: 9px;

            line-height: 1.35;
          }

          /* AVATAR */

          .hero-avatar-wrap {
            width:
              min(88vw, 315px);
          }

          .hero-avatar-card {
            border-radius: 30px;

            padding: 9px;
          }

          .hero-avatar-frame {
            height: 390px;

            border-radius: 24px;
          }

          .hero-avatar-caption {
            padding: 18px;
          }

          .hero-avatar-caption p {
            font-size: 8px;

            letter-spacing:
              0.2em;
          }

          .hero-avatar-caption h2 {
            margin-top: 6px;

            font-size: 19px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .hero-section *,
          .hero-section *::before,
          .hero-section *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}