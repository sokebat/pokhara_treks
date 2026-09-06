import Image from "next/image";
import Link from "next/link";

import { logo } from "@/constant/image";
import { cn } from "@/lib/utils";

const brand = logo["logo-lg"];

interface LogoProps {
  className?: string;
  href?: string | false;
  priority?: boolean;
  onClick?: () => void;
}

const Logo = ({ className, href = "/", priority, onClick }: LogoProps) => {
  const image = (
    <Image
      src={brand.src}
      alt="Pokhara Treks & Expeditions logo"
      width={brand.width}
      height={brand.height}
      priority={priority}
      sizes="220px"
      className={cn("h-12 w-auto object-contain object-left", className)}
    />
  );

  if (href === false) {
    return image;
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className="inline-flex shrink-0 items-center"
    >
      {image}
    </Link>
  );
};

export default Logo;
