'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { FiArrowRight, FiCheckCircle, FiArrowLeft, FiClock, FiSettings, FiActivity } from 'react-icons/fi';
import { motion } from 'framer-motion';

const servicesData = {
  'otomat-agi': {
    title: 'Otomat Ağı',
    image: '/services/siparis-yonetimi.png',
    icon: '01',
    description: 'Şehrin en prestijli noktalarında 7/24 aktif Bloom2GO çiçek otomatları.',
    features: ['AVM ve havalimanı konumları', 'Yüksek yaya trafiğine uygun erişim', 'Kolay fark edilen nokta kurgusu', 'Şehir içinde hızlı ulaşım avantajı'],
    overview: 'Bloom2GO Otomat Ağı, çiçeği yalnızca belirli saatlerde değil günün doğal akışı içinde ulaşılabilir kılar. Merkezi lokasyon seçimi sayesinde spontane jestler bile zahmetsiz hale gelir.',
    whyChoose: ['Size en yakın noktayı kolayca bulursunuz', 'Son dakika ihtiyaçlarında zaman kazandırır', 'Şehir temposuna uyumlu bir erişim deneyimi sunar'],
    process: [
      { step: 1, title: 'Konumu Bulun', description: 'Size en yakın Bloom2GO noktasını hızlıca belirleyin.' },
      { step: 2, title: 'Otomata Ulaşın', description: 'Merkezi lokasyon avantajıyla kısa sürede noktaya gidin.' },
      { step: 3, title: 'Ürünleri İnceleyin', description: 'Vitrindeki buketleri ve seçenekleri ekrandan görün.' },
      { step: 4, title: 'Satın Alın', description: 'Beğendiğiniz buketi anında alarak yolunuza devam edin.' },
    ],
  },
  'tazelik-teknolojisi': {
    title: 'Tazelik Teknolojisi',
    image: '/services/hazirlik-akisi.png',
    icon: '02',
    description: 'Gelişmiş iklimlendirme sayesinde buketler gün boyu canlılığını korur.',
    features: ['Isı ve nem dengesi', 'Koruyucu saklama ortamı', 'Günlük tazelik kontrolü', 'Ürün kalitesini destekleyen iç sistem'],
    overview: 'Bloom2GO Tazelik Teknolojisi, çiçeklerin en hassas ihtiyaçlarını göz önünde bulundurarak tasarlanır. Böylece müşteriler yalnızca hızlı değil, güvenilir bir kalite deneyimi de yaşar.',
    whyChoose: ['Çiçeklerin formu daha uzun süre korunur', 'Alışveriş anında güven hissi yaratır', 'Marka deneyimini kaliteyle destekler'],
    process: [
      { step: 1, title: 'Koruma Ortamı', description: 'Otomat içi ısı ve nem dengesi sabit tutulur.' },
      { step: 2, title: 'Günlük Kontrol', description: 'Buketler düzenli olarak gözden geçirilir ve yenilenir.' },
      { step: 3, title: 'Canlı Sunum', description: 'Müşteri ekrandan mevcut ürünleri güvenle inceler.' },
      { step: 4, title: 'Taze Teslim', description: 'Seçilen buket doğrudan korunmuş alandan alınır.' },
    ],
  },
  '7-24-erisim': {
    title: '7/24 Erişim',
    image: '/services/stok-takibi.png',
    icon: '03',
    description: 'Günün hangi saati olursa olsun taze çiçeğe anında ulaşın.',
    features: ['Gece geç saatlerde kullanım', 'Kutlama öncesi hızlı çözüm', 'Sıra beklemeden alışveriş', 'Mağaza saatinden bağımsız erişim'],
    overview: 'Bloom2GO 7/24 Erişim modeli, çiçeği yalnızca planlı alışverişe bağlı olmaktan çıkarır. İster sabah erken ister gece geç saatte, ihtiyaç anında çözüm sunar.',
    whyChoose: ['Beklenmedik anlarda kurtarıcı olur', 'Mağaza kapanış saatlerine bağlı kalmazsınız', 'Spontane hediye anlarını kolaylaştırır'],
    process: [
      { step: 1, title: 'İhtiyacı Fark Edin', description: 'Hediye ya da ziyaret öncesi çiçeğe ihtiyaç duyduğunuzu belirleyin.' },
      { step: 2, title: 'En Yakın Noktaya Gidin', description: 'Yakındaki Bloom2GO otomatına kolayca ulaşın.' },
      { step: 3, title: 'Hızlı Seçim Yapın', description: 'Birkaç adımda uygun buketi seçin.' },
      { step: 4, title: 'Dakikalar İçinde Tamamlayın', description: 'Ödeme sonrası çiçeğinizi alıp zaman kaybetmeden ilerleyin.' },
    ],
  },
  'akilli-odeme': {
    title: 'Akıllı Ödeme',
    image: '/services/hazirlik-akisi.png',
    icon: '04',
    description: 'Temassız kart ve QR seçenekleriyle saniyeler içinde ödemenizi tamamlayın.',
    features: ['Temassız ödeme altyapısı', 'Hızlı işlem adımları', 'Güvenli ödeme deneyimi', 'Kolay anlaşılır ekran akışı'],
    overview: 'Bloom2GO Akıllı Ödeme deneyimi, alışverişin en kritik adımını gereksiz bekleme olmadan tamamlamanızı sağlar. Böylece hız ve güven aynı anda hissedilir.',
    whyChoose: ['Kasada bekleme hissini ortadan kaldırır', 'Kullanımı son derece pratiktir', 'Güvenli alışveriş duygusunu güçlendirir'],
    process: [
      { step: 1, title: 'Ürünü Seçin', description: 'Dokunmatik ekran üzerinden buketinizi belirleyin.' },
      { step: 2, title: 'Ödeme Yöntemini Belirleyin', description: 'Kart veya uygun dijital ödeme seçeneğini kullanın.' },
      { step: 3, title: 'İşlemi Onaylayın', description: 'Kısa ve net adımlarla ödemeyi tamamlayın.' },
      { step: 4, title: 'Buketinizi Alın', description: 'İşlem onayından hemen sonra ürününüze ulaşın.' },
    ],
  },
  'tedarik-zinciri': {
    title: 'Tedarik Zinciri',
    image: '/services/siparis-yonetimi.png',
    icon: '05',
    description: 'Otomatlardaki ürünler düzenli olarak yenilenir ve tazelik standardı korunur.',
    features: ['Günlük ürün yenileme', 'Düzenli kalite kontrolü', 'Taze buket devamlılığı', 'Konuma göre ürün güncelleme'],
    overview: 'Bloom2GO Tedarik Zinciri, her noktada deneyim kalitesini sabit tutmak için düzenli yenileme ve dikkatli ürün planlaması üzerine kuruludur.',
    whyChoose: ['Vitrinde taze görünüm korunur', 'Ürün sürekliliği sağlanır', 'Müşteri güveni güçlenir'],
    process: [
      { step: 1, title: 'Planlama', description: 'Her lokasyon için uygun ürün akışı belirlenir.' },
      { step: 2, title: 'Yerleştirme', description: 'Yeni buketler otomat içine özenle yerleştirilir.' },
      { step: 3, title: 'Kontrol', description: 'Mevcut ürünlerin durumu düzenli olarak gözden geçirilir.' },
      { step: 4, title: 'Süreklilik', description: 'Tazelik ve çeşitlilik korunarak deneyim devam ettirilir.' },
    ],
  },
  'musteri-deneyimi': {
    title: 'Müşteri Deneyimi',
    image: '/services/siparis-yonetimi.png',
    icon: '06',
    description: 'Dokunmatik ekran, sade seçim akışı ve estetik sunumla keyifli bir alışveriş deneyimi yaşatır.',
    features: ['Kolay anlaşılır ekran dili', 'Buket detay bilgileri', 'Hızlı karar vermeyi destekleyen sunum', 'Marka hissini güçlendiren tasarım'],
    overview: 'Bloom2GO Müşteri Deneyimi, yalnızca ürün sunmakla kalmaz; çiçek almayı daha çağdaş, rahat ve güven veren bir ritüele dönüştürür.',
    whyChoose: ['Seçim sürecini zorlaştırmaz', 'Alışverişi daha keyifli hale getirir', 'Hız ile estetiği birlikte sunar'],
    process: [
      { step: 1, title: 'Ekranı İnceleyin', description: 'Ürünleri ve detayları anlaşılır biçimde görüntüleyin.' },
      { step: 2, title: 'Karar Verin', description: 'Tarzınıza ve anın ihtiyacına uygun buketi seçin.' },
      { step: 3, title: 'Ödemeyi Tamamlayın', description: 'Kısa adımlarla işlemi güvenle bitirin.' },
      { step: 4, title: 'Deneyimi Tamamlayın', description: 'Buketinizi alıp jestinizi gecikmeden hayata geçirin.' },
    ],
  },
} as const;

type ServiceSlug = keyof typeof servicesData;

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as ServiceSlug;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#2a211c]">
      {/* Hero Section */}
      <section className="relative flex min-h-[500px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2a211c]/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link href="/hizmetlerimiz" className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-[0.2em] mb-12 hover:text-[#f7931e] transition-colors bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <FiArrowLeft /> HİZMETLERE DÖN
            </Link>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#f7931e]" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#f7931e]">Deneyim Detayı</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl font-medium">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-[#fcf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
            
            {/* Left Column: Scope & Features */}
            <div className="lg:col-span-7">
              <div className="mb-16">
                <h2 className="font-serif text-4xl font-bold mb-8 text-[#2a211c]">Neleri Kapsar?</h2>
                <p className="text-lg leading-relaxed text-[#7a5c49] mb-12">
                  {service.overview}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.features.map((item) => (
                    <div key={item} className="flex items-start gap-4 p-5 rounded-3xl bg-white border border-[rgba(42,33,28,0.06)] shadow-sm">
                      <FiCheckCircle className="h-5 w-5 text-[#f7931e] shrink-0 mt-0.5" />
                      <span className="text-base font-semibold text-[#2a211c]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Section */}
              <div className="pt-16 border-t border-[rgba(42,33,28,0.08)]">
                <h2 className="font-serif text-4xl font-bold mb-12 text-[#2a211c]">Nasıl Çalışır?</h2>
                <div className="space-y-10">
                  {service.process.map((item) => (
                    <div key={item.step} className="relative flex gap-10 group">
                      <div className="flex flex-col items-center">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2a211c] text-white text-base font-bold shadow-xl z-10">
                          {item.step}
                        </div>
                        {item.step !== service.process.length && (
                          <div className="h-full w-px bg-[rgba(42,33,28,0.1)] absolute top-12" />
                        )}
                      </div>
                      <div className="pb-10">
                        <h4 className="text-2xl font-serif font-bold mb-3 text-[#2a211c] group-hover:text-[#f7931e] transition-colors">{item.title}</h4>
                        <p className="text-base leading-relaxed text-[#7a5c49]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Why Us & CTA */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-10">
                {/* Why Choose Card */}
                <div className="bg-[#2a211c] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-40 w-40 bg-[#f7931e] opacity-10 blur-3xl -translate-y-20 translate-x-20" />
                  <h3 className="text-2xl font-bold mb-10 flex items-center gap-4">
                    <FiActivity className="text-[#f7931e]" />
                    Neden Tercih Ediliyor?
                  </h3>
                  <div className="space-y-8">
                    {service.whyChoose.map((item) => (
                      <div key={item} className="flex gap-5">
                        <div className="h-2 w-2 rounded-full bg-[#f7931e] mt-2.5 shrink-0" />
                        <p className="text-base leading-relaxed text-white/80 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation CTA */}
                <div className="bg-white rounded-[3rem] p-12 border border-[rgba(42,33,28,0.06)] text-center shadow-xl">
                  <div className="h-16 w-16 bg-[#f7931e]/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <FiSettings className="h-8 w-8 text-[#f7931e]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4 text-[#2a211c]">Daha Fazla Bilgi Alın</h3>
                  <p className="text-base text-[#7a5c49] mb-10 leading-relaxed">
                    Konumlar, iş birlikleri ve Bloom2GO deneyimi hakkında ekibimiz size yardımcı olsun.
                  </p>
                  <Link href="/iletisim" className="block w-full rounded-2xl bg-[#f7931e] px-8 py-5 text-sm font-bold text-white shadow-xl shadow-[#f7931e]/20 hover:bg-[#f57c00] transition-all hover:scale-[1.02] active:scale-[0.98]">
                    İLETİŞİME GEÇİN
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
