import { getListingSeoPage, type ListingSeoKey } from "@/features/page-seo/constant/pages";
import PageSeoForm from "@/features/page-seo/components/PageSeoForm";
import { getListingSeoForEditor } from "@/features/page-seo/service/page-seo.service";

type ListingSeoEditorProps = {
  pageKey: ListingSeoKey;
};

export default async function ListingSeoEditor({
  pageKey,
}: ListingSeoEditorProps) {
  const page = getListingSeoPage(pageKey);
  const initial = await getListingSeoForEditor(page.publicPath);

  return <PageSeoForm page={page} initial={initial} />;
}
