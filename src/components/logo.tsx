import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("shrink-0", className)} aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="currentColor" className="text-primary" />
      <text
        x="32"
        y="38"
        textAnchor="middle"
        fill="#f6f1e6"
        fontFamily="Fraunces, serif"
        fontSize="20"
        fontWeight="600"
      >
        88
      </text>
    </svg>
  );
}
