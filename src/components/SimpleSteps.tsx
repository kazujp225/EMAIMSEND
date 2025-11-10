'use client';

import Link from 'next/link';

export default function SimpleSteps() {
  const steps = [
    {
      number: '01',
      time: '0:00',
      title: '30秒で無料登録',
      description: 'クレジットカード不要。名前とメールアドレスだけで今すぐ開始できます。',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      details: [
        '名前',
        'メールアドレス',
        'パスワード設定',
      ],
      color: 'primary',
    },
    {
      number: '02',
      time: '0:10',
      title: '下書きをペースト',
      description: '普段のメール文章をそのままペーストするだけ。特別な書き方は不要です。',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      details: [
        'AIが自動で文章推敲',
        'プロ品質のHTMLに変換',
        '業種別に最適化',
      ],
      color: 'secondary',
    },
    {
      number: '03',
      time: '0:30',
      title: 'プレビュー確認して送信',
      description: 'PC・スマホでの見え方を確認。問題なければワンクリックで送信完了。',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
        </svg>
      ),
      details: [
        'リアルタイムプレビュー',
        'PC・モバイル対応確認',
        'ワンクリック送信',
      ],
      color: 'primary',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            導入までの流れ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            最短1分で、<br className="md:hidden" />
            <span className="text-gradient">最初のメール送信</span>完了
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            複雑な設定は一切不要。登録から送信まで、たったの3ステップ。<br />
            今すぐプロ品質の営業メールを送り始められます。
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-16 top-32 w-0.5 h-24 bg-gradient-to-b from-primary-300 to-primary-200" />
              )}

              <div className="flex flex-col md:flex-row gap-6 mb-8 md:mb-16">
                {/* Icon & Number */}
                <div className="flex-shrink-0 md:w-32">
                  <div className={`relative w-32 h-32 mx-auto md:mx-0 bg-gradient-to-br ${
                    step.color === 'primary'
                      ? 'from-primary-500 to-primary-600'
                      : 'from-secondary-500 to-secondary-600'
                  } rounded-2xl flex items-center justify-center text-white shadow-xl`}>
                    {step.icon}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className={`mt-4 text-center md:text-left font-mono text-2xl font-bold ${
                    step.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'
                  }`}>
                    {step.time}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-200">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full ${
                          step.color === 'primary' ? 'bg-primary-100' : 'bg-secondary-100'
                        } flex items-center justify-center`}>
                          <svg className={`w-4 h-4 ${
                            step.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-neutral-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison: Traditional vs SendCraft */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 md:p-12 border border-neutral-200">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            従来の方法 vs SendCraft
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Method */}
            <div className="bg-white rounded-xl p-6 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-neutral-900">従来の方法</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">Week 1-4:</span>
                  <span className="text-neutral-600">メールサーバー選定・契約</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">Week 5-8:</span>
                  <span className="text-neutral-600">SPF/DKIM/DMARC設定</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">Week 9-10:</span>
                  <span className="text-neutral-600">HTMLテンプレート制作</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">Week 11-12:</span>
                  <span className="text-neutral-600">営業リスト収集・整理</span>
                </div>
                <div className="pt-4 mt-4 border-t border-neutral-200">
                  <div className="text-2xl font-bold text-red-600">合計: 約3ヶ月</div>
                  <div className="text-xs text-neutral-500 mt-1">専門知識・工数必須</div>
                </div>
              </div>
            </div>

            {/* SendCraft Method */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white shadow-xl border-2 border-primary-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white text-primary-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold">SendCraft</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">0:00 -</span>
                  <span className="text-primary-100">無料登録（30秒）</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">0:10 -</span>
                  <span className="text-primary-100">文章ペースト</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">0:20 -</span>
                  <span className="text-primary-100">AI自動処理（推敲・HTML化）</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">0:30 -</span>
                  <span className="text-primary-100">送信完了 ✓</span>
                </div>
                <div className="pt-4 mt-4 border-t border-white/30">
                  <div className="text-2xl font-bold">合計: 30秒</div>
                  <div className="text-xs text-primary-200 mt-1">設定不要・専門知識不要</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-500 text-white rounded-xl font-bold text-lg shadow-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              360倍の時短を実現
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/signup"
            className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold px-10 py-5 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-xl hover:shadow-2xl text-lg"
          >
            今すぐ無料で始める →
          </Link>
          <p className="text-sm text-neutral-500 mt-4">
            クレジットカード不要 • 30秒で登録完了 • 今日から営業メール送信
          </p>
        </div>
      </div>
    </section>
  );
}
