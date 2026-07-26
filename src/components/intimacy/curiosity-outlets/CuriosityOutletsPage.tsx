import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { StatusBadge } from "@/components/intimacy/StatusBadge";
import { formatArticleDate } from "@/lib/article-display";
import { ThesisQuote } from "@/components/intimacy/article/ThesisQuote";
import { BeforeAfterComparison } from "@/components/intimacy/article/BeforeAfterComparison";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";
import { CuriosityBranchDiagram } from "./CuriosityBranchDiagram";
import {
  BOUNDARY_CHECKS,
  CONNECTED_OBSERVATORIES,
  CTA_LINKS,
  CURIOSITY_LEAD,
  CURIOSITY_OUTLETS,
  CURIOSITY_OUTLETS_META,
  RELATED_ARTICLES,
} from "@/data/curiosity-outlets";

function SectionQuote({ children }: { children: string }) {
  return (
    <div className="mt-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-5 py-5">
      <ThesisQuote text={children} size="default" />
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-sm border border-[var(--border-subtle)] px-2.5 py-1 text-xs text-[var(--ink-muted)]"
        >
          {item}
        </li>
      ))}
    </ul>
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
    <section
      id={id}
      className="border-b border-[var(--border-subtle)] py-10 last:border-0"
      aria-labelledby={`${id}-heading`}
    >
      <FadeInOnScroll>
        <p className="annotation mb-2 text-[var(--accent-violet)]">{number}</p>
        <h2
          id={`${id}-heading`}
          className="text-base font-semibold tracking-tight text-[var(--ink)] md:text-lg"
        >
          {title}
        </h2>
        {titleEn ? (
          <p className="mt-1 text-xs text-[var(--ink-faint)]">{titleEn}</p>
        ) : null}
        <div className="mt-5">{children}</div>
      </FadeInOnScroll>
    </section>
  );
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-5">
      {paragraphs.map((p) => (
        <p
          key={p}
          className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]"
        >
          {p}
        </p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-2 border-l border-[var(--border-subtle)] pl-5">
      {items.map((item) => (
        <li
          key={item}
          className="text-[1.0625rem] leading-[2] text-[var(--ink-muted)]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CuriosityOutletsPage() {
  const meta = CURIOSITY_OUTLETS_META;

  return (
    <div className="mx-auto max-w-[720px] px-5 py-12">
      <Link
        href="/articles"
        className="mb-10 inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        Articles一覧に戻る
      </Link>

      <header className="mb-12 border-b border-[var(--border-subtle)] pb-10">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <p className="annotation text-[var(--accent-violet)]">
            Observation Essay / 観測エッセイ
          </p>
          <StatusBadge status={meta.observationStatus} />
        </div>
        <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
          {meta.title}
        </h1>
        <p className="mt-2 text-sm text-[var(--ink-faint)]">{meta.titleEn}</p>
        <p className="mt-4 text-lg leading-relaxed text-[var(--ink-muted)]">
          {meta.subtitle}
        </p>
        <p className="mt-1 text-sm text-[var(--ink-faint)]">{meta.subtitleEn}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {meta.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-[0.65rem] text-[var(--ink-faint)]"
            >
              {cat}
            </span>
          ))}
        </div>
        <dl className="mt-6 text-sm text-[var(--ink-faint)]">
          <dt className="annotation mb-0.5">Published</dt>
          <dd>
            <time dateTime={meta.date}>{formatArticleDate(meta.date)}</time>
          </dd>
        </dl>
      </header>

      <div className="prose-ja mb-12 flex flex-col gap-5 border-b border-[var(--border-subtle)] pb-10 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
        {CURIOSITY_LEAD.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <SectionQuote>
          {"何に興味を持つかではなく、\nその好奇心が、どの出口へ運ばれるのか。"}
        </SectionQuote>
      </div>

      <CuriosityBranchDiagram outlets={CURIOSITY_OUTLETS} />

      <div className="mt-14 flex flex-col">
        <Section id="s1" number="Section 01" title="好奇心は、性欲の強さではない">
          <Prose
            paragraphs={[
              "ビッグファイブの開放性は、知識への関心だけを意味しない。未知の経験、感覚、空想、身体、人格、関係性に対して、自分をどこまで開けるかという性質でもある。",
              "そのため、好奇心の強い人が必ずしも性的に活発になるわけではない。好奇心は、性行動の量というより、何を親密さとして想像できるか、どのような関係を許容できるか、どこまで別の自己を試せるかという、経験の範囲に関係する。",
            ]}
          />
          <SectionQuote>
            {"好奇心は、性欲の強さではない。\nまだ経験していない親密さを、想像できる能力である。"}
          </SectionQuote>
        </Section>

        <Section id="s2" number="Section 02" title="第一の出口：創作">
          <Prose
            paragraphs={[
              "好奇心が、自分の内側へ向かうと、創作になる。会えない相手を物語にする。経験できない関係を小説にする。存在しない身体を絵にする。理想の人格をAIキャラクターとしてつくる。",
              "ここでは、好奇心は他者を消費するのではなく、世界を生成する力になる。",
            ]}
          />
          <TagList
            items={[
              "小説",
              "漫画",
              "イラスト",
              "音楽",
              "ゲーム",
              "AIキャラクター",
              "VR空間",
              "二次創作",
            ]}
          />
          <SectionQuote>
            創作とは、現実では試せない親密さを、安全な形式へ変換することでもある。
          </SectionQuote>
        </Section>

        <Section id="s3" number="Section 03" title="第二の出口：探索">
          <Prose
            paragraphs={[
              "好奇心が外部へ向かうと、新しい相手や場所を探す行動になる。探索とは、相手を探すことだけではない。自分が誰に惹かれるのか。どこまで他者に自分を見せられるのか。どのような関係なら安心できるのか。それを確認する自己実験でもある。",
            ]}
          />
          <TagList
            items={[
              "マッチングアプリ",
              "匿名掲示板",
              "SNS",
              "VRChat",
              "オンラインゲーム",
              "コミュニティ",
              "恋愛相談",
              "占い",
            ]}
          />
        </Section>

        <Section id="s4" number="Section 04" title="第三の出口：擬似恋愛">
          <Prose
            paragraphs={[
              "現実の恋愛には、拒絶、評判、身体、安全、時間などの摩擦がある。擬似恋愛は、その摩擦を減らす。ここで求められているのは、必ずしも相手そのものではない。",
            ]}
          />
          <TagList
            items={[
              "配信者",
              "アイドル",
              "ホスト・ホステス",
              "VTuber",
              "恋愛ゲーム",
              "AI恋人",
              "AI彼氏・AI彼女",
              "キャラクターとの対話",
            ]}
          />
          <BulletList
            items={[
              "返事をしてくれる",
              "自分を覚えている",
              "否定しない",
              "待っていてくれる",
              "特別扱いしてくれる",
            ]}
          />
          <SectionQuote>
            {"人は、人格に恋をするだけではない。\n自分に向けられた応答の形式に、親密さを感じる。"}
          </SectionQuote>
        </Section>

        <Section id="s5" number="Section 05" title="第四の出口：自己変身">
          <Prose
            paragraphs={[
              "好奇心は、自分自身へ向かうこともある。人は、別の自分になったとき、どのように見られるのかを試す。",
            ]}
          />
          <TagList
            items={[
              "アバター",
              "異性アバター",
              "生成AIによる別の顔",
              "AI美女・AI男性",
              "異性装",
              "美容整形",
              "声の変換",
              "仮想人格",
              "匿名アカウント",
            ]}
          />
          <SectionQuote>
            {"別の身体になったら、誰から愛されるのか。\n別の人格になったら、自分は何を言えるのか。"}
          </SectionQuote>
          <p className="mt-4">
            <a
              href="https://body-meaning.shiroand.io/body-meaning"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[var(--accent-violet)] hover:underline"
            >
              Body Meaning へ
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </p>
        </Section>

        <Section id="s6" number="Section 06" title="第五の出口：消費">
          <Prose
            paragraphs={[
              "好奇心がサービスによって設計されると、消費になる。こうした感情が、課金へ変換される。",
            ]}
          />
          <BulletList
            items={[
              "続きを見たい",
              "もっと話したい",
              "限定コンテンツを見たい",
              "特別な関係になりたい",
              "相手に忘れられたくない",
            ]}
          />
          <TagList
            items={[
              "月額課金",
              "投げ銭",
              "限定メッセージ",
              "有料チャット",
              "成人向けコンテンツ",
              "キャラクター購入",
              "記憶機能の追加課金",
              "親密度による機能開放",
            ]}
          />
          <SectionQuote>
            {"親密さが商品になるとき、\n会話の継続そのものが課金対象になる。"}
          </SectionQuote>
        </Section>

        <Section id="s7" number="Section 07" title="第六の出口：ビジネス">
          <Prose
            paragraphs={[
              "ある人は、自分の好奇心を満たすのではなく、他人の好奇心の出口をつくる。ここで売られるのは、単なるコンテンツではない。",
            ]}
          />
          <BulletList
            items={[
              "応答",
              "記憶",
              "継続",
              "特別扱い",
              "秘密",
              "別人格の体験",
              "安全に欲望を試す空間",
            ]}
          />
          <TagList
            items={[
              "AI恋人サービス",
              "AIキャラクター制作",
              "VTuber運営",
              "成人向けAIコンテンツ",
              "マッチングアプリ",
              "恋愛相談",
              "占い",
              "ファンコミュニティ",
              "アバター制作",
              "キャラクターIP",
              "親密性データ分析",
              "年齢確認",
              "本人確認",
              "AI人格認証",
            ]}
          />
          <SectionQuote>
            {"好奇心から創作する人がいる。\n好奇心から恋をする人がいる。\nそして、他人の好奇心の出口をつくり、ビジネスにする人がいる。"}
          </SectionQuote>
        </Section>

        <Section id="s8" number="Section 08" title="第七の出口：詐欺">
          <Prose
            paragraphs={[
              "詐欺もまた、好奇心の出口を提供する。ただし、その出口は偽装されている。",
            ]}
          />
          <BulletList
            items={[
              "恋愛だと思ったら投資勧誘だった",
              "創作仲間だと思ったら情報商材だった",
              "AI人格だと思ったら人間による課金誘導だった",
              "ファンコミュニティだと思ったら送金装置だった",
              "秘密の関係だと思ったら脅迫材料を集められていた",
              "海外の恋人だと思ったらロマンス詐欺だった",
            ]}
          />
          <SectionQuote>
            {"親密性は、好奇心を関係に変える。\nビジネスは、好奇心を商品に変える。\n詐欺は、好奇心を資産に変える。"}
          </SectionQuote>
          <p className="mt-4">
            <a
              href="https://scam-folklore-observatory.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[var(--accent-violet)] hover:underline"
            >
              Scam Folklore へ
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </p>
        </Section>

        <Section
          id="s9"
          number="Section 09"
          title="ビジネスと詐欺の境界"
        >
          <Prose
            paragraphs={[
              "親密性ビジネスと詐欺は、完全に分離できない。正常なサービスであっても、利用者の孤独、欲望、承認欲求、秘密を収益化する。",
            ]}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {BOUNDARY_CHECKS.map((check, index) => (
              <FadeInOnScroll key={check.id} delayMs={index * 40}>
                <article className="h-full rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-4">
                  <h3 className="annotation text-[var(--accent-violet)]">
                    {check.title}
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {check.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-[var(--ink-muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeInOnScroll>
            ))}
          </div>
        </Section>

        <Section id="s10" number="Section 10" title="AIは外向性を不要にする">
          <Prose
            paragraphs={[
              "従来、好奇心を実際の親密さへ変えるには、外向性が必要だった。相手に話しかける。拒絶される。自分をさらす。社会的な評判を引き受ける。",
              "しかし、AI人格はその摩擦を減らす。ただし同時に、その対話はサービス提供者によって記録・分析・課金される。",
            ]}
          />
          <BeforeAfterComparison
            before={{
              title: "以前",
              titleEn: "Before",
              items: ["開放性 × 外向性 → 現実の探索"],
            }}
            after={{
              title: "現在",
              titleEn: "After",
              items: ["開放性 × AIへのアクセス → 対話的・仮想的な探索"],
            }}
          />
        </Section>

        <Section id="s11" number="Section 11" title="好奇心の出口を誰が設計しているのか">
          <Prose
            paragraphs={[
              "人間が何に興味を持つかを規制することはできない。また、好奇心を抑圧することが安全につながるわけでもない。重要なのは、その出口の設計である。",
            ]}
          />
          <BulletList
            items={[
              "創作へ向かうのか",
              "自己理解へ向かうのか",
              "相互的な関係へ向かうのか",
              "継続課金へ向かうのか",
              "依存へ向かうのか",
              "送金や搾取へ向かうのか",
            ]}
          />
          <div className="mt-10 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] px-6 py-8">
            <ThesisQuote
              text={
                "問題は、何に興味を持つかではない。\nその好奇心の出口を、誰が設計しているかである。"
              }
              size="hero"
              className="border-none pl-0 text-center"
            />
          </div>
        </Section>
      </div>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <h2 className="annotation mb-5">Connected Observatories</h2>
        <ul className="flex flex-col gap-3">
          {CONNECTED_OBSERVATORIES.map((obs) => (
            <li key={obs.id}>
              <a
                href={obs.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
              >
                <p className="text-sm font-semibold">{obs.name}</p>
                <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
                  {obs.description}
                </p>
                <ExternalLink
                  className="mt-3 h-3.5 w-3.5 text-[var(--ink-faint)]"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <h2 className="annotation mb-3">Related Observations</h2>
        <ul className="flex flex-col gap-3">
          {RELATED_ARTICLES.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="group flex items-center justify-between rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
              >
                <span className="text-sm font-medium">{page.label}</span>
                <ArrowRight
                  className="h-4 w-4 text-[var(--ink-faint)] group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <h2 className="text-xl font-semibold tracking-tight">
          Who Designs the Exit?
        </h2>
        <p className="prose-ja mt-4 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
          好奇心は止められない。だからこそ、その出口を誰が、どのような意図で設計しているのかを観測する必要がある。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {CTA_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink-faint)] hover:bg-[var(--paper-raised)]"
              >
                {link.label}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center justify-center rounded-sm border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink-faint)] hover:bg-[var(--paper-raised)]"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </section>

      <aside className="mt-14 border-t border-[var(--border-subtle)] pt-8">
        <p className="annotation mb-3">Source Note</p>
        <p className="prose-ja text-sm leading-relaxed text-[var(--ink-faint)]">
          本稿は、ビッグファイブの開放性、擬似恋愛、AIコンパニオン、マッチングアプリ、クリエイターエコノミー、ロマンス詐欺に関する観測記録と報道を横断して整理したものである。特定のサービスの利用者数や効果を、検証済みの普遍的事実として断定しない。
        </p>
      </aside>
    </div>
  );
}
