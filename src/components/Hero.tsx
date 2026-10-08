import Image from "next/image";
import { profile } from "@/data/profile";
import ExternalLink from "./ExternalLink";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <p className="text-muted">{profile.title}</p>
          <h1 id="hero-title" className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{profile.intro}</p>
          <p className="mt-3 max-w-xl text-fg">{profile.seeking}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href={profile.resume} download="Manikandan_M_Resume.pdf" className="btn btn-ghost">Download Resume</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
          <p className="mt-4 text-sm text-muted">
            <ExternalLink href={profile.github} className="link">GitHub</ExternalLink>
            <span aria-hidden="true">&nbsp;&nbsp;</span>
            <ExternalLink href={profile.linkedin} className="link">LinkedIn</ExternalLink>
          </p>

          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
            {profile.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="mt-0.5 font-semibold leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="portrait-in order-first mx-auto w-full max-w-[220px] sm:max-w-xs lg:order-last lg:mr-0 lg:max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <Image
              src="/images/manikandan.webp"
              alt={profile.photoAlt}
              width={800}
              height={800}
              priority
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 220px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
