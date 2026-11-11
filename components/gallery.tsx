"use client";

import { useState } from "react";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const current = images[index] ?? images[0];

  if (!current) {
    return (
      <div className="flex aspect-square items-center justify-center bg-[#f4f4f4] text-[#777]">
        {alt}
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-hidden bg-[#f4f4f4]">
        <img
          src={current}
          alt={alt}
          className="aspect-square w-full object-cover"
        />
      </div>
      {images.length > 1 ? (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {images.map((image, imageIndex) => (
            <button
              key={image}
              type="button"
              onClick={() => setIndex(imageIndex)}
              className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border ${
                imageIndex === index ? "border-ink" : "border-transparent"
              }`}
              aria-label={`Kuva ${imageIndex + 1}`}
            >
              <img src={image} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
