import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, p as Check } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { c as priceTiers, n as Eyebrow, u as scrollToContactForm } from "./router-CnR4dhVN.mjs";
import { l as InteriorHero, r as ContactSection } from "./sections-C0xABtIv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-Crm4FVNu.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/pricing.tsx?tsr-split=component";
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InteriorHero, {
			kicker: "Pricing",
			title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: ["Clear packages. ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "Scoped to the books." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 29
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 45
			}, this),
			intro: "Monthly accounting starts from R1,000. The right package depends on the size of the entity, transaction volume, payroll and the services you need — we confirm that before any work begins.",
			index: "08"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "pricing-tiers",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "section-inner pricing-grid",
				children: priceTiers.map((tier) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: tier.featured ? "pricing-card pricing-card-featured" : "pricing-card",
					"data-reveal": true,
					children: [
						tier.featured ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "pricing-flag",
							children: "Typical starting range"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 15,
							columnNumber: 32
						}, this) : null,
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: tier.size }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 16,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: tier.price }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 17,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: tier.detail }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 18,
							columnNumber: 15
						}, this),
						"quote" in tier && tier.quote ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "#contact",
							onClick: (e) => {
								e.preventDefault();
								scrollToContactForm();
							},
							className: "button button-dark",
							children: ["Request a quote ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { "aria-hidden": "true" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 23,
								columnNumber: 35
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 19,
							columnNumber: 48
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "#contact",
							onClick: (e) => {
								e.preventDefault();
								scrollToContactForm();
							},
							className: "text-link",
							children: ["Talk about this package ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { "aria-hidden": "true" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 43
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 24
						}, this)
					]
				}, tier.size, true, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 35
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "section-inner pricing-note",
				children: "Figures are example monthly starting points, excluding VAT where applicable. Final fees are confirmed after we see the software, the volume and the deadlines."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "pricing-includes",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "section-inner pricing-includes-inner",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "What a package typically covers" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["The work that keeps you ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "compliant." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 39
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Every engagement is scoped. The list below is the core of most monthly retainers — we add or leave out according to the entity." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
					"Monthly bookkeeping and bank reconciliations",
					"SARS, VAT, PAYE and related returns as scoped",
					"CIPC housekeeping kept on the calendar",
					"Payroll, UIF/uFiling and COIDA where required",
					"A pack you can actually use — not just a file dump"
				].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { "aria-hidden": "true" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 17
				}, this), item] }, item, true, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 269
				}, this)) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "band-dark",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "section-inner band-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Farm packages" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Farm accounting packages from R1,500 per month" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Pricing is based on farm size, transaction volume, payroll and services required." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/agricultural-accounting",
						className: "text-link text-link-light",
						children: ["See agricultural accounting ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { "aria-hidden": "true" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 41
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactSection, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 67,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
//#endregion
export { PricingPage as component };
