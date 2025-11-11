# Icons

このディレクトリには、フォーム営業モーヤメで使用するアイコンファイルを配置します。

## ディレクトリ構造

```
icons/
├── favicon.ico        # ファビコン
├── icon-192.png       # PWA用アイコン（192x192）
├── icon-512.png       # PWA用アイコン（512x512）
├── apple-touch-icon.png  # Apple Touch Icon（180x180）
├── social/            # ソーシャルメディアアイコン
│   ├── twitter.svg
│   ├── facebook.svg
│   └── linkedin.svg
└── ui/                # UI用アイコン
    ├── check.svg
    ├── close.svg
    └── ...
```

## アイコン仕様

### Favicon
- サイズ: 32x32, 16x16
- フォーマット: ICO

### PWA Icons
- サイズ: 192x192, 512x512
- フォーマット: PNG
- 背景: 透明または白

### Apple Touch Icon
- サイズ: 180x180
- フォーマット: PNG
- 背景: 不透明

## 使用ライブラリ

プロジェクトでは、以下のアイコンライブラリを使用することを推奨：
- Heroicons（https://heroicons.com/）
- Lucide Icons（https://lucide.dev/）
- React Icons（https://react-icons.github.io/react-icons/）
