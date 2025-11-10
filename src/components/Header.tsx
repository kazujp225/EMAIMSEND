'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-sm border-b border-neutral-200"
      style={{ backgroundColor: headerBackground }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-neutral-900">SendCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              機能
            </Link>
            <Link href="/pricing" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              料金
            </Link>
            <Link href="/order" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              発注
            </Link>
            <Link href="/contact" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              お問い合わせ
            </Link>
            <Link href="/about" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              会社概要
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-neutral-700 hover:text-neutral-900 font-medium transition-colors">
              ログイン
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/signup" className="btn-primary">
                無料で始める
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-neutral-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {[
                { label: '機能', href: '/features' },
                { label: '料金', href: '/pricing' },
                { label: '発注', href: '/order' },
                { label: 'お問い合わせ', href: '/contact' },
                { label: '会社概要', href: '/about' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-neutral-600 hover:text-neutral-900 transition-colors block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <hr className="border-neutral-200" />
              <Link href="/login" className="text-neutral-700 hover:text-neutral-900 font-medium">
                ログイン
              </Link>
              <Link href="/signup" className="btn-primary text-center">
                無料で始める
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
