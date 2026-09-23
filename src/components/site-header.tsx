import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { studio } from "@/lib/studio";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", hash: undefined as string | undefined, label: "Beranda" },
  { to: "/", hash: "profil", label: "Profil" },
  { to: "/", hash: "organisasi", label: "Organisasi" },
  { to: "/", hash: "layanan", label: "Layanan" },
  { to: "/estimasi", hash: undefined, label: "Estimasi Tarif" },
  { to: "/", hash: "kontak", label: "Kontak" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/92 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-3 text-fg no-underline">
          <LogoMark className="size-10" />
          <span className="leading-tight">
            <b className="block font-display text-base font-semibold">{studio.name}</b>
            <small className="block text-[11px] uppercase tracking-[0.14em] text-muted">
              {studio.motto}
            </small>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active =
              l.to === "/estimasi"
                ? pathname.startsWith("/estimasi")
                : pathname === "/" && !l.hash;
            return (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted no-underline transition-colors hover:text-fg",
                  active && "bg-primary/8 font-medium text-fg",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/estimasi" className="hidden sm:block">
            <Button size="sm">Buka estimasi</Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-line bg-surface px-4 py-3 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-fg no-underline hover:bg-primary/8"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
