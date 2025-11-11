# デプロイガイド

## Renderへのデプロイ手順

### 1. Renderアカウントの準備
1. [Render](https://render.com)にサインアップ
2. GitHubアカウントと連携

### 2. 新しいWebサービスを作成
1. Renderダッシュボードで「New +」→「Web Service」を選択
2. GitHubリポジトリを選択: `form-eigyo-moyame`
3. 以下の設定を確認:
   - **Name**: `form-eigyo-moyame`
   - **Region**: Oregon (推奨)
   - **Branch**: `main`
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

### 3. 環境変数の設定
Renderダッシュボードで以下の環境変数を設定:

```
NODE_VERSION=20.11.0
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://form-eigyo-moyame.onrender.com

# Resend API (お問い合わせフォーム用)
RESEND_API_KEY=re_xxxxx
EMAIL_FROM=info@form-eigyo-moyame.jp

# Anthropic API (AI推敲・HTML化)
ANTHROPIC_API_KEY=sk-ant-xxxxx
```

### 4. 自動デプロイの有効化
- **Auto-Deploy**: Yes に設定
- `main`ブランチへのpushで自動的にデプロイされます

### 5. カスタムドメインの設定（オプション）
1. Renderダッシュボードで「Settings」→「Custom Domain」
2. `form-eigyo-moyame.jp` を追加
3. DNSレコードを設定:
   ```
   Type: CNAME
   Name: @
   Value: form-eigyo-moyame.onrender.com
   ```

## デプロイ後の確認事項

### ✅ チェックリスト
- [ ] サイトが正常に表示される
- [ ] お問い合わせフォームが動作する
- [ ] 環境変数が正しく設定されている
- [ ] HTTPSで接続できる
- [ ] 全ページが正常にレンダリングされる

## トラブルシューティング

### ビルドエラーが発生する場合
1. `package.json`の依存関係を確認
2. Node.jsバージョンを確認（20.x推奨）
3. ビルドログを確認して詳細なエラーを特定

### 環境変数が反映されない
1. Renderダッシュボードで環境変数を再確認
2. 環境変数変更後、手動で再デプロイ

### パフォーマンスが遅い
1. Freeプランの制限を確認
2. 必要に応じてStarterプラン以上にアップグレード

## render.yamlについて

`render.yaml`ファイルを使用すると、Infrastructure as Codeとしてデプロイ設定を管理できます。

```yaml
services:
  - type: web
    name: form-eigyo-moyame
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
```

## 参考リンク
- [Render ドキュメント](https://render.com/docs)
- [Next.js デプロイガイド](https://nextjs.org/docs/deployment)
