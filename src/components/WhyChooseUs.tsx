'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const WhyChooseUs = () => {
  const points = [
    {
      title: 'Kesintisiz Tazelik',
      description: 'Otomatlarımız, çiçeklerin ihtiyaç duyduğu nem ve sıcaklık dengesini 24 saat boyunca koruyan özel soğutma sistemlerine sahiptir.',
    },
    {
      title: 'Şehrin Kalbinde',
      description: 'AVM, Metro, Havalimanı gibi yüksek trafikli noktalarda konumlanarak çiçeğe ulaşımı saniyelere indiriyoruz.',
    },
    {
      title: 'Dijital ve Temassız',
      description: 'Hızlı dokunmatik ekranlar ve temassız ödeme seçenekleriyle, beklemeden ve güvenle alışveriş yapın.',
    },
  ];

  const stats = [
    { value: '7/24', label: 'Kesintisiz canlı hizmet' },
    { value: '%100', label: 'Tazelik ve kalite garantisi' },
    { value: '30sn', label: 'Ortalama satın alma süresi' },
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
              Geleneksel Çiçekçiliği <br />
              <span className="text-[#f7931e]">Geleceğe Taşıyoruz</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(252,247,242,0.7)] sm:text-lg">
              Bloom2GO, bir satış noktasından daha fazlasıdır. Modern yaşamın hızına uyum sağlayan, tazeliği teknolojiyle birleştiren yeni nesil bir deneyimdir.
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
              <p className="text-sm font-semibold uppercase tracking-[0.22em] opacity-80">Akıllı Teknoloji</p>
              <p className="mt-6 font-serif text-5xl sm:text-6xl">Otomat değil, bir çiçek galerisi</p>
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
