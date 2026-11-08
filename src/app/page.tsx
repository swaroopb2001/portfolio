import Link from "next/link";
import { Bookshelf } from "@/components/bookshelf";
import { ThemeToggle } from "@/components/theme-toggle";
import { ExternalLink, Section, TagList } from "@/components/ui";
import {
  awards,
  beyondIntro,
  books,
  education,
  experience,
  interests,
  profile,
  projects,
  publications,
  skills,
  stats,
  writing,
  type Highlight,
} from "@/content/profile";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  ...(writing.length ? [{ href: "#writing", label: "Writing" }] : []),
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// Highlight cards shown per role before the "Show more" toggle.
const VISIBLE_HIGHLIGHTS = 4;

function BulletList({ points }: { points: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted marker:text-accent">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}

function HighlightCard({ h }: { h: Highlight }) {
  return (
    <section className="flex flex-col rounded-lg border border-border bg-surface p-5">
      <h5 className="font-medium">{h.title}</h5>
      <div className="mt-3 flex-1">
        <BulletList points={h.points} />
      </div>
      <div className="mt-4">
        <TagList tags={h.tags} />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a href="#top" className="font-mono text-sm font-semibold">
            swaroop<span className="text-accent">.dev</span>
          </a>
          <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-4">
            <ul className="hidden gap-5 text-sm text-muted md:flex">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition hover:text-fg">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/resume"
              className="rounded-md border border-border px-3 py-1.5 text-sm transition hover:border-accent hover:text-accent"
            >
              Resume
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <p className="font-mono text-sm text-accent">Hi, I&apos;m {profile.shortName} —</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            {profile.role}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
            >
              See my work
            </a>
            <ExternalLink
              href={profile.links.github}
              className="rounded-md border border-border px-4 py-2 text-sm transition hover:border-accent"
            >
              GitHub
            </ExternalLink>
            <ExternalLink
              href={profile.links.linkedin}
              className="rounded-md border border-border px-4 py-2 text-sm transition hover:border-accent"
            >
              LinkedIn
            </ExternalLink>
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group relative flex flex-col-reverse overflow-hidden rounded-xl border border-border bg-surface p-5 transition hover:border-accent/60"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-60"
                />
                <dt>
                  <span className="mt-2 block text-sm font-medium text-fg">{s.label}</span>
                  <span className="mt-1 block font-mono text-xs text-muted">{s.detail}</span>
                </dt>
                <dd className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <Section id="about" title="About">
          <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4 leading-relaxed text-muted">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <aside className="space-y-6 text-sm">
              <div>
                <h3 className="font-medium">Education</h3>
                <p className="mt-1 text-muted">{education.degree}</p>
                <p className="text-muted">
                  {education.school} · {education.period}
                </p>
              </div>
              <div>
                <h3 className="font-medium">Recognition</h3>
                <ul className="mt-1 space-y-1 text-muted">
                  {awards.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-20">
            {experience.map((co) => (
              <article key={co.company}>
                <header className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-semibold">
                    {co.url ? (
                      <ExternalLink href={co.url} className="hover:text-accent">
                        {co.company}
                      </ExternalLink>
                    ) : (
                      co.company
                    )}
                  </h3>
                  <p className="font-mono text-xs text-muted">
                    {co.period} · {co.location}
                  </p>
                </header>
                {co.context && (
                  <p className="mt-3 max-w-3xl leading-relaxed text-muted">{co.context}</p>
                )}

                {/* One continuous timeline line per company; each role gets a dot on it. */}
                <ol className="mt-10 space-y-12 border-l border-border">
                  {co.roles.map((role) => {
                    const visible = role.highlights.slice(0, VISIBLE_HIGHLIGHTS);
                    const hidden = role.highlights.slice(VISIBLE_HIGHLIGHTS);
                    const single = role.highlights.length === 1 ? role.highlights[0] : null;
                    return (
                      <li key={role.title} className="relative pl-6">
                        <span
                          className="absolute top-2 -left-1.25 size-2.5 rounded-full bg-accent ring-4 ring-bg"
                          aria-hidden
                        />
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h4 className="text-lg font-semibold">{role.title}</h4>
                          <p className="font-mono text-xs text-muted">{role.period}</p>
                        </div>
                        <p className="mt-2 max-w-3xl text-muted">{role.summary}</p>

                        {single ? (
                          // A lone "Highlights" group reads better as a plain list than a half-width card.
                          <div className="mt-4 max-w-3xl">
                            <BulletList points={single.points} />
                            <div className="mt-4">
                              <TagList tags={single.tags} />
                            </div>
                          </div>
                        ) : (
                          <div className="mt-6 grid gap-5 md:grid-cols-2">
                            {visible.map((h) => (
                              <HighlightCard key={h.title} h={h} />
                            ))}
                            {hidden.length > 0 && (
                              <details className="group md:col-span-2">
                                <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm text-muted transition select-none hover:border-accent hover:text-fg [&::-webkit-details-marker]:hidden">
                                  <span className="group-open:hidden">
                                    Show {hidden.length} more: {hidden.map((h) => h.title).join(", ")}
                                  </span>
                                  <span className="hidden group-open:inline">Show less</span>
                                  <span aria-hidden className="transition group-open:rotate-180">
                                    ▾
                                  </span>
                                </summary>
                                <div className="mt-5 grid gap-5 md:grid-cols-2">
                                  {hidden.map((h) => (
                                    <HighlightCard key={h.title} h={h} />
                                  ))}
                                </div>
                              </details>
                            )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </article>
            ))}
          </div>
        </Section>

        <Section id="research" title="Research">
          {publications.map((pub) => (
            <article key={pub.title} className="rounded-lg border border-border bg-surface p-6">
              <p className="font-mono text-xs text-accent">Publication · {pub.year}</p>
              <h3 className="mt-2 text-lg font-semibold">
                <ExternalLink href={pub.url} className="hover:text-accent">
                  {pub.title} ↗
                </ExternalLink>
              </h3>
              <p className="mt-1 text-sm text-muted">{pub.authors}</p>
              <p className="mt-1 text-sm text-muted italic">{pub.venue}</p>
              <p className="mt-4 leading-relaxed text-muted">{pub.summary}</p>
            </article>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.name} className="flex flex-col rounded-lg border border-border bg-surface p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-medium">
                    {p.link ? (
                      <ExternalLink href={p.link} className="hover:text-accent">
                        {p.name} ↗
                      </ExternalLink>
                    ) : (
                      p.name
                    )}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-muted">{p.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
                <ul className="mt-3 flex-1 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted marker:text-accent">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <TagList tags={p.tags} />
                </div>
              </article>
            ))}
          </div>
        </Section>

        {writing.length > 0 && (
          <Section id="writing" title="Writing">
            <ul className="grid gap-5 md:grid-cols-2">
              {writing.map((w) => (
                <li key={w.url}>
                  <ExternalLink
                    href={w.url}
                    className="block h-full rounded-lg border border-border bg-surface p-5 transition hover:border-accent"
                  >
                    <p className="font-mono text-xs text-accent">
                      {w.platform}
                      {w.date ? ` · ${w.date}` : ""}
                    </p>
                    <h3 className="mt-2 font-medium">{w.title} ↗</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{w.summary}</p>
                  </ExternalLink>
                </li>
              ))}
            </ul>
            {profile.links.medium && (
              <ExternalLink
                href={profile.links.medium}
                className="mt-6 inline-block text-sm text-muted hover:text-accent"
              >
                More on Medium ↗
              </ExternalLink>
            )}
          </Section>
        )}

        <Section id="skills" title="Skills">
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="font-medium">{s.group}</dt>
                <dd className="mt-3">
                  <TagList tags={s.items} />
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm text-muted">
            This site is built with the same stack I use at work: Next.js App Router, React Server
            Components, TypeScript and Tailwind CSS, deployed on Vercel.
          </p>
        </Section>

        <Section id="beyond" title="Beyond code">
          <p className="mb-8 max-w-3xl leading-relaxed text-muted">{beyondIntro}</p>
          <ul className="mb-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((i) => (
              <li key={i.title} className="rounded-lg border border-border bg-surface p-5">
                <p className="text-2xl" aria-hidden>
                  {i.emoji}
                </p>
                <h3 className="mt-3 font-medium">{i.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{i.text}</p>
              </li>
            ))}
          </ul>
          <Bookshelf books={books} />
        </Section>

        <Section id="contact" title="Contact">
          <h3 className="text-2xl font-semibold sm:text-3xl">Let&apos;s talk.</h3>
          <p className="mt-3 max-w-xl text-muted">
            Open to interesting engineering problems and conversations. The fastest way to reach me
            is email or LinkedIn.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
            >
              {profile.email}
            </a>
            <ExternalLink
              href={profile.links.linkedin}
              className="rounded-md border border-border px-4 py-2 text-sm transition hover:border-accent"
            >
              LinkedIn
            </ExternalLink>
            <ExternalLink
              href={profile.links.github}
              className="rounded-md border border-border px-4 py-2 text-sm transition hover:border-accent"
            >
              GitHub
            </ExternalLink>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted">
        © {profile.name} · Built with Next.js & Tailwind
      </footer>
    </>
  );
}
