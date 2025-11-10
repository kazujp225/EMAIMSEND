'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
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
            <Link href="#features" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              機能
            </Link>
            <Link href="#industries" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              業種別
            </Link>
            <Link href="#pricing" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              料金
            </Link>
            <Link href="/docs" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              ドキュメント
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-neutral-700 hover:text-neutral-900 font-medium transition-colors">
              ログイン
            </Link>
            <Link href="/signup" className="btn-primary">
              無料で始める
            </Link>
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
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                機能
              </Link>
              <Link href="#industries" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                業種別
              </Link>
              <Link href="#pricing" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                料金
              </Link>
              <Link href="/docs" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                ドキュメント
              </Link>
              <hr className="border-neutral-200" />
              <Link href="/login" className="text-neutral-700 hover:text-neutral-900 font-medium">
                ログイン
              </Link>
              <Link href="/signup" className="btn-primary text-center">
                無料で始める
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
