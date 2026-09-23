import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-CDri7D1B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var studio = {
	name: "Studio 88 PLAN",
	motto: "Together we can",
	tagline: "Konsultan tata ruang wilayah dan kota",
	founded: 2015,
	city: "Bogor, Jawa Barat",
	email: "plan88studio@gmail.com",
	phone: "(0251) 8573727",
	phoneHref: "tel:+622518573727",
	instagram: "https://www.instagram.com/plan88studio/",
	facebook: "https://www.facebook.com/people/Studio-88-PLAN/100063998084971/"
};
var leaders = [
	{
		name: "Aria Gusandra, ST., M.PWK",
		role: "Pimpinan",
		skill: "Perencana wilayah dan kota"
	},
	{
		name: "Yusuf Maulana, ST.",
		role: "Pimpinan",
		skill: "Teknik"
	},
	{
		name: "M. Isnaeni S., ST.",
		role: "Pimpinan",
		skill: "Teknik"
	},
	{
		name: "Prayoga A., ST., M.Eng",
		role: "Pimpinan",
		skill: "Teknik / rekayasa"
	}
];
var team = [
	{
		name: "Wahyu Firmansyah, ST.",
		skill: "Teknik"
	},
	{
		name: "Aji Suryayuda, S.PWK",
		skill: "PWK"
	},
	{
		name: "Putri Tindria, S.PWK",
		skill: "PWK"
	},
	{
		name: "Yuriidul I., S.PWK",
		skill: "PWK"
	},
	{
		name: "Didin Sajidin, S.PWK",
		skill: "PWK"
	},
	{
		name: "Novrico Adhiguna, S.PWK",
		skill: "PWK"
	}
];
var layanan = [
	{
		tag: "Inti",
		title: "Konsultan tata ruang",
		body: "Jasa konsultan seputar tata ruang wilayah dan kota sesuai bio resmi studio."
	},
	{
		tag: "Kawasan",
		title: "Desain penataan permukiman",
		body: "Penyusunan desain kawasan, termasuk contoh kerja di Waduk Cibeet."
	},
	{
		tag: "Pengawasan",
		title: "Pemanfaatan ruang",
		body: "Fasilitasi penertiban indikasi pelanggaran pemanfaatan ruang."
	},
	{
		tag: "Transportasi",
		title: "Kajian jalur dan jalan",
		body: "Kajian jalur sepeda Kota Bogor dan estimasi tarif konstruksi jalan."
	},
	{
		tag: "Baru",
		title: "Estimasi tarif jalan",
		body: "Hitung cepat pembangunan baru, overlay, pemeliharaan, dan rekonstruksi."
	},
	{
		tag: "Pendampingan",
		title: "Diskusi dan pemaparan",
		body: "Group discussion, survey lapangan, dan pemaparan bersama mitra."
	}
];
var proyek = [
	{
		tag: "Kawasan",
		title: "Permukiman Waduk Cibeet",
		body: "Penyusunan desain penataan kawasan permukiman di Waduk Cibeet."
	},
	{
		tag: "Kota Bogor",
		title: "Jalur sepeda",
		body: "Kajian jalur sepeda Kota Bogor, lengkap dengan peta jaringan."
	},
	{
		tag: "Pengawasan",
		title: "Pemanfaatan ruang",
		body: "Fasilitasi penertiban indikasi pelanggaran pemanfaatan ruang."
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line bg-ink text-primary-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				studio.name,
				" · ",
				studio.motto
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-primary-fg/70",
				children: [
					studio.email,
					" · ",
					studio.phone
				]
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function rupiah(n) {
	return "Rp " + Math.round(n).toLocaleString("id-ID");
}
function angka(n, digits = 1) {
	return n.toLocaleString("id-ID", { maximumFractionDigits: digits });
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className: cn("shrink-0", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "32",
			cy: "32",
			r: "32",
			fill: "currentColor",
			className: "text-primary"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "32",
			y: "38",
			textAnchor: "middle",
			fill: "#f6f1e6",
			fontFamily: "Fraunces, serif",
			fontSize: "20",
			fontWeight: "600",
			children: "88"
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-opacity duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:opacity-90",
			ghost: "bg-transparent text-fg hover:bg-primary/8",
			line: "border border-line bg-surface text-fg hover:border-primary",
			inverse: "bg-surface text-ink hover:opacity-90",
			accent: "bg-accent text-primary-fg hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var links = [
	{
		to: "/",
		hash: void 0,
		label: "Beranda"
	},
	{
		to: "/",
		hash: "profil",
		label: "Profil"
	},
	{
		to: "/",
		hash: "organisasi",
		label: "Organisasi"
	},
	{
		to: "/",
		hash: "layanan",
		label: "Layanan"
	},
	{
		to: "/estimasi",
		hash: void 0,
		label: "Estimasi Tarif"
	},
	{
		to: "/",
		hash: "kontak",
		label: "Kontak"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-bg/92 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 text-fg no-underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "size-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "block font-display text-base font-semibold",
							children: studio.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
							className: "block text-[11px] uppercase tracking-[0.14em] text-muted",
							children: studio.motto
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: links.map((l) => {
						const active = l.to === "/estimasi" ? pathname.startsWith("/estimasi") : pathname === "/" && !l.hash;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							hash: l.hash,
							className: cn("rounded-md px-3 py-2 text-sm text-muted no-underline transition-colors hover:text-fg", active && "bg-primary/8 font-medium text-fg"),
							children: l.label
						}, l.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/estimasi",
						className: "hidden sm:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							children: "Buka estimasi"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						className: "lg:hidden",
						"aria-label": "Menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line bg-surface px-4 py-3 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-1",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					hash: l.hash,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-3 text-sm text-fg no-underline hover:bg-primary/8",
					children: l.label
				}, l.label))
			})
		}) : null]
	});
}
//#endregion
export { layanan as a, rupiah as c, angka as i, studio as l, SiteFooter as n, leaders as o, SiteHeader as r, proyek as s, Button as t, team as u };
