import { certifications } from "@/data/certifications";
import ExternalLink from "./ExternalLink";
import Section from "./Section";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="grid gap-4 md:grid-cols-2">
        {certifications.map((c) => (
          <li key={c.name} className="rounded-xl border border-line bg-surface p-5">
            <p className="font-display text-lg font-semibold leading-snug">{c.name}</p>
            <p className="mt-1">{c.issuer}</p>
            <p className="mt-2 text-sm text-muted">
              {c.category}
              {c.note ? `. ${c.note}` : ""}
            </p>
            {c.credentialUrl && (
              <ExternalLink href={c.credentialUrl} className="link mt-3 inline-block text-sm">
                View credential
              </ExternalLink>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
