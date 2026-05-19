'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { withAssetVersion } from '@/lib/asset';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '../../store';
import { clearError, fetchContactInfo, sendContactMessage } from '../../store/slices/contactSlice';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  urgency: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    urgency: 'normal',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const dispatch = useAppDispatch();
  const { isSending, error } = useAppSelector((state: RootState) => state.contact) as {
    isSending: boolean;
    error: string | null;
  };

  useEffect(() => {
    dispatch(fetchContactInfo());
    dispatch(clearError());
  }, [dispatch]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    if (!formData.name || !formData.phone || !formData.email || !formData.serviceType || !formData.message) {
      return;
    }

    try {
      const messageData = {
        ...formData,
        subject: `${formData.serviceType} - ${formData.urgency}`,
        priority:
          formData.urgency === 'cok-acil'
            ? ('high' as const)
            : formData.urgency === 'acil'
              ? ('medium' as const)
              : ('low' as const),
      };

      await dispatch(sendContactMessage(messageData)).unwrap();

      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        urgency: 'normal',
        message: '',
      });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Mesaj gönderilirken hata:', err);
    }
  };

  return (
    <main className="page-flow min-h-screen bg-[#fcf7f2] text-[#2a211c]">
      <section className="relative flex min-h-[500px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={withAssetVersion('/iletisim/hero.png')}
            alt="Bloom2GO İletişim"
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
              İletişime Geçin
            </div>

            <h1 className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.04em] text-white">
              Bloom2GO ile <br />
              <span className="text-[#ffd39e]">Bağlantıya Geçin</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/90">
              Otomat konumları, hizmet detayları veya iş birliği fırsatları hakkında ekibimizden hızlıca bilgi alın.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#fcf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-[rgba(42,33,28,0.06)] rounded-[40px] p-8 sm:p-12 shadow-xl"
              >
                <h2 className="font-serif text-3xl text-[#2a211c] mb-3">İletişim Formu</h2>
                <p className="text-base text-[#7a5c49] mb-10">Sorularınız, konum talepleriniz veya iş birliği mesajlarınız için formu doldurabilirsiniz.</p>

                {success && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-10 flex items-center gap-4 rounded-2xl bg-emerald-50 border border-emerald-100 p-5 text-emerald-700"
                  >
                    <FiCheckCircle className="h-6 w-6" />
                    <p className="text-sm font-bold uppercase tracking-wider">Mesajınız başarıyla iletildi.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#a56f47] ml-1">Ad Soyad</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-[#fcf7f2] border border-[rgba(42,33,28,0.08)] rounded-2xl focus:outline-none focus:border-[#f7931e] focus:ring-2 focus:ring-[#f7931e]/10 text-base transition-all"
                        placeholder="İsminiz"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#a56f47] ml-1">Telefon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-[#fcf7f2] border border-[rgba(42,33,28,0.08)] rounded-2xl focus:outline-none focus:border-[#f7931e] focus:ring-2 focus:ring-[#f7931e]/10 text-base transition-all"
                        placeholder="05xx xxx xx xx"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#a56f47] ml-1">E-posta</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-[#fcf7f2] border border-[rgba(42,33,28,0.08)] rounded-2xl focus:outline-none focus:border-[#f7931e] focus:ring-2 focus:ring-[#f7931e]/10 text-base transition-all"
                      placeholder="e-posta@adresiniz.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#a56f47] ml-1">İlgi Alanı</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-[#fcf7f2] border border-[rgba(42,33,28,0.08)] rounded-2xl focus:outline-none focus:border-[#f7931e] focus:ring-2 focus:ring-[#f7931e]/10 text-base transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Seçiniz</option>
                        <option value="otomat-konumlari">Otomat Konumları</option>
                        <option value="urun-ve-tazelik">Ürünler ve Tazelik</option>
                        <option value="odeme-ve-kullanim">Ödeme ve Kullanım</option>
                        <option value="is-birligi">İş Birliği Talebi</option>
                        <option value="kurulum-talebi">Kurulum Talebi</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#a56f47] ml-1">Aciliyet</label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-[#fcf7f2] border border-[rgba(42,33,28,0.08)] rounded-2xl focus:outline-none focus:border-[#f7931e] focus:ring-2 focus:ring-[#f7931e]/10 text-base transition-all appearance-none cursor-pointer"
                      >
                        <option value="normal">Normal</option>
                        <option value="acil">Acil</option>
                        <option value="cok-acil">Çok Acil</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#a56f47] ml-1">Mesajınız</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="w-full px-6 py-4 bg-[#fcf7f2] border border-[rgba(42,33,28,0.08)] rounded-2xl focus:outline-none focus:border-[#f7931e] focus:ring-2 focus:ring-[#f7931e]/10 text-base transition-all resize-none"
                      placeholder="Sorunuzu veya talebinizi buraya yazabilirsiniz."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-3 bg-[#f7931e] text-white py-5 rounded-2xl font-bold text-xs tracking-[0.2em] hover:bg-[#f57c00] transition-all shadow-xl active:scale-95 disabled:bg-gray-300"
                  >
                    {isSending ? 'GÖNDERİLİYOR...' : (
                      <>
                        <FiSend className="w-4 h-4" />
                        MESAJI GÖNDER
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-10">
                {[
                  { icon: FiPhone, title: 'Telefon', value: '0312 221 02 46', sub: 'Destek Hatti' },
                  { icon: FiMail, title: 'E-posta', value: 'info@bloom2go.com', sub: 'Bilgi ve Teklif' },
                  { icon: FiMapPin, title: 'Merkez', value: 'Bloom2Go Teknoloji AS', sub: 'Mustafa Kemal Mah. Dumlupinar Bulv. No: 266 A / 18 Cankaya / Ankara' },
                  { icon: FiClock, title: 'Destek Saatleri', value: '09:00 - 19:00', sub: 'Haftanın her günü' },
                ].map((item) => (
                  <motion.div 
                    key={item.title} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border border-[rgba(42,33,28,0.06)] text-[#f7931e] shadow-sm transition-all group-hover:scale-110 group-hover:bg-[#f7931e] group-hover:text-white group-hover:shadow-lg">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a56f47]">{item.title}</h4>
                      <p className="mt-1 text-xl font-bold text-[#2a211c]">{item.value}</p>
                      <p className="mt-1 text-sm text-[#8a6448]">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="overflow-hidden rounded-[40px] border border-[rgba(42,33,28,0.06)] shadow-xl">
                <iframe
                  src="https://www.google.com/maps?q=Mustafa+Kemal+Mah.+Dumlup%C4%B1nar+Bulv.+No:+266+A+%2F+18+%C3%87ankaya+Ankara&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Bloom2GO Ofis Konumu"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
