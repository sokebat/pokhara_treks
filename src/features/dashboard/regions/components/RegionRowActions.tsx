"use client";

import { useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TbExternalLink, TbPencil, TbTrash } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import { deleteRegion } from "@/features/dashboard/regions/actions/delete-region";
import { regionEditPath } from "@/features/dashboard/lib/content-paths";
import type { RegionTableRow } from "@/features/dashboard/regions/types";

type RegionRowActionsProps = {
  row: RegionTableRow;
};

export default function RegionRowActions({ row }: RegionRowActionsProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onDelete = () => {
    if (!window.confirm(`Delete “${row.title}”? This cannot be undone.`)) return;

    startTransition(async () => {
      const result = await deleteRegion(row.id);
      if (!result.ok) {
        window.alert(result.message);
        return;
      }
      router.refresh();
    });
  };

  return (
    <div className="inline-flex items-center overflow-hidden rounded-md border-2 border-border bg-card">
      <Button
        nativeButton={false}
        variant="ghost"
        size="sm"
        className="h-8 rounded-none border-0 px-2.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
        render={
          <Link
            href={row.publicHref}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
      >
        <TbExternalLink className="size-3.5" />
        View
      </Button>
      <span aria-hidden className="h-5 w-px shrink-0 bg-border" />
      <Button
        nativeButton={false}
        variant="ghost"
        size="sm"
        className="h-8 rounded-none border-0 px-2.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
        render={<Link href={regionEditPath(row.slug)} />}
      >
        <TbPencil className="size-3.5" />
        Edit
      </Button>
      <span aria-hidden className="h-5 w-px shrink-0 bg-border" />
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="size-8 rounded-none border-0 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
        aria-label={`Delete ${row.title}`}
        disabled={pending}
        onClick={onDelete}
      >
        <TbTrash className="size-3.5" />
      </Button>
    </div>
  );
}
