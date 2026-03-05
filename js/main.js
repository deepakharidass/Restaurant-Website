const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}

function handleForm(formId, successId) {
  const form = document.getElementById(formId);
  const successEl = document.getElementById(successId);

  if (!form || !(form instanceof HTMLFormElement)) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    form.classList.remove("invalid");
    if (successEl) {
      successEl.textContent = "";
    }

    const fields = Array.from(
      form.querySelectorAll("input[required], textarea[required], select[required]")
    );

    let hasError = false;

    fields.forEach((field) => {
      if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement)) {
        return;
      }

      const errorEl = form.querySelector(
        `.form-error[data-for="${field.id}"]`
      );
      if (errorEl) {
        errorEl.textContent = "";
      }

      const value = field.value.trim();

      if (!value) {
        hasError = true;
        if (errorEl) {
          errorEl.textContent = "This field is required.";
        }
        return;
      }

      if (field.type === "email") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          hasError = true;
          if (errorEl) {
            errorEl.textContent = "Please enter a valid email address.";
          }
        }
      }

      if (field.id === "contact-message" && value.length < 10) {
        hasError = true;
        if (errorEl) {
          errorEl.textContent = "Please provide at least 10 characters.";
        }
      }
    });

    if (hasError) {
      form.classList.add("invalid");
      return;
    }

    if (successEl) {
      successEl.textContent = "Thank you! Your request has been received.";
    }

    form.reset();
  });
}

handleForm("contact-form", "contact-success");
handleForm("booking-form", "booking-success");

