'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiGlobe, FiMail, FiPhone } from 'react-icons/fi';
import { withAssetVersion } from '@/lib/asset';

const Footer = () => {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;

  if (isAdminPage) return null;

  return (
    <footer className="relative overflow-hidden bg-[var(--lale-cream)] pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(242,140,40,0.08),transparent_22%),radial-gradient(circle_at_84%_20%,rgba(143,98,64,0.06),transparent_18%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-[rgba(143,98,64,0.12)] pb-14 md:grid-cols-3">
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-36">
                <Image
                  src={withAssetVersion('/bloom_logo.png')}
                  alt="Bloom2GO logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-[var(--lale-emerald-soft)] md:max-w-sm">
              Bloom2GO, taze çiçeği günün her saatinde ulaşılabilir kılan akıllı otomat deneyimidir.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-[var(--lale-anthracite)]">Hızlı Bağlantılar</h3>
            <ul className="mt-6 space-y-4 text-sm text-[var(--lale-emerald-soft)]">
              <li>
                <Link href="/hizmetlerimiz" className="transition-colors hover:text-[var(--lale-gold)]">
                  Deneyim Detayları
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="transition-colors hover:text-[var(--lale-gold)]">
                  Bloom2GO Hakkında
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="transition-colors hover:text-[var(--lale-gold)]">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-[var(--lale-anthracite)]">İletişim</h3>
            <ul className="mt-6 space-y-4 text-sm text-[var(--lale-emerald-soft)]">
              <li className="flex items-center justify-center gap-3 md:justify-start">
                <FiMail className="text-[var(--lale-gold)]" />
                <span>info@bloom2go.com</span>
              </li>
              <li className="flex items-center justify-center gap-3 md:justify-start">
                <FiPhone className="text-[var(--lale-gold)]" />
                <span>0312 221 02 46</span>
              </li>
              <li className="flex items-center justify-center gap-3 md:justify-start">
                <FiGlobe className="text-[var(--lale-gold)]" />
                <span>Bloom2Go Teknoloji AS</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--lale-emerald-soft)]">
            © 2026 Bloom2GO. Taze çiçeğe akıllı erişim.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
