'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { withAssetVersion } from '@/lib/asset';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  if (isAdminPage) return null;

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Haberler', href: '/haberler' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(252,247,242,0.95)] shadow-[0_18px_45px_rgba(42,33,28,0.08)] backdrop-blur-xl'
          : 'bg-[rgba(252,247,242,0.78)] backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div
          className={`flex items-center justify-between border-b border-[rgba(42,33,28,0.08)] transition-all duration-300 ${
            isScrolled ? 'h-[78px]' : 'h-[88px]'
          }`}
        >
          <Link href="/" className="group flex items-center">
            <div className="relative h-11 w-32 sm:h-12 sm:w-36 transition-all duration-300">
              <Image
                src={withAssetVersion('/bloom_logo.png')}
                alt="Bloom2GO Logos"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative pb-1 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-[#f7931e]'
                    : 'text-[#7a5c49] hover:text-[#2a211c]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-[#f7931e] transition-transform duration-300 ${
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/hizmet-bolgelerimiz"
              className="inline-flex items-center justify-center rounded-full bg-[#2a211c] px-7 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#f7931e] active:scale-95 shadow-lg shadow-[#2a211c]/10"
            >
              Otomat Konumları
            </Link>
          </div>

          <button
            className="rounded-full border border-[rgba(42,33,28,0.12)] p-3 text-[#2a211c] transition-colors hover:bg-white/70 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Menüyü aç"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen &&
        typeof window !== 'undefined' &&
        createPortal(
          <div className="fixed inset-0 z-[10000] flex flex-col bg-[#fcf7f2] p-8 sm:p-10 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between">
              <div className="relative h-11 w-32 sm:h-12 sm:w-36">
                <Image
                  src={withAssetVersion('/bloom_logo.png')}
                  alt="Bloom2GO Logos"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                className="rounded-full border border-[rgba(42,33,28,0.12)] p-3 text-[#2a211c]"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Menüyü kapat"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-8 h-px w-full bg-[rgba(42,33,28,0.08)]" />

            <nav className="mt-10 flex flex-col gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-serif text-3xl ${
                    pathname === link.href ? 'text-[#f7931e]' : 'text-[#2a211c]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto rounded-[40px] border border-[rgba(42,33,28,0.08)] bg-white/70 p-8 shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a56f47]">
                Bloom2GO Deneyimi
              </p>
              <p className="mt-4 font-serif text-2xl leading-tight text-[#2a211c]">
                Taze çiçeğe hızlı, şık ve güvenli biçimde ulaşın.
              </p>
              <Link
                href="/hizmet-bolgelerimiz"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-[#f7931e] px-6 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                OTOMAT KONUMLARI
              </Link>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Header;
