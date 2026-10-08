import Reveal from "./Reveal";

type Props = { id: string; title: string; intro?: string; children: React.ReactNode };

export default function Section({ id, title, intro, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 id={`${id}-title`} className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
          <div className="mt-10">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
