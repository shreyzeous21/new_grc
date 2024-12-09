"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "./navigation-menu";
import { navigationMenuTriggerStyle } from "./navigation-menu";

interface NavMenuItemProps {
  title: string;
  href: string;
  description?: string;
  subitems?: Array<{ title: string; href: string }>;
}

export function NavMenuItem({ title, href, description, subitems }: NavMenuItemProps) {
  return (
    <div className="group relative">
      <Link href={href} className="grid gap-2 rounded-lg p-2 hover:bg-accent">
        <div className="font-medium leading-none group-hover:text-accent-foreground">
          {title}
        </div>
        {description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </Link>
      {subitems && (
        <div className="absolute left-full top-0 hidden min-w-[200px] rounded-md bg-popover p-2 group-hover:grid gap-1 ml-2 shadow-lg">
          {subitems.map((subitem) => (
            <Link
              key={subitem.title}
              href={subitem.href}
              className="block rounded-sm px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              {subitem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}