'use client';

import Link from 'next/link';

export default function SimpleSteps() {
  const steps = [
    {
      number: '1',
      time: '0:00',
      title: '30秒で無料登録',
      description: 'クレジットカード不要。名前とメールアドレスだけで今すぐ開始できます。',
      details: ['名前', 'メールアドレス', 'パスワード設定'],
    },
    {
      number: '2',
      time: '0:10',
      title: '下書きをペースト',
      description: '普段のメール文章をそのままペーストするだけ。特別な書き方は不要です。',
      details: ['AIが自動で文章推敲', 'プロ品質のHTMLに変換', '業種別に最適化'],
    },
    {
      number: '3',
      time: '0:30',
      title: 'プレビュー確認して送信',
      description: 'PC・スマホでの見え方を確認。問題なければワンクリックで送信完了。',
      details: ['リアルタイムプレビュー', 'PC・モバイル対応確認', 'ワンクリック送信'],
    },
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-sm text-neutral-500 mb-3">導入までの流れ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
            最短1分で、最初のメール送信完了
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            複雑な設定は一切不要。登録から送信まで、たったの3ステップ。今すぐプロ品質の営業メールを送り始められます。
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-12 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-8">
              {/* Number & Time */}
              <div className="flex-shrink-0 w-24 text-center">
                <div className="text-6xl font-bold text-neutral-900 mb-2">
                  {step.number}
                </div>
                <div className="text-sm font-mono text-neutral-500">
                  {step.time}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-neutral-700 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison: Traditional vs SendCraft */}
        <div className="max-w-4xl mx-auto border-t border-neutral-200 pt-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-12 text-center">
            従来の方法 vs SendCraft
          </h3>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Traditional Method */}
            <div>
              <h4 className="text-lg font-bold text-neutral-900 mb-6 pb-3 border-b-2 border-neutral-300">
                従来の方法
              </h4>
              <div className="space-y-4 text-sm text-neutral-600">
                <div className="flex gap-3">
                  <span className="font-semibold text-neutral-900 w-20">Week 1-4</span>
                  <span>メールサーバー選定・契約</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-neutral-900 w-20">Week 5-8</span>
                  <span>SPF/DKIM/DMARC設定</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-neutral-900 w-20">Week 9-10</span>
                  <span>HTMLテンプレート制作</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-neutral-900 w-20">Week 11-12</span>
                  <span>営業リスト収集・整理</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="text-3xl font-bold text-neutral-900">約3ヶ月</div>
                <div className="text-sm text-neutral-500 mt-1">専門知識・工数必須</div>
              </div>
            </div>

            {/* SendCraft Method */}
            <div>
              <h4 className="text-lg font-bold text-neutral-900 mb-6 pb-3 border-b-2 border-primary-600">
                SendCraft
              </h4>
              <div className="space-y-4 text-sm text-neutral-600">
                <div className="flex gap-3">
                  <span className="font-semibold text-neutral-900 w-20">0:00</span>
                  <span>無料登録（30秒）</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-neutral-900 w-20">0:10</span>
                  <span>文章ペースト</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-neutral-900 w-20">0:20</span>
                  <span>AI自動処理（推敲・HTML化）</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-neutral-900 w-20">0:30</span>
                  <span>送信完了 ✓</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="text-3xl font-bold text-primary-600">30秒</div>
                <div className="text-sm text-neutral-500 mt-1">設定不要・専門知識不要</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-neutral-900 font-semibold mb-8">
              360倍の時短を実現
            </p>
            <Link
              href="/order"
              className="inline-block bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              今すぐ申し込む
            </Link>
            <p className="text-sm text-neutral-500 mt-4">
              クレジットカード不要・30秒で登録完了・今日から営業メール送信
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
