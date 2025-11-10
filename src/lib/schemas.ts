/**
 * Zod スキーマ定義
 * フォームバリデーション用
 */

import { z } from 'zod';

/**
 * 共通バリデーション
 */
export const emailSchema = z
  .string()
  .min(1, 'メールアドレスを入力してください')
  .email('有効なメールアドレスを入力してください');

export const passwordSchema = z
  .string()
  .min(8, 'パスワードは8文字以上で入力してください')
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'パスワードは大文字、小文字、数字を含む必要があります'
  );

/**
 * ユーザー登録フォーム
 */
export const signupSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  name: z.string().min(1, '名前を入力してください'),
  terms: z.boolean().refine((val) => val === true, {
    message: '利用規約に同意してください',
  }),
});

export type SignupFormData = z.infer<typeof signupSchema>;

/**
 * ログインフォーム
 */
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'パスワードを入力してください'),
  remember: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

/**
 * メール作成フォーム
 */
export const emailCreateSchema = z.object({
  subject: z
    .string()
    .min(1, '件名を入力してください')
    .max(200, '件名は200文字以内で入力してください'),
  content: z
    .string()
    .min(10, '本文は10文字以上で入力してください')
    .max(10000, '本文は10,000文字以内で入力してください'),
  industryId: z.string().optional(),
});

export type EmailCreateFormData = z.infer<typeof emailCreateSchema>;

/**
 * メール送信フォーム
 */
export const emailSendSchema = z.object({
  emailId: z.string().min(1, 'メールIDが必要です'),
  to: z
    .array(emailSchema)
    .min(1, '送信先を1件以上指定してください')
    .max(1000, '送信先は1,000件までです'),
  scheduledAt: z.date().optional(),
  batchSize: z.number().min(1).max(100).optional(),
});

export type EmailSendFormData = z.infer<typeof emailSendSchema>;

/**
 * テンプレート作成フォーム
 */
export const templateCreateSchema = z.object({
  name: z
    .string()
    .min(1, 'テンプレート名を入力してください')
    .max(100, 'テンプレート名は100文字以内で入力してください'),
  subject: z
    .string()
    .min(1, '件名を入力してください')
    .max(200, '件名は200文字以内で入力してください'),
  content: z
    .string()
    .min(10, '本文は10文字以上で入力してください')
    .max(10000, '本文は10,000文字以内で入力してください'),
  industryId: z.string().optional(),
  category: z.string().min(1, 'カテゴリーを選択してください'),
  tags: z.array(z.string()).optional(),
});

export type TemplateCreateFormData = z.infer<typeof templateCreateSchema>;

/**
 * プロフィール更新フォーム
 */
export const profileUpdateSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  company: z.string().optional(),
  industry: z.string().optional(),
  position: z.string().optional(),
  phoneNumber: z
    .string()
    .regex(/^[0-9-]+$/, '電話番号は数字とハイフンのみ使用できます')
    .optional()
    .or(z.literal('')),
});

export type ProfileUpdateFormData = z.infer<typeof profileUpdateSchema>;

/**
 * パスワード変更フォーム
 */
export const passwordChangeSchema = z
  .object({
    currentPassword: z.string().min(1, '現在のパスワードを入力してください'),
    newPassword: passwordSchema,
    confirmPassword: z.string().min(1, '確認用パスワードを入力してください'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'パスワードが一致しません',
    path: ['confirmPassword'],
  });

export type PasswordChangeFormData = z.infer<typeof passwordChangeSchema>;

/**
 * お問い合わせフォーム
 */
export const contactSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: emailSchema,
  company: z.string().optional(),
  subject: z.string().min(1, '件名を入力してください'),
  message: z
    .string()
    .min(10, 'お問い合わせ内容は10文字以上で入力してください')
    .max(2000, 'お問い合わせ内容は2,000文字以内で入力してください'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

/**
 * チームメンバー招待フォーム
 */
export const teamInviteSchema = z.object({
  email: emailSchema,
  role: z.enum(['admin', 'member', 'viewer'], {
    message: '役割を選択してください',
  }),
});

export type TeamInviteFormData = z.infer<typeof teamInviteSchema>;

/**
 * ターゲット選択フォーム
 */
export const targetSelectionSchema = z.object({
  industryIds: z.array(z.string()).min(1, '業種を1つ以上選択してください'),
  employeeRange: z
    .object({
      min: z.number().min(0).optional(),
      max: z.number().min(0).optional(),
    })
    .optional(),
  revenueRange: z
    .object({
      min: z.number().min(0).optional(),
      max: z.number().min(0).optional(),
    })
    .optional(),
  locations: z.array(z.string()).optional(),
  keywords: z.array(z.string()).optional(),
});

export type TargetSelectionFormData = z.infer<typeof targetSelectionSchema>;
