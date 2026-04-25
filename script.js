/* ===== SITE INTERATIVO ===== */
/* Controle do menu mobile, validação de formulário e feedback visual de envio */

// ===== ELEMENTOS DO DOM =====
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

// ===== FUNÇÕES DE MENU =====
function closeMenu() {
  if (!menuToggle || !mainNav) return;

  mainNav.classList.remove("is-open");
  menuToggle.classList.remove("is-active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

function openMenu() {
  if (!menuToggle || !mainNav) return;

  mainNav.classList.add("is-open");
  menuToggle.classList.add("is-active");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Fechar menu");
}

if (menuToggle && mainNav) {
  // Alterna o menu mobile ao clicar no botão
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Fecha o menu ao clicar em um link de navegação no mobile
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 820) {
        closeMenu();
      }
    });
  });

  // Fecha o menu ao clicar fora do cabeçalho
  document.addEventListener("click", (event) => {
    const clickedInsideHeader = event.target.closest(".site-header");
    if (!clickedInsideHeader && window.innerWidth <= 820) {
      closeMenu();
    }
  });

  // Fecha o menu ao pressionar Esc
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Garantia de layout: fecha menu ao redimensionar para desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeMenu();
    }
  });
}

// ===== VALIDAÇÃO DE FORMULÁRIO =====
function showError(input, message) {
  const formGroup = input.closest(".form-group");
  const errorMessage = formGroup.querySelector(".error-message");

  input.classList.add("input-error");
  errorMessage.textContent = message;
}

function clearError(input) {
  const formGroup = input.closest(".form-group");
  const errorMessage = formGroup.querySelector(".error-message");

  input.classList.remove("input-error");
  errorMessage.textContent = "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function validatePhone(phone) {
  const numbers = phone.replace(/\D/g, "");
  return numbers.length >= 10 && numbers.length <= 11;
}

function validateField(input) {
  const value = input.value.trim();
  const name = input.name;

  clearError(input);

  if (!value) {
    showError(input, "Este campo é obrigatório.");
    return false;
  }

  if (name === "email" && !validateEmail(value)) {
    showError(input, "Digite um e-mail válido.");
    return false;
  }

  if (name === "phone" && !validatePhone(value)) {
    showError(input, "Digite um telefone válido com DDD.");
    return false;
  }

  if (name === "message" && value.length < 10) {
    showError(input, "Digite uma mensagem com pelo menos 10 caracteres.");
    return false;
  }

  return true;
}

if (contactForm) {
  const fields = Array.from(contactForm.querySelectorAll("input, textarea"));

  fields.forEach((field) => {
    field.addEventListener("input", () => validateField(field));
    field.addEventListener("blur", () => validateField(field));
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = fields.every((field) => validateField(field));

    if (!isValid) {
      formFeedback.textContent = "Revise os campos destacados antes de enviar.";
      formFeedback.style.color = "#d94a39";
      return;
    }

    formFeedback.textContent =
      "Mensagem enviada com sucesso! Nossa equipe entrará em contato com você. Obrigado!";
    formFeedback.style.color = "#2b8a5a";

    contactForm.reset();
    fields.forEach((field) => clearError(field));
  });
}
