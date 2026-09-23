export type Perkerasan = "aspal" | "beton" | "sirtu";
export type JenisPaket = "baru" | "peningkatan" | "rutin" | "rekonstruksi";
export type Drainase = "dua" | "satu" | "tidak";

export type HargaSatuan = {
  tanah: number;
  pondasi: number;
  permukaan: number;
  bahu: number;
  drain: number;
  marka: number;
  mob: number;
  k3: number;
};

/** Harga satuan asumsi demo (bukan AHSP resmi daerah). */
export const HARGA: Record<Perkerasan, HargaSatuan> = {
  aspal: {
    tanah: 28000,
    pondasi: 95000,
    permukaan: 185000,
    bahu: 45000,
    drain: 420000,
    marka: 28000,
    mob: 18000000,
    k3: 8000000,
  },
  beton: {
    tanah: 28000,
    pondasi: 120000,
    permukaan: 260000,
    bahu: 45000,
    drain: 420000,
    marka: 28000,
    mob: 22000000,
    k3: 9000000,
  },
  sirtu: {
    tanah: 22000,
    pondasi: 55000,
    permukaan: 35000,
    bahu: 30000,
    drain: 380000,
    marka: 12000,
    mob: 12000000,
    k3: 5000000,
  },
};

/** Faktor jenis pekerjaan terhadap volume perkerasan. */
export const JENIS_FAKTOR: Record<JenisPaket, number> = {
  baru: 1,
  peningkatan: 0.62,
  rutin: 0.18,
  rekonstruksi: 0.88,
};

export const JENIS_LABEL: Record<JenisPaket, string> = {
  baru: "Pembangunan baru",
  peningkatan: "Peningkatan / overlay",
  rutin: "Pemeliharaan rutin",
  rekonstruksi: "Rekonstruksi",
};

export const PERKERASAN_LABEL: Record<Perkerasan, string> = {
  aspal: "Hotmix aspal (AC-BC + AC-WC)",
  beton: "Beton kaku (rigid)",
  sirtu: "Sirtu / makadam",
};

export const WILAYAH = [
  { id: "jawa", label: "Jawa", faktor: 1, lat: -6.2, lng: 106.8, query: "Bogor, Jawa Barat" },
  { id: "sumatera", label: "Sumatera", faktor: 1.08, lat: -0.5, lng: 101.4, query: "Palembang, Sumatera Selatan" },
  { id: "bali", label: "Bali & Nusa Tenggara", faktor: 1.1, lat: -8.4, lng: 115.2, query: "Denpasar, Bali" },
  { id: "sulawesi", label: "Sulawesi", faktor: 1.12, lat: -2.5, lng: 120.2, query: "Makassar, Sulawesi Selatan" },
  { id: "kalimantan", label: "Kalimantan", faktor: 1.15, lat: -1.5, lng: 113.5, query: "Palangkaraya, Kalimantan Tengah" },
  { id: "papua", label: "Papua & Maluku", faktor: 1.25, lat: -4.2, lng: 138, query: "Jayapura, Papua" },
] as const;

export const LAHAN = [
  { id: "mudah", label: "Datar / mudah", faktor: 1 },
  { id: "sedang", label: "Bergelombang", faktor: 1.12 },
  { id: "sulit", label: "Sulit / rawa / cut-fill besar", faktor: 1.28 },
] as const;

export const OHP_RATE = 0.15;
export const PPN_RATE = 0.11;

export type InputRab = {
  nama: string;
  jenis: JenisPaket;
  perkerasan: Perkerasan;
  panjang: number;
  lebar: number;
  bahu: number;
  drainase: Drainase;
  wilayahId: string;
  lahanId: string;
  catatan: string;
  lokasiPeta: string;
};

export type BarisRab = {
  uraian: string;
  sat: string;
  vol: number;
  hs: number;
  jumlah: number;
  rumus: string;
};

export type HasilRab = {
  input: InputRab;
  luas: number;
  luasBahu: number;
  volDrain: number;
  fj: number;
  wilayah: number;
  lahan: number;
  items: BarisRab[];
  pokok: number;
  terkoreksi: number;
  ohp: number;
  ppn: number;
  total: number;
  perMeter: number;
  perM2: number;
};

export const defaultInput: InputRab = {
  nama: "Pembangunan Jalan Lingkungan Desa Sukamaju",
  jenis: "baru",
  perkerasan: "aspal",
  panjang: 1000,
  lebar: 5,
  bahu: 1,
  drainase: "dua",
  wilayahId: "jawa",
  lahanId: "mudah",
  catatan: "Lahan sawah kering, akses dump truck tersedia.",
  lokasiPeta: "",
};

export const contohPaket: Record<string, InputRab> = {
  desa: { ...defaultInput },
  kota: {
    nama: "Peningkatan Jalan Kolektor Kota — Segmen Pasar Baru",
    jenis: "peningkatan",
    perkerasan: "beton",
    panjang: 800,
    lebar: 7,
    bahu: 0.5,
    drainase: "satu",
    wilayahId: "jawa",
    lahanId: "mudah",
    catatan: "Jalur existing, lalu lintas sedang.",
    lokasiPeta: "Pasar Baru, Bogor",
  },
  papua: {
    nama: "Pembukaan Jalan Poros Kampung — Distrik Utara",
    jenis: "baru",
    perkerasan: "sirtu",
    panjang: 2000,
    lebar: 4,
    bahu: 0.75,
    drainase: "satu",
    wilayahId: "papua",
    lahanId: "sulit",
    catatan: "Cut-fill besar, material jauh.",
    lokasiPeta: "Jayapura, Papua",
  },
};

export function hitungRab(raw: InputRab): HasilRab {
  const panjang = Math.max(0, Number(raw.panjang) || 0);
  const lebar = Math.max(0, Number(raw.lebar) || 0);
  const bahu = Math.max(0, Number(raw.bahu) || 0);
  const luas = panjang * lebar;
  const luasBahu = panjang * bahu * 2;
  const volDrain = raw.drainase === "dua" ? panjang * 2 : raw.drainase === "satu" ? panjang : 0;
  const h = HARGA[raw.perkerasan];
  const fj = JENIS_FAKTOR[raw.jenis];
  const wilayah = WILAYAH.find((w) => w.id === raw.wilayahId)?.faktor ?? 1;
  const lahan = LAHAN.find((l) => l.id === raw.lahanId)?.faktor ?? 1;
  const mobFaktor = panjang > 1500 ? 1.25 : 1;
  const drainFaktor = raw.jenis === "rutin" ? 0.15 : fj;
  const markaFaktor = raw.jenis === "rutin" ? 0.35 : 1;

  const items: BarisRab[] = [
    {
      uraian: "Mobilisasi alat & material",
      sat: "ls",
      vol: 1,
      hs: h.mob * mobFaktor,
      jumlah: 0,
      rumus: `1 × harga mobilisasi${mobFaktor > 1 ? " × 1,25 (panjang > 1.500 m)" : ""}`,
    },
    {
      uraian: "Keselamatan konstruksi (K3)",
      sat: "ls",
      vol: 1,
      hs: h.k3,
      jumlah: 0,
      rumus: "1 × harga K3 (lumpsum)",
    },
    {
      uraian: "Penyiapan badan jalan & pekerjaan tanah",
      sat: "m²",
      vol: luas + luasBahu,
      hs: h.tanah * fj,
      jumlah: 0,
      rumus: "(panjang × lebar + bahu kiri-kanan) × harga tanah × faktor jenis",
    },
    {
      uraian: "Lapis pondasi",
      sat: "m²",
      vol: luas,
      hs: h.pondasi * fj,
      jumlah: 0,
      rumus: "panjang × lebar × harga pondasi × faktor jenis",
    },
    {
      uraian: "Perkerasan permukaan",
      sat: "m²",
      vol: luas,
      hs: h.permukaan * fj,
      jumlah: 0,
      rumus: "panjang × lebar × harga permukaan × faktor jenis",
    },
    {
      uraian: "Bahu jalan",
      sat: "m²",
      vol: luasBahu,
      hs: h.bahu * fj,
      jumlah: 0,
      rumus: "panjang × bahu × 2 sisi × harga bahu × faktor jenis",
    },
    {
      uraian: "Saluran U-ditch",
      sat: "m'",
      vol: volDrain,
      hs: h.drain * drainFaktor,
      jumlah: 0,
      rumus: "panjang × jumlah sisi × harga drainase × faktor jenis",
    },
    {
      uraian: "Marka, rambu, patok",
      sat: "m'",
      vol: panjang,
      hs: h.marka * markaFaktor,
      jumlah: 0,
      rumus: "panjang × harga marka" + (raw.jenis === "rutin" ? " × 0,35" : ""),
    },
  ];

  items.forEach((it) => {
    it.jumlah = it.vol * it.hs;
  });

  const pokok = items.reduce((s, it) => s + it.jumlah, 0);
  const terkoreksi = pokok * wilayah * lahan;
  const ohp = terkoreksi * OHP_RATE;
  const ppn = (terkoreksi + ohp) * PPN_RATE;
  const total = terkoreksi + ohp + ppn;

  return {
    input: raw,
    luas,
    luasBahu,
    volDrain,
    fj,
    wilayah,
    lahan,
    items,
    pokok,
    terkoreksi,
    ohp,
    ppn,
    total,
    perMeter: panjang ? total / panjang : 0,
    perM2: luas ? total / luas : 0,
  };
}

export function wilayahOf(id: string) {
  return WILAYAH.find((w) => w.id === id) ?? WILAYAH[0];
}
