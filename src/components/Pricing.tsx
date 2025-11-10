'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Pricing() {
  const plans = [
    {
      name: '無料',
      price: '¥0',
      period: '',
      description: 'まずはお試し',
      features: [
        { text: '1通の送信', included: true },
        { text: 'CSS強化（SONNET）', included: true },
        { text: 'リアルタイムプレビュー', included: true },
        { text: '基本的な分析', included: true },
        { text: 'テンプレート保存', included: false },
        { text: '送信履歴', included: false },
      ],
      cta: '無料で始める',
      highlighted: false,
    },
    {
      name: 'スターター',
      price: '¥34,800',
      period: '/ 月',
      description: '小規模配信向け',
      features: [
        { text: '3,000通 / 月', included: true },
        { text: 'CSS強化（SONNET）', included: true },
        { text: 'リアルタイムプレビュー', included: true },
        { text: '詳細分析レポート', included: true },
        { text: 'テンプレート保存（無制限）', included: true },
        { text: '送信履歴（6ヶ月）', included: true },
        { text: '業種別テンプレート', included: true },
        { text: 'メールサポート（24時間以内）', included: true },
      ],
      cta: '14日間無料トライアル',
      highlighted: false,
    },
    {
      name: 'ボリューム',
      price: '¥120,000',
      period: '/ 月',
      description: '大量配信向け',
      features: [
        { text: '150万通 / 月', included: true },
        { text: 'スターターの全機能', included: true },
        { text: '段階配信機能', included: true },
        { text: '到達レポート', included: true },
        { text: 'チーム機能（10ユーザー）', included: true },
        { text: 'ドメイン認証サポート', included: true },
        { text: '優先サポート（12時間以内）', included: true },
        { text: 'API提供', included: true },
      ],
      cta: '14日間無料トライアル',
      highlighted: true,
      badge: '企業向け人気',
    },
    {
      name: 'ステップメール',
      price: '¥360,000',
      period: '/ 月',
      description: '自動化フロー完備',
      features: [
        { text: '無制限配信', included: true },
        { text: 'ボリュームの全機能', included: true },
        { text: 'ステップメール機能', included: true },
        { text: 'シナリオ自動化', included: true },
        { text: 'ABテスト機能', included: true },
        { text: 'カスタムブランディング', included: true },
        { text: '専任CSM', included: true },
        { text: 'SLA保証（99.9%）', included: true },
      ],
      cta: 'お問い合わせ',
      highlighted: false,
    },
    {
      name: 'ツール買い切り',
      price: '¥500,000',
      period: '（一括払い）',
      description: '永年使用可能',
      features: [
        { text: '全機能利用可能', included: true },
        { text: '自社メールリスト追加可能', included: true },
        { text: 'API費用のみで永年無料', included: true },
        { text: '2年間の保守・アップデート込み', included: true },
        { text: 'オンプレミス対応', included: true },
        { text: 'ソースコード提供', included: true },
        { text: 'カスタマイズ可能', included: true },
        { text: '専任サポート', included: true },
      ],
      cta: 'お問い合わせ',
      highlighted: false,
      badge: '買い切り',
    },
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
            料金プラン
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            <span className="text-gradient">市場価格の20%安</span>で、<br />
            最高品質のサービスを。
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            大量配信も、ステップメールも。競合より20%安い価格で提供。<br />
            14日間無料トライアル・いつでも解約可能です。
          </p>
        </ScrollReveal>

        {/* Pricing Cards - Monthly Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {plans.slice(0, 4).map((plan, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className={`relative rounded-2xl border-2 p-6 lg:p-8 transition-all duration-300 h-full ${
                  plan.highlighted
                    ? 'border-primary-500 shadow-2xl scale-105 bg-white'
                    : 'border-neutral-200 bg-white hover:border-primary-200 hover:shadow-lg'
                }`}
                whileHover={{ y: plan.highlighted ? 0 : -8 }}
                transition={{ duration: 0.3 }}
              >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-neutral-500 mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-neutral-900">{plan.price}</span>
                  {plan.period && <span className="text-neutral-500 mb-1">{plan.period}</span>}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-neutral-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={feature.included ? 'text-neutral-700' : 'text-neutral-400'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

                {/* CTA Button */}
                <motion.a
                  href={plan.name === 'ステップメール' ? '/contact' : '/signup'}
                  className={`block text-center font-semibold px-6 py-3 rounded-xl transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* One-time Purchase Plan */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-full text-sm font-bold mb-4">
                買い切りプラン
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                ツールを<span className="text-gradient">完全所有</span>したい企業様へ
              </h3>
              <p className="text-neutral-600">
                初期費用のみで、永年ご利用いただけます。ランニングコストはAPI費用のみ。
              </p>
            </div>

            <motion.div
              className="relative rounded-2xl border-4 border-secondary-500 bg-gradient-to-br from-secondary-50 to-white p-8 md:p-10 shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  {plans[4].badge}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Price & Description */}
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-neutral-900 mb-2">
                    {plans[4].name}
                  </h4>
                  <div className="mb-4">
                    <div className="text-5xl font-bold text-secondary-600 mb-1">
                      {plans[4].price}
                    </div>
                    <div className="text-sm text-neutral-500">{plans[4].period}</div>
                  </div>
                  <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-lg text-sm font-semibold mb-4">
                    {plans[4].description}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-neutral-700">
                      <svg className="w-5 h-5 text-success-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">API費用のみで永年無料</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700">
                      <svg className="w-5 h-5 text-success-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">2年間の保守・アップデート込み</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700">
                      <svg className="w-5 h-5 text-success-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">自社メールリスト追加可能</span>
                    </div>
                  </div>

                  <motion.a
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-bold px-8 py-4 rounded-xl hover:from-secondary-600 hover:to-secondary-700 shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plans[4].cta}
                  </motion.a>
                </div>

                {/* Right: Features */}
                <div>
                  <h5 className="text-lg font-bold text-neutral-900 mb-4">含まれる機能</h5>
                  <ul className="space-y-2">
                    {plans[4].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-2 text-sm text-neutral-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature.text}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-white rounded-lg border border-secondary-200">
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      ※ 3年目以降の保守・アップデートは年間¥100,000（オプション）<br />
                      ※ オンプレミス環境での構築をサポートします
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* FAQ Section */}
        <ScrollReveal className="max-w-3xl mx-auto" delay={0.3}>
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">よくある質問</h3>
          <div className="space-y-4">
            {[
              {
                q: '無料プランで本当に課金されませんか？',
                a: 'はい、無料プランは完全無料です。クレジットカードの登録も不要で、自動的に有料プランに切り替わることもありません。',
              },
              {
                q: '月の途中でプラン変更できますか？',
                a: 'はい、いつでも変更可能です。アップグレードの場合は即座に反映され、ダウングレードの場合は次の更新日から適用されます。',
              },
              {
                q: '送信通数が上限を超えたらどうなりますか？',
                a: 'その月は送信できなくなりますが、翌月には自動的にリセットされます。上位プランへのアップグレードも可能です。',
              },
              {
                q: '解約はいつでもできますか？',
                a: 'はい、管理画面からいつでも解約可能です。解約手数料や最低利用期間はありません。',
              },
            ].map((faq, index) => (
              <motion.details
                key={index}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <summary className="cursor-pointer font-semibold text-neutral-900 list-none flex items-center justify-between">
                  {faq.q}
                  <svg className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-neutral-600 leading-relaxed">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
