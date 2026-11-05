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
    prologueKicker: "Prolog · Radar",
    prologueTitle: "Skalibruj swój radar, zanim zadzwoni telefon",
    prologueIntro: "Trzy testy po około minucie. Bez pytań i bez wyjaśnień — tylko twój instynkt. Na końcu dowiesz się, jaki typ łowcy jesteś.",
    prologueStart: "Kalibruję radar",
    signalTitle: "1 · Sygnał",
    signalHint: "Na każdej karcie jest JEDNA informacja, która się nie zgadza. Zaznacz ją, zanim skończy się czas.",
    signalHit: "Dobre oko!",
    signalMiss: "To nie to.",
    dilemmaTitle: "2 · Błyskawiczna decyzja",
    dilemmaHint: "10 sekund na dylemat. Liczy się pierwsza odpowiedź.",
    dilemmaTimeup: "Czas minął…",
    hunchTitle: "3 · Przeczucie",
    hunchHint: "Każde dodatkowe źródło poprawia teczkę, ale konkurencja też ma numer tego kandydata. Kiedy dzwonisz?",
    hunchQuality: "Jakość teczki: {n}/6",
    hunchPump: "🔎 Jedno źródło więcej",
    hunchBank: "📞 Dzwoń teraz (zapisuję)",
    hunchLost: "💨 Konkurencja zadzwoniła pierwsza. Teczka przepadła.",
    hunchBanked: "✅ Teczka zapisana",
    radarTitle: "Twój instynkt łowcy",
    radarOjo: "Oko",
    radarTemple: "Opanowanie",
    radarApetito: "Apetyt",
    archOjo: "🦅 Oko Orła",
    archTemple: "⚖️ Stalowe Nerwy",
    archApetito: "🎯 Krew Łowcy",
    archBalanced: "🌟 Wyczulony Radar",
    radarHook: "Twój radar wyłapał sygnał w szumie: Marek, Data Engineer, Warszawa. Za chwilę zadzwoni telefon.",
    radarCta: "Odebrać połączenie",
    prologueAudioLabel: "Odsłuchaj sygnał radaru",
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
    letterCaught: "I jeszcze jedno: świetne oko. Wyciągnąłeś z Marka prawdę o zespole i terminach migracji — niewielu rekruterów to zauważa.",
    letterMissed: "Mała wskazówka na przyszłość: Marek nie był w tym projekcie tak samodzielny, jak twierdził. Sprawdzaj takich kandydatów pytaniami o zespół, liczby i role.",
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
    prologueKicker: "Prólogo · El Radar",
    prologueTitle: "Calibra tu radar antes de que suene el teléfono",
    prologueIntro: "Tres pruebas de un minuto. Sin preguntas y sin explicaciones — solo tu instinto. Al final sabrás qué tipo de cazador eres.",
    prologueStart: "Calibrar mi radar",
    signalTitle: "1 · Señal",
    signalHint: "En cada ficha hay UN dato que no cuadra. Márkalo antes de que se acabe el tiempo.",
    signalHit: "¡Bien visto!",
    signalMiss: "No era ese.",
    dilemmaTitle: "2 · Decisión relámpago",
    dilemmaHint: "10 segundos por dilema. Vale tu primera respuesta.",
    dilemmaTimeup: "Se acabó el tiempo…",
    hunchTitle: "3 · La corazonada",
    hunchHint: "Cada fuente extra mejora el dossier, pero la competencia también tiene su número. ¿Cuándo llamas?",
    hunchQuality: "Calidad del dossier: {n}/6",
    hunchPump: "🔎 Una fuente más",
    hunchBank: "📞 Llamar ya (guardar)",
    hunchLost: "💨 La competencia llamó antes. Dossier perdido.",
    hunchBanked: "✅ Dossier guardado",
    radarTitle: "Tu instinto de cazador",
    radarOjo: "Ojo",
    radarTemple: "Temple",
    radarApetito: "Apetito",
    archOjo: "🦅 Ojo de Águila",
    archTemple: "⚖️ Temple de Acero",
    archApetito: "🎯 Sangre de Cazador",
    archBalanced: "🌟 Radar Afinado",
    radarHook: "Tu radar ha detectado una señal en el ruido: Marek, Data Engineer, Varsovia. En unos segundos sonará el teléfono.",
    radarCta: "Contestar la llamada",
    prologueAudioLabel: "Escuchar la señal del radar",
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
    letterCaught: "Y una cosa más: buen ojo. Le sacaste a Marek la verdad sobre el equipo y los plazos de la migración — pocos reclutadores lo pillan.",
    letterMissed: "Un apunte para la próxima: Marek no era tan solo en ese proyecto como decía. Verifica a este tipo de candidatos con preguntas sobre el equipo, los números y su rol.",
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
    prologueKicker: "Prologue · The Radar",
    prologueTitle: "Calibrate your radar before the phone rings",
    prologueIntro: "Three one-minute trials. No questions, no explanations — just your instinct. At the end, you'll know what kind of hunter you are.",
    prologueStart: "Calibrate my radar",
    signalTitle: "1 · Signal",
    signalHint: "Each card hides ONE detail that doesn't add up. Mark it before time runs out.",
    signalHit: "Sharp eye!",
    signalMiss: "Not that one.",
    dilemmaTitle: "2 · Lightning decision",
    dilemmaHint: "10 seconds per dilemma. Your first answer counts.",
    dilemmaTimeup: "Time's up…",
    hunchTitle: "3 · The hunch",
    hunchHint: "Every extra source improves the dossier — but the competition has their number too. When do you call?",
    hunchQuality: "Dossier quality: {n}/6",
    hunchPump: "🔎 One more source",
    hunchBank: "📞 Call now (save)",
    hunchLost: "💨 The competition called first. Dossier lost.",
    hunchBanked: "✅ Dossier saved",
    radarTitle: "Your hunter instinct",
    radarOjo: "Eye",
    radarTemple: "Nerve",
    radarApetito: "Risk",
    archOjo: "🦅 Eagle Eye",
    archTemple: "⚖️ Iron Nerve",
    archApetito: "🎯 Hunter's Blood",
    archBalanced: "🌟 Tuned Radar",
    radarHook: "Your radar just caught a signal in the noise: Marek, Data Engineer, Warsaw. The phone is about to ring.",
    radarCta: "Answer the call",
    prologueAudioLabel: "Play the radar signal",
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
    letterCaught: "And one more thing: sharp eye. You got the truth out of Marek about the team and the migration timeline — few recruiters catch that.",
    letterMissed: "A tip for next time: Marek wasn't as alone on that project as he claimed. Vet these candidates with questions about the team, the numbers and their role.",
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
const MAX_CHAT_MSGS = 4;

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

function isValidEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }

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
  startPrologue();
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
  if (!clip) return; // el audio del prólogo se activa solo al mostrar el radar
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

/* ============ PRÓLOGO · EL RADAR (antes del Acto 1) ============
   Tres micro-juegos de instinto: Señal (ojo), Decisión relámpago
   (temple) y La corazonada (riesgo). Sin decirselo al jugador,
   miden atención, juicio bajo presión y calibración de riesgo.
   La señal que detecta su radar… es Marek. */
const PG = {
  ojo: 0, temple: 0, banked: 0,
  sIdx: 0, dIdx: 0, hCand: 0, hPumps: 0,
  timers: [],
  radarDone: false, lastScores: null, archetype: null
};

const PG_CANDIDATES = ["Ania", "Bartek", "Cecylia"];
const PG_RISK = [0.12, 0.24, 0.38, 0.54, 0.72, 0.88];
const PG_OPTIMAL_BANK = 12; // 3 candidatos × 4 fuentes sensatas

const PROLOGUE = {
  pl: {
    cards: [
      { name: "Tomasz Lis", flag: 0, rows: [
        "Data Engineer · Allegro · 2019–2015",
        "Umiejętności: PySpark, Kafka, Airflow",
        "Informatyka · Politechnika Warszawska · 2014",
        "Warszawa · hybryda"
      ] },
      { name: "Anna Wójcik", flag: 1, rows: [
        "Product Manager · 8 lat doświadczenia",
        "Dyplom: 2020 · Executive MBA",
        "Narzędzia: roadmap, SQL, Figma",
        "Kraków · zdalnie"
      ] },
      { name: "Piotr Zieliński", flag: 2, rows: [
        "CTO w starcie (5 osób)",
        "Mocne strony: strategia, fundraising, Kubernetes",
        "Kontakt: piotr.zielinski(at)example.com",
        "Berlin · open to relocate"
      ] },
      { name: "Magda Kowalska", flag: 1, rows: [
        "QA Automation Senior",
        "Umiejętności: Selenium, Cypress, 'ręczne testy automatyczne'",
        "ISTQB · 2016",
        "Gdańsk · hybryda"
      ] },
      { name: "Jakub Kaczmarek", flag: 2, rows: [
        "Lead Developer · 2021–2024",
        "Stack: Java, Kotlin, Spring",
        "Dostępność: od zaraz · 3 miesiące wypowiedzenia",
        "Wrocław · hybryda"
      ] },
      { name: "Ewa Sadowska", flag: 2, rows: [
        "Recruiter IT · 6 lat",
        "Sourcing: X-Ray, boolean, ATS",
        "Języki: cztery języki 'ojczyste'",
        "Warszawa · zdalnie"
      ] }
    ],
    dilemmas: [
      { text: "Idealny kandydat pojawia się pierwszego dnia. Zamykasz proces?",
        opts: ["Weryfikuję 2–3 kluczowe fakty. Potem prezentuję.", "Prezentuję klientowi od razu — niech nie ucieknie."] },
      { text: "Były pracownik pisze na LinkedIn, że u twojego klienta 'zarządzanie to dramat'.",
        opts: ["Sprawdzam to w kilku źródłach, zanim wyciągnę wnioski.", "Ignoruję — to tylko czyjaś opinia."] },
      { text: "Świetne zdjęcie, topowa uczelnia… ale w CV dwie luki w zatrudnieniu.",
        opts: ["Pytam o nie z szacunkiem, niczego nie zakładając.", "Przy takim profilu luki nie mają znaczenia."] },
      { text: "Dwóch niemal identycznych kandydatów: jeden twój, drugi z innej agencji. Klient pyta: 'ten twój jest lepszy, nie?'.",
        opts: ["Pokazuję dane o obu — decyzja należy do klienta.", "Jasne, że mój."] },
      { text: "Klient naciska: 'bierz go dziś, bo jutro podpisze z konkurencją'. Zostało 12 godzin.",
        opts: ["Weryfikuję kluczowe fakty i przygotowuję rozmowę — ze spokojem.", "Dzwonię teraz i pcham sprawę do przodu."] },
      { text: "Wychodzi na to, że kandydat podkręcił swoje zarobki o 30%.",
        opts: ["Rozmawiam z nim konkretnie, na faktach i bez oskarżeń.", "Nikt się nie dowie — zamykam proces i biorę prowizję."] }
    ]
  },
  es: {
    cards: [
      { name: "Tomasz Lis", flag: 0, rows: [
        "Data Engineer · Allegro · 2019–2015",
        "Skills: PySpark, Kafka, Airflow",
        "Informática · Politécnica de Varsovia · 2014",
        "Varsovia · híbrido"
      ] },
      { name: "Anna Wójcik", flag: 1, rows: [
        "Product Manager · 8 años de experiencia",
        "Titulación: 2020 · Executive MBA",
        "Herramientas: roadmap, SQL, Figma",
        "Cracovia · remoto"
      ] },
      { name: "Piotr Zieliński", flag: 2, rows: [
        "CTO en startup (5 personas)",
        "Fortalezas: estrategia, fundraising, Kubernetes",
        "Contacto: piotr.zielinski(arroba)example.com",
        "Berlín · open to relocate"
      ] },
      { name: "Magda Kowalska", flag: 1, rows: [
        "QA Automation Senior",
        "Skills: Selenium, Cypress, 'testing manual automatizado'",
        "ISTQB · 2016",
        "Gdańsk · híbrido"
      ] },
      { name: "Jakub Kaczmarek", flag: 2, rows: [
        "Lead Developer · 2021–2024",
        "Stack: Java, Kotlin, Spring",
        "Disponibilidad: inmediata · 3 meses de preaviso",
        "Breslavia · híbrido"
      ] },
      { name: "Ewa Sadowska", flag: 2, rows: [
        "Recruiter IT · 6 años",
        "Sourcing: X-Ray, boolean, ATS",
        "Idiomas: cuatro lenguas 'nativas'",
        "Varsovia · remoto"
      ] }
    ],
    dilemmas: [
      { text: "El candidato perfecto aparece el primer día. ¿Cierras el proceso?",
        opts: ["Verifico 2–3 datos clave primero. Luego presento.", "Lo presento ya — no vaya a escaparse."] },
      { text: "Un ex-empleado escribe en LinkedIn que en tu cliente 'el management es un desastre'.",
        opts: ["Lo contrasto con varias fuentes antes de concluir.", "Lo ignoro — es solo una opinión."] },
      { text: "Foto perfecta, universidad top… pero dos huecos de empleo en el CV.",
        opts: ["Pregunto por ellos con respeto, sin presuponer nada.", "Con ese perfil, los huecos no importan."] },
      { text: "Dos candidatos casi idénticos: uno tuyo, otro de otra agencia. El cliente pregunta: 'el tuyo es mejor, ¿no?'.",
        opts: ["Te presento los datos de ambos — decides tú.", "Claro, el mío."] },
      { text: "El cliente presiona: 'fírmalo hoy o mañana firma con la competencia'. Quedan 12 horas.",
        opts: ["Verifico lo clave y preparo la llamada, con calma.", "Lo llamo ya y lo empujo."] },
      { text: "Descubres que tu candidato infló su salario actual un 30 %.",
        opts: ["Se lo planteo con hechos, sin acusar.", "Nadie lo sabrá — cierro y cobro."] }
    ]
  },
  en: {
    cards: [
      { name: "Tomasz Lis", flag: 0, rows: [
        "Data Engineer · Allegro · 2019–2015",
        "Skills: PySpark, Kafka, Airflow",
        "Computer Science · Warsaw Tech · 2014",
        "Warsaw · hybrid"
      ] },
      { name: "Anna Wójcik", flag: 1, rows: [
        "Product Manager · 8 years of experience",
        "Graduated: 2020 · Executive MBA",
        "Tools: roadmap, SQL, Figma",
        "Kraków · remote"
      ] },
      { name: "Piotr Zieliński", flag: 2, rows: [
        "CTO at a 5-person startup",
        "Strengths: strategy, fundraising, Kubernetes",
        "Contact: piotr.zielinski(at)example.com",
        "Berlin · open to relocate"
      ] },
      { name: "Magda Kowalska", flag: 1, rows: [
        "QA Automation Senior",
        "Skills: Selenium, Cypress, 'manual automated testing'",
        "ISTQB · 2016",
        "Gdańsk · hybrid"
      ] },
      { name: "Jakub Kaczmarek", flag: 2, rows: [
        "Lead Developer · 2021–2024",
        "Stack: Java, Kotlin, Spring",
        "Availability: immediate · 3-month notice period",
        "Wrocław · hybrid"
      ] },
      { name: "Ewa Sadowska", flag: 2, rows: [
        "IT Recruiter · 6 years",
        "Sourcing: X-Ray, boolean, ATS",
        "Languages: four 'native' languages",
        "Warsaw · remote"
      ] }
    ],
    dilemmas: [
      { text: "The perfect candidate shows up on day one. Do you close the process?",
        opts: ["Verify 2–3 key facts first. Then present.", "Present them now — before they slip away."] },
      { text: "An ex-employee posts on LinkedIn that your client's 'management is a disaster'.",
        opts: ["Cross-check several sources before concluding.", "Ignore it — it's just an opinion."] },
      { text: "Perfect photo, top university… but two employment gaps on the CV.",
        opts: ["Ask about them respectfully, assuming nothing.", "With that profile, gaps don't matter."] },
      { text: "Two nearly identical candidates: yours, and one from another agency. The client asks: 'yours is better, right?'",
        opts: ["Here's the data on both — you decide.", "Of course, mine."] },
      { text: "The client pushes: 'sign him today or the competition gets him tomorrow'. 12 hours left.",
        opts: ["Verify the essentials and prepare the call — calmly.", "Call now and push it through."] },
      { text: "You discover your candidate inflated their current salary by 30%.",
        opts: ["Address it with facts, without accusing.", "Nobody will know — close and collect."] }
    ]
  }
};

const pgPumpBtn = document.getElementById("pg-pump");
const pgBankBtn = document.getElementById("pg-bank");

function pgShow(panel) {
  ["pg-intro", "pg-signal", "pg-dilemma", "pg-hunch", "pg-result"].forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });
  document.getElementById(panel).classList.remove("hidden");
}

function pgClearTimers() { PG.timers.forEach(clearTimeout); PG.timers = []; }

function pgProgress(elId, idx, total) {
  const el = document.getElementById(elId);
  el.innerHTML = "";
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("span");
    dot.className = "pg-dot" + (i < idx ? " done" : "");
    el.appendChild(dot);
  }
}

function pgRunTimer(barId, seconds, onDone) {
  const bar = document.getElementById(barId);
  bar.style.transition = "none";
  bar.style.width = "100%";
  void bar.offsetWidth;
  bar.style.transition = "width " + seconds + "s linear";
  bar.style.width = "0%";
  PG.timers.push(setTimeout(onDone, seconds * 1000));
}

function startPrologue() {
  PG.ojo = 0; PG.temple = 0; PG.banked = 0;
  PG.sIdx = 0; PG.dIdx = 0; PG.hCand = 0; PG.hPumps = 0;
  PG.radarDone = false; PG.lastScores = null; PG.archetype = null;
  preloadClip("prologue");
  showScreen("scene-prologue");
  pgShow("pg-intro");
}

/* --- 1 · Señal --- */
document.getElementById("pg-start").addEventListener("click", pgStartSignal);

function pgStartSignal() {
  PG.sIdx = 0;
  pgShow("pg-signal");
  pgNextCard();
}

function pgNextCard() {
  const cards = PROLOGUE[lang].cards;
  if (PG.sIdx >= cards.length) { pgClearTimers(); pgStartDilemma(); return; }
  const card = cards[PG.sIdx];
  pgProgress("pg-signal-progress", PG.sIdx, cards.length);
  document.getElementById("pg-signal-feedback").textContent = "";
  const box = document.getElementById("pg-card");
  box.innerHTML = "";
  const name = document.createElement("p");
  name.className = "pg-card-name";
  name.textContent = card.name;
  box.appendChild(name);
  card.rows.forEach((row, i) => {
    const r = document.createElement("button");
    r.type = "button";
    r.className = "pg-card-row";
    r.textContent = row;
    r.addEventListener("click", () => pgSignalAnswer(i, card.flag, r));
    box.appendChild(r);
  });
  pgRunTimer("pg-signal-timer", 5, () => pgSignalAnswer(-1, card.flag, null));
}

function pgSignalAnswer(picked, flag, btn) {
  pgClearTimers();
  document.querySelectorAll("#pg-card .pg-card-row").forEach((el, i) => {
    el.disabled = true;
    if (i === flag) el.classList.add("reveal");
  });
  const fb = document.getElementById("pg-signal-feedback");
  if (picked === flag) {
    PG.ojo++;
    if (btn) btn.classList.add("hit");
    fb.textContent = t("signalHit");
  } else {
    if (btn) btn.classList.add("miss");
    fb.textContent = t("signalMiss");
  }
  PG.sIdx++;
  PG.timers.push(setTimeout(pgNextCard, 1100));
}

/* --- 2 · Decisión relámpago (stealth: no revelamos qué era la buena) --- */
function pgStartDilemma() {
  PG.dIdx = 0;
  pgShow("pg-dilemma");
  pgNextDilemma();
}

function pgNextDilemma() {
  const list = PROLOGUE[lang].dilemmas;
  if (PG.dIdx >= list.length) { pgClearTimers(); pgStartHunch(); return; }
  const d = list[PG.dIdx];
  pgProgress("pg-dilemma-progress", PG.dIdx, list.length);
  document.getElementById("pg-dilemma-feedback").textContent = "";
  document.getElementById("pg-dilemma-text").textContent = d.text;
  const opts = document.getElementById("pg-dilemma-options");
  opts.innerHTML = "";
  const order = Math.random() < .5 ? [0, 1] : [1, 0];
  order.forEach(oi => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.textContent = d.opts[oi];
    btn.addEventListener("click", () => pgDilemmaAnswer(oi === 0, btn));
    opts.appendChild(btn);
  });
  pgRunTimer("pg-dilemma-timer", 10, () => pgDilemmaAnswer(null, null));
}

function pgDilemmaAnswer(isGood, btn) {
  pgClearTimers();
  document.querySelectorAll("#pg-dilemma-options .option").forEach(el => { el.disabled = true; });
  if (btn) btn.classList.add("chosen");
  if (isGood) PG.temple++;
  else if (isGood === null) document.getElementById("pg-dilemma-feedback").textContent = t("dilemmaTimeup");
  PG.dIdx++;
  PG.timers.push(setTimeout(pgNextDilemma, 900));
}

/* --- 3 · La corazonada (riesgo, tipo BART) --- */
function pgStartHunch() {
  PG.hCand = 0; PG.hPumps = 0; PG.banked = 0;
  pgShow("pg-hunch");
  pgHunchCandidate();
}

function pgHunchLock(v) { pgPumpBtn.disabled = v; pgBankBtn.disabled = v; }

function pgHunchCandidate() {
  PG.hPumps = 0;
  pgHunchLock(false);
  pgProgress("pg-hunch-progress", PG.hCand, PG_CANDIDATES.length);
  document.getElementById("pg-cand-name").textContent = "📁 " + PG_CANDIDATES[PG.hCand] + " · " + (PG.hCand + 1) + "/" + PG_CANDIDATES.length;
  document.getElementById("pg-hunch-status").textContent = "";
  pgUpdateQuality();
}

function pgUpdateQuality() {
  document.getElementById("pg-quality").textContent = t("hunchQuality").replace("{n}", PG.hPumps);
}

function pgHunchAdvance() {
  pgHunchLock(true);
  PG.hCand++;
  PG.timers.push(setTimeout(() => {
    if (PG.hCand >= PG_CANDIDATES.length) pgShowRadar();
    else pgHunchCandidate();
  }, 1500));
}

pgPumpBtn.addEventListener("click", () => {
  if (PG.hPumps >= 6 || pgPumpBtn.disabled) return;
  if (Math.random() < PG_RISK[PG.hPumps]) {
    document.getElementById("pg-hunch-status").textContent = t("hunchLost");
    pgHunchAdvance();
  } else {
    PG.hPumps++;
    pgUpdateQuality();
    if (PG.hPumps >= 6) {
      PG.banked += 6;
      document.getElementById("pg-hunch-status").textContent = t("hunchBanked") + " (6/6)";
      pgHunchAdvance();
    }
  }
});

pgBankBtn.addEventListener("click", () => {
  if (pgBankBtn.disabled) return;
  PG.banked += PG.hPumps;
  document.getElementById("pg-hunch-status").textContent = t("hunchBanked") + " (" + PG.hPumps + "/6)";
  pgHunchAdvance();
});

/* --- Resultado: radar + arquetipo + gancho --- */
function pgScores() {
  const ojo = Math.round(PG.ojo / PROLOGUE[lang].cards.length * 100);
  const temple = Math.round(PG.temple / PROLOGUE[lang].dilemmas.length * 100);
  const apetito = Math.min(100, Math.round(PG.banked / PG_OPTIMAL_BANK * 100));
  return { ojo, temple, apetito };
}

function pgArchetypeKey(s) {
  const max = Math.max(s.ojo, s.temple, s.apetito);
  const min = Math.min(s.ojo, s.temple, s.apetito);
  if (max - min <= 15) return "archBalanced";
  if (s.ojo === max) return "archOjo";
  if (s.temple === max) return "archTemple";
  return "archApetito";
}

function pgRadarSVG(s) {
  const cx = 160, cy = 140, r = 100;
  const angles = [-90, 30, 150];
  const P = (i, val) => {
    const rad = angles[i] * Math.PI / 180, rr = r * val / 100;
    return [cx + rr * Math.cos(rad), cy + rr * Math.sin(rad)];
  };
  const ring = f => [0, 1, 2].map(i => P(i, f * 100).map(v => v.toFixed(1)).join(",")).join(" ");
  const ends = [0, 1, 2].map(i => P(i, 100));
  const data = [s.ojo, s.temple, s.apetito].map((v, i) => P(i, v).map(x => x.toFixed(1)).join(",")).join(" ");
  return `<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" role="img" class="pg-radar-svg">
<g fill="rgba(31,92,61,.18)" stroke="#2e7d54" stroke-width="1">
<polygon points="${ring(.34)}"/><polygon points="${ring(.67)}"/><polygon points="${ring(1)}"/>
</g>
<g stroke="#1f5c3d" stroke-width="1">
${ends.map(e => `<line x1="${cx}" y1="${cy}" x2="${e[0].toFixed(1)}" y2="${e[1].toFixed(1)}"/>`).join("")}
</g>
<polygon points="${data}" fill="rgba(212,175,55,.30)" stroke="#d4af37" stroke-width="2"/>
<text x="${cx}" y="${cy - r - 10}" class="rl">🦅 ${t("radarOjo")} · ${s.ojo}</text>
<text x="${ends[1][0].toFixed(1)}" y="${ends[1][1].toFixed(1) + 22}" class="rl" text-anchor="start">⚖️ ${t("radarTemple")} · ${s.temple}</text>
<text x="${ends[2][0].toFixed(1)}" y="${ends[2][1].toFixed(1) + 22}" class="rl" text-anchor="end">🎯 ${t("radarApetito")} · ${s.apetito}</text>
</svg>`;
}

function pgShowRadar() {
  pgClearTimers();
  const s = pgScores();
  PG.lastScores = s;
  PG.archetype = pgArchetypeKey(s);
  PG.radarDone = true;
  pgShow("pg-result");
  document.getElementById("pg-radar").innerHTML = pgRadarSVG(s);
  document.getElementById("pg-archetype").textContent = t(PG.archetype);
  const box = document.getElementById("pg-audio-box");
  box.dataset.audio = "prologue";
  if (!audioAutoplayed.has("prologue")) {
    audioAutoplayed.add("prologue");
    playClip("prologue");
  }
}

document.getElementById("pg-continue").addEventListener("click", () => {
  preloadClip("act1");
  showScreen("scene-act1");
});

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

/* ============ ACTO 3: MOTOR DEL CANDIDATO (demo) ============
   Marek tiene MEMORIA (no repite temas), ESTADO DE ÁNIMO (reacciona
   a la calidad de tus preguntas) y un SECRETO: su saludo dice que
   migró él solo el sistema, pero si preguntas por el equipo o los
   números revela la verdad. Nadie lo descubre sin preguntar bien. */
const chatLog = document.getElementById("chat-log");
const chatInput = document.getElementById("chat-input");
const typingEl = document.getElementById("typing");

let marekMood = 50;
const marekAsked = [];

function marekReset() { marekMood = 50; marekAsked.length = 0; }

const MAREK = {
  pl: {
    icebreakers: [
      "Zanim zaczniemy — na rozmowach zwykle padają te same pytania. Miło byłoby usłyszeć coś konkretniejszego.",
      "Tak z ciekawości: ta rola jest pod konkretny projekt, czy stała?",
      "Aha, i jeśli pytasz o terminy — mogę zacząć nawet za dwa tygodnie."
    ],
    warm: ["Dobre pytanie — ", "O, wreszcie ktoś pyta o szczegóły! ", "Nikt wcześniej o to nie zapytał, ale… "],
    cold: ["Krótko: ", "Nie mam całego dnia. ", "Bez ogródek: "],
    repeat: [
      "Już o tym mówiłem — w skrócie: tak samo jak poprzednio. Coś jeszcze?",
      "To już padło. Zadam pytanie inaczej: co jeszcze chcesz wiedzieć?",
      "Powtarzam się… Zwykle to znak, że rozmowa stoi w miejscu."
    ],
    generic: [
      "Hmm, ok. A co dokładnie chcesz wiedzieć? Pytaj konkretnie — nie mam całego dnia.",
      "Rozumiem. To wszystko? Chętnie opowiem więcej o projekcie.",
      "Dobra, ale wracając do sedna: migracja, Spark, Warszawa. Co cię konkretnie interesuje?",
      "Hmm. Nie bardzo wiem, co odpowiedzieć. Spytaj o projekt, zespół albo technologię."
    ],
    bonus: [
      "A, i jeszcze jedno — mogę zacząć nawet za dwa tygodnie, nie za trzy.",
      "Przy okazji: mam drugą ofertę w toku, ale wasz projekt brzmi ciekawiej.",
      "Tak z ciekawości — jakie są widełki po tej stronie? Żebyśmy nie trwonili czasu.",
      "I tak poza protokołem: jeśli projekt będzie dobry, widełki są do rozmowy."
    ],
    topics: [
      { id: "team", rx: /(zesp[oó]|team|os[oó]b|koleg|sami|samodzielnie|obok)/i,
        replies: [
          "Zespół? Były cztery osoby, ale architektura i kluczowe decyzje były moje. Reszta głównie wdrażała to, co zaprojektowałem.",
          "Szczerze? Pracowałem z trzema innymi inżynierami. Ja projektowałem, oni wdrażali. Ale migracja była i jest moja."
        ] },
      { id: "numbers", rx: /(ile|jak długo|jak dlugo|miesi[ąa]c|tygodni|liczb|metr|%|procent|terabajt|tb)/i,
        replies: [
          "Migracja trwała… sześć miesięcy. Dłużej niż plan, ale zero przestojów na produkcji. Przenieśliśmy około czterdziestu terabajtów.",
          "Liczb? Około czterdzieści terabajtów danych i sześć miesięcy pracy. Plan mówił trzy miesiące — ale plan to plan."
        ] },
      { id: "salary", rx: /(pensj|stawk|wynagrodz|pieni|widełk|budżet|budget|b2b|oczekiwan|finansow|zarobk|zarab)/i,
        replies: [
          "Widełki? Powiedzmy: dwadzieścia osiem do trzydziestu czterech tysięcy brutto B2B. Elastyczny jestem, jeśli projekt jest ciekawy.",
          "Kwestie pieniężne: 28–34 tysiące na B2B. Ale zależy mi bardziej na projekcie niż na samych liczbach."
        ] },
      { id: "fail", rx: /(porażk|porazk|bł[ąe]d|problem|trudno|ryzyk|nie uda)/i,
        replies: [
          "Największy problem? Pod koniec drugiego miesiąca schematy danych się nie zgadzały. Tydzień opóźnienia, trudne rozmowy z biznesem. Nauczyłem się komunikować wcześniej.",
          "Było blisko: konflikt priorytetów z operacją. Uspokoiłem ludzi, przepiąłem terminy, wyszło. Ale stresu było sporo."
        ] },
      { id: "tech", rx: /(spark|pyspark|hadoop|kafka|sql|python|airflow|stack|stos|technolog|narzędzi|narzedzi)/i,
        replies: [
          "Spark 3.3, głównie PySpark. Pipeline'y w Airflow, dane w S3. Znam też Kafka i dbt, choć ostatnio rzadziej tego używałem.",
          "Technologicznie? PySpark na produkcji, orchestration w Airflow, hurtownia w BigQuery. Kafka się pojawiła przy CDC."
        ] },
      { id: "lead", rx: /(lider|kierow|prowadz|odpowiedzial|rol[ayęo])/i,
        replies: [
          "Formalnie nie byłem leadem, ale to ja ustalałem architekturę i dzieliłem zadania. Szef mnie słuchał, więc w praktyce prowadziłem projekt.",
          "Moja rola? Projektowałem, decydowałem, koordynowałem. Tytuł był niżej, odpowiedzialność wyżej — takie życie w korpo."
        ] },
      { id: "scope", rx: /(zakres|migracj|system|architektur|baz|legacy|tabel|projekt)/i,
        replies: [
          "Cały system legacy: Oracle do BigQuery. Do tego kilka mikrousług do przepięcia, ale to była mniejsza część.",
          "Zakres? Ponad sto tabel, kilka interfejsów i cała warstwa raportowa. Bez tej migracji firma by stała w miejscu."
        ] },
      { id: "why", rx: /(dlaczego|zmienia|zmien|odchodz|zostaw|pow[oó]d|ciekaw)/i,
        replies: [
          "Szczerze? W obecnej roli się wypaliłem — dwa lata tego samego. Szukam projektu, gdzie zbuduję coś od zera.",
          "Dlaczego zmiana? Powiedziałbym, że to kwestia rozwoju. I szczerze — trochę też zespołu."
        ] }
    ]
  },
  es: {
    icebreakers: [
      "Antes de empezar — en las entrevistas suelen caer siempre las mismas preguntas. Estaría bien oír algo concreto.",
      "Por curiosidad: ¿el rol es para un proyecto concreto o fijo?",
      "Ah, y si preguntas por fechas: podría empezar incluso en dos semanas."
    ],
    warm: ["Buena pregunta — ", "¡Por fin alguien pregunta por los detalles! ", "Nadie me lo había preguntado antes, pero… "],
    cold: ["Corto: ", "No tengo todo el día. ", "Sin rodeos: "],
    repeat: [
      "Eso ya te lo he contado — en resumen: igual que antes. ¿Algo más?",
      "Esto ya ha salido. Te lo pregunto de otra forma: ¿qué más quieres saber?",
      "Me repito… Suele ser señal de que la conversación se ha estancado."
    ],
    generic: [
      "Hmm, vale. ¿Qué quieres saber exactamente? Pregúntame algo concreto — no tengo mucho tiempo.",
      "Entiendo. ¿Eso es todo? Encantado de contarte más del proyecto.",
      "Bien, pero volviendo al grano: migración, Spark, Varsovia. ¿Qué te interesa exactamente?",
      "Hmm. No sé muy bien qué responderte. Pregúntame por el proyecto, el equipo o la tecnología."
    ],
    bonus: [
      "Ah, y una cosa más — puedo empezar incluso en dos semanas, no tres.",
      "Por cierto: tengo otra oferta en marcha, pero vuestro proyecto suena mejor.",
      "Por curiosidad — ¿cuál es el rango salarial por vuestra parte? Para no perder el tiempo.",
      "Y off the record: si el proyecto mola, el sueldo es negociable."
    ],
    topics: [
      { id: "team", rx: /(equipo|gente|personas|compañ|colega|solo|sola|solas)/i,
        replies: [
          "¿El equipo? Fuimos 4 personas, pero la arquitectura y las decisiones clave fueron mías. El resto se limitaba a ejecutar lo que yo diseñaba.",
          "¿Sinceramente? Trabajé con otros tres ingenieros. Yo diseñaba, ellos implementaban. Pero la migración fue mía."
        ] },
      { id: "numbers", rx: /(cu[áa]nt|duraci|meses|semanas|n[úu]mero|datos|terabyte|tb|%|por ciento|metric)/i,
        replies: [
          "La migración duró… seis meses. Más de lo previsto, pero cero caídas en producción. Migramos unos cuarenta terabytes.",
          "¿Números? Unos 40 terabytes de datos y seis meses de trabajo. El plan decía tres meses — pero un plan es un plan."
        ] },
      { id: "salary", rx: /(salario|sueldo|pretension|rango|dinero|b2b|bruto)/i,
        replies: [
          "¿Mis expectativas? Digamos: 28–34 mil brutos al mes en B2B. Soy flexible si el proyecto es interesante.",
          "En temas de dinero: 28–34 mil en B2B. Pero me importa más el proyecto que las cifras."
        ] },
      { id: "fail", rx: /(fracas|error|problem|dif[íi]cil|riesg|fall)/i,
        replies: [
          "¿El mayor problema? Al final del segundo mes los esquemas de datos no cuadraban. Una semana extra, conversaciones duras con negocio. Aprendí a comunicar antes.",
          "Hubo un momento delicado: conflicto de prioridades con operaciones. Calmé a la gente, movimos fechas, salió adelante. Pero el estrés se notó."
        ] },
      { id: "tech", rx: /(spark|pyspark|hadoop|kafka|sql|python|airflow|stack|tecnolog|herramient)/i,
        replies: [
          "Spark 3.3, sobre todo PySpark. Pipelines en Airflow, datos en S3. También conozco Kafka y dbt, aunque últimamente menos.",
          "¿Tecnología? PySpark en producción, orquestación en Airflow, warehouse en BigQuery. Kafka apareció con el CDC."
        ] },
      { id: "lead", rx: /(lider|jefe|dirig|responsab|rol|cargo|t[íi]tulo)/i,
        replies: [
          "Formalmente no era 'lead', pero yo definía la arquitectura y repartía tareas. Mi jefe me hacía caso, así que en la práctica dirigía el proyecto.",
          "¿Mi rol? Diseñaba, decidía, coordinaba. El título era menor, la responsabilidad mayor — así es la vida corporativa."
        ] },
      { id: "scope", rx: /(alcance|migraci|sistem|arquitectur|base|legacy|tablas|proyecto)/i,
        replies: [
          "Todo el sistema legacy: de Oracle a BigQuery. Además un par de microservicios que migrar, pero esa fue la parte pequeña.",
          "¿Alcance? Más de cien tablas, varios interfaces y toda la capa de reporting. Sin esa migración, la empresa se quedaba parada."
        ] },
      { id: "why", rx: /(por qu|porqu|cambi|march|motivo|busc)/i,
        replies: [
          "¿Sinceramente? Me quemé en mi rol actual — dos años de lo mismo. Busco un proyecto donde construir algo desde cero.",
          "¿Por qué cambiar? Diría que desarrollo profesional. Y siendo honesto — también algo del equipo."
        ] }
    ]
  },
  en: {
    icebreakers: [
      "Before we start — interviews usually mean the same old questions. Nice to hear something specific for once.",
      "Out of curiosity: is this role for a specific project, or permanent?",
      "Oh, and if you're wondering about timing — I could start in as little as two weeks."
    ],
    warm: ["Good question — ", "Ah, finally someone asks about the details! ", "Nobody asked me that before, but… "],
    cold: ["Short version: ", "I don't have all day. ", "Straight to the point: "],
    repeat: [
      "I already told you — short version: same as before. Anything else?",
      "That's been covered. Let me put it differently: what else do you want to know?",
      "I'm repeating myself… usually a sign the conversation is going in circles."
    ],
    generic: [
      "Hmm, okay. What exactly do you want to know? Be specific — I don't have much time.",
      "I see. Is that all? Happy to tell you more about the project.",
      "Right, but back to the point — migration, Spark, Warsaw. What matters to you?",
      "Hmm. Not sure what to answer. Ask me about the project, the team, or the tech."
    ],
    bonus: [
      "Oh, and one more thing — I could start in two weeks, not three.",
      "By the way: I have another offer in the pipeline, but your project sounds better.",
      "Just curious — what's the salary range on your side? So we don't waste time.",
      "And off the record: if the project is good, the money is negotiable."
    ],
    topics: [
      { id: "team", rx: /(team|people|colleagues|yourself|alone|solo|members)/i,
        replies: [
          "The team? There were 4 of us, but the architecture and key decisions were mine. The rest mostly implemented what I designed.",
          "Honestly? I worked with three other engineers. I designed, they implemented. But the migration was still mine."
        ] },
      { id: "numbers", rx: /(how (many|long)|months|weeks|numbers|metrics|terabyte|tb|%|percent|duration)/i,
        replies: [
          "The migration took… six months. Longer than planned, but zero production downtime. We moved around forty terabytes.",
          "Numbers? About 40 terabytes of data and six months of work. The plan said three months — but plans are plans."
        ] },
      { id: "salary", rx: /(salary|pay|money|rate|b2b|expectations|compensation)/i,
        replies: [
          "My expectations? Let's say: 28–34k PLN gross on B2B. I'm flexible if the project is interesting.",
          "Money-wise: 28–34k on B2B. But I care more about the project than the figures."
        ] },
      { id: "fail", rx: /(fail|mistake|problem|difficult|risk|issue|wrong)/i,
        replies: [
          "The biggest issue? End of month two, the data schemas wouldn't reconcile. An extra week, tough conversations with the business. I learned to communicate earlier.",
          "There was a close call: a priority clash with operations. I calmed people down, shifted deadlines, it worked out. But the stress was real."
        ] },
      { id: "tech", rx: /(spark|pyspark|hadoop|kafka|sql|python|airflow|stack|tech|tools)/i,
        replies: [
          "Spark 3.3, mostly PySpark. Pipelines in Airflow, data in S3. I also know Kafka and dbt, though less recently.",
          "Tech-wise? PySpark in production, orchestration in Airflow, warehouse in BigQuery. Kafka showed up with the CDC."
        ] },
      { id: "lead", rx: /(lead|boss|manag|responsib|role|title)/i,
        replies: [
          "Formally I wasn't the 'lead', but I set the architecture and split the tasks. My boss listened to me, so in practice I ran the project.",
          "My role? I designed, decided, coordinated. The title was lower, the responsibility higher — corporate life."
        ] },
      { id: "scope", rx: /(scope|migrat|system|architect|database|legacy|tables|project)/i,
        replies: [
          "The whole legacy system — Oracle database to BigQuery. Plus a few microservices to cut over, but that was the smaller part.",
          "Scope? Over a hundred tables, several interfaces, the entire reporting layer. Without that migration, the company stood still."
        ] },
      { id: "why", rx: /(why|leav|chang|reason|looking)/i,
        replies: [
          "Honestly? I burned out in my current role — two years of the same thing. I want a project where I build something from scratch.",
          "Why the change? Growth, I'd say. And, honestly — the team had something to do with it too."
        ] }
    ]
  }
};

function pickFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function typingDelay(text) { return Math.min(2600, 500 + text.length * 16); }

async function addCandidateBubble(text) {
  typingEl.classList.remove("hidden");
  await new Promise(r => setTimeout(r, typingDelay(text)));
  typingEl.classList.add("hidden");
  addBubble(text, "them");
}

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

function detectMarekTopic(text) {
  const a = " " + text.toLowerCase() + " ";
  for (const tp of MAREK[lang].topics) if (tp.rx.test(a)) return tp;
  return null;
}

function moodOpener() {
  if (marekMood >= 72) return pickFrom(MAREK[lang].warm);
  if (marekMood < 34) return pickFrom(MAREK[lang].cold);
  return "";
}

async function demoCandidateReply(text) {
  const tp = detectMarekTopic(text);
  let reply, delta = 0, isRepeat = false;

  if (text.trim().length < 12) delta -= 10;          // mensaje mínimo = Marek se enfría
  if (!text.includes("?")) delta -= 4;
  if (text.length >= 20 && text.includes("?")) delta += 6;

  if (tp) {
    if (marekAsked.includes(tp.id)) {
      reply = pickFrom(MAREK[lang].repeat);
      isRepeat = true;
      delta -= 4;
    } else {
      reply = pickFrom(tp.replies);
      marekAsked.push(tp.id);
      delta += 10;                                    // pregunta con tema = Marek se abre
    }
  } else {
    reply = pickFrom(MAREK[lang].generic);
    if (text.length >= 25) delta += 2;
  }
  marekMood = Math.max(0, Math.min(100, marekMood + delta));

  await addCandidateBubble(moodOpener() + reply);

  // Espontaneidad: a veces suelta algo extra por su cuenta
  if (tp && !isRepeat && marekMood >= 55 && Math.random() < 0.35) {
    await addCandidateBubble(pickFrom(MAREK[lang].bonus));
  }
}

chatInput.addEventListener("input", () => {
  document.getElementById("chat-count").textContent = chatInput.value.length;
});

function startAct3() {
  chatLog.innerHTML = "";
  msgCount = 0;
  answers.act3 = [];
  marekReset();
  document.getElementById("chat-count").textContent = "0";
  document.getElementById("msg-count").textContent = "0";
  document.getElementById("act3-finish").classList.add("hidden");
  document.getElementById("chat-send").disabled = false;
  addBubble(t("candidateGreeting"), "them");
  showScreen("scene-act3");
  setTimeout(() => { addCandidateBubble(pickFrom(MAREK[lang].icebreakers)); }, 1500);
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
  await candidateReply(text);
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
    const kw = ["cuántos", "cuantas", "cuánto", "ile", "equipo", "zespół", "qué hiciste", "co zrobiłeś", "cyfr", "liczb", "wynik", "rezultat", "jak ", "co ", "team", "numbers", "result", "scope", "zakres", "role", "rola", "rolę", "lead", "dlaczego", "por qué", "why", "months", "miesięcy", "meses"];
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
  if (CONFIG.DEMO_MODE) { await demoCandidateReply(text); return; }
  typingEl.classList.remove("hidden");
  let reply;
  try {
    const data = await postJson(CONFIG.CANDIDATE_ENDPOINT, { message: text, lang }, 15000);
    reply = data.reply || "…";
  } catch { reply = "…"; }
  typingEl.classList.add("hidden");
  addBubble(reply, "them");
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

/* La carta del veredicto reacciona a si descubriste el secreto de Marek */
function demoLetterText() {
  const found = marekAsked.includes("team") || marekAsked.includes("numbers") || marekAsked.includes("lead");
  return t("demoLetter") + " " + t(found ? "letterCaught" : "letterMissed");
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
    letter = demoLetterText();
  } else {
    try {
      const data = await postJson(CONFIG.LETTER_ENDPOINT, { score: total, rank: t("levelNames")[rankFor(total)], lang }, 15000);
      letter = data.letter || demoLetterText();
    } catch { letter = demoLetterText(); }
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
    radar: PG.radarDone ? { ojo: PG.lastScores.ojo, temple: PG.lastScores.temple, apetito: PG.lastScores.apetito, archetype: PG.archetype } : null,
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
  if (e.target.id === "privacy-modal") e.currentTarget.classList.add("hidden");
});

applyLang();
renderAct2();
