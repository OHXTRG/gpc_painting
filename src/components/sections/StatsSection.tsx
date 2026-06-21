import { stats } from "@/data/stats";
import { SectionShell } from "@/components/layout/SectionShell";
import { StatCounter } from "@/components/ui/StatCounter";

export function StatsSection() {
  return (
    <SectionShell variant="brand" ariaLabelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        Company statistics
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCounter
            key={stat.id}
            value={stat.value}
            displayText={stat.displayText}
            prefix={stat.prefix}
            suffix={stat.suffix}
            label={stat.label}
            dark
          />
        ))}
      </div>
    </SectionShell>
  );
}
