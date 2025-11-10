# SendCraft

> 貼って、整えて、刺さる。営業メールを1クリックで。

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)

SendCraftは、営業メールの作成・整形・送信を最短30秒で完了できるSaaSプラットフォームです。

---

## ✨ 特徴

### 🚀 最速の第一印象
文章をペースト → CSS強化（SONNET） → プロ品質のHTMLメール即プレビュー＆即送信

### 🎯 適切な相手にだけ
150万件の法人リストを業種別に分類。業界×役割にフィットする提案を無駄打ちなく届ける

### 🛡️ 信頼と配慮
オプトイン、配信停止、ドメイン認証など到達率と法令順守を妥協しない

---

## 🎨 デモ

![Hero Screenshot](./docs/images/hero-screenshot.png)
*（作成予定）*

[ライブデモを見る →](https://sendcraft.com/demo)
*（作成予定）*

---

## 📦 主要機能

- **CSS強化（SONNET）**: AIが自動でプレーンテキストをHTML化
- **業種別テンプレート**: 10業種 × 複数シーンの最適化テンプレート
- **リアルタイムプレビュー**: PC・モバイル表示の切り替え
- **到達率最適化**: ドメイン認証・段階配信・法令準拠
- **分析レポート**: 開封率・クリック率・バウンス率

---

## 🛠️ 技術スタック

### フロントエンド
- [Next.js 14](https://nextjs.org/) - React フレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全性
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSS
- [shadcn/ui](https://ui.shadcn.com/) - UIコンポーネント
- [Zustand](https://zustand-demo.pmnd.rs/) - 状態管理
- [React Query](https://tanstack.com/query) - サーバー状態管理

### バックエンド
- [Node.js](https://nodejs.org/) - JavaScript ランタイム
- [Express](https://expressjs.com/) - Web フレームワーク
- [Prisma](https://www.prisma.io/) - ORM
- [NextAuth.js](https://next-auth.js.org/) - 認証
- [Zod](https://zod.dev/) - バリデーション

### インフラ
- [AWS](https://aws.amazon.com/) / [GCP](https://cloud.google.com/) - クラウド
- [Docker](https://www.docker.com/) - コンテナ
- [Kubernetes](https://kubernetes.io/) - オーケストレーション
- [PostgreSQL](https://www.postgresql.org/) - データベース
- [Redis](https://redis.io/) - キャッシュ

---

## 📋 必要要件

- Node.js 20.x 以上
- npm 10.x 以上 / yarn 1.22.x 以上
- PostgreSQL 15.x 以上
- Redis 7.x 以上

---

## 🚀 クイックスタート

### 1. リポジトリのクローン

```bash
git clone https://github.com/your-org/sendcraft.git
cd sendcraft
```

### 2. 依存関係のインストール

```bash
npm install
# または
yarn install
```

### 3. 環境変数の設定

```bash
cp .env.example .env.local
```

`.env.local` を編集:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/sendcraft"

# Redis
REDIS_URL="redis://localhost:6379"

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# OpenAI (SONNET)
OPENAI_API_KEY="sk-..."

# SendGrid
SENDGRID_API_KEY="SG..."

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

### 4. データベースのセットアップ

```bash
# Prisma マイグレーション
npx prisma migrate dev

# シードデータの投入
npx prisma db seed
```

### 5. 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開く

---

## 📁 プロジェクト構造

```
sendcraft/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # 認証関連ページ
│   │   ├── (dashboard)/       # ダッシュボード
│   │   ├── api/               # API Routes
│   │   └── layout.tsx         # ルートレイアウト
│   ├── components/            # Reactコンポーネント
│   │   ├── ui/                # UIコンポーネント
│   │   ├── features/          # 機能別コンポーネント
│   │   └── layouts/           # レイアウトコンポーネント
│   ├── lib/                   # ユーティリティ
│   │   ├── api/               # API クライアント
│   │   ├── utils/             # ヘルパー関数
│   │   └── hooks/             # カスタムフック
│   ├── styles/                # グローバルスタイル
│   └── types/                 # TypeScript型定義
├── prisma/                    # Prismaスキーマ
├── public/                    # 静的ファイル
├── docs/                      # ドキュメント
├── tests/                     # テスト
├── plan.md                    # 要件定義書
├── design-system.md           # デザインシステム
└── README.md                  # このファイル
```

---

## 🧪 テスト

### ユニットテスト

```bash
npm run test
# または
yarn test
```

### E2Eテスト

```bash
npm run test:e2e
# または
yarn test:e2e
```

### テストカバレッジ

```bash
npm run test:coverage
# または
yarn test:coverage
```

---

## 🏗️ ビルド

### 本番ビルド

```bash
npm run build
# または
yarn build
```

### 本番サーバー起動

```bash
npm run start
# または
yarn start
```

---

## 📚 ドキュメント

- [要件定義書](./plan.md) - 詳細な仕様とページ構成
- [デザインシステム](./design-system.md) - カラー、タイポグラフィ、コンポーネント
- [API仕様書](./docs/api-spec.md) - RESTful API ドキュメント（作成予定）
- [ユーザーフロー](./docs/user-flows.md) - ユーザージャーニー（作成予定）

---

## 🔐 セキュリティ

### 実装済み対策
- HTTPS必須（TLS 1.3）
- データ暗号化（保存時・通信時）
- 二要素認証対応
- CSRF対策
- XSS対策
- SQL インジェクション対策（Prisma ORM使用）

### 脆弱性報告
セキュリティ上の問題を発見した場合は、[security@sendcraft.com](mailto:security@sendcraft.com) までご連絡ください。

---

## 📊 パフォーマンス

### 目標値
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### 最適化手法
- 画像の最適化（Next.js Image）
- コード分割（Dynamic Import）
- CDN配信（Cloudflare）
- サーバーサイドレンダリング
- 静的サイト生成

---

## 🌍 ローカライゼーション

現在対応している言語:
- 🇯🇵 日本語（デフォルト）

将来対応予定:
- 🇺🇸 英語
- 🇨🇳 中国語（簡体字）

---

## 🤝 コントリビューション

コントリビューションを歓迎します！以下の手順でお願いします:

1. リポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

詳細は [CONTRIBUTING.md](./CONTRIBUTING.md) をご覧ください。（作成予定）

---

## 📝 ライセンス

このプロジェクトは [MIT License](./LICENSE) の下でライセンスされています。

---

## 👥 チーム

- **プロダクトオーナー**: （記載予定）
- **テックリード**: （記載予定）
- **デザインリード**: （記載予定）

---

## 🙏 謝辞

SendCraftの開発にあたり、以下のオープンソースプロジェクトとサービスに感謝します:

- [Next.js](https://nextjs.org/) - フレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - スタイリング
- [Prisma](https://www.prisma.io/) - データベースORM
- [OpenAI](https://openai.com/) - AI処理
- [Heroicons](https://heroicons.com/) - アイコン

---

## 📞 サポート・お問い合わせ

- **公式サイト**: [https://sendcraft.com](https://sendcraft.com)（作成予定）
- **ドキュメント**: [https://docs.sendcraft.com](https://docs.sendcraft.com)（作成予定）
- **問い合わせ**: [support@sendcraft.com](mailto:support@sendcraft.com)
- **Twitter**: [@SendCraft](https://twitter.com/sendcraft)（作成予定）

---

## 📈 ステータス

- **現在のフェーズ**: 設計・要件定義
- **次のマイルストーン**: MVP開発開始
- **予定リリース日**: 2025年Q2

---

## ⭐ Star History

もしこのプロジェクトが役に立ったら、ぜひスターをお願いします！

[![Star History Chart](https://api.star-history.com/svg?repos=your-org/sendcraft&type=Date)](https://star-history.com/#your-org/sendcraft&Date)

---

**Made with ❤️ by SendCraft Team**
