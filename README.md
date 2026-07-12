# Intimacy Observatory / 親密性の観測所

恋愛、結婚、AI、ペット、高齢者、死別、ジェンダー、家族制度——人が誰と、何と、親密な関係を結び始めているのかを記録する観測所。

> **Scam Folklore Observatory（詐欺民俗観測所）とは別プロジェクトです。** 関連プロジェクトとしてリンクしています。

## 技術スタック

- Next.js 16（App Router）
- TypeScript
- Tailwind CSS v4

## 起動

```bash
npm install
npm run dev
```

http://localhost:3000 を開く。

## ページ

| パス | 内容 |
| --- | --- |
| `/` | トップ（観測軸・最新記事・最新観測） |
| `/observations` | 観測記録一覧 |
| `/observations/[slug]` | 観測詳細 |
| `/articles` | 考察記事一覧 |
| `/articles/[slug]` | 記事詳細 |
| `/questions` | 未解決の問い |
| `/about` | この観測所について |
| `/related-projects` | 関連プロジェクト |
| `/privacy` | プライバシー |
| `/sources` | 出典方針 |

## Vercel へのデプロイ

1. リポジトリを GitHub に push
2. [Vercel](https://vercel.com) で **Import Project**
3. Framework Preset: **Next.js**
4. Deploy

## ビルド確認

```bash
npm run typecheck
npm run build
```
