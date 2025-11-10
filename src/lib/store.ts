/**
 * Zustand Store
 * グローバル状態管理
 */

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

/**
 * アプリケーション状態の型定義
 */
interface AppState {
  // ユーザー情報
  user: {
    id: string;
    email: string;
    name: string;
  } | null;

  // UI状態
  sidebarOpen: boolean;
  theme: 'light' | 'dark' | 'auto';

  // アクション
  setUser: (user: AppState['user']) => void;
  clearUser: () => void;
  toggleSidebar: () => void;
  setTheme: (theme: AppState['theme']) => void;
}

/**
 * メインストア
 */
export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        // 初期状態
        user: null,
        sidebarOpen: true,
        theme: 'auto',

        // アクション
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
        toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
        setTheme: (theme) => set({ theme }),
      }),
      {
        name: 'sendcraft-storage',
        partialize: (state) => ({
          theme: state.theme,
          sidebarOpen: state.sidebarOpen,
        }),
      }
    )
  )
);

/**
 * エディター状態
 */
interface EditorState {
  // エディター内容
  subject: string;
  content: string;
  html: string | null;

  // 処理状態
  isEnhancing: boolean;

  // アクション
  setSubject: (subject: string) => void;
  setContent: (content: string) => void;
  setHtml: (html: string | null) => void;
  setIsEnhancing: (isEnhancing: boolean) => void;
  reset: () => void;
}

export const useEditorStore = create<EditorState>()(
  devtools((set) => ({
    // 初期状態
    subject: '',
    content: '',
    html: null,
    isEnhancing: false,

    // アクション
    setSubject: (subject) => set({ subject }),
    setContent: (content) => set({ content }),
    setHtml: (html) => set({ html }),
    setIsEnhancing: (isEnhancing) => set({ isEnhancing }),
    reset: () => set({
      subject: '',
      content: '',
      html: null,
      isEnhancing: false,
    }),
  }))
);
