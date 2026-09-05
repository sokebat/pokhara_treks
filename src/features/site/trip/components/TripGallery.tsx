import Image from "next/image";

import Container from "@/components/shared/Container";
import { TREK_PHOTO, WOMEN_TREK_PHOTO, HELI_PHOTO } from "@/constant/photos";

const thumbs = [
  {
    src: WOMEN_TREK_PHOTO,
    alt: "Pushpa leading a women-only group past Chhomrong at 2,170 m, October",
  },
  {
    src: TREK_PHOTO,
    alt: "A suspension bridge over the Chhomrong Khola on day one",
  },
  {
    src: HELI_PHOTO,
    alt: "A teahouse dining room at Deurali, evening",
  },
  {
    src: WOMEN_TREK_PHOTO,
    alt: "Rhododendron in flower on the climb to Sinuwa in April",
  },
  {
    src: TREK_PHOTO,
    alt: "Ghandruk village on the walk out, with Annapurna South behind",
  },
];

const TripGallery = () => (
  <section className="pt-4 sm:pt-6">
    <Container>
      <figure className="relative aspect-video overflow-hidden rounded-md sm:aspect-21/9">
        <Image
          src={TREK_PHOTO}
          alt="The Annapurna Sanctuary at first light, with Annapurna South and Hiunchuli standing over the flat glacial basin of base camp"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary/80 to-transparent px-4 pt-10 pb-3 text-sm text-primary-foreground sm:px-5">
          Annapurna Base Camp at 4,130 m, first light, October
        </figcaption>
      </figure>

      <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">
        {thumbs.map((thumb, index) => (
          <button
            key={`${thumb.alt}-${index}`}
            type="button"
            className={`relative aspect-16/10 overflow-hidden rounded-md ${index > 2 ? "max-sm:hidden" : ""}`}
          >
            <Image
              src={thumb.src}
              alt={`Open photo: ${thumb.alt}`}
              fill
              sizes="20vw"
              className="object-cover"
            />
            {index === 4 && (
              <span className="absolute inset-0 hidden items-center justify-center bg-primary/70 text-sm font-semibold text-primary-foreground sm:flex">
                +19 photos
              </span>
            )}
            {index === 2 && (
              <span className="absolute inset-0 flex items-center justify-center bg-primary/70 text-sm font-semibold text-primary-foreground sm:hidden">
                +21 photos
              </span>
            )}
          </button>
        ))}
      </div>
    </Container>
  </section>
);

export default TripGallery;
