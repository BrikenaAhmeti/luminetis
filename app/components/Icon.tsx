type IconProps = {
  name: string;
  className?: string;
};

export function Icon({ name, className = "" }: IconProps) {
  return <span aria-hidden="true" className={`material-symbols ${className}`}>{name}</span>;
}
