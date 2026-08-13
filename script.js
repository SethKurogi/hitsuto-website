const langButton = document.getElementById("langSwitch");
let currentLang = "en";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "ja" ? "ja" : "en";

  document.querySelectorAll("[data-en][data-ja]").forEach((el) => {
    const value = el.dataset[lang];
    if (value !== undefined) el.innerHTML = value;
  });

  langButton.textContent = lang === "en" ? "日本語" : "EN";
  document.title = lang === "en"
    ? "Hitsuto — Connecting People and Opportunity"
    : "Hitsuto — 人とビジネスの可能性をつなぐ";
}

langButton.addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "ja" : "en");
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
