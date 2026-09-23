import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function rupiah(n: number) {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

export function angka(n: number, digits = 1) {
  return n.toLocaleString("id-ID", { maximumFractionDigits: digits });
}
