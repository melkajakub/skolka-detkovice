const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-900 to-green-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground text-center mb-8">
          Prezentační video
        </h2>
        <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/Wvd7WQxLVkQ?autoplay=0&mute=0&loop=0&rel=0&modestbranding=1&playsinline=1"
            title="Okrasné školky Melka (dron)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-xl text-primary-foreground/80 text-center mt-8">
          Okrasné školky Melka - vzdušný pohled drone
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
