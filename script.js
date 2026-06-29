const projects = [
  {
    title: "Bloom Cosmetics",
    category: "Branding y web",
    summary: "Proyecto de identidad y experiencia digital para una marca de cosmética con estética premium y elegante.",
    description:
      "Se desarrolló una propuesta visual coherente para destacar la esencia de la marca, reforzando su imagen en web y su comunicación con el público.",
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
    description:
      "La propuesta combina claridad, estructura sólida y una estética moderna para mostrar servicios de forma accesible y cercana para clientes y aliados.",
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
    description:
      "Se trabajó la base visual y conceptual del proyecto para construir una identidad elegante y memorable, alineada con el posicionamiento premium de la marca.",
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
];

const projectsGrid = document.getElementById("projects-grid");
const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");
const form = document.getElementById("contact-form");

function renderProjects() {
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
  const project = projects[index];
  if (!project) return;

  modalBody.innerHTML = `
    <h3>${project.title}</h3>
    <p class="modal-meta">${project.category} · ${project.duration} · Cliente: ${project.client}</p>
    <p class="modal-description">${project.description}</p>
    <ul class="modal-list">
      ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <div class="modal-actions">
      <a class="btn btn-primary modal-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

renderProjects();

projectsGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (!card) return;

  const index = Number(card.dataset.index);
  openModal(index);
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

form.addEventListener("submit", (event) => {
  const button = form.querySelector("button");
  button.textContent = "Enviando...";
  button.disabled = true;
});
