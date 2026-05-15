'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { FiArrowRight } from 'react-icons/fi';
import { db } from '@/lib/firebase';

interface Haber {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
  isActive?: boolean;
  order?: number;
  createdAt?: string;
}

const createSlug = (title: string): string =>
  title
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

const NewsPreview = () => {
  const [news, setNews] = useState<Haber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const snapshot = await getDocs(collection(db, 'haberler'));
        const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Haber[];
        const activeItems = items
          .filter((item) => item.isActive !== false)
          .sort((a, b) => {
            const aOrder = a.order ?? 0;
            const bOrder = b.order ?? 0;
            if (aOrder !== bOrder) return aOrder - bOrder;
            return (b.createdAt ?? '').localeCompare(a.createdAt ?? '');
          })
          .slice(0, 3);

        setNews(activeItems);
      } catch (error) {
        console.error('Ana sayfa haberleri yüklenemedi:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading && news.length === 0) return null;
  if (!loading && news.length === 0) return null;

  return (
    <section id="haberler" className="relative overflow-hidden bg-[linear-gradient(180deg,#fff8f2_0%,#fffdf9_100%)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--lale-emerald-soft)]">
              Bloom2GO Journal
            </p>
            <h2 className="mt-5 font-serif text-4xl text-[var(--lale-anthracite)] sm:text-5xl">
              Sektör Notları ve Operasyon İpuçları
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--lale-emerald-soft)] sm:text-lg">
              Çiçek satışı, stok döngüsü, teslimat verimliliği ve müşterinin tekrar sipariş vermesini etkileyen detaylar.
            </p>
          </div>

          <Link
            href="/haberler"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lale-gold)] transition-colors hover:opacity-80"
          >
            Tüm Notları Gör
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {news.map((item, index) => (
            <article
              key={item.id}
              className={`group flex h-full flex-col overflow-hidden rounded-[30px] border border-[rgba(143,98,64,0.12)] bg-white shadow-[0_20px_55px_rgba(36,29,24,0.08)] transition-all duration-300 hover:-translate-y-1 ${
                index === 1 ? 'md:translate-y-8' : ''
              }`}
            >
              <div className="relative h-60 overflow-hidden bg-[var(--lale-cream)]">
                <Image
                  src={item.imageUrl || '/haberler/hero.png'}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--lale-gold)]">
                  {item.tags?.[0] || 'OPERASYON'}
                </div>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-[var(--lale-anthracite)] transition-colors group-hover:text-[var(--lale-gold)]">
                  {item.title}
                </h3>
                <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--lale-emerald-soft)]">
                  {item.description || 'Çiçek operasyonlarını daha hızlı ve daha görünür yönetmek için kısa notlar.'}
                </p>

                <Link
                  href={`/haberler/${createSlug(item.title)}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--lale-anthracite)] transition-all group-hover:text-[var(--lale-gold)]"
                >
                  Devamını Oku
                  <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
