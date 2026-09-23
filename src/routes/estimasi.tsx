import { createFileRoute } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  contohPaket,
  defaultInput,
  HARGA,
  hitungRab,
  JENIS_FAKTOR,
  JENIS_LABEL,
  LAHAN,
  OHP_RATE,
  PERKERASAN_LABEL,
  PPN_RATE,
  type Drainase,
  type InputRab,
  type JenisPaket,
  type Perkerasan,
  wilayahOf,
  WILAYAH,
} from "@/lib/rab";
import { angka, rupiah } from "@/lib/utils";

export const Route = createFileRoute("/estimasi")({ component: EstimasiPage });

function EstimasiPage() {
  const [input, setInput] = useState<InputRab>(defaultInput);
  const [tab, setTab] = useState<"rab" | "cara" | "peta">("rab");
  const hasil = useMemo(() => hitungRab(input), [input]);
  const wilayah = wilayahOf(input.wilayahId);
  const query = input.lokasiPeta.trim() || wilayah.query;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=id&z=11&output=embed`;

  function set<K extends keyof InputRab>(key: K, value: InputRab[K]) {
    setInput((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-6 lg:grid-cols-[340px_minmax(0,1fr)]">
        <aside className="h-fit rounded-xl border border-line bg-surface p-5 lg:sticky lg:top-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ok">Input paket</p>
          <h1 className="font-display mt-1 text-2xl font-semibold">Estimasi tarif jalan</h1>
          <p className="mt-2 text-xs text-muted">
            Angka berubah langsung saat input diubah. Bukan AHSP resmi.
          </p>

          <Field label="Nama paket">
            <input
              className="field"
              value={input.nama}
              onChange={(e) => set("nama", e.target.value)}
            />
          </Field>
          <Field label="Jenis pekerjaan">
            <select
              className="field"
              value={input.jenis}
              onChange={(e) => set("jenis", e.target.value as JenisPaket)}
            >
              {(Object.keys(JENIS_LABEL) as JenisPaket[]).map((k) => (
                <option key={k} value={k}>
                  {JENIS_LABEL[k]} ({JENIS_FAKTOR[k]})
                </option>
              ))}
            </select>
          </Field>
          <Field label="Jenis perkerasan">
            <select
              className="field"
              value={input.perkerasan}
              onChange={(e) => set("perkerasan", e.target.value as Perkerasan)}
            >
              {(Object.keys(PERKERASAN_LABEL) as Perkerasan[]).map((k) => (
                <option key={k} value={k}>
                  {PERKERASAN_LABEL[k]}
                </option>
              ))}
            </select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Panjang (m)">
              <input
                className="field"
                type="number"
                min={10}
                value={input.panjang}
                onChange={(e) => set("panjang", Number(e.target.value))}
              />
            </Field>
            <Field label="Lebar (m)">
              <input
                className="field"
                type="number"
                min={2}
                step={0.1}
                value={input.lebar}
                onChange={(e) => set("lebar", Number(e.target.value))}
              />
            </Field>
            <Field label="Bahu per sisi (m)">
              <input
                className="field"
                type="number"
                min={0}
                step={0.1}
                value={input.bahu}
                onChange={(e) => set("bahu", Number(e.target.value))}
              />
            </Field>
            <Field label="Drainase">
              <select
                className="field"
                value={input.drainase}
                onChange={(e) => set("drainase", e.target.value as Drainase)}
              >
                <option value="dua">U-ditch dua sisi</option>
                <option value="satu">U-ditch satu sisi</option>
                <option value="tidak">Tanpa saluran baru</option>
              </select>
            </Field>
          </div>
          <Field label="Wilayah / faktor harga">
            <select
              className="field"
              value={input.wilayahId}
              onChange={(e) => set("wilayahId", e.target.value)}
            >
              {WILAYAH.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.label} — {w.faktor.toFixed(2).replace(".", ",")}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Kondisi lahan">
            <div className="flex flex-col gap-2">
              {LAHAN.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => set("lahanId", l.id)}
                  className={`rounded-md border px-3 py-2 text-left text-sm ${
                    input.lahanId === l.id
                      ? "border-primary bg-primary/8 font-medium"
                      : "border-line bg-bg"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </Field>
          <Field label="Lokasi peta">
            <input
              className="field"
              placeholder={wilayah.query}
              value={input.lokasiPeta}
              onChange={(e) => set("lokasiPeta", e.target.value)}
            />
          </Field>
          <Field label="Catatan lapangan">
            <textarea
              className="field min-h-20 py-2"
              value={input.catatan}
              onChange={(e) => set("catatan", e.target.value)}
            />
          </Field>

          <div className="mt-4 flex flex-col gap-2">
            <Button onClick={() => window.print()}>
              <Printer className="size-4" /> Cetak ringkasan
            </Button>
            <Button variant="line" onClick={() => setInput(contohPaket.desa)}>
              Contoh jalan desa
            </Button>
            <Button variant="ghost" onClick={() => setInput(contohPaket.kota)}>
              Contoh jalan kota
            </Button>
            <Button variant="ghost" onClick={() => setInput(contohPaket.papua)}>
              Contoh Papua / sulit
            </Button>
          </div>
        </aside>

        <main className="min-w-0 space-y-4">
          <section className="grid gap-3 sm:grid-cols-3">
            <Kpi label="Total estimasi" value={rupiah(hasil.total)} hint={input.nama} />
            <Kpi label="Per meter panjang" value={rupiah(hasil.perMeter)} hint="termasuk OHP & PPN" />
            <Kpi
              label="Per m² perkerasan"
              value={rupiah(hasil.perM2)}
              hint={`luas ${angka(hasil.luas)} m²`}
            />
          </section>

          <section className="rounded-xl border border-line bg-surface p-4 sm:p-5">
            <div className="flex flex-wrap gap-2 border-b border-line pb-3">
              {(
                [
                  ["rab", "Tabel RAB"],
                  ["cara", "Cara hitung"],
                  ["peta", "Peta lokasi"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setTab(id)}
                  className={`h-10 rounded-md px-3 text-sm ${
                    tab === id ? "bg-primary text-primary-fg" : "text-muted hover:bg-primary/8"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {tab === "rab" ? (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead>
                    <tr className="text-xs uppercase tracking-wide text-muted">
                      <th className="pb-2 font-medium">Uraian</th>
                      <th className="pb-2 font-medium">Sat</th>
                      <th className="pb-2 text-right font-medium">Vol</th>
                      <th className="pb-2 text-right font-medium">Harga</th>
                      <th className="pb-2 text-right font-medium">Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hasil.items.map((it) => (
                      <tr key={it.uraian} className="border-t border-line">
                        <td className="py-2 pr-3">{it.uraian}</td>
                        <td>{it.sat}</td>
                        <td className="text-right font-mono">{angka(it.vol)}</td>
                        <td className="text-right font-mono">{rupiah(it.hs)}</td>
                        <td className="text-right font-mono">{rupiah(it.jumlah)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <Foot label="Jumlah pekerjaan (sebelum faktor)" value={hasil.pokok} />
                    <Foot
                      label={`Faktor wilayah ${angka(hasil.wilayah, 2)} × lahan ${angka(hasil.lahan, 2)}`}
                      value={hasil.terkoreksi}
                    />
                    <Foot label="Overhead & profit 15%" value={hasil.ohp} />
                    <Foot label="PPN 11%" value={hasil.ppn} />
                    <Foot label="TOTAL ESTIMASI" value={hasil.total} strong />
                  </tfoot>
                </table>
                <p className="mt-4 rounded-md bg-primary/8 px-3 py-2 text-xs text-muted">
                  Prototipe presentasi. Jangan dipakai dasar kontrak sebelum divalidasi AHSP dan
                  survey lapangan.
                </p>
              </div>
            ) : null}

            {tab === "cara" ? <CaraHitung hasil={hasil} /> : null}

            {tab === "peta" ? (
              <div className="mt-4">
                <p className="mb-2 text-sm text-muted">Peta aktif: {query}</p>
                <iframe
                  title="Peta lokasi"
                  className="h-80 w-full rounded-lg border border-line"
                  src={mapSrc}
                />
              </div>
            ) : null}
          </section>
        </main>
      </div>
      <SiteFooter />
      <style>{`
        .field {
          width: 100%;
          height: 2.75rem;
          border-radius: 8px;
          border: 1px solid var(--color-line);
          background: var(--color-bg);
          padding: 0 0.75rem;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-3 block text-xs font-medium text-muted">
      <p>{label}</p>
      <div className="mt-1 text-fg">{children}</div>
    </div>
  );
}

function Kpi({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="font-display mt-1 text-xl font-semibold tabular-nums">{value}</p>
      <p className="mt-1 text-xs text-muted">{hint}</p>
    </div>
  );
}

function Foot({ label, value, strong }: { label: string; value: number; strong?: boolean }) {
  return (
    <tr className={`border-t border-line ${strong ? "font-semibold" : ""}`}>
      <td colSpan={4} className="py-2">
        {label}
      </td>
      <td className="text-right font-mono">{rupiah(value)}</td>
    </tr>
  );
}

function CaraHitung({ hasil }: { hasil: ReturnType<typeof hitungRab> }) {
  const h = HARGA[hasil.input.perkerasan];
  return (
    <div className="mt-4 space-y-4 text-sm leading-relaxed">
      <p>
        Rumus ini adalah <b>perkiraan pra-RAB</b>. Harga satuan masih asumsi, bukan AHSP
        kabupaten/kota.
      </p>
      <ol className="list-decimal space-y-3 pl-5">
        <li>
          Hitung volume. Panjang {angka(hasil.input.panjang)} m × lebar {angka(hasil.input.lebar)} m
          = luas {angka(hasil.luas)} m². Bahu dua sisi = {angka(hasil.luasBahu)} m². Drainase ={" "}
          {angka(hasil.volDrain)} m.
        </li>
        <li>
          Ambil harga satuan perkerasan {PERKERASAN_LABEL[hasil.input.perkerasan]}. Contoh permukaan{" "}
          {rupiah(h.permukaan)} / m².
        </li>
        <li>
          Kali faktor jenis pekerjaan {JENIS_LABEL[hasil.input.jenis]} = {angka(hasil.fj, 2)}.
          Pembangunan baru 1,00; peningkatan 0,62; rekonstruksi 0,88; rutin 0,18.
        </li>
        <li>
          Setiap baris: volume × harga satuan. Jumlah semua baris = pekerjaan pokok{" "}
          {rupiah(hasil.pokok)}.
        </li>
        <li>
          Koreksi lokasi: pokok × faktor wilayah {angka(hasil.wilayah, 2)} × faktor lahan{" "}
          {angka(hasil.lahan, 2)} = {rupiah(hasil.terkoreksi)}.
        </li>
        <li>
          Overhead & profit {OHP_RATE * 100}% = {rupiah(hasil.ohp)}.
        </li>
        <li>
          PPN {PPN_RATE * 100}% dari (terkoreksi + OHP) = {rupiah(hasil.ppn)}.
        </li>
        <li>
          Total = terkoreksi + OHP + PPN = <b>{rupiah(hasil.total)}</b>.
        </li>
      </ol>
      <div className="rounded-lg border border-line bg-bg p-4 font-mono text-xs">
        total = (pokok × wilayah × lahan) × 1,15 × 1,11
      </div>
      <p className="text-xs text-muted">
        Mobilisasi naik 25% jika panjang lebih dari 1.500 m. Pemeliharaan rutin menekan drainase dan
        marka lebih dalam.
      </p>
    </div>
  );
}
