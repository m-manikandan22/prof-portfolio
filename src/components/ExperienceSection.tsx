import { experience } from "@/data/experience";
import Section from "./Section";

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" intro="Three internships across agentic AI, ML engineering and generative AI.">
      <ol className="space-y-12 border-l border-line pl-6 sm:pl-10">
        {experience.map((e) => (
          <li key={e.company + e.period} className="relative">
            <span aria-hidden="true" className="absolute -left-[1.9rem] top-2 h-2.5 w-2.5 rounded-full bg-accent sm:-left-[2.9rem]" />
            <h3 className="font-display text-xl font-bold">{e.role}</h3>
            <p className="mt-1 font-semibold">{e.company}</p>
            <p className="mt-1 flex flex-wrap gap-x-4 text-sm text-muted">
              <span>{e.period}</span>
              <span>{e.location}</span>
            </p>
            <ul className="mt-4 max-w-prose list-disc space-y-2 pl-5">
              {e.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used at ${e.company}`}>
              {e.technologies.map((t) => (
                <li key={t} className="badge">{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
