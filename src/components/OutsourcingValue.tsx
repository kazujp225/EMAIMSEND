'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function OutsourcingValue() {
  const outsourcingItems = [
    {
      number: '1',
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
      sendcraft: {
        title: 'SendCraftなら',
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
      number: '2',
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
      sendcraft: {
        title: 'SendCraftなら',
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
      number: '3',
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
      sendcraft: {
        title: 'SendCraftなら',
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
    <section id="outsourcing-value" className="section bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-xs font-semibold mb-3">
            💡 代行の価値
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            営業メール配信を、<br />
            <span className="text-gradient">社内で持つ必然性</span>はあるか？
          </h2>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            新規営業を始めるには、本来3つの専門機能が必要になる。<br />
            でも、それを社内で構築するには時間もコストもかかりすぎる。
          </p>
        </ScrollReveal>

        {/* Outsourcing Items */}
        <div className="space-y-12 md:space-y-16 mb-12">
          {outsourcingItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 px-6 py-5 border-b border-neutral-200">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.number}
                    </motion.div>
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
                          className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-lg text-sm"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Comparison */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* In-house */}
                    <motion.div
                      className="card bg-red-50 border-red-200"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <span className="text-lg">❌</span>
                        </div>
                        <h4 className="font-semibold text-neutral-900">{item.inHouse.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.inHouse.items.map((text, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                            <span className="text-red-500 mt-0.5">•</span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* SendCraft */}
                    <motion.div
                      className="card bg-primary-50 border-primary-200"
                      whileHover={{ y: -2, boxShadow: "0 10px 30px -10px rgba(20, 184, 166, 0.3)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                          <span className="text-lg">✓</span>
                        </div>
                        <h4 className="font-semibold text-neutral-900">{item.sendcraft.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.sendcraft.items.map((text, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                            <span className="text-primary-500 mt-0.5">✓</span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Summary */}
        <ScrollReveal className="max-w-4xl mx-auto" delay={0.3}>
          <motion.div
            className="card bg-gradient-to-br from-primary-50 via-white to-secondary-50 border-2 border-primary-200 text-center"
            whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(20, 184, 166, 0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-neutral-900 shadow-sm mb-4">
                <span className="text-red-500">⚠️</span>
                社内で構築する場合
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-lg font-bold text-neutral-900">
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

            <div className="my-6 flex items-center justify-center">
              <div className="h-px w-20 bg-neutral-300"></div>
              <motion.div
                className="mx-4 text-3xl"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⬇️
              </motion.div>
              <div className="h-px w-20 bg-neutral-300"></div>
            </div>

            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-sm font-semibold shadow-lg mb-4">
                <span>✨</span>
                SendCraftに任せる
              </div>
              <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                これを丸ごと代行
              </p>
              <p className="text-base md:text-lg text-neutral-600">
                文章をペーストするだけで、<span className="font-semibold text-primary-600">今日から新規営業を始められます</span>
              </p>
            </div>

            <motion.a
              href="/signup"
              className="btn-primary btn-lg inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              今すぐ無料で始める
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
