import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/admin")({
  component: Admin,
});

type Entry = Record<string, string | undefined>;

interface AdminData {
  sellers: Entry[];
  buyers: Entry[];
  requests: Entry[];
}

function fmtDate(v: string | undefined) {
  if (!v) return "—";
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return v;
  return d.toLocaleString();
}

function Admin() {
  const [data, setData] = useState<AdminData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin-data")
      .then(async (r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return (await r.json()) as AdminData;
      })
      .then(setData)
      .catch((e) => setError(e instanceof Error ? e.message : "Failed to load"));
  }, []);

  const sellers = data?.sellers ?? [];
  const buyers = data?.buyers ?? [];
  const requests = data?.requests ?? [];

  return (
    <div className="min-h-dvh bg-[#faf7ef] font-sans text-[#2c3a2e]">
      <header className="border-b border-[#e3dac4]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3f6212] text-lg text-[#faf7ef]">
              ♻
            </span>
            <span className="text-xl font-extrabold tracking-tight">
              Rewoven · Admin
            </span>
          </a>
          <a href="/" className="text-sm font-medium hover:text-[#3f6212]">
            ← Back to site
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-5xl space-y-10 px-5 py-8">
        <div>
          <h1 className="text-2xl font-extrabold">Waitlist &amp; requests overview</h1>
          <p className="mt-1 text-sm text-[#5b6b5d]">
            Owner-only view. Not linked from the public navigation.
          </p>
        </div>

        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            Could not load entries: {error}
          </p>
        )}
        {!data && !error && (
          <p className="text-sm text-[#5b6b5d]">Loading…</p>
        )}

        {data && (
          <>
            <Section
              title="Sellers"
              count={sellers.length}
              empty="No entries yet"
              head={["Name", "Email", "Type", "Description", "Date"]}
              rows={sellers.map((s) => [
                s.name ?? "—",
                s.email ?? "—",
                s.sellerType ?? "—",
                s.description ?? "—",
                fmtDate(s.createdAt),
              ])}
            />
            <Section
              title="Buyers"
              count={buyers.length}
              empty="No entries yet"
              head={["Name", "Email", "Interest", "Date"]}
              rows={buyers.map((b) => [
                b.name ?? "—",
                b.email ?? "—",
                b.interest ?? "—",
                fmtDate(b.createdAt),
              ])}
            />
            <Section
              title="Requests"
              count={requests.length}
              empty="No entries yet"
              head={["Piece", "Name", "Email", "Message", "Date"]}
              rows={requests.map((r) => [
                r.piece ?? "—",
                r.name ?? "—",
                r.email ?? "—",
                r.message ?? "—",
                fmtDate(r.createdAt),
              ])}
            />
          </>
        )}
      </main>
    </div>
  );
}

function Section({
  title,
  count,
  empty,
  head,
  rows,
}: {
  title: string;
  count: number;
  empty: string;
  head: string[];
  rows: string[][];
}) {
  return (
    <section className="rounded-2xl border border-[#e3dac4] bg-white/60 p-5">
      <h2 className="text-lg font-bold">
        {title}{" "}
        <span className="ml-1 rounded-full bg-[#3f6212] px-2.5 py-0.5 text-xs font-semibold text-white">
          {count}
        </span>
      </h2>
      {rows.length === 0 ? (
        <p className="mt-3 text-sm text-[#5b6b5d]">{empty}</p>
      ) : (
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-[#e3dac4] text-xs uppercase tracking-wide text-[#5b6b5d]">
                {head.map((h) => (
                  <th key={h} className="px-2 py-2 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-[#efe8d6] last:border-0">
                  {row.map((cell, j) => (
                    <td key={j} className="max-w-[260px] truncate px-2 py-2 align-top" title={cell}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
