import { ThemeProvider } from "./components/theme-provider";
import ToastProvider from "./components/toast-provider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import "./css/globals.scss";

export const metadata = {
  title: "Simon Emmanuel - Software Engineer · Full-Stack & AI",
  description:
    "Simon Emmanuel is a Software Engineer based in Kano, Nigeria. Building full-stack web applications, AI-powered developer tools, and thoughtful digital products from idea to production.",
  keywords: [
    "Simon Emmanuel",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "AI Developer Tools",
    "CodeMind AI",
    "CommitCraft",
    "MOMI Bump",
    "Nigeria Software Engineer",
  ],
  authors: [{ name: "Simon Emmanuel", url: "https://github.com/symon9" }],
  creator: "Simon Emmanuel",
  metadataBase: new URL("https://iamsimon.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Simon Emmanuel - Software Engineer · Full-Stack & AI",
    description:
      "Software Engineer building full-stack products, AI-powered developer tools, and thoughtful digital experiences from idea to production.",
    url: "https://iamsimon.netlify.app",
    siteName: "Simon Emmanuel Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Simon Emmanuel - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Emmanuel - Software Engineer · Full-Stack & AI",
    description:
      "Software Engineer building full-stack products, AI-powered developer tools, and thoughtful digital experiences from idea to production.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme') || 'system';
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = saved === 'dark' || (saved === 'system' && prefersDark);
                  var root = document.documentElement;
                  if (isDark) {
                    root.classList.add('dark');
                    root.classList.remove('light');
                  } else {
                    root.classList.add('light');
                    root.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#f8fafc] dark:bg-[#090a0f] text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-indigo-600 selection:text-white min-h-screen flex flex-col justify-between transition-colors duration-150">
        <ThemeProvider>
          <ToastProvider />
          <div className="fixed inset-0 pointer-events-none bg-grid-pattern bg-grid-md opacity-60 dark:opacity-30 z-0" />
          <Navbar />
          <main className="relative z-10 flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
