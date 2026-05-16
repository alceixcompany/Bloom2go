'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const WhyChooseUs = () => {
  const points = [
    {
      title: 'Beklenmedik Anlar İçin Hazır',
      description: 'Geç saatte alınacak bir hediye, apar topar gidilen bir ziyaret ya da unutulmuş özel günler için erişilebilir bir çözüm sunar.',
    },
    {
      title: 'Lokasyon Avantajı',
      description: 'AVM, metro, havalimanı ve merkezi yaşam noktalarında yer alarak çiçeğe ulaşımı günlük rutinin doğal parçasına dönüştürür.',
    },
    {
      title: 'Şık ve Pratik Deneyim',
      description: 'Seçimden ödemeye kadar tüm süreç sade, hızlı ve güven verici şekilde tasarlanır; acele ederken bile konforu bozmaz.',
    },
  ];

  const stats = [
    { value: '7/24', label: 'Her saate uyumlu erişim' },
    { value: 'Merkez', label: 'Yoğun noktalarda görünür konumlar' },
    { value: 'Hızlı', label: 'Beklemeden tamamlanan alışveriş akışı' },
  ];

  return (
    <section id="neden-biz" className="relative overflow-hidden bg-[#2a211c] py-24 text-[#fcf7f2]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(247,147,30,0.14),transparent_26%),radial-gradient(circle_at_82%_26%,rgba(255,255,255,0.06),transparent_20%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7931e]">
              Neden Bloom2GO
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Çiçek Almayı <br />
              <span className="text-[#f7931e]">Daha Erişilebilir Hale Getiriyoruz</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(252,247,242,0.7)] sm:text-lg">
              Bloom2GO, çiçeği sadece özel gün ürünü olmaktan çıkarır. Günün temposuna uyum sağlayan,
              kaliteli ve ulaşılabilir bir jest seçeneği sunar.
            </p>

            <div className="mt-10 space-y-8">
              {points.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="flex gap-4 rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <FiCheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[#f7931e]" />
                  <div>
                    <h3 className="font-serif text-2xl">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[rgba(252,247,242,0.6)]">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[34px] bg-[#f7931e] p-8 text-[#2a211c] shadow-[0_24px_70px_rgba(247,147,30,0.24)] sm:col-span-2"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] opacity-80">Yeni Nesil Alışkanlık</p>
              <p className="mt-6 font-serif text-5xl sm:text-6xl">Çiçeği ihtiyaç anında ulaşılabilir kılar</p>
            </motion.div>

            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
              >
                <p className="font-serif text-5xl text-[#f7931e]">{stat.value}</p>
                <p className="mt-4 text-sm leading-7 text-[rgba(252,247,242,0.6)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
