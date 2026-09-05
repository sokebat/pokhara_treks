import { FcGoogle } from "react-icons/fc";
import { SiTripadvisor } from "react-icons/si";

import { cn } from "@/lib/utils";
import type { ReviewPlatform } from "@/features/site/home/constant/testimonials";

const PlatformLogo = ({
  platform,
  className,
}: {
  platform: ReviewPlatform;
  className?: string;
}) =>
  platform === "google" ? (
    <FcGoogle className={cn("size-5", className)} />
  ) : (
    <SiTripadvisor className={cn("size-5 text-chart-2", className)} />
  );

export default PlatformLogo;
