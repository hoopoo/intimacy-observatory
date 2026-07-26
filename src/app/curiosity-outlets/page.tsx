import type { Metadata } from "next";
import { CuriosityOutletsPage } from "@/components/intimacy/curiosity-outlets/CuriosityOutletsPage";
import {
  CURIOSITY_OUTLETS_META,
} from "@/data/curiosity-outlets";

const meta = CURIOSITY_OUTLETS_META;
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

export default function CuriosityOutletsRoute() {
  return <CuriosityOutletsPage />;
}
