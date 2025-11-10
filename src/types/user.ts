/**
 * ユーザー関連の型定義
 */

/**
 * ユーザー
 */
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  plan: UserPlan;
  status: UserStatus;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}

/**
 * ユーザーロール
 */
export type UserRole = 'admin' | 'member' | 'viewer';

/**
 * ユーザープラン
 */
export type UserPlan = 'free' | 'starter' | 'scale' | 'enterprise';

/**
 * ユーザーステータス
 */
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'deleted';

/**
 * ユーザープロフィール
 */
export interface UserProfile {
  userId: string;
  company?: string;
  industry?: string;
  position?: string;
  phoneNumber?: string;
  address?: Address;
  preferences: UserPreferences;
}

/**
 * 住所
 */
export interface Address {
  postalCode?: string;
  prefecture?: string;
  city?: string;
  street?: string;
  building?: string;
}

/**
 * ユーザー設定
 */
export interface UserPreferences {
  language: 'ja' | 'en';
  timezone: string;
  dateFormat: string;
  emailNotifications: boolean;
  marketingEmails: boolean;
  theme: 'light' | 'dark' | 'auto';
}

/**
 * ユーザー使用状況
 */
export interface UserUsage {
  userId: string;
  plan: UserPlan;
  period: {
    start: Date;
    end: Date;
  };
  limits: UsageLimits;
  current: UsageCurrent;
}

/**
 * 使用上限
 */
export interface UsageLimits {
  emailsPerMonth: number;
  templatesCount: number;
  teamMembers: number;
  storageGB: number;
}

/**
 * 現在の使用量
 */
export interface UsageCurrent {
  emailsSent: number;
  templatesCreated: number;
  teamMembersCount: number;
  storageUsedGB: number;
}

/**
 * チーム
 */
export interface Team {
  id: string;
  name: string;
  ownerId: string;
  plan: UserPlan;
  members: TeamMember[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * チームメンバー
 */
export interface TeamMember {
  userId: string;
  teamId: string;
  role: UserRole;
  joinedAt: Date;
  user?: User;
}

/**
 * チーム招待
 */
export interface TeamInvitation {
  id: string;
  teamId: string;
  email: string;
  role: UserRole;
  token: string;
  expiresAt: Date;
  createdAt: Date;
  acceptedAt?: Date;
}

/**
 * サブスクリプション
 */
export interface Subscription {
  id: string;
  userId: string;
  plan: UserPlan;
  status: SubscriptionStatus;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  trialEnd?: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * サブスクリプションステータス
 */
export type SubscriptionStatus =
  | 'active'
  | 'trialing'
  | 'past_due'
  | 'canceled'
  | 'unpaid';

/**
 * 請求履歴
 */
export interface Invoice {
  id: string;
  userId: string;
  subscriptionId: string;
  amount: number;
  currency: string;
  status: InvoiceStatus;
  paidAt?: Date;
  dueDate: Date;
  createdAt: Date;
}

/**
 * 請求ステータス
 */
export type InvoiceStatus = 'draft' | 'open' | 'paid' | 'void' | 'uncollectible';
