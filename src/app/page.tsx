import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { ExternalLink, Section, TagList } from "@/components/ui";
import {
  awards,
  education,
  experience,
  profile,
  projects,
  publications,
  skills,
} from "@/content/profile";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "~40%", label: "less production log volume" },
  { value: "60s → 5s", label: "member page load fix" },
  { value: "64", label: "events migrated to Kafka" },
  { value: "4", label: "teams shipped with" },
];

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
          <dl className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse rounded-lg border border-border bg-surface p-4">
                <dt className="mt-1 text-xs text-muted">{s.label}</dt>
                <dd className="text-2xl font-semibold text-accent">{s.value}</dd>
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
          <ol className="space-y-16">
            {experience.map((role) => (
              <li key={`${role.company}-${role.title}`} className="relative border-l border-border pl-6">
                <span className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-accent" aria-hidden />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {role.title} <span className="text-muted">· {role.company}</span>
                  </h3>
                  <p className="font-mono text-xs text-muted">
                    {role.period} · {role.location}
                  </p>
                </div>
                <p className="mt-3 max-w-3xl text-muted">{role.summary}</p>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {role.highlights.map((h) => (
                    <article key={h.title} className="flex flex-col rounded-lg border border-border bg-surface p-5">
                      <h4 className="font-medium">{h.title}</h4>
                      <ul className="mt-3 flex-1 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted marker:text-accent">
                        {h.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <TagList tags={h.tags} />
                      </div>
                    </article>
                  ))}
                </div>
              </li>
            ))}
          </ol>
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
