'use client'

import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight, FiBox, FiGrid, FiMapPin, FiPackage, FiShoppingBag } from 'react-icons/fi';

const services = [
  {
    icon: FiShoppingBag,
    title: 'Sipariş Akışı',
    description: 'Web sitesi, pazaryeri ve mağaza siparişlerini tek ekranda toplayın.',
    accent: 'bg-[var(--lale-anthracite)] text-[var(--lale-ivory)]',
  },
  {
    icon: FiPackage,
    title: 'Florist Hazırlık',
    description: 'Hazırlanacak buketleri sıra, not ve teslim saatine göre yönetin.',
    accent: 'bg-[var(--lale-gold)] text-[var(--lale-anthracite)]',
  },
  {
    icon: FiBox,
    title: 'Taze Stok Kontrolü',
    description: 'Çiçek bazlı kritik seviye uyarıyla kayıpları azaltın.',
    accent: 'bg-white text-[var(--lale-anthracite)]',
  },
  {
    icon: FiMapPin,
    title: 'Kurye ve Teslimat',
    description: 'Rota, teslimat bölgesi ve canlı durum bilgisini anlık izleyin.',
    accent: 'bg-[#f7ede5] text-[var(--lale-anthracite)]',
  },
  {
    icon: FiGrid,
    title: 'Şube Yönetimi',
    description: 'Birden fazla mağazayı tek panelden görünür ve dengeli yönetin.',
    accent: 'bg-[#efe4d8] text-[var(--lale-anthracite)]',
  },
];

const Services = () => {
  return (
    <section id="hizmetler" className="relative overflow-hidden bg-[#f7f1ea] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(242,140,40,0.10),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(143,98,64,0.08),transparent_18%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--lale-emerald-soft)]">
              Bloom2GO Modülleri
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-[40px] leading-[0.95] text-[var(--lale-anthracite)] sm:text-[54px] lg:text-[68px]">
              Günün akışına uyan sade operasyon ekranları
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--lale-emerald-soft)] sm:text-lg">
              Her ekranı floristlerin, mağazanın ve kuryenin gerçek günlük kullanımına göre tasarlandı.
              Daha az karmaşa, daha hızlı aksiyon.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/iletisim" className="lale-gold-button gap-3">
                Demo Planla
                <FiArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(143,98,64,0.18)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--lale-anthracite)] transition-all duration-300 hover:bg-white/80"
              >
                Tüm Modüller
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`group relative overflow-hidden rounded-[30px] border border-[rgba(143,98,64,0.12)] p-7 shadow-[0_20px_45px_rgba(36,29,24,0.08)] transition-all duration-300 hover:-translate-y-1 ${service.accent} ${
                  index === 0 ? 'md:col-span-2 md:min-h-[230px]' : 'min-h-[260px]'
                }`}
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-6 -translate-y-6 rounded-full bg-black/5 blur-2xl" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] opacity-55">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-[260px] font-serif text-[34px] leading-[1.02]">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-[320px] text-sm leading-7 opacity-80 sm:text-base sm:leading-8">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
