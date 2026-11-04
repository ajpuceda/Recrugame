"use strict";

const CONFIG = {
  DEMO_MODE: true,
  API_ENDPOINT: "[URL-DEL-WORKER]/api/grade",
  CANDIDATE_ENDPOINT: "[URL-DEL-WORKER]/api/candidate",
  LETTER_ENDPOINT: "[URL-DEL-WORKER]/api/letter",
  MAX_ATTEMPTS: 3,
  CTA_URL: "mailto:[TU-EMAIL]",
  LEAD_ENDPOINT: "[LEAD-ENDPOINT]"
};

const I18N = {
  pl: {
    intro: "Narracyjna gra w 4 aktach, która mierzy umiejętności rekruterów. 7–10 minut. Znajdź kandydata, którego nie ma na LinkedIn.",
    nameLabel: "Imię (opcjonalnie)",
    emailLabel: "Adres e-mail (wymagany)",
    consentPrivacy: "Akceptuję politykę prywatności i przetwarzanie moich danych w celu otrzymania wyniku.",
    privacyLink: "Zobacz politykę prywatności",
    consentMarketing: "Chcę otrzymywać powiązane treści i oferty współpracy (opcjonalnie).",
    startBtn: "Rozpocznij historię",
    attemptsLeft: "Pozostałe próby dla tego adresu e-mail: {n}",
    attemptsExhausted: "Wykorzystałeś już wszystkie próby dla tego adresu e-mail.",
    act1Kicker: "Akt 1 · Brief",
    act1Title: "Noc. Twój telefon dzwoni.",
    playBrief: "Odsłuchaj wiadomość od klienta",
    briefSubtitle: "„Potrzebuję senior Data Engineera ze Sparkiem dla Warszawy, na 3 tygodnie — a LinkedIn jest pusty.”",
    act1Tension: "„Przyjmujesz to wyzwanie?”",
    acceptChallenge: "Tak, przyjmuję",
    declineChallenge: "Nie, dziękuję",
    declineMsg: "Klient dzwoni do następnego headhuntera… Spróbuj jeszcze raz!",
    act2Kicker: "Akt 2 · Poszukiwanie",
    act2MailSubject: "pilne: Data Engineer (Spark) — Warszawa",
    act2MailBody: "Cześć,\npotrzebuję senior Data Engineera z doświadczeniem w Apache Spark. Lokalizacja: Warszawa (lub remote). Start w 3 tygodnie.\nLinkedIn nic nie pokazuje — znajdź kogoś przez X-Ray.\n— Anna",
    clientReplySubject: "Re: pilne: Data Engineer (Spark)",
    question1: "Które wyszukiwanie X-Ray w Google jest najlepsze?",
    options1: [
      "site:pl.linkedin.com/in (\"data engineer\" OR \"inżynier danych\") \"Spark\" (Warszawa OR \"remote\")",
      "\"data engineer\" Spark (bez operatorów site i lokalizacji)",
      "site:pl.linkedin.com/in \"Java developer\" Warszawa",
      "\"data engineer Warszawa senior\""
    ],
    clientReplyCorrect: "Świetnie — X-Ray z synonimami w języku lokalnym i operatorem site: daje największy zasięg precyzyjnych profili. Zaczynamy.",
    clientReplyWrong: "Hmm… to wyszukanie albo traci zasięg, albo precyzję. Spróbuj: operator site: + synonimy lokalne + technologia + lokalizacja.",
    act2AudioLabel: "Odsłuchaj wiadomość od Anny",
    act2Subtitle: "„Wysyłam ci szczegóły mailem. Trzy tygodnie, start w Warszawie. LinkedIn nic nie pokazuje — spróbuj X-Ray w Google.”",
    act3Kicker: "Akt 3 · Rozmowa",
    candidateName: "Marek — kandydat",
    typing: "Marek pisze…",
    sendMsg: "Wyślij",
    messagesLabel: "wiadomości",
    finishInterview: "Zakończ rozmowę",
    candidateGreeting: "Dzień dobry! Słyszałem, że szukacie kogoś do migracji systemu. W ostatnim projekcie samodzielnie przeprowadziłem pełną migrację.",
    act3AudioLabel: "Odsłuchaj wiadomość od Marka",
    act3Subtitle: "„Dzień dobry! Słyszałem, że szukacie kogoś do migracji systemu. W ostatnim projekcie samodzielnie przeprowadziłem pełną migrację.”",
    act4Kicker: "Akt 4 · Zwrot akcji",
    act4MailSubject: "PILNE: Marek dostał konkurencyjną ofertę",
    act4MailBody: "Marek właśnie dostał ofertę od konkurencji z 20% wyższą pensją. Ma 24h na decyzję.\nCo robisz jako jego doradca?",
    act4AudioLabel: "Odsłuchaj alert",
    act4Subtitle: "„Pilne! Marek dostał ofertę od konkurencji, o dwadzieścia procent wyższą. Ma dwadzieścia cztery godziny na decyzję.”",
    question4: "Jak odpowiadasz Markowi?",
    options4: [
      "„ Gratulacje oferty! Powodzenia w nowej pracy.”",
      "„Rozumiem ofertę, ale zapytaj o kulturę zespołu, zakres decyzyjny i realny zakres projektu — pensja to nie wszystko.”",
      "„Zaoferuję klientowi podwyżkę budżetu, żeby go przekonać.”",
      "„Nie odzywaj się — niech sam zdecyduje.”"
    ],
    act4Feedback: "Jako doradca pokazujesz wartość poza pensją: kultura, autonomia, projekt. To buduje lojalność kandydata — i marki klienta.",
    epilogueKicker: "Epilog · Werdykt",
    verdictSubject: "Werdykt od klienta",
    epilogueAudioLabel: "Odsłuchaj werdykt",
    epilogueSubtitle: "„Dziękuję za przeprowadzenie tej rekrutacji. Twój sposób myślenia był bardzo wartościowy — wrócimy do Ciebie przy następnej trudnej obsadzie.”",
    nextBtn: "Dalej",
    copyResult: "Kopiuj wynik",
    copied: "Skopiowano do schowka!",
    copyFallback: "Skopiuj ręcznie: {text}",
    cta: "Masz trudne do obsadzenia stanowiska specjalistyczne? Porozmawiajmy",
    shareText: "🎯 Uzyskałem {score}/100 w HeadHunter Challenge. Czy możesz mnie pokonać? {url}",
    levelNames: ["Scout w praktyce", "Łowca junior", "HeadHunter Pro", "Orle Oko"],
    feedbackTitle1: "Akt 2 — Sourcing",
    feedbackTitle2: "Akt 3 — Rozmowa (średnia z wiadomości)",
    feedbackTitle3: "Akt 4 — Doradztwo etyczne",
    feedbackCorrect: "Świetnie! Poprawna odpowiedź.",
    feedbackWrong: "To nie była najlepsza odpowiedź.",
    feedbackAiFallback: "Nie udało się połączyć z serwerem oceniającym — przyznano neutralną średnią punktację.",
    demoCandidate: ["Rozumiem. W tym projekcie pracowałem z zespołem 4 osób.","Migracja trwała 6 miesięcy i zakończyła się sukcesem.","Liderowałem, czyli odpowiadałem za całość."],
    demoLetter: "Dziękuję za przeprowadzenie tej rekrutacji. Twój sposób myślenia był bardzo wartościowy — wrócimy do Ciebie przy następnej trudnej obsadzie.",
    privacyTitle: "Polityka prywatności",
    privacyBody: `<p><strong>Administrator danych:</strong> [TU FIRMA], e-mail kontaktowy: [EMAIL].</p>
<p><strong>Zbierane dane:</strong> imię (opcjonalnie), adres e-mail, odpowiedzi w teście oraz znaczniki czasu.</p>
<p><strong>Cele przetwarzania:</strong> wysłanie wyniku testu, obsługa zgłoszenia oraz — wyłącznie za osobną zgodą — wysyłka treści marketingowych.</p>
<p><strong>Podstawa prawna:</strong> zgoda (art. 6 ust. 1 lit. a RODO).</p>
<p><strong>Okres przechowywania:</strong> 24 miesiące lub do momentu wycofania zgody.</p>
<p><strong>Twoje prawa:</strong> dostęp do danych, sprostowanie, usunięcie, ograniczenie przetwarzania, sprzeciw oraz przenoszenie danych.</p>
<p><strong>Ocena AI:</strong> odpowiedzi są oceniane przez sztuczną inteligencję; dane są przetwarzane przez dostawcę wnioskowania (Mistral AI) zgodnie z jego polityką prywatności.</p>
<p><strong>Wycofanie zgody:</strong> w każdej chwili możesz wycofać zgodę, wysyłając wiadomość na adres [EMAIL].</p>`
  },
  es: {
    intro: "Una historia narrativa en 4 actos que mide las habilidades de reclutadores. 7–10 minutos. Encuentra al candidato que no está en LinkedIn.",
    nameLabel: "Nombre (opcional)",
    emailLabel: "Correo electrónico (obligatorio)",
    consentPrivacy: "Acepto la política de privacidad y el tratamiento de mis datos para recibir mi resultado.",
    privacyLink: "Ver política de privacidad",
    consentMarketing: "Quiero recibir contenido relacionado y ofertas de colaboración (opcional).",
    startBtn: "Empezar la historia",
    attemptsLeft: "Intentos restantes para este correo: {n}",
    attemptsExhausted: "Ya has usado todos los intentos para este correo electrónico.",
    act1Kicker: "Acto 1 · El brief",
    act1Title: "Noche. Suena tu teléfono.",
    playBrief: "Escuchar el mensaje del cliente",
    briefSubtitle: "«Necesito un Data Engineer senior con Spark para Varsovia, en 3 semanas, y LinkedIn está vacío».",
    act1Tension: "«¿Aceptas el reto?»",
    acceptChallenge: "Sí, acepto",
    declineChallenge: "No, gracias",
    declineMsg: "El cliente llama al siguiente headhunter… ¡Inténtalo de nuevo!",
    act2Kicker: "Acto 2 · La búsqueda",
    act2MailSubject: "urgente: Data Engineer (Spark) — Varsovia",
    act2MailBody: "Hola,\nnecesito un Data Engineer senior con experiencia en Apache Spark. Ubicación: Varsovia (o remoto). Incorporación en 3 semanas.\nLinkedIn no muestra nada — encuéntrame a alguien con X-Ray.\n— Anna",
    clientReplySubject: "Re: urgente: Data Engineer (Spark)",
    question1: "¿Qué búsqueda X-Ray en Google es la mejor?",
    options1: [
      "site:pl.linkedin.com/in (\"data engineer\" OR \"inżynier danych\") \"Spark\" (Warszawa OR \"remote\")",
      "\"data engineer\" Spark (sin operadores de sitio ni ubicación)",
      "site:pl.linkedin.com/in \"Java developer\" Warszawa",
      "\"data engineer Warszawa senior\""
    ],
    clientReplyCorrect: "Perfecto: X-Ray con sinónimos en el idioma local y operador site: da el mayor alcance de perfiles precisos. Empezamos.",
    clientReplyWrong: "Mmm… esa búsqueda pierde alcance o precisión. Prueba: operador site: + sinónimos locales + tecnología + ubicación.",
    act2AudioLabel: "Escuchar el mensaje de Anna",
    act2Subtitle: "«Te envío los detalles por correo. Tres semanas, incorporación en Varsovia. LinkedIn no muestra nada — prueba con X-Ray en Google».",
    act3Kicker: "Acto 3 · La entrevista",
    candidateName: "Marek — candidato",
    typing: "Marek está escribiendo…",
    sendMsg: "Enviar",
    messagesLabel: "mensajes",
    finishInterview: "Terminar entrevista",
    candidateGreeting: "¡Buenos días! He oído que buscáis a alguien para una migración de sistema. En mi último proyecto lideré yo solo la migración completa.",
    act3AudioLabel: "Escuchar el mensaje de Marek",
    act3Subtitle: "«¡Buenos días! He oído que buscáis a alguien para una migración de sistema. En mi último proyecto lideré yo solo la migración completa».",
    act4Kicker: "Acto 4 · El giro",
    act4MailSubject: "URGENTE: Marek ha recibido una contraoferta",
    act4MailBody: "Marek acaba de recibir una oferta de la competencia con un 20 % más de salario. Tiene 24 h para decidir.\n¿Qué haces como su asesor?",
    act4AudioLabel: "Escuchar la alerta",
    act4Subtitle: "«Urgente: Marek acaba de recibir una oferta de la competencia, un veinte por ciento más alta. Tiene veinticuatro horas para decidir».",
    question4: "¿Cómo respondes a Marek?",
    options4: [
      "«¡Felicidades por la oferta! Buena suerte en el nuevo trabajo».",
      "«Entiendo la oferta, pero pregúntale por la cultura del equipo, el margen de decisión y el alcance real del proyecto: el salario no lo es todo».",
      "«Ofreceré al cliente subir el presupuesto para convencerlo».",
      "«No respondas — que decida solo»"
    ],
    act4Feedback: "Como asesor demuestras valor más allá del salario: cultura, autonomía, proyecto. Eso genera lealtad del candidato — y de la marca del cliente.",
    epilogueKicker: "Epílogo · El veredicto",
    verdictSubject: "Veredicto del cliente",
    epilogueAudioLabel: "Escuchar el veredicto",
    epilogueSubtitle: "«Gracias por liderar este proceso de selección. Tu forma de pensar aportó mucho valor — volveremos a ti en la próxima vacante difícil».",
    nextBtn: "Siguiente",
    copyResult: "Copiar resultado",
    copied: "¡Copiado al portapapeles!",
    copyFallback: "Cópialo manualmente: {text}",
    cta: "¿Tienes búsquedas de especialistas difíciles de cubrir? Hablemos",
    shareText: "🎯 He sacado {score}/100 en el HeadHunter Challenge. ¿Puedes superarme? {url}",
    levelNames: ["Scout en prácticas", "Cazador junior", "HeadHunter Pro", "Ojos de Águila"],
    feedbackTitle1: "Acto 2 — Sourcing",
    feedbackTitle2: "Acto 3 — Entrevista (media de mensajes)",
    feedbackTitle3: "Acto 4 — Asesoramiento ético",
    feedbackCorrect: "¡Muy bien! Respuesta correcta.",
    feedbackWrong: "Esa no era la mejor respuesta.",
    feedbackAiFallback: "No se pudo conectar con el servidor de evaluación — se otorga una puntuación media neutral.",
    demoCandidate: ["Entiendo. En ese proyecto trabajé con un equipo de 4 personas.","La migración duró 6 meses y terminó con éxito.","Lideré, es decir, era responsable de todo."],
    demoLetter: "Gracias por liderar este proceso de selección. Tu forma de pensar aportó mucho valor — volveremos a ti en la próxima vacante difícil.",
    privacyTitle: "Política de privacidad",
    privacyBody: `<p><strong>Responsable del tratamiento:</strong> [TU EMPRESA], correo de contacto: [EMAIL].</p>
<p><strong>Datos recogidos:</strong> nombre (opcional), correo electrónico, respuestas del test y marcas de tiempo.</p>
<p><strong>Finalidades:</strong> enviar el resultado del test, atender tu solicitud y — solo con consentimiento separado — enviar contenido de marketing.</p>
<p><strong>Base legal:</strong> consentimiento (art. 6.1.a RGPD).</p>
<p><strong>Conservación:</strong> 24 meses o hasta la retirada del consentimiento.</p>
<p><strong>Tus derechos:</strong> acceso, rectificación, supresión, limitación, oposición y portabilidad de tus datos.</p>
<p><strong>Evaluación con IA:</strong> las respuestas se evalúan con inteligencia artificial; los datos son procesados por el proveedor de inferencia (Mistral AI) según su política de privacidad.</p>
<p><strong>Retirada del consentimiento:</strong> en cualquier momento puedes retirarlo enviando un correo a [EMAIL].</p>`
  },
  en: {
    intro: "A 4-act narrative game that measures recruiter skills. 7–10 minutes. Find the candidate who isn't on LinkedIn.",
    nameLabel: "Name (optional)",
    emailLabel: "Email address (required)",
    consentPrivacy: "I accept the privacy policy and the processing of my data to receive my result.",
    privacyLink: "View privacy policy",
    consentMarketing: "I want to receive related content and collaboration offers (optional).",
    startBtn: "Start the story",
    attemptsLeft: "Attempts left for this email: {n}",
    attemptsExhausted: "You have already used all attempts for this email address.",
    act1Kicker: "Act 1 · The brief",
    act1Title: "Night. Your phone rings.",
    playBrief: "Play the client's message",
    briefSubtitle: "\"I need a senior Data Engineer with Spark for Warsaw, in 3 weeks — and LinkedIn is empty.\"",
    act1Tension: "\"Do you accept the challenge?\"",
    acceptChallenge: "Yes, I accept",
    declineChallenge: "No, thanks",
    declineMsg: "The client calls the next headhunter… Try again!",
    act2Kicker: "Act 2 · The search",
    act2MailSubject: "urgent: Data Engineer (Spark) — Warsaw",
    act2MailBody: "Hi,\nI need a senior Data Engineer with Apache Spark experience. Location: Warsaw (or remote). Start in 3 weeks.\nLinkedIn shows nothing — find me someone via X-Ray.\n— Anna",
    clientReplySubject: "Re: urgent: Data Engineer (Spark)",
    question1: "Which Google X-Ray search is the best?",
    options1: [
      "site:pl.linkedin.com/in (\"data engineer\" OR \"inżynier danych\") \"Spark\" (Warszawa OR \"remote\")",
      "\"data engineer\" Spark (no site or location operators)",
      "site:pl.linkedin.com/in \"Java developer\" Warszawa",
      "\"data engineer Warszawa senior\""
    ],
    clientReplyCorrect: "Great — X-Ray with local-language synonyms and a site: operator gives the widest reach of precise profiles. Let's go.",
    clientReplyWrong: "Hmm… that search loses either reach or precision. Try: site: operator + local synonyms + technology + location.",
    act2AudioLabel: "Play Anna's message",
    act2Subtitle: "\"I'm emailing you the details. Three weeks, starting in Warsaw. LinkedIn shows nothing — try an X-Ray search on Google.\"",
    act3Kicker: "Act 3 · The interview",
    candidateName: "Marek — candidate",
    typing: "Marek is typing…",
    sendMsg: "Send",
    messagesLabel: "messages",
    finishInterview: "End interview",
    candidateGreeting: "Good morning! I heard you're looking for someone for a system migration. In my last project I single-handedly led the full migration.",
    act3AudioLabel: "Play Marek's message",
    act3Subtitle: "\"Good morning! I heard you're looking for someone for a system migration. In my last project I single-handedly led the full migration.\"",
    act4Kicker: "Act 4 · The twist",
    act4MailSubject: "URGENT: Marek received a counter-offer",
    act4MailBody: "Marek just received an offer from a competitor with a 20% higher salary. He has 24h to decide.\nWhat do you do as his advisor?",
    act4AudioLabel: "Play the alert",
    act4Subtitle: "\"Urgent! Marek just received an offer from a competitor, twenty percent higher. He has twenty-four hours to decide.\"",
    question4: "How do you reply to Marek?",
    options4: [
      "\"Congrats on the offer! Good luck in the new job.\"",
      "\"I get the offer, but ask about team culture, decision-making autonomy and the real scope of the project — salary isn't everything.\"",
      "\"I'll offer the client a bigger budget to win him over.\"",
      "\"Don't reply — let him decide alone.\""
    ],
    act4Feedback: "As an advisor you show value beyond salary: culture, autonomy, project. That builds candidate loyalty — and the client's brand.",
    epilogueKicker: "Epilogue · The verdict",
    verdictSubject: "Verdict from the client",
    epilogueAudioLabel: "Play the verdict",
    epilogueSubtitle: "\"Thank you for running this hiring process. Your way of thinking added real value — we'll come back to you for the next hard-to-fill role.\"",
    nextBtn: "Next",
    copyResult: "Copy result",
    copied: "Copied to clipboard!",
    copyFallback: "Copy it manually: {text}",
    cta: "Struggling to fill specialist roles? Let's talk",
    shareText: "🎯 I scored {score}/100 in the HeadHunter Challenge. Can you beat me? {url}",
    levelNames: ["Scout Trainee", "Junior Hunter", "HeadHunter Pro", "Eagle Eyes"],
    feedbackTitle1: "Act 2 — Sourcing",
    feedbackTitle2: "Act 3 — Interview (message average)",
    feedbackTitle3: "Act 4 — Ethical advisory",
    feedbackCorrect: "Well done! Correct answer.",
    feedbackWrong: "That was not the best answer.",
    feedbackAiFallback: "Could not reach the grading server — a neutral average score was awarded.",
    demoCandidate: ["I see. On that project I worked with a team of 4 people.","The migration took 6 months and ended successfully.","I led it, meaning I was responsible for everything."],
    demoLetter: "Thank you for running this hiring process. Your way of thinking added real value — we'll come back to you for the next hard-to-fill role.",
    privacyTitle: "Privacy Policy",
    privacyBody: `<p><strong>Data controller:</strong> [TU EMPRESA], contact email: [EMAIL].</p>
<p><strong>Data collected:</strong> name (optional), email address, test answers and timestamps.</p>
<p><strong>Purposes:</strong> sending your test result, handling your request and — only with separate consent — sending marketing content.</p>
<p><strong>Legal basis:</strong> consent (Art. 6.1.a GDPR).</p>
<p><strong>Retention:</strong> 24 months or until consent is withdrawn.</p>
<p><strong>Your rights:</strong> access, rectification, erasure, restriction, objection and data portability.</p>
<p><strong>AI grading:</strong> answers are graded by artificial intelligence; data is processed by the inference provider (Mistral AI) under its privacy policy.</p>
<p><strong>Withdrawing consent:</strong> at any time you can withdraw consent by emailing [EMAIL].</p>`
  }
};

let lang = localStorage.getItem("hh_lang") || "pl";
let answers = { act2: null, act3: [], act4: null };
let feedbacks = { act2: "", act3: "", act4: "" };
let msgCount = 0;
const MAX_CHAT_MSGS = 3;

function t(key) {
  return I18N[lang][key] !== undefined ? I18N[lang][key] : I18N.pl[key];
}

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.getElementById("lang-pl").classList.toggle("active", lang === "pl");
  document.getElementById("lang-es").classList.toggle("active", lang === "es");
  document.getElementById("lang-en").classList.toggle("active", lang === "en");
  document.getElementById("privacy-text").innerHTML = `<h2>${t("privacyTitle")}</h2>` + t("privacyBody");
  updateStartButton();
  renderAttemptsInfo();
}

function showScreen(id) {
  stopSceneAudio();
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
  playSceneAudio(id);
}

/* ============ START (RGPD e intentos intactos) ============ */
const emailInput = document.getElementById("input-email");
const privacyChk = document.getElementById("consent-privacy");

function isValidEmail(v) { return /^[^\s@]+@[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }

function getAttempts(email) {
  try { return JSON.parse(localStorage.getItem("hh_attempts") || "{}")[email] || 0; }
  catch { return 0; }
}

function incrementAttempts(email) {
  const data = JSON.parse(localStorage.getItem("hh_attempts") || "{}");
  data[email] = (data[email] || 0) + 1;
  localStorage.setItem("hh_attempts", JSON.stringify(data));
}

function renderAttemptsInfo() {
  const el = document.getElementById("attempts-info");
  const email = emailInput.value.trim().toLowerCase();
  if (!email) { el.textContent = ""; return; }
  const used = getAttempts(email);
  el.textContent = used >= CONFIG.MAX_ATTEMPTS ? t("attemptsExhausted") : t("attemptsLeft").replace("{n}", CONFIG.MAX_ATTEMPTS - used);
}

function updateStartButton() {
  const email = emailInput.value.trim().toLowerCase();
  document.getElementById("btn-start").disabled =
    !(isValidEmail(email) && privacyChk.checked && getAttempts(email) < CONFIG.MAX_ATTEMPTS);
}

emailInput.addEventListener("input", () => { renderAttemptsInfo(); updateStartButton(); });
privacyChk.addEventListener("change", updateStartButton);

document.getElementById("lang-pl").addEventListener("click", () => { lang = "pl"; localStorage.setItem("hh_lang", lang); applyLang(); });
document.getElementById("lang-es").addEventListener("click", () => { lang = "es"; localStorage.setItem("hh_lang", lang); applyLang(); });
document.getElementById("lang-en").addEventListener("click", () => { lang = "en"; localStorage.setItem("hh_lang", lang); applyLang(); });

document.getElementById("start-form").addEventListener("submit", e => {
  e.preventDefault();
  const email = emailInput.value.trim().toLowerCase();
  if (!isValidEmail(email) || !privacyChk.checked || getAttempts(email) >= CONFIG.MAX_ATTEMPTS) return;
  incrementAttempts(email);
  preloadClip("act2");
  showScreen("scene-act1");
});

/* ============ AUDIO por escena (autoplay + botón de repetición) ============ */
const sceneAudio = document.getElementById("scene-audio");
const audioAutoplayed = new Set();

function clipSrc(clip) { return "assets/audio/" + lang + "/" + clip + ".mp3"; }

function setPlayingUI(on) {
  const box = document.querySelector(".screen.active .audio-box");
  if (!box) return;
  box.classList.toggle("playing", on);
  const icon = box.querySelector(".play-icon");
  if (icon) icon.textContent = on ? "⏸" : "▶";
}

function stopSceneAudio() {
  try { sceneAudio.pause(); } catch (e) {}
  setPlayingUI(false);
}

function playClip(clip) {
  stopSceneAudio();
  sceneAudio.src = clipSrc(clip);
  sceneAudio.play().catch(() => { /* si el navegador lo bloquea, queda el botón ▶ */ });
}

function playSceneAudio(sceneId) {
  const box = document.querySelector("#" + sceneId + " .audio-box");
  if (!box) return;
  const clip = box.dataset.audio;
  if (!audioAutoplayed.has(clip)) {
    audioAutoplayed.add(clip);
    playClip(clip);
  }
}

document.querySelectorAll(".audio-box").forEach(box => {
  const btn = box.querySelector(".audio-play");
  if (btn) btn.addEventListener("click", () => playClip(box.dataset.audio));
});

sceneAudio.addEventListener("play", () => setPlayingUI(true));
sceneAudio.addEventListener("pause", () => setPlayingUI(false));
sceneAudio.addEventListener("ended", () => setPlayingUI(false));

document.getElementById("btn-accept").addEventListener("click", () => { preloadSceneImg("assets/img/night-search.svg"); preloadClip("act2"); showScreen("scene-act2"); });
document.getElementById("btn-decline").addEventListener("click", () => {
  const msg = document.getElementById("decline-msg");
  msg.textContent = t("declineMsg");
  msg.classList.remove("hidden");
  setTimeout(() => { msg.classList.add("hidden"); showScreen("scene-act1"); }, 2200);
});

function preloadSceneImg(src) { const img = new Image(); img.src = src; }
function preloadClip(clip) { const a = new Audio(); a.preload = "auto"; a.src = clipSrc(clip); }

/* ============ ACTO 2 ============ */
const ACT2_OPTIONS = I18N.pl.options1.map((_, i) => i);

function renderAct2() {
  const container = document.getElementById("act2-options");
  container.innerHTML = "";
  t("options1").forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.innerHTML = `<span class="opt-letter">${"abcd"[idx]})</span>${opt}`;
    btn.addEventListener("click", () => answerAct2(idx));
    container.appendChild(btn);
  });
  document.getElementById("act2-client-reply").classList.add("hidden");
}

function answerAct2(idx) {
  const correct = idx === 0;
  answers.act2 = correct ? 1 : 0;
  feedbacks.act2 = correct ? t("clientReplyCorrect") : t("clientReplyWrong");
  document.querySelectorAll("#act2-options .option").forEach((el, i) => {
    el.disabled = true;
    if (i === 0) el.classList.add("correct");
    else if (i === idx) el.classList.add("wrong");
  });
  document.getElementById("act2-client-text").textContent = feedbacks.act2;
  document.getElementById("act2-client-reply").classList.remove("hidden");
  document.getElementById("act2-next").onclick = () => {
    preloadSceneImg("assets/img/video-call.svg");
    preloadSceneImg("assets/img/candidate.svg");
    preloadClip("act3");
    startAct3();
  };
}

/* ============ ACTO 3: chat ============ */
const chatLog = document.getElementById("chat-log");
const chatInput = document.getElementById("chat-input");

function addBubble(text, who, score) {
  const div = document.createElement("div");
  div.className = "bubble " + who;
  div.textContent = text;
  if (who === "me" && score !== undefined) {
    const s = document.createElement("span");
    s.className = "msg-score";
    s.textContent = `★ ${score}/10`;
    div.appendChild(s);
  }
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

chatInput.addEventListener("input", () => {
  document.getElementById("chat-count").textContent = chatInput.value.length;
});

function startAct3() {
  chatLog.innerHTML = "";
  msgCount = 0;
  answers.act3 = [];
  document.getElementById("chat-count").textContent = "0";
  document.getElementById("msg-count").textContent = "0";
  document.getElementById("act3-finish").classList.add("hidden");
  document.getElementById("chat-send").disabled = false;
  addBubble(t("candidateGreeting"), "them");
  showScreen("scene-act3");
}

document.getElementById("chat-send").addEventListener("click", async () => {
  const text = chatInput.value.trim();
  if (!text || msgCount >= MAX_CHAT_MSGS) return;
  msgCount++;
  document.getElementById("msg-count").textContent = msgCount;
  addBubble(text, "me");
  chatInput.value = "";
  document.getElementById("chat-count").textContent = "0";
  const sendBtn = document.getElementById("chat-send");
  sendBtn.disabled = true;
  const score10 = await gradeMessage(text);
  answers.act3.push(score10 / 10);
  addBubble(text, "me", score10);
  const reply = await candidateReply(text);
  addBubble(reply, "them");
  if (msgCount >= MAX_CHAT_MSGS) {
    document.getElementById("act3-finish").classList.remove("hidden");
  }
  sendBtn.disabled = false;
});

document.getElementById("act3-finish").addEventListener("click", () => {
  preloadSceneImg("assets/img/storm-city.svg");
  preloadClip("act4");
  renderAct4();
  showScreen("scene-act4");
});

async function postJson(url, payload, timeoutMs) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: ctrl.signal
    });
    if (!resp.ok) throw new Error("bad status");
    return await resp.json();
  } finally { clearTimeout(timer); }
}

async function gradeMessage(text) {
  if (CONFIG.DEMO_MODE) {
    await new Promise(r => setTimeout(r, 700));
    const a = text.toLowerCase();
    let score = 2;
    if (text.length >= 20) score += 2;
    if (a.includes("?")) score += 2;
    const kw = ["cuántos", "ile", "equipo", "zespół", "qué hiciste", "co zrobiłeś", "cyfr", "liczb", "wynik", "rezultat", "jak ", "co ", "team", "numbers", "result", "scope", "zakres"];
    score += Math.min(4, kw.filter(k => a.includes(k)).length);
    return Math.max(0, Math.min(10, score));
  }
  try {
    const data = await postJson(CONFIG.API_ENDPOINT, { answer: text, questionId: "interview-msg", lang }, 15000);
    return Math.max(0, Math.min(10, data.score / 10));
  } catch {
    return 5;
  }
}

async function candidateReply(text) {
  document.getElementById("typing").classList.remove("hidden");
  let reply;
  if (CONFIG.DEMO_MODE) {
    await new Promise(r => setTimeout(r, 900));
    const lines = t("demoCandidate");
    reply = lines[Math.floor(Math.random() * lines.length)];
  } else {
    try {
      const data = await postJson(CONFIG.CANDIDATE_ENDPOINT, { message: text, lang }, 15000);
      reply = data.reply || "…";
    } catch {
      reply = "…";
    }
  }
  document.getElementById("typing").classList.add("hidden");
  return reply;
}

/* ============ ACTO 4 ============ */
function renderAct4() {
  const container = document.getElementById("act4-options");
  container.innerHTML = "";
  t("options4").forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.innerHTML = `<span class="opt-letter">${"abcd"[idx]})</span>${opt}`;
    btn.addEventListener("click", () => answerAct4(idx));
    container.appendChild(btn);
  });
  document.getElementById("act4-reply").classList.add("hidden");
}

function answerAct4(idx) {
  const correct = idx === 1;
  answers.act4 = correct ? 1 : 0;
  feedbacks.act4 = t("act4Feedback") + " " + (correct ? t("feedbackCorrect") : t("feedbackWrong"));
  document.querySelectorAll("#act4-options .option").forEach((el, i) => {
    el.disabled = true;
    if (i === 1) el.classList.add("correct");
    else if (i === idx) el.classList.add("wrong");
  });
  document.getElementById("act4-reply-text").textContent = feedbacks.act4;
  document.getElementById("act4-reply").classList.remove("hidden");
  document.getElementById("act4-next").onclick = () => {
    preloadSceneImg("assets/img/dawn-skyline.svg");
    preloadClip("epilogue");
    showEpilogue();
  };
}

/* ============ EPÍLOGO ============ */
function computeTotal() {
  const act3Avg = answers.act3.length ? answers.act3.reduce((a, b) => a + b, 0) / answers.act3.length : 0;
  return Math.round((answers.act2 || 0) * 35 + act3Avg * 35 + (answers.act4 || 0) * 30);
}

function rankFor(score) {
  if (score < 50) return 0;
  if (score < 70) return 1;
  if (score < 85) return 2;
  return 3;
}

async function showEpilogue() {
  showScreen("scene-epilogue");
  const total = computeTotal();
  document.getElementById("result-score").textContent = total;
  document.getElementById("result-rank").textContent = t("levelNames")[rankFor(total)];
  const fb = document.getElementById("result-feedback");
  fb.innerHTML = "";
  const act3Avg = answers.act3.length ? Math.round(answers.act3.reduce((a, b) => a + b, 0) / answers.act3.length * 100) : 0;
  [["feedbackTitle1", feedbacks.act2],
   ["feedbackTitle2", `★ ${act3Avg}/100`],
   ["feedbackTitle3", feedbacks.act4]].forEach(([titleKey, text]) => {
    const div = document.createElement("div");
    div.className = "result-item";
    div.innerHTML = `<span class="ri-title">${t(titleKey)}</span>${text}`;
    fb.appendChild(div);
  });
  document.getElementById("cta-link").href = CONFIG.CTA_URL;
  const letterEl = document.getElementById("verdict-letter");
  letterEl.innerHTML = '<div class="spinner inline"></div>';
  let letter;
  if (CONFIG.DEMO_MODE) {
    await new Promise(r => setTimeout(r, 800));
    letter = t("demoLetter");
  } else {
    try {
      const data = await postJson(CONFIG.LETTER_ENDPOINT, { score: total, rank: t("levelNames")[rankFor(total)], lang }, 15000);
      letter = data.letter || t("demoLetter");
    } catch { letter = t("demoLetter"); }
  }
  letterEl.textContent = "";
  letterEl.classList.add("typing");
  let li = 0;
  const tw = setInterval(() => {
    li++;
    letterEl.textContent = letter.slice(0, li);
    if (li >= letter.length) { clearInterval(tw); letterEl.classList.remove("typing"); }
  }, 16);
  sendLead(total);
}

document.getElementById("btn-copy").addEventListener("click", async () => {
  const text = t("shareText").replace("{score}", computeTotal()).replace("{url}", window.location.href);
  const status = document.getElementById("copy-status");
  try { await navigator.clipboard.writeText(text); status.textContent = t("copied"); }
  catch { status.textContent = t("copyFallback").replace("{text}", text); }
});

/* ============ Lead (header corregido, intacto) ============ */
function sendLead(total) {
  const payload = {
    name: document.getElementById("input-name").value.trim(),
    email: emailInput.value.trim().toLowerCase(),
    score: total,
    act2: answers.act2,
    act3_msgs: answers.act3.map(s => Math.round(s * 100)),
    act4: answers.act4,
    consent_privacy: privacyChk.checked,
    consent_marketing: document.getElementById("consent-marketing").checked,
    lang,
    timestamp: new Date().toISOString()
  };
  fetch(CONFIG.LEAD_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    body: JSON.stringify(payload)
  }).catch(() => {});
}

/* ============ Modal RGPD ============ */
document.getElementById("open-privacy").addEventListener("click", () => {
  document.getElementById("privacy-modal").classList.remove("hidden");
});
document.getElementById("close-privacy").addEventListener("click", () => {
  document.getElementById("privacy-modal").classList.add("hidden");
});
document.getElementById("privacy-modal").addEventListener("click", e => {
  if (e.target.id === "privacy-modal") e.target.classList.add("hidden");
});

applyLang();
renderAct2();
