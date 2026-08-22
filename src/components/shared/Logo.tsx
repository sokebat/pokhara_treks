import Image from "next/image";
import Link from "next/link";

import { logo } from "@/constant/image";

interface LogoProps {
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}

const Logo = ({ className, priority, onClick }: LogoProps) => {
  return (
    <Link href="/" onClick={onClick} className="flex shrink-0 items-center">
      <Image
        src={logo["logo-lg"]}
        alt="Pokhara Treks & Expeditions logo"
        width={80000}
        height={80000}
        priority={priority}
        className={className}
      />
    </Link>
  );
};

export default Logo;
