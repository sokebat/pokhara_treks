import { TbHeartHandshake } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { siteInfo } from "@/constant/site";
import {
  colorVariants,
  sidebarHighlights,
} from "@/features/customize-trip/constant/page-copy";

const CustomizeSidebar = () => (
  <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-md border-2 border-border">
      <Image
        src="/images/hero-women-trekking.jpg"
        alt="A woman trekker looking out over a snow-capped Himalayan mountain range"
        fill
        sizes="(min-width: 1024px) 30vw, 100vw"
        className="object-cover object-[68%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent"
      />
      <div className="absolute right-4 bottom-4 left-4 flex items-start gap-3 rounded-md border-2 border-border bg-card/95 p-4">
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary">
          <TbHeartHandshake className="size-4 text-primary-foreground" />
        </span>
        <p className="text-sm leading-snug text-foreground">
          Guided and planned by Pokhara-trained women, start to finish.
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-5 rounded-md border-2 border-border bg-card p-6">
      {sidebarHighlights.map((item, index) => {
        const variant = colorVariants[index % colorVariants.length];
        return (
          <div key={item.title} className="flex items-start gap-3">
            <span
              className={`flex size-9 shrink-0 items-center justify-center rounded-full ${variant.chip}`}
            >
              <item.icon className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>

    <div className="rounded-md bg-foreground p-6 text-primary-foreground">
      <div className="flex items-start gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sky/20 text-sky">
          <FaWhatsapp className="size-5" />
        </span>
        <div>
          <p className="text-sm font-semibold tracking-wide text-sky uppercase">
            Rather just chat?
          </p>
          <p className="mt-1 text-sm text-primary-foreground/80">
            Message us on WhatsApp and plan your trip in real time.
          </p>
        </div>
      </div>
      <Button
        nativeButton={false}
        render={
          <a
            href={`https://wa.me/${siteInfo.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
        size="xl"
        className="mt-5 bg-card text-foreground hover:bg-card/90"
      >
        <FaWhatsapp className="size-4" />
        Message us on WhatsApp
      </Button>
    </div>
  </div>
);

export default CustomizeSidebar;
