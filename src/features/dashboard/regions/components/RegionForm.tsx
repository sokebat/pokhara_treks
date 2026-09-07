"use client";

import { useState, useTransition, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { TbArrowLeft, TbCheck, TbRefresh } from "react-icons/tb";
import Link from "next/link";

import RichTextEditor from "@/components/shared/RichTextEditor";
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
import DashboardPageHeader from "@/features/dashboard/components/DashboardPageHeader";
import { contentPaths } from "@/features/dashboard/lib/content-paths";
import { saveRegion } from "@/features/dashboard/regions/actions/save-region";
import type { RegionFormValues } from "@/features/dashboard/regions/types";
import { firstRegionFieldError } from "@/features/dashboard/regions/validation/region.validation";
import { regionPath } from "@/features/site/region/constant/regions";
import { slugify } from "@/lib/slug";

type RegionFormProps = {
  mode: "new" | "edit";
  initialValues: RegionFormValues;
  regionId?: string;
};

type FieldErrors = Partial<Record<keyof RegionFormValues, string>>;

function validate(values: RegionFormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.title.trim()) errors.title = "Title is required.";
  if (!values.slug.trim()) errors.slug = "Slug is required.";
  if (!values.tagline.trim()) errors.tagline = "Tagline is required.";
  if (!values.location.trim()) errors.location = "Location is required.";
  if (!values.metaTitle.trim()) errors.metaTitle = "Meta title is required.";
  if (!values.metaDescription.trim()) {
    errors.metaDescription = "Meta description is required.";
  }
  if (!values.bodyHtml.replace(/<[^>]+>/g, "").trim()) {
    errors.bodyHtml = "Description is required.";
  }
  return errors;
}

const FieldError = ({ message }: { message?: string }) =>
  message ? <p className="text-xs text-destructive">{message}</p> : null;

export default function RegionForm({
  mode,
  initialValues,
  regionId,
}: RegionFormProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [slugTouched, setSlugTouched] = useState(mode === "edit");

  const setField = <K extends keyof RegionFormValues>(
    key: K,
    value: RegionFormValues[K],
  ) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
    setFormError(null);
  };

  const onTitleChange = (title: string) => {
    setField("title", title);
    if (!slugTouched) {
      setField("slug", slugify(title));
    }
    if (mode === "new" && !values.metaTitle) {
      setField("metaTitle", title ? `${title} Trekking` : "");
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    startTransition(async () => {
      const result = await saveRegion({
        ...values,
        ...(regionId ? { id: regionId } : {}),
      });

      if (result.status === "error") {
        const mapped: FieldErrors = {};
        (
          Object.keys(result.fieldErrors) as Array<keyof RegionFormValues>
        ).forEach((key) => {
          const message = firstRegionFieldError(result.fieldErrors, key);
          if (message) mapped[key] = message;
        });
        setErrors(mapped);
        setFormError(result.message);
        return;
      }

      setSaved(true);
      router.push(
        `${contentPaths.regions}?saved=${encodeURIComponent(values.title)}`,
      );
      router.refresh();
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <DashboardPageHeader
        title={mode === "new" ? "Add region" : "Edit region"}
        description={
          mode === "new"
            ? "Create a trekking region page with hero copy, SEO, facts, and rich content."
            : `Update content for ${initialValues.title}.`
        }
        actions={
          <Button
            nativeButton={false}
            variant="outline"
            size="sm"
            className="rounded-md"
            render={<Link href={contentPaths.regions} />}
          >
            <TbArrowLeft className="size-4" />
            Back to regions
          </Button>
        }
      />

      <Card>
        <CardHeader>
          <CardTitle>Basics</CardTitle>
          <CardDescription>
            Title, tagline, and location shown in the region hero.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="title">Region name</Label>
            <Input
              id="title"
              value={values.title}
              onChange={(e) => onTitleChange(e.target.value)}
              placeholder="Everest Region"
              aria-invalid={!!errors.title}
              className="h-11 rounded-md"
            />
            <FieldError message={errors.title} />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="shortLabel">Short label</Label>
            <Input
              id="shortLabel"
              value={values.shortLabel}
              onChange={(e) => setField("shortLabel", e.target.value)}
              placeholder="Everest"
              className="h-11 rounded-md"
            />
            <p className="text-xs text-muted-foreground">
              Shown on the image overlay (e.g. EVEREST).
            </p>
          </div>

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <Label htmlFor="tagline">Tagline</Label>
            <Input
              id="tagline"
              value={values.tagline}
              onChange={(e) => setField("tagline", e.target.value)}
              placeholder="The Khumbu under the world's highest mountain."
              aria-invalid={!!errors.tagline}
              className="h-11 rounded-md"
            />
            <FieldError message={errors.tagline} />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-2">
              <Label htmlFor="slug">Slug</Label>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-xs font-medium text-chart-2 hover:underline"
                onClick={() => {
                  setSlugTouched(false);
                  setField("slug", slugify(values.title));
                }}
              >
                <TbRefresh className="size-3.5" />
                From title
              </button>
            </div>
            <Input
              id="slug"
              value={values.slug}
              onChange={(e) => {
                setSlugTouched(true);
                setField("slug", slugify(e.target.value));
              }}
              placeholder="everest-region"
              aria-invalid={!!errors.slug}
              className="h-11 rounded-md font-mono text-sm"
            />
            <p className="font-mono text-xs text-muted-foreground">
              Public URL: {regionPath(values.slug || "…")}
            </p>
            <FieldError message={errors.slug} />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={values.location}
              onChange={(e) => setField("location", e.target.value)}
              placeholder="Khumbu · Solukhumbu"
              aria-invalid={!!errors.location}
              className="h-11 rounded-md"
            />
            <FieldError message={errors.location} />
          </div>

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <Label htmlFor="description">Short description</Label>
            <Textarea
              id="description"
              value={values.description}
              onChange={(e) => setField("description", e.target.value)}
              placeholder="Base Camp, Gokyo and the Three Passes…"
              rows={3}
              className="min-h-20 rounded-md"
            />
            <p className="text-xs text-muted-foreground">
              Used in listings and cards — keep it to one or two sentences.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Search engines</CardTitle>
          <CardDescription>
            Meta title, description, and keywords for Google and social
            previews.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="metaTitle">Meta title</Label>
            <Input
              id="metaTitle"
              value={values.metaTitle}
              onChange={(e) => setField("metaTitle", e.target.value)}
              placeholder="Everest Region Trekking"
              maxLength={120}
              aria-invalid={!!errors.metaTitle}
              className="h-11 rounded-md"
            />
            <FieldError message={errors.metaTitle} />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="metaDescription">Meta description</Label>
            <Textarea
              id="metaDescription"
              value={values.metaDescription}
              onChange={(e) => setField("metaDescription", e.target.value)}
              placeholder="Base Camp, Gokyo and the Three Passes — guided from Pokhara."
              maxLength={320}
              rows={4}
              aria-invalid={!!errors.metaDescription}
              className="min-h-24 rounded-md"
            />
            <FieldError message={errors.metaDescription} />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="keywords">Keywords</Label>
            <Textarea
              id="keywords"
              value={values.keywords}
              onChange={(e) => setField("keywords", e.target.value)}
              placeholder="Everest Region trek, trekking in Everest, Khumbu Nepal"
              maxLength={500}
              rows={3}
              className="min-h-20 rounded-md"
            />
            <p className="text-xs text-muted-foreground">
              Separate keywords with commas.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Featured image</CardTitle>
          <CardDescription>
            Hero photo on the right side of the region page.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              value={values.image}
              onChange={(e) => setField("image", e.target.value)}
              placeholder="/images/everest.jpg"
              className="h-11 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="imageAlt">Image alt text</Label>
            <Input
              id="imageAlt"
              value={values.imageAlt}
              onChange={(e) => setField("imageAlt", e.target.value)}
              placeholder="Trekkers in the Everest region"
              className="h-11 rounded-md"
            />
          </div>
          {values.image ? (
            <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={values.image}
                alt={values.imageAlt || values.title || "Featured preview"}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Region facts</CardTitle>
          <CardDescription>
            The four summary cards under the hero.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="highestPoint">Highest point</Label>
            <Input
              id="highestPoint"
              value={values.highestPoint}
              onChange={(e) => setField("highestPoint", e.target.value)}
              placeholder="Kala Patthar 5,545 m"
              className="h-11 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="bestSeason">Best season</Label>
            <Input
              id="bestSeason"
              value={values.bestSeason}
              onChange={(e) => setField("bestSeason", e.target.value)}
              placeholder="Mar–May · Oct–Nov"
              className="h-11 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="permits">Permits</Label>
            <Input
              id="permits"
              value={values.permits}
              onChange={(e) => setField("permits", e.target.value)}
              placeholder="Sagarmatha NP · TIMS"
              className="h-11 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="typicalDuration">Typical trek</Label>
            <Input
              id="typicalDuration"
              value={values.typicalDuration}
              onChange={(e) => setField("typicalDuration", e.target.value)}
              placeholder="5–20 days"
              className="h-11 rounded-md"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Long description</CardTitle>
          <CardDescription>
            Main body copy. Add headings, links, lists, and inline images.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-1.5">
          <RichTextEditor
            value={values.bodyHtml}
            onChange={(html) => setField("bodyHtml", html)}
            placeholder="Describe villages, trails, logistics…"
            minHeightClassName="min-h-64"
          />
          <FieldError message={errors.bodyHtml} />
        </CardContent>
      </Card>

      <div className="flex flex-wrap items-center gap-3 pb-4">
        <Button type="submit" disabled={pending} className="rounded-md">
          {pending
            ? "Saving…"
            : mode === "new"
              ? "Create region"
              : "Save changes"}
        </Button>
        {saved && (
          <p className="inline-flex items-center gap-1.5 text-sm text-foreground">
            <TbCheck className="size-4 text-ocean" />
            Saved
          </p>
        )}
        {formError && <p className="text-sm text-destructive">{formError}</p>}
      </div>
    </form>
  );
}
