import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Kontakt
          </h2>
          <p className="text-muted-foreground">
            Rádi vás u nás přivítáme
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-medium text-foreground">Adresa</h3>
                <p className="text-muted-foreground">
                  Melka Jiří<br />
                  Dětkovice<br />
                  798 43, okres Prostějov
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-medium text-foreground">Telefon</h3>
                <a 
                  href="tel:+420733741489" 
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  +420 733 741 489
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-medium text-foreground">E-mail</h3>
                <p className="text-muted-foreground">
                  Bude upřesněno
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-medium text-foreground">Otevírací doba</h3>
                <p className="text-muted-foreground">
                  Po–Pá: 8:00 – 17:00<br />
                  So: 8:00 – 12:00<br />
                  Ne: po domluvě
                </p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="overflow-hidden rounded-lg bg-secondary">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.5!2d17.0372!3d49.5089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713b55c9e2b7a7f%3A0x400af0f661505e0!2zRMSbdGtvdmljZQ!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Školka dřevin Dětkovice"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
