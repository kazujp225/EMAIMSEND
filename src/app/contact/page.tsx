'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string>('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'お名前は2文字以上で入力してください';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'お問い合わせ内容は10文字以上で入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate random error for demonstration (10% chance)
          if (Math.random() < 0.1) {
            reject(new Error('送信に失敗しました。しばらくしてから再度お試しください。'));
          } else {
            resolve(true);
          }
        }, 1500);
      });

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', company: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(error instanceof Error ? error.message : '送信に失敗しました');
    }
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24 pb-12">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6">
            お問い合わせ
          </h1>
          <p className="lead-text max-w-3xl mx-auto">
            ご質問やご相談がございましたら、お気軽にお問い合わせください。<br />
            通常1営業日以内にご返信いたします。
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          {submitted ? (
            <div className="card text-center py-12">
              <div className="w-16 h-16 bg-success-100 text-success-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="heading-2 mb-4">
                送信完了しました
              </h2>
              <p className="body-large mb-8">
                お問い合わせありがとうございます。<br />
                担当者より1営業日以内にご返信いたします。
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-primary"
              >
                新しいメッセージを送る
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card">
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-red-800 font-semibold">送信エラー</p>
                    <p className="text-red-700 text-sm">{submitError}</p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block label-text mb-2">
                    お名前 <span className="text-secondary-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-neutral-200 focus:border-primary-500'
                    }`}
                    placeholder="山田 太郎"
                  />
                  {errors.name && (
                    <p className="mt-2 body-small text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block label-text mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="株式会社〇〇"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block label-text mb-2">
                    メールアドレス <span className="text-secondary-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-neutral-200 focus:border-primary-500'
                    }`}
                    placeholder="example@company.com"
                  />
                  {errors.email && (
                    <p className="mt-2 body-small text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block label-text mb-2">
                    お問い合わせ内容 <span className="text-secondary-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-neutral-200 focus:border-primary-500'
                    }`}
                    placeholder="お問い合わせ内容をご記入ください..."
                  />
                  {errors.message && (
                    <p className="mt-2 body-small text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      送信中...
                    </span>
                  ) : '送信する'}
                </button>

                <p className="text-sm text-neutral-500 text-center">
                  お送りいただいた個人情報は、
                  <a href="/privacy" className="text-primary-500 hover:underline">
                    プライバシーポリシー
                  </a>
                  に基づき適切に管理いたします。
                </p>
              </div>
            </form>
          )}

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">メール</h3>
              <p className="text-neutral-600 text-sm">
                <a href="mailto:info@sendcraft.jp" className="hover:text-primary-500 transition-colors">
                  info@sendcraft.jp
                </a>
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">営業時間</h3>
              <p className="text-neutral-600 text-sm">
                平日 9:00 - 18:00<br />
                （土日祝日を除く）
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">サポート</h3>
              <p className="text-neutral-600 text-sm">
                <a href="/help" className="hover:text-primary-500 transition-colors">
                  ヘルプセンター
                </a>
              </p>
            </div>
          </div>

          {/* FAQ Quick Links */}
          <div className="mt-12 bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">よくある質問</h3>
              <p className="text-neutral-600">お問い合わせ前に、こちらもご確認ください</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/pricing#faq" className="p-4 bg-white rounded-xl border border-neutral-200 hover:border-primary-300 hover:shadow-sm transition-all group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">料金について</h4>
                    <p className="text-sm text-neutral-600">プラン、支払い方法、返金保証などの詳細</p>
                  </div>
                </div>
              </Link>
              <Link href="/features#how-it-works" className="p-4 bg-white rounded-xl border border-neutral-200 hover:border-primary-300 hover:shadow-sm transition-all group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary-100 text-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-200 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1 group-hover:text-secondary-600 transition-colors">機能について</h4>
                    <p className="text-sm text-neutral-600">AI推敲、HTML制作、配信方法などの詳細</p>
                  </div>
                </div>
              </Link>
              <Link href="/about" className="p-4 bg-white rounded-xl border border-neutral-200 hover:border-primary-300 hover:shadow-sm transition-all group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">SendCraftについて</h4>
                    <p className="text-sm text-neutral-600">会社概要、ミッション、ビジョン</p>
                  </div>
                </div>
              </Link>
              <Link href="/help" className="p-4 bg-white rounded-xl border border-neutral-200 hover:border-primary-300 hover:shadow-sm transition-all group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary-100 text-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-200 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1 group-hover:text-secondary-600 transition-colors">ヘルプセンター</h4>
                    <p className="text-sm text-neutral-600">使い方ガイド、トラブルシューティング</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
