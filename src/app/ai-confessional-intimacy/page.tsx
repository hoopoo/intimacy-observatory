import type { Metadata } from "next";
import { ConfessionalIntimacyPage } from "@/components/intimacy/confessional/ConfessionalIntimacyPage";
import { CONFESSIONAL_INTIMACY_META } from "@/data/confessional-intimacy";

const meta = CONFESSIONAL_INTIMACY_META;
const siteUrl = "https://intimacy.shiroand.io";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.seoDescription,
  openGraph: {
    title: meta.title,
    description: meta.ogDescription,
    type: "article",
    locale: "ja_JP",
    publishedTime: meta.date,
    images: [
      {
        url: `${siteUrl}${meta.heroImage}`,
        width: 1200,
        height: 675,
        alt: "暗い部屋でスマートフォンの光だけが手元を照らす、深夜の私的な対話の情景",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}${meta.href}`,
  },
};

export default function AiConfessionalIntimacyRoute() {
  return <ConfessionalIntimacyPage />;
}
