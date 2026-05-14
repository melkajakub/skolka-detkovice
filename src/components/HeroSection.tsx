import hero768 from "@/assets/hero-nursery-768.webp";
import hero1280 from "@/assets/hero-nursery-1280.webp";
import hero1920 from "@/assets/hero-nursery-1920.webp";
import { TreeDeciduous } from "lucide-react";
import SmartImage from "@/components/SmartImage";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <SmartImage
          src={hero1280}
          srcSet={`${hero768} 768w, ${hero1280} 1280w, ${hero1920} 1920w`}
          sizes="100vw"
          width={1920}
          height={1080}
          alt="Školka dřevin Určice – panoramatický pohled na naši školku"
          priority
          wrapperClassName="absolute inset-0 h-full w-full"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          <TreeDeciduous className="mx-auto mb-4 h-12 w-12 text-primary-foreground" />
        </div>
        <h1
          className="animate-fade-in mb-4 text-4xl font-semibold tracking-tight text-primary-foreground opacity-0 md:text-5xl lg:text-6xl"
          style={{ animationDelay: "0.4s" }}
        >
          Školka Určice
        </h1>
        <p
          className="animate-fade-in max-w-2xl text-lg text-primary-foreground/90 opacity-0 md:text-xl lg:text-2xl"
          style={{ animationDelay: "0.6s" }}
        >
          Kvalitní sazenice stromů a dřevin. Široký sortiment okrasných a lesních rostlin pro zahrady i parky. Navštivte nás!
        </p>
      </div>

      {/* Navigation */}
      <nav className="absolute left-0 right-0 top-0 z-20 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-end">
          <div className="hidden gap-8 sm:flex">
            <a href="#o-nas" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
              O nás
            </a>
            <a href="#galerie" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
              Galerie
            </a>
            <a href="#kontakt" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
              Kontakt
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default HeroSection;
