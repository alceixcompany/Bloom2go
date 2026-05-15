'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const faqs = [
  {
    question: 'Otomatlardaki çiçekler ne kadar süre taze kalıyor?',
    answer:
      'Bloom2GO otomatları özel iklimlendirme ve nemlendirme sistemlerine sahiptir. Bu teknoloji sayesinde çiçeklerimiz, bir çiçekçideki serin ortamdan bile daha stabil bir ısıda (ortalama 10-12 derece) tutulur. Ayrıca tüm ürünlerimiz günlük olarak kontrol edilip yenilenir.',
  },
  {
    question: 'Ödeme işlemlerini nasıl gerçekleştirebilirim?',
    answer:
      'Otomatlarımız tamamen dijital ve temassız ödeme odaklıdır. Kredi kartı, banka kartı, mobil ödeme (Apple Pay/Google Pay) ve QR kod ile saniyeler içinde güvenli bir şekilde ödemenizi tamamlayıp buketi teslim alabilirsiniz.',
  },
  {
    question: 'Bloom2GO otomatlarını nerelerde bulabilirim?',
    answer:
      'Genellikle İstanbul Havalimanı, Sabiha Gökçen Havalimanı, büyük alışveriş merkezleri, üniversite kampüsleri ve bazı merkezi metro istasyonlarında konumlanıyoruz. Web sitemizdeki "En Yakın Otomat" haritası üzerinden tüm noktaları canlı olarak görebilirsiniz.',
  },
  {
    question: 'Buketler her gün mü yenileniyor?',
    answer:
      'Evet. Lojistik ekibimiz her sabah erken saatlerde tüm otomatlarımızı ziyaret eder. Satılan ürünlerin yerine yenilerini eklerken, raftaki çiçeklerin tazelik durumunu manuel olarak da denetleriz.',
  },
  {
    question: 'Kendi işletmeme Bloom2GO otomatı kurdurabilir miyim?',
    answer:
      'Elbette. Otel lobileri, hastaneler, büyük ofis binaları veya iş merkezleri için iş birliği modellerimiz mevcuttur. "İletişim" sayfamızdan kurumsal iş birliği talebinizi ileterek ekibimizle görüşebilirsiniz.',
  },
  {
    question: 'Satın alma sırasında bir sorun yaşarsam kime ulaşabilirim?',
    answer:
      'Otomatlarımızın üzerinde 7/24 hizmet veren destek hattı numaramız yer almaktadır. Ayrıca ekran üzerindeki QR kodu taratarak canlı destek ekibimize anında bağlanabilir, iade veya değişim süreçlerini hızla başlatabilirsiniz.',
  },
] as const;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#2a211c] py-24 sm:py-28">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 border border-[rgba(247,147,30,0.4)] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f7931e] rounded-full mb-8">
            <FiHelpCircle className="h-4 w-4" />
            SIK SORULAN SORULAR
          </div>

          <h2 className="font-serif text-5xl leading-tight text-[#fcf7f2]">
            Merak Edilenler İçin
            <span className="block text-[#f7931e]">Net Yanıtlar</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[rgba(252,247,242,0.7)]">
            Çiçek tazeliği, ödeme yöntemleri ve otomat konumları
            hakkında en çok aldığımız soruları sizin için yanıtladık.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isActive 
                    ? 'border-[#f7931e] bg-[rgba(247,147,30,0.05)] shadow-2xl' 
                    : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                >
                  <h3 className={`text-lg font-medium leading-tight transition-colors ${
                    isActive ? 'text-[#f7931e]' : 'text-[#fcf7f2]'
                  }`}>
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'border-[#f7931e] bg-[#f7931e] text-white'
                        : 'border-white/10 text-white/40'
                    }`}
                  >
                    <FiChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isActive ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 pt-0">
                      <p className="max-w-4xl text-base leading-relaxed text-[rgba(252,247,242,0.6)]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
