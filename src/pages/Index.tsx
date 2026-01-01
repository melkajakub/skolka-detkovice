import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import GooglePhotosGallery from "@/components/GooglePhotosGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// URL vašeho Google Photos alba - stačí změnit tuto URL pro jiné album
const GOOGLE_PHOTOS_ALBUM_URL = "https://photos.app.goo.gl/AGV8rEEra15R94AS8";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <GooglePhotosGallery albumUrl={GOOGLE_PHOTOS_ALBUM_URL} />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
