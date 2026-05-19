'use client'

import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight, FiClock, FiHeart, FiMapPin, FiShield, FiWind } from 'react-icons/fi';
import LocationTriggerButton from '@/components/LocationTriggerButton';

const services = [
  {
    icon: FiClock,
    title: 'Son Dakika Çözümü',
    description: 'Doğum günü, ziyaret ya da kutlama öncesi beklemeden dakikalar içinde buketinizi alın.',
    accent: 'bg-[var(--lale-anthracite)] text-[var(--lale-ivory)]',
  },
  {
    icon: FiWind,
    title: 'Korunan Tazelik',
    description: 'Özel iklimlendirme sistemi sayesinde çiçekler gün boyu canlılığını ve formunu korur.',
    accent: 'bg-[var(--lale-gold)] text-[var(--lale-anthracite)]',
  },
  {
    icon: FiMapPin,
    title: 'Merkezi Konumlar',
    description: 'AVM, havalimanı ve yoğun geçiş noktalarındaki konumlarla çiçeğe ulaşmak zahmetsizleşir.',
    accent: 'bg-white text-[var(--lale-anthracite)]',
  },
  {
    icon: FiShield,
    title: 'Temassız ve Güvenli',
    description: 'Kolay ödeme adımlarıyla hızlı, pratik ve güvenli bir alışveriş deneyimi yaşarsınız.',
    accent: 'bg-[#f7ede5] text-[var(--lale-anthracite)]',
  },
  {
    icon: FiHeart,
    title: 'Duyguyu Geciktirmez',
    description: 'Planlı olmasanız bile içten bir jesti ertelemeden aynı anda hayata geçirmenizi sağlar.',
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
              Bloom2GO Deneyimi
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-[40px] leading-[0.95] text-[var(--lale-anthracite)] sm:text-[54px] lg:text-[68px]">
              Neden çiçeği bir otomat deneyiminden almak mantıklı?
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--lale-emerald-soft)] sm:text-lg">
              Bloom2GO yalnızca bir satış noktası değil; hız, tazelik ve erişilebilirliği bir araya getiren
              yeni nesil bir çiçek alma alışkanlığıdır.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <LocationTriggerButton className="lale-gold-button gap-3">
                Otomat Konumları
                <FiArrowUpRight className="h-4 w-4" />
              </LocationTriggerButton>
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(143,98,64,0.18)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--lale-anthracite)] transition-all duration-300 hover:bg-white/80"
              >
                Hizmet Detayları
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
