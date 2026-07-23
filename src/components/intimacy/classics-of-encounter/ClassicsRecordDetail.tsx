import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { EncounterRecord } from "@/types/encounter-classics";
import { getObservationLayer } from "@/config/observation-layers";
import {
  encounterStatusLabel,
  encounterStatusTone,
} from "@/lib/encounter-classics-display";
import {
  getAdjacentImmediateCasualRecords,
  getAdjacentInternationalRecords,
  getAdjacentLegacyRecords,
  getAdjacentMassMarketRecords,
  getAdjacentMarriageIdentityRecords,
  getAdjacentPublicMunicipalRecords,
  getAdjacentVanishedRecords,
  getCategoryBackLabel,
  getCategoryPageHref,
  getEncounterCategoryById,
  getImmediateCasualRecordNumber,
  getInternationalRecordNumber,
  getLegacyRecordNumber,
  getMarriageIdentityRecordNumber,
  getMassMarketRecordNumber,
  getPublicMunicipalRecordNumber,
  getRelatedArticlesForEncounter,
  getRelatedEncountersForEncounter,
  getRelatedObservationsForEncounter,
  getVanishedRecordNumber,
} from "@/lib/encounter-classics";
import { LEGACY_USER_UNCERTAINTY } from "@/data/encounter-legacy";
import { MASS_MARKET_USER_UNCERTAINTY } from "@/data/encounter-mass-market";
import { IMMEDIATE_USER_UNCERTAINTY } from "@/data/encounter-immediate-casual";
import { INTERNATIONAL_USER_UNCERTAINTY } from "@/data/encounter-international";
import { PUBLIC_USER_UNCERTAINTY } from "@/data/encounter-public-municipal";
import { MARRIAGE_IDENTITY_USER_UNCERTAINTY } from "@/data/encounter-marriage-identity";
import { EncounterSafetyRisk } from "./EncounterSafetyRisk";

type FieldProps = {
  label: string;
  labelJa?: string;
  value: string;
};

function ObservationField({ label, labelJa, value }: FieldProps) {
  return (
    <div className="border-b border-[var(--border-subtle)] py-5 last:border-0">
      <dt className="annotation mb-2">
        {labelJa ?? label}
        {labelJa ? (
          <span className="ml-1 text-[0.6rem] text-[var(--ink-faint)]">
            {label}
          </span>
        ) : null}
      </dt>
      <dd className="prose-ja text-sm text-[var(--ink-muted)]">{value}</dd>
    </div>
  );
}

function ListField({
  label,
  labelJa,
  items,
}: {
  label: string;
  labelJa?: string;
  items: string[];
}) {
  return (
    <div className="border-b border-[var(--border-subtle)] py-5 last:border-0">
      <dt className="annotation mb-2">
        {labelJa ?? label}
        {labelJa ? (
          <span className="ml-1 text-[0.6rem] text-[var(--ink-faint)]">
            {label}
          </span>
        ) : null}
      </dt>
      <dd>
        <ul className="flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-xs text-[var(--ink-muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

export function ClassicsRecordDetail({ record }: { record: EncounterRecord }) {
  const category = getEncounterCategoryById(record.categoryId);
  const status = encounterStatusLabel[record.status];
  const relatedObservations = getRelatedObservationsForEncounter(record);
  const relatedArticles = getRelatedArticlesForEncounter(record);
  const relatedEncounters = getRelatedEncountersForEncounter(record);
  const isVanished = record.categoryId === "vanished-systems";
  const isLegacy = record.categoryId === "legacy-dating-services";
  const isMassMarket = record.categoryId === "mass-market-matching";
  const isImmediateCasual = record.categoryId === "immediate-casual";
  const isInternational = record.categoryId === "international-cross-border";
  const isPublicMunicipal = record.categoryId === "public-municipal";
  const isMarriageIdentity = record.categoryId === "marriage-identity-specific";
  const isExtendedRecord =
    isLegacy ||
    isMassMarket ||
    isImmediateCasual ||
    isInternational ||
    isPublicMunicipal ||
    isMarriageIdentity;
  const recordNumber = isVanished
    ? getVanishedRecordNumber(record.slug)
    : isLegacy
      ? getLegacyRecordNumber(record.slug)
      : isMassMarket
        ? getMassMarketRecordNumber(record.slug)
        : isImmediateCasual
          ? getImmediateCasualRecordNumber(record.slug)
          : isInternational
            ? getInternationalRecordNumber(record.slug)
            : isPublicMunicipal
              ? getPublicMunicipalRecordNumber(record.slug)
              : isMarriageIdentity
                ? getMarriageIdentityRecordNumber(record.slug)
                : undefined;
  const { prev, next } = isVanished
    ? getAdjacentVanishedRecords(record.slug)
    : isLegacy
      ? getAdjacentLegacyRecords(record.slug)
      : isMassMarket
        ? getAdjacentMassMarketRecords(record.slug)
        : isImmediateCasual
          ? getAdjacentImmediateCasualRecords(record.slug)
          : isInternational
            ? getAdjacentInternationalRecords(record.slug)
            : isPublicMunicipal
              ? getAdjacentPublicMunicipalRecords(record.slug)
              : isMarriageIdentity
                ? getAdjacentMarriageIdentityRecords(record.slug)
                : {};
  const categoryHref = getCategoryPageHref(record.categoryId);

  return (
    <article>
      <nav aria-label="Breadcrumb" className="mb-8 text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-[var(--ink-faint)]">
          <li>
            <Link
              href="/classics-of-encounter"
              className="hover:text-[var(--ink-muted)]"
            >
              出会いの古典と現在
            </Link>
          </li>
          {category ? (
            <>
              <li aria-hidden>/</li>
              <li>
                <Link href={categoryHref} className="hover:text-[var(--ink-muted)]">
                  {category.title}
                </Link>
              </li>
            </>
          ) : null}
          <li aria-hidden>/</li>
          <li className="text-[var(--ink-muted)]" aria-current="page">
            {record.name}
          </li>
        </ol>
      </nav>

      <header className="mb-12 border-b border-[var(--border-subtle)] pb-10">
        {recordNumber ? (
          <p
            className="mb-4 font-mono text-sm tabular-nums text-[var(--ink-faint)]"
            aria-label={`記録番号 ${recordNumber}`}
          >
            Record {String(recordNumber).padStart(2, "0")}
          </p>
        ) : null}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-sm px-2 py-0.5 text-[0.65rem] font-medium ${encounterStatusTone(record.status)}`}
          >
            {status.en} / {status.ja}
          </span>
          {category ? (
            <span className="text-[0.65rem] text-[var(--ink-faint)]">
              {category.title}
            </span>
          ) : null}
        </div>
        <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
          {record.name}
        </h1>
        {record.englishName ? (
          <p className="mt-2 text-lg text-[var(--ink-faint)]">
            {record.englishName}
          </p>
        ) : null}
        <p className="annotation mt-4">{record.era}</p>
        <p className="prose-ja mt-6 text-[var(--ink-muted)]">{record.summary}</p>
      </header>

      {record.observation[0] ? (
        <section
          aria-labelledby="primary-observation-heading"
          className="mb-12 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6"
        >
          <h2 id="primary-observation-heading" className="annotation mb-4">
            Primary observation / 主要観測
          </h2>
          <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            {record.observation[0]}
          </p>
        </section>
      ) : null}

      <dl className="mb-12">
        {(isExtendedRecord || record.interface?.length) && record.interface?.length ? (
          <>
            {isExtendedRecord ? (
              <div className="mb-8">
                <h2 className="annotation mb-4 border-b border-[var(--border-subtle)] pb-3">
                  Interface / インターフェース
                </h2>
              </div>
            ) : null}
            <ListField
              label="Interface"
              labelJa="インターフェース"
              items={record.interface}
            />
          </>
        ) : null}
        {record.entryCondition ? (
          <ObservationField
            label="Entry condition"
            labelJa="参加条件"
            value={record.entryCondition}
          />
        ) : null}
        {record.timeStructure ? (
          <ObservationField
            label="Time structure"
            labelJa="時間構造"
            value={record.timeStructure}
          />
        ) : null}
        {record.geographicStructure ? (
          <ObservationField
            label="Geographic structure"
            labelJa="地理的構造"
            value={record.geographicStructure}
          />
        ) : null}
        {record.identityStructure ? (
          <ObservationField
            label="Identity structure"
            labelJa="身元構造"
            value={record.identityStructure}
          />
        ) : null}
        {isExtendedRecord ? (
          <div className="mb-8 mt-8">
            <h2 className="annotation mb-4 border-b border-[var(--border-subtle)] pb-3">
              Economy / 接触の経済
            </h2>
          </div>
        ) : null}
        <ObservationField
          label="What it promised"
          labelJa="約束したこと"
          value={record.whatItPromised}
        />
        <ObservationField
          label="What it actually sold"
          labelJa="実際に売っていたこと"
          value={record.whatItActuallySold}
        />
        <ObservationField
          label="Who was visible"
          labelJa="可視化されていた人"
          value={record.whoWasVisible}
        />
        <ObservationField
          label="Who remained invisible"
          labelJa="不可視のままだった人"
          value={record.whoRemainedInvisible}
        />
        <ObservationField
          label="How chance was produced"
          labelJa="偶然の生成"
          value={record.howChanceWasProduced}
        />
        <ObservationField
          label="How trust was produced"
          labelJa="信頼の生成"
          value={record.howTrustWasProduced}
        />
        <ObservationField
          label="How desire was framed"
          labelJa="欲望の枠組み"
          value={record.howDesireWasFramed}
        />
        {record.contactLogic ? (
          <ObservationField
            label="Contact logic"
            labelJa="接触の論理"
            value={record.contactLogic}
          />
        ) : null}
        {record.matchingRequirement ? (
          <ObservationField
            label="Matching requirement"
            labelJa="マッチ要件"
            value={record.matchingRequirement}
          />
        ) : null}
        <ObservationField
          label="Payment logic"
          labelJa="課金構造"
          value={record.paymentLogic}
        />
        {record.visibilityLogic ? (
          <ObservationField
            label="Visibility logic"
            labelJa="可視性の論理"
            value={record.visibilityLogic}
          />
        ) : null}
        {record.genderedPricing ? (
          <ObservationField
            label="Gendered pricing"
            labelJa="ジェンダー非対称の料金"
            value={record.genderedPricing}
          />
        ) : null}
        {record.repetitionLogic ? (
          <ObservationField
            label="Repetition logic"
            labelJa="反復利用の論理"
            value={record.repetitionLogic}
          />
        ) : null}
        {record.platformStructure ? (
          <ObservationField
            label="Platform structure"
            labelJa="プラットフォーム構造"
            value={record.platformStructure}
          />
        ) : null}
        {!isExtendedRecord && record.risks?.length ? (
          <ListField label="Risks" labelJa="リスク" items={record.risks} />
        ) : null}
        {!isExtendedRecord && record.whyItDisappeared?.length ? (
          <ListField
            label="Why it disappeared"
            labelJa="消滅理由"
            items={record.whyItDisappeared}
          />
        ) : null}
        {isExtendedRecord ? (
          <div className="mb-8 mt-8">
            <h2 className="annotation mb-4 border-b border-[var(--border-subtle)] pb-3">
              Historical lineage / 系譜
            </h2>
          </div>
        ) : null}
        {record.whyItSurvived?.length ? (
          <ListField
            label="Why it survived"
            labelJa="存続理由"
            items={record.whyItSurvived}
          />
        ) : null}
        <ListField
          label="What came before"
          labelJa="前身"
          items={record.whatCameBefore}
        />
        {record.whatCameAfter?.length ? (
          <ListField
            label="What came after"
            labelJa="後継"
            items={record.whatCameAfter}
          />
        ) : null}
        {record.whatMayComeAfter?.length ? (
          <ListField
            label="What may come after"
            labelJa="今後の可能性"
            items={record.whatMayComeAfter}
          />
        ) : null}
        {record.whatRemainsToday?.length ? (
          <ListField
            label="What remains today"
            labelJa="今日に残るもの"
            items={record.whatRemainsToday}
          />
        ) : null}
      </dl>

      {isExtendedRecord ? (
        <EncounterSafetyRisk
          platformMechanisms={record.safetyMechanisms}
          structuralRisks={record.risks}
          userUncertainty={
            isLegacy
              ? LEGACY_USER_UNCERTAINTY
              : isMassMarket
                ? MASS_MARKET_USER_UNCERTAINTY
                : isInternational
                  ? INTERNATIONAL_USER_UNCERTAINTY
                  : isPublicMunicipal
                    ? PUBLIC_USER_UNCERTAINTY
                    : isMarriageIdentity
                      ? MARRIAGE_IDENTITY_USER_UNCERTAINTY
                      : IMMEDIATE_USER_UNCERTAINTY
          }
        />
      ) : null}

      {!isExtendedRecord && record.risks?.length && record.safetyMechanisms?.length ? (
        <EncounterSafetyRisk
          platformMechanisms={record.safetyMechanisms}
          structuralRisks={record.risks}
        />
      ) : null}

      {record.observation.length > 1 ? (
        <section aria-labelledby="observation-text-heading" className="mb-12">
          <h2
            id="observation-text-heading"
            className="annotation mb-6 text-[var(--accent-violet)]"
          >
            Related observations / 関連観測
          </h2>
          <div className="flex flex-col gap-5">
            {record.observation.slice(1).map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      <section aria-labelledby="related-layers-heading" className="mb-12">
        <h2 id="related-layers-heading" className="annotation mb-4">
          Related layers
        </h2>
        <ul className="flex flex-wrap gap-2">
          {record.relatedLayers.map((layerId) => {
            const layer = getObservationLayer(layerId);
            if (!layer) return null;
            const isInternal = layerId === "intimacy";
            const href = isInternal ? "/" : layer.url;

            if (href) {
              const external = !isInternal;
              return (
                <li key={layerId}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-1 rounded-sm border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--ink-muted)] transition-colors hover:border-[var(--ink-faint)] hover:text-[var(--ink)]"
                  >
                    {layer.name}
                    {external ? (
                      <ExternalLink className="h-3 w-3" aria-hidden />
                    ) : null}
                  </a>
                </li>
              );
            }

            return (
              <li
                key={layerId}
                className="rounded-sm border border-[var(--border-subtle)] px-3 py-1.5 text-sm text-[var(--ink-faint)]"
              >
                {layer.name}
              </li>
            );
          })}
        </ul>
      </section>

      {relatedObservations.length > 0 ? (
        <section className="mb-10 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-4">
            Intimacy Observations / 関連観測
          </h2>
          <ul className="flex flex-col gap-3">
            {relatedObservations.map((o) => (
              <li key={o.id}>
                <Link
                  href={`/observations/${o.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
                >
                  <div>
                    <p className="text-xs text-[var(--ink-faint)]">{o.title}</p>
                    <p className="mt-0.5 text-sm font-medium">{o.titleJa}</p>
                  </div>
                  <ArrowRight
                    className="mt-1 h-4 w-4 shrink-0 text-[var(--ink-faint)] group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {relatedArticles.length > 0 ? (
        <section className="mb-10 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-4">Related Articles / 関連記事</h2>
          <ul className="flex flex-col gap-3">
            {relatedArticles.map((a) => (
              <li key={a.id}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group flex items-center justify-between rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
                >
                  <span className="text-sm font-medium">{a.title}</span>
                  <ArrowRight
                    className="h-4 w-4 text-[var(--ink-faint)] group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {relatedEncounters.length > 0 ? (
        <section className="mb-10 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-4">
            Related encounters / 関連装置
          </h2>
          <ul className="flex flex-col gap-3">
            {relatedEncounters.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/classics-of-encounter/${r.slug}`}
                  className="group flex items-center justify-between rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
                >
                  <span className="text-sm font-medium">{r.name}</span>
                  <ArrowRight
                    className="h-4 w-4 text-[var(--ink-faint)] group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {record.crossCategoryLinks?.length ? (
        <section className="mb-10 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-4">Cross-category / カテゴリ横断</h2>
          <ul className="flex flex-col gap-4">
            {record.crossCategoryLinks.map((link) => (
              <li key={link.categoryId}>
                <p className="prose-ja mb-2 text-sm text-[var(--ink-muted)]">
                  {link.note}
                </p>
                <Link
                  href={getCategoryPageHref(link.categoryId)}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)]"
                >
                  {link.label}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {isVanished || isExtendedRecord ? (
        <footer className="border-t border-[var(--border-subtle)] pt-10">
          <nav
            aria-label="前後の観測記録"
            className="mb-8 grid gap-4 sm:grid-cols-2"
          >
            {prev ? (
              <Link
                href={`/classics-of-encounter/${prev.slug}`}
                className="group flex flex-col rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
              >
                <span className="annotation mb-1 inline-flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" aria-hidden />
                  Previous
                </span>
                <span className="text-sm font-medium">{prev.name}</span>
              </Link>
            ) : (
              <div aria-hidden />
            )}
            {next ? (
              <Link
                href={`/classics-of-encounter/${next.slug}`}
                className="group flex flex-col rounded-sm border border-[var(--border)] p-4 text-right hover:border-[var(--ink-faint)] sm:col-start-2"
              >
                <span className="annotation mb-1 inline-flex items-center justify-end gap-1">
                  Next
                  <ArrowRight className="h-3 w-3" aria-hidden />
                </span>
                <span className="text-sm font-medium">{next.name}</span>
              </Link>
            ) : null}
          </nav>
          <Link
            href={categoryHref}
            className="inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            {getCategoryBackLabel(record.categoryId) ??
              (isVanished
                ? "消えた出会いの装置に戻る"
                : "出会いの古典と現在に戻る")}
          </Link>
        </footer>
      ) : null}
    </article>
  );
}
