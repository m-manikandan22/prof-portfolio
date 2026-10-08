import { profile } from "@/data/profile";
import ExternalLink from "./ExternalLink";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-8">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <p className="flex gap-5">
          <ExternalLink href={profile.github} className="hover:text-fg">GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin} className="hover:text-fg">LinkedIn</ExternalLink>
          <a href={`mailto:${profile.email}`} className="hover:text-fg">Email</a>
        </p>
      </div>
    </footer>
  );
}
