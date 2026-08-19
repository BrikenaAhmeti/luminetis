import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import { socialProfiles, type SocialProfileKey } from "../data/contact";

type Props = {
  className?: string;
  inverse?: boolean;
};

const icons: Record<SocialProfileKey, IconType> = {
  tiktok: FaTiktok,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
};

export function SocialLinks({ className = "", inverse = false }: Props) {
  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {socialProfiles.map((profile) => {
        const BrandIcon = icons[profile.key];
        return (
          <a
            key={profile.key}
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={profile.label}
            title={profile.label}
            className={`grid h-11 w-11 place-items-center rounded-full border transition duration-200 hover:-translate-y-0.5 hover:border-[#E8A22B] hover:text-[#E8A22B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A22B] ${inverse ? "border-white/20 text-white/75" : "border-line text-ink"}`}
          >
            <BrandIcon aria-hidden="true" className="text-[18px]" />
          </a>
        );
      })}
    </div>
  );
}
