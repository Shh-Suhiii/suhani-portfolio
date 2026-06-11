"use client";
import Container from "@/components/Container";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, useScroll } from "framer-motion";
import React, { useRef } from "react";

export default function HomePage() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  // Parallax mouse tracking for background blobs
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(useTransform(mx, [0, 1], [-20, 20]), { stiffness: 80, damping: 20 });
  const py = useSpring(useTransform(my, [0, 1], [-12, 12]), { stiffness: 80, damping: 20 });

  const pxOpp = useTransform(px, (v) => -v / 2);
  const pyOpp = useTransform(py, (v) => -v / 2);

  const rafRef = useRef<number | null>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    if (prefersReduced) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const ex = e.clientX; const ey = e.clientY;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const x = (ex - rect.left) / rect.width;
      const y = (ey - rect.top) / rect.height;
      mx.set(x);
      my.set(y);
    });
  };

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rx = useSpring(tiltY, { stiffness: 120, damping: 20 });
  const ry = useSpring(tiltX, { stiffness: 120, damping: 20 });

  const handleTilt: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (prefersReduced) return;
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(px * 6);
    tiltY.set(-py * 6);
  };

  return (
    <motion.section
      role="main"
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] py-16 md:py-24 transform-gpu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        aria-hidden
        className="fixed left-0 top-0 z-50 h-[2px] w-full bg-transparent"
      >
        <motion.div
          className="h-[2px] bg-foreground"
          style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        />
      </motion.div>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="transform-gpu absolute left-1/2 -top-24 h-64 w-64 md:h-96 md:w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/40 to-purple-500/40 blur-2xl"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ x: prefersReduced ? 0 : px, y: prefersReduced ? 0 : py, willChange: 'transform, opacity' }}
        />
        <motion.div
          className="transform-gpu absolute bottom-0 left-0 h-72 w-72 md:h-[28rem] md:w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-500/25 to-sky-500/25 blur-2xl"
          animate={{ y: [0, -6, 0], x: [0, 6, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          style={{ x: prefersReduced ? 0 : pxOpp, y: prefersReduced ? 0 : pyOpp, willChange: 'transform, opacity' }}
        />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ zIndex: -9 }}>
        <div className="noise-layer" />
      </div>
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Hero copy */}
          <div className="space-y-6">

            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Suhani Rai</span>.
            </motion.h1>

            <motion.p
              className="text-foreground/90 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
            >
              Computer Science student building web & mobile apps with{" "}
              <strong>Next.js</strong>, <strong>Flutter</strong>, <strong>Flask</strong>,{" "}
              <strong>MySQL</strong>, and <strong>Firebase</strong>. I love clean UX,
              reliable backends, and shipping fast.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex gap-3 pt-2"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.14 }}
            >
              <Link
                href="/projects"
                className="ripple rounded-xl px-4 py-2 text-sm font-medium bg-foreground text-background hover:-translate-y-0.5 active:translate-y-0 transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground/40"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="ripple rounded-xl border px-4 py-2 text-sm font-medium hover:bg-foreground/5 hover:-translate-y-0.5 active:translate-y-0 transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground/40"
              >
                Contact Me
              </Link>
            </motion.div>

            <div className="pt-3 flex items-center gap-4">
              <motion.a
                href="https://github.com/Shh-Suhiii"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visit my GitHub profile"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[0.04] hover:bg-foreground/[0.08] px-3 py-1.5 transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground/40"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="opacity-80 group-hover:opacity-100"><path d="M12 .5C5.73.5.95 5.27.95 11.5c0 4.85 3.14 8.96 7.5 10.41.55.11.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.05.66-3.69-1.3-3.69-1.3-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.58 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.02 1.13.88-.25 1.82-.37 2.76-.38.94.01 1.88.13 2.76.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.53.22 2.66.11 2.94.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.15-5.02 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.94 0 .29.2.64.76.53 4.35-1.45 7.49-5.56 7.49-10.41C23.05 5.27 18.27.5 12 .5z"/></svg>
                <span className="underline-anim">GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/suhani-rai"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visit my LinkedIn profile"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[0.04] hover:bg-foreground/[0.08] px-3 py-1.5 transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground/40"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="opacity-80 group-hover:opacity-100"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24H8V8z"/></svg>
                <span className="underline-anim">LinkedIn</span>
              </motion.a>
            </div>
          </div>

          {/* Right: Info card */}
          <motion.div
            className="rounded-3xl border p-6 md:p-8 bg-foreground/[0.03] hover:shadow-sm transition"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
            onMouseMove={handleTilt}
            style={{ rotateX: prefersReduced ? 0 : rx, rotateY: prefersReduced ? 0 : ry, transformStyle: 'preserve-3d' }}
          >
            <motion.div className="flex items-center gap-4 pb-6 border-b" initial={false}>
              <motion.div
                className="h-14 w-14 md:h-16 md:w-16 rounded-2xl border grid place-items-center text-lg font-semibold"
                whileHover={{ rotate: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                SR
              </motion.div>
              <div>
                <p className="text-sm text-foreground/70">Portfolio of</p>
                <p className="text-xl font-semibold">Suhani Rai</p>
              </div>
            </motion.div>

            <motion.ul
              className="space-y-3 pt-6 text-sm text-foreground"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 1 },
                show: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {[
                { key: "edu", content: <> <strong>Education:</strong> BCA (2022–2025), MCA (2025–2027) </> },
                { key: "loc", content: <> <strong>Location:</strong> Muzaffarnagar, India </> },
                { key: "areas", content: <> <strong>Areas:</strong> Frontend, Backend, Databases, UI/UX </> },
                { key: "tools", content: <> <strong>Tools:</strong> Git, GitHub, Postman, VS Code, Android Studio, Figma, Canva </> },
                { key: "soft", content: <> <strong>Soft Skills:</strong> Problem Solving, Collaboration, Time Management </> },
                { key: "gh", content: <a className="underline-anim hover:opacity-80" href="https://github.com/Shh-Suhiii" target="_blank" rel="noreferrer">GitHub</a> },
                { key: "cv", content: <><a className="underline-anim hover:opacity-80 inline-flex items-center gap-2" href="/Suhani-Rai-Resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="Download resume PDF">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 20h14v-2H5v2zm7-18l-5.5 9h11L12 2z"/></svg>
                  <span>Download Resume</span>
                </a>
                <span className="ml-2 text-foreground/60">(PDF, ~200 KB • updated Sep 7, 2025)</span></> },
              ].map((item) => (
                <motion.li
                  key={item.key}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  {item.content}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </Container>
      <style jsx>{`
        .underline-anim {
          background-image: linear-gradient(currentColor, currentColor);
          background-size: 0% 1px;
          background-repeat: no-repeat;
          background-position: 0 100%;
          transition: background-size .3s ease;
        }
        .underline-anim:hover { background-size: 100% 1px; }
        .ripple { position: relative; overflow: hidden; }
        .ripple::after {
          content: "";
          position: absolute; inset: 0; margin: auto;
          width: 0; height: 0; border-radius: 9999px;
          background: currentColor; opacity: 0.15;
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: width .45s ease, height .45s ease, opacity .6s ease;
        }
        .ripple:active::after { width: 240px; height: 240px; opacity: 0; }
        .noise-layer{position:absolute;inset:0;opacity:.04;mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");}
        @media (prefers-color-scheme: light){ .noise-layer{opacity:.025;} }
      `}</style>
    </motion.section>
  );
}