'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { withAssetVersion } from '@/lib/asset';

const AboutSection = () => {
  return (
    <section className="overflow-hidden py-24 bg-[#fcf7f2]">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="flex flex-col items-center gap-20 lg:flex-row">
          <div className="relative lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl border-8 border-white"
            >
              <Image
                src={withAssetVersion('/about/hero.png')}
                alt="Bloom2GO akıllı çiçek otomatı"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[#f7931e] opacity-[0.03] blur-3xl" />
            <div className="absolute -left-8 top-16 z-20 hidden rounded-3xl bg-white p-8 shadow-2xl border border-[rgba(42,33,28,0.06)] md:block">
              <div className="mb-2 text-4xl font-serif text-[#f7931e]">50+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a56f47]">Aktif Otomat Noktası</div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-block rounded-full bg-[#fff1e4] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f7931e] mb-6">
              VİZYONUMUZ
            </div>
            <h2 className="font-serif text-5xl leading-[1.1] tracking-tight text-[#2a211c]">
              Şehri Çiçeklerle <br />
              <span className="italic text-[#f7931e]">Donatıyoruz</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[#7a5c49]">
              Bloom2GO olarak, çiçek almayı bir plan değil, bir "an" haline getiriyoruz. 
              Günün her saati ulaşılabilir akıllı otomatlarımızla, taze ve tasarım buketleri hayatın içine taşıyoruz.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[#8a6448]">
              Yüksek teknolojiye sahip iklimlendirme sistemlerimiz, her çiçeğin ilk tazeliğini korumasını sağlar. 
              Havalimanlarından üniversitelere, şehrin en canlı noktalarında sizi Bloom2GO kalitesiyle buluşturuyoruz.
            </p>

            <div className="mb-12 mt-12 grid grid-cols-2 gap-10">
              <div>
                <h4 className="mb-3 text-lg font-bold text-[#2a211c]">Tazelik Garantisi</h4>
                <p className="text-sm leading-7 text-[#8a6448]">Otomatlarımızdaki sensörler ısı ve nem dengesini anlık olarak korur.</p>
              </div>
              <div>
                <h4 className="mb-3 text-lg font-bold text-[#2a211c]">7/24 Erişim</h4>
                <p className="text-sm leading-7 text-[#8a6448]">Mağaza kapanış saatlerine takılmadan, dilediğiniz an taze çiçek alın.</p>
              </div>
            </div>

            <Link href="/hakkimizda" className="inline-flex items-center justify-center rounded-full bg-[#2a211c] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#f7931e] shadow-xl shadow-black/10">
              HİKAYEMİZİ OKUYUN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
