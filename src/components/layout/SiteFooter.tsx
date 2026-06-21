import Link from "next/link";
import { footerNavLinks } from "@/data/navigation";
import { SITE } from "@/constants/site";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  const { address } = SITE;

  return (
    <footer className="border-t border-neutral-200 bg-brand-900 text-white">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold">
              {SITE.name}
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-300">
              {SITE.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent-400">
              Website
            </h2>
            <ul className="mt-4 space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent-400">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              <li>
                <a href={SITE.emailHref} className="transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li>
                {address.street}, {address.city}, {address.region} {address.postalCode}
              </li>
              <li>{SITE.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <p>{SITE.businessHours}</p>
        </div>
      </Container>
    </footer>
  );
}
