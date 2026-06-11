import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  {
    label: "Email",
    href: "mailto:suhaniraisr01@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/Shh-Suhiii",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/suhani-rai-sr00",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#07070A] px-4 pt-8 pb-28 text-white sm:px-6 md:pt-10 md:pb-32">
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7209B7]/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl border-t border-white/10 pt-7 md:mt-6">
        {/* Mobile Footer */}
        <div className="flex flex-col items-center gap-6 text-center md:hidden">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#4CC9F0]">
              Suhani Rai
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              © {new Date().getFullYear()} Suhani Rai
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 text-xs text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4CC9F0]/60 hover:bg-white/[0.06] hover:text-[#4CC9F0] hover:shadow-[0_0_22px_rgba(76,201,240,0.12)]"
              >
                <>
                  <link.icon size={14} />
                  <span>{link.label}</span>
                  {link.href.startsWith("http") && <ExternalLink size={12} />}
                </>
              </a>
            ))}
          </div>

          <p className="text-xs text-zinc-500">
            Web Developer • UI Designer • Freelancer
          </p>
        </div>

        {/* Desktop Footer */}
        <div className="hidden md:flex items-center justify-between gap-10">
          <div className="shrink-0">
            <p className="text-xs uppercase tracking-[0.35em] text-[#4CC9F0]">
              Suhani Rai
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              © {new Date().getFullYear()} Suhani Rai
            </p>
          </div>

          <div className="flex flex-col items-end gap-3 text-right">
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-full px-2 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.04] hover:text-[#4CC9F0] hover:shadow-[0_0_18px_rgba(76,201,240,0.1)]"
                >
                  <span className="flex items-center gap-2">
                    <link.icon size={15} />
                    {link.label}
                    {link.href.startsWith("http") && <ExternalLink size={12} />}
                  </span>
                </a>
              ))}
            </div>

            <p className="text-sm text-zinc-500">
              Web Developer • UI Designer • Freelancer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}