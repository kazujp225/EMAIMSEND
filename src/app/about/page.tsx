import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '最速の第一印象',
      description: '文章をペーストするだけで、プロ品質のHTMLメールを最短30秒で作成。営業の第一印象を、最速で最高の状態に。',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: '適切な相手にだけ',
      description: '150万件の法人リストを業種別に分類。業界と役割にフィットする提案を、無駄打ちなく届けます。',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '信頼と配慮',
      description: 'オプトイン、配信停止、ドメイン認証など、到達率と法令順守を妥協しません。特定電子メール法完全準拠。',
    },
  ];

  const stats = [
    { number: '30秒', label: '平均送信時間' },
    { number: '150万件', label: '法人リスト' },
    { number: '10業種', label: '業種別テンプレート' },
    { number: '99.9%', label: 'アップタイム' },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              営業メールの<span className="text-gradient">新しい基準</span>を作る
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8">
              SendCraftは、営業メールの作成・整形・送信を最短30秒で完了できるSaaSプラットフォームです。<br />
              複雑なツールでも、到達率だけのサービスでもない。<br />
              "文章を貼って1通送る"の体験を、最高品質で。
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                ミッション
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                営業の第一印象を、もっと簡単に、もっと確実に。
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                従来の複雑なMAツールでも、到達率だけのメール配信サービスでもなく、<br />
                "営業メール・ランチャー"として、最初の1通を最短で、最高品質で届けます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
              私たちの価値観
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              3つのコアバリュー
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card group hover:border-primary-200 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
                ビジョン
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                すべての営業担当者が、プロ品質のメールを。
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                デザインスキルやHTMLの知識がなくても、AIの力で誰でもプロ品質の営業メールを作成できる世界を目指します。<br />
                営業の本質である"人と人のつながり"に集中できるよう、メール作成の手間を最小化します。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">シンプルさへのこだわり</h3>
                <p className="text-neutral-600 leading-relaxed">
                  複雑な設定や長い学習時間は不要。文章をペーストして送信ボタンを押すだけ。誰でも直感的に使えるシンプルさを追求します。
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">品質へのこだわり</h3>
                <p className="text-neutral-600 leading-relaxed">
                  AIによるCSS強化、主要メールクライアント対応、ドメイン認証サポート。到達率と見た目の美しさを両立します。
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">信頼へのこだわり</h3>
                <p className="text-neutral-600 leading-relaxed">
                  特定電子メール法完全準拠、1クリック配信停止、プライバシー保護。法令順守と受信者への配慮を最優先します。
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">成長へのこだわり</h3>
                <p className="text-neutral-600 leading-relaxed">
                  無料プランから始めて、ビジネスの成長に合わせてスケール。段階的に機能を拡張できる柔軟な料金体系を提供します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              ポジショニング
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              "営業メール・ランチャー"という新しいカテゴリ
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-12">
              従来の「複雑なMAツール」でも「到達率だけのメール会社」でもなく、<br />
              "文章を貼って1通送る"の体験を最短で磨き上げ、<br />
              そこから段階的にスケールできる"営業メール・ランチャー"として、<br />
              新しいカテゴリを創造します。
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-2xl border-2 border-neutral-200">
                <div className="text-neutral-400 text-sm font-semibold mb-2">従来のMAツール</div>
                <div className="text-neutral-900 font-bold mb-3">高機能だが複雑</div>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• 学習コストが高い</li>
                  <li>• 設定が複雑</li>
                  <li>• 高価格</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-6 rounded-2xl text-white border-4 border-primary-600 shadow-xl">
                <div className="text-primary-100 text-sm font-semibold mb-2">SendCraft</div>
                <div className="font-bold mb-3">シンプルで高品質</div>
                <ul className="text-sm text-primary-100 space-y-2">
                  <li>• 直感的で簡単</li>
                  <li>• AI自動整形</li>
                  <li>• 適正価格</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-neutral-200">
                <div className="text-neutral-400 text-sm font-semibold mb-2">従来のメール配信</div>
                <div className="text-neutral-900 font-bold mb-3">到達率重視</div>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• デザイン性が低い</li>
                  <li>• テンプレート不足</li>
                  <li>• サポート弱い</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              歩み
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              SendCraftのこれまで
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-primary-600">2024年10月</div>
                </div>
                <div className="flex-shrink-0 w-4 flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="w-0.5 h-full bg-primary-200"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">サービス構想開始</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    営業メール配信の課題を解決するため、SendCraftの構想がスタート。複雑なツールと到達率重視のサービスの間に、新しいカテゴリを創造することを決意。
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-primary-600">2025年1月</div>
                </div>
                <div className="flex-shrink-0 w-4 flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="w-0.5 h-full bg-primary-200"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">MVP開発開始</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    AI推敲機能とHTMLメール制作機能の開発を開始。最初の1通を最短で、最高品質で届けることに集中。
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-secondary-600">2025年4月</div>
                </div>
                <div className="flex-shrink-0 w-4 flex flex-col items-center">
                  <div className="w-4 h-4 bg-secondary-500 rounded-full"></div>
                  <div className="w-0.5 h-full bg-secondary-200"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">ベータ版リリース</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    限定ユーザー向けにベータ版をリリース。フィードバックを基に、UI/UXを大幅改善。平均送信時間を60秒から30秒に短縮。
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-secondary-600">2025年7月</div>
                </div>
                <div className="flex-shrink-0 w-4 flex flex-col items-center">
                  <div className="w-4 h-4 bg-secondary-500 rounded-full"></div>
                  <div className="w-0.5 h-full bg-secondary-200"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">正式版リリース</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    業種別テンプレート、150万件の法人リスト、到達率95%以上を達成し、正式版をリリース。無料プランでの提供を開始。
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-primary-600">2025年11月</div>
                  <div className="text-sm text-neutral-500 mt-1">現在</div>
                </div>
                <div className="flex-shrink-0 w-4 flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">機能拡充フェーズ</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    ステップメール機能、ABテスト機能を開発中。大企業向けのエンタープライズプランの提供準備を進行中。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
              チーム
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              多様な専門性を持つチーム
            </h2>
            <p className="text-lg text-neutral-600">
              プロダクト、エンジニアリング、デザイン、マーケティングの<br />
              プロフェッショナルが集結しています
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center border border-neutral-200">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                PM
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">プロダクトチーム</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                SaaS業界での豊富な経験を持つプロダクトマネージャーが、ユーザー体験を最優先に設計。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-neutral-200">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                ENG
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">エンジニアリングチーム</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                スケーラブルなインフラとAI技術の専門家が、高速で安定したシステムを構築。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-neutral-200">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                CS
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">カスタマーサクセスチーム</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                お客様の成功を第一に考え、導入から運用まで手厚くサポートいたします。
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-white rounded-2xl p-8 border border-neutral-200 max-w-2xl">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">一緒に働きませんか？</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                SendCraftは、営業メール配信の新しい基準を作るために、チームメンバーを募集しています。<br />
                プロダクトエンジニア、デザイナー、マーケターなど、さまざまなポジションで募集中です。
              </p>
              <Link href="/careers" className="btn-primary">
                採用情報を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              パートナー
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              信頼できるパートナー企業
            </h2>
            <p className="text-lg text-neutral-600">
              SendCraftは、業界をリードする企業とパートナーシップを結んでいます
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-neutral-50 rounded-xl p-8 flex items-center justify-center border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
                  AWS
                </div>
                <div className="text-sm font-semibold text-neutral-700">Amazon Web Services</div>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-8 flex items-center justify-center border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
                  SG
                </div>
                <div className="text-sm font-semibold text-neutral-700">SendGrid</div>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-8 flex items-center justify-center border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
                  ST
                </div>
                <div className="text-sm font-semibold text-neutral-700">Stripe</div>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-8 flex items-center justify-center border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
                  CF
                </div>
                <div className="text-sm font-semibold text-neutral-700">Cloudflare</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">パートナーシップにご興味のある企業様</p>
            <Link href="/contact" className="btn-secondary">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            SendCraftを無料で体験
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            クレジットカード不要。1通のメール送信で、SendCraftの品質を今すぐ体験できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/signup"
              className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
            >
              無料で始める
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-primary-600 transition-all"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
