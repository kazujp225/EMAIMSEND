'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-white pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50/50 to-white"></div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full text-primary-700 font-medium badge-text mb-8 border border-primary-100">
              <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
              本来3ヶ月かかる準備を、30秒で
            </div>

            <h1 className="heading-1 mb-6 tracking-tight">
              リファラルだけでは、<br className="hidden lg:inline" />もう限界。<br />
              でも、<span className="text-gradient">新規営業の準備</span>に
              3ヶ月もかけられない。
            </h1>

            <h2 className="heading-2 text-neutral-800 mb-8">
              文章を書く。それ以外は、<span className="text-primary-600">全部代行</span>。
            </h2>

            <p className="lead-text mb-8 max-w-2xl mx-auto lg:mx-0">
              営業メール配信に必要な<span className="emphasis-text">「文章推敲」「HTMLメール制作」「配信インフラ」「営業リスト」</span>の4つを丸ごと代行。<br />
              <span className="text-neutral-500">下書きをペーストするだけで、AIが推敲・整形し、今日から新規営業を始められます。</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link href="/order" className="btn-primary btn-lg block">
                今すぐ申し込む
              </Link>
              <Link href="#outsourcing-value" className="btn-secondary btn-lg block">
                代行の詳細を見る
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 body-small justify-center lg:justify-start border-t border-neutral-100 pt-6">
              {[
                'クレジットカード不要',
                '1クリック配信停止',
                '特定電子メール法完全準拠'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <p className="caption-text mt-4 text-center lg:text-left">
              ※ 同意済み宛先への送信を前提としています
            </p>
          </motion.div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl bg-white shadow-xl border border-neutral-200 overflow-hidden">
              {/* Mock Editor Interface */}
              <div className="bg-neutral-50 border-b border-neutral-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center text-sm text-neutral-600 font-medium">
                  フォーム営業モーヤメ Editor
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Mock text content */}
                <div className="space-y-3">
                  <div className="h-3 bg-neutral-200 rounded-full w-full"></div>
                  <div className="h-3 bg-neutral-200 rounded-full w-5/6"></div>
                  <div className="h-3 bg-neutral-200 rounded-full w-4/5"></div>
                </div>

                {/* AI推敲 Button */}
                <div className="flex justify-center pt-2">
                  <div className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    AI推敲 & HTML化
                  </div>
                </div>

                {/* Mock output */}
                <div className="space-y-3 pt-6 border-t border-neutral-200">
                  <div className="h-3 bg-primary-100 rounded-full w-3/4"></div>
                  <div className="h-3 bg-primary-100 rounded-full w-full"></div>
                  <div className="h-3 bg-primary-100 rounded-full w-5/6"></div>
                  <div className="h-3 bg-primary-100 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>

            {/* Stats badges - simplified */}
            <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-md px-4 py-2.5 border border-neutral-200">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <div>
                  <div className="caption-text">処理時間</div>
                  <div className="body-small emphasis-text">5-10秒</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-md px-4 py-2.5 border border-neutral-200">
              <div className="flex items-center gap-2">
                <span className="text-xl">📧</span>
                <div>
                  <div className="caption-text">到達率</div>
                  <div className="body-small emphasis-text">95%以上</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
