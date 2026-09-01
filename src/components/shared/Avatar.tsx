import { cn } from "@/lib/utils";

const avatarPalette = [
  "bg-accent text-accent-foreground",
  "bg-primary text-primary-foreground",
  "bg-chart-3 text-white",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

type AvatarProps = {
  name: string;
  index?: number;
  className?: string;
};

const Avatar = ({ name, index = 0, className }: AvatarProps) => (
  <span
    className={cn(
      "flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
      avatarPalette[index % avatarPalette.length],
      className,
    )}
  >
    {getInitials(name)}
  </span>
);

export default Avatar;
