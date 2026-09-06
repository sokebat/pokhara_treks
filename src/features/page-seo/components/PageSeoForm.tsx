"use client";

import { useActionState } from "react";
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
import { savePageSeo } from "@/features/page-seo/actions/save-page-seo";
import type { ListingSeoPage } from "@/features/page-seo/constant/pages";
import type { PageSeoRecord } from "@/features/page-seo/types";
import {
  firstFieldError,
  idlePageSeoActionState,
} from "@/features/page-seo/validation/page-seo.validation";

type PageSeoFormProps = {
  page: ListingSeoPage;
  initial: PageSeoRecord;
};

const PageSeoForm = ({ page, initial }: PageSeoFormProps) => {
  const [state, formAction, pending] = useActionState(
    savePageSeo,
    idlePageSeoActionState,
  );

  const titleError = firstFieldError(state.fieldErrors, "title");
  const descriptionError = firstFieldError(state.fieldErrors, "description");
  const keywordsError = firstFieldError(state.fieldErrors, "keywords");

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <input type="hidden" name="key" value={page.key} />

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
            <Link
              href={page.publicPath}
              target="_blank"
              rel="noopener noreferrer"
            />
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
              name="title"
              required
              maxLength={120}
              defaultValue={initial.title}
              placeholder="Trekking Regions in Nepal"
              aria-invalid={!!titleError}
              className="h-11 rounded-md"
            />
            {titleError && (
              <p className="text-xs text-destructive">{titleError}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="description">Meta description</Label>
            <Textarea
              id="description"
              name="description"
              required
              maxLength={320}
              rows={4}
              defaultValue={initial.description}
              placeholder="Everest, Annapurna, Manaslu…"
              aria-invalid={!!descriptionError}
              className="min-h-24 rounded-md"
            />
            {descriptionError && (
              <p className="text-xs text-destructive">{descriptionError}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="keywords">Keywords</Label>
            <Textarea
              id="keywords"
              name="keywords"
              maxLength={500}
              rows={3}
              defaultValue={initial.keywords}
              placeholder="Nepal trekking regions, Annapurna region"
              aria-invalid={!!keywordsError}
              className="min-h-20 rounded-md"
            />
            <p className="text-xs text-muted-foreground">
              Separate keywords with commas.
            </p>
            {keywordsError && (
              <p className="text-xs text-destructive">{keywordsError}</p>
            )}
          </div>

          {state.status === "error" && state.message && (
            <p className="text-sm text-destructive">{state.message}</p>
          )}
          {state.status === "success" && state.message && (
            <p className="text-sm text-foreground">{state.message}</p>
          )}

          <div>
            <Button type="submit" disabled={pending} className="rounded-md">
              {pending ? "Saving..." : "Save SEO"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default PageSeoForm;
