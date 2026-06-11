import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Suhani Rai — Portfolio",
  description:
    "Flutter & Web Developer | Next.js, Flutter, Flask, MySQL, Firebase. Building secure, scalable apps with clean UX.",
  metadataBase: new URL("https://example.com"), // replace after deploy
  openGraph: {
    title: "Suhani Rai — Portfolio",
    description:
      "Flutter & Web Developer | Next.js, Flutter, Flask, MySQL, Firebase.",
    url: "https://example.com",
    siteName: "Suhani Rai",
    images: ["/opengraph-image.png"],
    locale: "en_IN",
    type: "website",
  },
  keywords: [
    "Suhani Rai",
    "Flutter",
    "Next.js",
    "Flask",
    "MySQL",
    "Firebase",
    "Portfolio",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}