import { studio } from "@/lib/studio";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-primary-fg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {studio.name} · {studio.motto}
        </div>
        <div className="text-primary-fg/70">
          {studio.email} · {studio.phone}
        </div>
      </div>
    </footer>
  );
}
