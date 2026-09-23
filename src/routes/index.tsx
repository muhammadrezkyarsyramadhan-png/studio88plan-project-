import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { leaders, layanan, proyek, studio, team } from "@/lib/studio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <Hero />
      <Profil />
      <Organisasi />
      <Layanan />
      <Proyek />
      <Kontak />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-ink text-primary-fg">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {studio.city} · berdiri {studio.founded}
          </p>
          <h1 className="font-display mt-3 max-w-xl text-4xl leading-[1.1] font-semibold tracking-tight md:text-6xl">
            Konsultan tata ruang wilayah dan kota.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-fg/75">
            {studio.name} membantu perencanaan kawasan, pengawasan pemanfaatan ruang, dan
            perkiraan tarif pembuatan jalan sebelum RAB resmi disusun.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/estimasi">
              <Button variant="inverse" size="lg">
                Hitung estimasi tarif
              </Button>
            </Link>
            <a href="#profil">
              <Button variant="line" size="lg" className="border-primary-fg/25 bg-transparent text-primary-fg">
                Lihat profil
              </Button>
            </a>
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-3">
          {[
            ["2015", "berdiri di Bogor"],
            ["10", "orang di umpan resmi"],
            ["PWK", "inti keahlian tim"],
            ["Pra-RAB", "modul estimasi jalan"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-primary-fg/12 bg-primary/40 p-4">
              <dt className="font-display text-2xl font-semibold">{k}</dt>
              <dd className="mt-1 text-xs text-primary-fg/70">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Profil() {
  return (
    <section id="profil" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ok">Profil</p>
        <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">Tentang {studio.name}</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Studio jasa konsultan tata ruang wilayah dan kota. Motto: {studio.motto}. Data di
          halaman ini diambil dari akun publik Instagram dan Facebook.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-line bg-surface p-6 shadow-[0_1px_0_rgba(18,36,30,0.04)]">
            <h3 className="font-display text-xl font-semibold">Siapa kami</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Kami menyusun desain kawasan, memfasilitasi pengawasan pemanfaatan ruang, mengkaji
              transportasi, dan mendampingi rapat teknis. Modul baru di situs ini: estimasi tarif
              pembangunan, peningkatan, dan pemeliharaan jalan.
            </p>
          </article>
          <article className="rounded-xl border border-line bg-surface p-6">
            <h3 className="font-display text-xl font-semibold">Kontak publik</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>Email: {studio.email}</li>
              <li>Telp: {studio.phone}</li>
              <li>Kota: {studio.city}</li>
              <li>
                Instagram{" "}
                <a className="text-primary underline" href={studio.instagram}>
                  @plan88studio
                </a>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function Organisasi() {
  return (
    <section id="organisasi" className="scroll-mt-20 border-y border-line bg-surface py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ok">Organisasi</p>
        <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">Owner, pimpinan, dan tim</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Jenjang mengikuti label resmi di Instagram: Our Owner, As a Leader, As a Team. Jabatan
          internal (direktur, manager) belum tertulis di akun publik.
        </p>

        <div className="mx-auto mt-10 max-w-md rounded-xl border border-ink bg-ink p-5 text-center text-primary-fg">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">Our Owner</p>
          <h3 className="font-display mt-2 text-lg font-semibold">Pemilik studio</h3>
          <p className="mt-2 text-sm text-primary-fg/70">
            Kartu “OUR OWNER” tampil di feed. Nama orangnya belum tertulis di kartu itu.
          </p>
        </div>

        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          As a leader · 4 orang
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((p) => (
            <article key={p.name} className="rounded-lg border-t-4 border-t-primary border-x border-b border-line bg-bg p-4">
              <h3 className="font-display text-base font-semibold">{p.name}</h3>
              <p className="mt-1 text-xs text-muted">
                {p.role} · {p.skill}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          As a team · 6 orang
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((p) => (
            <article key={p.name} className="rounded-lg border-t-4 border-t-ok border-x border-b border-line bg-bg p-4">
              <h3 className="font-display text-base font-semibold">{p.name}</h3>
              <p className="mt-1 text-xs text-muted">Tim pelaksana · {p.skill}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Layanan() {
  return (
    <section id="layanan" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ok">Layanan</p>
        <h2 className="font-display mt-2 text-3xl font-semibold">Yang dikerjakan studio</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {layanan.map((s) => (
            <article key={s.title} className="rounded-xl border border-line bg-surface p-5">
              <span className="rounded-full bg-primary/8 px-2 py-1 text-[11px] font-semibold text-primary">
                {s.tag}
              </span>
              <h3 className="font-display mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proyek() {
  return (
    <section id="proyek" className="scroll-mt-20 border-t border-line bg-surface py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ok">Kegiatan</p>
        <h2 className="font-display mt-2 text-3xl font-semibold">Yang sudah tampil di umpan resmi</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {proyek.map((s) => (
            <article key={s.title} className="rounded-xl border border-line bg-bg p-5">
              <span className="rounded-full bg-primary/8 px-2 py-1 text-[11px] font-semibold text-primary">
                {s.tag}
              </span>
              <h3 className="font-display mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kontak() {
  const [status, setStatus] = useState("");

  return (
    <section id="kontak" className="scroll-mt-20 bg-ink py-16 text-primary-fg md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Kontak</p>
          <h2 className="font-display mt-2 text-3xl font-semibold">Hubungi studio</h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-fg/75">
            {studio.name}
            <br />
            {studio.tagline}
            <br />
            {studio.city}
          </p>
          <p className="mt-4 text-sm">
            Telp{" "}
            <a className="underline" href={studio.phoneHref}>
              {studio.phone}
            </a>
            <br />
            Email{" "}
            <a className="underline" href={`mailto:${studio.email}`}>
              {studio.email}
            </a>
          </p>
          <p className="mt-4 text-sm text-primary-fg/70">
            Alamat jalan lengkap belum tertulis di intro publik Facebook.
          </p>
        </div>
        <form
          className="rounded-xl border border-primary-fg/12 bg-primary/30 p-5"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            setStatus(
              `Terima kasih, ${String(data.get("nama") || "")}. Pesan prototipe tercatat di layar ini, belum terkirim ke server.`,
            );
          }}
        >
          <label className="text-xs font-medium">Nama</label>
          <input
            name="nama"
            required
            className="mt-1 mb-3 h-11 w-full rounded-md border border-primary-fg/15 bg-ink px-3 text-sm text-primary-fg"
          />
          <label className="text-xs font-medium">Email atau WhatsApp</label>
          <input
            name="hub"
            required
            className="mt-1 mb-3 h-11 w-full rounded-md border border-primary-fg/15 bg-ink px-3 text-sm text-primary-fg"
          />
          <label className="text-xs font-medium">Pesan</label>
          <textarea
            name="pesan"
            required
            rows={4}
            className="mt-1 w-full rounded-md border border-primary-fg/15 bg-ink px-3 py-2 text-sm text-primary-fg"
          />
          <Button variant="inverse" className="mt-4" type="submit">
            Kirim pesan
          </Button>
          {status ? <p className="mt-3 text-xs text-primary-fg/75">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
