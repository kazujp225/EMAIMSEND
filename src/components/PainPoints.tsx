'use client';

import Link from 'next/link';

export default function PainPoints() {
  const painPoints = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: 'リファラルだけでは限界。でも新規開拓の準備に3ヶ月もかけられない',
      highlight: '3ヶ月 → 30秒',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      text: 'HTMLメールを作りたいが、デザイナーもエンジニアもいない',
      highlight: 'AIが5秒で制作',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      text: 'メール配信ツールを導入したが、設定が複雑で使いこなせない',
      highlight: '設定不要',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      text: '営業リストの収集・整理だけで月100時間かかっている',
      highlight: '150万件準備済み',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
        </svg>
      ),
      text: '到達率が低く、スパム扱いされてしまう',
      highlight: '到達率95%以上',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      text: '営業メールの文章力に自信がなく、改善方法もわからない',
      highlight: 'AIが自動推敲',
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
            こんなお悩み、ありませんか？
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            新規営業を始めたいのに、<br />
            <span className="text-gradient">準備で挫折</span>していませんか？
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            リファラル営業の限界を感じても、メール営業の準備には専門知識・時間・コストが必要です。<br />
            SendCraftなら、これらすべての課題を解決します。
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border-2 border-neutral-200 hover:border-secondary-300 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 text-secondary-600 rounded-xl flex items-center justify-center group-hover:bg-secondary-200 transition-colors">
                  {point.icon}
                </div>
                <div className="flex-1">
                  <p className="text-neutral-700 leading-relaxed mb-3">
                    {point.text}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-semibold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {point.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            これらすべての課題を、<br className="md:hidden" />SendCraftが解決します
          </h3>
          <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
            文章を書く。それ以外は、全部代行。<br />
            本来3ヶ月かかる準備を、30秒で完了できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/signup"
              className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
            >
              無料で1通送ってみる
            </Link>
            <Link
              href="/features"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-primary-600 transition-all"
            >
              機能詳細を見る
            </Link>
          </div>
          <p className="text-sm text-primary-200 mt-6">
            クレジットカード不要 • 今すぐ開始 • 設定作業なし
          </p>
        </div>
      </div>
    </section>
  );
}
