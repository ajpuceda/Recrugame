"use strict";

const CONFIG = {
  DEMO_MODE: true,
  API_ENDPOINT: "[URL-DEL-WORKER]/api/grade",
  MAX_ATTEMPTS: 3,
  CTA_URL: "mailto:[TU-EMAIL]",
  LEAD_ENDPOINT: "[LEAD-ENDPOINT]"
};

const I18N = {
  pl: {
    intro: "Test trwający 5–8 minut, który mierzy umiejętności rekruterów i headhunterów. Zmierz się z wyzwaniem i zobacz, jak dobrze potrafisz znaleźć najlepszych kandydatów.",
    nameLabel: "Imię (opcjonalnie)",
    emailLabel: "Adres e-mail (wymagany)",
    consentPrivacy: "Akceptuję politykę prywatności i przetwarzanie moich danych w celu otrzymania wyniku.",
    privacyLink: "Zobacz politykę prywatności",
    consentMarketing: "Chcę otrzymywać powiązane treści i oferty współpracy (opcjonalnie).",
    startBtn: "Rozpocznij wyzwanie",
    attemptsLeft: "Pozostałe próby dla tego adresu e-mail: {n}",
    attemptsExhausted: "Wykorzystałeś już wszystkie próby dla tego adresu e-mail.",
    level1Label: "Poziom 1 — Sourcing",
    level2Label: "Poziom 2 — Screening",
    level3Label: "Poziom 3 — Roleplay z AI",
    question1: "Twój klient potrzebuje senior Data Engineera z doświadczeniem w Apache Spark na stanowisko w Warszawie. LinkedIn nie pokazuje aktywnych kandydatów. Które wyszukiwanie X-Ray w Google jest najlepsze?",
    options1: [
      "site:pl.linkedin.com/in (\"data engineer\" OR \"inżynier danych\") \"Spark\" (Warszawa OR \"remote\")",
      "\"data engineer\" Spark (bez operatorów site i lokalizacji)",
      "site:pl.linkedin.com/in \"Java developer\" Warszawa",
      "\"data engineer Warszawa senior\""
    ],
    feedback1: "Opcja (a) wygrywa: X-Ray (operator site:) + synonimy w lokalnym języku (\"inżynier danych\") + wymagana technologia + lokalizacja lub remote. Pozostałe opcje tracą albo zasięg, albo precyzję.",
    question2: "Masz 40 CV na stanowisko specjalisty i 20 minut. Który screening najlepiej przewiduje realną wydajność kandydata?",
    options2: [
      "Lata doświadczenia",
      "Uczelnia i tytuły naukowe",
      "Konkretne pytania o głębię techniczną, dopasowane do każdego CV",
      "List motywacyjny"
    ],
    feedback2: "Weryfikowalna głębia techniczna przewiduje wyniki lepiej niż sygnały statusu, takie jak uczelnia czy liczba lat. Lata doświadczenia i listy motywacyjne są słabymi predyktorami.",
    question3: "Przeprowadzasz rozmowę z kandydatem na stanowisko senior. Mówi: „W ostatnim projekcie samodzielnie przeprowadziłem pełną migrację systemu”. Napisz swoje następne pytanie (1–3 zdania).",
    candidateQuote: "„W ostatnim projekcie samodzielnie przeprowadziłem pełną migrację systemu”.",
    evaluating: "AI ocenia Twoją odpowiedź…",
    submitAnswer: "Wyślij odpowiedź",
    nextBtn: "Dalej",
    copyResult: "Kopiuj wynik",
    copied: "Skopiowano do schowka!",
    copyFallback: "Skopiuj ręcznie: {text}",
    cta: "Masz trudne do obsadzenia stanowiska specjalistyczne? Porozmawiajmy",
    shareText: "🎯 Uzyskałem {score}/100 w HeadHunter Challenge. Czy możesz mnie pokonać? {url}",
    resultTitle: "Twój wynik",
    levelNames: ["Scout w praktyce", "Łowca junior", "HeadHunter Pro", "Orle Oko"],
    feedbackTitle1: "Poziom 1 — Sourcing",
    feedbackTitle2: "Poziom 2 — Screening",
    feedbackTitle3: "Poziom 3 — Roleplay",
    feedbackCorrect: "Świetnie! Poprawna odpowiedź.",
    feedbackWrong: "To nie była najlepsza odpowiedź.",
    feedbackAiFallback: "Nie udało się połączyć z serwerem oceniającym — przyznano neutralną średnią punktację.",
    privacyTitle: "Polityka prywatności",
    privacyBody: `<p><strong>Administrator danych:</strong> [TU FIRMA], e-mail kontaktowy: [EMAIL].</p>
<p><strong>Zbierane dane:</strong> imię (opcjonalnie), adres e-mail, odpowiedzi w teście oraz znaczniki czasu.</p>
<p><strong>Cele przetwarzania:</strong> wysłanie wyniku testu, obsługa zgłoszenia oraz — wyłącznie za osobną zgodą — wysyłka treści marketingowych.</p>
<p><strong>Podstawa prawna:</strong> zgoda (art. 6 ust. 1 lit. a RODO).</p>
<p><strong>Okres przechowywania:</strong> 24 miesiące lub do momentu wycofania zgody.</p>
<p><strong>Twoje prawa:</strong> dostęp do danych, sprostowanie, usunięcie, ograniczenie przetwarzania, sprzeciw oraz przenoszenie danych.</p>
<p><strong>Ocena AI:</strong> odpowiedź z poziomu 3 jest oceniana przez sztuczną inteligencję; dane są przetwarzane przez dostawcę wnioskowania (Mistral AI) zgodnie z jego polityką prywatności.</p>
<p><strong>Wycofanie zgody:</strong> w każdej chwili możesz wycofać zgodę, wysyłając wiadomość na adres [EMAIL].</p>`
  },
  es: {
    intro: "Un test de 5–8 minutos que mide las habilidades de reclutadores y headhunters. Acepta el reto y descubre lo bien que encuentras a los mejores candidatos.",
    nameLabel: "Nombre (opcional)",
    emailLabel: "Correo electrónico (obligatorio)",
    consentPrivacy: "Acepto la política de privacidad y el tratamiento de mis datos para recibir mi resultado.",
    privacyLink: "Ver política de privacidad",
    consentMarketing: "Quiero recibir contenido relacionado y ofertas de colaboración (opcional).",
    startBtn: "Empezar el reto",
    attemptsLeft: "Intentos restantes para este correo: {n}",
    attemptsExhausted: "Ya has usado todos los intentos para este correo electrónico.",
    level1Label: "Nivel 1 — Sourcing",
    level2Label: "Nivel 2 — Screening",
    level3Label: "Nivel 3 — Roleplay con IA",
    question1: "Tu cliente necesita un Data Engineer senior con experiencia en Apache Spark para un puesto en Varsovia. LinkedIn no muestra candidatos activos. ¿Qué búsqueda X-Ray en Google es la mejor?",
    options1: [
      "site:pl.linkedin.com/in (\"data engineer\" OR \"inżynier danych\") \"Spark\" (Warszawa OR \"remote\")",
      "\"data engineer\" Spark (sin operadores de sitio ni ubicación)",
      "site:pl.linkedin.com/in \"Java developer\" Warszawa",
      "\"data engineer Warszawa senior\""
    ],
    feedback1: "La (a) gana: X-Ray (operador site:) + sinónimos en el idioma local (\"inżynier danych\") + tecnología requerida + ubicación o remoto. El resto pierde alcance o precisión.",
    question2: "Tienes 40 CVs para una vacante de especialista y 20 minutos. ¿Qué screening predice mejor el rendimiento real del candidato?",
    options2: [
      "Años de experiencia",
      "Universidad y títulos",
      "Preguntas de profundidad técnica específicas basadas en cada CV",
      "Carta de presentación"
    ],
    feedback2: "La profundidad técnica verificable predice mejor que las señales de estatus como la universidad o los años de experiencia. Las cartas de presentación son un predictor débil.",
    question3: "Estás entrevistando a un candidato para un puesto senior. Dice: «En mi último proyecto lideré la migración completa del sistema». Escribe tu siguiente pregunta (1–3 frases).",
    candidateQuote: "«En mi último proyecto lideré la migración completa del sistema».",
    evaluating: "La IA está evaluando tu respuesta…",
    submitAnswer: "Enviar respuesta",
    nextBtn: "Siguiente",
    copyResult: "Copiar resultado",
    copied: "¡Copiado al portapapeles!",
    copyFallback: "Cópialo manualmente: {text}",
    cta: "¿Tienes búsquedas de especialistas difíciles de cubrir? Hablemos",
    shareText: "🎯 He sacado {score}/100 en el HeadHunter Challenge. ¿Puedes superarme? {url}",
    resultTitle: "Tu resultado",
    levelNames: ["Scout en prácticas", "Cazador junior", "HeadHunter Pro", "Ojos de Águila"],
    feedbackTitle1: "Nivel 1 — Sourcing",
    feedbackTitle2: "Nivel 2 — Screening",
    feedbackTitle3: "Nivel 3 — Roleplay",
    feedbackCorrect: "¡Muy bien! Respuesta correcta.",
    feedbackWrong: "Esa no era la mejor respuesta.",
    feedbackAiFallback: "No se pudo conectar con el servidor de evaluación — se otorga una puntuación media neutral.",
    privacyTitle: "Política de privacidad",
    privacyBody: `<p><strong>Responsable del tratamiento:</strong> [TU EMPRESA], correo de contacto: [EMAIL].</p>
<p><strong>Datos recogidos:</strong> nombre (opcional), correo electrónico, respuestas del test y marcas de tiempo.</p>
<p><strong>Finalidades:</strong> enviar el resultado del test, atender tu solicitud y — solo con consentimiento separado — enviar contenido de marketing.</p>
<p><strong>Base legal:</strong> consentimiento (art. 6.1.a RGPD).</p>
<p><strong>Conservación:</strong> 24 meses o hasta la retirada del consentimiento.</p>
<p><strong>Tus derechos:</strong> acceso, rectificación, supresión, limitación, oposición y portabilidad de tus datos.</p>
<p><strong>Evaluación con IA:</strong> la respuesta del nivel 3 se evalúa con inteligencia artificial; los datos son procesados por el proveedor de inferencia (Mistral AI) según su política de privacidad.</p>
<p><strong>Retirada del consentimiento:</strong> en cualquier momento puedes retirarlo enviando un correo a [EMAIL].</p>`
  },
  en: {
    intro: "A 5–8 minute test that measures the skills of recruiters and headhunters. Take the challenge and see how well you can find the best candidates.",
    nameLabel: "Name (optional)",
    emailLabel: "Email address (required)",
    consentPrivacy: "I accept the privacy policy and the processing of my data to receive my result.",
    privacyLink: "View privacy policy",
    consentMarketing: "I want to receive related content and collaboration offers (optional).",
    startBtn: "Start the challenge",
    attemptsLeft: "Attempts left for this email: {n}",
    attemptsExhausted: "You have already used all attempts for this email address.",
    level1Label: "Level 1 — Sourcing",
    level2Label: "Level 2 — Screening",
    level3Label: "Level 3 — AI Roleplay",
    question1: "Your client needs a senior Data Engineer with Apache Spark experience for a role in Warsaw. LinkedIn shows no active candidates. Which Google X-Ray search is the best?",
    options1: [
      "site:pl.linkedin.com/in (\"data engineer\" OR \"inżynier danych\") \"Spark\" (Warszawa OR \"remote\")",
      "\"data engineer\" Spark (no site or location operators)",
      "site:pl.linkedin.com/in \"Java developer\" Warszawa",
      "\"data engineer Warszawa senior\""
    ],
    feedback1: "Option (a) wins: X-Ray (site: operator) + local-language synonyms (\"inżynier danych\") + required technology + location or remote. The others lose either reach or precision.",
    question2: "You have 40 CVs for a specialist vacancy and 20 minutes. Which screening best predicts the candidate's real performance?",
    options2: [
      "Years of experience",
      "University and degrees",
      "Specific technical depth questions tailored to each CV",
      "Cover letter"
    ],
    feedback2: "Verifiable technical depth predicts better than status signals like university or years of experience. Cover letters are a weak predictor.",
    question3: "You are interviewing a candidate for a senior role. They say: \"In my last project I single-handedly led the full system migration\". Write your next question (1–3 sentences).",
    candidateQuote: "\"In my last project I single-handedly led the full system migration\".",
    evaluating: "The AI is evaluating your answer…",
    submitAnswer: "Submit answer",
    nextBtn: "Next",
    copyResult: "Copy result",
    copied: "Copied to clipboard!",
    copyFallback: "Copy it manually: {text}",
    cta: "Struggling to fill specialist roles? Let's talk",
    shareText: "🎯 I scored {score}/100 in the HeadHunter Challenge. Can you beat me? {url}",
    resultTitle: "Your result",
    levelNames: ["Scout Trainee", "Junior Hunter", "HeadHunter Pro", "Eagle Eyes"],
    feedbackTitle1: "Level 1 — Sourcing",
    feedbackTitle2: "Level 2 — Screening",
    feedbackTitle3: "Level 3 — Roleplay",
    feedbackCorrect: "Well done! Correct answer.",
    feedbackWrong: "That was not the best answer.",
    feedbackAiFallback: "Could not reach the grading server — a neutral average score was awarded.",
    privacyTitle: "Privacy Policy",
    privacyBody: `<p><strong>Data controller:</strong> [TU EMPRESA], contact email: [EMAIL].</p>
<p><strong>Data collected:</strong> name (optional), email address, test answers and timestamps.</p>
<p><strong>Purposes:</strong> sending your test result, handling your request and — only with separate consent — sending marketing content.</p>
<p><strong>Legal basis:</strong> consent (Art. 6.1.a GDPR).</p>
<p><strong>Retention:</strong> 24 months or until consent is withdrawn.</p>
<p><strong>Your rights:</strong> access, rectification, erasure, restriction, objection and data portability.</p>
<p><strong>AI grading:</strong> the level 3 answer is graded by artificial intelligence; data is processed by the inference provider (Mistral AI) under its privacy policy.</p>
<p><strong>Withdrawing consent:</strong> at any time you can withdraw consent by emailing [EMAIL].</p>`
  }
};

let lang = localStorage.getItem("hh_lang") || "pl";
let answers = { level1: null, level2: null, level3: null };
let feedbacks = { level1: "", level2: "", level3: "" };

function t(key) {
  return I18N[lang][key] !== undefined ? I18N[lang][key] : I18N.pl[key];
}

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.getElementById("lang-pl").classList.toggle("active", lang === "pl");
  document.getElementById("lang-es").classList.toggle("active", lang === "es");
  document.getElementById("lang-en").classList.toggle("active", lang === "en");
  document.getElementById("privacy-text").innerHTML =
    `<h2>${t("privacyTitle")}</h2>` + t("privacyBody");
  updateStartButton();
  renderAttemptsInfo();
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

const emailInput = document.getElementById("input-email");
const privacyChk = document.getElementById("consent-privacy");

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

function getAttempts(email) {
  try {
    const data = JSON.parse(localStorage.getItem("hh_attempts") || "{}");
    return data[email] || 0;
  } catch { return 0; }
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
  el.textContent = used >= CONFIG.MAX_ATTEMPTS
    ? t("attemptsExhausted")
    : t("attemptsLeft").replace("{n}", CONFIG.MAX_ATTEMPTS - used);
}

function updateStartButton() {
  const email = emailInput.value.trim().toLowerCase();
  const allowed = isValidEmail(email) && privacyChk.checked && getAttempts(email) < CONFIG.MAX_ATTEMPTS;
  document.getElementById("btn-start").disabled = !allowed;
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
  startQuiz(0);
});

const QUIZ = [
  { key: "level1", questionKey: "question1", optionsKey: "options1", feedbackKey: "feedback1", correct: 0, labelKey: "level1Label", weight: 35 },
  { key: "level2", questionKey: "question2", optionsKey: "options2", feedbackKey: "feedback2", correct: 2, labelKey: "level2Label", weight: 35 }
];

let quizIndex = 0;

function startQuiz(i) {
  quizIndex = i;
  renderQuiz();
  showScreen("screen-quiz");
}

function renderQuiz() {
  const q = QUIZ[quizIndex];
  document.getElementById("quiz-level").textContent = t(q.labelKey);
  document.getElementById("quiz-question").textContent = t(q.questionKey);
  document.getElementById("quiz-progress").style.width = ((quizIndex + 1) / 3 * 100) + "%";
  document.getElementById("quiz-feedback").classList.add("hidden");
  const opts = I18N[lang][q.optionsKey];
  const container = document.getElementById("quiz-options");
  container.innerHTML = "";
  opts.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.innerHTML = `<span class="opt-letter">${"abcd"[idx]})</span>${opt}`;
    btn.addEventListener("click", () => answerQuiz(idx));
    container.appendChild(btn);
  });
}

function answerQuiz(idx) {
  const q = QUIZ[quizIndex];
  answers[q.key] = idx === q.correct ? 1 : 0;
  feedbacks[q.key] = (idx === q.correct ? t("feedbackCorrect") + " " : t("feedbackWrong") + " ") + t(q.feedbackKey);
  document.querySelectorAll("#quiz-options .option").forEach((el, i) => {
    el.disabled = true;
    if (i === q.correct) el.classList.add("correct");
    else if (i === idx) el.classList.add("wrong");
  });
  document.getElementById("quiz-feedback-text").textContent = feedbacks[q.key];
  const nextBtn = document.getElementById("quiz-next");
  nextBtn.textContent = quizIndex < QUIZ.length - 1 ? t("nextBtn") : t("nextBtn");
  nextBtn.onclick = () => {
    if (quizIndex < QUIZ.length - 1) startQuiz(quizIndex + 1);
    else startRoleplay();
  };
  document.getElementById("quiz-feedback").classList.remove("hidden");
}

const answerEl = document.getElementById("roleplay-answer");
answerEl.addEventListener("input", () => {
  document.getElementById("char-count").textContent = answerEl.value.length;
});

function startRoleplay() {
  document.getElementById("roleplay-question").textContent = t("question3");
  document.getElementById("roleplay-candidate").textContent = t("candidateQuote");
  document.getElementById("roleplay-progress").style.width = "66%";
  document.getElementById("roleplay-loading").classList.add("hidden");
  document.getElementById("btn-roleplay").disabled = false;
  showScreen("screen-roleplay");
}

document.getElementById("btn-roleplay").addEventListener("click", async () => {
  const answer = answerEl.value.trim();
  if (!answer) return;
  const btn = document.getElementById("btn-roleplay");
  btn.disabled = true;
  document.getElementById("roleplay-loading").classList.remove("hidden");
  let score10, feedback;
  if (CONFIG.DEMO_MODE) {
    await new Promise(r => setTimeout(r, 900));
    const res = demoHeuristic(answer);
    score10 = res.score; feedback = res.feedback;
  } else {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 15000);
      const resp = await fetch(CONFIG.API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer, questionId: "roleplay-senior-migration", lang }),
        signal: ctrl.signal
      });
      clearTimeout(timer);
      if (!resp.ok) throw new Error("bad status");
      const data = await resp.json();
      score10 = Math.max(0, Math.min(10, data.score));
      feedback = data.feedback || "";
    } catch {
      score10 = 5;
      feedback = t("feedbackAiFallback");
    }
  }
  answers.level3 = score10 / 10;
  feedbacks.level3 = feedback;
  document.getElementById("roleplay-progress").style.width = "100%";
  showResult();
  sendLead(score10);
});

function demoHeuristic(answer) {
  const a = answer.toLowerCase();
  let score = 2;
  if (answer.length >= 20) score += 2;
  if (a.includes("?")) score += 2;
  const keywords = ["cuántos", "ile", "equipo", "zespół", "qué hiciste", "co zrobiłeś", "tym", "który", "cyfr", "liczb", "wynik", "rezultat", "technolog", "wyniki", "rezultaty", "jak ", "co "];
  const hits = keywords.filter(k => a.includes(k)).length;
  score += Math.min(4, hits);
  score = Math.max(0, Math.min(10, score));
  return {
    score,
    feedback: lang === "es"
      ? `Puntuación demo (heurística local): ${score}/10. Busca datos concretos (equipo, cifras, resultado) y formula una pregunta de seguimiento.`
      : lang === "en"
        ? `Demo score (local heuristic): ${score}/10. Look for concrete data (team, numbers, outcome) and ask a follow-up question.`
        : `Wynik demo (heurystyka lokalna): ${score}/10. Szukaj konkretnych danych (zespół, liczby, wynik) i zadawaj pytanie uzupełniające.`
  };
}

function computeTotal() {
  return Math.round(
    (answers.level1 || 0) * 35 +
    (answers.level2 || 0) * 35 +
    (answers.level3 || 0) * 30
  );
}

function rankFor(score) {
  if (score < 50) return 0;
  if (score < 70) return 1;
  if (score < 85) return 2;
  return 3;
}

function showResult() {
  const total = computeTotal();
  document.getElementById("result-score").textContent = total;
  document.getElementById("result-rank").textContent = t("levelNames")[rankFor(total)];
  const fb = document.getElementById("result-feedback");
  fb.innerHTML = "";
  [["feedbackTitle1", "level1"],
   ["feedbackTitle2", "level2"],
   ["feedbackTitle3", "level3"]].forEach(([titleKey, key]) => {
    const div = document.createElement("div");
    div.className = "result-item";
    div.innerHTML = `<span class="ri-title">${t(titleKey)}</span>${feedbacks[key]}`;
    fb.appendChild(div);
  });
  document.getElementById("cta-link").href = CONFIG.CTA_URL;
  showScreen("screen-result");
}

document.getElementById("btn-copy").addEventListener("click", async () => {
  const total = computeTotal();
  const text = t("shareText").replace("{score}", total).replace("{url}", window.location.href);
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = t("copied");
  } catch {
    status.textContent = t("copyFallback").replace("{text}", text);
  }
});

function sendLead(score10) {
  const payload = {
    name: document.getElementById("input-name").value.trim(),
    email: emailInput.value.trim().toLowerCase(),
    score: computeTotal(),
    level3_score: score10,
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
