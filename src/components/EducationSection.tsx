import { education } from "@/data/education";
import Section from "./Section";

export default function EducationSection() {
  const p = education.primary;
  return (
    <Section id="education" title="Education">
      <div className="rounded-xl border border-accent/60 bg-surface p-6 sm:p-8">
        <p className="text-sm text-muted">{p.period}</p>
        <h3 className="mt-2 font-display text-2xl font-bold leading-snug sm:text-3xl">{p.degree}</h3>
        <p className="mt-2 text-lg">{p.institution}</p>
        <p className="text-muted">{p.affiliation}</p>
        <p className="mt-4 font-display text-xl font-semibold text-accent">{p.score}</p>
      </div>

      <ul className="mt-6 divide-y divide-line border-y border-line text-sm">
        {education.school.map((s) => (
          <li key={s.level} className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr_6rem_5rem] sm:gap-4">
            <span className="font-semibold">{s.level}</span>
            <span className="text-muted">{s.institution}</span>
            <span className="text-muted">{s.year}</span>
            <span>{s.score}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
