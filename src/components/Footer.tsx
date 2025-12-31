import { TreeDeciduous } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card px-4 py-8">
      <div className="mx-auto max-w-6xl text-center">
        <div className="flex items-center justify-center gap-2">
          <TreeDeciduous className="h-5 w-5 text-primary" />
          <span className="font-serif text-lg font-medium text-foreground">
            Školka dřevin Určice
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
