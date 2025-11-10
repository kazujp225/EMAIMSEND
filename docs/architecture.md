# システムアーキテクチャ

## 概要

SendCraftは、Next.js 15ベースのモダンなWebアプリケーションとして構築されています。

## フロントエンド

### 技術スタック
- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **状態管理**: React Context / Zustand（今後実装）
- **フォーム**: React Hook Form + Zod（今後実装）

### ディレクトリ構造

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # ルートレイアウト
│   ├── page.tsx      # トップページ
│   └── globals.css   # グローバルスタイル
├── components/       # Reactコンポーネント
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── IndustryDemo.tsx
│   ├── Pricing.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── lib/              # ユーティリティ関数
└── types/            # TypeScript型定義
```

## バックエンド（今後実装）

### 技術スタック
- **ランタイム**: Node.js 20
- **フレームワーク**: Next.js API Routes / Express
- **ORM**: Prisma
- **認証**: NextAuth.js
- **メール送信**: SendGrid / Amazon SES

### API設計
- RESTful API
- OpenAPI 3.0準拠
- JWT認証

## インフラ（今後実装）

### ホスティング
- **フロントエンド**: Vercel / AWS Amplify
- **バックエンド**: AWS ECS / GCP Cloud Run
- **データベース**: PostgreSQL 15 (AWS RDS / GCP Cloud SQL)
- **キャッシュ**: Redis 7 (AWS ElastiCache / GCP Memorystore)

### CI/CD
- GitHub Actions
- 自動テスト
- 自動デプロイ

## セキュリティ

- HTTPS必須（TLS 1.3）
- データ暗号化（保存時・通信時）
- CORS設定
- レート制限
- CSRFトークン

## パフォーマンス目標

- ページ読み込み速度: 2秒以内
- CSS強化処理時間: 10秒以内
- API応答時間: 200ms以内
- アップタイム: 99.9%以上

## 監視・ログ

- **アプリケーション監視**: Vercel Analytics / Sentry
- **ログ管理**: CloudWatch / Stackdriver
- **パフォーマンス**: Lighthouse CI
