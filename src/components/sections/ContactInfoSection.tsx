import { SITE } from "@/constants/site";
import { Card } from "@/components/ui/Card";

export function ContactInfoSection() {
  const { address } = SITE;

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      <Card>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">Email</h3>
        <a
          href={SITE.emailHref}
          className="mt-3 block text-base font-medium text-brand-900 transition-colors hover:text-brand-700"
        >
          {SITE.email}
        </a>
      </Card>
      <Card>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">Phone</h3>
        <a
          href={SITE.phoneHref}
          className="mt-3 block text-base font-medium text-brand-900 transition-colors hover:text-brand-700"
        >
          {SITE.phone}
        </a>
      </Card>
      <Card>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">Service Area</h3>
        <p className="mt-3 text-base font-medium text-brand-900">{SITE.serviceArea}</p>
        <p className="mt-1 text-sm text-neutral-600">
          {address.street}, {address.city}, {address.region}
        </p>
      </Card>
    </div>
  );
}
