# Fonts

このディレクトリには、フォーム営業モーヤメで使用するWebフォントを配置します。

## 使用フォント

### メインフォント: Inter
- Google Fonts経由でロード（推奨）
- または、自己ホスティング用にここに配置

### 日本語フォント
- システムフォントを使用（Hiragino Sans, Noto Sans JP, Yu Gothic等）
- 特定のフォントが必要な場合のみ配置

## フォントファイル形式

自己ホスティングする場合：
- WOFF2（最優先、最も圧縮率が高い）
- WOFF（フォールバック）

## ディレクトリ構造

```
fonts/
├── inter/
│   ├── inter-regular.woff2
│   ├── inter-medium.woff2
│   ├── inter-semibold.woff2
│   └── inter-bold.woff2
└── custom/
    └── （カスタムフォントがある場合）
```

## @font-face 定義例

```css
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/inter/inter-regular.woff2') format('woff2');
}
```

## パフォーマンス最適化

- `font-display: swap` を使用してFOITを防ぐ
- 使用するウェイトのみをロード
- サブセット化を検討（日本語フォントの場合）
- プリロードを活用

```html
<link rel="preload" href="/fonts/inter/inter-regular.woff2" as="font" type="font/woff2" crossorigin>
```
