import { defineConfig } from 'astro/config';

// 公開先に合わせて site / base を変更してください。
// 例) GitHub Pages(https://ユーザー名.github.io/リポジトリ名/)の場合:
//   site: 'https://ユーザー名.github.io',
//   base: '/リポジトリ名',
// Cloudflare Pages / Vercel / Netlify の場合は base は不要です。
export default defineConfig({
  site: 'https://example.com',
});
