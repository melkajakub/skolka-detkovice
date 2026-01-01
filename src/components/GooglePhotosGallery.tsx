import { useEffect, useRef } from "react";

interface GooglePhotosGalleryProps {
  albumUrl: string;
}

const GooglePhotosGallery = ({ albumUrl }: GooglePhotosGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://cdn.publicalbum.org/pa-embed-player.min.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.publicalbum.org/pa-embed-player.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="galerie" className="bg-gallery-bg px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Galerie
          </h2>
          <p className="text-muted-foreground">Nahlédněte do naší školky</p>
        </div>

        <div ref={containerRef} className="google-photos-gallery overflow-hidden rounded-lg">
          <div
            className="pa-gallery-player-widget"
            style={{
              width: "100%",
              height: "480px",
              display: "none",
            }}
            data-link={albumUrl}
            data-title="Galerie školky dřevin Určice"
            data-description=""
          >
            <object data={albumUrl} aria-label="Galerie školky dřevin Určice" />
          </div>
        </div>
      </div>

      <style>{`
        .google-photos-gallery {
          background-color: hsl(var(--gallery-bg));
        }
        
        /* Loading state placeholder */
        .google-photos-gallery .pa-gallery-player-widget[style*="display: none"] + .loading-placeholder,
        .google-photos-gallery:not(:has(.bv-player-viewport)) .loading-placeholder {
          display: flex;
        }
        
        .google-photos-gallery .bv-player-viewport {
          background-color: hsl(var(--gallery-bg)) !important;
        }
        
        .google-photos-gallery .bv-player-thumbs-panel {
          background-color: hsl(var(--gallery-bg)) !important;
        }
        
        .google-photos-gallery .bv-player-thumb {
          border-radius: 0.5rem !important;
          overflow: hidden !important;
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }
        
        .google-photos-gallery .bv-player-thumb:hover {
          transform: scale(1.03) !important;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12) !important;
        }
        
        .google-photos-gallery .bv-player-modal-backdrop {
          background-color: rgba(0, 0, 0, 0.92) !important;
        }
        
        @media (max-width: 768px) {
          .google-photos-gallery .pa-gallery-player-widget {
            height: 350px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GooglePhotosGallery;
