/**
 * メール関連の型定義
 */

/**
 * メール
 */
export interface Email {
  id: string;
  userId: string;
  subject: string;
  content: string;
  html?: string;
  status: EmailStatus;
  industryId?: string;
  createdAt: Date;
  updatedAt: Date;
  sentAt?: Date;
}

/**
 * メールステータス
 */
export type EmailStatus =
  | 'draft'       // 下書き
  | 'processing'  // 処理中
  | 'ready'       // 送信準備完了
  | 'sending'     // 送信中
  | 'sent'        // 送信完了
  | 'failed'      // 送信失敗
  | 'cancelled';  // キャンセル

/**
 * メールテンプレート
 */
export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  html?: string;
  industryId?: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * メール送信リクエスト
 */
export interface SendEmailRequest {
  to: string[];
  subject: string;
  html: string;
  industryId?: string;
  scheduledAt?: Date;
  batchSize?: number;
}

/**
 * メール送信レスポンス
 */
export interface SendEmailResponse {
  emailId: string;
  status: EmailStatus;
  queuedCount: number;
  estimatedCompletionTime?: Date;
}

/**
 * CSS強化リクエスト
 */
export interface EnhanceEmailRequest {
  content: string;
  subject?: string;
  options?: EnhanceOptions;
}

/**
 * CSS強化オプション
 */
export interface EnhanceOptions {
  style?: 'professional' | 'casual' | 'formal';
  colorScheme?: 'light' | 'dark' | 'auto';
  includeImages?: boolean;
}

/**
 * CSS強化レスポンス
 */
export interface EnhanceEmailResponse {
  html: string;
  processingTime: number;
  suggestions?: string[];
}

/**
 * メールプレビュー設定
 */
export interface PreviewConfig {
  device: 'desktop' | 'mobile' | 'tablet';
  client: 'gmail' | 'outlook' | 'apple-mail' | 'other';
  darkMode: boolean;
}

/**
 * メール受信者
 */
export interface Recipient {
  email: string;
  name?: string;
  variables?: Record<string, string>;
}

/**
 * メール統計
 */
export interface EmailStats {
  emailId: string;
  sent: number;
  delivered: number;
  bounced: number;
  opened: number;
  clicked: number;
  unsubscribed: number;
  openRate: number;
  clickRate: number;
  bounceRate: number;
  unsubscribeRate: number;
}

/**
 * メールイベント
 */
export interface EmailEvent {
  id: string;
  emailId: string;
  recipientEmail: string;
  type: EmailEventType;
  timestamp: Date;
  metadata?: Record<string, any>;
}

/**
 * メールイベントタイプ
 */
export type EmailEventType =
  | 'sent'
  | 'delivered'
  | 'bounced'
  | 'opened'
  | 'clicked'
  | 'unsubscribed'
  | 'complained';

/**
 * 配信停止設定
 */
export interface UnsubscribeConfig {
  enabled: boolean;
  linkText: string;
  confirmationRequired: boolean;
}
