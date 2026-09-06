import ListingSeoPage from "@/features/page-seo/components/ListingSeoPage";

export const metadata = {
  title: "trip-meta",
};

export default async function TripMetaPage() {
  return <ListingSeoPage pageKey="trip" />;
}
