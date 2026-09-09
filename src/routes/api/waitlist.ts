import { createFileRoute } from "@tanstack/react-router";
import { readFile, writeFile } from "node:fs/promises";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SELLER_FILE = "/home/team/shared/waitlist.json";
const BUYER_FILE = "/home/team/shared/buyer-list.json";

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

async function countJsonFile(file: string) {
  try {
    const raw = await readFile(file, "utf-8");
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.length;
    return 0;
  } catch {
    return 0;
  }
}

export const Route = createFileRoute("/api/waitlist")({
  server: {
    handlers: {
      GET: async () => {
        const [sellers, buyers] = await Promise.all([
          countJsonFile(SELLER_FILE),
          countJsonFile(BUYER_FILE),
        ]);
        return Response.json({ sellers, buyers });
      },
      POST: async ({ request }: { request: Request }) => {
        try {
          const body = (await request.json()) as {
            name?: unknown;
            email?: unknown;
            type?: unknown;
            sellerType?: unknown;
            description?: unknown;
            interest?: unknown;
            styleInterest?: unknown;
          };

          const rawType =
            typeof body.type === "string" ? body.type.trim().toLowerCase() : "";
          const type: "buyer" | "seller" =
            rawType === "buyer" ? "buyer" : "seller";

          const name = typeof body.name === "string" ? body.name.trim() : "";
          const email = typeof body.email === "string" ? body.email.trim() : "";

          if (!EMAIL_RE.test(email)) {
            return Response.json(
              { ok: false, error: "A valid email is required." },
              { status: 400 },
            );
          }

          if (type === "buyer") {
            const interestRaw =
              typeof body.interest === "string"
                ? body.interest
                : typeof body.styleInterest === "string"
                  ? body.styleInterest
                  : "";
            const interest = interestRaw.trim();
            const entry = {
              type: "buyer",
              name,
              email,
              interest,
              createdAt: new Date().toISOString(),
            };
            await appendToJsonFile(BUYER_FILE, entry);
            return Response.json({ ok: true });
          }

          // Seller (default, backward-compat): name + email required.
          const sellerType =
            typeof body.sellerType === "string" ? body.sellerType.trim() : "";
          const description =
            typeof body.description === "string" ? body.description.trim() : "";

          if (!name) {
            return Response.json(
              { ok: false, error: "Name and a valid email are required." },
              { status: 400 },
            );
          }

          const entry = {
            name,
            email,
            sellerType,
            description,
            createdAt: new Date().toISOString(),
          };
          await appendToJsonFile(SELLER_FILE, entry);

          return Response.json({ ok: true });
        } catch (err) {
          console.error("waitlist POST failed", err);
          return Response.json(
            { ok: false, error: "Could not save entry." },
            { status: 500 },
          );
        }
      },
    },
  },
});
