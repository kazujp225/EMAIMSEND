'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Comparison() {
  const competitors = [
    {
      name: 'フォーム営業モーヤメ',
      isSelf: true,
      features: {
        targetList: { value: '◎', label: '充実' },
        targeting: { value: '◎', label: '業種別' },
        design: { value: '◎', label: 'AI+HTML' },
        deliveryRate: { value: '◎', label: '高い' },
        speed: { value: '◎', label: '最速' },
        price: { value: '○', label: '適正' },
        ease: { value: '◎', label: 'シンプル' },
      },
    },
    {
      name: 'AI送り放題',
      isSelf: false,
      features: {
        targetList: { value: '△', label: '限定的' },
        targeting: { value: '×', label: 'なし' },
        design: { value: '○', label: 'テキスト' },
        deliveryRate: { value: '△', label: '不明' },
        speed: { value: '○', label: '速い' },
        price: { value: '◎', label: '安い' },
        ease: { value: '△', label: '手動管理' },
      },
    },
    {
      name: '手動配信',
      isSelf: false,
      features: {
        targetList: { value: '×', label: '自前' },
        targeting: { value: '×', label: 'なし' },
        design: { value: '×', label: 'テキスト' },
        deliveryRate: { value: '○', label: '普通' },
        speed: { value: '×', label: '遅い' },
        price: { value: '◎', label: '最安' },
        ease: { value: '×', label: '手動' },
      },
    },
    {
      name: 'MAツール',
      isSelf: false,
      features: {
        targetList: { value: '○', label: 'オプション' },
        targeting: { value: '◎', label: '高度' },
        design: { value: '◎', label: 'エディタ' },
        deliveryRate: { value: '◎', label: '高い' },
        speed: { value: '△', label: '複雑' },
        price: { value: '×', label: '高額' },
        ease: { value: '×', label: '難しい' },
      },
    },
  ];

  const features = [
    {
      key: 'targetList',
      name: '送信先',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      key: 'targeting',
      name: 'ターゲティング',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      key: 'design',
      name: 'デザイン',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      key: 'deliveryRate',
      name: '到達率',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      key: 'speed',
      name: 'スピード',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      key: 'price',
      name: '料金',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      key: 'ease',
      name: '簡単さ',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  const getScoreColor = (value: string) => {
    switch (value) {
      case '◎': return 'text-green-600 bg-green-50';
      case '○': return 'text-blue-600 bg-blue-50';
      case '△': return 'text-yellow-600 bg-yellow-50';
      case '×': return 'text-red-600 bg-red-50';
      default: return 'text-neutral-600 bg-neutral-50';
    }
  };

  return (
    <section className="section bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-xs font-semibold mb-3">
            他社比較
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            フォーム営業モーヤメが<span className="text-gradient">選ばれる理由</span>
          </h2>
          <p className="text-base text-neutral-600">
            充実した法人リスト×AI×デザインで他社を圧倒
          </p>
        </ScrollReveal>

        {/* 凡例 - コンパクト */}
        <ScrollReveal className="flex justify-center gap-3 mb-8 flex-wrap text-xs" delay={0.1}>
          {[
            { symbol: '◎', color: 'text-green-600', label: '優秀' },
            { symbol: '○', color: 'text-blue-600', label: '良い' },
            { symbol: '△', color: 'text-yellow-600', label: '普通' },
            { symbol: '×', color: 'text-red-600', label: '劣る' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg shadow-sm">
              <span className={`${item.color} text-lg font-bold`}>{item.symbol}</span>
              <span className="text-neutral-600">{item.label}</span>
            </div>
          ))}
        </ScrollReveal>

        {/* Comparison Table - Desktop */}
        <div className="hidden lg:block">
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-5 bg-gradient-to-r from-primary-50 to-primary-100 border-b border-primary-200">
                <div className="p-4 font-bold text-sm text-neutral-700 border-r border-primary-200 flex items-center">
                  比較項目
                </div>
                {competitors.map((competitor, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 text-center border-r border-primary-200 last:border-r-0 ${
                      competitor.isSelf ? 'bg-secondary-500 text-white' : ''
                    }`}
                    whileHover={competitor.isSelf ? { scale: 1.02 } : {}}
                  >
                    <div className={`text-sm font-bold ${competitor.isSelf ? 'text-white' : 'text-neutral-900'}`}>
                      {competitor.name}
                    </div>
                    {competitor.isSelf && (
                      <div className="text-[10px] mt-0.5 opacity-90">当サービス</div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Rows */}
              {features.map((feature, featureIndex) => (
                <motion.div
                  key={feature.key}
                  className="grid grid-cols-5 border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: featureIndex * 0.03 }}
                >
                  <div className="p-4 text-sm font-medium text-neutral-700 border-r border-neutral-100 flex items-center gap-2">
                    <div className="text-primary-600">{feature.icon}</div>
                    {feature.name}
                  </div>
                  {competitors.map((competitor, compIndex) => {
                    const featureData = competitor.features[feature.key as keyof typeof competitor.features];
                    return (
                      <motion.div
                        key={compIndex}
                        className={`p-3 border-r border-neutral-100 last:border-r-0 ${
                          competitor.isSelf ? 'bg-secondary-50/20' : ''
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex flex-col items-center gap-1">
                          <motion.div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl ${getScoreColor(
                              featureData.value
                            )}`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {featureData.value}
                          </motion.div>
                          <div className="text-[10px] text-neutral-500 text-center">
                            {featureData.label}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="lg:hidden space-y-4">
          {competitors.map((competitor, compIndex) => (
            <ScrollReveal key={compIndex} delay={compIndex * 0.1}>
              <motion.div
                className={`card p-4 ${competitor.isSelf ? 'border-2 border-secondary-500 bg-secondary-50/20' : ''}`}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200">
                  <h3 className="text-base font-bold text-neutral-900">{competitor.name}</h3>
                  {competitor.isSelf && (
                    <span className="px-2 py-0.5 bg-secondary-500 text-white text-[10px] rounded-full font-semibold">
                      当社
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  {features.map((feature, featureIndex) => {
                    const featureData = competitor.features[feature.key as keyof typeof competitor.features];
                    return (
                      <div key={featureIndex} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 font-medium text-neutral-700">
                          <div className="text-primary-600">{feature.icon}</div>
                          {feature.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[10px] text-neutral-500">{featureData.label}</div>
                          <motion.div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-base ${getScoreColor(
                              featureData.value
                            )}`}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            {featureData.value}
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Key Differentiators - コンパクト */}
        <ScrollReveal className="mt-12 grid md:grid-cols-3 gap-4" delay={0.3}>
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              ),
              title: '充実した法人リスト',
              description: '業種別分類済み。最適な企業に届けます。',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              ),
              title: 'AI×デザイン',
              description: 'テキストを自動でHTMLメールに変換。',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: '最速処理',
              description: '貼って、整えて、送るだけ。',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card p-4 text-center"
              whileHover={{ y: -3 }}
            >
              <div className="text-primary-600 mb-2 flex justify-center">{item.icon}</div>
              <h3 className="text-base font-bold text-neutral-900 mb-1">{item.title}</h3>
              <p className="text-xs text-neutral-600">{item.description}</p>
            </motion.div>
          ))}
        </ScrollReveal>

        {/* Bottom CTA - コンパクト */}
        <ScrollReveal className="mt-12 text-center" delay={0.4}>
          <div className="inline-block p-6 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl shadow-xl text-white">
            <h3 className="text-xl font-bold mb-2">フォーム営業モーヤメの優位性を体験</h3>
            <p className="text-sm mb-4 opacity-90">無料で1通送信。カード登録不要。</p>
            <motion.a
              href="/order"
              className="inline-block bg-white text-secondary-600 font-bold px-6 py-3 rounded-lg hover:bg-secondary-50 transition-colors shadow-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              今すぐ申し込む
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
