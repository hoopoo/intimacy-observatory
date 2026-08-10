import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { StatusBadge } from "@/components/intimacy/StatusBadge";
import { formatArticleDate } from "@/lib/article-display";
import { ThesisQuote } from "@/components/intimacy/article/ThesisQuote";
import { BeforeAfterComparison } from "@/components/intimacy/article/BeforeAfterComparison";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";
import { ConnectedObservatories } from "@/components/intimacy/confessional/ConnectedObservatories";
import { FinalQuestion } from "@/components/intimacy/confessional/ScrollQuestions";
import { MoreConnectionsHero } from "./MoreConnectionsHero";
import {
  CLOSING_QUESTION,
  CONNECTED_OBSERVATORIES,
  CONTRAST_CORE_LINE,
  CORE_THESIS,
  EMBODIED,
  MORE_CONNECTIONS_META,
  OPENING,
  SCREEN_MEDIATED,
  SENSORY_LAYERS,
  SOURCE_BOUNDARY,
  SOURCE_NOTE,
  STRUCTURAL_PARADOXES,
} from "@/data/more-connections-less-connection";

function SectionQuote({ text, size = "default" as const }: { text: string; size?: "default" | "hero" }) {
  return (
    <div className={`mt-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] ${size === "hero" ? "px-6 py-8" : "px-5 py-5"}`}>
      <ThesisQuote text={text} size={size} className="border-none pl-0 text-center" />
    </div>
  );
}

function Section({
  id,
  number,
  title,
  titleEn,
  children,
}: {
  id: string;
  number: string;
  title: string;
  titleEn?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-[var(--border-subtle)] py-10 last:border-0" aria-labelledby={`${id}-heading`}>
      <FadeInOnScroll>
        <p className="annotation mb-2 text-[var(--accent-violet)]">{number}</p>
        <h2 id={`${id}-heading`} className="text-base font-semibold tracking-tight text-[var(--ink)] md:text-lg">{title}</h2>
        {titleEn ? <p className="mt-1 text-xs text-[var(--ink-faint)]">{titleEn}</p> : null}
        <div className="mt-5">{children}</div>
      </FadeInOnScroll>
    </section>
  );
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-5">
      {paragraphs.map((p) => (
        <p key={p} className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">{p}</p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-col gap-2 border-l border-[var(--border-subtle)] pl-5">
      {items.map((item) => (
        <li key={item} className="text-[1.0625rem] leading-[2] text-[var(--ink-muted)]">{item}</li>
      ))}
    </ul>
  );
}

function FieldNote({ label, children }: { label: string; children: string }) {
  return (
    <aside className="mt-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-5 py-4">
      <p className="annotation mb-2 text-[var(--accent-violet)]">{label}</p>
      <p className="prose-ja text-sm leading-relaxed text-[var(--ink-muted)]">{children}</p>
    </aside>
  );
}

export function MoreConnectionsPage() {
  const meta = MORE_CONNECTIONS_META;

  return (
    <div className="mx-auto max-w-[720px] px-5 py-12">
      <Link href="/articles" className="mb-10 inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]">
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        Articles一覧に戻る
      </Link>

      <header className="mb-10 border-b border-[var(--border-subtle)] pb-10">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <p className="annotation text-[var(--accent-violet)]">Observation Essay / 観測エッセイ</p>
          <StatusBadge status={meta.observationStatus} />
          <span className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-[0.65rem] text-[var(--ink-faint)]">{meta.cardLabel}</span>
        </div>
        <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">{meta.title}</h1>
        <p className="mt-2 text-sm text-[var(--ink-faint)]">{meta.titleEn}</p>
        <p className="mt-4 text-lg leading-relaxed text-[var(--ink-muted)]">{meta.subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {meta.categories.map((cat) => (
            <span key={cat} className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-[0.65rem] text-[var(--ink-faint)]">{cat}</span>
          ))}
        </div>
        <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[var(--ink-faint)]">
          <div><dt className="annotation mb-0.5">Published</dt><dd><time dateTime={meta.date}>{formatArticleDate(meta.date)}</time></dd></div>
          <div><dt className="annotation mb-0.5">Reading</dt><dd>{meta.readingTime} 分</dd></div>
        </dl>
      </header>

      <MoreConnectionsHero />

      <div className="prose-ja mt-10 flex flex-col gap-5 border-b border-[var(--border-subtle)] pb-10 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
        {OPENING.map((p) => (<p key={p}>{p}</p>))}
      </div>

      <section className="mt-10 border-b border-[var(--border-subtle)] pb-10">
        <FadeInOnScroll>
          <p className="annotation mb-2 text-[var(--accent-violet)]">Core Thesis</p>
          <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">{CORE_THESIS}</p>
        </FadeInOnScroll>
      </section>

      <section className="mt-10 border-b border-[var(--border-subtle)] pb-10">
        <p className="annotation mb-2 text-[var(--accent-violet)]">Contrast</p>
        <h2 className="text-base font-semibold tracking-tight md:text-lg">二つの親密性</h2>
        <BeforeAfterComparison before={SCREEN_MEDIATED} after={EMBODIED} />
        <SectionQuote text={CONTRAST_CORE_LINE} />
      </section>

      <section className="mt-10 border-b border-[var(--border-subtle)] pb-10">
        <p className="annotation mb-4">Sensory Layers / 感覚の層</p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {SENSORY_LAYERS.map((layer, i) => (
            <FadeInOnScroll key={layer.id} delayMs={i * 40}>
              <li className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] px-4 py-3 text-center">
                <p className="annotation text-[var(--ink-faint)]">{layer.labelEn}</p>
                <p className="mt-1 text-sm font-medium text-[var(--ink)]">{layer.labelJa}</p>
              </li>
            </FadeInOnScroll>
          ))}
        </ul>
      </section>

      <div className="mt-14 flex flex-col">
        <Section id="s1" number="Section 01" title="信頼の前に、身体がそこにいた" titleEn="Presence Before Trust">
          <Prose paragraphs={["本来、人間関係の多くは、存在 → 小さな安堵や違和感 → なじみ → 信頼 → より深い親密性、という流れで立ち上がる。", "しかし現在は、プロフィール → 評価 → リスク判断 → メッセージ交換 → 条件付きの対面 → 信頼確認、となりやすい。", "人は最初から信頼しているから親密になるのではない。少しずつ相手の存在に慣れ、身体が安全を感じることで、信頼が立ち上がる。"]} />
          <SectionQuote text={"Trust is not only a judgment.\nIt is also a bodily easing.\n\n信頼は、判断だけではない。身体の緩みでもある。"} />
        </Section>

        <Section id="s2" number="Section 02" title="情報は、存在ではない" titleEn="Information Is Not Presence">
          <Prose paragraphs={["人は、年齢、職業、趣味、学歴、居住地、恋愛目的を知っていても、次のことをまだ知らないことがある。"]} />
          <BulletList items={["その人と沈黙がどう感じられるか", "相手の存在が身体を緩めるか、緊張させるか", "一緒にいる時間が自然に過ぎるか", "視線が温かく感じるか、侵襲的に感じるか", "笑いが自然に生まれるか", "感情的な余白があるか"]} />
          <SectionQuote text="人間は、条件に適合する相手と親密になるのではなく、存在に反応できる相手と親密になる。" />
          <FieldNote label="Editorial note">情報が悪いのではない。情報だけでは足りない、という書き方に留める。</FieldNote>
        </Section>

        <Section id="s3" number="Section 03" title="身体は、プロフィールが捨てた情報を読んでいる" titleEn="The Body Reads What Profiles Omit">
          <Prose paragraphs={["声、間、匂い、ためらい、姿勢、視線、手の動き、共有される沈黙、物理的距離、応答のタイミング、温かさや警戒——身体は、アルゴリズムが扱っていない情報を大量に受け取っている。", "これは神秘化ではなく、非言語認知、感じられる安全、身体による認識、感情の同調として扱う。"]} />
          <SectionQuote text="身体は、アルゴリズムが扱っていない情報を大量に受け取っている。" />
        </Section>

        <Section id="s4" number="Section 04" title="「3分間ハグ」は回復ではなく症状でもある" titleEn="The Feels as Symptom">
          <Prose paragraphs={["The Atlantic ほかで報じられた独身者イベント「The Feels」——見知らぬ相手と見つめ合う、抱き合う、胸に手を当てる——のような実践は、イベント自体の是非ではなく、観測の対象として読む。", "かつて自然発生していたはずの近さ、視線、同じ空間、触れ合い、安全の確認、身体的な緩みが、いまや「特別なイベント」として再設計されている。", "これは「昔に戻れ」という話ではない。現代社会では、親密性の前提条件そのものが日常から減っているのではないか、という問いである。"]} />
          <SectionQuote text="わざわざ身体を取り戻すイベントが必要になったこと自体が、身体的親密性の衰退を示している。" />
        </Section>

        <Section id="s5" number="Section 05" title="接続の増加は、親密さの増加を意味しない" titleEn="More Connections ≠ More Connection">
          <Prose paragraphs={["接触点が増えることと、関係が成立することは別である。親密性には、量ではなく、厚み・反復・偶然・身体的な安心が必要かもしれない。"]} />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {STRUCTURAL_PARADOXES.map((item, i) => (
              <FadeInOnScroll key={item} delayMs={i * 40}>
                <p className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] px-4 py-3 text-sm font-medium text-[var(--ink-muted)]">{item}</p>
              </FadeInOnScroll>
            ))}
          </div>
        </Section>

        <Section id="s6" number="Section 06" title="親密性は、完全には最適化できない" titleEn="Intimacy Cannot Be Fully Optimized">
          <Prose paragraphs={["最適化は、無駄を減らし、危険を下げ、効率を上げる。しかし親密性には、予測不能さ、曖昧さ、待つこと、不一致、偶然の共鳴、少しずつの同調が含まれる。", "最適化は有用だが、それだけでは親密性の本体に到達しない。"]} />
          <SectionQuote text="親密性は、効率の副産物としては生まれにくい。" />
        </Section>

        <Section id="s7" number="Section 07" title="孤独は、接触の欠如とは限らない" titleEn="Loneliness Is Not Always the Absence of Contact">
          <Prose paragraphs={["現代人はしばしば、多数の人と連絡を取れる。多数のプロフィールを見る。多数の候補と接点を持つ。それでも孤独である。", "孤独とは、相手が物理的にいないことだけでなく、自分の身体が安心できる相手がいない、無理なく沈黙できる相手がいない、評価されずに存在できる相手がいない、役割ではなくそのままでいられる相手がいない、という状態でもある。"]} />
          <SectionQuote text="孤独の反対は、単なる接触ではなく、安心して存在できる関係かもしれない。" />
          <FieldNote label="Body note">身体は、安心を理屈より先に感じ取ることがある。</FieldNote>
        </Section>

        <Section id="s8" number="Section 08" title="日常から何が失われたのか" titleEn="What Has Been Lost From Everyday Life?">
          <Prose paragraphs={["親密性は、「親密になるための場」でだけ生まれるわけではない。むしろ、何でもない反復、意味のない共有時間、目的のない同席から立ち上がることが多い。"]} />
          <BulletList items={["職場での自然な雑談の減少", "リモートワーク化", "地域共同体の希薄化", "友人ネットワークの断片化", "長い通学・通勤・対面の雑談時間の減少", "「何でもない時間」の消失", "出会いが最初から目的化されること", "リスク回避による偶然の縮小"]} />
          <SectionQuote text="親密性は、目的化された出会いより、しばしば余白から生まれる。" />
          <FieldNote label="Reflection">「相手のことを知る」と「相手と一緒にいて落ち着く」は、同じではない。</FieldNote>
        </Section>
      </div>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <FadeInOnScroll>
          <Prose paragraphs={["人は今も、つながりを求めている。恋愛も、信頼も、安心も、消えたわけではない。", "しかし現代社会では、それらが立ち上がるための条件が、あまりにも情報化され、評価化され、最適化され、身体を通るプロセスが薄くなっているのかもしれない。", "問題は、「なぜ人は恋愛しないのか」だけではない。", "人は情報だけでは親密になれない。接続の増加は、親密さの増加を保証しない。presence は依然として不可欠である。"]} />
        </FadeInOnScroll>
        <div className="mt-10">
          <FinalQuestion ja={CLOSING_QUESTION} en="Does our society still leave bodily room for two people to grow intimate, little by little?" />
        </div>
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <h2 className="annotation mb-5">Source Boundary</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {SOURCE_BOUNDARY.map((item, i) => (
            <FadeInOnScroll key={item.id} delayMs={i * 40}>
              <article className="h-full rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-4">
                <p className="annotation text-[var(--accent-violet)]">{item.label}</p>
                <p className="prose-ja mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">{item.text}</p>
              </article>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <h2 className="annotation mb-2">Connected Observatories</h2>
        <ConnectedObservatories observatories={CONNECTED_OBSERVATORIES} />
      </section>

      <aside className="mt-14 border-t border-[var(--border-subtle)] pt-8">
        <p className="annotation mb-3">Source Note</p>
        <p className="prose-ja text-sm leading-relaxed text-[var(--ink-faint)]">{SOURCE_NOTE}</p>
      </aside>
    </div>
  );
}
