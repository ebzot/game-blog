# EBZOのセーブポイント(ゲームの記録ブログ)

遊んだゲームを、ゆるく書き留めるための Astro 製の静的ブログです。評価(星)などはありません。

## 使い方

```bash
npm install
npm run dev      # http://localhost:4321 で確認
npm run build    # dist/ に静的ファイルを生成
```

## 記事の書き方

`src/content/posts/` に Markdown ファイルを追加するだけです。
`_template.md.example` をコピーして `.md` にリネームして使ってください。

必須なのは `title` と `date` だけで、あとは全部省略できます。

| 項目 | 内容 |
|---|---|
| title | ゲームタイトル(または記事タイトル) |
| date | 日付 |
| platform | Switch / PS5 / PC など(省略可) |
| status | クリア / プレイ中 / 積みゲー / 中断(省略可) |
| playtime | 例: 約10時間(省略可) |
| tags | タグ(省略可) |
| summary | 一覧に出るひとこと(省略可) |
| cover | カバー画像のパス(省略すると色グラデーション) |
| draft | `true` の間は非公開 |

画像は `public/images/` に置き、記事内で `![説明](/images/xxx.jpg)` と書きます。
(GitHub Pages で `base` を設定する場合はパスの先頭に `base` が必要です)

## 公開

1. `astro.config.mjs` の `site`(GitHub Pages の場合は `base` も)を自分のURLに変更
2. GitHub にpushし、Cloudflare Pages / Vercel / Netlify などでリポジトリを接続
   - ビルドコマンド: `npm run build`
   - 出力ディレクトリ: `dist`

## カスタマイズ

- サイト名・キャッチコピー: `src/layouts/BaseLayout.astro`
- プロフィール: `src/components/Sidebar.astro`
- 色・見た目: `src/styles/global.css`(末尾がダークテーマ)
- サンプル記事(`sample-*.md`)は削除して構いません
