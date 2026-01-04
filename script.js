const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const year = document.getElementById('year');
const langToggle = document.getElementById('langToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
if (year) {
  year.textContent = new Date().getFullYear();
}
const translations = {
  en: {
    brand: 'TEF AVEC BASA',
    'nav.home': 'Home',
    'nav.tef_canada': 'TEF Canada',
    'nav.comp_written': 'Written Comprehension',
    'nav.comp_oral': 'Oral Comprehension',
    'nav.expr_written': 'Written Expression',
    'nav.expr_oral': 'Oral Expression',
    'nav.about': 'About us',
    'nav.contact': 'Contact us',
    'hero.title': 'Master French for TEF Canada Success',
    'hero.subtitle': 'Structured coaching, mock exams, fast progress from A2 to C1',
    'cta.explore': 'Explore Programs',
    'cta.contact': 'Get In Touch',
    'about.title': 'About us',
    'about.body': 'TEF AVEC BASA catalyzes entrepreneurship by connecting founders to knowledge, capital, and networks to build sustainable businesses that create impact.',
    'programs.title': 'Programs',
    'programs.incubation.title': 'Incubation',
    'programs.incubation.body': 'Structured sprints, expert sessions, and milestones to validate and grow.',
    'programs.incubation.cta': 'Apply',
    'programs.mentorship.title': 'Mentorship',
    'programs.mentorship.body': 'One-on-one guidance from experienced operators and industry experts.',
    'programs.mentorship.cta': 'Join',
    'programs.funding.title': 'Funding',
    'programs.funding.body': 'Grants and introductions to aligned capital partners.',
    'programs.funding.cta': 'Learn More',
    'comp_written.title': 'Written Comprehension',
    'comp_written.body': 'Resources and activities to improve reading comprehension.',
    'comp_oral.title': 'Oral Comprehension',
    'comp_oral.body': 'Exercises and content to develop listening and interpretation.',
    'expr_written.title': 'Written Expression',
    'expr_written.body': 'Practice and guidance to produce clear, effective writing.',
    'expr_oral.title': 'Oral Expression',
    'expr_oral.body': 'Workshops and techniques to speak with ease and precision.',
    'contact.title': 'Contact us',
    'contact.email_label': 'Email:',
    'contact.whatsapp_label': 'WhatsApp:',
    'contact.whatsapp_cta': 'Send a message',
    'contact.follow_label': 'Follow:',
    'footer.about': 'About us',
    'footer.programs': 'Programs',
    'footer.contact': 'Contact us'
  },
  fr: {
    brand: 'TEF AVEC BASA',
    'nav.home': 'Accueil',
    'nav.tef_canada': 'TEF Canada',
    'nav.comp_written': 'Compréhension écrite',
    'nav.comp_oral': 'Compréhension orale',
    'nav.expr_written': 'Expression écrite',
    'nav.expr_oral': 'Expression orale',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'hero.title': 'Maîtrisez le français pour réussir au TEF Canada',
    'hero.subtitle': 'Coaching structuré, examens blancs, progression rapide de A2 à C1',
    'cta.explore': 'Découvrir les programmes',
    'cta.contact': 'Nous contacter',
    'about.title': 'À propos',
    'about.body': 'TEF AVEC BASA catalyse l’entrepreneuriat en connectant les fondateurs à la connaissance, au capital et aux réseaux pour bâtir des entreprises durables à impact.',
    'programs.title': 'Programmes',
    'programs.incubation.title': 'Incubation',
    'programs.incubation.body': 'Sprints structurés, sessions d’experts et jalons pour valider et croître.',
    'programs.incubation.cta': 'Postuler',
    'programs.mentorship.title': 'Mentorat',
    'programs.mentorship.body': 'Accompagnement individuel par des opérateurs expérimentés et des experts sectoriels.',
    'programs.mentorship.cta': 'Rejoindre',
    'programs.funding.title': 'Financement',
    'programs.funding.body': 'Subventions et mises en relation avec des partenaires financiers alignés.',
    'programs.funding.cta': 'En savoir plus',
    'comp_written.title': 'Compréhension écrite',
    'comp_written.body': 'Ressources et activités pour améliorer la compréhension écrite.',
    'comp_oral.title': 'Compréhension orale',
    'comp_oral.body': 'Exercices et contenus pour développer l’écoute et l’interprétation.',
    'expr_written.title': 'Expression écrite',
    'expr_written.body': 'Pratiques et conseils pour produire des textes clairs et efficaces.',
    'expr_oral.title': 'Expression orale',
    'expr_oral.body': 'Ateliers et techniques pour s’exprimer avec aisance et précision.',
    'contact.title': 'Nous contacter',
    'contact.email_label': 'Email :',
    'contact.whatsapp_label': 'WhatsApp :',
    'contact.whatsapp_cta': 'Envoyer un message',
    'contact.follow_label': 'Suivez-nous :',
    'footer.about': 'À propos',
  'footer.programs': 'Programmes',
  'footer.contact': 'Contact'
  }
};
translations.en['programs.beginner.title'] = 'Beginner Track: Grammar Foundations';
translations.en['programs.beginner.body'] = 'For learners starting from the basics: we begin with core grammar to build accuracy and confidence before moving to TEF practice.';
translations.en['programs.a2plus.title'] = 'A2+ Track: Full Practice';
translations.en['programs.a2plus.body'] = 'For learners already at A2 level: we focus on practice across all TEF sections with targeted strategies and mock exams.';
translations.en['programs.sections_label'] = 'Sections Covered';
translations.en['programs.cta'] = 'Start now';
translations.fr['programs.beginner.title'] = 'Parcours débutant : bases de grammaire';
translations.fr['programs.beginner.body'] = 'Pour ceux qui commencent dès les débuts : nous démarrons par la grammaire essentielle pour bâtir précision et confiance avant de passer à la pratique TEF.';
translations.fr['programs.a2plus.title'] = 'Parcours A2+ : pratique complète';
translations.fr['programs.a2plus.body'] = 'Pour ceux déjà au niveau A2 : nous commençons directement la pratique sur toutes les épreuves du TEF avec stratégies ciblées et examens blancs.';
translations.fr['programs.sections_label'] = 'Épreuves couvertes';
translations.fr['programs.cta'] = 'Commencer maintenant';
translations.en['registration.prompt'] = 'To register, contact us on WhatsApp or by email.';
translations.en['registration.whatsapp_cta'] = 'Register via WhatsApp';
translations.en['registration.email_cta'] = 'Register via Email';
translations.fr['registration.prompt'] = 'Pour vous inscrire, contactez-nous sur WhatsApp ou par email.';
translations.fr['registration.whatsapp_cta'] = 'S’inscrire via WhatsApp';
translations.fr['registration.email_cta'] = 'S’inscrire par email';
translations.en['tef_results.title'] = 'TEF Canada Results';
translations.en['tef_results.subtitle'] = 'Recent achievements from learners in our previous session.';
translations.en['tef_results.learner1'] = 'Learner 1';
translations.en['tef_results.learner2'] = 'Learner 2';
translations.en['tef_results.learner3'] = 'Learner 3';
translations.en['tef_results.learner4'] = 'Learner 4';
translations.en['tef_results.learner5'] = 'Learner 5';
translations.fr['tef_results.title'] = 'Résultats TEF Canada';
translations.fr['tef_results.subtitle'] = 'Performances récentes des apprenants lors de la session précédente.';
translations.fr['tef_results.learner1'] = 'Apprenant 1';
translations.fr['tef_results.learner2'] = 'Apprenant 2';
translations.fr['tef_results.learner3'] = 'Apprenant 3';
translations.fr['tef_results.learner4'] = 'Apprenant 4';
translations.fr['tef_results.learner5'] = 'Apprenant 5';
translations.en['pages.details.title'] = 'Details';
translations.fr['pages.details.title'] = 'Détails';
translations.en['pages.programs.subtitle'] = 'Choose a track based on your current level and goals.';
translations.fr['pages.programs.subtitle'] = 'Choisissez un parcours selon votre niveau et vos objectifs.';
translations.en['pages.programs.beginner.duration'] = 'Duration: 6–8 weeks';
translations.en['pages.programs.beginner.sessions'] = 'Sessions: 8–12';
translations.en['pages.programs.beginner.timer'] = 'Session length: 60–90 minutes';
translations.fr['pages.programs.beginner.duration'] = 'Durée : 6–8 semaines';
translations.fr['pages.programs.beginner.sessions'] = 'Sessions : 8–12';
translations.fr['pages.programs.beginner.timer'] = 'Durée de session : 60–90 minutes';
translations.en['pages.programs.a2plus.duration'] = 'Duration: 6–10 weeks';
translations.en['pages.programs.a2plus.sessions'] = 'Sessions: 10–16';
translations.en['pages.programs.a2plus.timer'] = 'Session length: 60–90 minutes';
translations.fr['pages.programs.a2plus.duration'] = 'Durée : 6–10 semaines';
translations.fr['pages.programs.a2plus.sessions'] = 'Sessions : 10–16';
translations.fr['pages.programs.a2plus.timer'] = 'Durée de session : 60–90 minutes';
translations.en['pages.comp_written.title'] = 'Written Comprehension';
translations.en['pages.comp_written.intro'] = 'Understand articles, notices, and formal texts efficiently.';
translations.en['pages.comp_written.duration'] = 'Duration: 60 minutes';
translations.en['pages.comp_written.questions'] = 'Questions: 50';
translations.en['pages.comp_written.sessions'] = 'Sessions: 8–12';
translations.en['pages.comp_written.categories_title'] = 'Question Categories';
translations.en['pages.comp_written.cat1'] = 'Short notices and announcements';
translations.en['pages.comp_written.cat2'] = 'Magazine and newspaper articles';
translations.en['pages.comp_written.cat3'] = 'Formal letters and administrative texts';
translations.en['pages.comp_written.cat4'] = 'Instructions and informational documents';
translations.fr['pages.comp_written.title'] = 'Compréhension écrite';
translations.fr['pages.comp_written.intro'] = 'Comprendre efficacement articles, avis et textes formels.';
translations.fr['pages.comp_written.duration'] = 'Durée : 60 minutes';
translations.fr['pages.comp_written.questions'] = 'Questions : 50';
translations.fr['pages.comp_written.sessions'] = 'Sessions : 8–12';
translations.fr['pages.comp_written.categories_title'] = 'Catégories de questions';
translations.fr['pages.comp_written.cat1'] = 'Avis et annonces courts';
translations.fr['pages.comp_written.cat2'] = 'Articles de presse et magazines';
translations.fr['pages.comp_written.cat3'] = 'Lettres formelles et textes administratifs';
translations.fr['pages.comp_written.cat4'] = 'Consignes et documents informatifs';
translations.en['pages.comp_oral.title'] = 'Oral Comprehension';
translations.en['pages.comp_oral.intro'] = 'Understand dialogues, announcements, and interviews accurately.';
translations.en['pages.comp_oral.duration'] = 'Duration: 40 minutes';
translations.en['pages.comp_oral.questions'] = 'Questions: 60';
translations.en['pages.comp_oral.sessions'] = 'Sessions: 8–12';
translations.en['pages.comp_oral.categories_title'] = 'Audio Categories';
translations.en['pages.comp_oral.cat1'] = 'Daily-life dialogues';
translations.en['pages.comp_oral.cat2'] = 'Public announcements';
translations.en['pages.comp_oral.cat3'] = 'Professional conversations';
translations.en['pages.comp_oral.cat4'] = 'Interviews and short reports';
translations.fr['pages.comp_oral.title'] = 'Compréhension orale';
translations.fr['pages.comp_oral.intro'] = 'Comprendre avec précision dialogues, annonces et interviews.';
translations.fr['pages.comp_oral.duration'] = 'Durée : 40 minutes';
translations.fr['pages.comp_oral.questions'] = 'Questions : 60';
translations.fr['pages.comp_oral.sessions'] = 'Sessions : 8–12';
translations.fr['pages.comp_oral.categories_title'] = 'Catégories audio';
translations.fr['pages.comp_oral.cat1'] = 'Dialogues de la vie quotidienne';
translations.fr['pages.comp_oral.cat2'] = 'Annonces publiques';
translations.fr['pages.comp_oral.cat3'] = 'Conversations professionnelles';
translations.fr['pages.comp_oral.cat4'] = 'Interviews et courts reportages';
translations.en['pages.expr_written.title'] = 'Written Expression';
translations.en['pages.expr_written.intro'] = 'Produce clear, coherent texts for functional and argumentative tasks.';
translations.en['pages.expr_written.duration'] = 'Duration: 60 minutes';
translations.en['pages.expr_written.tasks'] = 'Tasks: 2';
translations.en['pages.expr_written.sessions'] = 'Sessions: 8–12';
translations.en['pages.expr_written.tasks_title'] = 'Tasks';
translations.en['pages.expr_written.task1'] = 'Functional writing: email, note, or formal request';
translations.en['pages.expr_written.task2'] = 'Argumentative writing: opinion piece with examples';
translations.fr['pages.expr_written.title'] = 'Expression écrite';
translations.fr['pages.expr_written.intro'] = 'Produire des textes clairs et cohérents pour des tâches fonctionnelles et argumentatives.';
translations.fr['pages.expr_written.duration'] = 'Durée : 60 minutes';
translations.fr['pages.expr_written.tasks'] = 'Tâches : 2';
translations.fr['pages.expr_written.sessions'] = 'Sessions : 8–12';
translations.fr['pages.expr_written.tasks_title'] = 'Tâches';
translations.fr['pages.expr_written.task1'] = 'Écrit fonctionnel : email, note ou demande formelle';
translations.fr['pages.expr_written.task2'] = 'Argumentation : texte d’opinion avec exemples';
translations.en['pages.expr_oral.title'] = 'Oral Expression';
translations.en['pages.expr_oral.intro'] = 'Speak with clarity and coherence across interactive and monologue tasks.';
translations.en['pages.expr_oral.duration'] = 'Duration: 15 minutes';
translations.en['pages.expr_oral.tasks'] = 'Tasks: 2';
translations.en['pages.expr_oral.sessions'] = 'Sessions: 8–12';
translations.en['pages.expr_oral.tasks_title'] = 'Tasks';
translations.en['pages.expr_oral.task1'] = 'Interactive task: role-play or problem-solving dialogue';
translations.en['pages.expr_oral.task2'] = 'Monologue: structured speech with examples';
translations.fr['pages.expr_oral.title'] = 'Expression orale';
translations.fr['pages.expr_oral.intro'] = 'S’exprimer avec clarté et cohérence en interaction et en monologue.';
translations.fr['pages.expr_oral.duration'] = 'Durée : 15 minutes';
translations.fr['pages.expr_oral.tasks'] = 'Tâches : 2';
translations.fr['pages.expr_oral.sessions'] = 'Sessions : 8–12';
translations.fr['pages.expr_oral.tasks_title'] = 'Tâches';
translations.fr['pages.expr_oral.task1'] = 'Tâche interactive : jeu de rôle ou résolution de problème';
translations.fr['pages.expr_oral.task2'] = 'Monologue : discours structuré avec exemples';
translations.en['pages.about.details_title'] = 'What we offer';
translations.en['pages.about.point1'] = 'Personalized coaching for TEF Canada preparation';
translations.en['pages.about.point2'] = 'Structured curriculum from foundations to advanced practice';
translations.en['pages.about.point3'] = 'Flexible scheduling and mock exams with detailed feedback';
translations.fr['pages.about.details_title'] = 'Ce que nous offrons';
translations.fr['pages.about.point1'] = 'Coaching personnalisé pour la préparation TEF Canada';
translations.fr['pages.about.point2'] = 'Programme structuré des bases à la pratique avancée';
translations.fr['pages.about.point3'] = 'Horaires flexibles et examens blancs avec retours détaillés';
translations.en['pages.contact.subtitle'] = 'Reach out on WhatsApp or email to register.';
translations.fr['pages.contact.subtitle'] = 'Contactez-nous sur WhatsApp ou par email pour vous inscrire.';
translations.en['tef_canada.title'] = 'TEF Canada';
translations.en['tef_canada.body'] = 'Official French proficiency test recognized by IRCC for immigration, studies, and work in Canada.';
translations.en['tef_canada.recognition.title'] = 'IRCC Recognition';
translations.en['tef_canada.recognition.body'] = 'Accepted for Express Entry, study permits, and permanent residency applications.';
translations.en['tef_canada.structure.title'] = 'Exam Structure';
translations.en['tef_canada.structure.body'] = 'Four sections: Reading, Listening, Speaking, Writing. Computer- or paper-based depending on center.';
translations.en['tef_canada.scoring.title'] = 'Scoring & Levels';
translations.en['tef_canada.scoring.body'] = 'Results mapped to CLB/NCLC levels; higher bands strengthen your profile.';
translations.en['tef_canada.registration.title'] = 'Registration & Dates';
translations.en['tef_canada.registration.body'] = 'Flexible sessions year-round. Get guidance on nearest centers and required documents.';
translations.en['tef_canada.prep.title'] = 'Preparation & Coaching';
translations.en['tef_canada.prep.body'] = 'Diagnostic tests, targeted lessons, mock exams with feedback to boost your score.';
translations.en['tef_canada.success.title'] = 'Success Stories';
translations.en['tef_canada.success.body'] = 'Learners improved their CLB by 2–3 levels with structured coaching.';
translations.en['tef_canada.cta'] = 'Start Your TEF Canada Journey';
translations.fr['tef_canada.title'] = 'TEF Canada';
translations.fr['tef_canada.body'] = 'Examen officiel de compétence en français reconnu par l’IRCC pour l’immigration, les études et le travail au Canada.';
translations.fr['tef_canada.recognition.title'] = 'Reconnaissance IRCC';
translations.fr['tef_canada.recognition.body'] = 'Accepté pour Entrée Express, permis d’études et résidence permanente.';
translations.fr['tef_canada.structure.title'] = 'Structure de l’examen';
translations.fr['tef_canada.structure.body'] = 'Quatre épreuves : Lecture, Écoute, Expression orale, Expression écrite. Format ordinateur ou papier selon le centre.';
translations.fr['tef_canada.scoring.title'] = 'Notes & Niveaux';
translations.fr['tef_canada.scoring.body'] = 'Résultats alignés sur les niveaux CLB/NCLC ; des scores élevés renforcent votre dossier.';
translations.fr['tef_canada.registration.title'] = 'Inscription & Dates';
translations.fr['tef_canada.registration.body'] = 'Sessions flexibles toute l’année. Conseils sur les centres proches et les documents requis.';
translations.fr['tef_canada.prep.title'] = 'Préparation & Coaching';
translations.fr['tef_canada.prep.body'] = 'Tests diagnostiques, leçons ciblées, examens blancs avec retours pour améliorer votre score.';
translations.fr['tef_canada.success.title'] = 'Témoignages';
translations.fr['tef_canada.success.body'] = 'Des apprenants ont gagné 2–3 niveaux CLB grâce à un coaching structuré.';
translations.fr['tef_canada.cta'] = 'Commencer votre parcours TEF Canada';
translations.en['tef_canada.sections.title'] = 'Exam Sections';
translations.en['tef_canada.sections.reading.title'] = 'Reading';
translations.en['tef_canada.sections.reading.body'] = 'Multiple-choice tasks assessing comprehension of articles, notices, and formal texts. Manage time, scan for keywords, and infer meaning from context.';
translations.en['tef_canada.sections.listening.title'] = 'Listening';
translations.en['tef_canada.sections.listening.body'] = 'Audio extracts from everyday and professional situations. Focus on main ideas, speakers’ intent, and details such as dates and figures.';
translations.en['tef_canada.sections.speaking.title'] = 'Speaking';
translations.en['tef_canada.sections.speaking.body'] = 'Two tasks: interaction and expression. Structure your ideas, use connectors, and demonstrate clarity, accuracy, and spontaneity.';
translations.en['tef_canada.sections.writing.title'] = 'Writing';
translations.en['tef_canada.sections.writing.body'] = 'Two tasks: functional writing and argumentation. Plan, write clearly, and revise to ensure coherence, register, and grammar.';
translations.fr['tef_canada.sections.title'] = 'Épreuves de l’examen';
translations.fr['tef_canada.sections.reading.title'] = 'Lecture';
translations.fr['tef_canada.sections.reading.body'] = 'QCM évaluant la compréhension d’articles, d’avis et de textes formels. Gérez le temps, repérez les mots-clés et déduisez le sens selon le contexte.';
translations.fr['tef_canada.sections.listening.title'] = 'Écoute';
translations.fr['tef_canada.sections.listening.body'] = 'Extraits audio de situations quotidiennes et professionnelles. Ciblez les idées principales, l’intention des locuteurs et les détails (dates, chiffres).';
translations.fr['tef_canada.sections.speaking.title'] = 'Expression orale';
translations.fr['tef_canada.sections.speaking.body'] = 'Deux tâches : interaction et expression. Structurez vos idées, utilisez des connecteurs et montrez clarté, précision et spontanéité.';
translations.fr['tef_canada.sections.writing.title'] = 'Expression écrite';
translations.fr['tef_canada.sections.writing.body'] = 'Deux tâches : écrit fonctionnel et argumentation. Planifiez, rédigez clairement et révisez pour assurer cohérence, registre et grammaire.';
function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });
  if (langToggle) {
    langToggle.textContent = lang.toUpperCase();
  }
  localStorage.setItem('lang', lang);
}
const savedLang = localStorage.getItem('lang') || 'en';
setLanguage(savedLang);
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const next = (localStorage.getItem('lang') || 'en') === 'en' ? 'fr' : 'en';
    setLanguage(next);
  });
}
