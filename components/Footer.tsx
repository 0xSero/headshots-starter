import Link from "next/link";
import { Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Camera className="h-5 w-5 text-primary" />
              <span>Headshots AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Profesjonalne zdjęcia biznesowe AI dla Twojej obecności online.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Produkt</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Jak To Działa
                </Link>
              </li>
              <li>
                <Link href="#examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Przykłady
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cennik
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Zasoby</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/astriaai/headshots-starter"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.astria.ai/docs/api/pack/pack/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                >
                  Dokumentacja
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/Astria_AI"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Prawne</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="mailto:support@astria.ai"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="https://choosealicense.com/licenses/mit/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                >
                  Licencja
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Headshots AI. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Open-source napędzane przez{" "}
              <Link
                href="https://www.astria.ai/"
                className="text-primary hover:underline"
                target="_blank"
              >
                Astria
              </Link>
              ,{" "}
              <Link
                href="https://supabase.com/"
                className="text-primary hover:underline"
                target="_blank"
              >
                Supabase
              </Link>
              , and{" "}
              {process.env.DEPLOYMENT_PROVIDER === "replit" ? (
                <Link
                  href="https://replit.com/@leap-ai/Headshot-AI-Professional-Headshots-with-Leap-AI"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  Replit
                </Link>
              ) : (
                <Link
                  href="https://vercel.com/"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  Vercel
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
