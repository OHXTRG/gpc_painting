"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavLink } from "@/types/content";
import { SITE, CTA } from "@/constants/site";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { Container } from "@/components/ui/Container";
import { ArrowUpRightIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

interface MobileNavProps {
  links: NavLink[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log("rerender contect " , isOpen)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-700 text-white"
      >
        {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {isOpen && (
        
        <div
          id="mobile-nav-panel"
          // className="fixed inset-0 z-50 bg-brand-900/95 backdrop-blur-sm"
          className="fixed inset-0 z-50 bg-brand-900/98 backdrop-blur-md shadow-2xl h-dvh"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >

          <Container className="flex h-full flex-col py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-lg font-bold text-white" onClick={() => setIsOpen(false)}>
                {SITE.name}
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col gap-2" aria-label="Mobile primary">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-xl px-4 py-4 text-lg font-semibold transition-colors",
                      // isActive ? "bg-brand-700 text-white" : "text-neutral-200 hover:bg-white/10",
                      isActive
  ? "bg-brand-700 text-white shadow-lg"
  : "bg-brand-800/40 text-neutral-200 hover:bg-brand-700/60"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-6">
            {/* <div className="mt-auto flex flex-col gap-3"> */}
              <ButtonGroup
                label={CTA.quote.label}
                href={CTA.quote.href}
                // onClick={() =>{ setIsOpen(false) , console.log("clicked")}}
                onClick={() => setIsOpen(false)}
                icon={<ArrowUpRightIcon className="h-4 w-4" />}
                variant="secondary"
              />
              <ButtonGroup
                label={CTA.call.label}
                href={CTA.call.href}
                icon={<PhoneIcon className="h-4 w-4" />}
                variant="primary"
                external
              />
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
