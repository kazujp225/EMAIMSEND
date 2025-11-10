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

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="container-custom">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              数字で見るSendCraft
            </h2>
            <p className="text-primary-100 text-lg">
              多くの企業様に選ばれている理由
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">95%</div>
              <div className="text-primary-100 text-lg">到達率</div>
              <div className="text-primary-200 text-sm mt-1">業界最高水準</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">30秒</div>
              <div className="text-primary-100 text-lg">平均送信時間</div>
              <div className="text-primary-200 text-sm mt-1">文章貼り付けから送信まで</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">150万件</div>
              <div className="text-primary-100 text-lg">法人リスト</div>
              <div className="text-primary-200 text-sm mt-1">常時更新</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">10業種</div>
              <div className="text-primary-100 text-lg">業種別最適化</div>
              <div className="text-primary-200 text-sm mt-1">ターゲティング精度向上</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
              導入事例
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              幅広い業種で活用されています
            </h2>
            <p className="text-lg text-neutral-600">
              スタートアップから大企業まで、さまざまな企業様にご利用いただいています
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                  A
                </div>
                <div>
                  <div className="font-bold text-neutral-900">SaaS企業 A社様</div>
                  <div className="text-sm text-neutral-500">IT・SaaS業界</div>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-4">
                「従来のツールは複雑で学習コストが高かったですが、SendCraftは直感的で営業メンバー全員がすぐに使えるようになりました。配信時間が80%削減できました。」
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <div className="flex items-center gap-1">
                  <span className="text-primary-600 font-bold">80%</span>
                  <span>時間削減</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-primary-600 font-bold">3,000通</span>
                  <span>/ 月</span>
                </div>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 font-bold text-xl">
                  B
                </div>
                <div>
                  <div className="font-bold text-neutral-900">製造業 B社様</div>
                  <div className="text-sm text-neutral-500">製造業</div>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-4">
                「業種別テンプレートが非常に役立ちました。製造業向けの訴求ポイントが的確で、返信率が2倍に向上。営業効率が大幅に改善しました。」
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <div className="flex items-center gap-1">
                  <span className="text-secondary-600 font-bold">2倍</span>
                  <span>返信率向上</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-secondary-600 font-bold">150万通</span>
                  <span>/ 月</span>
                </div>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                  C
                </div>
                <div>
                  <div className="font-bold text-neutral-900">小売業 C社様</div>
                  <div className="text-sm text-neutral-500">小売業</div>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-4">
                「HTMLメールの制作を外注していましたが、SendCraftでコストを70%削減。AIによる自動整形で、プロ品質のメールが社内で完結できるようになりました。」
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <div className="flex items-center gap-1">
                  <span className="text-primary-600 font-bold">70%</span>
                  <span>コスト削減</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-primary-600 font-bold">自動化</span>
                  <span>完全内製化</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              お客様の声
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              ご利用いただいているお客様の声
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                「営業メールの作成に悩んでいましたが、SendCraftのAI推敲機能で文章が驚くほど洗練されます。業種別テンプレートも充実していて、ターゲットに合わせた提案が簡単にできるようになりました。」
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-600 font-bold">
                  田
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">田中様</div>
                  <div className="text-sm text-neutral-500">営業部長 / IT企業</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                「到達率95%以上という実績に惹かれて導入しました。実際に使ってみると、開封率も向上し、営業効率が大幅に改善。サポートも丁寧で安心して使えます。」
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-600 font-bold">
                  佐
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">佐藤様</div>
                  <div className="text-sm text-neutral-500">マーケティング担当 / 製造業</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                「HTMLの知識がなくても、プロ品質のメールが作れるのは驚きです。プレビュー機能で送信前にしっかり確認できるので安心。コスト削減にも大きく貢献しています。」
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-600 font-bold">
                  鈴
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">鈴木様</div>
                  <div className="text-sm text-neutral-500">事業開発 / スタートアップ</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                「150万件の法人リストは本当に助かります。業種別に分類されているので、ターゲティングが簡単。無駄な配信が減り、返信率が大幅に向上しました。」
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-600 font-bold">
                  高
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">高橋様</div>
                  <div className="text-sm text-neutral-500">代表取締役 / コンサルティング</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              わずか3ステップで完成
            </h2>
            <p className="text-lg text-neutral-600">
              複雑な設定は一切不要。直感的な操作で営業メールを配信できます
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="flex-1 bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">文章をペースト</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    営業メールの下書きをコピー&ペーストするだけ。業種を選択すると、AIが自動で最適な表現に推敲します。
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-64 h-40 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center border-2 border-primary-200">
                  <div className="text-center text-primary-700">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="text-sm font-semibold">テキスト入力</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-secondary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="flex-1 bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">AIが自動整形</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    わずか5秒で、プロ品質のHTMLメールに変換。見出し・段落・リンクを自動認識し、美しいレイアウトに整形します。
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-64 h-40 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl flex items-center justify-center border-2 border-secondary-200">
                  <div className="text-center text-secondary-700">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div className="text-sm font-semibold">AI自動変換</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="flex-1 bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">プレビュー & 送信</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    PC・モバイル・ダークモードで表示を確認。問題なければワンクリックで送信完了。平均30秒で全工程が完了します。
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-64 h-40 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center border-2 border-primary-200">
                  <div className="text-center text-primary-700">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="text-sm font-semibold">送信完了</div>
                  </div>
                </div>
              </div>
            </div>
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
