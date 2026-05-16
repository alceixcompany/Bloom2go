'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { withAssetVersion } from '@/lib/asset';
import {
  FiArrowRight,
  FiClock,
  FiGrid,
  FiMapPin,
  FiPackage,
  FiScissors,
  FiShoppingBag,
  FiTruck,
  FiUsers,
  FiSmartphone,
  FiSun,
} from 'react-icons/fi';

const modules = [
  {
    icon: FiGrid,
    slug: 'otomat-agi',
    title: 'Otomat Ağı',
    image: withAssetVersion('/services/siparis-yonetimi.png'),
    description: 'Şehrin en prestijli noktalarında 7/24 aktif çiçek galerileri.',
    tone: 'dark',
    highlights: ['AVM ve Havalimanı konumları', 'Merkezi konum takibi', 'Yüksek trafik erişimi'],
  },
  {
    icon: FiSun,
    slug: 'tazelik-teknolojisi',
    title: 'Tazelik Teknolojisi',
    image: withAssetVersion('/services/hazirlik-akisi.png'),
    description: 'Gelişmiş iklimlendirme ile çiçekleriniz dalından yeni kopmuş gibi.',
    tone: 'accent',
    highlights: ['Isı ve nem sensörleri', 'Taze hava sirkülasyonu', 'Uzaktan durum izleme'],
  },
  {
    icon: FiClock,
    slug: '7-24-erisim',
    title: '7/24 Erişim',
    image: withAssetVersion('/services/stok-takibi.png'),
    description: 'Zaman kısıtlaması olmadan, dilediğiniz an taze bukete ulaşın.',
    tone: 'light',
    highlights: ['Gece boyu aktif hizmet', 'Anında satın alma', 'Sıra beklemeden işlem'],
  },
  {
    icon: FiSmartphone,
    slug: 'akilli-odeme',
    title: 'Akıllı Ödeme',
    image: withAssetVersion('/services/hazirlik-akisi.png'),
    description: 'Temassız kart ve QR ile saniyeler içinde ödemenizi tamamlayın.',
    tone: 'blush',
    highlights: ['Kredi kartı entegrasyonu', 'Dijital fiş ve fatura', 'Güvenli ödeme altyapısı'],
  },
  {
    icon: FiPackage,
    slug: 'tedarik-zinciri',
    title: 'Tedarik Zinciri',
    image: withAssetVersion('/services/siparis-yonetimi.png'),
    description: 'Otomatlardaki ürünlerin günlük olarak yenilenmesi ve takibi.',
    tone: 'sand',
    highlights: ['Günlük taze ikmal', 'Akıllı stok tahmini', 'Minimum zayiat oranı'],
  },
  {
    icon: FiUsers,
    slug: 'musteri-deneyimi',
    title: 'Müşteri Deneyimi',
    image: withAssetVersion('/services/siparis-yonetimi.png'),
    description: 'Dokunmatik ekranlar üzerinden interaktif seçim ve bilgi.',
    tone: 'light',
    highlights: ['Buket detaylı bilgi', 'Özel hediye paketleme', 'Sadakat programları'],
  },
] as const;

const workflow = [
  {
    step: '01',
    title: 'Otomatı Keşfedin',
    description: 'Size en yakın Bloom2GO otomatını bulun ve taze çiçek galerisini inceleyin.',
  },
  {
    step: '02',
    title: 'Buketinizi Seçin',
    description: 'Dokunmatik ekran üzerinden dilediğiniz buketi seçin ve detaylarını görün.',
  },
  {
    step: '03',
    title: 'Anında Alın',
    description: 'Ödemenizi temassız olarak tamamlayın ve taze çiçeğinize saniyeler içinde ulaşın.',
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fcf7f2] text-[#2a211c]">
      <section className="relative overflow-hidden border-b border-[rgba(42,33,28,0.08)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(247,147,30,0.16),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(165,111,71,0.12),_transparent_32%)]" />
        <div className="absolute -right-20 top-12 h-72 w-72 rounded-full bg-[rgba(247,147,30,0.08)] blur-3xl" />
        <div className="absolute -left-20 bottom-6 h-72 w-72 rounded-full bg-[rgba(165,111,71,0.08)] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-[#a56f47]">
              Bloom2GO Deneyimi
            </p>
            <h1 className="max-w-4xl font-serif text-[clamp(2.6rem,5vw,5.25rem)] leading-[0.96] tracking-[-0.04em] text-[#2a211c]">
              Taze çiçeklere 7/24 <br /> ulaşmanızı sağlayan teknoloji
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8a6448] sm:text-xl">
              Bloom2GO; tazelik, hız ve erişilebilirliği bir araya getirerek çiçeği yalnızca özel günlerde değil,
              ihtiyaç duyduğunuz her anda ulaşılabilir hale getiriyor.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/hizmet-bolgelerimiz"
                className="inline-flex items-center justify-center rounded-full bg-[#2a211c] px-7 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#2a211c]/20"
              >
                Otomat Konumları
              </Link>
              <Link
                href="#moduller"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(42,33,28,0.12)] bg-white px-7 py-3 text-sm font-semibold text-[#2a211c] transition-colors duration-300 hover:bg-[#fff4ed]"
              >
                Nasıl Çalışır?
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[28px] border border-[rgba(42,33,28,0.08)] bg-white/80 px-5 py-5 shadow-[0_12px_40px_rgba(42,33,28,0.05)]">
                <p className="text-2xl font-semibold text-[#2a211c]">50+</p>
                <p className="mt-1 text-sm text-[#8a6448]">Aktif otomat noktası</p>
              </div>
              <div className="rounded-[28px] border border-[rgba(42,33,28,0.08)] bg-white/80 px-5 py-5 shadow-[0_12px_40px_rgba(42,33,28,0.05)]">
                <p className="text-2xl font-semibold text-[#2a211c]">7/24</p>
                <p className="mt-1 text-sm text-[#8a6448]">Kesintisiz taze erişim</p>
              </div>
              <div className="rounded-[28px] border border-[rgba(42,33,28,0.08)] bg-white/80 px-5 py-5 shadow-[0_12px_40px_rgba(42,33,28,0.05)]">
                <p className="text-2xl font-semibold text-[#2a211c]">100%</p>
                <p className="mt-1 text-sm text-[#8a6448]">Tazelik ve kalite garantisi</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative lg:pl-4"
          >
            <div className="relative mx-auto aspect-[4/4.2] w-full max-w-[520px] overflow-hidden rounded-[40px] border-8 border-white bg-white shadow-[0_28px_80px_rgba(42,33,28,0.15)]">
              <Image
                src={withAssetVersion('/hero_main.png')}
                alt="Bloom2GO akıllı çiçek otomatı"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,33,28,0.42)] via-transparent to-transparent" />

              <div className="absolute left-6 top-6 rounded-[24px] border border-white/35 bg-white/70 px-5 py-4 backdrop-blur-md">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#a56f47]">Canlı Durum</p>
                <p className="mt-1 text-base font-semibold text-[#2a211c]">İstanbul Havalimanı • Aktif</p>
              </div>

              <div className="absolute bottom-6 right-6 rounded-full border border-white/25 bg-white/72 px-6 py-4 text-sm font-bold text-[#2a211c] backdrop-blur-md">
                Taze Stok Yenilendi
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="moduller" className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(165,111,71,0.08),_transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#a56f47]">Teknolojimiz</p>
            <h2 className="mt-5 font-serif text-[clamp(2.1rem,4vw,4.2rem)] leading-[1.02] tracking-[-0.04em] text-[#2a211c]">
              Çiçek Almayı Kolaylaştıran Detaylar
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#8a6448]">
              Her detay, çiçeğe daha hızlı ulaşmanız ve seçiminizden emin olmanız için tasarlandı.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            <article className="grid overflow-hidden rounded-[40px] border border-[rgba(42,33,28,0.08)] bg-[#2a211c] text-white shadow-2xl lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[460px]">
                <Image
                  src={modules[0].image}
                  alt={modules[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(42,33,28,0.72)] via-[rgba(42,33,28,0.28)] to-transparent" />
                <div className="absolute left-8 top-8 rounded-full border border-white/14 bg-white/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                  {modules[0].title}
                </div>
              </div>
              <div className="flex flex-col justify-between p-10 sm:p-12">
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-[#f7931e] text-[#2a211c]">
                    <FiGrid className="h-8 w-8" />
                  </div>
                  <h3 className="mt-8 max-w-md font-serif text-[clamp(2rem,3vw,3.6rem)] leading-[0.98] tracking-[-0.04em]">
                    Şehrin her noktasında taze çiçek galerileri
                  </h3>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                    Bloom2GO otomatları, premium tasarım buketleri en çok ihtiyaç duyulan anlarda ve yerlerde müşterilerle buluşturur.
                  </p>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {modules[0].highlights.map((item) => (
                    <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-5 text-sm leading-6 text-white/80">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
              {modules.slice(1, 3).map((module) => {
                const Icon = module.icon;
                return (
                  <article 
                    key={module.slug}
                    className={`overflow-hidden rounded-[40px] border border-[rgba(42,33,28,0.08)] bg-white shadow-xl flex flex-col`}
                  >
                    <div className="relative h-64">
                      <Image
                        src={module.image}
                        alt={module.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,33,28,0.2)] via-transparent to-transparent" />
                    </div>
                    <div className="p-8 sm:p-10 flex-grow">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#fcf7f2] border border-[rgba(42,33,28,0.06)] text-[#f7931e]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-7 font-serif text-3xl leading-[1.1] text-[#2a211c]">
                        {module.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-[#7a5c49]">{module.description}</p>
                      <Link 
                        href={`/hizmetlerimiz/${module.slug}`}
                        className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f7931e] hover:gap-4 transition-all"
                      >
                        NASIL ÇALIŞIR? <FiArrowRight />
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3">
               {modules.slice(3).map((module) => {
                const Icon = module.icon;
                return (
                  <article 
                    key={module.slug}
                    className="overflow-hidden rounded-[36px] border border-[rgba(42,33,28,0.08)] bg-white p-8 shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fcf7f2] text-[#f7931e] mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-2xl mb-4 text-[#2a211c]">{module.title}</h3>
                    <p className="text-sm leading-relaxed text-[#7a5c49] mb-6">{module.description}</p>
                    <Link 
                      href={`/hizmetlerimiz/${module.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a56f47] hover:text-[#f7931e] transition-colors"
                    >
                      DETAY <FiArrowRight />
                    </Link>
                  </article>
                )
               })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#2a211c] text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f7931e] mb-6">Bloom2GO Deneyimi</p>
              <h2 className="font-serif text-5xl leading-tight mb-8">
                Taze Çiçeğe Ulaşmak <br />
                <span className="italic text-[#f7931e]">Artık Çok Kolay</span>
              </h2>
              <div className="space-y-6">
                {workflow.map((item) => (
                  <div key={item.step} className="flex gap-6 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-[#f7931e] font-bold text-lg group-hover:bg-[#f7931e] group-hover:text-[#2a211c] transition-all">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-white/5">
              <Image
                src={withAssetVersion('/about/hero.png')}
                alt="Otomat akışı"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 text-center">
          <div className="bg-[#f7931e] rounded-[3rem] p-12 sm:p-20 text-[#2a211c] shadow-2xl shadow-[#f7931e]/20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
                Yeni Nesil <br /> Çiçekçiliğe Katılın
              </h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto font-medium text-[#2a211c]/80">
                Bloom2GO konumları, iş birliği fırsatları ya da hizmet detayları hakkında bilgi almak için bize ulaşın.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/iletisim" className="bg-[#2a211c] text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all shadow-xl">
                  BİZE ULAŞIN
                </Link>
                <Link href="/hakkimizda" className="bg-white/30 backdrop-blur-md text-[#2a211c] px-12 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-white/50 transition-all border border-white/20">
                  KURUMSAL BİLGİ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
