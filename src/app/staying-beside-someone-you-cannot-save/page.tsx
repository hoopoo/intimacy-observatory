import type { Metadata } from "next";
import { StayingBesidePage } from "@/components/intimacy/staying-beside/StayingBesidePage";
import { STAYING_BESIDE_META } from "@/data/staying-beside-someone-you-cannot-save";

const meta = STAYING_BESIDE_META;
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

export default function StayingBesideRoute() {
  return <StayingBesidePage />;
}
