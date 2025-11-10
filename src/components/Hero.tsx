'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ translateY: '-50%', translateX: '50%' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ translateY: '50%', translateX: '-50%' }}
        />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              最短30秒でプロ品質のメールが完成
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              貼って、整えて、刺さる。<br />
              <span className="text-gradient">営業メール</span>を<br className="md:hidden" />1クリックで。
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              文章をペーストして「CSS強化」を押すだけ。<br />
              <span className="font-semibold text-neutral-700">SONNET</span>がプロ品質のHTML＆インラインCSSに整形。<br />
              業種別に最適な相手へ、感じよく届きます。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/signup" className="btn-primary btn-lg block">
                  無料で1通送ってみる
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#industries" className="btn-secondary btn-lg block">
                  業種別デモを見る
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-neutral-500 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                'クレジットカード不要',
                '1クリック配信停止',
                '特定電子メール法完全準拠'
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                >
                  <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {text}
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-xs text-neutral-400 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              ※ 同意済み宛先への送信を前提としています
            </motion.p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="relative rounded-2xl bg-white shadow-2xl border border-neutral-200 overflow-hidden"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Mock Editor Interface */}
              <div className="bg-neutral-50 border-b border-neutral-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-400"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-400"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-400"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <div className="flex-1 text-center text-sm text-neutral-500 font-medium">
                  SendCraft Editor
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* Mock text content */}
                <div className="space-y-2">
                  <div className="h-4 bg-neutral-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-neutral-200 rounded w-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="h-4 bg-neutral-200 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>

                {/* CSS強化 Button */}
                <div className="flex justify-center pt-4">
                  <motion.div
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 10px 15px -3px rgba(20, 184, 166, 0.3)",
                        "0 10px 20px -3px rgba(20, 184, 166, 0.5)",
                        "0 10px 15px -3px rgba(20, 184, 166, 0.3)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    CSS強化中...
                  </motion.div>
                </div>

                {/* Mock output */}
                <motion.div
                  className="space-y-2 pt-4 border-t border-neutral-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="h-3 bg-primary-100 rounded w-2/3"></div>
                  <div className="h-3 bg-primary-100 rounded w-full"></div>
                  <div className="h-3 bg-primary-100 rounded w-4/5"></div>
                  <div className="h-3 bg-primary-100 rounded w-3/5"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-neutral-200"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⚡
                </motion.div>
                <div>
                  <div className="text-xs text-neutral-500">処理時間</div>
                  <div className="text-sm font-bold text-neutral-900">5-10秒</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-neutral-200"
              initial={{ opacity: 0, scale: 0, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="text-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📧
                </motion.div>
                <div>
                  <div className="text-xs text-neutral-500">到達率</div>
                  <div className="text-sm font-bold text-neutral-900">95%以上</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
