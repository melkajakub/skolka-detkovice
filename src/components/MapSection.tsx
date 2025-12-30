const MapSection = () => {
  return (
    <section id="mapa" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-8">
          Najdete nás zde
        </h2>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            style={{ border: 'none' }}
            src="https://frame.mapy.cz/letecka?x=17.0790681&y=49.4157748&z=18"
            width="100%"
            height="400"
            frameBorder="0"
            className="w-full h-[400px]"
            title="Mapa - Školka dřevin Dětkovice"
          />
        </div>
        <p className="text-xl text-muted-foreground text-center mt-8">
          Dětkovice - srdce Olomouckého kraje
        </p>
      </div>
    </section>
  );
};

export default MapSection;
