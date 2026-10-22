export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Ebbtide Wiki",
  shortName: "Ebbtide",
  logoText: "E",
  tagline: "Zombie Survival Strategy Guides, Units & Gameplay",
  description: "Explore Ebbtide guides, gameplay mechanics, military units, survival strategies, base building tips, system requirements, and the latest release date news.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ebbtide.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ebbtide.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/4915700/Ebbtide/",
  heroVideoId: "59f_XjUgFdE", // Ebbtide Official Steam Gameplay Trailer
  social: {
    discord: "https://discord.gg/JwGQGQFqhD",
    youtube: "https://www.youtube.com/@EbbtideGame",
    twitter: "https://x.com/ProjectAliveDev",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
