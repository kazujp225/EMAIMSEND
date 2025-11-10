/**
 * 共通型定義
 */

export * from './email';
export * from './user';
export * from './industry';

/**
 * APIレスポンスの共通型
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

/**
 * APIエラー
 */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

/**
 * ページネーション
 */
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/**
 * ページネーション付きレスポンス
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}

/**
 * ソート設定
 */
export interface SortConfig {
  field: string;
  order: 'asc' | 'desc';
}

/**
 * フィルター設定
 */
export interface FilterConfig {
  field: string;
  operator: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'in';
  value: any;
}

/**
 * 検索パラメータ
 */
export interface SearchParams {
  query?: string;
  filters?: FilterConfig[];
  sort?: SortConfig;
  page?: number;
  limit?: number;
}

/**
 * 日時範囲
 */
export interface DateRange {
  start: Date;
  end: Date;
}

/**
 * アップロードファイル
 */
export interface UploadFile {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  uploadedAt: Date;
}

/**
 * 通知
 */
export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

/**
 * 統計情報
 */
export interface Stats {
  label: string;
  value: number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
}
