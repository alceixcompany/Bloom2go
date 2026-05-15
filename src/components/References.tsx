'use client'

import React from 'react';

const References = () => {
  const testimonials = [
    {
      name: 'Boutique Floral Studio',
      title: 'Nişantaşı',
      comment: 'Sipariş yoğunluğunda kaybolmayı bıraktık. Bloom2GO sayesinde her buket hangi aşamada hemen görünüyor.',
      tone: 'bg-[#fffde7]',
      rotate: '-rotate-2',
    },
    {
      name: 'Gül ve Bahçe Şubeleri',
      title: 'Çoklu Şube Yönetimi',
      comment: 'Şubeler arası stok ve hazırlık akışını tek panelde görmek operasyonumuzu ciddi biçimde hızlandırdı.',
      tone: 'bg-[#f1f8e9]',
      rotate: 'rotate-2',
    },
    {
      name: 'Sanat Florist',
      title: 'Atölye ve Kurye Takibi',
      comment: 'Floristlerimiz neyin acil olduğunu, kuryelerimiz de hangi teslimatın yolda olduğunu aynı panelden izliyor.',
      tone: 'bg-[#fce4ec]',
      rotate: '-rotate-1',
    },
  ];

  return (
    <section id="referanslar" className="bg-[var(--lale-cream)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--lale-emerald-soft)]">
            Kullanan Çiçekçiler
          </p>
          <h2 className="mt-5 font-serif text-4xl text-[var(--lale-anthracite)] sm:text-5xl">
            Bloom2GO ile Akan İş Notları
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--lale-emerald-soft)] sm:text-lg">
            Gerçek operasyonlarda hız, netlik ve teslimat kalitesi kazanan ekiplerden kısa notlar.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className={`relative w-full max-w-[340px] ${item.rotate} ${item.tone} p-7 shadow-[0_18px_40px_rgba(36,29,24,0.10)] transition-transform duration-300 hover:rotate-0`}
            >
              <div className="absolute -top-3 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full bg-[var(--lale-gold)]/30 blur-sm" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[var(--lale-anthracite)]">+</div>
              <p className="font-serif text-xl leading-8 text-[var(--lale-anthracite)]">"{item.comment}"</p>
              <div className="mt-8 border-t border-black/10 pt-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--lale-anthracite)]">
                  {item.name}
                </p>
                <p className="mt-2 text-sm text-[var(--lale-emerald-soft)]">{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
