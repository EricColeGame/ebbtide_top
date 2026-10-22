import type { LucideIcon } from "lucide-react";
import { BookOpen, Crosshair, Map, MessageSquare, Settings, Shield, Users } from "lucide-react";

type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Settings, isContentType: true },
  { key: "combat", path: "/combat", icon: Crosshair, isContentType: true },
  { key: "units", path: "/units", icon: Users, isContentType: true },
  { key: "base", path: "/base", icon: Shield, isContentType: true },
  { key: "maps", path: "/maps", icon: Map, isContentType: true },
  { key: "community", path: "/community", icon: MessageSquare, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
