'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { FiArrowRight, FiCheckCircle, FiArrowLeft, FiClock, FiSettings, FiActivity } from 'react-icons/fi';
import { motion } from 'framer-motion';

const servicesData = {
  'siparis-yonetimi': {
    title: 'Sipariş Yönetimi',
    image: '/services/siparis-yonetimi.png',
    icon: '01',
    description: 'Web sitesi, pazar yerleri ve fiziksel mağaza siparişlerini tek bir akıllı panelde toplayın.',
    features: ['Çapraz kanal sipariş toplama', 'Otomatik şube yönlendirme', 'Varyant ve özel not takibi', 'Anlık sipariş durumu güncelleme'],
    overview: 'Bloom2GO Sipariş Yönetimi modülü, çiçekçiliğin kaotik sipariş akışını sadeleştirerek ekiplerinizin neyin ne zaman hazırlanacağını tek bakışta görmesini sağlar.',
    whyChoose: ['Kayıp sipariş riskini ortadan kaldırır', 'Hazırlık süresini %30 azaltır', 'Müşteri bilgilendirmesini otomatikleştirir'],
    process: [
      { step: 1, title: 'Kanal Bağlantısı', description: 'Tüm sipariş kanallarınız Bloom2GO ile entegre edilir.' },
      { step: 2, title: 'Akış Tanımlama', description: 'Şube ve personel yetkileri belirlenir.' },
      { step: 3, title: 'Otomasyon', description: 'Gelen siparişler kriterlere göre ilgili şubeye düşer.' },
      { step: 4, title: 'Canlı Takip', description: 'Tüm süreç yönetici paneli üzerinden izlenir.' },
    ],
  },
  'hazirlik-akisi': {
    title: 'Hazırlık Akışı',
    image: '/services/hazirlik-akisi.png',
    icon: '02',
    description: 'Floristler için tasarlanmış, teslimat saatine göre önceliklendirilmiş görsel hazırlık ekranları.',
    features: ['Florist dostu dokunmatik arayüz', 'Buket fotoğrafı onay sistemi', 'Hazırlık süresi takibi', 'Malzeme listesi görünümü'],
    overview: 'Hazırlık Akışı modülü, atölye içindeki karmaşayı bitirir. Her florist, kendi ekranından hangi buketi hangi sırayla hazırlayacağını görür.',
    whyChoose: ['Yanlış ürün hazırlama riskini önler', 'Ekipler arası koordinasyonu artırır', 'Hazırlık kalitesini standartlaştırır'],
    process: [
      { step: 1, title: 'Görev Atama', description: 'Siparişler floristlerin ekranına düşer.' },
      { step: 2, title: 'Görsel Rehber', description: 'Ürün görselleri ve notlar detaylı gösterilir.' },
      { step: 3, title: 'Onay Süreci', description: 'Hazırlanan ürünün fotoğrafı çekilerek onaylanır.' },
      { step: 4, title: 'Teslimat Geçişi', description: 'Ürün hazırlandığı an kurye modülüne aktarılır.' },
    ],
  },
  'stok-takibi': {
    title: 'Stok Takibi',
    image: '/services/stok-takibi.png',
    icon: '03',
    description: 'Taze çiçek stoklarınızı, aksesuarlarınızı ve ambalaj malzemelerinizi anlık olarak izleyin.',
    features: ['Düşük stok uyarıları', 'Fire ve zayiat takibi', 'Kategori bazlı envanter', 'Tedarikçi yönetim paneli'],
    overview: 'Çiçekçilikte stok yönetimi hayati önem taşır. Bloom2GO ile taze ürünlerinizin raf ömrünü ve stok seviyelerini dijital olarak yönetin.',
    whyChoose: ['Fire oranlarını ciddi ölçüde düşürür', 'Yetersiz stok nedeniyle sipariş reddini önler', 'Maliyet kontrolü sağlar'],
    process: [
      { step: 1, title: 'Envanter Girişi', description: 'Tüm ürünler ve sarf malzemeleri sisteme tanımlanır.' },
      { step: 2, title: 'Anlık Sarfiyat', description: 'Hazırlanan buketlerle birlikte stoklar otomatik düşer.' },
      { step: 3, title: 'Akıllı Uyarılar', description: 'Kritik seviyeye düşen ürünler için bildirim gönderilir.' },
      { step: 4, title: 'Raporlama', description: 'Haftalık ve aylık stok kullanım analizleri sunulur.' },
    ],
  },
  'kurye-teslimat': {
    title: 'Kurye ve Teslimat',
    image: '/services/hazirlik-akisi.png',
    icon: '04',
    description: 'Teslimat rotalarını optimize edin ve kuryelerinizin anlık konumunu takip edin.',
    features: ['Kurye mobil uygulaması', 'Rota optimizasyonu', 'Teslimat kanıtı (Fotoğraf/İmza)', 'Canlı müşteri takibi'],
    overview: 'Kurye ve Teslimat modülü, hazırlanan buketlerin doğru adrese en hızlı şekilde ulaşmasını sağlar.',
    whyChoose: ['Yakıt ve zaman tasarrufu sağlar', 'Müşteri memnuniyetini artırır', 'Kurye verimliliğini ölçer'],
    process: [
      { step: 1, title: 'Rota Planlama', description: 'Teslimatlar en verimli rotaya göre sıralanır.' },
      { step: 2, title: 'Kurye Atama', description: 'Siparişler kuryelerin telefonuna bildirim olarak gider.' },
      { step: 3, title: 'Teslimat Akışı', description: 'Kurye teslimat anında durum günceller.' },
      { step: 4, title: 'Geri Bildirim', description: 'Müşteriye teslim edildi bilgisi otomatik gider.' },
    ],
  },
  'sube-yonetimi': {
    title: 'Şube Yönetimi',
    image: '/services/siparis-yonetimi.png',
    icon: '05',
    description: 'Birden fazla mağaza ve atölyeyi merkezi bir noktadan tam yetkiyle yönetin.',
    features: ['Şubeler arası stok aktarımı', 'Merkezi raporlama', 'Şube bazlı performans analizi', 'Esnek yetkilendirme'],
    overview: 'Zincir çiçekçiler veya birden fazla atölyesi olan işletmeler için operasyonu tek bir merkezden görme imkanı sunar.',
    whyChoose: ['Merkezi kontrolü kolaylaştırır', 'Şubeler arası iletişimi güçlendirir', 'Kurumsal standartları korur'],
    process: [
      { step: 1, title: 'Merkezi Kurulum', description: 'Tüm şubeler tek bir sistemde toplanır.' },
      { step: 2, title: 'Yetki Tanımlama', description: 'Şube müdürleri ve personel rolleri belirlenir.' },
      { step: 3, title: 'Performans Takibi', description: 'Hangi şubenin ne kadar ciro ve hızda çalıştığı izlenir.' },
      { step: 4, title: 'Dengeli Operasyon', description: 'Yoğunluğa göre şubeler arası sipariş kaydırılır.' },
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
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#f7931e]">Modül Detayı</span>
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
                    Operasyonel Fayda
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
                  <h3 className="font-serif text-2xl font-bold mb-4 text-[#2a211c]">Size Özel Demo</h3>
                  <p className="text-base text-[#7a5c49] mb-10 leading-relaxed">
                    Operasyonel ihtiyaçlarınıza göre sistemi birlikte özelleştirelim.
                  </p>
                  <Link href="/iletisim" className="block w-full rounded-2xl bg-[#f7931e] px-8 py-5 text-sm font-bold text-white shadow-xl shadow-[#f7931e]/20 hover:bg-[#f57c00] transition-all hover:scale-[1.02] active:scale-[0.98]">
                    DEMO TALEBİ OLUŞTUR
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
