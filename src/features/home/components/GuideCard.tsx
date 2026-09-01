import Image from "next/image";

import Avatar from "@/components/shared/Avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { Guide } from "@/features/home/constant/home-data";

type GuideCardProps = {
  guide: Guide;
  index: number;
};

const GuideCard = ({ guide, index }: GuideCardProps) => (
  <Card className="h-full gap-0 overflow-hidden rounded-md py-0">
    <div className="relative aspect-4/3">
      <Image
        src={guide.image}
        alt={guide.name}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      <Avatar
        name={guide.name}
        index={index}
        className="absolute bottom-3 left-3 ring-2 ring-background"
      />
    </div>

    <CardContent className="py-5">
      <p className="font-semibold text-foreground">{guide.name}</p>
      <p className="text-xs font-medium text-accent">{guide.role}</p>

      <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 border-t border-border pt-4 text-xs">
        <div>
          <dt className="text-muted-foreground">Licence</dt>
          <dd className="mt-0.5 font-semibold text-foreground">
            {guide.licence}
          </dd>
        </div>

        <div>
          <dt className="text-muted-foreground">Guiding</dt>
          <dd className="mt-0.5 font-semibold text-foreground">
            {guide.years}
          </dd>
        </div>

        <div className="col-span-2">
          <dt className="text-muted-foreground">Routes</dt>
          <dd className="mt-0.5 font-semibold text-foreground">
            {guide.routes}
          </dd>
        </div>

        <div className="col-span-2">
          <dt className="text-muted-foreground">Speaks</dt>
          <dd className="mt-0.5 font-semibold text-foreground">
            {guide.languages}
          </dd>
        </div>
      </dl>
    </CardContent>
  </Card>
);

export default GuideCard;
