import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "SendCraft - 営業メールを最短30秒で作成・配信",
  description: "文章をペーストして「CSS強化」を押すだけ。SONNETがプロ品質のHTML＆インラインCSSに整形。業種別に最適な相手へ、感じよく届きます。",
  keywords: "営業メール, HTMLメール, メール作成ツール, CSS整形, メール配信",
  openGraph: {
    title: "SendCraft - 営業メールを最短30秒で作成・配信",
    description: "文章をペーストして「CSS強化」を押すだけ。プロ品質のHTMLメールが即完成。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
