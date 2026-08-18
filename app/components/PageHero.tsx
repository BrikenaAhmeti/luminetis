type PageHeroProps = {
  kicker: string;
  title: string;
  body: string;
  children?: React.ReactNode;
};

export function PageHero({ kicker, title, body, children }: PageHeroProps) {
  return (
    <section className="reveal border-b border-amber/30 bg-[#0E1317] text-[#F5F2EC]">
      <div className="mx-auto max-w-[1200px] px-5 py-[clamp(56px,8vw,104px)] sm:px-8 lg:px-12">
        <p className="mb-[18px] font-mono text-[12.5px] uppercase tracking-[0.06em] text-[#E8A22B]">{kicker}</p>
        <h1 className="max-w-[22ch] font-display text-[clamp(31px,5.4vw,61px)] font-medium leading-[1.04] tracking-[-0.02em]">{title}</h1>
        <p className="mt-[26px] max-w-[56ch] text-[clamp(16px,1.7vw,20px)] leading-[1.6] text-[#F5F2EC]/80">{body}</p>
        {children}
      </div>
    </section>
  );
}
