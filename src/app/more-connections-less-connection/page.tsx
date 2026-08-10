import type { Metadata } from "next";
import { MoreConnectionsPage } from "@/components/intimacy/more-connections/MoreConnectionsPage";
import { MORE_CONNECTIONS_META } from "@/data/more-connections-less-connection";

const meta = MORE_CONNECTIONS_META;
const siteUrl = "https://intimacy.shiroand.io";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.seoDescription,
  openGraph: {
    title: meta.ogTitle,
    description: meta.ogDescription,
    type: "article",
    locale: "ja_JP",
    publishedTime: meta.date,
  },
  alternates: {
    canonical: `${siteUrl}${meta.href}`,
  },
};

export default function MoreConnectionsRoute() {
  return <MoreConnectionsPage />;
}
