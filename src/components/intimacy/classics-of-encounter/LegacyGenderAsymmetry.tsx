import { LEGACY_GENDER_OBSERVATION_AXES } from "@/data/encounter-legacy";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function LegacyGenderAsymmetry() {
  return (
    <section
      id="gender-asymmetry"
      className="border-b border-[var(--border)]"
      aria-labelledby="gender-asymmetry-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Gendered economics of participation</p>
          <h2
            id="gender-asymmetry-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            誰が払い、誰が呼び込まれるのか
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              多くの出会いサービスでは、利用料金や利用可能範囲が性別によって異なることがある。
            </p>
            <p>
              この非対称は、単なる値付けではない。
            </p>
            <p>
              一方の利用者に料金を課し、もう一方の参加障壁を下げることで、サービス内の人数比と接触量を調整する市場設計である。
            </p>
            <p>
              テレクラにも、店舗で待つ側と、外部から電話をかける側の非対称があった。
            </p>
            <p>
              現在は、その構造が入店料や通話料ではなく、ポイント、無料範囲、送信権、可視性へ置き換えられている。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <div className="mt-10 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6">
            <h3 className="annotation mb-4">Observation axes / 観測軸</h3>
            <p className="mb-4 text-sm text-[var(--ink-faint)]">
              以下は固定的な結論ではなく、サービス設計を読むための問いです。
            </p>
            <ul className="flex flex-col gap-3">
              {LEGACY_GENDER_OBSERVATION_AXES.map((axis) => (
                <li
                  key={axis.id}
                  className="border-b border-[var(--border-subtle)] pb-3 last:border-0"
                >
                  <p className="text-sm font-medium text-[var(--ink-muted)]">
                    {axis.labelJa}
                  </p>
                  <p className="annotation mt-0.5 text-[0.65rem]">
                    {axis.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              出会いの市場では、
              <br />
              利用者は顧客であると同時に、
              <br />
              他の利用者を呼び込む供給でもある。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
