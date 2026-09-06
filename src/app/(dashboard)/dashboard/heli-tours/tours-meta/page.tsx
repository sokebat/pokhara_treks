import ListingSeoPage from "@/features/page-seo/components/ListingSeoPage";

export const metadata = {
  title: "tours-meta",
};

export default async function ToursMetaPage() {
  return <ListingSeoPage pageKey="tours" />;
}
