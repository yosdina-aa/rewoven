import { createFileRoute } from "@tanstack/react-router";
import { readFile } from "node:fs/promises";

const SELLER_FILE = "/home/team/shared/waitlist.json";
const BUYER_FILE = "/home/team/shared/buyer-list.json";
const REQUESTS_FILE = "/home/team/shared/requests.json";

async function readJsonArray(file: string): Promise<Record<string, unknown>[]> {
  try {
    const raw = await readFile(file, "utf-8");
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as Record<string, unknown>[];
    return [];
  } catch {
    return [];
  }
}

export const Route = createFileRoute("/api/admin-data")({
  server: {
    handlers: {
      GET: async () => {
        const [sellers, buyers, requests] = await Promise.all([
          readJsonArray(SELLER_FILE),
          readJsonArray(BUYER_FILE),
          readJsonArray(REQUESTS_FILE),
        ]);
        return Response.json({ sellers, buyers, requests });
      },
    },
  },
});
