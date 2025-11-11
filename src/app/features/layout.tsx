import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '機能紹介 | フォーム営業モーヤメ - AI推敲・HTML制作・配信インフラ・営業リスト',
  description: 'フォーム営業モーヤメの主要機能をご紹介。AI推敲機能で文章を自動改善、HTMLメール制作を5秒で完了、到達率95%以上の配信インフラ、150万件の業種別営業リストなど、営業メール配信に必要な4つの機能を丸ごと代行。',
  keywords: '営業メール AI推敲, HTMLメール 自動作成, メール配信インフラ, 営業リスト 150万件, 到達率95%',
  openGraph: {
    title: '機能紹介 | フォーム営業モーヤメ',
    description: 'AI推敲・HTML制作・配信インフラ・営業リストの4つを丸ごと代行。',
    type: 'website',
    url: 'https://form-eigyo-moyame.jp/features',
  },
  twitter: {
    card: 'summary_large_image',
    title: '機能紹介 | フォーム営業モーヤメ',
    description: '文章推敲・HTML制作・配信インフラ・営業リストを全て代行。',
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
