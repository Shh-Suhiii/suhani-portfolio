import { Mail, Github, Linkedin, MapPin } from "lucide-react";
const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "suhaniraisr01@gmail.com",
    href: "mailto:suhaniraisr01@gmail.com",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/Shh-Suhiii",
    href: "https://github.com/Shh-Suhiii",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/suhani-rai-sr00",
    href: "https://www.linkedin.com/in/suhani-rai-sr00",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Muzaffarnagar, India",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />
      <div className="contact-grid-bg" />
      <div className="contact-vignette" />

      <div className="contact-shell">
        <div className="contact-card">
          <div className="contact-header">
            <p className="contact-kicker">✦ Contact</p>
            <h2>
              Let&apos;s turn ideas into
              <span> something real.</span>
            </h2>
            <p>
              Open for web development, UI/UX design, freelance projects,
              collaborations, internships and creative digital work.
            </p>
            <div className="contact-divider" />
          </div>

          <div className="contact-layout">
            <div className="contact-message-card">
              <p className="contact-mini-label">Currently Available</p>
              <h3>Got an idea? Let&apos;s build it clean, useful and beautiful.</h3>
              <p>
                Whether it&apos;s a website, dashboard, portfolio, landing page or
                design concept — I&apos;m always open to meaningful work and learning
                opportunities.
              </p>

              <div className="contact-actions">
                <a href="mailto:suhaniraisr01@gmail.com">Let&apos;s Talk</a>
                <a href="#projects">View Work</a>
              </div>
            </div>

            <div className="contact-links-grid">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="contact-link-card"
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <p>{item.label}</p>
                    <span>{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #07070A;
          color: white;
          padding: 110px 16px 170px;
        }

        .contact-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 9999px;
        }

        .contact-glow-one {
          top: 8%;
          left: 50%;
          width: 520px;
          height: 520px;
          transform: translateX(-50%);
          background: rgba(114, 9, 183, 0.16);
          filter: blur(160px);
        }

        .contact-glow-two {
          right: 4%;
          bottom: 8%;
          width: 420px;
          height: 420px;
          background: rgba(76, 201, 240, 0.1);
          filter: blur(145px);
        }

        .contact-grid-bg {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 96px 96px;
        }

        .contact-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, #07070A 78%);
        }

        .contact-shell {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
        }

        .contact-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025));
          border-radius: 42px;
          padding: 42px;
          backdrop-filter: blur(24px);
          box-shadow: 0 0 90px rgba(0,0,0,0.22);
        }

        .contact-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          pointer-events: none;
          background: radial-gradient(circle at top center, rgba(76,201,240,0.1), transparent 42%);
        }

        .contact-header {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-kicker {
          color: #4CC9F0;
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .contact-header h2 {
          margin-top: 20px;
          font-size: 44px;
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 900;
        }

        .contact-header h2 span {
          background: linear-gradient(to right, #7209B7, #4361EE, #4CC9F0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .contact-header > p:last-of-type {
          margin-top: 22px;
          color: #a1a1aa;
          font-size: 16px;
          line-height: 1.8;
        }

        .contact-divider {
          width: 140px;
          height: 2px;
          margin: 26px auto 0;
          border-radius: 9999px;
          background: linear-gradient(90deg, #7209B7, #4361EE, #4CC9F0);
          box-shadow: 0 0 24px rgba(76,201,240,0.22);
        }

        .contact-layout {
          position: relative;
          z-index: 2;
          margin-top: 52px;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 22px;
          align-items: stretch;
        }

        .contact-message-card,
        .contact-link-card {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .contact-message-card {
          border-radius: 32px;
          padding: 30px;
        }

        .contact-mini-label {
          color: #4CC9F0;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .contact-message-card h3 {
          margin-top: 18px;
          font-size: 28px;
          line-height: 1.15;
          letter-spacing: -0.03em;
          font-weight: 850;
        }

        .contact-message-card > p:last-of-type {
          margin-top: 18px;
          color: #a1a1aa;
          font-size: 15px;
          line-height: 1.8;
        }

        .contact-actions {
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .contact-actions a {
          border-radius: 9999px;
          padding: 12px 18px;
          font-size: 14px;
          font-weight: 800;
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }

        .contact-actions a:first-child {
          background: linear-gradient(90deg, #7209B7, #4CC9F0);
          color: white;
          box-shadow: 0 0 34px rgba(114,9,183,0.28);
        }

        .contact-actions a:last-child {
          border: 1px solid rgba(76,201,240,0.35);
          background: rgba(255,255,255,0.05);
          color: #bae6fd;
        }

        .contact-actions a:hover {
          transform: translateY(-3px);
        }

        .contact-links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .contact-link-card {
          min-height: 145px;
          border-radius: 28px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease;
        }

        .contact-link-card:hover {
          transform: translateY(-7px) scale(1.015);
          border-color: rgba(76,201,240,0.42);
          background: rgba(76,201,240,0.06);
          box-shadow: 0 0 60px rgba(76,201,240,0.08);
        }

        .contact-link-card:hover .contact-icon {
          transform: scale(1.08);
        }

        .contact-icon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.06);
          color: #4CC9F0;
          box-shadow: 0 0 22px rgba(76,201,240,0.08);
          transition: transform 0.3s ease;
        }

        .contact-link-card p {
          color: #4CC9F0;
          font-size: 13px;
          font-weight: 700;
        }

        .contact-link-card span {
          display: block;
          margin-top: 8px;
          color: #e4e4e7;
          font-size: 14px;
          line-height: 1.45;
          word-break: break-word;
        }

        @media (min-width: 900px) {
          .contact-header h2 {
            font-size: 58px;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 90px 16px 150px;
          }

          .contact-card {
            border-radius: 30px;
            padding: 22px;
          }

          .contact-header {
            text-align: left;
          }

          .contact-header h2 {
            font-size: 34px;
          }

          .contact-header > p:last-of-type {
            font-size: 14px;
            line-height: 1.75;
          }

          .contact-divider {
            margin-left: 0;
          }

          .contact-layout {
            margin-top: 34px;
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .contact-message-card {
            border-radius: 24px;
            padding: 20px;
          }

          .contact-message-card h3 {
            font-size: 23px;
          }

          .contact-message-card > p:last-of-type {
            font-size: 13px;
            line-height: 1.7;
          }

          .contact-actions {
            margin-top: 22px;
          }

          .contact-actions a {
            flex: 1;
            text-align: center;
            padding: 11px 14px;
            font-size: 13px;
          }

          .contact-links-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .contact-link-card {
            min-height: auto;
            border-radius: 22px;
            padding: 18px;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 14px;
          }

          .contact-icon {
            width: 42px;
            height: 42px;
            border-radius: 15px;
            flex: 0 0 auto;
          }
        }
      `}</style>
    </section>
  );
}