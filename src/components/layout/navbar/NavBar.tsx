"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import TopBar from "./TopBar";

const NavBar = () => {
  const [hidden, setHidden] = useState(false);
  const [pinned, setPinned] = useState(false);
  const lastY = useRef(0);

  const visible = !hidden || pinned;

  useEffect(() => {
    lastY.current = window.scrollY;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        lastY.current = y;

        if (y < 16) {
          setHidden(false);
        } else if (delta > 8) {
          setHidden(true);
        } else if (delta < -8) {
          setHidden(false);
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--main-nav-offset",
      visible ? "64px" : "0px",
    );

    return () => {
      document.documentElement.style.removeProperty("--main-nav-offset");
    };
  }, [visible]);

  return (
    <>
      <TopBar />

      {hidden && !pinned && (
        <div
          aria-hidden
          className="fixed inset-x-0 top-0 z-50 h-4"
          onMouseEnter={() => setPinned(true)}
        />
      )}

      <header
        data-slot="site-header"
        onMouseEnter={() => setPinned(true)}
        onMouseLeave={() => setPinned(false)}
        className={cn(
          "sticky top-0 z-40 w-full border-b-2 border-border bg-card transition-transform duration-300 ease-out",
          visible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <Container>
          <div className="flex h-16 items-center gap-4 lg:gap-8">
            <Logo priority className="h-[3.25rem] w-auto max-w-[min(100%,220px)]" />

            <DesktopNav className="hidden min-w-0 flex-1 xl:flex" />

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

        <div className="hidden border-t-2 border-border bg-muted/30 md:block xl:hidden">
          <Container>
            <DesktopNav className="flex justify-center py-1.5" />
          </Container>
        </div>
      </header>
    </>
  );
};

export default NavBar;
