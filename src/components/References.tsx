'use client'

import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight, FiBox, FiMapPin, FiTool } from 'react-icons/fi';

const References = () => {
  const offerings = [
    {
      icon: FiMapPin,
      title: 'Kendi Bloom2GO Noktalarimiz',
      description:
        'Kendi lokasyon agimizda 7/24 cicek satisi yapiyor, merkezi noktalarda son dakika ihtiyacina hizli erisim sagliyoruz.',
      tone: 'bg-[#fff5ea]',
    },
    {
      icon: FiBox,
      title: 'Otomat Satisi',
      description:
        'Markalar, AVM yonetimleri ve is ortaklari icin kurulum amacli Bloom2GO cicek otomatlarini da sunuyoruz.',
      tone: 'bg-[#f7efe7]',
    },
    {
      icon: FiTool,
      title: 'Kurulum ve Isletme Destegi',
      description:
        'Lokasyon secimi, saha kurgusu, operasyon akisi ve satis sonrasi destek tarafinda sureci birlikte planliyoruz.',
      tone: 'bg-[#efe6db]',
    },
  ];

  return (
    <section id="referanslar" className="bg-[var(--lale-cream)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--lale-emerald-soft)]">
            Bloom2GO Modelleri
          </p>
          <h2 className="mt-5 font-serif text-4xl text-[var(--lale-anthracite)] sm:text-5xl">
            Sadece satis noktasi degil, otomat cozum ortaginiz
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--lale-emerald-soft)] sm:text-lg">
            Bloom2GO hem kendi cicek otomat lokasyonlarini isletir hem de ihtiyaca uygun otomat satisi ve kurulum planlamasi sunar.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {offerings.map((item) => (
            <article
              key={item.title}
              className={`rounded-[32px] ${item.tone} p-7 shadow-[0_18px_40px_rgba(36,29,24,0.10)] transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/60 text-[var(--lale-anthracite)]">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-3xl leading-tight text-[var(--lale-anthracite)]">{item.title}</h3>
              <p className="mt-4 text-sm leading-8 text-[var(--lale-emerald-soft)]">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-3 rounded-full bg-[var(--lale-anthracite)] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#f7931e]"
          >
            Otomat Satisi Icin Iletisime Gecin
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default References;
