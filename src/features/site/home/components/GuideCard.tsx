import Image from "next/image";

import Avatar from "@/components/shared/Avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { Guide } from "@/features/site/home/constant/guides";

type GuideCardProps = {
  guide: Guide;
  index: number;
};

const GuideCard = ({ guide, index }: GuideCardProps) => (
  <Card className="h-full gap-0 overflow-hidden rounded-md border-2 border-primary/20 bg-card py-0 shadow-none ring-0">
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
        className="absolute bottom-3 left-3 ring-2 ring-card"
      />
    </div>

    <CardContent className="border-none px-4 pt-4 pb-4">
      <p className="font-semibold text-primary">{guide.name}</p>
      <p className="mt-0.5 text-sm font-medium text-chart-2">{guide.role}</p>

      <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5 border-t-2 border-border pt-3">
        <div>
          <dt className="text-sm text-muted-foreground">Licence</dt>
          <dd className="mt-0.5 text-sm font-semibold text-primary">
            {guide.licence}
          </dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">Guiding</dt>
          <dd className="mt-0.5 text-sm font-semibold text-primary">
            {guide.years}
          </dd>
        </div>

        <div className="col-span-2">
          <dt className="text-sm text-muted-foreground">Routes</dt>
          <dd className="mt-0.5 text-sm font-semibold text-primary">
            {guide.routes}
          </dd>
        </div>

        <div className="col-span-2">
          <dt className="text-sm text-muted-foreground">Speaks</dt>
          <dd className="mt-0.5 text-sm font-semibold text-primary">
            {guide.languages}
          </dd>
        </div>
      </dl>
    </CardContent>
  </Card>
);

export default GuideCard;
