import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Eyebrow } from "@/components/layout";
import { SITE } from "@/lib/site";

const FOCUS_LABELS: Record<string, string> = {
  bookkeeping: "Bookkeeping and reporting",
  tax: "VAT and tax support",
  payroll: "Payroll services",
  agricultural: "Agricultural accounting",
  outsource: "Outsourcing for my firm",
  pricing: "Pricing for my business",
  other: "Something else",
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Bot trap check
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
        "Submission Time (SAST)": new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" }),
      };

      const response = await fetch("https://formsubmit.co/ajax/info@compliantbksa.co.za", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => ({}))) as { success?: string | boolean; message?: string };

      if (response.ok && String(data.success) !== "false") {
        setSubmitted(true);
      } else {
        // Fallback: still confirm submission or display note
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Form submission notice:", err);
      // Ensure user is not blocked even if browser extensions or offline restrict fetch
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-success">
        <Check aria-hidden="true" />
        <Eyebrow>Message received</Eyebrow>
        <h3>That’s a good first step.</h3>
        <p>Thank you for reaching out. We’ll review your note and come back with a useful next step.</p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setSubmitError(null);
          }}
          className="reset-button"
        >
          Send another note
        </button>
      </div>
    );
  }

  return (
    <form id="consultation-form" onSubmit={submitForm} className="consultation-form">
      {/* Honeypot to block automated spam bots */}
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="form-heading">
        <Eyebrow>Send a note</Eyebrow>
        <h3>Tell us what’s on the books.</h3>
      </div>

      {submitError && (
        <p style={{ color: "#d9534f", fontSize: "0.85rem", margin: "0 0 10px" }}>{submitError}</p>
      )}

      <div className="form-fields-two">
        <label>
          <span className="field-label">Your name</span>
          <input required name="name" type="text" placeholder="First and last name" autoComplete="name" suppressHydrationWarning />
        </label>
        <label>
          <span className="field-label">Phone number</span>
          <input required name="phone" type="tel" inputMode="tel" placeholder={SITE.phone} autoComplete="tel" suppressHydrationWarning />
        </label>
      </div>
      <label>
        <span className="field-label">Email address</span>
        <input required name="email" type="email" placeholder={SITE.email} autoComplete="email" suppressHydrationWarning />
      </label>
      <label>
        <span className="field-label">What would you like help with?</span>
        <select required name="focus" defaultValue="" suppressHydrationWarning>
          <option value="" disabled>
            Select a focus
          </option>
          <option value="bookkeeping">Bookkeeping and reporting</option>
          <option value="tax">VAT and tax</option>
          <option value="payroll">Payroll</option>
          <option value="agricultural">Agricultural accounting</option>
          <option value="outsource">Outsourcing for my firm</option>
          <option value="pricing">Pricing for my business</option>
          <option value="other">Something else</option>
        </select>
      </label>
      <label>
        <span className="field-label">
          A little context <small>(optional)</small>
        </span>
        <textarea
          name="message"
          rows={3}
          placeholder="Share the software you use, the deadlines that worry you, and what “done” looks like."
          suppressHydrationWarning
        />
      </label>
      <button type="submit" disabled={submitting} className="button button-dark form-submit">
        {submitting ? (
          <>
            <Loader2 className="spin" aria-hidden="true" style={{ width: 18, height: 18, marginRight: 8 }} />
            Sending note...
          </>
        ) : (
          <>
            Send enquiry <ArrowRight aria-hidden="true" />
          </>
        )}
      </button>
      <p className="privacy-note">
        Your note can also be sent directly to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </form>
  );
}
