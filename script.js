// Elements
const navLinks = document.querySelectorAll('#nav-links a[data-section]');
const sections = document.querySelectorAll('.section');
const languageSelect = document.getElementById('language-select');
const applyButtons = document.querySelectorAll('.apply-btn');
const applySection = document.getElementById('apply');
const jobsSection = document.getElementById('jobs');
const jobPositionInput = document.getElementById('job-position');
const applyBackBtn = document.getElementById('apply-back');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const homeHeading = document.getElementById('home-heading');
const homeText = document.getElementById('home-text');
const jobsHeading = document.getElementById('jobs-heading');
const job1Title = document.getElementById('job1-title');
const job1LocationLabel = document.getElementById('job1-location-label');
const job1Location = document.getElementById('job1-location');
const job1Desc = document.getElementById('job1-desc');
const job2Title = document.getElementById('job2-title');
const job2LocationLabel = document.getElementById('job2-location-label');
const job2Location = document.getElementById('job2-location');
const job2Desc = document.getElementById('job2-desc');
const contactHeading = document.getElementById('contact-heading');
const contactText = document.getElementById('contact-text');
const contactEmail = document.getElementById('contact-email');
const applyHeading = document.getElementById('apply-heading');
const applyLabelJob = document.getElementById('apply-label-job');
const applyLabelName = document.getElementById('apply-label-name');
const applyLabelEmail = document.getElementById('apply-label-email');
const applyLabelResume = document.getElementById('apply-label-resume');
const applySubmit = document.getElementById('apply-submit');

// Content translations
const translations = {
  en: {
    title: "Welcome to Africa Jobs Portal",
    subtitle: "Your next job is just a click away. Apply now!",
    homeHeading: "Explore Job Opportunities in Lusaka",
    homeText: "Find your dream job across Africa with ease and confidence.",
    jobsHeading: "Latest Job Openings",
    job1Title: "Software Engineer",
    job1LocationLabel: "Location:",
    job1Location: "Remote",
    job1Desc: "Work with cutting-edge technologies.",
    job2Title: "HR Manager",
    job2LocationLabel: "Location:",
    job2Location: "Lusaka",
    job2Desc: "Lead and manage our human resources team.",
    contactHeading: "Contact Us",
    contactText: "Have any questions? Reach us at ",
    contactEmail: "contact@africajobsportal.com",
    applyHeading: "Apply for Job",
    applyLabelJob: "Position:",
    applyLabelName: "Full Name:",
    applyLabelEmail: "Email:",
    applyLabelResume: "Upload Resume:",
    applySubmit: "Submit Application"
  },
  fr: {
    title: "Bienvenue sur le Portail Emplois Afrique",
    subtitle: "Votre prochain emploi est à portée de clic. Postulez maintenant !",
    homeHeading: "Explorez les opportunités d'emploi à Lusaka",
    homeText: "Trouvez votre emploi de rêve à travers l'Afrique facilement et en toute confiance.",
    jobsHeading: "Dernières offres d'emploi",
    job1Title: "Ingénieur Logiciel",
    job1LocationLabel: "Lieu :",
    job1Location: "Télétravail",
    job1Desc: "Trav
