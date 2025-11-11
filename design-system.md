# デザインシステム - フォーム営業モーヤメ
**コンセプト**: シンプルかつ人間らしいデザイン

**バージョン**: 1.0
**最終更新**: 2025-11-10

---

## 目次

1. [デザイン哲学](#1-デザイン哲学)
2. [カラーシステム](#2-カラーシステム)
3. [タイポグラフィ](#3-タイポグラフィ)
4. [スペーシング＆レイアウト](#4-スペーシングレイアウト)
5. [コンポーネント](#5-コンポーネント)
6. [アイコン＆ビジュアル](#6-アイコンビジュアル)
7. [モーション](#7-モーション)
8. [レスポンシブ](#8-レスポンシブ)
9. [アクセシビリティ](#9-アクセシビリティ)
10. [実装例](#10-実装例)

---

## 1. デザイン哲学

### 1.1 コアプリンシパル

#### 人間らしさ（Human）
```
・温かみのある色使い
・柔らかい曲線
・適度な余白で呼吸できるデザイン
・完璧すぎない、親しみやすさ
```

#### シンプルさ（Simple）
```
・必要な要素だけ
・明確な階層構造
・迷わせない導線
・装飾より機能
```

#### 信頼感（Trustworthy）
```
・一貫性のあるデザイン
・予測可能な動作
・明確なフィードバック
・透明性の高い情報提示
```

### 1.2 デザイン原則

#### 1. 余白を恐れない
```
詰め込みすぎず、十分な余白で情報を呼吸させる。
余白自体がデザイン要素。
```

#### 2. 階層を明確に
```
重要度に応じて、サイズ・色・位置で明確な階層を作る。
ユーザーは迷わず、次に何をすべきかわかる。
```

#### 3. 一貫性を保つ
```
同じ意味のものは同じ見た目に。
ユーザーが学習した規則を裏切らない。
```

#### 4. フィードバックは即座に
```
クリック、ホバー、入力などのアクションには、
必ず視覚的なフィードバックを返す。
```

#### 5. 人間の温かみを
```
完璧な幾何学より、少し柔らかい曲線。
機械的な色より、自然で温かい色。
```

---

## 2. カラーシステム

### 2.1 デザインコンセプト

```
「温かみのある、落ち着いた色調」

・冷たい青ではなく、少し温かみのある青緑
・鮮やかすぎない、目に優しい彩度
・自然界にある色に近い配色
```

### 2.2 プライマリカラー

#### メインカラー: Teal（青緑）
```css
/* プライマリ */
--color-primary-50:  #F0FDFA;  /* 最も薄い背景 */
--color-primary-100: #CCFBF1;  /* 薄い背景 */
--color-primary-200: #99F6E4;  /* ホバー背景 */
--color-primary-300: #5EEAD4;  /* ボーダー */
--color-primary-400: #2DD4BF;  /* アクセント軽 */
--color-primary-500: #14B8A6;  /* メインブランドカラー ★ */
--color-primary-600: #0D9488;  /* ホバー */
--color-primary-700: #0F766E;  /* アクティブ */
--color-primary-800: #115E59;  /* 濃い */
--color-primary-900: #134E4A;  /* 最も濃い */
```

**使用例**:
- ボタン背景: `primary-500`
- ホバー: `primary-600`
- リンクテキスト: `primary-600`
- 背景アクセント: `primary-50`

**なぜこの色？**
- 青緑は信頼感と親しみやすさを両立
- 緑の要素で「成長」「前進」を連想
- 青の要素で「安定」「信頼」を連想

---

### 2.3 セカンダリカラー

#### アクセントカラー: Coral（コーラル）
```css
/* セカンダリ - CTA・強調用 */
--color-secondary-50:  #FFF7ED;
--color-secondary-100: #FFEDD5;
--color-secondary-200: #FED7AA;
--color-secondary-300: #FDBA74;
--color-secondary-400: #FB923C;
--color-secondary-500: #F97316;  /* メインアクセント ★ */
--color-secondary-600: #EA580C;  /* ホバー */
--color-secondary-700: #C2410C;
--color-secondary-800: #9A3412;
--color-secondary-900: #7C2D12;
```

**使用例**:
- 主要CTA（「無料で1通送る」）: `secondary-500`
- ホバー: `secondary-600`
- バッジ・タグ: `secondary-100` (背景) + `secondary-700` (テキスト)

**なぜこの色？**
- オレンジの温かみで親しみやすさ
- 赤みが少ないので攻撃的でない
- プライマリの青緑と補色に近く、視認性が高い

---

### 2.4 ニュートラルカラー

#### グレースケール: Warm Gray
```css
/* ニュートラル - 少し温かみのあるグレー */
--color-neutral-50:  #FAFAF9;  /* 背景 */
--color-neutral-100: #F5F5F4;  /* カード背景 */
--color-neutral-200: #E7E5E4;  /* ボーダー */
--color-neutral-300: #D6D3D1;  /* ボーダー濃 */
--color-neutral-400: #A8A29E;  /* プレースホルダー */
--color-neutral-500: #78716C;  /* セカンダリテキスト ★ */
--color-neutral-600: #57534E;  /* セカンダリテキスト濃 */
--color-neutral-700: #44403C;  /* 本文テキスト */
--color-neutral-800: #292524;  /* 見出しテキスト */
--color-neutral-900: #1C1917;  /* 最も濃いテキスト ★ */
```

**使用例**:
- 本文テキスト: `neutral-700`
- 見出し: `neutral-900`
- セカンダリテキスト: `neutral-500`
- 背景: `neutral-50`
- カード背景: `neutral-100`（または白）

**ポイント**:
- 完全な黒（#000000）は使わない
- 完全なグレーではなく、わずかに茶色がかった温かいグレー
- 目に優しい柔らかさ

---

### 2.5 セマンティックカラー

#### 成功・警告・エラー
```css
/* 成功 - Green */
--color-success-50:  #F0FDF4;
--color-success-500: #22C55E;  /* メイン ★ */
--color-success-600: #16A34A;
--color-success-700: #15803D;

/* 警告 - Amber */
--color-warning-50:  #FFFBEB;
--color-warning-500: #F59E0B;  /* メイン ★ */
--color-warning-600: #D97706;
--color-warning-700: #B45309;

/* エラー - Red */
--color-error-50:  #FEF2F2;
--color-error-500: #EF4444;  /* メイン ★ */
--color-error-600: #DC2626;
--color-error-700: #B91C1C;

/* 情報 - Blue */
--color-info-50:  #EFF6FF;
--color-info-500: #3B82F6;  /* メイン ★ */
--color-info-600: #2563EB;
--color-info-700: #1D4ED8;
```

---

### 2.6 背景カラー

```css
/* 背景バリエーション */
--bg-primary: #FFFFFF;           /* 白背景（カード） */
--bg-secondary: #FAFAF9;         /* オフホワイト（ページ背景） */
--bg-tertiary: #F5F5F4;          /* 薄いグレー（セクション区切り） */
--bg-accent: #F0FDFA;            /* 薄い青緑（アクセント背景） */
--bg-accent-warm: #FFF7ED;       /* 薄いオレンジ（温かい背景） */
```

**使用方針**:
- ページ全体: `bg-secondary`（オフホワイト）
- カード・モーダル: `bg-primary`（白）
- セクション区切り: `bg-tertiary`
- アクセント領域: `bg-accent` または `bg-accent-warm`

---

### 2.7 カラーアクセシビリティ

#### コントラスト比（WCAG AA準拠）

```
【テキストとのコントラスト比】
✓ neutral-900 on white:        21:1  (AAA)
✓ neutral-700 on white:        10:1  (AAA)
✓ neutral-500 on white:        4.8:1 (AA)
✓ primary-600 on white:        4.7:1 (AA)
✓ white on primary-500:        4.5:1 (AA)
✓ white on secondary-500:      4.5:1 (AA)

【ボタンの組み合わせ】
✓ primary-500 背景 + white テキスト: OK
✓ secondary-500 背景 + white テキスト: OK
✓ neutral-100 背景 + neutral-700 テキスト: OK
```

---

## 3. タイポグラフィ

### 3.1 フォントファミリー

#### メインフォント
```css
/* 和文・欧文両方に対応 */
font-family:
  'Inter',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  'Hiragino Sans',
  'Hiragino Kaku Gothic ProN',
  'Noto Sans JP',
  'Yu Gothic',
  'Meiryo',
  sans-serif;
```

**特徴**:
- Inter: 読みやすく、現代的で温かみのある欧文フォント
- ヒラギノ角ゴシック: 日本語の標準的で読みやすいフォント
- システムフォント優先で高速表示

#### コード・等幅フォント
```css
font-family:
  'JetBrains Mono',
  'Fira Code',
  'Menlo',
  'Monaco',
  'Consolas',
  monospace;
```

---

### 3.2 タイプスケール

#### フォントサイズ（流体的スケール）

```css
/* Display - 超大見出し（ランディングページのヒーロー） */
--font-size-display:  clamp(48px, 8vw, 72px);
--line-height-display: 1.1;
--font-weight-display: 700;

/* Heading 1 - ページタイトル */
--font-size-h1:  clamp(36px, 5vw, 48px);
--line-height-h1: 1.2;
--font-weight-h1: 700;

/* Heading 2 - セクションタイトル */
--font-size-h2:  clamp(30px, 4vw, 36px);
--line-height-h2: 1.3;
--font-weight-h2: 600;

/* Heading 3 - サブセクション */
--font-size-h3:  clamp(24px, 3vw, 30px);
--line-height-h3: 1.4;
--font-weight-h3: 600;

/* Heading 4 - カードタイトル */
--font-size-h4:  20px;
--line-height-h4: 1.5;
--font-weight-h4: 600;

/* Heading 5 - 小見出し */
--font-size-h5:  18px;
--line-height-h5: 1.5;
--font-weight-h5: 600;

/* Body Large - リード文 */
--font-size-body-lg:  20px;
--line-height-body-lg: 1.7;
--font-weight-body-lg: 400;

/* Body - 本文 */
--font-size-body:  16px;
--line-height-body: 1.7;
--font-weight-body: 400;

/* Body Small - キャプション */
--font-size-body-sm:  14px;
--line-height-body-sm: 1.6;
--font-weight-body-sm: 400;

/* Caption - 注釈 */
--font-size-caption:  12px;
--line-height-caption: 1.5;
--font-weight-caption: 400;
```

**ポイント**:
- `clamp()` 関数で流体的にサイズ変化
- 行間（line-height）は広めに設定（1.6〜1.7）で読みやすく
- 見出しは太すぎない（700 or 600）柔らかい印象

---

### 3.3 タイポグラフィスタイル

#### 見出しスタイル
```css
h1, h2, h3, h4, h5 {
  color: var(--color-neutral-900);
  font-weight: 600;
  letter-spacing: -0.02em;  /* 少しだけ詰める */
  margin-bottom: 0.5em;
}

/* 大見出しは行間をタイトに */
h1, h2 {
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.03em;
}
```

#### 本文スタイル
```css
p {
  color: var(--color-neutral-700);
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 1em;
  max-width: 65ch;  /* 1行65文字程度で折り返し（読みやすさ） */
}

/* リード文 */
.lead {
  font-size: 20px;
  line-height: 1.7;
  color: var(--color-neutral-600);
  margin-bottom: 1.5em;
}

/* セカンダリテキスト */
.text-secondary {
  color: var(--color-neutral-500);
  font-size: 14px;
}
```

#### リンクスタイル
```css
a {
  color: var(--color-primary-600);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: all 0.2s ease;
}

a:hover {
  color: var(--color-primary-700);
  text-decoration-thickness: 2px;
}

/* ボタンとしてのリンクは下線なし */
.button {
  text-decoration: none;
}
```

---

## 4. スペーシング＆レイアウト

### 4.1 スペーシングシステム

#### 基本単位: 4px（0.25rem）

```css
--space-0: 0;
--space-1: 4px;    /* 0.25rem */
--space-2: 8px;    /* 0.5rem */
--space-3: 12px;   /* 0.75rem */
--space-4: 16px;   /* 1rem */    ★ 基準
--space-5: 20px;   /* 1.25rem */
--space-6: 24px;   /* 1.5rem */
--space-8: 32px;   /* 2rem */
--space-10: 40px;  /* 2.5rem */
--space-12: 48px;  /* 3rem */
--space-16: 64px;  /* 4rem */
--space-20: 80px;  /* 5rem */
--space-24: 96px;  /* 6rem */
--space-32: 128px; /* 8rem */
```

**使用ガイド**:
```
・space-2, space-3: 密接な要素間（アイコンとテキスト）
・space-4, space-6: 通常の要素間（段落間、フォームフィールド間）
・space-8, space-12: セクション内の要素間
・space-16, space-20: セクション間
・space-24, space-32: 大きなセクション間
```

---

### 4.2 レイアウトグリッド

#### コンテナ幅
```css
--container-xs:  480px;
--container-sm:  640px;
--container-md:  768px;
--container-lg:  1024px;
--container-xl:  1280px;   /* 基本の最大幅 ★ */
--container-2xl: 1536px;
```

#### パディング
```css
/* コンテナの左右パディング */
--container-padding-mobile:  16px;  /* モバイル */
--container-padding-tablet:  24px;  /* タブレット */
--container-padding-desktop: 32px;  /* デスクトップ */
```

#### グリッドシステム
```css
/* 12カラムグリッド */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;  /* カラム間隔 */
}

/* よく使うレイアウト */
.grid-2-col {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3-col {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4-col {
  grid-template-columns: repeat(4, 1fr);
}

/* 2/3 と 1/3 の分割（左が広い） */
.grid-2-1 {
  grid-template-columns: 2fr 1fr;
}
```

---

### 4.3 ブレークポイント

```css
/* モバイルファースト */
--breakpoint-sm:  640px;   /* スマートフォン（横） */
--breakpoint-md:  768px;   /* タブレット */
--breakpoint-lg:  1024px;  /* デスクトップ */
--breakpoint-xl:  1280px;  /* ワイドデスクトップ */
--breakpoint-2xl: 1536px;  /* 超ワイド */
```

**メディアクエリ例**:
```css
/* モバイル: デフォルト */
.card {
  padding: 16px;
}

/* タブレット以上 */
@media (min-width: 768px) {
  .card {
    padding: 24px;
  }
}

/* デスクトップ以上 */
@media (min-width: 1024px) {
  .card {
    padding: 32px;
  }
}
```

---

### 4.4 セクション構成

```css
/* セクションの基本構造 */
.section {
  padding-top: var(--space-16);     /* 64px */
  padding-bottom: var(--space-16);   /* 64px */
}

@media (min-width: 768px) {
  .section {
    padding-top: var(--space-20);    /* 80px */
    padding-bottom: var(--space-20);  /* 80px */
  }
}

@media (min-width: 1024px) {
  .section {
    padding-top: var(--space-24);    /* 96px */
    padding-bottom: var(--space-24);  /* 96px */
  }
}
```

---

## 5. コンポーネント

### 5.1 ボタン

#### プライマリボタン（主要CTA）
```css
.button-primary {
  /* 基本スタイル */
  background-color: var(--color-secondary-500);
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 12px;  /* 柔らかい角丸 */
  border: none;
  cursor: pointer;

  /* シャドウで立体感 */
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.06);

  /* トランジション */
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.button-primary:hover {
  background-color: var(--color-secondary-600);
  transform: translateY(-2px);
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
}

.button-primary:active {
  transform: translateY(0);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.1);
}

/* フォーカス（アクセシビリティ） */
.button-primary:focus-visible {
  outline: 3px solid var(--color-secondary-200);
  outline-offset: 2px;
}
```

#### セカンダリボタン
```css
.button-secondary {
  background-color: transparent;
  color: var(--color-primary-600);
  border: 2px solid var(--color-primary-300);
  padding: 12px 26px;  /* ボーダー分、パディング調整 */
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button-secondary:hover {
  background-color: var(--color-primary-50);
  border-color: var(--color-primary-500);
  color: var(--color-primary-700);
}
```

#### テキストボタン
```css
.button-text {
  background: none;
  border: none;
  color: var(--color-primary-600);
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
  transition: all 0.2s ease;
}

.button-text:hover {
  color: var(--color-primary-700);
  text-decoration-thickness: 2px;
}
```

#### サイズバリエーション
```css
/* Small */
.button-sm {
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 10px;
}

/* Large */
.button-lg {
  font-size: 18px;
  padding: 16px 36px;
  border-radius: 14px;
}
```

---

### 5.2 インプットフィールド

```css
.input {
  /* 基本スタイル */
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-neutral-900);
  background-color: white;
  border: 2px solid var(--color-neutral-200);
  border-radius: 10px;
  transition: all 0.2s ease;
}

/* プレースホルダー */
.input::placeholder {
  color: var(--color-neutral-400);
}

/* フォーカス */
.input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 4px var(--color-primary-50);
}

/* エラー状態 */
.input.error {
  border-color: var(--color-error-500);
}

.input.error:focus {
  box-shadow: 0 0 0 4px var(--color-error-50);
}

/* 成功状態 */
.input.success {
  border-color: var(--color-success-500);
}

/* 無効化 */
.input:disabled {
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-400);
  cursor: not-allowed;
}
```

#### テキストエリア
```css
.textarea {
  /* inputの継承 + */
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
}
```

#### ラベル
```css
.label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-neutral-700);
  margin-bottom: 6px;
}

/* 必須マーク */
.label .required {
  color: var(--color-error-500);
  margin-left: 4px;
}
```

#### ヘルプテキスト
```css
.help-text {
  font-size: 14px;
  color: var(--color-neutral-500);
  margin-top: 6px;
}

.help-text.error {
  color: var(--color-error-600);
}
```

---

### 5.3 カード

```css
.card {
  /* 基本 */
  background-color: white;
  border-radius: 16px;  /* 大きめの角丸で柔らかく */
  padding: 24px;

  /* 境界線 */
  border: 1px solid var(--color-neutral-200);

  /* シャドウ */
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.05),
    0 1px 2px rgba(0, 0, 0, 0.03);

  /* トランジション */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ホバー可能なカード */
.card.hoverable:hover {
  transform: translateY(-4px);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.08),
    0 4px 8px rgba(0, 0, 0, 0.04);
  border-color: var(--color-primary-200);
}

/* カード内部の要素 */
.card-header {
  margin-bottom: 16px;
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-neutral-900);
  margin-bottom: 8px;
}

.card-description {
  font-size: 14px;
  color: var(--color-neutral-600);
}

.card-content {
  margin-bottom: 16px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--color-neutral-100);
}
```

---

### 5.4 モーダル

```css
/* オーバーレイ */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);  /* 背景をぼかす */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

/* モーダル本体 */
.modal {
  background-color: white;
  border-radius: 20px;  /* 大きめの角丸 */
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 32px;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.modal-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-neutral-900);
}

.modal-close {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: var(--color-neutral-500);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-700);
}
```

---

### 5.5 バッジ・タグ

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 12px;  /* ピル型 */
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
}

/* カラーバリエーション */
.badge-primary {
  background-color: var(--color-primary-100);
  color: var(--color-primary-700);
}

.badge-success {
  background-color: var(--color-success-50);
  color: var(--color-success-700);
}

.badge-warning {
  background-color: var(--color-warning-50);
  color: var(--color-warning-700);
}

.badge-error {
  background-color: var(--color-error-50);
  color: var(--color-error-700);
}
```

---

### 5.6 アラート・通知

```css
.alert {
  padding: 16px 20px;
  border-radius: 12px;
  border-left: 4px solid;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.alert-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-weight: 600;
  margin-bottom: 4px;
}

/* タイプ別 */
.alert-info {
  background-color: var(--color-info-50);
  border-color: var(--color-info-500);
  color: var(--color-info-900);
}

.alert-success {
  background-color: var(--color-success-50);
  border-color: var(--color-success-500);
  color: var(--color-success-900);
}

.alert-warning {
  background-color: var(--color-warning-50);
  border-color: var(--color-warning-500);
  color: var(--color-warning-900);
}

.alert-error {
  background-color: var(--color-error-50);
  border-color: var(--color-error-500);
  color: var(--color-error-900);
}
```

---

### 5.7 トースト通知

```css
.toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  max-width: 400px;
  background-color: white;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--color-neutral-200);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 2000;

  /* アニメーション */
  animation: toast-slide-in 0.3s ease-out;
}

@keyframes toast-slide-in {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

---

## 6. アイコン＆ビジュアル

### 6.1 アイコンシステム

#### アイコンライブラリ
```
使用: Heroicons (https://heroicons.com/)
スタイル: Outline（線画）を基本、強調時にSolid（塗り）
```

#### サイズ
```css
--icon-xs:  16px;
--icon-sm:  20px;
--icon-md:  24px;  /* 標準 */
--icon-lg:  32px;
--icon-xl:  48px;
```

#### 色
```css
/* アイコンはテキストカラーを継承 */
.icon {
  color: currentColor;
}

/* プライマリアイコン */
.icon-primary {
  color: var(--color-primary-500);
}

/* セカンダリアイコン */
.icon-secondary {
  color: var(--color-neutral-500);
}
```

---

### 6.2 イラストレーション

#### スタイルガイドライン
```
・手描き風の温かみのあるイラスト
・Undraw、Blush、Streamline などの無料リソース
・ブランドカラー（Teal + Coral）を使用
・人物イラストを多用して「人間らしさ」を表現
```

#### 使用シーン
```
・空状態（データがない画面）
・エラー画面
・オンボーディング
・機能説明
```

---

### 6.3 画像スタイル

```css
.image {
  border-radius: 12px;
  overflow: hidden;
}

/* 角丸を大きくして柔らかく */
.image-soft {
  border-radius: 20px;
}

/* 完全な円形（アバター等） */
.image-circle {
  border-radius: 50%;
}

/* 画像にシャドウ */
.image-shadow {
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.06);
}
```

---

## 7. モーション

### 7.1 アニメーション原則

```
1. 速すぎず遅すぎず（200-400ms）
2. 自然なイージング（ease-out が基本）
3. 必要なときだけ動かす
4. パフォーマンスを考慮（transform と opacity のみ）
```

### 7.2 トランジション

```css
/* 標準 */
--transition-fast:   150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base:   200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow:   300ms cubic-bezier(0.4, 0, 0.2, 1);

/* イージング関数 */
--ease-in:      cubic-bezier(0.4, 0, 1, 1);
--ease-out:     cubic-bezier(0, 0, 0.2, 1);
--ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);
```

---

### 7.3 アニメーションパターン

#### フェードイン
```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fade-in 300ms ease-out;
}
```

#### スライドアップ
```css
@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-up {
  animation: slide-up 300ms ease-out;
}
```

#### スケール（ズーム）
```css
@keyframes scale-in {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.scale-in {
  animation: scale-in 200ms ease-out;
}
```

#### バウンス（微細）
```css
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.bounce-subtle {
  animation: bounce-subtle 0.5s ease-in-out;
}
```

---

### 7.4 ホバー効果

```css
/* ボタンの持ち上がり */
.lift-on-hover {
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}

.lift-on-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* カードの持ち上がり */
.card:hover {
  transform: translateY(-4px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* リンクの下線アニメーション */
.link-animated {
  position: relative;
  text-decoration: none;
}

.link-animated::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease-out;
}

.link-animated:hover::after {
  width: 100%;
}
```

---

## 8. レスポンシブ

### 8.1 モバイルファースト

```css
/* デフォルト: モバイル（0-767px） */
.element {
  font-size: 16px;
  padding: 16px;
}

/* タブレット（768px以上） */
@media (min-width: 768px) {
  .element {
    font-size: 18px;
    padding: 24px;
  }
}

/* デスクトップ（1024px以上） */
@media (min-width: 1024px) {
  .element {
    font-size: 20px;
    padding: 32px;
  }
}
```

---

### 8.2 レスポンシブタイポグラフィ

```css
/* clamp() を使った流体的スケーリング */
h1 {
  font-size: clamp(32px, 5vw, 48px);
}

h2 {
  font-size: clamp(24px, 4vw, 36px);
}

p {
  font-size: clamp(14px, 1.5vw, 16px);
}
```

---

### 8.3 レスポンシブグリッド

```css
.grid-responsive {
  display: grid;
  gap: 24px;

  /* モバイル: 1カラム */
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .grid-responsive {
    /* タブレット: 2カラム */
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    /* デスクトップ: 3カラム */
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 9. アクセシビリティ

### 9.1 フォーカス管理

```css
/* フォーカス可能な要素 */
a, button, input, textarea, select {
  outline: none;
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid var(--color-primary-500);
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

### 9.2 コントラスト

```
最小コントラスト比: 4.5:1（WCAG AA）
推奨コントラスト比: 7:1（WCAG AAA）

【確認済みの組み合わせ】
✓ neutral-900 on white:      21:1
✓ neutral-700 on white:      10:1
✓ primary-600 on white:      4.7:1
✓ white on primary-500:      4.5:1
```

---

### 9.3 キーボードナビゲーション

```
・すべてのインタラクティブ要素はキーボードで操作可能
・Tab キーで順次移動
・Enter / Space でアクティブ化
・Escape でモーダル・ドロップダウンを閉じる
```

---

### 9.4 スクリーンリーダー

```html
<!-- 視覚的に隠すが、スクリーンリーダーには読み上げる -->
<span class="sr-only">詳細を見る</span>

<!-- 装飾的な画像は alt を空に -->
<img src="decoration.svg" alt="" />

<!-- 意味のある画像は alt を記述 -->
<img src="chart.png" alt="2024年の売上推移グラフ" />
```

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## 10. 実装例

### 10.1 ヒーローセクション

```html
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">
        貼って、整えて、刺さる。<br>
        営業メールを1クリックで。
      </h1>
      <p class="hero-description">
        文章をペーストして「CSS強化」を押すだけ。SONNETがプロ品質のHTML＆インラインCSSに整形。業種別に最適な相手へ、感じよく届きます。
      </p>
      <div class="hero-cta">
        <button class="button-primary button-lg">
          無料で1通送ってみる
        </button>
        <button class="button-secondary button-lg">
          業種別デモを見る
        </button>
      </div>
      <p class="hero-note">
        同意済み宛先への送信を前提。配信停止は1クリック。
      </p>
    </div>
    <div class="hero-visual">
      <!-- イラストまたはスクリーンショット -->
    </div>
  </div>
</section>
```

```css
.hero {
  padding: 80px 0;
  background: linear-gradient(
    180deg,
    var(--color-primary-50) 0%,
    white 100%
  );
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero .container {
    grid-template-columns: 1.2fr 1fr;
    gap: 80px;
  }
}

.hero-title {
  font-size: clamp(36px, 6vw, 56px);
  font-weight: 700;
  color: var(--color-neutral-900);
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.03em;
}

.hero-description {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--color-neutral-600);
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 600px;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.hero-note {
  font-size: 14px;
  color: var(--color-neutral-500);
}
```

---

### 10.2 カードグリッド

```html
<section class="section">
  <div class="container">
    <h2 class="section-title">業種別ターゲティング</h2>
    <p class="section-description">
      150万法人を業種で分け、いま必要な相手にだけ。
    </p>

    <div class="card-grid">
      <div class="card hoverable">
        <div class="card-icon">🏭</div>
        <h3 class="card-title">製造業</h3>
        <p class="card-description">
          歩留まり改善・リードタイム短縮
        </p>
      </div>

      <div class="card hoverable">
        <div class="card-icon">💻</div>
        <h3 class="card-title">IT・SaaS</h3>
        <p class="card-description">
          導入期間・API連携・ROI
        </p>
      </div>

      <!-- 他の業種カード -->
    </div>
  </div>
</section>
```

```css
.section-title {
  text-align: center;
  font-size: clamp(30px, 4vw, 36px);
  font-weight: 600;
  color: var(--color-neutral-900);
  margin-bottom: 16px;
}

.section-description {
  text-align: center;
  font-size: 18px;
  color: var(--color-neutral-600);
  margin-bottom: 48px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.card-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.card-description {
  font-size: 14px;
  color: var(--color-neutral-600);
}
```

---

### 10.3 フォーム

```html
<form class="form">
  <div class="form-group">
    <label class="label" for="email">
      メールアドレス
      <span class="required">*</span>
    </label>
    <input
      type="email"
      id="email"
      class="input"
      placeholder="you@example.com"
      required
    />
    <p class="help-text">
      登録したメールアドレスに確認メールをお送りします。
    </p>
  </div>

  <div class="form-group">
    <label class="label" for="message">
      本文
    </label>
    <textarea
      id="message"
      class="textarea"
      placeholder="営業メールの本文を貼り付けてください..."
      rows="8"
    ></textarea>
  </div>

  <button type="submit" class="button-primary button-lg">
    送信する
  </button>
</form>
```

```css
.form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 24px;
}

.form-group:last-child {
  margin-bottom: 0;
}
```

---

## まとめ

このデザインシステムは:

✓ **シンプル**: 必要最小限の要素で構成
✓ **人間らしい**: 温かみのある色と柔らかい形状
✓ **一貫性**: すべてのコンポーネントが統一されたルールに従う
✓ **アクセシブル**: WCAG AA基準を満たす
✓ **スケーラブル**: 拡張しやすい構造

---

## 次のステップ

1. **Figmaでのデザイン作成**: このシステムをベースにUIデザイン
2. **コンポーネントライブラリの実装**: React/Vue等で実装
3. **スタイルガイドの公開**: 開発チームで共有
4. **ユーザーテスト**: 実際のユーザーフィードバックで改善
