import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ゆるいプレイ記録のフロントマター定義(必須は title と date だけ)
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),                       // ゲームタイトル or 記事タイトル
    date: z.coerce.date(),                   // 日付
    platform: z.string().optional(),         // Switch / PS5 / PC など
    status: z.enum(['クリア', 'プレイ中', '積みゲー', '中断']).optional(),
    playtime: z.string().optional(),         // 例: "約40時間"
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),          // 一覧に出るひとこと(省略可)
    cover: z.string().optional(),            // カバー画像 例: "/images/xxx.jpg"(省略すると色グラデーション)
    draft: z.boolean().default(false),       // true なら非公開
  }),
});

export const collections = { posts };
