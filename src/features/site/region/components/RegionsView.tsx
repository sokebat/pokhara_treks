import ListingPage from "@/features/site/listing/components/ListingPage";
import RegionsListingTable from "@/features/site/region/components/RegionsListingTable";
import { regionListingPage } from "@/features/site/region/constant/listing";

export default async function RegionsView() {
  return (
    <ListingPage
      eyebrow={regionListingPage.eyebrow}
      title={regionListingPage.heading}
      description={regionListingPage.intro}
    >
      <RegionsListingTable />
    </ListingPage>
  );
}
