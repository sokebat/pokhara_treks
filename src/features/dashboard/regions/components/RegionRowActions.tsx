"use client";

import { useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TbDots, TbExternalLink, TbPencil, TbTrash } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteRegion } from "@/features/dashboard/regions/actions/delete-region";
import { regionEditPath } from "@/features/dashboard/lib/content-paths";

type RegionRowActionsProps = {
  id: string;
  slug: string;
  title: string;
  publicHref: string;
};

export default function RegionRowActions({
  id,
  slug,
  title,
  publicHref,
}: RegionRowActionsProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onDelete = () => {
    if (!window.confirm(`Delete “${title}”? This cannot be undone.`)) return;

    startTransition(async () => {
      const result = await deleteRegion(id);
      if (!result.ok) {
        window.alert(result.message);
        return;
      }
      router.refresh();
    });
  };

  return (
    <div className="flex items-center justify-end gap-1.5">
      <Button
        nativeButton={false}
        variant="outline"
        size="sm"
        className="rounded-md"
        render={<Link href={regionEditPath(slug)} />}
      >
        <TbPencil className="size-3.5" />
        Edit
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="outline"
              size="icon-sm"
              className="rounded-md"
              aria-label={`More actions for ${title}`}
              disabled={pending}
            />
          }
        >
          <TbDots className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-40">
          <DropdownMenuItem
            render={
              <Link
                href={publicHref}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <TbExternalLink className="size-4" />
            View on site
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onClick={onDelete}>
            <TbTrash className="size-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
