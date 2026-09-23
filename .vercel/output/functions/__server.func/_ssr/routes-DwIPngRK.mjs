import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as layanan, l as studio, n as SiteFooter, o as leaders, r as SiteHeader, s as proyek, t as Button, u as team } from "./site-header-CDri7D1B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DwIPngRK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Profil, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Organisasi, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layanan, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Proyek, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kontak, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink text-primary-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-accent",
					children: [
						studio.city,
						" · berdiri ",
						studio.founded
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-3 max-w-xl text-4xl leading-[1.1] font-semibold tracking-tight md:text-6xl",
					children: "Konsultan tata ruang wilayah dan kota."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-lg text-base leading-relaxed text-primary-fg/75",
					children: [studio.name, " membantu perencanaan kawasan, pengawasan pemanfaatan ruang, dan perkiraan tarif pembuatan jalan sebelum RAB resmi disusun."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/estimasi",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "inverse",
							size: "lg",
							children: "Hitung estimasi tarif"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#profil",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "line",
							size: "lg",
							className: "border-primary-fg/25 bg-transparent text-primary-fg",
							children: "Lihat profil"
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid grid-cols-2 gap-3",
				children: [
					["2015", "berdiri di Bogor"],
					["10", "orang di umpan resmi"],
					["PWK", "inti keahlian tim"],
					["Pra-RAB", "modul estimasi jalan"]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-primary-fg/12 bg-primary/40 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-2xl font-semibold",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-xs text-primary-fg/70",
						children: v
					})]
				}, k))
			})]
		})
	});
}
function Profil() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "profil",
		className: "scroll-mt-20 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-ok",
					children: "Profil"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display mt-2 text-3xl font-semibold md:text-4xl",
					children: ["Tentang ", studio.name]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: [
						"Studio jasa konsultan tata ruang wilayah dan kota. Motto: ",
						studio.motto,
						". Data di halaman ini diambil dari akun publik Instagram dan Facebook."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-line bg-surface p-6 shadow-[0_1px_0_rgba(18,36,30,0.04)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: "Siapa kami"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: "Kami menyusun desain kawasan, memfasilitasi pengawasan pemanfaatan ruang, mengkaji transportasi, dan mendampingi rapat teknis. Modul baru di situs ini: estimasi tarif pembangunan, peningkatan, dan pemeliharaan jalan."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-line bg-surface p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: "Kontak publik"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Email: ", studio.email] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Telp: ", studio.phone] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Kota: ", studio.city] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Instagram",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "text-primary underline",
										href: studio.instagram,
										children: "@plan88studio"
									})
								] })
							]
						})]
					})]
				})
			]
		})
	});
}
function Organisasi() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "organisasi",
		className: "scroll-mt-20 border-y border-line bg-surface py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-ok",
					children: "Organisasi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-3xl font-semibold md:text-4xl",
					children: "Owner, pimpinan, dan tim"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm text-muted",
					children: "Jenjang mengikuti label resmi di Instagram: Our Owner, As a Leader, As a Team. Jabatan internal (direktur, manager) belum tertulis di akun publik."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-10 max-w-md rounded-xl border border-ink bg-ink p-5 text-center text-primary-fg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-accent",
							children: "Our Owner"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-2 text-lg font-semibold",
							children: "Pemilik studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-primary-fg/70",
							children: "Kartu “OUR OWNER” tampil di feed. Nama orangnya belum tertulis di kartu itu."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted",
					children: "As a leader · 4 orang"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: leaders.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border-t-4 border-t-primary border-x border-b border-line bg-bg p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								p.role,
								" · ",
								p.skill
							]
						})]
					}, p.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted",
					children: "As a team · 6 orang"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: team.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border-t-4 border-t-ok border-x border-b border-line bg-bg p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: ["Tim pelaksana · ", p.skill]
						})]
					}, p.name))
				})
			]
		})
	});
}
function Layanan() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "layanan",
		className: "scroll-mt-20 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-ok",
					children: "Layanan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-3xl font-semibold",
					children: "Yang dikerjakan studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: layanan.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-line bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary/8 px-2 py-1 text-[11px] font-semibold text-primary",
								children: s.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-3 text-lg font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: s.body
							})
						]
					}, s.title))
				})
			]
		})
	});
}
function Proyek() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proyek",
		className: "scroll-mt-20 border-t border-line bg-surface py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-ok",
					children: "Kegiatan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-3xl font-semibold",
					children: "Yang sudah tampil di umpan resmi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: proyek.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-line bg-bg p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary/8 px-2 py-1 text-[11px] font-semibold text-primary",
								children: s.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-3 text-lg font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: s.body
							})
						]
					}, s.title))
				})
			]
		})
	});
}
function Kontak() {
	const [status, setStatus] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "kontak",
		className: "scroll-mt-20 bg-ink py-16 text-primary-fg md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent",
					children: "Kontak"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-3xl font-semibold",
					children: "Hubungi studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm leading-relaxed text-primary-fg/75",
					children: [
						studio.name,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						studio.tagline,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						studio.city
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm",
					children: [
						"Telp",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "underline",
							href: studio.phoneHref,
							children: studio.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Email",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "underline",
							href: `mailto:${studio.email}`,
							children: studio.email
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-primary-fg/70",
					children: "Alamat jalan lengkap belum tertulis di intro publik Facebook."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "rounded-xl border border-primary-fg/12 bg-primary/30 p-5",
				onSubmit: (e) => {
					e.preventDefault();
					const data = new FormData(e.currentTarget);
					setStatus(`Terima kasih, ${String(data.get("nama") || "")}. Pesan prototipe tercatat di layar ini, belum terkirim ke server.`);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-medium",
						children: "Nama"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "nama",
						required: true,
						className: "mt-1 mb-3 h-11 w-full rounded-md border border-primary-fg/15 bg-ink px-3 text-sm text-primary-fg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-medium",
						children: "Email atau WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "hub",
						required: true,
						className: "mt-1 mb-3 h-11 w-full rounded-md border border-primary-fg/15 bg-ink px-3 text-sm text-primary-fg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-medium",
						children: "Pesan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "pesan",
						required: true,
						rows: 4,
						className: "mt-1 w-full rounded-md border border-primary-fg/15 bg-ink px-3 py-2 text-sm text-primary-fg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "inverse",
						className: "mt-4",
						type: "submit",
						children: "Kirim pesan"
					}),
					status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-primary-fg/75",
						children: status
					}) : null
				]
			})]
		})
	});
}
//#endregion
export { Home as component };
