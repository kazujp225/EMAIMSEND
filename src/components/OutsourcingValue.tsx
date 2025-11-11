'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function OutsourcingValue() {
  const outsourcingItems = [
    {
      number: '1',
      title: '文章推敲・改善',
      icon: '✍️',
      inHouse: {
        title: '社内でやると',
        items: [
          'ライティングスキルの習得に時間がかかる',
          '業種ごとの最適化が困難',
          'ABテストや改善のリソースが不足'
        ]
      },
      ourService: {
        title: 'フォーム営業モーヤメなら',
        items: [
          'AIが自動で文章を推敲・改善',
          '業種別の最適な表現に変換'
        ]
      },
      details: [
        '営業ライティングのノウハウ',
        '業種別の訴求ポイント把握',
        '継続的な改善サイクル'
      ]
    },
    {
      number: '2',
      title: '配信インフラの構築・運用',
      icon: '🚀',
      inHouse: {
        title: '社内でやると',
        items: [
          '初期構築に1ヶ月',
          'エンジニア1名の継続的な運用',
          '到達率の低下リスク'
        ]
      },
      ourService: {
        title: 'フォーム営業モーヤメなら',
        items: [
          '到達率95%以上を保証する専業インフラ',
          '設定不要、即日開始'
        ]
      },
      details: [
        'メールサーバーの構築',
        'SPF/DKIM/DMARC設定',
        '到達率監視',
        'スパムフィルタ対策'
      ]
    },
    {
      number: '3',
      title: 'HTMLメール制作の専門スキル',
      icon: '✨',
      inHouse: {
        title: '社内でやると',
        items: [
          'デザイナー + コーダーで1通あたり3時間',
          '特殊なコーディングスキルが必要',
          '各メールクライアントでのテスト工数'
        ]
      },
      ourService: {
        title: 'フォーム営業モーヤメなら',
        items: [
          'AI（SONNET）が5秒でプロ品質に変換',
          '専門スキル不要'
        ]
      },
      details: [
        'メールクライアント対応のコーディング',
        'レスポンシブデザイン',
        'インラインCSS化'
      ]
    },
    {
      number: '4',
      title: '営業リストの収集・整理',
      icon: '📊',
      inHouse: {
        title: '社内でやると',
        items: [
          'リスト収集に1ヶ月以上',
          '継続的な更新作業',
          'データの鮮度維持のコスト'
        ]
      },
      ourService: {
        title: 'フォーム営業モーヤメなら',
        items: [
          '150万件の法人リストを業種別に分類',
          '常時更新、すぐに使える'
        ]
      },
      details: [
        '業種別の法人データベース',
        '定期的な更新作業',
        'データクレンジング'
      ]
    }
  ];

  return (
    <section id="outsourcing-value" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-semibold mb-4 border border-secondary-100">
            💡 代行の価値
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight">
            営業メール配信を、<br />
            <span className="text-primary-600">社内で持つ必然性</span>はあるか？
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            新規営業を始めるには、本来4つの専門機能が必要になる。<br />
            でも、それを社内で構築するには時間もコストもかかりすぎる。
          </p>
        </ScrollReveal>

        {/* Outsourcing Items */}
        <div className="space-y-8 mb-16">
          {outsourcingItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 transition-colors duration-200">
                {/* Header */}
                <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm">
                      {item.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 flex items-center gap-2">
                        <span>{item.icon}</span>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* What's Required */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                      本来必要なもの
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.details.map((detail, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-lg text-sm border border-neutral-200"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Comparison */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* In-house */}
                    <div className="card bg-red-50/50 border-red-200/50 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center">
                          <span className="text-base">❌</span>
                        </div>
                        <h4 className="font-semibold text-neutral-900">{item.inHouse.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.inHouse.items.map((text, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700 leading-relaxed">
                            <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* フォーム営業モーヤメ */}
                    <div className="card bg-primary-50/50 border-primary-200 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 bg-primary-100 rounded-lg flex items-center justify-center">
                          <span className="text-base font-bold text-primary-600">✓</span>
                        </div>
                        <h4 className="font-semibold text-neutral-900">{item.ourService.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.ourService.items.map((text, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700 leading-relaxed">
                            <span className="text-primary-600 mt-1 flex-shrink-0 font-bold">✓</span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Summary */}
        <ScrollReveal className="max-w-4xl mx-auto" delay={0.2}>
          <div className="card bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-neutral-900 shadow-sm mb-4 border border-neutral-200">
                <span className="text-red-500">⚠️</span>
                社内で構築する場合
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-lg font-bold text-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  <span>初期構築: <span className="text-red-600">3ヶ月</span></span>
                </div>
                <div className="hidden sm:block w-px h-8 bg-neutral-300"></div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  <span>運用工数: <span className="text-red-600">月100時間</span></span>
                </div>
              </div>
            </div>

            <div className="my-8 flex items-center justify-center">
              <div className="h-px w-24 bg-neutral-300"></div>
              <div className="mx-4 text-2xl">⬇️</div>
              <div className="h-px w-24 bg-neutral-300"></div>
            </div>

            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-semibold shadow-sm mb-4">
                <span>✨</span>
                フォーム営業モーヤメに任せる
              </div>
              <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                これを丸ごと代行
              </p>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                下書きをペーストするだけで、<span className="font-semibold text-primary-600">今日から新規営業を始められます</span>
              </p>
            </div>

            <a
              href="/order"
              className="btn-primary btn-lg inline-block"
            >
              今すぐ申し込む
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
