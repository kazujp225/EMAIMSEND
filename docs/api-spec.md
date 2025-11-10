# API仕様書

## 概要

SendCraft API v1の仕様書です。すべてのAPIはRESTful設計に従い、JSON形式でデータをやり取りします。

## ベースURL

```
開発環境: http://localhost:3000/api/v1
本番環境: https://api.sendcraft.jp/v1
```

## 認証

すべてのAPIリクエストには、JWTトークンを含める必要があります。

```http
Authorization: Bearer {token}
```

## エンドポイント一覧

### 認証

#### POST /auth/signup
新規ユーザー登録

**リクエスト**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "山田太郎"
}
```

**レスポンス**
```json
{
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "山田太郎"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### POST /auth/login
ログイン

**リクエスト**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### メール作成

#### POST /emails/enhance
CSS強化（SONNET）

**リクエスト**
```json
{
  "content": "お世話になっております...",
  "subject": "【ご提案】営業支援ツールのご案内"
}
```

**レスポンス**
```json
{
  "html": "<html>...</html>",
  "processingTime": 8.5
}
```

#### POST /emails/preview
プレビュー生成

**リクエスト**
```json
{
  "html": "<html>...</html>",
  "device": "desktop" // desktop, mobile
}
```

#### POST /emails/send
メール送信

**リクエスト**
```json
{
  "to": ["recipient@example.com"],
  "subject": "件名",
  "html": "<html>...</html>",
  "industryId": "manufacturing"
}
```

### テンプレート

#### GET /templates
テンプレート一覧取得

**クエリパラメータ**
- `industry`: 業種フィルタ
- `limit`: 取得件数（デフォルト: 20）
- `offset`: オフセット

#### GET /templates/{id}
テンプレート詳細取得

#### POST /templates
テンプレート作成

### 分析

#### GET /analytics/campaigns/{id}
キャンペーン分析取得

**レスポンス**
```json
{
  "campaignId": "camp_123",
  "sent": 1000,
  "delivered": 980,
  "opened": 490,
  "clicked": 120,
  "openRate": 0.50,
  "clickRate": 0.245
}
```

## エラーレスポンス

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "メールアドレスが無効です",
    "details": {
      "field": "email"
    }
  }
}
```

### エラーコード

| コード | 説明 |
|--------|------|
| INVALID_REQUEST | リクエストが不正 |
| UNAUTHORIZED | 認証エラー |
| FORBIDDEN | 権限不足 |
| NOT_FOUND | リソースが見つからない |
| RATE_LIMIT_EXCEEDED | レート制限超過 |
| INTERNAL_ERROR | サーバーエラー |

## レート制限

- 無料プラン: 100リクエスト/時間
- スタータープラン: 1,000リクエスト/時間
- スケールプラン: 10,000リクエスト/時間
- エンタープライズ: カスタム

## Webhook（今後実装）

メール送信イベントをWebhookで受け取ることができます。

### イベント

- `email.sent`: メール送信完了
- `email.delivered`: 配信完了
- `email.opened`: 開封
- `email.clicked`: クリック
- `email.bounced`: バウンス
- `email.unsubscribed`: 配信停止
