import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PrintButton } from "@/components/print-button";
import {
  education,
  experience,
  profile,
  projects,
  publications,
  resumeBullets,
  skills,
} from "@/content/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name}, ${profile.role}.`,
};

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-5 mb-2 border-b border-zinc-300 pb-0.5 text-[11px] font-bold tracking-widest text-teal-700 uppercase">
      {children}
    </h2>
  );
}

const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function ResumePage() {
  return (
    // Always light, regardless of site theme — this page is meant to be printed.
    <div className="min-h-screen bg-zinc-100 py-8 print:bg-white print:py-0">
      <div className="mx-auto mb-4 flex max-w-[210mm] items-center justify-between px-2 print:hidden">
        <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">
          ← Back to site
        </Link>
        <PrintButton />
      </div>

      <article className="mx-auto max-w-[210mm] bg-white px-[14mm] py-[12mm] text-[10.5px] leading-snug text-zinc-900 shadow-sm print:max-w-none print:p-0 print:shadow-none">
        <header className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">{profile.name.toUpperCase()}</h1>
          <p className="mt-1 text-zinc-700">
            {profile.location} · <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{" "}
            <a href={profile.links.linkedin}>{strip(profile.links.linkedin)}</a> ·{" "}
            <a href={profile.links.github}>{strip(profile.links.github)}</a>
            {profile.links.medium && (
              <>
                {" · "}
                <a href={profile.links.medium}>{strip(profile.links.medium)}</a>
              </>
            )}
          </p>
        </header>

        <Heading>Experience</Heading>
        {experience.map((co) => (
          <section key={co.company} className="mb-3">
            <div className="flex justify-between gap-4">
              <p>
                <strong>{co.company}</strong> <span className="text-zinc-600">· {co.location}</span>
              </p>
              <p className="shrink-0 font-semibold">{co.period}</p>
            </div>
            {co.resumeContext && <p className="text-zinc-600 italic">{co.resumeContext}</p>}
            {co.roles.map((role) => (
              <div key={role.title} className="mt-1.5 break-inside-avoid-page">
                {/* Single-role entries already show the period on the company line. */}
                <div className="flex justify-between gap-4">
                  <p>
                    <em className="font-semibold">{role.title}</em>
                  </p>
                  {co.roles.length > 1 && <p className="shrink-0 text-zinc-600">{role.period}</p>}
                </div>
                <ul className="mt-0.5 list-disc space-y-0.5 pl-4">
                  {(resumeBullets[role.title] ?? []).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}

        <Heading>Publication</Heading>
        {publications.map((p) => (
          <p key={p.title}>
            <strong>{p.title}</strong>. {p.authors}. <em>{p.venue}</em>, {p.year}.{" "}
            <a href={p.url} className="text-teal-700">
              {strip(p.url)}
            </a>
          </p>
        ))}

        <Heading>Projects</Heading>
        {projects.slice(0, 3).map((p) => (
          <section key={p.name} className="mb-1.5 break-inside-avoid">
            <div className="flex justify-between gap-4">
              <p>
                <strong>{p.name}</strong> <span className="text-zinc-600">· {p.tags.join(", ")}</span>
              </p>
              <p className="shrink-0 font-semibold">{p.period}</p>
            </div>
            <ul className="mt-0.5 list-disc space-y-0.5 pl-4">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </section>
        ))}

        <Heading>Skills</Heading>
        <dl className="space-y-0.5">
          {skills.map((s) => (
            <div key={s.group} className="flex gap-1">
              <dt className="shrink-0 font-semibold">{s.group}:</dt>
              <dd>{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>

        <Heading>Education</Heading>
        <div className="flex justify-between gap-4">
          <p>
            <strong>{education.school}</strong> — {education.degree} · GPA {education.gpa}
          </p>
          <p className="shrink-0 font-semibold">{education.period}</p>
        </div>
      </article>
    </div>
  );
}
