'use client'

import React from 'react';
import Image from 'next/image';
import { FiArrowUpRight, FiClock, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="iletisim" className="relative overflow-hidden bg-[#221a16] py-24 text-[var(--lale-ivory)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(242,140,40,0.14),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.05),transparent_18%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="overflow-hidden rounded-[40px] border border-white/8 bg-[rgba(255,248,242,0.03)] shadow-[0_28px_90px_rgba(0,0,0,0.24)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-white/8 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--lale-gold)]">
                Bloom2GO İletişim
              </p>
              <h2 className="mt-5 max-w-[560px] font-serif text-[40px] leading-[0.95] sm:text-[54px] lg:text-[68px]">
                Lokasyon, isletme ve otomat satisi icin bizimle iletisime gecin
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-[rgba(255,248,242,0.76)] sm:text-lg">
                Kendi Bloom2GO noktalarimiz, yeni lokasyon planlari ya da otomat satin alma sureci
                hakkinda bilgi almak isterseniz ekibimiz size en uygun yapilari paylassin.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/8 bg-white/5 p-5">
                  <FiPhone className="h-5 w-5 text-[var(--lale-gold)]" />
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--lale-gold)]">
                    Telefon
                  </p>
                  <p className="mt-3 text-lg text-[rgba(255,248,242,0.88)]">0312 221 02 46</p>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-white/5 p-5">
                  <FiClock className="h-5 w-5 text-[var(--lale-gold)]" />
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--lale-gold)]">
                    Müsaitlik
                  </p>
                  <p className="mt-3 text-lg text-[rgba(255,248,242,0.88)]">Hafta içi 09:00 - 18:30</p>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-white/5 p-5 sm:col-span-2">
                  <FiMapPin className="h-5 w-5 text-[var(--lale-gold)]" />
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--lale-gold)]">
                    Merkez
                  </p>
                  <p className="mt-3 text-lg leading-8 text-[rgba(255,248,242,0.88)]">
                    Bloom2Go Teknoloji AS
                    <br />
                    Mustafa Kemal Mah. Dumlupinar Bulv.
                    <br />
                    No: 266 A / 18 Cankaya / Ankara
                  </p>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-[28px] border border-white/8">
                <div className="relative min-h-[260px]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Ulj3nmFf4WZxWg80yi_Ka_uhoGDwMGMBWowH86onau6jKamExchLwtEAAtXsLmMcPeb07g8qzC0AI9fdm2CmcGNujEIa8nAPS9b-3Go1iU2UjWLpR8aMSZjzIh8kx15Wnhcvm6PRzn_UyagGdnKLKxDaQLU5T_Da9tcn3pXOK1482Y0PWjG3qnn2Ca7fTjofqG2yxDqREdSwAQuw1AVGP3eW7TpNjV7qltJziSxq7R0Yv4PpFbd3xnx8V2v0XtOgS6C-sd0hFr8"
                    alt="Florist workspace"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,26,22,0.72),rgba(34,26,22,0.18))]" />
                  <div className="absolute bottom-0 left-0 p-6 sm:p-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--lale-gold)]">
                      Bloom2GO Noktaları
                    </p>
                    <p className="mt-3 max-w-[280px] font-serif text-[30px] leading-[1.05] text-white">
                      Yeni nokta planlari ve otomat kurulum modellerini birlikte degerlendirelim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgba(255,248,242,0.02)] p-8 sm:p-10 lg:p-14">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--lale-gold)]">
                    Hızlı İletişim
                  </p>
                  <h3 className="mt-3 font-serif text-3xl">Size nasıl yardımcı olabileceğimizi yazın</h3>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 text-[var(--lale-gold)] sm:flex">
                  <FiArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <form className="mt-10 space-y-5">
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--lale-gold)]">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    placeholder="Adınızı yazın"
                    className="mt-2 w-full rounded-[22px] border border-[rgba(255,248,242,0.16)] bg-[rgba(255,248,242,0.10)] px-5 py-4 text-sm text-[var(--lale-ivory)] placeholder:text-[rgba(255,248,242,0.52)] focus:border-[var(--lale-gold)] focus:bg-[rgba(255,248,242,0.13)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--lale-gold)]">
                    E-Posta
                  </label>
                  <input
                    type="email"
                    placeholder="info@bloom2go.com"
                    className="mt-2 w-full rounded-[22px] border border-[rgba(255,248,242,0.16)] bg-[rgba(255,248,242,0.10)] px-5 py-4 text-sm text-[var(--lale-ivory)] placeholder:text-[rgba(255,248,242,0.52)] focus:border-[var(--lale-gold)] focus:bg-[rgba(255,248,242,0.13)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--lale-gold)]">
                    Mesaj
                  </label>
                  <textarea
                    rows={7}
                    placeholder="Konum talebi, otomat satin alma, is birligi ya da operasyon detayi hakkinda mesajinizi yazin"
                    className="mt-2 w-full rounded-[22px] border border-[rgba(255,248,242,0.16)] bg-[rgba(255,248,242,0.10)] px-5 py-4 text-sm text-[var(--lale-ivory)] placeholder:text-[rgba(255,248,242,0.52)] focus:border-[var(--lale-gold)] focus:bg-[rgba(255,248,242,0.13)] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[var(--lale-gold)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lale-anthracite)] transition-all duration-300 hover:bg-[var(--lale-gold-soft)]"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
