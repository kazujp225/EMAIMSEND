import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Heading,
} from '@react-email/components';

interface AutoReplyEmailProps {
  name: string;
  company?: string;
  email: string;
  message: string;
}

// お客様への自動返信メール
export const AutoReplyEmail: React.FC<AutoReplyEmailProps> = ({
  name,
  company,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'sans-serif', lineHeight: '1.7', color: '#333', backgroundColor: '#f5f5f5' }}>
      <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff' }}>
        {/* ヘッダー */}
        <Section style={{ borderBottom: '3px solid #14B8A6', paddingBottom: '20px', marginBottom: '30px' }}>
          <Heading style={{ color: '#14B8A6', fontSize: '24px', margin: '0' }}>
            フォーム営業モーヤメ
          </Heading>
          <Text style={{ color: '#666', fontSize: '14px', margin: '5px 0 0 0' }}>
            営業メール作成・配信サービス
          </Text>
        </Section>

        {/* 本文 */}
        <Section>
          <Text style={{ marginBottom: '20px' }}>
            {name} 様
          </Text>

          <Text style={{ marginBottom: '20px' }}>
            この度は、フォーム営業モーヤメへお問い合わせいただき、誠にありがとうございます。
          </Text>

          <Text style={{ marginBottom: '20px' }}>
            以下の内容でお問い合わせを受け付けいたしました。
            <br />
            担当者より1営業日以内にご返信させていただきますので、今しばらくお待ちください。
          </Text>

          {/* お問い合わせ内容 */}
          <Section style={{
            backgroundColor: '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '30px'
          }}>
            <Heading as="h2" style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#14B8A6',
              marginTop: '0',
              marginBottom: '15px'
            }}>
              お問い合わせ内容
            </Heading>

            <Text style={{ margin: '8px 0' }}>
              <strong style={{ color: '#666' }}>お名前：</strong>{name}
            </Text>

            {company && (
              <Text style={{ margin: '8px 0' }}>
                <strong style={{ color: '#666' }}>会社名：</strong>{company}
              </Text>
            )}

            <Text style={{ margin: '8px 0' }}>
              <strong style={{ color: '#666' }}>メールアドレス：</strong>{email}
            </Text>

            <Text style={{ margin: '8px 0' }}>
              <strong style={{ color: '#666' }}>お問い合わせ内容：</strong>
              <br />
              {message}
            </Text>
          </Section>

          <Text style={{ marginBottom: '20px' }}>
            なお、このメールは自動送信されています。
            <br />
            このメールに返信いただいても、ご返答できませんのでご了承ください。
          </Text>

          <Text style={{ marginBottom: '20px' }}>
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </Text>
        </Section>

        {/* フッター */}
        <Hr style={{ borderColor: '#e5e7eb', marginTop: '40px' }} />
        <Section style={{ paddingTop: '20px', fontSize: '14px', color: '#666' }}>
          <Text style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>
            フォーム営業モーヤメ
          </Text>
          <Text style={{ margin: '0 0 5px 0' }}>
            メール: info@form-eigyo-moyame.jp
          </Text>
          <Text style={{ margin: '0 0 5px 0' }}>
            営業時間: 平日 9:00 - 18:00（土日祝日を除く）
          </Text>
          <Text style={{ margin: '15px 0 0 0', fontSize: '12px', color: '#999' }}>
            © 2025 フォーム営業モーヤメ. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// 管理者への通知メール
export const AdminNotificationEmail: React.FC<AutoReplyEmailProps> = ({
  name,
  company,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'sans-serif', lineHeight: '1.7', color: '#333', backgroundColor: '#f5f5f5' }}>
      <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff' }}>
        {/* ヘッダー */}
        <Section style={{ borderBottom: '3px solid #F97316', paddingBottom: '20px', marginBottom: '30px' }}>
          <Heading style={{ color: '#F97316', fontSize: '24px', margin: '0' }}>
            新規お問い合わせ通知
          </Heading>
          <Text style={{ color: '#666', fontSize: '14px', margin: '5px 0 0 0' }}>
            フォーム営業モーヤメ - 管理画面
          </Text>
        </Section>

        {/* 本文 */}
        <Section>
          <Text style={{ marginBottom: '20px' }}>
            新しいお問い合わせが届きました。
          </Text>

          {/* お問い合わせ内容 */}
          <Section style={{
            backgroundColor: '#fff7ed',
            border: '1px solid #fed7aa',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '30px'
          }}>
            <Heading as="h2" style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#F97316',
              marginTop: '0',
              marginBottom: '15px'
            }}>
              お問い合わせ詳細
            </Heading>

            <Text style={{ margin: '8px 0' }}>
              <strong style={{ color: '#666' }}>お名前：</strong>{name}
            </Text>

            {company && (
              <Text style={{ margin: '8px 0' }}>
                <strong style={{ color: '#666' }}>会社名：</strong>{company}
              </Text>
            )}

            <Text style={{ margin: '8px 0' }}>
              <strong style={{ color: '#666' }}>メールアドレス：</strong>
              <a href={`mailto:${email}`} style={{ color: '#14B8A6' }}>
                {email}
              </a>
            </Text>

            <Text style={{ margin: '8px 0' }}>
              <strong style={{ color: '#666' }}>受信日時：</strong>
              {new Date().toLocaleString('ja-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>

            <Text style={{ margin: '8px 0' }}>
              <strong style={{ color: '#666' }}>お問い合わせ内容：</strong>
              <br />
              {message}
            </Text>
          </Section>

          <Section style={{
            backgroundColor: '#fef3c7',
            border: '1px solid #fde68a',
            borderRadius: '8px',
            padding: '15px',
            margin: '20px 0',
            fontSize: '14px'
          }}>
            <Text style={{ margin: '0' }}>
              <strong>対応期限:</strong> 1営業日以内にご返信ください
            </Text>
          </Section>
        </Section>

        {/* フッター */}
        <Hr style={{ borderColor: '#e5e7eb', marginTop: '40px' }} />
        <Section style={{ paddingTop: '20px', fontSize: '12px', color: '#999' }}>
          <Text style={{ margin: '0' }}>
            このメールは フォーム営業モーヤメ の自動通知システムから送信されています。
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
