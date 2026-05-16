'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { withAssetVersion } from '@/lib/asset';

const Hero = () => {
  const heroHighlights = [
    {
      eyebrow: 'Sürekli Erişim',
      title: 'Daima Taze',
      value: '7/24',
      accent: 'bg-[#f7931e]/12 text-[#f7931e]',
      position: 'md:absolute md:-left-2 md:top-5 lg:-left-12 lg:top-10',
    },
    {
      eyebrow: 'Kolay Ödeme',
      title: 'Temassız İşlem',
      value: '💳',
      accent: 'bg-[#a56f47]/12 text-[#a56f47]',
      position: 'md:absolute md:-right-1 md:top-[28%] lg:-right-10',
    },
    {
      eyebrow: 'İklimlendirme',
      title: 'Sabit Tazelik',
      value: '🌡️',
      accent: 'bg-[#f7931e]/20 text-[#2a211c]',
      position: 'md:absolute md:-bottom-6 md:left-[10%] lg:left-[16%]',
    },
    {
      eyebrow: 'Anında Teslim',
      title: 'Beklemek Yok',
      value: '🚀',
      accent: 'bg-[#2a211c]/10 text-[#2a211c]',
      position: 'md:absolute md:bottom-[24%] md:left-3 lg:left-8',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fcf7f2_0%,#f7f1ea_52%,#fffdf9_100%)] pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-16 -translate-y-12 rounded-full bg-[#f7931e]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 -translate-x-20 translate-y-16 rounded-full bg-[#a56f47]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[14%] top-[22%] h-20 w-20 rounded-[38%] border border-[rgba(42,33,28,0.12)] rotate-12" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] hidden h-24 w-24 rounded-[42%] border border-[rgba(247,147,30,0.14)] lg:block -rotate-12" />

      <div className="mx-auto max-w-7xl px-4 sm:px-7 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-4xl"
          >
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[rgba(42,33,28,0.16)] bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a56f47] shadow-[0_18px_42px_rgba(36,29,24,0.06)] backdrop-blur sm:gap-3 sm:px-5 sm:text-[11px] sm:tracking-[0.24em]">
              <span className="h-2 w-2 rounded-full bg-[#f7931e]" />
              <span className="truncate">Türkiye'nin İlk Akıllı Çiçek Otomat Ağı</span>
            </div>

            <h1 className="mt-6 font-serif text-[clamp(2.35rem,9vw,4.8rem)] leading-[0.98] text-[#2a211c] sm:mt-8">
              Çiçeğe İhtiyacınız Olduğunda
              <span className="block italic text-[#f7931e]">Bloom2GO Hep Yakınınızda</span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#7a5c49] sm:mt-7 sm:text-lg sm:leading-8">
              Son dakika kutlamalarında, ani ziyaretlerde ya da sadece birini mutlu etmek istediğiniz anlarda
              Bloom2GO otomatları; taze buket, hızlı ödeme ve merkezi konum avantajını tek noktada sunar.
              Mağaza saati beklemeden, güvenle ve dakikalar içinde çiçeğinizi alırsınız.
            </p>

            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-5">
              <Link href="/hizmet-bolgelerimiz" className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#f7931e] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-xl shadow-[#f7931e]/20 transition-all hover:bg-[#f57c00] active:scale-95 sm:px-10 sm:py-5 sm:tracking-[0.2em]">
                OTOMAT KONUMLARI
              </Link>
              <Link
                href="#neden-biz"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[rgba(42,33,28,0.22)] bg-white/65 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#2a211c] shadow-sm transition-all duration-300 hover:bg-white sm:px-10 sm:py-5 sm:tracking-[0.2em]"
              >
                NEDEN BLOOM2GO?
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mt-12 w-full max-w-6xl sm:mt-14 lg:mt-16"
          >
            <div className="relative mx-auto aspect-[5/4] overflow-hidden rounded-[28px] border-[6px] border-white bg-white shadow-[0_30px_80px_rgba(42,33,28,0.18)] sm:aspect-[16/10] sm:rounded-[36px] sm:border-8 lg:aspect-[16/9] lg:rounded-[48px] lg:shadow-[0_50px_120px_rgba(42,33,28,0.22)]">
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

            <div className="mt-5 grid grid-cols-1 gap-3 text-left sm:mt-6 sm:grid-cols-2 md:contents">
              {heroHighlights.map((item) => (
                <div
                  key={item.eyebrow}
                  className={`rounded-[22px] border border-[rgba(42,33,28,0.14)] bg-[rgba(255,253,249,0.84)] p-4 shadow-[0_20px_45px_rgba(42,33,28,0.10)] backdrop-blur sm:p-5 ${item.position}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${item.accent}`}>
                      {item.value}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a56f47] sm:tracking-[0.24em]">
                        {item.eyebrow}
                      </p>
                      <p className="font-serif text-base text-[#2a211c] sm:text-lg">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
