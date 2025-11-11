import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | フォーム営業モーヤメ - 営業メール配信代行サービス',
  description: 'フォーム営業モーヤメに関するご質問やご相談はこちらから。通常1営業日以内にご返信いたします。営業メール配信代行サービスの導入相談、料金プランのご質問などお気軽にお問い合わせください。',
  keywords: 'フォーム営業モーヤメ お問い合わせ, 営業メール 相談, メール配信 問い合わせ, 導入相談',
  openGraph: {
    title: 'お問い合わせ | フォーム営業モーヤメ',
    description: '通常1営業日以内にご返信。お気軽にお問い合わせください。',
    type: 'website',
    url: 'https://form-eigyo-moyame.jp/contact',
  },
  twitter: {
    card: 'summary',
    title: 'お問い合わせ | フォーム営業モーヤメ',
    description: 'フォーム営業モーヤメに関するご質問やご相談はこちらから。',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
