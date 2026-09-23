import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Printer } from "../_libs/lucide-react.mjs";
import { c as rupiah, i as angka, n as SiteFooter, r as SiteHeader, t as Button } from "./site-header-CDri7D1B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/estimasi-C5d0nQ-H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Harga satuan asumsi demo (bukan AHSP resmi daerah). */
var HARGA = {
	aspal: {
		tanah: 28e3,
		pondasi: 95e3,
		permukaan: 185e3,
		bahu: 45e3,
		drain: 42e4,
		marka: 28e3,
		mob: 18e6,
		k3: 8e6
	},
	beton: {
		tanah: 28e3,
		pondasi: 12e4,
		permukaan: 26e4,
		bahu: 45e3,
		drain: 42e4,
		marka: 28e3,
		mob: 22e6,
		k3: 9e6
	},
	sirtu: {
		tanah: 22e3,
		pondasi: 55e3,
		permukaan: 35e3,
		bahu: 3e4,
		drain: 38e4,
		marka: 12e3,
		mob: 12e6,
		k3: 5e6
	}
};
/** Faktor jenis pekerjaan terhadap volume perkerasan. */
var JENIS_FAKTOR = {
	baru: 1,
	peningkatan: .62,
	rutin: .18,
	rekonstruksi: .88
};
var JENIS_LABEL = {
	baru: "Pembangunan baru",
	peningkatan: "Peningkatan / overlay",
	rutin: "Pemeliharaan rutin",
	rekonstruksi: "Rekonstruksi"
};
var PERKERASAN_LABEL = {
	aspal: "Hotmix aspal (AC-BC + AC-WC)",
	beton: "Beton kaku (rigid)",
	sirtu: "Sirtu / makadam"
};
var WILAYAH = [
	{
		id: "jawa",
		label: "Jawa",
		faktor: 1,
		lat: -6.2,
		lng: 106.8,
		query: "Bogor, Jawa Barat"
	},
	{
		id: "sumatera",
		label: "Sumatera",
		faktor: 1.08,
		lat: -.5,
		lng: 101.4,
		query: "Palembang, Sumatera Selatan"
	},
	{
		id: "bali",
		label: "Bali & Nusa Tenggara",
		faktor: 1.1,
		lat: -8.4,
		lng: 115.2,
		query: "Denpasar, Bali"
	},
	{
		id: "sulawesi",
		label: "Sulawesi",
		faktor: 1.12,
		lat: -2.5,
		lng: 120.2,
		query: "Makassar, Sulawesi Selatan"
	},
	{
		id: "kalimantan",
		label: "Kalimantan",
		faktor: 1.15,
		lat: -1.5,
		lng: 113.5,
		query: "Palangkaraya, Kalimantan Tengah"
	},
	{
		id: "papua",
		label: "Papua & Maluku",
		faktor: 1.25,
		lat: -4.2,
		lng: 138,
		query: "Jayapura, Papua"
	}
];
var LAHAN = [
	{
		id: "mudah",
		label: "Datar / mudah",
		faktor: 1
	},
	{
		id: "sedang",
		label: "Bergelombang",
		faktor: 1.12
	},
	{
		id: "sulit",
		label: "Sulit / rawa / cut-fill besar",
		faktor: 1.28
	}
];
var OHP_RATE = .15;
var PPN_RATE = .11;
var defaultInput = {
	nama: "Pembangunan Jalan Lingkungan Desa Sukamaju",
	jenis: "baru",
	perkerasan: "aspal",
	panjang: 1e3,
	lebar: 5,
	bahu: 1,
	drainase: "dua",
	wilayahId: "jawa",
	lahanId: "mudah",
	catatan: "Lahan sawah kering, akses dump truck tersedia.",
	lokasiPeta: ""
};
var contohPaket = {
	desa: { ...defaultInput },
	kota: {
		nama: "Peningkatan Jalan Kolektor Kota — Segmen Pasar Baru",
		jenis: "peningkatan",
		perkerasan: "beton",
		panjang: 800,
		lebar: 7,
		bahu: .5,
		drainase: "satu",
		wilayahId: "jawa",
		lahanId: "mudah",
		catatan: "Jalur existing, lalu lintas sedang.",
		lokasiPeta: "Pasar Baru, Bogor"
	},
	papua: {
		nama: "Pembukaan Jalan Poros Kampung — Distrik Utara",
		jenis: "baru",
		perkerasan: "sirtu",
		panjang: 2e3,
		lebar: 4,
		bahu: .75,
		drainase: "satu",
		wilayahId: "papua",
		lahanId: "sulit",
		catatan: "Cut-fill besar, material jauh.",
		lokasiPeta: "Jayapura, Papua"
	}
};
function hitungRab(raw) {
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
	const drainFaktor = raw.jenis === "rutin" ? .15 : fj;
	const markaFaktor = raw.jenis === "rutin" ? .35 : 1;
	const items = [
		{
			uraian: "Mobilisasi alat & material",
			sat: "ls",
			vol: 1,
			hs: h.mob * mobFaktor,
			jumlah: 0,
			rumus: `1 × harga mobilisasi${mobFaktor > 1 ? " × 1,25 (panjang > 1.500 m)" : ""}`
		},
		{
			uraian: "Keselamatan konstruksi (K3)",
			sat: "ls",
			vol: 1,
			hs: h.k3,
			jumlah: 0,
			rumus: "1 × harga K3 (lumpsum)"
		},
		{
			uraian: "Penyiapan badan jalan & pekerjaan tanah",
			sat: "m²",
			vol: luas + luasBahu,
			hs: h.tanah * fj,
			jumlah: 0,
			rumus: "(panjang × lebar + bahu kiri-kanan) × harga tanah × faktor jenis"
		},
		{
			uraian: "Lapis pondasi",
			sat: "m²",
			vol: luas,
			hs: h.pondasi * fj,
			jumlah: 0,
			rumus: "panjang × lebar × harga pondasi × faktor jenis"
		},
		{
			uraian: "Perkerasan permukaan",
			sat: "m²",
			vol: luas,
			hs: h.permukaan * fj,
			jumlah: 0,
			rumus: "panjang × lebar × harga permukaan × faktor jenis"
		},
		{
			uraian: "Bahu jalan",
			sat: "m²",
			vol: luasBahu,
			hs: h.bahu * fj,
			jumlah: 0,
			rumus: "panjang × bahu × 2 sisi × harga bahu × faktor jenis"
		},
		{
			uraian: "Saluran U-ditch",
			sat: "m'",
			vol: volDrain,
			hs: h.drain * drainFaktor,
			jumlah: 0,
			rumus: "panjang × jumlah sisi × harga drainase × faktor jenis"
		},
		{
			uraian: "Marka, rambu, patok",
			sat: "m'",
			vol: panjang,
			hs: h.marka * markaFaktor,
			jumlah: 0,
			rumus: "panjang × harga marka" + (raw.jenis === "rutin" ? " × 0,35" : "")
		}
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
		perM2: luas ? total / luas : 0
	};
}
function wilayahOf(id) {
	return WILAYAH.find((w) => w.id === id) ?? WILAYAH[0];
}
function EstimasiPage() {
	const [input, setInput] = (0, import_react.useState)(defaultInput);
	const [tab, setTab] = (0, import_react.useState)("rab");
	const hasil = (0, import_react.useMemo)(() => hitungRab(input), [input]);
	const wilayah = wilayahOf(input.wilayahId);
	const query = input.lokasiPeta.trim() || wilayah.query;
	const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=id&z=11&output=embed`;
	function set(key, value) {
		setInput((prev) => ({
			...prev,
			[key]: value
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-6xl gap-6 px-4 py-6 lg:grid-cols-[340px_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-xl border border-line bg-surface p-5 lg:sticky lg:top-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.16em] text-ok",
							children: "Input paket"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display mt-1 text-2xl font-semibold",
							children: "Estimasi tarif jalan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted",
							children: "Angka berubah langsung saat input diubah. Bukan AHSP resmi."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nama paket",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								value: input.nama,
								onChange: (e) => set("nama", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Jenis pekerjaan",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "field",
								value: input.jenis,
								onChange: (e) => set("jenis", e.target.value),
								children: Object.keys(JENIS_LABEL).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: k,
									children: [
										JENIS_LABEL[k],
										" (",
										JENIS_FAKTOR[k],
										")"
									]
								}, k))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Jenis perkerasan",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "field",
								value: input.perkerasan,
								onChange: (e) => set("perkerasan", e.target.value),
								children: Object.keys(PERKERASAN_LABEL).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: k,
									children: PERKERASAN_LABEL[k]
								}, k))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Panjang (m)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										type: "number",
										min: 10,
										value: input.panjang,
										onChange: (e) => set("panjang", Number(e.target.value))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Lebar (m)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										type: "number",
										min: 2,
										step: .1,
										value: input.lebar,
										onChange: (e) => set("lebar", Number(e.target.value))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Bahu per sisi (m)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										type: "number",
										min: 0,
										step: .1,
										value: input.bahu,
										onChange: (e) => set("bahu", Number(e.target.value))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Drainase",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field",
										value: input.drainase,
										onChange: (e) => set("drainase", e.target.value),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "dua",
												children: "U-ditch dua sisi"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "satu",
												children: "U-ditch satu sisi"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "tidak",
												children: "Tanpa saluran baru"
											})
										]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Wilayah / faktor harga",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "field",
								value: input.wilayahId,
								onChange: (e) => set("wilayahId", e.target.value),
								children: WILAYAH.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: w.id,
									children: [
										w.label,
										" — ",
										w.faktor.toFixed(2).replace(".", ",")
									]
								}, w.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Kondisi lahan",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-2",
								children: LAHAN.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => set("lahanId", l.id),
									className: `rounded-md border px-3 py-2 text-left text-sm ${input.lahanId === l.id ? "border-primary bg-primary/8 font-medium" : "border-line bg-bg"}`,
									children: l.label
								}, l.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Lokasi peta",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								placeholder: wilayah.query,
								value: input.lokasiPeta,
								onChange: (e) => set("lokasiPeta", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Catatan lapangan",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "field min-h-20 py-2",
								value: input.catatan,
								onChange: (e) => set("catatan", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => window.print(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), " Cetak ringkasan"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "line",
									onClick: () => setInput(contohPaket.desa),
									children: "Contoh jalan desa"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => setInput(contohPaket.kota),
									children: "Contoh jalan kota"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => setInput(contohPaket.papua),
									children: "Contoh Papua / sulit"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "Total estimasi",
								value: rupiah(hasil.total),
								hint: input.nama
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "Per meter panjang",
								value: rupiah(hasil.perMeter),
								hint: "termasuk OHP & PPN"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "Per m² perkerasan",
								value: rupiah(hasil.perM2),
								hint: `luas ${angka(hasil.luas)} m²`
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-xl border border-line bg-surface p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2 border-b border-line pb-3",
								children: [
									["rab", "Tabel RAB"],
									["cara", "Cara hitung"],
									["peta", "Peta lokasi"]
								].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setTab(id),
									className: `h-10 rounded-md px-3 text-sm ${tab === id ? "bg-primary text-primary-fg" : "text-muted hover:bg-primary/8"}`,
									children: label
								}, id))
							}),
							tab === "rab" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 overflow-x-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full min-w-[640px] text-left text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "text-xs uppercase tracking-wide text-muted",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "pb-2 font-medium",
													children: "Uraian"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "pb-2 font-medium",
													children: "Sat"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "pb-2 text-right font-medium",
													children: "Vol"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "pb-2 text-right font-medium",
													children: "Harga"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "pb-2 text-right font-medium",
													children: "Jumlah"
												})
											]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: hasil.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-t border-line",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-2 pr-3",
													children: it.uraian
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: it.sat }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "text-right font-mono",
													children: angka(it.vol)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "text-right font-mono",
													children: rupiah(it.hs)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "text-right font-mono",
													children: rupiah(it.jumlah)
												})
											]
										}, it.uraian)) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tfoot", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Foot, {
												label: "Jumlah pekerjaan (sebelum faktor)",
												value: hasil.pokok
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Foot, {
												label: `Faktor wilayah ${angka(hasil.wilayah, 2)} × lahan ${angka(hasil.lahan, 2)}`,
												value: hasil.terkoreksi
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Foot, {
												label: "Overhead & profit 15%",
												value: hasil.ohp
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Foot, {
												label: "PPN 11%",
												value: hasil.ppn
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Foot, {
												label: "TOTAL ESTIMASI",
												value: hasil.total,
												strong: true
											})
										] })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 rounded-md bg-primary/8 px-3 py-2 text-xs text-muted",
									children: "Prototipe presentasi. Jangan dipakai dasar kontrak sebelum divalidasi AHSP dan survey lapangan."
								})]
							}) : null,
							tab === "cara" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaraHitung, { hasil }) : null,
							tab === "peta" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mb-2 text-sm text-muted",
									children: ["Peta aktif: ", query]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									title: "Peta lokasi",
									className: "h-80 w-full rounded-lg border border-line",
									src: mapSrc
								})]
							}) : null
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .field {
          width: 100%;
          height: 2.75rem;
          border-radius: 8px;
          border: 1px solid var(--color-line);
          background: var(--color-bg);
          padding: 0 0.75rem;
          font-size: 0.875rem;
        }
      ` })
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 block text-xs font-medium text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-fg",
			children
		})]
	});
}
function Kpi({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display mt-1 text-xl font-semibold tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: hint
			})
		]
	});
}
function Foot({ label, value, strong }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
		className: `border-t border-line ${strong ? "font-semibold" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
			colSpan: 4,
			className: "py-2",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
			className: "text-right font-mono",
			children: rupiah(value)
		})]
	});
}
function CaraHitung({ hasil }) {
	const h = HARGA[hasil.input.perkerasan];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 space-y-4 text-sm leading-relaxed",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Rumus ini adalah ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "perkiraan pra-RAB" }),
				". Harga satuan masih asumsi, bukan AHSP kabupaten/kota."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "list-decimal space-y-3 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Hitung volume. Panjang ",
						angka(hasil.input.panjang),
						" m × lebar ",
						angka(hasil.input.lebar),
						" m = luas ",
						angka(hasil.luas),
						" m². Bahu dua sisi = ",
						angka(hasil.luasBahu),
						" m². Drainase =",
						" ",
						angka(hasil.volDrain),
						" m."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Ambil harga satuan perkerasan ",
						PERKERASAN_LABEL[hasil.input.perkerasan],
						". Contoh permukaan",
						" ",
						rupiah(h.permukaan),
						" / m²."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Kali faktor jenis pekerjaan ",
						JENIS_LABEL[hasil.input.jenis],
						" = ",
						angka(hasil.fj, 2),
						". Pembangunan baru 1,00; peningkatan 0,62; rekonstruksi 0,88; rutin 0,18."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Setiap baris: volume × harga satuan. Jumlah semua baris = pekerjaan pokok",
						" ",
						rupiah(hasil.pokok),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Koreksi lokasi: pokok × faktor wilayah ",
						angka(hasil.wilayah, 2),
						" × faktor lahan",
						" ",
						angka(hasil.lahan, 2),
						" = ",
						rupiah(hasil.terkoreksi),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Overhead & profit ",
						OHP_RATE * 100,
						"% = ",
						rupiah(hasil.ohp),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"PPN ",
						PPN_RATE * 100,
						"% dari (terkoreksi + OHP) = ",
						rupiah(hasil.ppn),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Total = terkoreksi + OHP + PPN = ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: rupiah(hasil.total) }),
						"."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-line bg-bg p-4 font-mono text-xs",
				children: "total = (pokok × wilayah × lahan) × 1,15 × 1,11"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Mobilisasi naik 25% jika panjang lebih dari 1.500 m. Pemeliharaan rutin menekan drainase dan marka lebih dalam."
			})
		]
	});
}
//#endregion
export { EstimasiPage as component };
