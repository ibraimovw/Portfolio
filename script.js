/* =====================================================
   KEN SUPERB — simple JavaScript
   Здесь нет фреймворков: только обычный JavaScript.
   ===================================================== */

// ---------- 1. Переключение языка ----------
const translations = {
  en: {
    "nav.work":"WORK", "nav.about":"ABOUT", "nav.lab":"LAB", "nav.certificates":"CERTIFICATES", "nav.contact":"CONTACT",
    "hero.role":"FRONTEND DEVELOPER", "hero.lead":"Building modern interfaces.<br>Learning. Creating. Improving.",
    "hero.cta1":"VIEW MY JOURNEY ↗", "hero.cta2":"CONTACT ↗", "hero.scroll":"SCROLL TO EXPLORE",
    "about.label":"ABOUT ME", "about.title1":"I’m",
    "about.text":"An aspiring frontend developer focused on building clean, interactive and visually distinctive websites. Currently mastering JavaScript and turning ideas into real interfaces.",
    "status.title":"CURRENT STATUS", "status.learning":"Learning", "status.explore":"EXPLORE →",
    "level.foundation":"Foundation", "level.learning":"Learning", "status.now":"Currently learning",
    "journey.label":"BUILDING IN PUBLIC", "journey.title":"Small steps.<br><em>Big results.</em>",
    "journey.subtitle":"A transparent learning path instead of pretending to have experience I don’t have yet.",
    "journey.done":"Foundation", "journey.completed":"Completed", "journey.current":"Currently learning",
    "journey.progress":"In progress", "journey.next":"Coming next", "journey.planned":"Planned",
    "journey.first":"First real project", "journey.soon":"Coming soon",
    "work.label":"SELECTED WORK", "work.emptyTitle":"First project<br><em>loading...</em>",
    "work.emptyText":"This space is ready for your first real case study. The portfolio grows with you.",
    "lab.label":"KEN’S LAB", "lab.title":"Experiments<br><em>in progress.</em>",
    "lab.text":"Small experiments become proof of skill before big projects arrive.",
    "lab.one":"Fluid hover interaction.", "lab.two":"JavaScript time experiment.",
    "lab.three":"Mouse tracking and depth.", "lab.four":"Canvas visual playground.",
    "cert.label":"CERTIFICATIONS", "cert.title":"Proof of learning<br><em>and commitment.</em>",
    "cert.text":"Add your real course certificates here. No invented credentials.",
    "cert.add":"ADD CERTIFICATE →", "cert.future":"Future certificate", "cert.futureSub":"Your next milestone",
    "contact.eyebrow":"LET’S CONNECT", "contact.title":"LET’S BUILD<br><em>SOMETHING INTERESTING.</em>",
    "contact.text":"Open to learning, collaboration and first real projects.",
    "contact.button":"START A CONVERSATION ↗", "footer.text":"BUILDING THE NEXT VERSION."
  },
  ru: {
    "nav.work":"РАБОТЫ", "nav.about":"ОБО МНЕ", "nav.lab":"ЛАБОРАТОРИЯ", "nav.certificates":"СЕРТИФИКАТЫ", "nav.contact":"КОНТАКТ",
    "hero.role":"FRONTEND РАЗРАБОТЧИК", "hero.lead":"Создаю современные интерфейсы.<br>Изучаю. Создаю. Развиваюсь.",
    "hero.cta1":"МОЙ ПУТЬ ↗", "hero.cta2":"СВЯЗАТЬСЯ ↗", "hero.scroll":"ЛИСТАЙТЕ ДАЛЬШЕ",
    "about.label":"ОБО МНЕ", "about.title1":"Я —",
    "about.text":"Начинающий frontend-разработчик, который делает чистые, интерактивные и визуально выразительные сайты. Сейчас углубляю JavaScript и превращаю идеи в реальные интерфейсы.",
    "status.title":"ТЕКУЩИЙ СТАТУС", "status.learning":"Изучаю", "status.explore":"СМОТРЕТЬ →",
    "level.foundation":"Основа", "level.learning":"Изучение", "status.now":"Сейчас изучаю",
    "journey.label":"РАЗВИТИЕ", "journey.title":"Маленькие шаги.<br><em>Большие результаты.</em>",
    "journey.subtitle":"Показываю реальный путь обучения вместо того, чтобы приписывать себе несуществующий опыт.",
    "journey.done":"Основа", "journey.completed":"Завершено", "journey.current":"Изучаю сейчас",
    "journey.progress":"В процессе", "journey.next":"Следующий этап", "journey.planned":"Запланировано",
    "journey.first":"Первый реальный проект", "journey.soon":"Скоро",
    "work.label":"ИЗБРАННЫЕ РАБОТЫ", "work.emptyTitle":"Первый проект<br><em>загружается...</em>",
    "work.emptyText":"Здесь появится твой первый полноценный кейс. Портфолио будет расти вместе с тобой.",
    "lab.label":"ЛАБОРАТОРИЯ KEN", "lab.title":"Эксперименты<br><em>в процессе.</em>",
    "lab.text":"Небольшие эксперименты становятся доказательством навыков ещё до больших проектов.",
    "lab.one":"Плавная hover-анимация.", "lab.two":"Эксперимент со временем на JS.",
    "lab.three":"Отслеживание мыши и глубина.", "lab.four":"Визуальный playground на Canvas.",
    "cert.label":"СЕРТИФИКАТЫ", "cert.title":"Подтверждение обучения<br><em>и дисциплины.</em>",
    "cert.text":"Добавь сюда реальные сертификаты курсов. Никаких выдуманных credentials.",
    "cert.add":"ДОБАВИТЬ СЕРТИФИКАТ →", "cert.future":"Будущий сертификат", "cert.futureSub":"Следующий этап",
    "contact.eyebrow":"ДАВАЙТЕ НА СВЯЗЬ", "contact.title":"СОЗДАДИМ<br><em>ЧТО-ТО ИНТЕРЕСНОЕ.</em>",
    "contact.text":"Открыт к обучению, сотрудничеству и первым реальным проектам.",
    "contact.button":"НАПИСАТЬ ↗", "footer.text":"СОЗДАЮ СЛЕДУЮЩУЮ ВЕРСИЮ."
  }
};

let currentLanguage = localStorage.getItem("ken-lang") || "en";
const languageButton = document.getElementById("langToggle");

function changeLanguage() {
  document.documentElement.lang = currentLanguage;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(function(element) {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = translations[currentLanguage][key];
  });

  languageButton.textContent = currentLanguage === "en" ? "EN / RU" : "RU / EN";
  localStorage.setItem("ken-lang", currentLanguage);
}

languageButton.addEventListener("click", function() {
  currentLanguage = currentLanguage === "en" ? "ru" : "en";
  changeLanguage();
});

changeLanguage();

// ---------- 2. Прелоадер ----------
window.addEventListener("load", function() {
  setTimeout(function() {
    document.querySelector(".loader").classList.add("hide");
  }, 900);
});

// ---------- 3. Верхнее меню при прокрутке ----------
window.addEventListener("scroll", function() {
  const navigation = document.querySelector(".nav");

  if (window.scrollY > 30) {
    navigation.classList.add("scrolled");
  } else {
    navigation.classList.remove("scrolled");
  }
});

// ---------- 4. Появление блоков при прокрутке ----------
// IntersectionObserver следит, когда элемент появляется на экране.
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(function(element) {
  observer.observe(element);
});

// ---------- 5. Светящийся эффект возле курсора ----------
const cursorGlow = document.querySelector(".cursor-glow");
const scene = document.getElementById("scene");

window.addEventListener("pointermove", function(event) {
  cursorGlow.style.left = event.clientX + "px";
  cursorGlow.style.top = event.clientY + "px";

  // 3D-объект слегка двигается за курсором только на ПК.
  if (window.innerWidth > 900 && scene) {
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 16;
    scene.style.transform = "translate(" + x + "px, " + y + "px)";
  }
});

// ---------- 6. Небольшой эффект магнитных кнопок ----------
const magneticButtons = document.querySelectorAll(".magnetic");

magneticButtons.forEach(function(button) {
  button.addEventListener("pointermove", function(event) {
    if (window.innerWidth < 800) return;

    const box = button.getBoundingClientRect();
    const x = event.clientX - box.left - box.width / 2;
    const y = event.clientY - box.top - box.height / 2;

    button.style.transform = "translate(" + x * 0.12 + "px, " + y * 0.12 + "px)";
  });

  button.addEventListener("pointerleave", function() {
    button.style.transform = "";
  });
});

// ---------- 7. Наклон карточек в Lab ----------
const cards = document.querySelectorAll(".magnetic-card");

cards.forEach(function(card) {
  card.addEventListener("pointermove", function(event) {
    if (window.innerWidth < 800) return;

    const box = card.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;

    card.style.transform = "perspective(700px) rotateX(" + y * -5 + "deg) rotateY(" + x * 5 + "deg) translateY(-3px)";
  });

  card.addEventListener("pointerleave", function() {
    card.style.transform = "";
  });
});

// ---------- 8. Мобильное меню ----------
const mobileMenu = document.getElementById("mobileMenu");
const menuButton = document.getElementById("menuToggle");
const closeButton = document.getElementById("closeMenu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", function() {
  mobileMenu.classList.add("open");
  document.body.classList.add("menu-open");
});

closeButton.addEventListener("click", closeMobileMenu);

mobileLinks.forEach(function(link) {
  link.addEventListener("click", closeMobileMenu);
});

// ---------- 9. Ctrl + K / Cmd + K ----------
document.addEventListener("keydown", function(event) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
});
