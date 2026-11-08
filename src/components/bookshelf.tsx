import type { Book } from "@/content/profile";

// How many books to show before collapsing the rest behind "Show all".
const VISIBLE_BOOKS = 6;

function BookRow({ book }: { book: Book }) {
  return (
    <li className="flex items-center justify-between gap-4 py-3">
      <div className="min-w-0">
        <p className="truncate font-medium">
          {book.title}
          {book.original && (
            <span lang="kn" className="ml-2 text-sm font-normal text-muted">
              {book.original}
            </span>
          )}
        </p>
        <p className="text-sm text-muted">{book.author}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {book.status === "reading" && (
          <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-xs text-accent">
            Reading now
          </span>
        )}
        <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted">
          {book.language}
        </span>
      </div>
    </li>
  );
}

export function Bookshelf({ books }: { books: Book[] }) {
  // Currently-reading first, otherwise keep the authored order (newest first).
  const sorted = [...books].sort(
    (a, b) => Number(b.status === "reading") - Number(a.status === "reading"),
  );
  const visible = sorted.slice(0, VISIBLE_BOOKS);
  const hidden = sorted.slice(VISIBLE_BOOKS);
  const readCount = books.filter((b) => b.status === "read").length;

  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium">📚 Bookshelf</h3>
        <p className="font-mono text-xs text-muted">{readCount} read · growing</p>
      </div>
      <ul className="mt-2 divide-y divide-border">
        {visible.map((b) => (
          <BookRow key={b.title} book={b} />
        ))}
      </ul>
      {hidden.length > 0 && (
        <details className="group">
          <summary className="mt-2 inline-flex cursor-pointer list-none items-center gap-2 text-sm text-muted select-none hover:text-fg [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Show all {sorted.length} books</span>
            <span className="hidden group-open:inline">Show less</span>
            <span aria-hidden className="transition group-open:rotate-180">
              ▾
            </span>
          </summary>
          <ul className="divide-y divide-border">
            {hidden.map((b) => (
              <BookRow key={b.title} book={b} />
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
