import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, c as Landmark, d as ChevronDown, f as Check, g as ArrowRight, h as ArrowUpRight, i as ShieldCheck, l as FileSpreadsheet, m as Calculator, p as ChartColumn, r as TrendingUp, s as MapPin, u as Clock3 } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as SITE, l as services, n as Eyebrow, o as faqs, r as HeroDock } from "./router-fU4gCv33.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sections-BBsIUHSL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/contact-form.tsx";
function ContactForm() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const submitForm = (event) => {
		event.preventDefault();
		setSubmitted(true);
	};
	if (submitted) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "form-success",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { "aria-hidden": "true" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 17,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Message received" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 18,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "That’s a good first step." }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 19,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Thank you for reaching out. We’ll review your note and come back with a useful next step." }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 20,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => setSubmitted(false),
				className: "reset-button",
				children: "Send another note"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 21,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 16,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
		onSubmit: submitForm,
		className: "consultation-form",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "form-heading",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Send a note" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 31,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Tell us what’s on the books." }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 32,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 30,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "form-fields-two",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "field-label",
					children: "Your name"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 36,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					required: true,
					name: "name",
					type: "text",
					placeholder: "First and last name",
					autoComplete: "name",
					suppressHydrationWarning: true
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 37,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 35,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "field-label",
					children: "Phone number"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 40,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					required: true,
					name: "phone",
					type: "tel",
					inputMode: "tel",
					placeholder: SITE.phone,
					autoComplete: "tel",
					suppressHydrationWarning: true
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 41,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 39,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 34,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "field-label",
				children: "Email address"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 45,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				required: true,
				name: "email",
				type: "email",
				placeholder: SITE.email,
				autoComplete: "email",
				suppressHydrationWarning: true
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 46,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "field-label",
				children: "What would you like help with?"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 49,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
				required: true,
				name: "focus",
				defaultValue: "",
				suppressHydrationWarning: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "",
						disabled: true,
						children: "Select a focus"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 51,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "bookkeeping",
						children: "Bookkeeping and reporting"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 54,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "tax",
						children: "VAT and tax"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "payroll",
						children: "Payroll"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 56,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "agricultural",
						children: "Agricultural accounting"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 57,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "outsource",
						children: "Outsourcing for my firm"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 58,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "pricing",
						children: "Pricing for my business"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 59,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "other",
						children: "Something else"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 60,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 50,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 48,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "field-label",
				children: ["A little context ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "(optional)" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 65,
					columnNumber: 28
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 64,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
				name: "message",
				rows: 3,
				placeholder: "Share the software you use, the deadlines that worry you, and what “done” looks like.",
				suppressHydrationWarning: true
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 67,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 63,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "submit",
				className: "button button-dark form-submit",
				children: ["Send enquiry ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { "aria-hidden": "true" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 75,
					columnNumber: 22
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 74,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "privacy-note",
				children: [
					"Your note can also be sent directly to ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: `mailto:${SITE.email}`,
						children: SITE.email
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 78,
						columnNumber: 48
					}, this),
					"."
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 77,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/components/sections.tsx";
var serviceIcons = [
	Calculator,
	ChartColumn,
	Landmark,
	FileSpreadsheet,
	FileSpreadsheet,
	TrendingUp,
	ShieldCheck,
	ChartColumn,
	Landmark
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "hero-section",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "hero-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "hero-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Professional accounting" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "hero-title animate-rise delay-1",
						children: ["Keeping your books ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "compliant." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 32
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "hero-intro animate-rise delay-2",
						children: "Compliant Bookkeeping SA is your finance and compliance partner, providing accurate accounting and reliable financial support. We handle SARS, CIPC, VAT, PAYE, UIF/uFiling, COIDA and payroll, keeping your business compliant and your numbers in order."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "hero-taglines animate-rise delay-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Keeping your books compliant." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Strengthening your numbers." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Supporting your growth." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "hero-actions animate-rise delay-3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/contact",
							className: "button button-dark",
							children: ["Request a conversation ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { "aria-hidden": "true" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 38
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "animate-rise delay-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeroDock, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "hero-visual animate-rise delay-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
					className: "hero-source-visual",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: "/site/books.webp",
						alt: "Printed annual financial statements, a fountain pen and a laptop on a desk"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "The numbers, in order" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Bookkeeping · Reporting · Financial statements" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
					className: "hero-widget",
					"aria-label": "Compliance snapshot",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "hero-widget-top",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hero-widget-live" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 15
							}, this), "Live activity"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "On track" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "VAT" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "25 Sep" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "PAYE" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Current" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "CIPC" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Filed" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "hero-footerline",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "hero-scroll",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 11
				}, this), " Scroll to explore"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "hero-location",
				children: "Cape Town · South Africa"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 87,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 83,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 5
	}, this);
}
function PracticeProof() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "practice-proof",
		"aria-label": "Practice highlights",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "section-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "practice-proof-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Built for the real work" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["Professional standards. Clear ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "support." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 43
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Two Western Cape offices, one standard of work. Reach the practice by the channel that suits you." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "practice-proof-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "practice-proof-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { "aria-hidden": "true" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Reachable" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Phone, WhatsApp or email" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "A practice you can actually reach — by the channel that suits you." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "practice-proof-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { "aria-hidden": "true" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Affiliated" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Professional bodies" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "SAICA, SAIPA and CIBA — professional bodies your clients already recognise." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 115,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "practice-proof-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileSpreadsheet, { "aria-hidden": "true" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Software" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Familiar ledgers" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Sage, Sage Payroll and Xero — we work in the ledgers you already run." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "practice-proof-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { "aria-hidden": "true" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Places" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Cape Town & Ceres" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Two Western Cape offices, one standard of work." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 127,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 104,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 96,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 95,
		columnNumber: 5
	}, this);
}
function AffiliationsSection() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "affiliations-section",
		"aria-labelledby": "affiliations-title",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "section-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "section-heading affiliations-heading",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Affiliated to" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 141,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					id: "affiliations-title",
					children: ["Professional bodies your clients already ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "recognise." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 143,
						columnNumber: 56
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 142,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 140,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The supplied affiliation badges are shown as provided, without recolouring or recreating them." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 139,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "affiliation-badge-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "affiliation-badge",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: "/brand/saica.svg",
							alt: "South African Institute of Chartered Accountants"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 150,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "South African Institute of Chartered Accountants" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 151,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 149,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "affiliation-badge",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							className: "affiliation-badge-saipa",
							src: "/brand/saipa.webp",
							alt: "South African Institute of Professional Accountants"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 154,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "South African Institute of Professional Accountants" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 155,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "affiliation-badge",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: "/brand/ciba.png",
							alt: "CIBA — Chartered Institute for Business Accountants NPC"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 158,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Professional body your clients already recognise" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 159,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 157,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 148,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 138,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 137,
		columnNumber: 5
	}, this);
}
function SoftwareSection() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "software-section",
		"aria-labelledby": "software-title",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "section-inner software-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "software-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Software" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 172,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						id: "software-title",
						children: ["We use the following ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "software." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 174,
							columnNumber: 34
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 173,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Cloud accounting, payroll and bank feeds in the systems your business or practice already runs." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 176,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 171,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "software-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "software-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/brand/sage.svg",
								alt: "Sage Accounting"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 180,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Sage Accounting" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 181,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Accounting and bank feeds" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 182,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "software-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/brand/sage.svg",
								alt: "Sage Payroll"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 185,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Sage Payroll" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 186,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Payslips and payroll returns" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 187,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 184,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "software-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/brand/xero.svg",
								alt: "Xero"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 190,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Xero" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 191,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Cloud reporting and reconciliations" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 192,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 189,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 178,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 170,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 169,
		columnNumber: 5
	}, this);
}
function HomePricingBand() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "home-pricing-band",
		"aria-labelledby": "home-pricing-title",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "section-inner home-pricing-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Pricing" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 205,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					id: "home-pricing-title",
					children: ["R1,000 a ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "month." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 207,
						columnNumber: 22
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 206,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Example monthly starting points. Final fees depend on entity size, transaction volume, payroll and the services you need." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 209,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 204,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/pricing",
				className: "button button-dark",
				children: ["See example pricing ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { "aria-hidden": "true" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 212,
					columnNumber: 31
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 211,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 203,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 202,
		columnNumber: 5
	}, this);
}
function ApproachSection() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "approach",
		className: "approach-section",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "section-inner approach-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "section-marker",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Our approach" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 224,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "marker-number",
					children: "01"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 225,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 223,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "approach-content",
				"data-reveal": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Your numbers should answer questions, not create more of them." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 228,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "approach-notes",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We bring structure to the everyday and perspective to the important moments. No jargon wall. No mysterious month-end." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 230,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Just accurate financial foundations, a clear view of what is changing, and a partner who knows when to zoom in." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 231,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 229,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "approach-signoff",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "initials",
							"aria-hidden": "true",
							children: [
								"C",
								"M",
								"N"
							].map((initial, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: index === 1 ? "initial-accent" : "",
								children: initial
							}, initial, false, {
								fileName: _jsxFileName,
								lineNumber: 236,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 234,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "A steady hand for the decisions ahead." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 241,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 233,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 227,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 222,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 221,
		columnNumber: 5
	}, this);
}
function EditorialSection() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "visual-break-section",
		"aria-label": "A closer look at the Compliant Bookkeeping SA approach",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "section-inner visual-break-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "visual-break-copy",
				"data-reveal": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Start with a conversation" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 254,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["Clear books. Thoughtful ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "reporting." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 256,
						columnNumber: 37
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 255,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "At Compliant Bookkeeping SA, the work starts with a conversation. We bring professional accounting, payroll and compliance to clients who want the numbers handled — and explained — without the noise." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 258,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "visual-break-caption",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "caption-dot",
							"aria-hidden": "true"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 263,
							columnNumber: 13
						}, this), "No mystery month-end"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 262,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 253,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "visual-break-gallery",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
					className: "visual-break-photo visual-break-photo-wide",
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: "/site/meeting.webp",
						alt: "Advisors reviewing management accounts together"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 269,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", { children: "01 / A better conversation about the numbers" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 270,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 268,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
					className: "visual-break-photo visual-break-photo-detail",
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: "/site/planning.webp",
						alt: "Advisor reviewing a funding proposal with a client"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 273,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", { children: "02 / Details, handled" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 274,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 272,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 267,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 252,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 251,
		columnNumber: 5
	}, this);
}
function ServicesList() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "service-list",
		children: services.map((service, index) => {
			const Icon = serviceIcons[index] ?? Calculator;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
				className: "service-row",
				"data-reveal": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "service-number",
						children: service.number
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 289,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "service-icon",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { "aria-hidden": "true" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 291,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 290,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "service-main",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: service.title }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 294,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: service.text }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 295,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 293,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "service-tag",
						children: service.tag
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 297,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
						className: "service-arrow",
						"aria-hidden": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 298,
						columnNumber: 13
					}, this)
				]
			}, service.number, true, {
				fileName: _jsxFileName,
				lineNumber: 288,
				columnNumber: 11
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 284,
		columnNumber: 5
	}, this);
}
function ServicesSection() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "services",
		className: "services-section",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "section-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "section-heading services-heading",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "The useful stuff" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 312,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
					"Finance that ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "moves" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 314,
						columnNumber: 28
					}, this),
					" with you."
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 313,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 311,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The right support changes as your business changes. Start where the friction is." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 317,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 310,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServicesList, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 319,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 309,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 308,
		columnNumber: 5
	}, this);
}
function FitSection() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "fit",
		className: "fit-section",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "section-inner fit-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "fit-copy",
				"data-reveal": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "A good fit looks like" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 336,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["You want a finance partner, not a ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "filing cabinet." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 338,
						columnNumber: 47
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 337,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You care about doing things properly, but you have a business to run. You want answers that arrive before the deadline — and advice that respects the real-world trade-offs." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 340,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 335,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "fit-list",
				"data-reveal": true,
				children: [[
					"A founder making the first serious hires",
					"An SME ready for cleaner management information",
					"An established business navigating a new chapter",
					"A professional with more moving parts than time"
				].map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "fit-item",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: `0${index + 1}` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 348,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: item }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 349,
						columnNumber: 15
					}, this)]
				}, item, true, {
					fileName: _jsxFileName,
					lineNumber: 347,
					columnNumber: 13
				}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/contact",
					className: "text-link fit-link",
					children: ["Let's see if we fit ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { "aria-hidden": "true" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 353,
						columnNumber: 33
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 352,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 345,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 334,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 333,
		columnNumber: 5
	}, this);
}
function StandardSection() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "standard-section",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "section-inner standard-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "standard-heading",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "The Compliant standard" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 371,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "The work is practical. The difference is how it feels." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 372,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 370,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "standard-list",
				children: [
					[
						"01",
						"Keep you compliant",
						"SARS, CIPC and payroll dates are our calendar — so they never become yours."
					],
					[
						"02",
						"Strengthen the numbers",
						"Books that answer questions, not another month-end you have to decode."
					],
					[
						"03",
						"Support your growth",
						"We start with what is actually happening in the business, not a template."
					]
				].map(([number, title, text]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "standard-item",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: number }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 377,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: title }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 378,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: text }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 379,
							columnNumber: 15
						}, this)
					]
				}, number, true, {
					fileName: _jsxFileName,
					lineNumber: 376,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 374,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 369,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 368,
		columnNumber: 5
	}, this);
}
function FaqList() {
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "faq-list",
		"data-reveal": true,
		children: faqs.map(({ question, answer }, index) => {
			const isOpen = openFaq === index;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "faq-item",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => setOpenFaq(isOpen ? -1 : index),
					className: "faq-trigger",
					"aria-expanded": isOpen,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: question }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 402,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, {
						className: isOpen ? "faq-chevron faq-chevron-open" : "faq-chevron",
						"aria-hidden": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 403,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 396,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: `faq-content ${isOpen ? "open" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "faq-answer",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: answer }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 407,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 406,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 405,
					columnNumber: 13
				}, this)]
			}, question, true, {
				fileName: _jsxFileName,
				lineNumber: 395,
				columnNumber: 11
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 391,
		columnNumber: 5
	}, this);
}
function FaqSection() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "faq",
		className: "faq-section",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "section-inner faq-inner-layout",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Good to know" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 422,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["Before we ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "talk." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 424,
				columnNumber: 23
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 423,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 421,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaqList, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 427,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 420,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 419,
		columnNumber: 5
	}, this);
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "contact",
		className: "contact-section",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "section-inner contact-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "contact-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, {
						muted: true,
						children: "Make the numbers useful"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 438,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["A clearer next step starts ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "here." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 440,
						columnNumber: 40
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 439,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Write, call, or WhatsApp Compliant Bookkeeping SA. Tell us what is on the books and we will come back with a practical next step — never a hard sell." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 442,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "contact-details",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock3, { "aria-hidden": "true" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 448,
							columnNumber: 15
						}, this), " Two offices in the Western Cape"] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 447,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { "aria-hidden": "true" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 451,
							columnNumber: 15
						}, this), " No obligation, no hard sell"] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 450,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 446,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "contact-directory",
						"aria-label": "Contact details",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "contact-directory-item",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "Email" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 457,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `mailto:${SITE.email}`,
									children: SITE.email
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 459,
									columnNumber: 19
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 458,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 456,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 455,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "contact-directory-item",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "Accounts" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 465,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `mailto:${SITE.accountsEmail}`,
									children: SITE.accountsEmail
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 467,
									columnNumber: 19
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 466,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 464,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 463,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "contact-directory-item",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "Primary · Alternate" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 473,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: SITE.phoneHref,
										children: SITE.phone
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 475,
										columnNumber: 19
									}, this),
									" · ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: SITE.phoneAltHref,
										children: SITE.phoneAlt
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 475,
										columnNumber: 63
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 474,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 472,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 471,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "contact-directory-item",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "Offices" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 481,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Cape Town · Ceres" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 482,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 480,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 479,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 454,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 437,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "form-panel",
				"data-reveal": true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactForm, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 488,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 487,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 436,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 435,
		columnNumber: 5
	}, this);
}
function InteriorHero({ kicker, title, intro, index }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "interior-hero",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "section-inner interior-hero-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "interior-index",
				children: index
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 509,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: kicker }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 511,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: title }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 512,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: intro }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 513,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 510,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 508,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 507,
		columnNumber: 5
	}, this);
}
//#endregion
export { FaqSection as a, HomePricingBand as c, ServicesList as d, ServicesSection as f, EditorialSection as i, InteriorHero as l, StandardSection as m, ApproachSection as n, FitSection as o, SoftwareSection as p, ContactSection as r, Hero as s, AffiliationsSection as t, PracticeProof as u };
