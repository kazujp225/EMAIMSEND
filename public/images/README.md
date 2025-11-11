# Images

このディレクトリには、フォーム営業モーヤメで使用する画像ファイルを配置します。

## ディレクトリ構造

```
images/
├── logo/              # ロゴ画像
│   ├── logo.svg
│   ├── logo-white.svg
│   └── favicon.ico
├── hero/              # ヒーローセクション用画像
│   ├── hero-bg.jpg
│   └── hero-mockup.png
├── features/          # 機能説明用画像
│   ├── css-enhance.png
│   ├── preview.png
│   └── analytics.png
├── industries/        # 業種別アイコン・画像
│   ├── manufacturing.svg
│   ├── it-saas.svg
│   └── ...
├── screenshots/       # スクリーンショット
│   ├── editor.png
│   ├── dashboard.png
│   └── ...
└── og/                # OGP画像
    ├── og-default.png
    └── og-twitter.png
```

## 画像最適化

- PNG: TinyPNG で圧縮
- JPG: 品質80-85%で保存
- SVG: SVGO で最適化
- WebP: 対応ブラウザ向けに提供

## 命名規則

- ケバブケース（例: hero-background.jpg）
- 説明的な名前を使用
- バージョンがある場合は末尾に付与（例: logo-v2.svg）
