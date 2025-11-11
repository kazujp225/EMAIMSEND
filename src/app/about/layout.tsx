import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社概要 | フォーム営業モーヤメ - 営業メール配信の新しい基準を作る',
  description: 'フォーム営業モーヤメは、営業メールの作成・整形・送信を最短30秒で完了できるSaaSプラットフォームです。ミッション、ビジョン、チーム、パートナー企業など、フォーム営業モーヤメについて詳しくご紹介します。',
  keywords: 'フォーム営業モーヤメ 会社概要, 営業メール SaaS, メール配信 企業情報, フォーム営業モーヤメ チーム',
  openGraph: {
    title: '会社概要 | フォーム営業モーヤメ',
    description: '営業メール配信の新しい基準を作る。フォーム営業モーヤメのミッション、ビジョン、チームをご紹介。',
    type: 'website',
    url: 'https://form-eigyo-moyame.jp/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: '会社概要 | フォーム営業モーヤメ',
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
