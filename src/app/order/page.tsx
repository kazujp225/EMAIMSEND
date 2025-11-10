'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OrderPage() {
  const [selectedPlan, setSelectedPlan] = useState('volume');
  const [formData, setFormData] = useState({
    companyName: '',
    department: '',
    contactName: '',
    email: '',
    phone: '',
    employees: '',
    monthlyVolume: '',
    message: '',
  });

  const plans = [
    {
      id: 'starter',
      name: 'スターター',
      price: 29800,
      volume: '3,000通/月',
      description: '小規模配信向け',
      features: [
        'CSS強化（SONNET）',
        'リアルタイムプレビュー',
        '詳細分析レポート',
        'テンプレート保存',
        '業種別テンプレート',
        'メールサポート',
      ],
    },
    {
      id: 'volume',
      name: 'ボリューム',
      price: 100000,
      volume: '150万通/月',
      description: '大量配信向け',
      recommended: true,
      features: [
        'スターターの全機能',
        '段階配信機能',
        '到達レポート',
        'API提供',
        'チーム機能（10ユーザー）',
        'ドメイン認証サポート',
        '優先サポート',
      ],
    },
    {
      id: 'step',
      name: 'ステップメール',
      price: 300000,
      volume: '無制限',
      description: '自動化フロー完備',
      features: [
        'ボリュームの全機能',
        'ステップメール機能',
        'シナリオ自動化',
        'ABテスト機能',
        'カスタムブランディング',
        '専任CSM',
        'SLA保証（99.9%）',
      ],
    },
  ];

  const selectedPlanData = plans.find((p) => p.id === selectedPlan)!;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで実際の発注処理を実装
    console.log('Order submitted:', { plan: selectedPlan, ...formData });
    alert('お見積もりリクエストを受け付けました。担当者より3営業日以内にご連絡いたします。');
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-white py-16">
          <div className="container-custom">
            <ScrollReveal className="text-center max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
                お見積もり・発注
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                プランを選んで、<br />
                <span className="text-gradient">今すぐ始める</span>
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed">
                御社に最適なプランをお選びください。<br />
                お見積もりは無料。3営業日以内にご連絡いたします。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Order Form Section */}
        <section className="section">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Plan Selection */}
              <ScrollReveal className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Plan Selection */}
                  <div className="card">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">プラン選択</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                      {plans.map((plan) => (
                        <motion.button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedPlan(plan.id)}
                          className={`relative p-6 rounded-xl border-2 text-left transition-all ${
                            selectedPlan === plan.id
                              ? 'border-primary-500 bg-primary-50 shadow-lg'
                              : 'border-neutral-200 hover:border-primary-200'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {plan.recommended && (
                            <div className="absolute -top-3 -right-3 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                              人気
                            </div>
                          )}
                          <div className="text-xl font-bold text-neutral-900 mb-2">
                            {plan.name}
                          </div>
                          <div className="text-3xl font-bold text-primary-600 mb-2">
                            ¥{plan.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-neutral-500 mb-4">
                            {plan.volume}
                          </div>
                          <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-neutral-300 mx-auto">
                            {selectedPlan === plan.id && (
                              <motion.div
                                className="w-3 h-3 rounded-full bg-primary-500"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring' }}
                              />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="card">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">企業情報</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          会社名 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all"
                          placeholder="株式会社○○"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          部署名
                        </label>
                        <input
                          type="text"
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all"
                          placeholder="営業部"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          ご担当者名 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all"
                          placeholder="山田 太郎"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all"
                          placeholder="example@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          電話番号 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all"
                          placeholder="03-1234-5678"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          従業員数
                        </label>
                        <select
                          name="employees"
                          value={formData.employees}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all"
                        >
                          <option value="">選択してください</option>
                          <option value="1-10">1-10名</option>
                          <option value="11-50">11-50名</option>
                          <option value="51-200">51-200名</option>
                          <option value="201-500">201-500名</option>
                          <option value="501+">501名以上</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Usage Details */}
                  <div className="card">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">利用予定</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          月間送信予定通数
                        </label>
                        <select
                          name="monthlyVolume"
                          value={formData.monthlyVolume}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all"
                        >
                          <option value="">選択してください</option>
                          <option value="0-3000">0-3,000通</option>
                          <option value="3000-10000">3,000-10,000通</option>
                          <option value="10000-100000">10,000-100,000通</option>
                          <option value="100000-1000000">100,000-100万通</option>
                          <option value="1000000+">100万通以上</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          ご要望・ご質問
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all"
                          placeholder="導入時期や特別なご要望がございましたらご記入ください"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    お見積もりをリクエスト
                  </motion.button>

                  <p className="text-sm text-neutral-500 text-center">
                    ※ お見積もりは無料です。3営業日以内に担当者よりご連絡いたします。
                  </p>
                </form>
              </ScrollReveal>

              {/* Right: Summary */}
              <ScrollReveal className="lg:col-span-1" delay={0.2}>
                <div className="sticky top-24">
                  <div className="card bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200">
                    <h3 className="text-xl font-bold text-neutral-900 mb-6">お見積もり内容</h3>

                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-sm text-neutral-600 mb-1">選択プラン</div>
                        <div className="text-2xl font-bold text-neutral-900">{selectedPlanData.name}</div>
                      </div>

                      <div className="p-4 bg-white rounded-lg border border-primary-200">
                        <div className="flex justify-between items-baseline mb-2">
                          <span className="text-sm text-neutral-600">月額料金</span>
                          <span className="text-3xl font-bold text-primary-600">
                            ¥{selectedPlanData.price.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-xs text-neutral-500">
                          {selectedPlanData.volume}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-neutral-200">
                        <div className="text-sm font-semibold text-neutral-700 mb-3">含まれる機能</div>
                        <ul className="space-y-2">
                          {selectedPlanData.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start gap-2 text-sm text-neutral-600"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-neutral-200">
                      <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                        <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        14日間無料トライアル
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                        <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        いつでも解約可能
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        初期費用なし
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="card mt-6 bg-neutral-800 text-white">
                    <h4 className="font-bold mb-4">お電話でのお問い合わせ</h4>
                    <div className="text-2xl font-bold mb-2">03-1234-5678</div>
                    <p className="text-sm text-neutral-400">
                      平日 9:00-18:00<br />
                      （土日祝日を除く）
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
