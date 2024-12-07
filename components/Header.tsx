import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { DialogTitle } from "./ui/dialog";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <div className="flex flex-col justify-center w-full mx-auto items-center">
      <header className="sticky max-w-6xl top-0 z-50 w-full mx-auto border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className=" w-full flex justify-between items-center h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div>Logo</div>
          </Link>
          <div className="hidden md:flex">
            <MainNav />
          </div>
          <div className="flex items-center space-x-4">
            <Button className="hidden bg-blue-600 hover:bg-blue-700 md:inline-flex">
              Schedule a discovery call
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <DialogTitle asChild>
                  <VisuallyHidden>Navigation Menu</VisuallyHidden>
                </DialogTitle>
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
