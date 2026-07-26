import type { Metadata } from "next";
import { WhereLoversComeFromPage } from "@/components/intimacy/classics-of-encounter/WhereLoversComeFromPage";
import {
  WHERE_LOVERS_COME_FROM_HREF,
  WHERE_LOVERS_META,
} from "@/data/where-lovers-come-from";

const siteUrl = "https://intimacy.shiroand.io";

export const metadata: Metadata = {
  title: WHERE_LOVERS_META.title,
  description: WHERE_LOVERS_META.description,
  openGraph: {
    title: WHERE_LOVERS_META.title,
    description: WHERE_LOVERS_META.ogDescription,
    type: "article",
    locale: "ja_JP",
  },
  alternates: {
    canonical: `${siteUrl}${WHERE_LOVERS_COME_FROM_HREF}`,
  },
};

export default function WhereLoversComeFromRoute() {
  return <WhereLoversComeFromPage />;
}
