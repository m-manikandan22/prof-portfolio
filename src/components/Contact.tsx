import { profile } from "@/data/profile";
import ContactForm from "./ContactForm";
import ExternalLink from "./ExternalLink";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" intro="Open to internships, graduate roles and entry-level AI/ML opportunities. Send a message or reach out directly.">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <address className="space-y-4 not-italic">
          <p className="font-display text-xl font-bold">{profile.name}</p>
          <p className="text-muted">{profile.location}</p>
          <ul className="space-y-2">
            <li><a href={`mailto:${profile.email}`} className="link">{profile.email}</a></li>
            <li><ExternalLink href={profile.linkedin} className="link">LinkedIn</ExternalLink></li>
            <li><ExternalLink href={profile.github} className="link">GitHub</ExternalLink></li>
          </ul>
        </address>
        <ContactForm />
      </div>
    </Section>
  );
}
