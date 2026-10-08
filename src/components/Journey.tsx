import { timeline } from "@/data/timeline";
import Section from "./Section";

export default function Journey() {
  return (
    <Section id="journey" title="Professional journey">
      <ol className="space-y-6 border-l border-line pl-6 sm:pl-10">
        {timeline.map((t) => (
          <li key={t.when + t.title} className="relative">
            <span aria-hidden="true" className="absolute -left-[1.9rem] top-2 h-2 w-2 rounded-full bg-muted sm:-left-[2.8rem]" />
            <p className="text-sm text-muted">{t.when}</p>
            <p className="font-display text-lg font-semibold">{t.title}</p>
            <p className="text-muted">{t.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
