import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "@/components/SmartImage";

/**
 * Gallery images.
 * `thumb` is a 800×800 cover-cropped WebP (≈100–280 kB).
 * `full` is a 1600px-long-edge WebP shown only after the user opens the lightbox.
 * Originals stay in /images/photoN.jpg as a fallback.
 */
const images = Array.from({ length: 10 }, (_, i) => {
  const n = i + 1;
  return {
    thumb: `/images/optimized/photo${n}-800.webp`,
    full: `/images/optimized/photo${n}-1600.webp`,
    fallback: `/images/photo${n}.jpg`,
    alt: `Školka dřevin – pohled ${n}`,
  };
});

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  }, [selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  return (
    <section id="galerie" className="bg-gallery-bg px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Galerie
          </h2>
          <p className="text-muted-foreground">Nahlédněte do naší školky</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group aspect-square overflow-hidden rounded-lg bg-muted shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-shadow hover:shadow-xl"
            >
              <SmartImage
                src={image.thumb}
                alt={image.alt}
                width={800}
                height={800}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox – full-resolution image is only fetched after the user clicks. */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl border-none bg-black/95 p-0 shadow-2xl">
          {selectedIndex !== null && (
            <div className="relative flex items-center justify-center">
              <button
                onClick={goToPrevious}
                className="absolute left-2 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Předchozí fotka"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <SmartImage
                src={images[selectedIndex].full}
                alt={images[selectedIndex].alt}
                width={1600}
                height={1600}
                priority
                wrapperClassName="max-h-[85vh] w-auto rounded-lg"
                className="max-h-[85vh] w-auto object-contain"
              />

              <button
                onClick={goToNext}
                className="absolute right-2 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Další fotka"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
