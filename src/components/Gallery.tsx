"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryProps = {
  title: string;
  images: string[];
};

export default function Gallery({ title, images }: GalleryProps) {
  const safeImages = images.length ? images : ["/listings/listing-1.svg"];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = safeImages[Math.min(activeIndex, safeImages.length - 1)];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#12161b] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 animate-pulse bg-white/10" />
        <Image
          src={activeImage}
          alt={title}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          className="relative object-cover"
          priority
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {safeImages.map((image, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              type="button"
              key={`${image}-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl border transition ${
                isActive
                  ? "border-white/50"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                sizes="200px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
