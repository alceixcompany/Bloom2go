import { MetadataRoute } from 'next'
import { db } from '@/lib/firebase'
import { collection, getDocs, query, where, DocumentData } from 'firebase/firestore'

// Statik sayfalar
const staticPages = [
  {
    url: '',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  },
  {
    url: '/hizmetlerimiz',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    url: '/haberler',
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  },
  {
    url: '/hakkimizda',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: '/iletisim',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
]

// Hizmetler (statik)
const services = [
  {
    url: '/hizmetlerimiz/otomat-agi',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/hizmetlerimiz/tazelik-teknolojisi',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/hizmetlerimiz/7-24-erisim',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/hizmetlerimiz/akilli-odeme',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/hizmetlerimiz/tedarik-zinciri',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/hizmetlerimiz/musteri-deneyimi',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.bloom2go.com'
  
  try {
    // Firebase'den dinamik verileri al
    const [newsSnapshot] = await Promise.all([
      // Haberler - sadece aktif olanları al
      getDocs(query(
        collection(db, 'haberler'),
        where('isActive', '==', true)
      ))
    ])

    // Haberler için sitemap entries
    const newsPages: MetadataRoute.Sitemap = newsSnapshot.docs.map((doc: DocumentData) => {
      const data = doc.data()
      
      // Slug oluşturma fonksiyonu
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
      
      const slug = data.slug || createSlug(data.title || '');
      
      return {
        url: `${baseUrl}/haberler/${slug}`,
        lastModified: data.updatedAt ? new Date(data.updatedAt) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }
    })

    // Tüm sayfaları birleştir
    const allPages: MetadataRoute.Sitemap = [
      // Statik sayfalar
      ...staticPages.map(page => ({
        url: `${baseUrl}${page.url}`,
        lastModified: page.lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      })),
      // Hizmetler
      ...services.map(service => ({
        url: `${baseUrl}${service.url}`,
        lastModified: service.lastModified,
        changeFrequency: service.changeFrequency,
        priority: service.priority,
      })),
      // Dinamik haberler
      ...newsPages,
    ]

    return allPages

  } catch (error) {
    console.error('Sitemap oluşturulurken hata:', error)
    
    // Hata durumunda sadece statik sayfaları döndür
    return [
      ...staticPages.map(page => ({
        url: `${baseUrl}${page.url}`,
        lastModified: page.lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      })),
      ...services.map(service => ({
        url: `${baseUrl}${service.url}`,
        lastModified: service.lastModified,
        changeFrequency: service.changeFrequency,
        priority: service.priority,
      })),
    ]
  }
}
