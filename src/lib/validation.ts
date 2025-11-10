/**
 * バリデーション関数
 */

/**
 * メールアドレスのバリデーション
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * URLのバリデーション
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * 電話番号のバリデーション（日本）
 */
export function isValidPhoneNumber(phoneNumber: string): boolean {
  const cleaned = phoneNumber.replace(/\D/g, '');
  // 10桁または11桁
  return cleaned.length === 10 || cleaned.length === 11;
}

/**
 * 郵便番号のバリデーション（日本）
 */
export function isValidPostalCode(postalCode: string): boolean {
  const cleaned = postalCode.replace(/\D/g, '');
  return cleaned.length === 7;
}

/**
 * パスワードの強度チェック
 * - 8文字以上
 * - 大文字・小文字・数字を含む
 */
export function isStrongPassword(password: string): boolean {
  if (password.length < 8) return false;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);

  return hasUpperCase && hasLowerCase && hasNumber;
}

/**
 * パスワード強度を数値で返す（0-100）
 */
export function getPasswordStrength(password: string): number {
  let strength = 0;

  // 長さ
  if (password.length >= 8) strength += 25;
  if (password.length >= 12) strength += 25;

  // 文字種類
  if (/[a-z]/.test(password)) strength += 15;
  if (/[A-Z]/.test(password)) strength += 15;
  if (/\d/.test(password)) strength += 10;
  if (/[^a-zA-Z\d]/.test(password)) strength += 10;

  return Math.min(strength, 100);
}

/**
 * 空白文字のみかチェック
 */
export function isEmpty(value: string): boolean {
  return value.trim().length === 0;
}

/**
 * 最小文字数チェック
 */
export function minLength(value: string, min: number): boolean {
  return value.length >= min;
}

/**
 * 最大文字数チェック
 */
export function maxLength(value: string, max: number): boolean {
  return value.length <= max;
}

/**
 * 数値の範囲チェック
 */
export function inRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

/**
 * 正の整数かチェック
 */
export function isPositiveInteger(value: number): boolean {
  return Number.isInteger(value) && value > 0;
}

/**
 * ひらがなのみかチェック
 */
export function isHiragana(value: string): boolean {
  return /^[\u3040-\u309F]+$/.test(value);
}

/**
 * カタカナのみかチェック
 */
export function isKatakana(value: string): boolean {
  return /^[\u30A0-\u30FF]+$/.test(value);
}

/**
 * 全角かチェック
 */
export function isFullWidth(value: string): boolean {
  return /^[^\x01-\x7E\xA1-\xDF]+$/.test(value);
}

/**
 * 半角英数字のみかチェック
 */
export function isAlphanumeric(value: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(value);
}

/**
 * HTMLタグを含むかチェック
 */
export function containsHTML(value: string): boolean {
  return /<[^>]+>/.test(value);
}

/**
 * エラーメッセージを生成
 */
export function getValidationError(
  field: string,
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern',
  params?: { min?: number; max?: number }
): string {
  const messages = {
    required: `${field}は必須です`,
    email: '有効なメールアドレスを入力してください',
    minLength: `${field}は${params?.min}文字以上で入力してください`,
    maxLength: `${field}は${params?.max}文字以内で入力してください`,
    pattern: `${field}の形式が正しくありません`,
  };

  return messages[type];
}
