import Link from "next/link";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import {
  DesktopNav,
  Logo,
  MobileNav,
  TopBar,
} from "@/components/layout/navbar";

const NavBar = () => {
  return (
    <>
      <div
        aria-hidden
        className="h-1 w-full bg-linear-to-r from-accent via-primary to-accent"
      />

      <TopBar />

      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
        <Container>
          <div className="flex items-center gap-3 py-1 lg:gap-6">
            <Logo priority className="h-12 w-auto" />

            <DesktopNav className="hidden xl:flex" />

            <div className="ml-auto flex items-center gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/customize-my-trip" />}
                size="xl"
                className="hidden rounded-md sm:inline-flex"
              >
                Plan Your Trip
              </Button>

              <MobileNav />
            </div>
          </div>
        </Container>

        <div className="hidden border-t border-border bg-muted/30 md:block xl:hidden">
          <Container>
            <DesktopNav className="flex justify-center py-1.5" />
          </Container>
        </div>
      </header>
    </>
  );
};

export default NavBar;
