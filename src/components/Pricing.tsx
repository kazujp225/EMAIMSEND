'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

// Helper icon components for comparison table
const CheckIcon = ({ color = 'neutral' }: { color?: 'primary' | 'neutral' }) => (
  <svg
    className={`w-5 h-5 ${color === 'primary' ? 'text-primary-500' : 'text-success-500'} inline-block`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-5 h-5 text-neutral-300 inline-block"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
);

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
      cta: '今すぐ申し込む',
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
      description: '2ヶ月間配信',
      features: [
        { text: '2ヶ月間のステップメール配信', included: true },
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
          <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full badge-text mb-4">
            料金プラン
          </div>
          <h2 className="heading-1 mb-6">
            <span className="text-gradient">市場価格の20%安</span>で、<br />
            最高品質のサービスを。
          </h2>
          <p className="lead-text">
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
                  <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-4 py-1 rounded-full badge-text shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="heading-3 mb-2">{plan.name}</h3>
                <p className="body-small mb-4">{plan.description}</p>
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
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-full badge-text mb-4">
                買い切りプラン
              </div>
              <h3 className="heading-2 mb-2">
                ツールを<span className="text-gradient">完全所有</span>したい企業様へ
              </h3>
              <p className="body-large">
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
                <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-2 rounded-full badge-text shadow-lg">
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

        {/* Plan Comparison Table */}
        <ScrollReveal className="max-w-6xl mx-auto mb-16" delay={0.5}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">プラン機能比較表</h3>
            <p className="text-neutral-600">各プランの機能を詳しく比較できます</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-neutral-200 overflow-hidden">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">機能</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-900">無料</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-900">スターター</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600 bg-primary-50">ボリューム</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-900">ステップメール</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-neutral-700">月間送信数</td>
                  <td className="px-6 py-4 text-sm text-neutral-600 text-center">1通</td>
                  <td className="px-6 py-4 text-sm text-neutral-600 text-center">3,000通</td>
                  <td className="px-6 py-4 text-sm text-primary-600 font-semibold text-center bg-primary-50">150万通</td>
                  <td className="px-6 py-4 text-sm text-neutral-600 text-center">無制限</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-neutral-700">AI推敲機能</td>
                  <td className="px-6 py-4 text-center"><CheckIcon /></td>
                  <td className="px-6 py-4 text-center"><CheckIcon /></td>
                  <td className="px-6 py-4 text-center bg-primary-50"><CheckIcon color="primary" /></td>
                  <td className="px-6 py-4 text-center"><CheckIcon /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-neutral-700">HTMLメール制作</td>
                  <td className="px-6 py-4 text-center"><CheckIcon /></td>
                  <td className="px-6 py-4 text-center"><CheckIcon /></td>
                  <td className="px-6 py-4 text-center bg-primary-50"><CheckIcon color="primary" /></td>
                  <td className="px-6 py-4 text-center"><CheckIcon /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-neutral-700">業種別テンプレート</td>
                  <td className="px-6 py-4 text-center"><XIcon /></td>
                  <td className="px-6 py-4 text-center"><CheckIcon /></td>
                  <td className="px-6 py-4 text-center bg-primary-50"><CheckIcon color="primary" /></td>
                  <td className="px-6 py-4 text-center"><CheckIcon /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-neutral-700">段階配信機能</td>
                  <td className="px-6 py-4 text-center"><XIcon /></td>
                  <td className="px-6 py-4 text-center"><XIcon /></td>
                  <td className="px-6 py-4 text-center bg-primary-50"><CheckIcon color="primary" /></td>
                  <td className="px-6 py-4 text-center"><CheckIcon /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-neutral-700">チーム機能</td>
                  <td className="px-6 py-4 text-center"><XIcon /></td>
                  <td className="px-6 py-4 text-center"><XIcon /></td>
                  <td className="px-6 py-4 text-center bg-primary-50"><CheckIcon color="primary" /></td>
                  <td className="px-6 py-4 text-center"><CheckIcon /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-neutral-700">ステップメール・自動化</td>
                  <td className="px-6 py-4 text-center"><XIcon /></td>
                  <td className="px-6 py-4 text-center"><XIcon /></td>
                  <td className="px-6 py-4 text-center bg-primary-50"><XIcon /></td>
                  <td className="px-6 py-4 text-center"><CheckIcon /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-neutral-700">サポート</td>
                  <td className="px-6 py-4 text-sm text-neutral-600 text-center">FAQ</td>
                  <td className="px-6 py-4 text-sm text-neutral-600 text-center">24時間以内</td>
                  <td className="px-6 py-4 text-sm text-primary-600 font-semibold text-center bg-primary-50">12時間以内</td>
                  <td className="px-6 py-4 text-sm text-neutral-600 text-center">専任CSM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Support & Guarantee Section */}
        <ScrollReveal className="max-w-5xl mx-auto mb-16" delay={0.6}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-200">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-neutral-900 mb-2">14日間返金保証</h4>
              <p className="text-neutral-600 leading-relaxed text-sm">
                有料プランをご契約後、14日以内であれば理由を問わず全額返金いたします。安心してお試しください。
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 border border-secondary-200">
              <div className="w-12 h-12 bg-secondary-500 text-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-neutral-900 mb-2">専門サポート体制</h4>
              <p className="text-neutral-600 leading-relaxed text-sm">
                メール配信のプロフェッショナルチームが、設定から運用までしっかりサポート。初めての方も安心です。
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-200">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-neutral-900 mb-2">いつでもプラン変更</h4>
              <p className="text-neutral-600 leading-relaxed text-sm">
                ビジネスの成長に合わせて、いつでもプランを変更可能。解約手数料や最低利用期間もありません。
              </p>
            </div>
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
                a: 'はい、いつでも変更可能です。アップグレードの場合は即座に反映され、ダウングレードの場合は次の更新日から適用されます。差額は日割り計算で調整されます。',
              },
              {
                q: '送信通数が上限を超えたらどうなりますか？',
                a: 'その月は送信できなくなりますが、翌月には自動的にリセットされます。上位プランへのアップグレードも可能です。追加料金が発生することはありません。',
              },
              {
                q: '解約はいつでもできますか？',
                a: 'はい、管理画面からいつでも解約可能です。解約手数料や最低利用期間はありません。解約後もそのサイクル終了まではサービスをご利用いただけます。',
              },
              {
                q: '14日間の返金保証について詳しく教えてください',
                a: '有料プランをご契約後、14日以内であれば理由を問わず全額返金いたします。返金手続きは管理画面またはサポートチームへのご連絡で簡単に行えます。',
              },
              {
                q: 'メールの到達率はどのくらいですか？',
                a: '平均到達率は95%以上を保証しています。SPF/DKIM/DMARCの設定やスパムフィルタ対策を万全に行っており、確実に届けることができます。',
              },
              {
                q: '法人リストは最新のものですか？',
                a: 'はい、150万件の法人リストは毎月更新されています。存在しない企業や古いデータは自動でクレンジングされ、常に最新の状態を保っています。',
              },
              {
                q: '買い切りプランと月額プランの違いは何ですか？',
                a: '買い切りプランは初期費用のみで永年ご利用いただけます。ランニングコストはAPI費用のみで、ソースコード提供やオンプレミス対応も含まれます。月額プランは柔軟に変更・解約が可能で、初期費用を抑えられます。',
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

          <div className="text-center mt-8 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
            <p className="text-neutral-700 mb-4">その他のご質問は、お気軽にお問い合わせください</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                お問い合わせ
              </a>
              <a href="/order" className="btn-secondary">
                お見積もり・発注
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
