import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { AutoReplyEmail, AdminNotificationEmail } from '@/lib/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, message } = body;

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    const emailFrom = process.env.EMAIL_FROM || 'info@form-eigyo-moyame.jp';

    try {
      // 1. お客様への自動返信メール
      const autoReplyResult = await resend.emails.send({
        from: `フォーム営業モーヤメ <${emailFrom}>`,
        to: email,
        subject: '【フォーム営業モーヤメ】お問い合わせを受け付けました',
        react: AutoReplyEmail({ name, company, email, message }),
      });

      console.log('Auto-reply email sent:', autoReplyResult);

      // 2. 管理者への通知メール
      const adminNotificationResult = await resend.emails.send({
        from: `フォーム営業モーヤメ Notification <${emailFrom}>`,
        to: emailFrom, // 管理者のメールアドレス
        subject: `【新規お問い合わせ】${name}様からのお問い合わせ`,
        react: AdminNotificationEmail({ name, company, email, message }),
      });

      console.log('Admin notification sent:', adminNotificationResult);

      return NextResponse.json(
        {
          success: true,
          message: 'お問い合わせを受け付けました',
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending error:', emailError);

      // Resendのエラーの詳細をログに出力
      if (emailError instanceof Error) {
        console.error('Error message:', emailError.message);
      }

      return NextResponse.json(
        {
          error: 'メール送信に失敗しました。しばらくしてから再度お試しください。',
          details: process.env.NODE_ENV === 'development'
            ? (emailError instanceof Error ? emailError.message : 'Unknown error')
            : undefined
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
