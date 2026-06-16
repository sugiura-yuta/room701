# Room701 — Yuta Sugiura Portfolio

「Security × Legal Mind」を掲げる杉浦悠太のポートフォリオサイト。
複雑なドメイン（介護・金融）を構造化し、セキュリティとリーガルマインドを織り込んだ
設計・実装の実績を発信する。

- 本番URL: https://site.room701.workers.dev
- 技術スタック: Astro v6 / Tailwind CSS v4 / TypeScript
- ホスティング: Cloudflare Workers

## ディレクトリ構成

```text
src/
├── components/   ヘッダー・フッター・コンタクト等の共通UI
├── content/
│   ├── blog/     技術記事（Markdown / MDX）
│   └── works/    実績ケース（Markdown）
├── layouts/      記事・実績ページのレイアウト
├── pages/        ルーティング（index / about / blog / works）
└── styles/       グローバルCSS
```

実績は `src/content/works/`、ブログは `src/content/blog/` に Markdown を追加するだけで増やせる。
各ファイルの frontmatter スキーマは `src/content.config.ts` を参照。

## コマンド

| コマンド | 内容 |
| :--- | :--- |
| `pnpm install` | 依存をインストール |
| `pnpm dev` | 開発サーバ起動（`localhost:4321`） |
| `pnpm build` | `./dist/` へ本番ビルド |
| `pnpm preview` | ビルド結果をローカルプレビュー |
