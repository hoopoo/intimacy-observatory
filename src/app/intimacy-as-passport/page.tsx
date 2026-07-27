import type { Metadata } from "next";
import { IntimacyAsPassportPage } from "@/components/intimacy/intimacy-as-passport/IntimacyAsPassportPage";
import { INTIMACY_AS_PASSPORT_META } from "@/data/intimacy-as-passport";

const meta = INTIMACY_AS_PASSPORT_META;
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

export default function IntimacyAsPassportRoute() {
  return <IntimacyAsPassportPage />;
}
