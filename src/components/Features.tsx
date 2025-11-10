'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Features() {
  const features = [
    {
      icon: '✨',
      title: 'CSS強化（SONNET）',
      description: 'プレーンテキストを自動でHTML化。見出し、段落、リンクを認識し、インラインCSSで主要メールクライアント対応。',
      stats: '処理時間 5-10秒',
    },
    {
      icon: '🎯',
      title: '業種別ターゲティング',
      description: '150万件の法人リストを10業種に分類。業界×役割にフィットする提案を無駄打ちなく届けます。',
      stats: '10業種対応',
    },
    {
      icon: '👁️',
      title: 'リアルタイムプレビュー',
      description: 'PC・モバイル表示を切り替え。Gmail、Outlook、Apple Mailの表示確認。ダークモード対応。',
      stats: '3デバイス対応',
    },
    {
      icon: '📊',
      title: '到達率最適化',
      description: 'SPF/DKIM/DMARCのドメイン認証、段階配信機能、1クリック配信停止で到達率と法令順守を両立。',
      stats: '到達率95%以上',
    },
    {
      icon: '📈',
      title: '分析・レポート',
      description: '開封率・クリック率・バウンス率を可視化。業種別パフォーマンス比較で改善ポイントが一目瞭然。',
      stats: 'リアルタイム集計',
    },
    {
      icon: '⚡',
      title: '最短30秒で送信',
      description: '複雑な設定は不要。文章をペースト → CSS強化 → 送信先選択 → 送信。わずか4ステップで完了。',
      stats: '平均完了時間30秒',
    },
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            主要機能
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            営業メールの<span className="text-gradient">すべて</span>を、<br />
            シンプルに。
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            複雑なMAツールは不要。必要な機能だけを、使いやすく。
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="card card-hoverable group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center text-3xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature.stats}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="mt-16 text-center" delay={0.3}>
          <p className="text-neutral-600 mb-6">
            すべての機能を無料プランでお試しいただけます
          </p>
          <motion.a
            href="/signup"
            className="btn-primary btn-lg inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            今すぐ無料で始める
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
