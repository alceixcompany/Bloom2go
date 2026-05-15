'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { withAssetVersion } from '@/lib/asset';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fcf7f2_0%,#f7f1ea_52%,#fffdf9_100%)] pb-16 pt-32 lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-16 -translate-y-12 rounded-full bg-[#f7931e]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 -translate-x-20 translate-y-16 rounded-full bg-[#a56f47]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[14%] top-[22%] h-20 w-20 rounded-[38%] border border-[rgba(42,33,28,0.12)] rotate-12" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] hidden h-24 w-24 rounded-[42%] border border-[rgba(247,147,30,0.14)] lg:block -rotate-12" />

      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(42,33,28,0.16)] bg-white/75 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a56f47] shadow-[0_18px_42px_rgba(36,29,24,0.06)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#f7931e]" />
              Türkiye'nin İlk Akıllı Çiçek Otomat Ağı
            </div>

            <h1 className="mt-8 font-serif text-[clamp(2.5rem,6vw,4.8rem)] leading-[0.98] text-[#2a211c]">
              7/24 Taze Çiçekler
              <span className="block italic text-[#f7931e]">Şehrin Her Noktasında</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#7a5c49]">
              Havalimanları, AVM'ler ve merkezi noktalarda konumlanan akıllı Bloom2GO otomatlarıyla,
              premium çiçek buketlerine dilediğiniz an ulaşın. Temassız ödeme ve taze koruma
              teknolojisiyle kesintisiz hizmet.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Link href="/iletisim" className="bg-[#f7931e] text-white px-10 py-5 rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-xl shadow-[#f7931e]/20 hover:bg-[#f57c00] transition-all active:scale-95">
                EN YAKIN OTOMATI BUL
              </Link>
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(42,33,28,0.22)] bg-white/65 px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-[#2a211c] transition-all duration-300 hover:bg-white shadow-sm"
              >
                NASIL ÇALIŞIR?
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mt-14 w-full max-w-6xl lg:mt-16"
          >
            <div className="relative mx-auto aspect-[16/9] overflow-hidden rounded-[48px] border-8 border-white bg-white shadow-[0_50px_120px_rgba(42,33,28,0.22)]">
              <Image
                src={withAssetVersion('/hero_main.png')}
                alt="Premium Bloom2GO Çiçek Otomatı"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,33,28,0.02),rgba(42,33,28,0.25))]" />
            </div>

            <div className="absolute -left-2 top-5 rounded-[24px] border border-[rgba(42,33,28,0.14)] bg-[rgba(255,253,249,0.82)] p-4 shadow-[0_20px_45px_rgba(42,33,28,0.10)] backdrop-blur sm:left-0 sm:p-5 lg:-left-12 lg:top-10">
              <div className="flex items-center gap-3 text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7931e]/12 text-sm font-semibold text-[#f7931e]">
                  7/24
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#a56f47]">
                    Sürekli Erişim
                  </p>
                  <p className="font-serif text-base text-[#2a211c] sm:text-lg">
                    Daima Taze
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-1 top-[28%] rounded-[24px] border border-[rgba(42,33,28,0.14)] bg-[rgba(255,253,249,0.82)] p-4 shadow-[0_20px_45px_rgba(42,33,28,0.10)] backdrop-blur sm:right-2 sm:p-5 lg:-right-10">
              <div className="flex items-center gap-3 text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a56f47]/12 text-sm font-semibold text-[#a56f47]">
                  💳
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#a56f47]">
                    Kolay Ödeme
                  </p>
                  <p className="font-serif text-base text-[#2a211c] sm:text-lg">
                    Temassız İşlem
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-[10%] rounded-[24px] border border-[rgba(42,33,28,0.14)] bg-[rgba(255,253,249,0.82)] p-4 shadow-[0_20px_45px_rgba(42,33,28,0.10)] backdrop-blur sm:p-5 lg:left-[16%]">
              <div className="flex items-center gap-3 text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7931e]/20 text-sm font-semibold text-[#2a211c]">
                  🌡️
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#a56f47]">
                    İklimlendirme
                  </p>
                  <p className="font-serif text-base text-[#2a211c] sm:text-lg">
                    Sabit Tazelik
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[24%] left-3 rounded-[24px] border border-[rgba(42,33,28,0.14)] bg-[rgba(255,253,249,0.82)] p-4 shadow-[0_20px_45px_rgba(42,33,28,0.10)] backdrop-blur sm:p-5 lg:left-8">
              <div className="flex items-center gap-3 text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2a211c]/10 text-sm font-semibold text-[#2a211c]">
                  🚀
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#a56f47]">
                    Anında Teslim
                  </p>
                  <p className="font-serif text-base text-[#2a211c] sm:text-lg">
                    Beklemek Yok
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
