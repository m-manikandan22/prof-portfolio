"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";
import ExternalLink from "./ExternalLink";
import Section from "./Section";

function Tags({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((t) => (
        <li key={t} className="badge">{t}</li>
      ))}
    </ul>
  );
}

function Detail({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display font-semibold">{title}</h4>
      <div className="mt-1 text-muted">{children}</div>
    </div>
  );
}

function ProjectLinks({ p }: { p: Project }) {
  if (!p.githubUrl && !p.demoUrl) return null;
  return (
    <div className="flex flex-wrap gap-3">
      {p.githubUrl && (
        <ExternalLink href={p.githubUrl} className="btn btn-ghost">GitHub</ExternalLink>
      )}
      {p.demoUrl && (
        <ExternalLink href={p.demoUrl} className="btn btn-primary">Live demo</ExternalLink>
      )}
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (active && !d.open) {
      d.showModal();
      document.documentElement.style.overflow = "hidden";
    }
    if (!active) {
      if (d.open) d.close();
      document.documentElement.style.overflow = "";
      opener.current?.focus();
    }
  }, [active]);

  return (
    <Section id="projects" title="Featured projects" intro="Applied ML and deep learning projects, from model building to deployment.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug} className="flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent sm:p-8">
            <p className="text-sm text-muted">{p.category}</p>
            <h3 className="mt-2 font-display text-2xl font-bold leading-snug">{p.title}</h3>
            <p className="mt-3">{p.summary}</p>
            <div className="mt-5 space-y-4">
              <Tags items={p.technologies} label="Technologies" />
              <p className="text-sm text-muted">
                <span className="font-semibold text-fg">Key concepts: </span>
                {p.concepts.join(", ")}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={(e) => {
                  opener.current = e.currentTarget;
                  setActive(p);
                }}
                className="btn btn-primary"
              >
                View details<span className="sr-only">: {p.title}</span>
              </button>
              <ProjectLinks p={p} />
            </div>
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && setActive(null)}
        className="m-auto max-h-[88vh] w-[min(92vw,44rem)] overflow-y-auto rounded-xl border border-line bg-surface p-0 text-fg backdrop:bg-black/60"
      >
        {active && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-muted">{active.category}</p>
                <h3 id="project-dialog-title" className="mt-1 font-display text-2xl font-bold leading-snug">
                  {active.title}
                </h3>
              </div>
              <button type="button" onClick={() => setActive(null)} className="btn btn-ghost shrink-0">
                Close
              </button>
            </div>
            <div className="mt-6 space-y-5">
              <Detail title="Problem">{active.problem}</Detail>
              <Detail title="Approach">{active.solution}</Detail>
              <Detail title="Technology"><Tags items={active.technologies} label="Technologies" /></Detail>
              <Detail title="My contribution">{active.contribution}</Detail>
              <Detail title="Key technical concepts"><Tags items={active.concepts} label="Key concepts" /></Detail>
              {active.result && <Detail title="Result">{active.result}</Detail>}
              {active.futureImprovements && <Detail title="Future improvements">{active.futureImprovements}</Detail>}
            </div>
            <div className="mt-6"><ProjectLinks p={active} /></div>
          </div>
        )}
      </dialog>
    </Section>
  );
}
