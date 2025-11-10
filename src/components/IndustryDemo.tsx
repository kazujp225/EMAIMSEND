'use client';

import { useState } from 'react';

export default function IndustryDemo() {
  const industries = [
    {
      id: 'manufacturing',
      icon: '🏭',
      name: '製造業',
      keywords: '歩留まり改善・リードタイム短縮',
      subject: '【貴社の生産効率20%向上】AI品質検査システムのご提案',
      preview: '◯◯製作所 △△様\n\nお世話になっております。\n\n貴社の「不良率削減」における課題解決のため、AI品質検査システムをご提案いたします。\n\n【実績】\n・A社様: 歩留まり15%改善\n・B社様: 検査時間60%削減\n\n詳細資料をお送りいたしますので、ご都合のよろしい日時をお知らせください。',
    },
    {
      id: 'it-saas',
      icon: '💻',
      name: 'IT・SaaS',
      keywords: '導入期間・API連携・ROI',
      subject: '【導入2週間・ROI3ヶ月】営業DXツールのご紹介',
      preview: '株式会社◯◯ △△様\n\nお世話になっております。\n\n営業チームの生産性を3倍にする「SendCraft」をご紹介いたします。\n\n【特徴】\n・Salesforce/HubSpot完全連携\n・平均ROI期間: 3ヶ月\n・初期設定わずか2週間\n\n無料トライアル（30日間）をぜひお試しください。',
    },
    {
      id: 'retail',
      icon: '🛍️',
      name: '小売・EC',
      keywords: '客単価・リピート率・在庫最適化',
      subject: '【客単価15%UP実績】パーソナライズ施策のご提案',
      preview: '◯◯ストア △△様\n\nお世話になっております。\n\n貴店の売上向上のため、AIパーソナライズシステムをご提案いたします。\n\n【導入効果】\n・客単価: 平均15%向上\n・リピート率: 2倍改善\n・在庫回転率: 30%向上\n\nオンラインデモ（30分）のご都合をお聞かせください。',
    },
    {
      id: 'finance',
      icon: '🏦',
      name: '金融・保険',
      keywords: 'コンプライアンス・セキュリティ・自動化',
      subject: '【金融庁準拠】業務自動化ソリューションのご案内',
      preview: '◯◯銀行 △△様\n\nお世話になっております。\n\n金融機関向けの業務自動化システムをご案内いたします。\n\n【セキュリティ】\n・ISO27001認証取得済み\n・金融庁ガイドライン完全準拠\n・エンドツーエンド暗号化\n\n詳細資料をお送りいたします。',
    },
    {
      id: 'real-estate',
      icon: '🏢',
      name: '不動産',
      keywords: '反響率・来場率・成約率',
      subject: '【反響率2倍】不動産マーケティング支援のご提案',
      preview: '◯◯不動産 △△様\n\nお世話になっております。\n\n物件の反響率を劇的に改善するマーケティング支援をご提案いたします。\n\n【実績】\n・問い合わせ数: 平均2.3倍\n・来場率: 40%向上\n・成約率: 25%改善\n\n成功事例をご紹介させてください。',
    },
    {
      id: 'healthcare',
      icon: '🏥',
      name: '医療・ヘルスケア',
      keywords: '電子カルテ・予約管理・患者満足度',
      subject: '【患者満足度95%】クリニック向けDXシステムのご案内',
      preview: '◯◯クリニック △△先生\n\nお世話になっております。\n\n診療の効率化と患者満足度向上を実現するシステムをご案内いたします。\n\n【導入効果】\n・予約管理時間: 70%削減\n・待ち時間: 50%短縮\n・患者満足度: 95%達成\n\nオンラインデモをご用意しております。',
    },
  ];

  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <section id="industries" className="section bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
            業種別デモ
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            あなたの業界に、<br />
            <span className="text-gradient">最適化</span>されたメール。
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            150万件の法人リストを10業種に分類。<br />
            業界特有の課題とキーワードで、刺さる提案を届けます。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Industry Selection */}
          <div className="lg:col-span-1">
            <div className="space-y-2 sticky top-24">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                    selectedIndustry.id === industry.id
                      ? 'bg-white shadow-md border-2 border-primary-500'
                      : 'bg-white border-2 border-transparent hover:border-primary-200 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{industry.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900">{industry.name}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{industry.keywords}</div>
                    </div>
                    {selectedIndustry.id === industry.id && (
                      <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Email Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden">
              {/* Email Header */}
              <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 border-b border-neutral-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {selectedIndustry.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-neutral-500 uppercase">件名</span>
                      <span className="px-2 py-0.5 bg-success-100 text-success-700 text-xs rounded-full font-medium">
                        AI最適化済み
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-neutral-900 break-words">
                      {selectedIndustry.subject}
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Body */}
              <div className="p-6 lg:p-8">
                <div className="prose prose-neutral max-w-none">
                  <div className="whitespace-pre-wrap text-neutral-700 leading-relaxed">
                    {selectedIndustry.preview}
                  </div>
                </div>

                {/* Email Footer */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      HTMLメール
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-success-50 text-success-700 rounded-lg text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      配信停止リンク付き
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary-50 text-secondary-700 rounded-lg text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      CSS強化済み
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 border border-neutral-200 text-center">
                <div className="text-2xl font-bold text-primary-600">95%</div>
                <div className="text-xs text-neutral-500 mt-1">開封率</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-neutral-200 text-center">
                <div className="text-2xl font-bold text-primary-600">42%</div>
                <div className="text-xs text-neutral-500 mt-1">クリック率</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-neutral-200 text-center">
                <div className="text-2xl font-bold text-primary-600">8.5%</div>
                <div className="text-xs text-neutral-500 mt-1">返信率</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-neutral-600 mb-6">
            他の業種のテンプレートも多数ご用意しています
          </p>
          <a href="/industries" className="btn-secondary btn-lg inline-block">
            全業種のテンプレートを見る
          </a>
        </div>
      </div>
    </section>
  );
}
