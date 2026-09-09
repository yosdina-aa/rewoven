import { createFileRoute } from "@tanstack/react-router";
import { readFile, writeFile } from "node:fs/promises";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUESTS_FILE = "/home/team/shared/requests.json";

async function appendToJsonFile(file: string, entry: Record<string, unknown>) {
  let list: unknown[] = [];
  try {
    const raw = await readFile(file, "utf-8");
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) list = parsed;
  } catch {
    list = [];
  }
  list.push(entry);
  await writeFile(file, JSON.stringify(list, null, 2) + "\n", "utf-8");
}

export const Route = createFileRoute("/api/requests")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        try {
          const body = (await request.json()) as {
            piece?: unknown;
            name?: unknown;
            email?: unknown;
            message?: unknown;
          };

          const piece = typeof body.piece === "string" ? body.piece.trim() : "";
          const name = typeof body.name === "string" ? body.name.trim() : "";
          const email = typeof body.email === "string" ? body.email.trim() : "";
          const message =
            typeof body.message === "string" ? body.message.trim() : "";

          if (!piece) {
            return Response.json(
              { ok: false, error: "A piece is required." },
              { status: 400 },
            );
          }
          if (!EMAIL_RE.test(email)) {
            return Response.json(
              { ok: false, error: "A valid email is required." },
              { status: 400 },
            );
          }

          const entry = {
            piece,
            name,
            email,
            message,
            createdAt: new Date().toISOString(),
          };
          await appendToJsonFile(REQUESTS_FILE, entry);

          return Response.json({ ok: true });
        } catch (err) {
          console.error("requests POST failed", err);
          return Response.json(
            { ok: false, error: "Could not save request." },
            { status: 500 },
          );
        }
      },
    },
  },
});
