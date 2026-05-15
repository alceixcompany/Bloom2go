'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiEye, FiShield, FiTarget, FiAward, FiTrendingUp } from 'react-icons/fi';
import { withAssetVersion } from '@/lib/asset';

const milestones = [
  {
    year: '2019',
    title: 'Temeller ve Vizyon',
    subtitle: 'Çiçekçilik sektöründeki dijital boşluğu fark ederek, ilk operasyonel modellerimizi kağıt üzerine döktük.',
    image: withAssetVersion('/about/milestone_2019.png'),
  },
  {
    year: '2021',
    title: 'İlk Dijital Dönüşüm',
    subtitle: 'Floristlerin iş akışını bozmayan, hazırlık masasına entegre ilk dijital panellerimizi hayata geçirdik.',
    image: withAssetVersion('/about/milestone_2021.png'),
  },
  {
    year: '2023',
    title: 'Entegre Ekosistem',
    subtitle: 'Sadece mağaza değil, kurye ve şube yönetimini de kapsayan uçtan uca bir operasyon ağına dönüştük.',
    image: withAssetVersion('/about/milestone_2023.png'),
  },
  {
    year: '2025',
    title: 'Geleceğin Çiçekçiliği',
    subtitle: 'Yapay zeka destekli stok tahmini ve akıllı rota optimizasyonu ile sektöre yeni bir standart getirdik.',
    image: withAssetVersion('/about/milestone_2025.png'),
  },
] as const;

const AboutPage = () => {
  return (
    <main className="page-flow min-h-screen bg-[#fcf7f2] text-[#2a211c]">
      <section className="relative flex min-h-[550px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={withAssetVersion('/about/hero.png')}
            alt="Bloom2GO Hakkımızda"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(42,33,28,0.55)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,147,30,0.3)] via-[rgba(42,33,28,0.25)] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-block rounded-full bg-[#f7931e] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white shadow-xl shadow-black/15">
              Hakkımızda
            </div>

            <h1 className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.04em] text-white">
              Çiçek operasyonlarına <br />
              <span className="text-[#ffd39e]">daha sade bir düzen</span> getiriyoruz
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/90">
              Bloom2GO, florist ekiplerinin ve mağaza yöneticilerinin siparişten teslimata kadar tüm akışı daha görünür, daha hızlı ve daha sakin yönetebilmesi için tasarlanmış yeni nesil bir operasyon ekosistemidir.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fcf7f2] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="max-w-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1e4] text-[#f7931e] shadow-sm">
                <FiAward className="h-6 w-6" />
              </div>

              <h2 className="font-serif text-3xl tracking-[-0.03em] text-[#2a211c] sm:text-4xl">
                Kurumsal Yaklaşımımız
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-[#7a5c49]">
                <p>
                  Bloom2GO’da amacımız yalnızca siparişleri listelemek değil; floristin hazırlık masasında, yöneticinin şube ekranında ve kuryenin teslimat akışında aynı netliği hissettiren bir sistem kurmak.
                </p>
                <p>
                  Çiçekçilik ritmini bilen, yoğun saatleri ve taze ürün hassasiyetini anlayan bir ürün diliyle operasyonları daha görünür ve daha sakin hale getiriyoruz.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[rgba(42,33,28,0.08)] pt-10">
                <div>
                  <div className="text-3xl font-bold text-[#f7931e]">5+</div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[#8a6448]">Temel operasyon modülü</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#f7931e]">Tek</div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[#8a6448]">Panelde görünür akış</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-[40px] border border-[rgba(42,33,28,0.08)] shadow-[0_32px_80px_rgba(42,33,28,0.12)]">
                <Image
                  src={withAssetVersion('/about/mission.png')}
                  alt="Bloom2GO yaklaşımı"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,33,28,0.15)] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(42,33,28,0.08)] bg-[#f7f1ea] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 border-l-4 border-[#f7931e] pl-8">
            <h2 className="font-serif text-3xl tracking-[-0.03em] text-[#2a211c]">Yolculuğumuz</h2>
            <p className="mt-2 text-base text-[#8a6448]">Bloom2GO’nun vizyondan gerçeğe gelişim adımları</p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-32 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(247,147,30,0.35),transparent)] lg:block" />
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className={`group rounded-[32px] border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  index === 0
                    ? 'border-[#2a211c] bg-[#2a211c] text-white'
                    : 'border-[rgba(42,33,28,0.08)] bg-white text-[#2a211c]'
                }`}
              >
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[24px]">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 25vw" />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${index === 0 ? 'bg-[rgba(42,33,28,0.4)] group-hover:opacity-20' : 'bg-[rgba(42,33,28,0.15)] group-hover:opacity-5'}`} />
                </div>
                <span className={`text-xl font-bold ${index === 0 ? 'text-[#ffd39e]' : 'text-[#f7931e]'}`}>{item.year}</span>
                <h3 className={`mt-3 text-base font-bold leading-tight ${index === 0 ? 'text-white' : 'text-[#2a211c]'}`}>{item.title}</h3>
                <p className={`mt-3 text-sm leading-7 ${index === 0 ? 'text-white/75' : 'text-[#7a5c49]'}`}>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#fcf7f2] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[480px] overflow-hidden rounded-[40px] border border-[rgba(42,33,28,0.08)] shadow-[0_32px_90px_rgba(42,33,28,0.1)]"
              >
                <Image
                  src={withAssetVersion('/about/milestone_2021.png')}
                  alt="Bloom2GO misyon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-8 top-8 rounded-full border border-white/20 bg-white/15 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                  Florist odağı
                </div>
                <div className="absolute bottom-10 left-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7931e] text-white shadow-2xl">
                    <FiTarget className="h-7 w-7" />
                  </div>
                </div>
              </motion.div>
              <div className="max-w-xl">
                <h3 className="font-serif text-4xl tracking-[-0.03em] text-[#2a211c]">Misyonumuz</h3>
                <p className="mt-8 text-lg leading-8 text-[#7a5c49]">
                  Çiçekçilerin günlük operasyonlarını daha sade, görünür ve yönetilebilir hale getirmek; siparişten teslimata kadar tüm ekiplere aynı netliği sunan bir dijital çalışma alanı oluşturmak.
                </p>
              </div>
            </div>

            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="order-2 max-w-xl lg:order-1">
                <h3 className="font-serif text-4xl tracking-[-0.03em] text-[#2a211c]">Vizyonumuz</h3>
                <p className="mt-8 text-lg leading-8 text-[#7a5c49]">
                  Çiçek operasyon teknolojilerinde sade ama güçlü bir standart oluşturmak; floristlerin, mağaza yöneticilerinin ve teslimat ekiplerinin aynı sistem içinde daha uyumlu çalışmasını sağlayan küresel bir referans ürün haline gelmek.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 relative h-[480px] overflow-hidden rounded-[40px] border border-[rgba(42,33,28,0.08)] shadow-[0_32px_90px_rgba(42,33,28,0.1)] lg:order-2"
              >
                <Image
                  src={withAssetVersion('/about/vision.png')}
                  alt="Bloom2GO vizyon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute right-8 top-8 rounded-full border border-white/20 bg-white/15 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                  Görünür akış
                </div>
                <div className="absolute bottom-10 right-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d89b53] text-white shadow-2xl">
                    <FiEye className="h-7 w-7" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1ea] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl tracking-[-0.03em] text-[#2a211c]">Değerlerimiz</h2>
            <p className="mt-2 text-base text-[#8a6448]">Bloom2GO ürün yaklaşımını şekillendiren temel ilkeler</p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { icon: FiShield, title: 'Güven', desc: 'Veriyi sade ve şeffaf şekilde görünür kılmak.', bg: 'bg-[#fff1e4]', text: 'text-[#f7931e]' },
              { icon: FiCheckCircle, title: 'Netlik', desc: 'Ekiplerin tek bakışta ne yapacağını anlaması.', bg: 'bg-[#f3eadf]', text: 'text-[#a56f47]' },
              { icon: FiClock, title: 'Ritim', desc: 'Yoğun saatlere ve teslimat temposuna uyum.', bg: 'bg-[#fff7f1]', text: 'text-[#c77a38]' },
              { icon: FiTrendingUp, title: 'Gelişim', desc: 'Ürünü sahadaki gerçek kullanıma göre iyileştirmek.', bg: 'bg-[#efe6db]', text: 'text-[#7a5c49]' },
            ].map((item) => (
              <div key={item.title} className="group rounded-[32px] border border-[rgba(42,33,28,0.08)] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${item.bg} ${item.text}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-[#2a211c]">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[#7a5c49]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fcf7f2] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[48px] bg-[#2a211c] p-12 text-center md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
            <h2 className="font-serif text-3xl tracking-[-0.03em] text-white sm:text-5xl">
              Bloom2GO ile <span className="text-[#ffd39e]">daha görünür bir akış</span> kurun
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Siparişten florist hazırlığına, stoktan teslimata kadar mağazanıza en uygun Bloom2GO kurgusunu birlikte planlayalım.
            </p>
            <div className="mt-12 flex flex-col justify-center gap-6 sm:flex-row">
              <Link href="/iletisim" className="rounded-full bg-[#f7931e] px-10 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#f57c00] hover:scale-105">
                İLETİŞİME GEÇİN
              </Link>
              <Link href="/hizmetlerimiz" className="rounded-full border border-white/20 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/40">
                HİZMETLERİ KEŞFEDİN
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
