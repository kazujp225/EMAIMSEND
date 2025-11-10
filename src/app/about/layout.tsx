import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社概要 | SendCraft - 営業メール配信の新しい基準を作る',
  description: 'SendCraftは、営業メールの作成・整形・送信を最短30秒で完了できるSaaSプラットフォームです。ミッション、ビジョン、チーム、パートナー企業など、SendCraftについて詳しくご紹介します。',
  keywords: 'SendCraft 会社概要, 営業メール SaaS, メール配信 企業情報, SendCraft チーム',
  openGraph: {
    title: '会社概要 | SendCraft',
    description: '営業メール配信の新しい基準を作る。SendCraftのミッション、ビジョン、チームをご紹介。',
    type: 'website',
    url: 'https://sendcraft.jp/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: '会社概要 | SendCraft',
    description: '営業メールの作成・整形・送信を最短30秒で。',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
