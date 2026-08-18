import { pages, type PageKey } from "../data/site";
import type { Dictionary } from "../i18n/config";
import { Logo } from "./Logo";

type FooterProps = {
  dictionary: Dictionary;
  onNavigate: (page: PageKey) => void;
};

export function Footer({ dictionary, onNavigate }: FooterProps) {
  return (
    <footer className="bg-inverse text-on-inverse">
      <div className="mx-auto max-w-[1200px] px-5 py-[clamp(48px,6vw,64px)] sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo inverse />
            <p className="mt-3 font-mono text-[12.5px] tracking-[0.06em] opacity-70">luminetis.com</p>
            <p className="mt-4 text-sm opacity-80">{dictionary.footerTagline}</p>
          </div>
          <div>
            <p className="mb-3 font-mono text-[12.5px] uppercase tracking-[0.06em] opacity-60">{dictionary.footerSite}</p>
            <nav className="grid gap-2">
              {pages.map((item, index) => <button key={item} onClick={() => onNavigate(item)} className="w-fit cursor-pointer border-0 bg-transparent p-0 text-left text-sm text-on-inverse opacity-80 transition hover:translate-x-1 hover:text-[#E8A22B] hover:opacity-100">{dictionary.nav[index]}</button>)}
            </nav>
          </div>
          <div>
            <p className="mb-3 font-mono text-[12.5px] uppercase tracking-[0.06em] opacity-60">{dictionary.footerOffices}</p>
            <p className="mb-2.5 text-sm opacity-85">Luxembourg</p>
            <p className="mb-2.5 text-sm opacity-85">Kosovo</p>
            <p className="mt-4 font-mono text-[12.5px] opacity-70">info@luminetis.com</p>
          </div>
          <div>
            <p className="mb-3 font-mono text-[12.5px] uppercase tracking-[0.06em] opacity-60">{dictionary.footerLegal}</p>
            <div className="grid gap-2 text-sm">
              <a href="#privacy" className="opacity-80 transition hover:text-[#E8A22B] hover:opacity-100">Privacy notice</a>
              <a href="#terms" className="opacity-80 transition hover:text-[#E8A22B] hover:opacity-100">Terms of service</a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] leading-7 opacity-60">Social links render only where a real URL exists.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
