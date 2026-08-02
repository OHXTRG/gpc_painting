import { SITE } from "@/constants/site";
import { Card } from "@/components/ui/Card";

export function ContactInfoSection() {
  const { address } = SITE;

  return (
    <div className="grid min-w-0 gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,11rem),1fr))]">
      <Card className="min-w-0">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">Phone</h3>
        <a
          href={SITE.phoneHref}
          className="mt-3 block min-w-0 break-words text-base font-medium text-brand-900 transition-colors hover:text-brand-700"
        >
          {SITE.phone}
        </a>
      </Card>
      <Card className="min-w-0">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">Email</h3>
        <a
          href={SITE.emailHref}
          className="mt-3 block min-w-0 break-words text-base font-medium text-brand-900 transition-colors hover:text-brand-700"
        >
          {SITE.email}
        </a>
      </Card>
      <Card className="min-w-0">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">Address</h3>
        <p className="mt-3 min-w-0 break-words text-base font-medium text-brand-900">
          {address.street}
          <br />
          {address.city}, {address.region} {address.postalCode}
        </p>
      </Card>
    </div>
  );
}
