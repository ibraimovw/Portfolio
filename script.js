const translations = {
  en: {
    "nav.work": "WORK",
    "nav.about": "ABOUT",
    "nav.lab": "LAB",
    "nav.certificates": "CERTIFICATES",
    "nav.contact": "CONTACT",
    "hero.role": "FRONTEND DEVELOPER",
    "hero.lead": "Building modern interfaces.<br>Learning. Creating. Improving.",
    "hero.cta1": "VIEW MY JOURNEY ↗",
    "hero.cta2": "CONTACT ↗",
    "hero.scroll": "SCROLL TO EXPLORE",
    "about.label": "ABOUT ME",
    "about.title1": "I’m",
    "about.text": "An aspiring frontend developer focused on building clean, interactive and visually distinctive websites. Currently mastering JavaScript and turning ideas into real interfaces.",
    "status.title": "CURRENT STATUS",
    "status.learning": "Learning",
    "status.explore": "EXPLORE →",
    "level.foundation": "Foundation",
    "level.learning": "Learning",
    "status.now": "Currently learning",
    "journey.label": "BUILDING IN PUBLIC",
    "journey.title": "Small steps.<br><em>Big results.</em>",
    "journey.subtitle": "A transparent learning path instead of pretending to have experience I don’t have yet.",
    "journey.done": "Foundation",
    "journey.completed": "Completed",
    "journey.current": "Currently learning",
    "journey.progress": "In progress",
    "journey.next": "Coming next",
    "journey.planned": "Planned",
    "journey.first": "First real project",
    "journey.soon": "Coming soon",
    "work.label": "SELECTED WORK",
    "work.emptyTitle": "First project<br><em>loading...</em>",
    "work.emptyText": "This space is ready for your first real case study. The portfolio grows with you.",
    "lab.label": "KEN’S LAB",
    "lab.title": "Experiments<br><em>in progress.</em>",
    "lab.text": "Small experiments become proof of skill before big projects arrive.",
    "lab.one": "Fluid hover interaction.",
    "lab.two": "JavaScript time experiment.",
    "lab.three": "Mouse tracking and depth.",
    "lab.four": "Canvas visual playground.",
    "cert.label": "CERTIFICATIONS",
    "cert.title": "Proof of learning<br><em>and commitment.</em>",
    "cert.text": "Add your real course certificates here. No invented credentials.",
    "cert.add": "ADD CERTIFICATE →",
    "cert.future": "Future certificate",
    "cert.futureSub": "Your next milestone",
    "contact.eyebrow": "LET’S CONNECT",
    "contact.title": "LET’S BUILD<br><em>SOMETHING INTERESTING.</em>",
    "contact.text": "Open to learning, collaboration and first real projects.",
    "contact.button": "START A CONVERSATION ↗",
    "footer.text": "BUILDING THE NEXT VERSION."
  },
  ru: {
    "nav.work": "РАБОТЫ",
    "nav.about": "ОБО МНЕ",
    "nav.lab": "ЛАБОРАТОРИЯ",
    "nav.certificates": "СЕРТИФИКАТЫ",
    "nav.contact": "КОНТАКТ",
    "hero.role": "FRONTEND РАЗРАБОТЧИК",
    "hero.lead": "Создаю современные интерфейсы.<br>Изучаю. Создаю. Развиваюсь.",
    "hero.cta1": "МОЙ ПУТЬ ↗",
    "hero.cta2": "СВЯЗАТЬСЯ ↗",
    "hero.scroll": "ЛИСТАЙТЕ ДАЛЬШЕ",
    "about.label": "ОБО МНЕ",
    "about.title1": "Я —",
    "about.text": "Начинающий frontend-разработчик, который делает чистые, интерактивные и визуально выразительные сайты. Занимаюсь программированием с 2019 года. Сейчас углубляю знания JavaScript. Могу превратить ваши идеи в реальные интерфейсы.",
    "status.title": "ТЕКУЩИЙ СТАТУС",
    "status.learning": "Изучаю",
    "status.explore": "СМОТРЕТЬ →",
    "level.foundation": "Основа",
    "level.learning": "Изучение",
    "status.now": "Сейчас изучаю",
    "journey.label": "РАЗВИТИЕ",
    "journey.title": "Маленькие шаги.<br><em>Большие результаты.</em>",
    "journey.subtitle": "Показываю реальный путь обучения вместо того, чтобы приписывать себе несуществующий опыт.",
    "journey.done": "Основа",
    "journey.completed": "Завершено",
    "journey.current": "Изучаю сейчас",
    "journey.progress": "В процессе",
    "journey.next": "Следующий этап",
    "journey.planned": "Запланировано",
    "journey.first": "Первый реальный проект",
    "journey.soon": "Скоро",
    "work.label": "ИЗБРАННЫЕ РАБОТЫ",
    "work.emptyTitle": "Первый проект<br><em>загружается...</em>",
    "work.emptyText": "Здесь появится твой первый полноценный кейс. Портфолио будет расти вместе с тобой.",
    "lab.label": "ЛАБОРАТОРИЯ KEN",
    "lab.title": "Эксперименты<br><em>в процессе.</em>",
    "lab.text": "Небольшие эксперименты становятся доказательством навыков ещё до больших проектов.",
    "lab.one": "Плавная hover-анимация.",
    "lab.two": "Эксперимент со временем на JS.",
    "lab.three": "Отслеживание мыши и глубина.",
    "lab.four": "Визуальный playground на Canvas.",
    "cert.label": "СЕРТИФИКАТЫ",
    "cert.title": "Подтверждение обучения<br><em>и дисциплины.</em>",
    "cert.text": "Добавь сюда реальные сертификаты курсов. Никаких выдуманных credentials.",
    "cert.add": "ДОБАВИТЬ СЕРТИФИКАТ →",
    "cert.future": "Будущий сертификат",
    "cert.futureSub": "Следующий этап",
    "contact.eyebrow": "ДАВАЙТЕ НА СВЯЗЬ",
    "contact.title": "СОЗДАДИМ<br><em>ЧТО-ТО ИНТЕРЕСНОЕ.</em>",
    "contact.text": "Открыт к обучению, сотрудничеству и первым реальным проектам.",
    "contact.button": "НАПИСАТЬ ↗",
    "footer.text": "СОЗДАЮ СЛЕДУЮЩУЮ ВЕРСИЮ."
  }
};

const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
let lang=localStorage.getItem('ken-lang')||'en';

function applyLang(){
  document.documentElement.lang=lang;
  $$('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[lang][key]) el.innerHTML=translations[lang][key];
  });
  $('#langToggle').textContent=lang==='en'?'EN / RU':'RU / EN';
  localStorage.setItem('ken-lang',lang);
}
$('#langToggle').addEventListener('click',()=>{lang=lang==='en'?'ru':'en';applyLang()});
applyLang();

window.addEventListener('load',()=>setTimeout(()=>$('.loader').classList.add('hide'),900));
const nav=$('.nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30),{passive:true});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
$$('.reveal').forEach(el=>observer.observe(el));

const scene=$('#scene');
const glow=$('.cursor-glow');
window.addEventListener('pointermove',e=>{
  glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px';
  if(innerWidth>900 && scene){
    const x=(e.clientX/innerWidth-.5)*2, y=(e.clientY/innerHeight-.5)*2;
    scene.style.transform=`translate(${x*10}px,${y*8}px)`;
  }
},{passive:true});

$$('.magnetic').forEach(el=>{
  el.addEventListener('pointermove',e=>{
    if(innerWidth<800)return;
    const r=el.getBoundingClientRect(), x=e.clientX-r.left-r.width/2, y=e.clientY-r.top-r.height/2;
    el.style.transform=`translate(${x*.12}px,${y*.12}px)`;
  });
  el.addEventListener('pointerleave',()=>el.style.transform='');
});
$$('.magnetic-card').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    if(innerWidth<800)return;
    const r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(700px) rotateX(${y*-5}deg) rotateY(${x*5}deg) translateY(-3px)`;
  });
  card.addEventListener('pointerleave',()=>card.style.transform='');
});

const menu=$('#mobileMenu');
$('#menuToggle').addEventListener('click',()=>{menu.classList.add('open');document.body.classList.add('menu-open')});
$('#closeMenu').addEventListener('click',()=>{menu.classList.remove('open');document.body.classList.remove('menu-open')});
$$('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');document.body.classList.remove('menu-open')}));

document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.querySelector('#contact').scrollIntoView({behavior:'smooth'})}
});
