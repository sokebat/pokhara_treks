import { getListingSeoPage, type ListingSeoKey } from "@/features/page-seo/constant/pages";
import PageSeoForm from "@/features/page-seo/components/PageSeoForm";
import { getPageSeoByPath } from "@/features/page-seo/lib/queries";

type ListingSeoPageProps = {
  pageKey: ListingSeoKey;
};

export default async function ListingSeoPage({ pageKey }: ListingSeoPageProps) {
  const page = getListingSeoPage(pageKey);
  if (!page) return null;

  const initial = await getPageSeoByPath(page.publicPath);

  return <PageSeoForm page={page} initial={initial} />;
}
