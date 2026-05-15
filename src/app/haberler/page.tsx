'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { FiArrowRight, FiCalendar, FiTag, FiMail, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { withAssetVersion } from '@/lib/asset';

interface Haber {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

const NewsPage = () => {
  const [haberler, setHaberler] = useState<Haber[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const createSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };
  
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const newsSnapshot = await getDocs(collection(db, 'haberler'));
        const newsData = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Haber[];
        const activeNews = newsData.filter(haber => haber.isActive);
        activeNews.sort((a, b) => (new Date(b.createdAt).getTime()) - (new Date(a.createdAt).getTime()));
        setHaberler(activeNews);
      } catch (error) {
        console.error('Haber verisi yüklenirken hata:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(haberler.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = haberler.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubscription = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setSubscriptionStatus('error');
      setSubscriptionMessage('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    try {
      setIsSubscribing(true);
      await addDoc(collection(db, 'newsletter_subscriptions'), {
        email: email.toLowerCase().trim(),
        createdAt: new Date().toISOString(),
        isActive: true,
        source: 'haberler_sayfasi'
      });
      setSubscriptionStatus('success');
      setSubscriptionMessage('E-posta adresiniz başarıyla kaydedildi!');
      setEmail('');
      setTimeout(() => {
        setSubscriptionStatus('idle');
        setSubscriptionMessage('');
      }, 5000);
    } catch (error) {
      setSubscriptionStatus('error');
      setSubscriptionMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubscribing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcf7f2]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#f7931e] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-[#8a6448] text-sm font-bold uppercase tracking-[0.2em]">Bloom2GO Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="page-flow min-h-screen bg-[#fcf7f2]">
      <section className="relative flex min-h-[500px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={withAssetVersion('/haberler/hero.png')}
            alt="Bloom2GO Haberler"
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
              Blog & Haberler
            </div>

            <h1 className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.04em] text-white">
              Çiçekçilik Dünyasında <br />
              <span className="text-[#ffd39e]">Dijital Gelişmeler</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/90">
              Sektörel trendler, teknoloji güncellemeleri ve operasyonel verimlilik sırlarını Bloom2GO farkıyla buradan takip edin.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#fcf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {haberler.length === 0 ? (
            <div className="text-center py-32 bg-white rounded-[40px] border border-[rgba(42,33,28,0.06)] shadow-sm">
              <h3 className="font-serif text-2xl text-[#2a211c]">Henüz içerik bulunmuyor</h3>
              <p className="mt-3 text-[#8a6448]">Yeni haberler ve makaleler çok yakında burada olacak.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {currentNews.map((haber, index) => (
                <motion.article
                  key={haber.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col bg-white rounded-[32px] border border-[rgba(42,33,28,0.06)] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    {haber.imageUrl ? (
                      <Image
                        src={haber.imageUrl}
                        alt={haber.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => { (e.target as HTMLImageElement).src = '/haberler/hero.png'; }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#f7f1ea] text-[#f7931e]">
                        <FiTag className="w-16 h-16 opacity-20" />
                      </div>
                    )}
                    <div className="absolute top-5 left-5">
                      <span className="bg-white/90 backdrop-blur-md text-[#f7931e] text-[10px] font-bold px-4 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                        {haber.tags?.[0] || 'Sektörel'}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[11px] font-bold text-[#a56f47] mb-4 uppercase tracking-[0.15em]">
                      <FiCalendar className="w-4 h-4" />
                      <span>{new Date(haber.createdAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>

                    <h2 className="font-serif text-2xl text-[#2a211c] mb-4 group-hover:text-[#f7931e] transition-colors line-clamp-2 leading-tight">
                      {haber.title}
                    </h2>

                    <p className="text-base text-[#7a5c49] leading-7 mb-8 line-clamp-3">
                      {haber.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-[rgba(42,33,28,0.06)]">
                      <Link 
                        href={`/haberler/${createSlug(haber.title)}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#2a211c] uppercase tracking-[0.2em] group/link hover:text-[#f7931e] transition-colors"
                      >
                        OKUMAYA DEVAM ET
                        <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-20 flex justify-center items-center gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-12 h-12 rounded-2xl text-sm font-bold transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-[#2a211c] text-white shadow-xl scale-110'
                      : 'bg-white border border-[rgba(42,33,28,0.06)] text-[#7a5c49] hover:bg-[#fff1e4] hover:text-[#f7931e]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-[#f7f1ea]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-[48px] border border-[rgba(42,33,28,0.06)] p-10 sm:p-16 text-center shadow-xl">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff1e4] text-[#f7931e]">
              <FiMail className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-[#2a211c]">Bloom2GO Bültene Kaydolun</h3>
            <p className="mt-5 text-base text-[#7a5c49] leading-8">
              En yeni operasyonel ipuçları, teknoloji haberleri ve Bloom2GO duyurularını doğrudan gelen kutunuzda karşılayın.
            </p>
            
            <form onSubmit={handleNewsletterSubscription} className="mt-10 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                required
                className="flex-1 px-7 py-4 bg-[#fcf7f2] border border-[rgba(42,33,28,0.08)] rounded-2xl focus:outline-none focus:border-[#f7931e] focus:ring-2 focus:ring-[#f7931e]/10 transition-all text-base"
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className="bg-[#f7931e] text-white px-10 py-4 rounded-2xl font-bold text-xs tracking-[0.2em] hover:bg-[#f57c00] transition-all shadow-lg active:scale-95 disabled:opacity-50"
              >
                {isSubscribing ? 'KAYDEDİLİYOR...' : 'KAYDOLUN'}
              </button>
            </form>
            {subscriptionMessage && (
              <p className={`mt-6 text-sm font-bold ${subscriptionStatus === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {subscriptionMessage}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
