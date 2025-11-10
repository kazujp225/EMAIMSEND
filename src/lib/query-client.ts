/**
 * React Query クライアント設定
 */

import { QueryClient } from '@tanstack/react-query';

/**
 * QueryClient インスタンス
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // デフォルト設定
      staleTime: 1000 * 60 * 5, // 5分
      gcTime: 1000 * 60 * 30, // 30分
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

/**
 * Query Keys
 * クエリキーを一元管理
 */
export const queryKeys = {
  // ユーザー
  user: {
    current: ['user', 'current'] as const,
    profile: (userId: string) => ['user', 'profile', userId] as const,
    usage: (userId: string) => ['user', 'usage', userId] as const,
  },

  // メール
  emails: {
    all: ['emails'] as const,
    list: (filters?: any) => ['emails', 'list', filters] as const,
    detail: (emailId: string) => ['emails', 'detail', emailId] as const,
    stats: (emailId: string) => ['emails', 'stats', emailId] as const,
  },

  // テンプレート
  templates: {
    all: ['templates'] as const,
    list: (filters?: any) => ['templates', 'list', filters] as const,
    detail: (templateId: string) => ['templates', 'detail', templateId] as const,
    byIndustry: (industryId: string) => ['templates', 'industry', industryId] as const,
  },

  // 業種
  industries: {
    all: ['industries'] as const,
    detail: (industryId: string) => ['industries', 'detail', industryId] as const,
  },
} as const;
