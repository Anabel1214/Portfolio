// Translations
const translations = {
  en: {
    "eyebrow-hero": "Design and visual strategy",
    "hero-title": "I create elegant experiences for brands and businesses.",
    "hero-intro": "I'm a freelancer focused on visual design, branding, and websites that communicate clarity, trust, and style.",
    "btn-projects": "View projects",
    "btn-contact": "Let's talk",
    "eyebrow-portfolio": "Portfolio",
    "projects-title": "Selected projects",
    "projects-subtitle": "Each project is designed to reflect a strong identity and memorable experience.",
    "eyebrow-contact": "Contact",
    "contact-title": "Ready to work together?",
    "contact-subtitle": "Tell me about your project and I'll respond with a clear proposal.",
    "form-name": "Name",
    "form-email": "Email",
    "form-project": "Project",
    "btn-send": "Send message",
    "info-title": "Information",
    "info-available": "Available for new projects year-round.",
    "modal-client": "Client",
    "modal-view": "View project"
  },
  es: {
    "eyebrow-hero": "Diseño y estrategia visual",
    "hero-title": "Creo experiencias elegantes para marcas y negocios.",
    "hero-intro": "Soy una freelancer enfocada en diseño visual, branding y sitios web que transmiten claridad, confianza y estilo.",
    "btn-projects": "Ver proyectos",
    "btn-contact": "Hablemos",
    "eyebrow-portfolio": "Portafolio",
    "projects-title": "Proyectos seleccionados",
    "projects-subtitle": "Cada trabajo está pensado para reflejar una identidad fuerte y una experiencia memorable.",
    "eyebrow-contact": "Contacto",
    "contact-title": "¿Listo para trabajar juntos?",
    "contact-subtitle": "Cuéntame sobre tu proyecto y te responderé con una propuesta clara.",
    "form-name": "Nombre",
    "form-email": "Correo",
    "form-project": "Proyecto",
    "btn-send": "Enviar mensaje",
    "info-title": "Información",
    "info-available": "Disponible para nuevos proyectos en todo el año.",
    "modal-client": "Cliente",
    "modal-view": "Ver proyecto"
  }
};

// Project translations
const projectsData = {
  en: [
    {
      title: "Bloom Cosmetics",
      category: "Branding and web",
      summary: "Identity and digital experience project for a cosmetics brand with premium and elegant aesthetics.",
      description: "A coherent visual proposal was developed to highlight the essence of the brand, reinforcing its web image and communication with the public.",
      highlights: [
        "Visual identity design",
        "Landing page with commercial focus",
        "Carefully crafted visual experience for premium brand"
      ],
      duration: "6 weeks",
      client: "Bloom Cosmetics",
      url: "https://anabel1214.github.io/Bloom-Cosmetics/",
      image: "Bloom Cosmetics.png"
    },
    {
      title: "Cordero Xpress and Logistics",
      category: "Corporate web",
      summary: "Website for a logistics company aimed at conveying trust, order, and professionalism.",
      description: "The proposal combines clarity, solid structure, and modern aesthetics to present services in an accessible and close manner for clients and partners.",
      highlights: [
        "Institutional design",
        "Visual hierarchy for services",
        "Clean and professional presentation"
      ],
      duration: "5 weeks",
      client: "Cordero Xpress and Logistics",
      url: "https://anabel1214.github.io/Cordero-Xpress-and-Logistics/",
      image: "Cordero Xpress and Logistica.png"
    },
    {
      title: "Aurelia Perfums",
      category: "Branding and development",
      summary: "Creative proposal for a perfume brand with a sophisticated and exclusive approach.",
      description: "The visual and conceptual foundation of the project was worked on to build an elegant and memorable identity aligned with the brand's premium positioning.",
      highlights: [
        "Brand concept",
        "Coherent visual direction",
        "Foundation for project development"
      ],
      duration: "4 weeks",
      client: "Aurelia Perfums",
      url: "https://anabel1214.github.io/Aurelia-Perfums/",
      image: "Aurelia Perfums.png"
    }
  ],
  es: [
    {
      title: "Bloom Cosmetics",
      category: "Branding y web",
      summary: "Proyecto de identidad y experiencia digital para una marca de cosmética con estética premium y elegante.",
      description: "Se desarrolló una propuesta visual coherente para destacar la esencia de la marca, reforzando su imagen en web y su comunicación con el público.",
      highlights: [
        "Diseño de identidad visual",
        "Landing page con enfoque comercial",
        "Experiencia visual cuidada para marca premium"
      ],
      duration: "6 semanas",
      client: "Bloom Cosmetics",
      url: "https://anabel1214.github.io/Bloom-Cosmetics/",
      image: "Bloom Cosmetics.png"
    },
    {
      title: "Cordero Xpress and Logistics",
      category: "Web corporativa",
      summary: "Sitio para una empresa de logística orientado a transmitir confianza, orden y profesionalismo.",
      description: "La propuesta combina claridad, estructura sólida y una estética moderna para mostrar servicios de forma accesible y cercana para clientes y aliados.",
      highlights: [
        "Diseño institucional",
        "Jerarquía visual para servicios",
        "Presentación limpia y profesional"
      ],
      duration: "5 semanas",
      client: "Cordero Xpress and Logistics",
      url: "https://anabel1214.github.io/Cordero-Xpress-and-Logistics/",
      image: "Cordero Xpress and Logistica.png"
    },
    {
      title: "Aurelia Perfums",
      category: "Branding y desarrollo",
      summary: "Propuesta creativa para una marca de perfumes con enfoque sofisticado y exclusivo.",
      description: "Se trabajó la base visual y conceptual del proyecto para construir una identidad elegante y memorable, alineada con el posicionamiento premium de la marca.",
      highlights: [
        "Concepto de marca",
        "Dirección visual coherente",
        "Base para desarrollo del proyecto"
      ],
      duration: "4 semanas",
      client: "Aurelia Perfums",
      url: "https://anabel1214.github.io/Aurelia-Perfums/",
      image: "Aurelia Perfums.png"
    }
  ]
};

let currentLanguage = localStorage.getItem("language") || "en";

const projectsGrid = document.getElementById("projects-grid");
const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");
const form = document.getElementById("contact-form");
const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  
  // Update active button
  langButtons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
    }
  });
  
  // Update page content
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Update page language
  document.documentElement.lang = lang;
  
  // Re-render projects
  renderProjects();
}

function renderProjects() {
  const projects = projectsData[currentLanguage];
  projectsGrid.innerHTML = projects
    .map(
      (project, index) => `
        <article class="project-card" data-index="${index}">
          <img class="project-image" src="${project.image}" alt="${project.title}" />
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="tags">
            <span class="tag">${project.category}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function openModal(index) {
  const projects = projectsData[currentLanguage];
  const project = projects[index];
  if (!project) return;

  const clientLabel = translations[currentLanguage]["modal-client"];
  const viewLabel = translations[currentLanguage]["modal-view"];

  modalBody.innerHTML = `
    <h3>${project.title}</h3>
    <p class="modal-meta">${project.category} · ${project.duration} · ${clientLabel}: ${project.client}</p>
    <p class="modal-description">${project.description}</p>
    <ul class="modal-list">
      ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <div class="modal-actions">
      <a class="btn btn-primary modal-link" href="${project.url}" target="_blank" rel="noopener noreferrer">${viewLabel}</a>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

// Initialize language
setLanguage(currentLanguage);

// Language buttons
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

// Project card clicks
projectsGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (!card) return;

  const index = Number(card.dataset.index);
  openModal(index);
});

// Modal interactions
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

// Form submission
form.addEventListener("submit", (event) => {
  const button = form.querySelector("button");
  button.textContent = currentLanguage === "en" ? "Sending..." : "Enviando...";
  button.disabled = true;
});
