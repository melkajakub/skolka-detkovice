import { Leaf } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="o-nas" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-primary/30" />
          <Leaf className="h-5 w-5 text-primary" />
          <div className="h-px w-12 bg-primary/30" />
        </div>
        
        <h2 className="mb-8 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          O naší školce
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Nacházíme se v malebné obci <strong className="text-foreground">Dětkovice u Prostějova</strong>, 
            v srdci úrodné Hané. Naše školka se specializuje na pěstování kvalitních 
            sazenic listnatých i jehličnatých stromů a okrasných keřů.
          </p>
          <p>
            Věnujeme se pěstování rostlin s láskou a péčí, abychom vám mohli nabídnout 
            zdravé a vitální sazenice připravené k výsadbě. Rádi vám poradíme s výběrem 
            vhodných druhů pro vaši zahradu či pozemek.
          </p>
        </div>

        {/* Price Button */}
        <div className="mt-12">
          <a
            href="https://docs.google.com/spreadsheets/d/1SmczCIMuEOmjpjOeDgG7dJbFJFpayqWYNy58PYk4wv4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Zobrazit ceník
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
