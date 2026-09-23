export function scrollToContactForm() {
  if (typeof document === "undefined") return false;
  const target =
    document.getElementById("consultation-form") ||
    document.getElementById("form-panel") ||
    document.getElementById("contact");

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    const firstInput = target.querySelector<HTMLInputElement>("input, select, textarea");
    if (firstInput) {
      setTimeout(() => firstInput.focus({ preventScroll: true }), 450);
    }
    return true;
  }

  if (typeof window !== "undefined") {
    window.location.href = "/#contact";
  }
  return false;
}
