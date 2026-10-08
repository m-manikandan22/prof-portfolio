import { achievements } from "@/data/achievements";
import Section from "./Section";

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <ul className="divide-y divide-line border-y border-line">
        {achievements.map((a) => (
          <li key={a.title} className="grid gap-1 py-5 sm:grid-cols-[6rem_1fr] sm:gap-8">
            <span className="text-sm text-muted sm:pt-1">{a.year ?? ""}</span>
            <div>
              <p className="font-display text-lg font-semibold">{a.title}</p>
              <p className="text-muted">{a.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
