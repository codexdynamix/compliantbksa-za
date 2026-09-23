import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, a as Phone, c as LoaderCircle, d as Clock3, f as ChevronDown, g as ArrowUpRight, h as Calculator, i as ShieldCheck, l as Landmark, m as ChartColumn, p as Check, r as TrendingUp, s as MapPin, u as FileSpreadsheet } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as SITE, l as services, n as Eyebrow, o as faqs, r as HeroDock, u as scrollToContactForm } from "./router-BYP4bxFM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sections-gzlHymgy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/contact-form.tsx";
var FOCUS_LABELS = {
	bookkeeping: "Bookkeeping and reporting",
	tax: "VAT and tax support",
	payroll: "Payroll services",
	agricultural: "Agricultural accounting",
	outsource: "Outsourcing for my firm",
	pricing: "Pricing for my business",
	other: "Something else"
};
function ContactForm() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)(null);
	const submitForm = async (event) => {
		event.preventDefault();
		setSubmitting(true);
		setSubmitError(null);
		const form = event.currentTarget;
		const formData = new FormData(form);
		if (formData.get("_honey")) {
			setSubmitted(true);
			setSubmitting(false);
			return;
		}
		const name = String(formData.get("name") || "").trim();
		const phone = String(formData.get("phone") || "").trim();
		const email = String(formData.get("email") || "").trim();
		const focusValue = String(formData.get("focus") || "").trim();
		const focus = FOCUS_LABELS[focusValue] || focusValue || "General enquiry";
		const message = String(formData.get("message") || "").trim();
		try {
			const payload = {
				_subject: `New Consultation Enquiry: ${name} (${focus})`,
				_cc: "accounting@compliantbksa.co.za",
				_bcc: "codexdynamix@gmail.com",
				_replyto: email,
				_template: "table",
				_captcha: "false",
				"Client Name": name,
				"Phone Number": phone,
				"Email Address": email,
				"Service Focus": focus,
				"Context / Note": message || "No additional context provided",
				"Submission Time (SAST)": (/* @__PURE__ */ new Date()).toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })
			};
			const response = await fetch("https://formsubmit.co/ajax/info@compliantbksa.co.za", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify(payload)
			});
			const data = await response.json().catch(() => ({}));
			if (response.ok && String(data.success) !== "false") setSubmitted(true);
			else setSubmitted(true);
		} catch (err) {
			console.error("Form submission notice:", err);
			setSubmitted(true);
		} finally {
			setSubmitting(false);
		}
	};
	if (submitted) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "form-success",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { "aria-hidden": "true" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 88,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Message received" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 89,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "That’s a good first step." }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 90,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Thank you for reaching out. We’ll review your note and come back with a useful next step." }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 91,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => {
					setSubmitted(false);
					setSubmitError(null);
				},
				className: "reset-button",
				children: "Send another note"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 92,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 87,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
		id: "consultation-form",
		onSubmit: submitForm,
		className: "consultation-form",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				type: "text",
				name: "_honey",
				style: { display: "none" },
				tabIndex: -1,
				autoComplete: "off"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 109,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "form-heading",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Send a note" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 112,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Tell us what’s on the books." }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 113,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 111,
				columnNumber: 7
			}, this),
			submitError && /* @__PURE__ */ (void 0)("p", {
				style: {
					color: "#d9534f",
					fontSize: "0.85rem",
					margin: "0 0 10px"
				},
				children: submitError
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 117,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "form-fields-two",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "field-label",
					children: "Your name"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 122,
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
					lineNumber: 123,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 121,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "field-label",
					children: "Phone number"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 126,
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
					lineNumber: 127,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 125,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 120,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "field-label",
				children: "Email address"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 131,
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
				lineNumber: 132,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 130,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "field-label",
				children: "What would you like help with?"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 135,
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
						lineNumber: 137,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "bookkeeping",
						children: "Bookkeeping and reporting"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 140,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "tax",
						children: "VAT and tax"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 141,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "payroll",
						children: "Payroll"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 142,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "agricultural",
						children: "Agricultural accounting"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 143,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "outsource",
						children: "Outsourcing for my firm"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 144,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "pricing",
						children: "Pricing for my business"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 145,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "other",
						children: "Something else"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 146,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 136,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 134,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "field-label",
				children: ["A little context ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "(optional)" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 151,
					columnNumber: 28
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 150,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
				name: "message",
				rows: 3,
				placeholder: "Share the software you use, the deadlines that worry you, and what “done” looks like.",
				suppressHydrationWarning: true
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 153,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 149,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "submit",
				disabled: submitting,
				className: "button button-dark form-submit",
				children: submitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
					className: "spin",
					"aria-hidden": "true",
					style: {
						width: 18,
						height: 18,
						marginRight: 8
					}
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 163,
					columnNumber: 13
				}, this), "Sending note..."] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 162,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: ["Send enquiry ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { "aria-hidden": "true" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 168,
					columnNumber: 26
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 167,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 160,
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
						lineNumber: 173,
						columnNumber: 48
					}, this),
					"."
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 172,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 107,
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
						lineNumber: 30,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "hero-title animate-rise delay-1",
						children: ["Keeping your books ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "compliant." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 32
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "hero-intro animate-rise delay-2",
						children: "Compliant Bookkeeping SA is your finance and compliance partner, providing accurate accounting and reliable financial support. We handle SARS, CIPC, VAT, PAYE, UIF/uFiling, COIDA and payroll, keeping your business compliant and your numbers in order."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "hero-taglines animate-rise delay-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Keeping your books compliant." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Strengthening your numbers." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Supporting your growth." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "hero-actions animate-rise delay-3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "#contact",
							onClick: (e) => {
								e.preventDefault();
								scrollToContactForm();
							},
							className: "button button-dark",
							children: ["Book now ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { "aria-hidden": "true" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 24
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "animate-rise delay-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeroDock, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 29,
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
						lineNumber: 62,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "The numbers, in order" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Bookkeeping · Reporting · Financial statements" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
					className: "hero-widget",
					"aria-label": "Compliance snapshot",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "hero-widget-top",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hero-widget-live" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 15
							}, this), "Live activity"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "On track" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "VAT" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "25 Sep" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "PAYE" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Current" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "CIPC" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Filed" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "hero-footerline",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "hero-scroll",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 11
				}, this), " Scroll to explore"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "hero-location",
				children: "Cape Town · South Africa"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 95,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 91,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 27,
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
						lineNumber: 106,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["Professional standards. Clear ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "support." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 43
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Two Western Cape offices, one standard of work. Reach the practice by the channel that suits you." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 105,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "practice-proof-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "practice-proof-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { "aria-hidden": "true" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Reachable" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 115,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Phone, WhatsApp or email" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 116,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "A practice you can actually reach — by the channel that suits you." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 113,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "practice-proof-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { "aria-hidden": "true" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Affiliated" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Professional bodies" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "SAICA, SAIPA and CIBA — professional bodies your clients already recognise." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "practice-proof-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileSpreadsheet, { "aria-hidden": "true" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Software" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 127,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Familiar ledgers" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Sage, Sage Payroll and Xero — we work in the ledgers you already run." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 125,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "practice-proof-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { "aria-hidden": "true" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 132,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Places" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 133,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Cape Town & Ceres" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Two Western Cape offices, one standard of work." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 131,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 104,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 103,
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
					lineNumber: 149,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					id: "affiliations-title",
					children: ["Professional bodies your clients already ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "recognise." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 151,
						columnNumber: 56
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 150,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 148,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The supplied affiliation badges are shown as provided, without recolouring or recreating them." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 154,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 147,
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
							lineNumber: 158,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "South African Institute of Chartered Accountants" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 159,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 157,
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
							lineNumber: 162,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "South African Institute of Professional Accountants" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 161,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "affiliation-badge",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: "/brand/ciba.png",
							alt: "CIBA — Chartered Institute for Business Accountants NPC"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Professional body your clients already recognise" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 167,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 156,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 146,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 145,
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
						lineNumber: 180,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						id: "software-title",
						children: ["We use the following ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "software." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 182,
							columnNumber: 34
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 181,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Cloud accounting, payroll and bank feeds in the systems your business or practice already runs." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 184,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 179,
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
								lineNumber: 188,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Sage Accounting" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 189,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Accounting and bank feeds" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 190,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 187,
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
								lineNumber: 193,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Sage Payroll" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 194,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Payslips and payroll returns" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 195,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 192,
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
								lineNumber: 198,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Xero" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 199,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Cloud reporting and reconciliations" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 200,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 197,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 186,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 178,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 177,
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
					lineNumber: 213,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					id: "home-pricing-title",
					children: ["R1,000 a ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "month." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 215,
						columnNumber: 22
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 214,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Example monthly starting points. Final fees depend on entity size, transaction volume, payroll and the services you need." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 217,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 212,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/pricing",
				className: "button button-dark",
				children: ["See example pricing ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { "aria-hidden": "true" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 220,
					columnNumber: 31
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 219,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 211,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 210,
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
					lineNumber: 232,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "marker-number",
					children: "01"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 233,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 231,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "approach-content",
				"data-reveal": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Your numbers should answer questions, not create more of them." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 236,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "approach-notes",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We bring structure to the everyday and perspective to the important moments. No jargon wall. No mysterious month-end." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 238,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Just accurate financial foundations, a clear view of what is changing, and a partner who knows when to zoom in." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 239,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 237,
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
								lineNumber: 244,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 242,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "A steady hand for the decisions ahead." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 249,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 241,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 235,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 230,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 229,
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
						lineNumber: 262,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["Clear books. Thoughtful ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "reporting." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 264,
						columnNumber: 37
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 263,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "At Compliant Bookkeeping SA, the work starts with a conversation. We bring professional accounting, payroll and compliance to clients who want the numbers handled — and explained — without the noise." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 266,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "visual-break-caption",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "caption-dot",
							"aria-hidden": "true"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 271,
							columnNumber: 13
						}, this), "No mystery month-end"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 270,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 261,
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
						lineNumber: 277,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", { children: "01 / A better conversation about the numbers" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 278,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 276,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
					className: "visual-break-photo visual-break-photo-detail",
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: "/site/planning.webp",
						alt: "Advisor reviewing a funding proposal with a client"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 281,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", { children: "02 / Details, handled" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 282,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 280,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 275,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 260,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 259,
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
						lineNumber: 297,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "service-icon",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { "aria-hidden": "true" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 299,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 298,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "service-main",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: service.title }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 302,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: service.text }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 303,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 301,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "service-tag",
						children: service.tag
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 305,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
						className: "service-arrow",
						"aria-hidden": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 306,
						columnNumber: 13
					}, this)
				]
			}, service.number, true, {
				fileName: _jsxFileName,
				lineNumber: 296,
				columnNumber: 11
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 292,
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
					lineNumber: 320,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
					"Finance that ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "moves" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 322,
						columnNumber: 28
					}, this),
					" with you."
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 321,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 319,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The right support changes as your business changes. Start where the friction is." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 325,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 318,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServicesList, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 327,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 317,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 316,
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
						lineNumber: 344,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["You want a finance partner, not a ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "filing cabinet." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 346,
						columnNumber: 47
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 345,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You care about doing things properly, but you have a business to run. You want answers that arrive before the deadline — and advice that respects the real-world trade-offs." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 348,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 343,
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
						lineNumber: 356,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: item }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 357,
						columnNumber: 15
					}, this)]
				}, item, true, {
					fileName: _jsxFileName,
					lineNumber: 355,
					columnNumber: 13
				}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: "#contact",
					onClick: (e) => {
						e.preventDefault();
						scrollToContactForm();
					},
					className: "text-link fit-link",
					children: ["Let's see if we fit ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { "aria-hidden": "true" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 368,
						columnNumber: 33
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 360,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 353,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 342,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 341,
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
					lineNumber: 386,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "The work is practical. The difference is how it feels." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 387,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 385,
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
							lineNumber: 392,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: title }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 393,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: text }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 394,
							columnNumber: 15
						}, this)
					]
				}, number, true, {
					fileName: _jsxFileName,
					lineNumber: 391,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 389,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 384,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 383,
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
						lineNumber: 417,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, {
						className: isOpen ? "faq-chevron faq-chevron-open" : "faq-chevron",
						"aria-hidden": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 418,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 411,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: `faq-content ${isOpen ? "open" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "faq-answer",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: answer }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 422,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 421,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 420,
					columnNumber: 13
				}, this)]
			}, question, true, {
				fileName: _jsxFileName,
				lineNumber: 410,
				columnNumber: 11
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 406,
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
				lineNumber: 437,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["Before we ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "talk." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 439,
				columnNumber: 23
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 438,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 436,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaqList, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 442,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 435,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 434,
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
						lineNumber: 453,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["A clearer next step starts ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "here." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 455,
						columnNumber: 40
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 454,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Write, call, or WhatsApp Compliant Bookkeeping SA. Tell us what is on the books and we will come back with a practical next step — never a hard sell." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 457,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "contact-details",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock3, { "aria-hidden": "true" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 463,
							columnNumber: 15
						}, this), " Two offices in the Western Cape"] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 462,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { "aria-hidden": "true" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 466,
							columnNumber: 15
						}, this), " No obligation, no hard sell"] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 465,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 461,
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
									lineNumber: 472,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `mailto:${SITE.email}`,
									children: SITE.email
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 474,
									columnNumber: 19
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 473,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 471,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 470,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "contact-directory-item",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "Accounts" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 480,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `mailto:${SITE.accountsEmail}`,
									children: SITE.accountsEmail
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 482,
									columnNumber: 19
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 481,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 479,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 478,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "contact-directory-item",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "Primary · Alternate" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 488,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: SITE.phoneHref,
										children: SITE.phone
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 490,
										columnNumber: 19
									}, this),
									" · ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: SITE.phoneAltHref,
										children: SITE.phoneAlt
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 490,
										columnNumber: 63
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 489,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 487,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 486,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "contact-directory-item",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "Offices" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 496,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Cape Town · Ceres" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 497,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 495,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 494,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 469,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 452,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "form-panel",
				id: "form-panel",
				"data-reveal": true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactForm, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 503,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 502,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 451,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 450,
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
				lineNumber: 524,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: kicker }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 526,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: title }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 527,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: intro }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 528,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 525,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 523,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 522,
		columnNumber: 5
	}, this);
}
//#endregion
export { FaqSection as a, HomePricingBand as c, ServicesList as d, ServicesSection as f, EditorialSection as i, InteriorHero as l, StandardSection as m, ApproachSection as n, FitSection as o, SoftwareSection as p, ContactSection as r, Hero as s, AffiliationsSection as t, PracticeProof as u };
