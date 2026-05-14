import { useEffect, useRef, useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Skip lazy loading (use for above-the-fold / LCP images). */
  priority?: boolean;
  /** Wrapper className. */
  wrapperClassName?: string;
  /** Optional srcset for responsive delivery. */
  srcSet?: string;
  /** Optional sizes attribute paired with srcSet. */
  sizes?: string;
  /** Intrinsic width (used to reserve space → prevents CLS). */
  width: number;
  /** Intrinsic height (used to reserve space → prevents CLS). */
  height: number;
  /** Optional pre-generated low-res preview. */
  placeholderSrc?: string;
}

/**
 * SmartImage – progressive, bandwidth-friendly <img> replacement.
 *  - native loading="lazy" + decoding="async" (overridable via `priority`)
 *  - IntersectionObserver gating so the real `src`/`srcset` are only assigned
 *    when the image enters (or is near) the viewport
 *  - Blurred placeholder shown until the image decodes, then crossfaded in
 *  - `fetchpriority="high"` for priority images (LCP)
 *  - `width`/`height` attributes reserve space → no CLS
 */
const SmartImage = ({
  src,
  alt,
  priority = false,
  wrapperClassName,
  placeholderSrc,
  srcSet,
  sizes,
  width,
  height,
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
      style={{ aspectRatio: `${width} / ${height}` }}
    >
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
        srcSet={inView ? srcSet : undefined}
        sizes={sizes}
        width={width}
        height={height}
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
