import JsonLd from "@/components/shared/JsonLd";
import type { ListingPublicPath } from "@/features/page-seo/constant/pages";
import { listingWebPageJsonLd } from "@/features/page-seo/service/page-seo.service";

type ListingWebPageJsonLdProps = {
  path: ListingPublicPath;
};

export default async function ListingWebPageJsonLd({
  path,
}: ListingWebPageJsonLdProps) {
  const data = await listingWebPageJsonLd(path);

  return <JsonLd data={data} />;
}
