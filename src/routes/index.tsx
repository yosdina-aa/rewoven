import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

const PIECES = [
  {
    id: "patchwork-story-jacket",
    img: "/images/piece-1.png",
    name: "Patchwork Story Jacket",
    price: "$86",
    seller: "Remade by Loop & Thread",
    desc: "One-of-a-kind trucker jacket re-cut from three thrifted denim jeans — mixed indigo panels, contrast stitching. Size M, chest 40\".",
  },
  {
    id: "shirt-to-summer-dress",
    img: "/images/piece-2.png",
    name: "Shirt-to-Summer Dress",
    price: "$64",
    seller: "Remade by Studio Clover",
    desc: "Breezy midi dress pieced from two vintage cotton shirts plus sage deadstock floral. Puff sleeves, side ties. Size S–M.",
  },
  {
    id: "deadstock-cargo-trousers",
    img: "/images/piece-3.png",
    name: "Deadstock Cargo Trousers",
    price: "$72",
    seller: "Remade by Offcut Atelier",
    desc: "Relaxed cargos in beige deadstock canvas with olive thrifted-chino panels. Six pockets, drawstring hem. Size 30–32 waist.",
  },
];

function Home() {
  return (
    <div className="min-h-dvh bg-[#faf7ef] font-sans text-[#2c3a2e]">
      <Header />
      <main>
        <Hero />
        <WhatIs />
        <HowSelling />
        <BrandSafety />
        <Pieces />
        <BuyerFaq />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#e3dac4] bg-[#faf7ef]/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3f6212] text-lg text-[#faf7ef]">
            ♻
          </span>
          <span className="text-xl font-extrabold tracking-tight text-[#2c3a2e]">
            Rewoven
          </span>
        </a>
        <nav className="hidden items-center gap-5 text-sm font-medium sm:flex">
          <a href="#what" className="hover:text-[#3f6212]">What it is</a>
          <a href="#selling" className="hover:text-[#3f6212]">Selling</a>
          <a href="#rules" className="hover:text-[#3f6212]">What you can sell</a>
          <a href="#pieces" className="hover:text-[#3f6212]">Pieces</a>
          <a href="#faq" className="hover:text-[#3f6212]">FAQ</a>
        </nav>
        <a
          href="#waitlist"
          className="rounded-full bg-[#3f6212] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2f4d0d]"
        >
          Join seller waitlist
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-[#e3dac4] bg-[#eef3e2]">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-14 sm:py-20 md:grid-cols-2">
        <div>
          <p className="mb-3 inline-block rounded-full bg-[#dce8c8] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#3f6212]">
            Upcycled fashion marketplace
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Rewoven
          </h1>
          <p className="mt-3 text-lg font-medium text-[#4b5d4c]">
            One-of-a-kind reworked clothes, made by independent upcyclers — not
            fast fashion.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#5d6f5e]">
            Thrift tailors, upcyclers and designers list unique reworked pieces;
            shoppers buy something nobody else owns. Rewoven takes a small
            commission on each sale.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#waitlist"
              className="rounded-full bg-[#3f6212] px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-[#2f4d0d]"
            >
              Sell on Rewoven
            </a>
            <a
              href="#pieces"
              className="rounded-full border-2 border-[#3f6212] px-6 py-3 text-sm font-bold text-[#3f6212] transition hover:bg-[#dce8c8]"
            >
              Shop the idea
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src="/images/piece-1.png"
            alt="Upcycled patchwork denim jacket"
            className="h-80 w-full object-cover"
          />
          <div className="bg-white px-5 py-4 text-sm">
            <p className="font-bold">Every piece is one of one.</p>
            <p className="text-[#5d6f5e]">
              Reworked from thrift finds, vintage blanks &amp; deadstock — never
              mass-produced.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-5 py-12 sm:py-16">
      <p className="text-xs font-bold uppercase tracking-widest text-[#65a30d]">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function WhatIs() {
  return (
    <Section id="what" eyebrow="Marketplace" title="What is Rewoven?">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            t: "One-of-a-kind, always",
            d: "Every listing is a single reworked garment — a jacket, dress or pair of trousers that exists exactly once.",
          },
          {
            t: "Built for new sellers",
            d: "Upcyclers, thrift tailors and independent designers get a storefront without building their own shop. List in minutes.",
          },
          {
            t: "Circular by design",
            d: "Source material is secondhand or surplus: thrift finds, vintage blanks, deadstock fabrics — kept in use, kept out of landfill.",
          },
        ].map((c) => (
          <div
            key={c.t}
            className="rounded-2xl border border-[#e3dac4] bg-white p-5 shadow-sm"
          >
            <h3 className="font-bold">{c.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5d6f5e]">{c.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowSelling() {
  const steps = [
    {
      n: "1",
      t: "Join the waitlist",
      d: "Tell us who you are — upcycler, thrift tailor or designer — and what you make. We'll invite sellers in waves.",
    },
    {
      n: "2",
      t: "List one-of-a-kind pieces",
      d: "Photograph each reworked garment, describe its source materials and size, set your price. Every piece is unique.",
    },
    {
      n: "3",
      t: "Sell & get paid",
      d: "When a piece sells, Rewoven takes a 5%–15% commission depending on your plan, and you keep the rest. Payouts to your account.",
    },
  ];
  return (
    <Section id="selling" eyebrow="For sellers" title="How selling works">
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-2xl bg-[#3f6212] p-5 text-white shadow-sm"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg font-extrabold">
              {s.n}
            </span>
            <h3 className="mt-3 font-bold">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">{s.d}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 rounded-xl border border-[#e3dac4] bg-white px-4 py-3 text-sm">
        <strong>Commission:</strong> Rewoven earns{" "}
        <strong>5%–15% per sale</strong> — no listing fees while we're in early
        access. The exact rate depends on your seller plan and is shown before
        you list.
      </p>
    </Section>
  );
}

function BrandSafety() {
  const dos = [
    "Unbranded thrift finds, reworked into new silhouettes",
    "Vintage blanks & plain secondhand basics, cut and restyled",
    "Deadstock & surplus fabrics sewn into new garments",
    "Clearly independent work: your own label, your own photos",
  ];
  const donts = [
    "Don't sell branded garments as-is or with only minor tweaks (hemming, printing a logo on)",
    "Branded pieces ONLY if the silhouette is genuinely transformed — e.g. jeans → jacket, shirts → dress",
    "No prominent third-party logo as the main selling point — logos must go or stay hidden/incidental",
    "Never imply affiliation: every listing must read as independently reworked, not endorsed by any original brand",
  ];
  return (
    <Section
      id="rules"
      eyebrow="Brand-safety rules"
      title="What you can sell"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-5">
          <h3 className="font-extrabold text-[#166534]">✅ Do sell</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
            {dos.map((d) => (
              <li key={d} className="flex gap-2">
                <span aria-hidden>✓</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[#fecaca] bg-[#fef2f2] p-5">
          <h3 className="font-extrabold text-[#991b1b]">🚫 Don't sell</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
            {donts.map((d) => (
              <li key={d} className="flex gap-2">
                <span aria-hidden>✕</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-[#5d6f5e]">
        All pieces on Rewoven are independently reworked and are not affiliated
        with or endorsed by any original brand.
      </p>
    </Section>
  );
}

function Pieces() {
  return (
    <Section
      id="pieces"
      eyebrow="Example listings"
      title="Example one-of-a-kind pieces"
    >
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {PIECES.map((p) => (
          <PieceCard key={p.id} piece={p} />
        ))}
      </div>
      <p className="mt-4 text-xs text-[#5d6f5e]">
        Illustrative examples of the kind of reworked pieces sellers will list.
        All independently reworked; not affiliated with any original brand.
        To buy at launch, request a piece below and we'll follow up with payment
        and pickup details — no on-site checkout yet.
      </p>
    </Section>
  );
}

const REQUEST_EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function PieceCard({
  piece,
}: {
  piece: { id: string; img: string; name: string; price: string; seller: string; desc: string };
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!REQUEST_EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          piece: piece.id,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      const data = (await res.json()) as { ok?: boolean };
      if (!data.ok) throw new Error("Server did not confirm request");
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Something went wrong saving your request. Please try again.");
    }
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-[#e3dac4] bg-white shadow-sm transition hover:shadow-md">
      <img
        src={piece.img}
        alt={piece.name}
        className="h-64 w-full object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-bold">{piece.name}</h3>
          <span className="rounded-full bg-[#dce8c8] px-2.5 py-0.5 text-sm font-extrabold text-[#3f6212]">
            {piece.price}
          </span>
        </div>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#65a30d]">
          {piece.seller} · 1 of 1
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#5d6f5e]">
          {piece.desc}
        </p>
        {status === "done" ? (
          <div className="mt-3 rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] px-3 py-3 text-center">
            <p className="text-sm font-bold text-[#166534]">
              Request received — thanks!
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#5d6f5e]">
              We saved your interest in the {piece.name} and we'll follow up
              manually at {email.trim()} with next steps.
            </p>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-3 w-full rounded-full border-2 border-[#3f6212] px-4 py-2 text-sm font-bold text-[#3f6212] transition hover:bg-[#dce8c8]"
            >
              {open ? "Close request form" : "Request this piece"}
            </button>
            {open && (
              <form onSubmit={onSubmit} className="mt-3 grid gap-3 rounded-xl bg-[#faf7ef] p-3">
                <p className="text-xs text-[#5d6f5e]">
                  Requesting: <strong>{piece.name}</strong> — no payment now, we
                  follow up manually.
                </p>
                <label className="grid gap-1 text-sm">
                  <span className="font-bold">
                    Name <span className="font-normal">(optional)</span>
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Rivera"
                    className="rounded-xl border border-[#e3dac4] bg-white px-3 py-2 outline-none focus:border-[#3f6212] focus:ring-2 focus:ring-[#dce8c8]"
                  />
                </label>
                <label className="grid gap-1 text-sm">
                  <span className="font-bold">Email</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    type="email"
                    className="rounded-xl border border-[#e3dac4] bg-white px-3 py-2 outline-none focus:border-[#3f6212] focus:ring-2 focus:ring-[#dce8c8]"
                  />
                </label>
                <label className="grid gap-1 text-sm">
                  <span className="font-bold">
                    Message <span className="font-normal">(optional)</span>
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Is this still available in my size?"
                    rows={2}
                    className="rounded-xl border border-[#e3dac4] bg-white px-3 py-2 outline-none focus:border-[#3f6212] focus:ring-2 focus:ring-[#dce8c8]"
                  />
                </label>
                {error && (
                  <p role="alert" className="text-sm font-medium text-red-700">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-[#3f6212] px-4 py-2 text-sm font-bold text-white shadow transition hover:bg-[#2f4d0d] disabled:opacity-60"
                >
                  {status === "sending" ? "Sending request…" : "Send request"}
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </article>
  );
}

const BUYER_FAQS = [
  {
    q: "Are pieces really one-of-a-kind?",
    a: "Yes. Every listing is a single reworked garment, so once it sells it is gone for good.",
  },
  {
    q: "How do I know my size?",
    a: "Each listing shows measured dimensions (like chest or waist) alongside the approximate size, since reworked garments vary.",
  },
  {
    q: "What about returns on one-of-a-kind items?",
    a: "Each seller sets their own return terms, shown on the listing — please check them before you buy, since replacements aren't possible.",
  },
  {
    q: "How do I pay?",
    a: "At launch there is no on-site checkout: use the \"Request this piece\" button on a listing and we'll follow up manually so you can arrange direct payment with the seller. PayPal support is planned but not available yet.",
  },
  {
    q: "When does the marketplace launch?",
    a: "We're opening in waves and will email the waitlist as soon as seller and buyer invites go out.",
  },
];

function BuyerFaq() {
  return (
    <Section id="faq" eyebrow="Buyer FAQ" title="Questions from shoppers">
      <div className="grid gap-3">
        {BUYER_FAQS.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-[#e3dac4] bg-white px-5 py-4 shadow-sm"
          >
            <summary className="cursor-pointer list-none font-bold marker:hidden [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-3">
                {f.q}
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dce8c8] text-sm font-extrabold text-[#3f6212] transition group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-[#5d6f5e]">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function SignupCounts() {
  const [counts, setCounts] = useState<{ sellers: number; buyers: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/waitlist")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data) return;
        const sellers = Number(data.sellers);
        const buyers = Number(data.buyers);
        if (Number.isFinite(sellers) && Number.isFinite(buyers)) {
          setCounts({ sellers: Math.max(0, sellers), buyers: Math.max(0, buyers) });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!counts) return null;
  const { sellers, buyers } = counts;
  const text =
    sellers === 0 && buyers === 0
      ? "Be the first on the list — join as a seller or a buyer below."
      : `Join ${sellers} ${sellers === 1 ? "seller" : "sellers"} and ${buyers} ${buyers === 1 ? "buyer" : "buyers"} already on the list.`;
  return (
    <p aria-live="polite" className="mt-3 inline-block rounded-full bg-[#dce8c8] px-4 py-1.5 text-sm font-semibold text-[#3f6212]">
      {text}
    </p>
  );
}

function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sellerType, setSellerType] = useState("upcycler");
  const [about, setAbout] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!valid) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          sellerType,
          description: about.trim(),
        }),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Something went wrong saving your spot. Please try again.");
    }
  }

  return (
    <section id="waitlist" className="border-t border-[#e3dac4] bg-[#eef3e2]">
      <div className="mx-auto max-w-5xl scroll-mt-20 px-5 py-12 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#65a30d]">
          Early access
        </p>
        <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
          Get first dibs — sell or shop
        </h2>
        <p className="mt-2 max-w-xl text-sm text-[#5d6f5e]">
          Sellers: join the waitlist and we'll email your invite. Shoppers: get
          notified as a buyer when one-of-a-kind pieces drop.
        </p>
        <SignupCounts />
        <div className="mt-6 grid items-start gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-extrabold">Join the seller waitlist</h3>
            <p className="mt-1 text-sm text-[#5d6f5e]">
              We're onboarding upcyclers, thrift tailors and designers in
              waves. Tell us about your work and we'll email you when your
              invite is ready.
            </p>
        {status === "done" ? (
          <div className="mt-4 rounded-2xl border border-[#bbf7d0] bg-white p-6 text-center shadow-sm">
            <p className="text-3xl">🌱</p>
            <p className="mt-2 text-lg font-extrabold text-[#3f6212]">
              You're on the list!
            </p>
            <p className="mt-1 text-sm text-[#5d6f5e]">
              Thanks, {name.trim()} — we'll email {email.trim()} when seller
              invites open. Happy reworking!
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-4 grid gap-4 rounded-2xl border border-[#e3dac4] bg-white p-5 shadow-sm sm:p-6"
          >
            <label className="grid gap-1 text-sm">
              <span className="font-bold">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jordan Ellis"
                className="rounded-xl border border-[#e3dac4] bg-[#faf7ef] px-3 py-2 outline-none focus:border-[#3f6212] focus:ring-2 focus:ring-[#dce8c8]"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-bold">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@studio.com"
                type="email"
                className="rounded-xl border border-[#e3dac4] bg-[#faf7ef] px-3 py-2 outline-none focus:border-[#3f6212] focus:ring-2 focus:ring-[#dce8c8]"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-bold">I am a…</span>
              <select
                value={sellerType}
                onChange={(e) => setSellerType(e.target.value)}
                className="rounded-xl border border-[#e3dac4] bg-[#faf7ef] px-3 py-2 outline-none focus:border-[#3f6212] focus:ring-2 focus:ring-[#dce8c8]"
              >
                <option value="upcycler">Upcycler</option>
                <option value="thrift tailor">Thrift tailor</option>
                <option value="designer">Designer</option>
              </select>
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-bold">
                What do you make? <span className="font-normal">(optional)</span>
              </span>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="e.g. I turn thrifted denim into patchwork jackets…"
                rows={3}
                className="rounded-xl border border-[#e3dac4] bg-[#faf7ef] px-3 py-2 outline-none focus:border-[#3f6212] focus:ring-2 focus:ring-[#dce8c8]"
              />
            </label>
            {error && (
              <p role="alert" className="text-sm font-medium text-red-700">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-[#3f6212] px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-[#2f4d0d] disabled:opacity-60"
            >
              {status === "sending" ? "Saving your spot…" : "Join the waitlist"}
            </button>
          </form>
        )}
          </div>
          <BuyerSignup />
        </div>
      </div>
    </section>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STYLE_INTERESTS = [
  "Jackets & outerwear",
  "Dresses",
  "Tailoring & trousers",
  "Deadstock pieces",
  "Everything — surprise me",
];

function BuyerSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(STYLE_INTERESTS[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "buyer",
          name: name.trim(),
          email: email.trim(),
          interest,
        }),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      const data = (await res.json()) as { ok?: boolean };
      if (!data.ok) throw new Error("Server did not confirm signup");
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Something went wrong saving your signup. Please try again.");
    }
  }

  return (
    <div>
      <h3 className="text-lg font-extrabold">Get notified as a buyer</h3>
      <p className="mt-1 text-sm text-[#5d6f5e]">
        Buyer updates: be first to hear when the marketplace opens and fresh
        one-of-a-kind pieces drop.
      </p>
      {status === "done" ? (
        <div className="mt-4 rounded-2xl border border-[#bbf7d0] bg-white p-6 text-center shadow-sm">
          <p className="text-3xl">💌</p>
          <p className="mt-2 text-lg font-extrabold text-[#3f6212]">
            You're on the buyer list!
          </p>
          <p className="mt-1 text-sm text-[#5d6f5e]">
            We'll email {email.trim()} when new pieces drop. Happy hunting!
          </p>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mt-4 grid gap-4 rounded-2xl border border-[#e3dac4] bg-white p-5 shadow-sm sm:p-6"
        >
          <label className="grid gap-1 text-sm">
            <span className="font-bold">
              Name <span className="font-normal">(optional)</span>
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex Rivera"
              className="rounded-xl border border-[#e3dac4] bg-[#faf7ef] px-3 py-2 outline-none focus:border-[#3f6212] focus:ring-2 focus:ring-[#dce8c8]"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-bold">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              type="email"
              className="rounded-xl border border-[#e3dac4] bg-[#faf7ef] px-3 py-2 outline-none focus:border-[#3f6212] focus:ring-2 focus:ring-[#dce8c8]"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-bold">
              Style interest <span className="font-normal">(optional)</span>
            </span>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="rounded-xl border border-[#e3dac4] bg-[#faf7ef] px-3 py-2 outline-none focus:border-[#3f6212] focus:ring-2 focus:ring-[#dce8c8]"
            >
              {STYLE_INTERESTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          {error && (
            <p role="alert" className="text-sm font-medium text-red-700">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-[#3f6212] px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-[#2f4d0d] disabled:opacity-60"
          >
            {status === "sending" ? "Signing you up…" : "Notify me as a buyer"}
          </button>
        </form>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2c3a2e] text-[#e9e4d4]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 py-8 text-center">
        <p className="text-lg font-extrabold">Rewoven</p>
        <p className="max-w-xl text-xs leading-relaxed text-[#c9c4ae]">
          All pieces on Rewoven are independently reworked; not affiliated with
          or endorsed by any original brand.
        </p>
        <p className="text-xs text-[#a8a38c]">
          © 2026 Rewoven · Sustainable fashion, rewoven.
        </p>
      </div>
    </footer>
  );
}
