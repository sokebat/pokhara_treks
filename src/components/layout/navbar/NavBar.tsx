import Link from "next/link";

import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import TopBar from "./TopBar";

const NavBar = () => {
  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-40 w-full border-b border-border bg-card">
        <Container>
          <div className="flex items-center gap-3 py-2 lg:gap-6">
            <Logo priority className="h-12 w-auto" />

            <DesktopNav className="hidden xl:flex" />

            <div className="ml-auto flex items-center gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/customize-my-trip" />}
                size="lg"
                className="hidden sm:inline-flex"
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
