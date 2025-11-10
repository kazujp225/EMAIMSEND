import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FeaturesPage() {
  const features = [
    {
      number: '01',
      title: '文章推敲・改善',
      icon: '✍️',
      description: 'AIが営業メールの下書きを自動で推敲・改善。業種別の最適な表現に変換し、プロフェッショナルな文章に仕上げます。',
      benefits: [
        'ライティングスキル不要',
        '業種別の最適化',
        '継続的な改善サイクル',
        '専門知識不要で即座に完成'
      ],
      details: [
        {
          title: '自動推敲機能',
          description: '営業ライティングのノウハウを組み込んだAIが、文章の構成・語彙・トーンを自動で最適化します。'
        },
        {
          title: '業種別最適化',
          description: '製造業、IT・SaaS、小売など、10業種それぞれに最適な訴求ポイントと表現に自動変換します。'
        },
        {
          title: '即座に完成',
          description: '下書きをペーストして数秒で、プロフェッショナルな営業メールが完成します。'
        }
      ]
    },
    {
      number: '02',
      title: 'HTMLメール制作',
      icon: '✨',
      description: 'AI（SONNET）が5秒でプロ品質のHTMLメールに変換。メールクライアント対応のコーディングを自動化します。',
      benefits: [
        'デザインスキル不要',
        '全メールクライアント対応',
        'レスポンシブデザイン',
        'インラインCSS自動化'
      ],
      details: [
        {
          title: '即座にHTML化',
          description: '推敲された文章を、見出し・段落・リンクを自動認識してHTML化。わずか5秒で完成します。'
        },
        {
          title: 'メールクライアント対応',
          description: 'Gmail、Outlook、Apple Mailなど主要クライアントで正しく表示されるコーディングを自動生成します。'
        },
        {
          title: 'プレビュー機能',
          description: 'PC・モバイル・ダークモードでの表示を事前確認。送信前に完璧な状態を確認できます。'
        }
      ]
    },
    {
      number: '03',
      title: '配信インフラ',
      icon: '🚀',
      description: '到達率95%以上を保証する専業インフラ。メールサーバー構築やドメイン認証の設定は一切不要です。',
      benefits: [
        '到達率95%以上を保証',
        '設定不要、即日開始',
        'ドメイン認証サポート',
        '段階配信機能'
      ],
      details: [
        {
          title: '専業インフラ',
          description: 'SPF/DKIM/DMARCの設定済み。スパムフィルタ対策も万全で、確実に届けます。'
        },
        {
          title: '到達率監視',
          description: 'リアルタイムで到達率を監視。バウンス率や配信停止率もダッシュボードで確認できます。'
        },
        {
          title: '段階配信',
          description: '一度に大量配信せず、段階的に配信することでスパム判定を回避します。'
        }
      ]
    },
    {
      number: '04',
      title: '営業リスト',
      icon: '📊',
      description: '150万件の法人リストを業種別に分類。常時更新され、すぐに使える状態で提供します。',
      benefits: [
        '150万件の法人リスト',
        '10業種に分類済み',
        '常時更新',
        'データクレンジング済み'
      ],
      details: [
        {
          title: '業種別分類',
          description: '製造業、IT・SaaS、小売、医療・福祉など、10業種に分類。ターゲットを絞った配信が可能です。'
        },
        {
          title: '定期更新',
          description: '法人情報を定期的に更新。古いデータや存在しない企業を自動でクレンジングします。'
        },
        {
          title: 'カスタマイズ可能',
          description: '業種・地域・従業員数などでフィルタリング。最適なターゲットリストを作成できます。'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-700 font-medium text-sm mb-6 border border-primary-100">
              機能
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              4つの機能を、<br />
              <span className="text-primary-600">丸ごと代行</span>。
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-10">
              営業メール配信に必要なすべての機能を、一つのプラットフォームで。<br />
              下書きをペーストするだけで、今日から新規営業を始められます。
            </p>
            <Link href="/signup" className="btn-primary btn-lg inline-block">
              今すぐ無料で始める
            </Link>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Left - Overview */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{feature.icon}</div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-500 mb-1">FEATURE {feature.number}</div>
                      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">{feature.title}</h2>
                    </div>
                  </div>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="space-y-2 mb-8">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-neutral-700">
                        <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Details */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="space-y-6">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                          {detail.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          {detail.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              すべての機能を、<br />
              無料でお試しいただけます
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              クレジットカード登録不要。1通から始められます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn-primary btn-lg">
                今すぐ無料で始める
              </Link>
              <Link href="/contact" className="btn-secondary btn-lg">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
