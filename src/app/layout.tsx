import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: "SendCraft - 文章を書く。それ以外は、全部代行。",
  description: "営業メール配信に必要な「文章推敲」「HTMLメール制作」「配信インフラ」「営業リスト」の4つを丸ごと代行。下書きをペーストするだけで、AIが推敲・整形し、今日から新規営業を始められます。本来3ヶ月かかる準備を、30秒で。",
  keywords: "営業メール 代行, AI 文章推敲, HTMLメール 自動作成, メール配信インフラ, 営業リスト 150万件, BtoB メール配信, 新規営業 メール",
  authors: [{ name: "SendCraft" }],
  creator: "SendCraft",
  publisher: "SendCraft",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "SendCraft - 文章を書く。それ以外は、全部代行。",
    description: "営業メール配信に必要な4つの専門機能を丸ごと代行。本来3ヶ月かかる準備を、30秒で。",
    type: "website",
    url: "https://sendcraft.jp",
    siteName: "SendCraft",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "SendCraft - 文章を書く。それ以外は、全部代行。",
    description: "営業メール配信に必要な4つの機能を丸ごと代行。下書きをペーストするだけで、今日から新規営業を開始。",
    creator: "@sendcraft",
    site: "@sendcraft",
  },
  alternates: {
    canonical: "https://sendcraft.jp",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className={notoSansJP.className}>
        {children}
      </body>
    </html>
  );
}
