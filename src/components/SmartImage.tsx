import { useEffect, useRef, useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Skip lazy loading (use for above-the-fold / LCP images). */
  priority?: boolean;
  /** Wrapper className (the <img> uses className from rest props). */
  wrapperClassName?: string;
  /** Optional pre-generated low-res preview (data URL or path). */
  placeholderSrc?: string;
}

/**
 * SmartImage – progressive, bandwidth-friendly <img> replacement.
 *
 * Features:
 *  - native loading="lazy" + decoding="async" (overridable via `priority`)
 *  - IntersectionObserver gating so the real `src` is only assigned when the
 *    image enters (or is near) the viewport – saves data on mobile
 *  - Blurred placeholder (CSS shimmer or supplied `placeholderSrc`) shown
 *    until the full image finishes decoding, then crossfaded in
 *  - `fetchpriority="high"` for priority images (LCP)
 */
const SmartImage = ({
  src,
  alt,
  priority = false,
  wrapperClassName,
  placeholderSrc,
  className,
  onLoad,
  ...rest
}: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (priority || inView) return;
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [priority, inView]);

  return (
    <span
      className={cn(
        "relative block h-full w-full overflow-hidden bg-muted",
        wrapperClassName
      )}
    >
      {/* Blurred placeholder layer */}
      {!loaded && (
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-muted"
          style={
            placeholderSrc
              ? {
                  backgroundImage: `url(${placeholderSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(20px)",
                  transform: "scale(1.1)",
                }
              : undefined
          }
        />
      )}
      <img
        ref={ref}
        src={inView ? src : undefined}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        // @ts-expect-error – fetchpriority is valid HTML, not yet in types
        fetchpriority={priority ? "high" : "auto"}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          "h-full w-full transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...rest}
      />
    </span>
  );
};

export default SmartImage;
