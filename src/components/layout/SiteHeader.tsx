import Link from "next/link";
import { mainNavLinks, headerCtas } from "@/data/navigation";
import { SITE } from "@/constants/site";
import { MobileNav } from "@/components/features/MobileNav";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { Container } from "@/components/ui/Container";
import { ArrowUpRightIcon, PhoneIcon } from "@/components/ui/icons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/95 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Container as="nav" aria-label="Primary" className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-sm font-bold text-white">
            GP
          </span>
          <span className="hidden text-sm font-bold uppercase tracking-wide text-brand-900 sm:inline">
            {SITE.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {mainNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-brand-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonGroup
            label={headerCtas.quote.label}
            href={headerCtas.quote.href}
            icon={<ArrowUpRightIcon className="h-4 w-4" />}
            variant="primary"
          />
          <ButtonGroup
            label={SITE.phone}
            href={headerCtas.call.href}
            icon={<PhoneIcon className="h-4 w-4" />}
            variant="secondary"
            external
          />
        </div>

        <MobileNav links={mainNavLinks} />
      </Container>
    </header>
  );
}
