// script.js - Portfolio Dynamique Clara

// Fallback de données pour s'assurer que le site fonctionne parfaitement même en local (sans serveur HTTP local)
const PROJECTS_FALLBACK = [
  {
    "id": 1,
    "titre": "Active Directory Lab",
    "categorie": "système",
    "contexte": "perso",
    "description": "Déploiement complet d'un domaine Windows Server 2022 en lab virtuel. Création d'une arborescence d'UOs, configuration DNS/DHCP, mise en place de GPOs, scripts PowerShell d'automatisation et profils itinérants.",
    "description_detaillee": "Ce projet de laboratoire m'a permis d'acquérir une compréhension approfondie de l'administration d'un parc informatique d'entreprise sous Windows Server 2022.\n\n- Déployer un contrôleur de domaine Active Directory (AD DS) et son service DNS\n- Structurer un annuaire avec des unités d'organisation (OU) et des groupes de sécurité selon le modèle AGDLP\n- Créer et administrer des comptes utilisateurs (manuellement et via PowerShell)\n- Joindre un poste client Windows 10 au domaine\n- Déployer des stratégies de groupe (GPO) : fond d'écran, restrictions, lecteur réseau\n- Configurer des profils itinérants et des répertoires personnels (lecteurs réseau)",
    "technologies": ["Windows Server 2022", "Active Directory", "PowerShell", "VMware Workstation Pro", "DNS", "DHCP", "GPO"],
    "image": "assets/active-directory.png",
    "lien": "https://github.com/gcemvoutou/lab-active-directory-sisr",
    "statut": "Terminé — documenté",
    "statut_type": "termine"
  },
  {
    "id": 2,
    "titre": "BookStack sur Raspberry Pi",
    "categorie": "infrastructure",
    "contexte": "perso",
    "description": "Déploiement d'un wiki auto-hébergé sur Raspberry Pi 4 avec Docker Compose. Stack : BookStack + MariaDB + Nginx Proxy Manager + Let's Encrypt SSL. Accessible via bookstack-clara.duckdns.org.",
    "description_detaillee": "Mise en place d'une plateforme de base de connaissances (Wiki) personnelle pour centraliser mes documentations et procédures techniques.\n\nCe projet d'infrastructure comprend :\n\n- Le déploiement de la stack BookStack, MariaDB, et Nginx Proxy Manager via Docker Compose.\n\n- La configuration de Nginx Proxy Manager en tant que Reverse Proxy pour sécuriser les échanges avec un certificat SSL Let's Encrypt gratuit.\n\n- L'attribution d'un nom de domaine gratuit via le service de DNS dynamique DuckDNS.\n\n- La redirection sécurisée des ports (port forwarding) sur une box Bouygues Telecom.\n\n- La résolution d'erreurs d'initialisation de base de données (MariaDB troubleshooting) et la migration de la configuration depuis un Raspberry Pi de l'école vers un Raspberry Pi personnel en utilisant des commandes sécurisées SCP.",
    "technologies": ["Docker", "Docker Compose", "Nginx Proxy Manager", "MariaDB", "Let's Encrypt", "DuckDNS", "Raspberry Pi"],
    "image": "assets/bookstack.png",
    "lien": "https://github.com/gcemvoutou/Cr-er-un-Serveur-Bookstak-sur-Raspberry-Pi-4/tree/main",
    "statut": "Terminé — documenté",
    "statut_type": "termine"
  },
  {
    "id": 3,
    "titre": "TP_Parefeu_OPNsense",
    "categorie": "réseau",
    "contexte": "scolaire",
    "description": "Installation et configuration complète d'un pare-feu OPNsense sur appliance Riverbed. Inclut la préparation (Rufus, console), l'installation (ZFS), et la sécurisation avancée (HTTPS, filtrage, NAT).",
    "description_detaillee": "Ce projet pratique consistait à transformer une appliance réseau Riverbed en un pare-feu opérationnel via la distribution open-source OPNsense.\n\nLe projet s'est articulé autour de deux volets :\n\n- **Volet 1 : Installation et configuration initiale**\n  - Préparation d'une clé USB bootable.\n  - Accès console (PuTTY, 115200 bauds).\n  - Installation du système (ZFS, GPT/UEFI).\n  - Assignation des interfaces WAN (DHCP) et LAN (statique 192.168.6.254/24).\n\n- **Volet 2 : Sécurisation et configuration avancée**\n  - Sécurisation de l'accès à l'interface d'administration via HTTPS (certificat auto-signé).\n  - Mise en place des règles de filtrage (Firewall Rules) pour autoriser le trafic LAN vers WAN.\n  - Configuration du NAT sortant (Outbound NAT) pour permettre l'accès à internet.\n  - Vérification du trafic via les logs en temps réel (Live View).",
    "technologies": ["OPNsense", "FreeBSD", "Riverbed", "PuTTY", "Rufus", "HTTPS", "NAT"],
    "image": "assets/OPNsense.png",
    "lien": "#",
    "statut": "Terminé — documenté",
    "statut_type": "termine"
  },
  {
    "id": 6,
    "titre": "Supervision réseau avec CheckMK",
    "categorie": "réseau",
    "contexte": "entreprise",
    "description": "Supervision d'une infrastructure hétérogène de 204 hôtes répartis sur les sites distants de la Mairie de Saint-Égrève avec CheckMK Raw Edition (CRE).",
    "description_detaillee": "CheckMK Raw Edition (CRE) est une solution de supervision réseau open source. Dans le cadre de mon alternance à la Mairie de Saint-Égrève, j'ai été chargée de centraliser et piloter la supervision d'une infrastructure hétérogène répartie sur de nombreux sites distants (Hôtel de Ville, écoles, gymnases, services techniques) afin de :\n\n- Garantir la continuité du service public\n- Anticiper les pannes matérielles ou réseau\n- Fiabiliser l'inventaire des équipements supervisés\n\nÀ ce jour, 204 hôtes sont enregistrés dans la solution, un chiffre amené à évoluer au fil des mises en production et des retraits de matériel.",
    "technologies": ["CheckMK", "CRE", "Linux", "Supervision", "Réseau"],
    "image": "assets/Checkmk.png",
    "lien": "https://github.com/gcemvoutou/Checkmk-supervision-mairie",
    "statut": "Terminé — documenté",
    "statut_type": "termine"
  },
  {
    "id": 4,
    "titre": "Portfolio Web (ce site)",
    "categorie": "dev",
    "contexte": "perso",
    "description": "Portfolio professionnel statique inspiré de la charte graphique de Netflix (noir et bleu). Développé en HTML/CSS/JS et propulsé par Gemini CLI.",
    "description_detaillee": "Conception et développement de mon site vitrine personnel. Pour donner une touche résolument informatique et orientée technologie, j'ai revisité la charte graphique de Netflix en remplaçant la couleur rouge emblématique par un bleu électrique percutant.\n\nFonctionnalités clés :\n- Interface moderne 100% responsive avec animations fluides.\n- Menu de navigation dynamique (changement d'opacité au défilement).\n- Chargement asynchrone des projets à partir d'un fichier JSON local.\n- Filtrage dynamique des projets sans rechargement de page (via JavaScript).\n- Système de modale de détails ('More Info') inspiré de Netflix pour chaque projet.\n- Formulaire de contact sécurisé connecté à FormSubmit pour recevoir directement les messages par e-mail.\n- Hébergement et déploiement continu sur Netlify.",
    "technologies": ["HTML", "CSS", "JavaScript", "JSON", "Gemini CLI", "Netlify"],
    "lien": "#",
    "statut": "En cours",
    "statut_type": "en_cours"
  },
  {
    "id": 5,
    "titre": "Pi-hole",
    "categorie": "réseau",
    "contexte": "perso",
    "description": "Installation d'un serveur DNS avec filtrage publicitaire sur Raspberry Pi. Mode DNS uniquement (sans prise en charge du DHCP). Projet planifié.",
    "description_detaillee": "Projet à venir visant à améliorer la sécurité et la vitesse de navigation au sein de mon réseau domestique en déployant un serveur de blocage de publicité et de traceurs réseau au niveau DNS (trou noir DNS).\n\nL'objectif sera de :\n- Installer Pi-hole sur un Raspberry Pi.\n- Configurer le serveur DNS local de manière autonome sans activer le serveur DHCP de Pi-hole (pour conserver le DHCP existant de la box).\n- Créer des listes de blocage personnalisées (adlists) pour filtrer les publicités et les sites malveillants à la source pour l'ensemble des appareils connectés.",
    "technologies": ["Pi-hole", "Raspberry Pi", "DNS"],
    "lien": "#",
    "statut": "Prévu",
    "statut_type": "prevu"
  }
];

let projectsData = [];

document.addEventListener('DOMContentLoaded', () => {
  // Initialisation de la navbar au scroll
  initNavbarScroll();
  
  // Initialisation du menu mobile
  initMobileMenu();
  
  // Initialisation des FAQ accordions
  initFaqAccordion();
  
  // Chargement des projets
  loadProjects();
});

// 1. Gestion de la barre de navigation
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
}

// 2. Menu mobile Hamburger
function initMobileMenu() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Ferme le menu mobile quand on clique sur un lien
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// 3. Accordéon FAQ (Style Netflix)
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Si un autre élément est déjà ouvert, on peut optionnellement le fermer
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // On toggle l'élément cliqué
      item.classList.toggle('active');
    });
  });
}

// 4. Chargement et rendu des projets
async function loadProjects() {
  try {
    // Tenter de charger le JSON
    const response = await fetch('projects.json');
    if (!response.ok) {
      throw new Error("Impossible de charger projects.json");
    }
    projectsData = await response.json();
  } catch (error) {
    console.warn("Utilisation du fallback local pour les projets :", error);
    projectsData = PROJECTS_FALLBACK;
  }
  
  // Afficher les projets initiaux (Tous)
  renderProjects(projectsData);
  
  // Initialiser les filtres de catégorie
  initFilters();
}

function renderProjects(projectsToRender) {
  const grid = document.querySelector('.projects-grid');
  grid.innerHTML = '';
  
  if (projectsToRender.length === 0) {
    grid.innerHTML = `<div class="no-projects">Aucun projet trouvé dans cette catégorie.</div>`;
    return;
  }
  
  projectsToRender.forEach(project => {
    // Créer la carte de projet
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.setAttribute('data-id', project.id);
    
    // Déterminer la classe CSS selon le statut
    let badgeClass = 'status-badge ';
    if (project.statut_type === 'termine') {
      badgeClass += 'badge-green';
    } else if (project.statut_type === 'en_cours') {
      badgeClass += 'badge-blue';
    } else {
      badgeClass += 'badge-gray';
    }
    
    // Création du contenu HTML de la carte
    // On mime un visuel de carte Netflix (Affiche sobre avec logo tech, titre, et icônes au hover)
    const techSpanList = project.technologies.slice(0, 3).map(tech => `<span>${tech}</span>`).join(' • ');
    
    // Déterminer une icône ou illustration représentative basée sur la catégorie
    let categoryIcon = 'fa-server';
    if (project.categorie === 'infrastructure') categoryIcon = 'fa-network-wired';
    if (project.categorie === 'réseau') categoryIcon = 'fa-shield-halved';
    if (project.categorie === 'dev') categoryIcon = 'fa-code';
    
    // Déterminer la classe CSS selon le contexte
    let contextBadgeClass = 'status-badge ';
    if (project.contexte === 'perso') {
      contextBadgeClass += 'badge-perso';
    } else if (project.contexte === 'entreprise') {
      contextBadgeClass += 'badge-entreprise';
    } else if (project.contexte === 'scolaire') {
      contextBadgeClass += 'badge-scolaire';
    } else {
      contextBadgeClass += 'badge-gray';
    }
    
    let cardThumbnailContent = `<i class="fa-solid ${categoryIcon}"></i>`;
    let cardTitleContent = `<div class="card-title-fallback">${project.titre}</div>`;
    if (project.image) {
      cardThumbnailContent = `<img src="${project.image}" alt="${project.titre}" onclick="window.open('${project.image}', '_blank')" title="Cliquez pour agrandir l'image (pleine résolution)">`;
      cardTitleContent = '';
    }
    
    card.innerHTML = `
      <div class="card-thumbnail">
        <div class="card-tech-overlay">
          ${cardThumbnailContent}
        </div>
        ${cardTitleContent}
      </div>
      <div class="card-info">
        <div class="card-actions">
          <button class="action-btn play-btn" onclick="openProjectModal(${project.id})" title="Plus d'informations">
            <i class="fa-solid fa-play"></i>
          </button>
          <button class="action-btn info-btn" onclick="openProjectModal(${project.id})" title="En savoir plus">
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          ${project.lien !== '#' ? `
            <a href="${project.lien}" target="_blank" class="action-btn link-btn" title="Voir le code">
              <i class="fa-brands fa-github"></i>
            </a>
          ` : ''}
        </div>
        <h4 class="project-title">${project.titre}</h4>
        <div class="project-meta">
          <span class="${contextBadgeClass}">${project.contexte}</span>
          <span class="project-category">${project.categorie.toUpperCase()}</span>
        </div>
        <p class="project-excerpt">${project.description}</p>
        <div class="project-techs">${techSpanList}</div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// 5. Système de filtrage
function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Activer visuellement le bouton cliqué
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      // Filtrer les données
      if (filterValue === 'all') {
        renderProjects(projectsData);
      } else {
        const filtered = projectsData.filter(proj => proj.categorie === filterValue);
        renderProjects(filtered);
      }
    });
  });
}

// 6. Gestion du Modal "Netflix-Style" (More Info)
const modal = document.getElementById('projectModal');

function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;
  
  // Remplissage des données du modal
  document.getElementById('modalTitle').innerText = project.titre;
  document.getElementById('modalCategory').innerText = project.categorie.toUpperCase();
  document.getElementById('modalStatus').innerText = project.statut;
  
  // Classe de statut du modal
  const modalStatusBadge = document.getElementById('modalStatus');
  modalStatusBadge.className = 'status-badge'; // reset
  if (project.statut_type === 'termine') {
    modalStatusBadge.classList.add('badge-green');
  } else if (project.statut_type === 'en_cours') {
    modalStatusBadge.classList.add('badge-blue');
  } else {
    modalStatusBadge.classList.add('badge-gray');
  }
  
  // Description formatée (conversion des puces markdown en HTML, et \n en <br>)
  let formattedHtml = '';
  const lines = project.description_detaillee.split('\n');
  let inList = false;
  
  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      if (!inList) {
        formattedHtml += '<ul class="modal-desc-list">';
        inList = true;
      }
      // Retirer le tiret et l'espace
      let itemContent = trimmed.substring(2);
      formattedHtml += `<li>${itemContent}</li>`;
    } else {
      if (inList) {
        formattedHtml += '</ul>';
        inList = false;
      }
      formattedHtml += line + '<br>';
    }
  });
  if (inList) {
    formattedHtml += '</ul>';
  }
  
  // Remplacer les successions de multiples <br> inutiles après la fermeture de liste
  formattedHtml = formattedHtml.replace(/<\/ul><br>/g, '</ul>');
  
  document.getElementById('modalDescription').innerHTML = formattedHtml;
  
  // Remplissage de la liste des technologies
  const techContainer = document.getElementById('modalTechnologies');
  techContainer.innerHTML = '';
  project.technologies.forEach(tech => {
    const span = document.createElement('span');
    span.classList.add('tech-pill');
    span.innerText = tech;
    techContainer.appendChild(span);
  });
  
  // Remplissage du bouton de lien GitHub
  const githubBtnContainer = document.getElementById('modalGithubBtnContainer');
  if (project.lien !== '#') {
    githubBtnContainer.innerHTML = `
      <a href="${project.lien}" target="_blank" class="btn-primary">
        <i class="fa-brands fa-github"></i> Explorer sur GitHub
      </a>
    `;
  } else {
    githubBtnContainer.innerHTML = `
      <button class="btn-disabled" disabled>
        <i class="fa-solid fa-lock"></i> Code privé / Non disponible
      </button>
    `;
  }
  
  // Déterminer l'icône ou l'image d'arrière-plan de la bannière du modal
  let modalBannerContent = '';
  if (project.image) {
    modalBannerContent = `<img src="${project.image}" alt="${project.titre}" onclick="window.open('${project.image}', '_blank')" title="Cliquez pour agrandir l'image (pleine résolution)">`;
  } else {
    let categoryIcon = 'fa-server';
    if (project.categorie === 'infrastructure') categoryIcon = 'fa-network-wired';
    if (project.categorie === 'réseau') categoryIcon = 'fa-shield-halved';
    if (project.categorie === 'dev') categoryIcon = 'fa-code';
    modalBannerContent = `<div class="modal-banner-icon"><i class="fa-solid ${categoryIcon}"></i></div>`;
  }
  
  const modalBanner = document.querySelector('.modal-banner');
  modalBanner.innerHTML = `
    ${modalBannerContent}
    <div class="modal-banner-overlay"></div>
  `;
  
  // Affichage du modal avec animation
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Empêcher le scroll en arrière-plan
}

function closeProjectModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Réactiver le scroll
}

// Fermer le modal en cliquant à l'extérieur
window.onclick = function(event) {
  if (event.target == modal) {
    closeProjectModal();
  }
}
