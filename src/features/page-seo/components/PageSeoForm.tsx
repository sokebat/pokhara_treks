"use client";

import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ListingSeoPage } from "@/features/page-seo/constant/pages";
import { usePageSeoForm } from "@/features/page-seo/hooks/use-page-seo-form";
import type { PageSeoRecord } from "@/features/page-seo/lib/keywords";

type PageSeoFormProps = {
  page: ListingSeoPage;
  initial: PageSeoRecord;
};

const PageSeoForm = ({ page, initial }: PageSeoFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    formError,
    formSuccess,
    onSubmit,
  } = usePageSeoForm(page.key, initial);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-foreground sm:text-2xl">
            {page.heading}
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            {page.description}
          </p>
        </div>
        <Button
          nativeButton={false}
          variant="outline"
          size="sm"
          className="rounded-md"
          render={
            <Link href={page.publicPath} target="_blank" rel="noopener noreferrer" />
          }
        >
          View {page.publicPath}
          <TbExternalLink className="size-4" />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search engines</CardTitle>
          <CardDescription>
            Shown in Google and social previews for {page.publicPath}.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="title">Meta title</Label>
            <Input
              id="title"
              placeholder="Trekking Regions in Nepal"
              aria-invalid={!!errors.title}
              className="h-11 rounded-md"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-xs text-destructive">{errors.title.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="description">Meta description</Label>
            <Textarea
              id="description"
              rows={4}
              placeholder="Everest, Annapurna, Manaslu…"
              aria-invalid={!!errors.description}
              className="min-h-24 rounded-md"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-xs text-destructive">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="keywords">Keywords</Label>
            <Textarea
              id="keywords"
              rows={3}
              placeholder="Nepal trekking regions, Annapurna region"
              aria-invalid={!!errors.keywords}
              className="min-h-20 rounded-md"
              {...register("keywords")}
            />
            <p className="text-xs text-muted-foreground">
              Separate keywords with commas.
            </p>
            {errors.keywords && (
              <p className="text-xs text-destructive">
                {errors.keywords.message}
              </p>
            )}
          </div>

          {formError && <p className="text-sm text-destructive">{formError}</p>}
          {formSuccess && (
            <p className="text-sm text-foreground">{formSuccess}</p>
          )}

          <div>
            <Button type="submit" disabled={isSubmitting} className="rounded-md">
              {isSubmitting ? "Saving..." : "Save SEO"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default PageSeoForm;
