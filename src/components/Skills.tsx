import { skillGroups } from "@/data/skills";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="Technologies I have used in projects and internships, grouped by area.">
      <dl className="divide-y divide-line border-y border-line">
        {skillGroups.map((g) => (
          <div key={g.category} className="grid gap-3 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8">
            <dt className="font-display font-semibold">{g.category}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="badge">{s}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
