import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '料金プラン | フォーム営業モーヤメ - 営業メール配信代行サービス',
  description: '市場価格の20%安で、プロ品質の営業メールを。無料プランからスタート可能。月額34,800円〜、送信通数3,000通から。クレジットカード不要で今すぐ始められます。',
  keywords: '営業メール 料金, メール配信 価格, HTMLメール作成 費用, メール代行 料金プラン',
  openGraph: {
    title: '料金プラン | フォーム営業モーヤメ',
    description: '市場価格の20%安。無料プランからスタートして、必要に応じてスケール可能。',
    type: 'website',
    url: 'https://form-eigyo-moyame.jp/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: '料金プラン | フォーム営業モーヤメ',
    description: '市場価格の20%安で、プロ品質の営業メールを。無料プランあり。',
  },
};

export default function PricingPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24 pb-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            シンプルで<span className="text-gradient">透明性のある</span>料金
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
            市場価格の20%安で、プロ品質の営業メールを。<br />
            無料プランからスタートして、必要に応じてスケールできます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/order"
              className="btn-primary text-lg px-8 py-4"
            >
              今すぐ申し込む
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-lg px-8 py-4"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Component */}
      <Pricing />

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            まずは無料で試してみませんか？
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            クレジットカード不要。1通のメール送信で、フォーム営業モーヤメの品質を体験できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/order"
              className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
            >
              今すぐ申し込む
            </Link>
            <Link
              href="/order"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-primary-600 transition-all"
            >
              お見積もり・発注
            </Link>
          </div>
          <p className="text-sm text-primary-200 mt-6">
            14日間の無料トライアル • いつでも解約可能 • クレジットカード不要
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
