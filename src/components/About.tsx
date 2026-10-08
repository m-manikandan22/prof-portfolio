import { profile } from "@/data/profile";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="max-w-prose space-y-4">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="space-y-6 text-sm">
          <div>
            <dt className="font-semibold">Working style</dt>
            <dd className="mt-1 text-muted">{profile.strengths.join(", ")}</dd>
          </div>
          <div>
            <dt className="font-semibold">Languages</dt>
            <dd className="mt-1 text-muted">{profile.languages.join(", ")}</dd>
          </div>
          <div>
            <dt className="font-semibold">Leadership</dt>
            <dd className="mt-1 space-y-1 text-muted">
              {profile.activities.map((a) => (
                <p key={a}>{a}</p>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
