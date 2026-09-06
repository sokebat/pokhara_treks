import ListingSeoPage from "@/features/page-seo/components/ListingSeoPage";

export const metadata = {
  title: "activity-meta",
};

export default async function ActivityMetaPage() {
  return <ListingSeoPage pageKey="activity" />;
}
