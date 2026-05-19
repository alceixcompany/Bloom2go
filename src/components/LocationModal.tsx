'use client'

import React, { useEffect, useState } from 'react';
import { FiExternalLink, FiMapPin, FiX } from 'react-icons/fi';
import { bloomLocations, type BloomLocation } from '@/lib/locations';

const LocationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<BloomLocation>(bloomLocations[0]);

  useEffect(() => {
    const openModal = () => {
      setSelectedLocation(bloomLocations[0]);
      setIsOpen(true);
    };

    window.addEventListener('open-location-modal', openModal);
    return () => window.removeEventListener('open-location-modal', openModal);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[12000] flex items-center justify-center bg-[rgba(16,12,10,0.78)] p-4 backdrop-blur-sm sm:p-6"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-[1120px] overflow-hidden rounded-[28px] border border-[rgba(212,175,55,0.18)] bg-[#fcf7f2] shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[rgba(42,33,28,0.08)] px-5 py-4 sm:px-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a56f47]">Otomat Konumlari</p>
            <h3 className="mt-2 font-serif text-[22px] leading-tight text-[#2a211c] sm:text-[25px]">
              Bloom2GO aktif noktalari
            </h3>
            <p className="mt-2 max-w-lg text-[12px] leading-5 text-[#7a5c49]">
              Konumu secin, haritayi inceleyin ve isterseniz Google Maps uzerinde acin.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full border border-[rgba(42,33,28,0.12)] p-2.5 text-[#2a211c] transition-colors hover:bg-white"
            aria-label="Harita modalini kapat"
          >
            <FiX className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-0 lg:grid-cols-[0.74fr_1.26fr]">
          <div className="border-b border-[rgba(42,33,28,0.08)] bg-[#f7f1ea] p-4 sm:p-5 lg:border-b-0 lg:border-r">
            <div className="space-y-3">
              {bloomLocations.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => setSelectedLocation(location)}
                  className={`w-full rounded-[20px] border p-3.5 text-left transition-all ${
                    selectedLocation.id === location.id
                      ? 'border-[#f7931e] bg-white shadow-md'
                      : 'border-[rgba(42,33,28,0.08)] bg-white/50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-[#fff1e4] p-2 text-[#f7931e]">
                      <FiMapPin className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-[16px] leading-snug text-[#2a211c] sm:text-[18px]">
                        {location.name}
                      </h4>
                      <p className="mt-1.5 text-[12px] leading-5 text-[#7a5c49]">{location.address}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-rows-[1fr_auto]">
            <div className="min-h-[320px] sm:min-h-[360px]">
              <iframe
                src={selectedLocation.embedUrl}
                width="100%"
                height="100%"
                className="min-h-[320px] w-full sm:min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={selectedLocation.name}
              />
            </div>

            <div className="flex flex-col gap-4 bg-[#fcf7f2] p-5 sm:p-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a56f47]">Lokasyon Ozeti</p>
                <p className="mt-2 text-[13px] leading-6 text-[#7a5c49]">{selectedLocation.summary}</p>
              </div>
              <a
                href={selectedLocation.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 self-start rounded-full bg-[#2a211c] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#f7931e]"
              >
                Google Maps'te Ac
                <FiExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
