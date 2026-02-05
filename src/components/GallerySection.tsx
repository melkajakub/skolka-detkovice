import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const BASE_PATH = import.meta.env.PROD ? '/skolka-detkovice' : '';

const images = [
  { src: `${BASE_PATH}/images/photo1.jpg`, alt: "Školka dřevin - pohled 1" },
  { src: `${BASE_PATH}/images/photo2.jpg`, alt: "Školka dřevin - pohled 2" },
  { src: `${BASE_PATH}/images/photo3.jpg`, alt: "Školka dřevin - pohled 3" },
  { src: `${BASE_PATH}/images/photo4.jpg`, alt: "Školka dřevin - pohled 4" },
  { src: `${BASE_PATH}/images/photo5.jpg`, alt: "Školka dřevin - pohled 5" },
  { src: `${BASE_PATH}/images/photo6.jpg`, alt: "Školka dřevin - pohled 6" },
  { src: `${BASE_PATH}/images/photo7.jpg`, alt: "Školka dřevin - pohled 7" },
  { src: `${BASE_PATH}/images/photo8.jpg`, alt: "Školka dřevin - pohled 8" },
  { src: `${BASE_PATH}/images/photo9.jpg`, alt: "Školka dřevin - pohled 9" },
  { src: `${BASE_PATH}/images/photo10.jpg`, alt: "Školka dřevin - pohled 10" },
];

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

  // Keyboard navigation
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
          <p className="text-muted-foreground">
            Nahlédněte do naší školky
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group aspect-[3/2] overflow-hidden rounded-lg bg-muted shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-shadow hover:shadow-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl border-none bg-black/95 p-0 shadow-2xl">
          {selectedIndex !== null && (
            <div className="relative flex items-center justify-center">
              {/* Previous button */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Předchozí fotka"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Image */}
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />

              {/* Next button */}
              <button
                onClick={goToNext}
                className="absolute right-2 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Další fotka"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image counter */}
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
