import type { Metadata } from "next";
import { Suspense } from "react";
import { ClassicsHero } from "@/components/intimacy/classics-of-encounter/ClassicsHero";
import { ClassicsIntroCompare } from "@/components/intimacy/classics-of-encounter/ClassicsIntroCompare";
import { ClassicsThematicOverview } from "@/components/intimacy/classics-of-encounter/ClassicsThematicOverview";
import { ClassicsCategoryGrid } from "@/components/intimacy/classics-of-encounter/ClassicsCategoryGrid";
import { ClassicsArchiveExplorer } from "@/components/intimacy/classics-of-encounter/ClassicsArchiveExplorer";
import { ClassicsClosingSection } from "@/components/intimacy/classics-of-encounter/ClassicsClosingSection";

export const metadata: Metadata = {
  title: "出会いの古典と現在",
  description:
    "テレクラ、伝言ダイヤル、出会い系サイト、マッチングアプリ、AI婚活まで。人間の孤独と親密性が、時代ごとにどのようなインターフェースを与えられてきたかを観測するアーカイブ。",
  openGraph: {
    title: "出会いの古典と現在",
    description: "電話が鳴る部屋から、AIが相手を選ぶ画面まで。",
  },
};

export default function ClassicsOfEncounterPage() {
  return (
    <div>
      <ClassicsHero />
      <ClassicsIntroCompare />
      <ClassicsThematicOverview />
      <ClassicsCategoryGrid />
      <Suspense
        fallback={
          <div className="mx-auto max-w-6xl px-5 py-16 text-sm text-[var(--ink-faint)]">
            読み込み中…
          </div>
        }
      >
        <ClassicsArchiveExplorer />
      </Suspense>
      <ClassicsClosingSection />
    </div>
  );
}
