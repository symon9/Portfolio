export default function manifest() {
  return {
    name: "Simon Emmanuel - Software Engineer Portfolio",
    short_name: "Simon Emmanuel",
    description:
      "Portfolio of Simon Emmanuel, Software Engineer specializing in full-stack web applications, AI-powered developer tools, and digital products.",
    start_url: "/",
    display: "standalone",
    background_color: "#090a0f",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
      {
        src: "/profile.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
