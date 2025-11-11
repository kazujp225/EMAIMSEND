'use client';

import Link from 'next/link';

export default function PainPoints() {
  const painPoints = [
    {
      problem: 'リファラルだけでは限界。でも新規開拓の準備に3ヶ月もかけられない',
      solution: '本来3ヶ月かかる準備を30秒で完了',
    },
    {
      problem: 'HTMLメールを作りたいが、デザイナーもエンジニアもいない',
      solution: 'AIが5秒でプロ品質のHTMLに自動変換',
    },
    {
      problem: 'メール配信ツールを導入したが、設定が複雑で使いこなせない',
      solution: '専門知識不要。設定なしで今すぐ使える',
    },
    {
      problem: '営業リストの収集・整理だけで月100時間かかっている',
      solution: '業種別に分類済みの150万件リストを提供',
    },
    {
      problem: '到達率が低く、スパム扱いされてしまう',
      solution: '専業インフラで到達率95%以上を実現',
    },
    {
      problem: '営業メールの文章力に自信がなく、改善方法もわからない',
      solution: 'AIが自動で推敲し、業種別に最適化',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-sm text-neutral-500 mb-3">よくあるお悩み</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
            新規営業を始めたいのに、<br />
            準備で挫折していませんか？
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            リファラル営業の限界を感じても、メール営業の準備には専門知識・時間・コストが必要です。SendCraftなら、これらすべての課題を解決します。
          </p>
        </div>

        {/* Pain Points List */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="border-l-4 border-neutral-200 pl-6 py-2"
            >
              <div className="mb-3">
                <span className="text-neutral-400 text-sm mr-2">課題</span>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {point.problem}
                </p>
              </div>
              <div className="pl-4">
                <span className="text-primary-600 text-sm mr-2">→</span>
                <span className="text-neutral-900 font-medium">
                  {point.solution}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="max-w-3xl mx-auto text-center border-t border-neutral-200 pt-12">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            これらすべての課題を、SendCraftが解決します
          </h3>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            文章を書く。それ以外は、全部代行。<br />
            本来3ヶ月かかる準備を、30秒で完了できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/order"
              className="bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              無料で1通送ってみる
            </Link>
            <Link
              href="/features"
              className="text-neutral-700 font-semibold px-8 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              機能詳細を見る
            </Link>
          </div>
          <p className="text-sm text-neutral-500 mt-6">
            クレジットカード不要・今すぐ開始・設定作業なし
          </p>
        </div>
      </div>
    </section>
  );
}
