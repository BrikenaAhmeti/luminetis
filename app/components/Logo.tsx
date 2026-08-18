import Image from "next/image";

type LogoProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function Logo({ inverse = false, compact = false }: LogoProps) {
  return (
    <span className="flex items-center gap-3.5">
      <span className="relative block h-10 w-[34px] shrink-0">
        <Image className={inverse ? "h-10 w-auto" : "logo-mark-light h-10 w-auto"} src={inverse ? "/logos/logomark-colour-reversed.svg" : "/logos/logomark-colour.svg"} alt="" width="34" height="40" priority />
        {!inverse && <Image className="logo-mark-dark absolute inset-0 hidden h-10 w-auto" src="/logos/logomark-colour-reversed.svg" alt="" width="34" height="40" priority />}
      </span>
      {!compact && <span className="font-display text-[26px] font-medium leading-none tracking-[0.03em]">luminetis</span>}
    </span>
  );
}
