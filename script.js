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
    "lien": "https://github.com/gcemvoutou/lab-active-directory-sisr"
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
    "lien": "https://github.com/gcemvoutou/Cr-er-un-Serveur-Bookstak-sur-Raspberry-Pi-4/tree/main"
  },
  {
    "id": 3,
    "titre": "Pare-feu OPNsense",
    "categorie": "réseau",
    "contexte": "scolaire",
    "description": "Installation et configuration complète d'un pare-feu OPNsense sur appliance Riverbed. Inclut la préparation (Rufus, console), l'installation (ZFS), et la sécurisation avancée (HTTPS, filtrage, NAT).",
    "description_detaillee": "Ce projet pratique consistait à transformer une appliance réseau Riverbed en un pare-feu opérationnel via la distribution open-source OPNsense.\n\nLe projet s'est articulé autour de deux volets :\n\n- **Volet 1 : Installation et configuration initiale**\n  - Préparation d'une clé USB bootable.\n  - Accès console (PuTTY, 115200 bauds).\n  - Installation du système (ZFS, GPT/UEFI).\n  - Assignation des interfaces WAN (DHCP) et LAN (statique 192.168.6.254/24).\n\n- **Volet 2 : Sécurisation et configuration avancée**\n  - Sécurisation de l'accès à l'interface d'administration via HTTPS (certificat auto-signé).\n  - Mise en place des règles de filtrage (Firewall Rules) pour autoriser le trafic LAN vers WAN.\n  - Configuration du NAT sortant (Outbound NAT) pour permettre l'accès à internet.\n  - Vérification du trafic via les logs en temps réel (Live View).",
    "technologies": ["OPNsense", "FreeBSD", "Riverbed", "PuTTY", "Rufus", "HTTPS", "NAT"],
    "image": "assets/OPNsense.png",
    "lien": "https://github.com/gcemvoutou/OPNsense_Riverbed.git"
  },
  {
    "id": 6,
    "titre": "Supervision réseau avec CheckMK",
    "categorie": "réseau",
    "contexte": "entreprise",
    "description": "Supervision d'une infrastructure hétérogène de 204 hôtes répartis sur les sites distants de la Mairie de Saint-Égrève avec CheckMK Raw Edition (CRE).",
    "description_detaillee": "CheckMK Raw Edition (CRE) est une solution de supervision réseau open source. Dans le cadre de mon alternance à la Mairie de Saint-Égrève, j'ai été chargée de centraliser et piloter la supervision d'une infrastructure hétérogène répartie sur de nombreux sites distants (Hôtel de Ville, écoles, gymnases, services techniques) afin de :\n\n- Garantir la continuité du service public\n- Anticiper les pannes matérielles ou réseau\n- Fiabiliser l'inventaire des équipements supervisés\n\nÀ ce jour, 204 hôtes sont enregistrés dans la solution, un chiffre amène à évoluer au fil des mises en production et des retraits de matériel.",
    "technologies": ["CheckMK", "CRE", "Linux", "Supervision", "Réseau"],
    "image": "assets/Checkmk.png",
    "lien": "https://github.com/gcemvoutou/Checkmk-supervision-mairie"
  },
  {
    "id": 7,
    "titre": "Projets Cisco Packet Tracer",
    "categorie": "réseau",
    "contexte": "scolaire",
    "description": "Ensemble de travaux pratiques réseau (routage, DHCP, DNS, interconnexion multi-sites) réalisés sous Cisco Packet Tracer dans le cadre du BTS SIO SISR.",
    "description_detaillee": "Ensemble de travaux pratiques réalisés en autonomie sous Cisco Packet Tracer dans le cadre de ma formation BTS SIO SISR. Les projets abordent des thématiques variées : configuration réseau, routage, services DHCP/DNS, interconnexion multi-sites, et bien d'autres à venir au fil de la formation.",
    "technologies": ["Cisco Packet Tracer", "Réseau", "Routage", "DHCP", "DNS"],
    "image": "assets/cisco.png",
    "lien": "https://github.com/gcemvoutou/projets-cisco-packet-tracer"
  },
  {
    "id": 4,
    "titre": "Portfolio Web (ce site)",
    "categorie": "dev",
    "contexte": "perso",
    "description": "Portfolio professionnel statique inspiré de la charte graphique de Netflix (noir et bleu). Développé en HTML/CSS/JS et propulsé par Gemini CLI.",
    "description_detaillee": "Conception et développement de mon site vitrine personnel. Pour donner une touche résolument informatique et orientée technologie, j'ai revisité la charte graphique de Netflix en remplaçant la couleur rouge emblématique par un bleu électrique percutant.\n\nFonctionnalités clés :\n- Interface moderne 100% responsive avec animations fluides.\n- Menu de navigation dynamique (changement d'opacité au défilement).\n- Chargement asynchrone des projets à partir d'un fichier JSON local.\n- Filtrage dynamique des projets sans rechargement de page (via JavaScript).\n- Système de modale de détails ('More Info') inspiré de Netflix pour chaque projet.\n- Formulaire de contact sécurisé connecté à FormSubmit pour recevoir directement les messages par e-mail.\n- Hébergement et déploiement continu sur Netlify.",
    "technologies": ["HTML", "CSS", "JavaScript", "JSON", "Gemini CLI", "Netlify"],
    "lien": "#"
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
    "statut": "a_venir"
  },
  {
    "id": 8,
    "titre": "Configuration d'un switch",
    "categorie": "réseau",
    "contexte": "entreprise",
    "description": "Remplacement du switch réseau du Centre culturel LVS, avec harmonisation de son plan de VLANs pour l'aligner sur celui du reste du parc réseau de la collectivité.",
    "description_detaillee": "Remplacement d'un des switchs réseau de la collectivité, celui du Centre culturel LVS (cinéma municipal de la Mairie de Saint-Égrève), avec harmonisation du plan de VLANs sur l'ensemble du parc réseau.\n\nCe projet d'entreprise comprend :\n\n- Le repérage physique complet du câblage existant (52 ports) et l'analyse des VLANs en production via LibreNMS avant migration.\n- La montée en compétence autodidacte et la configuration d'un switch Aruba 2530 (accès console PuTTY, administration à distance en SSH, sécurisation par mot de passe manager).\n- La conception et l'application d'un nouveau plan de VLANs harmonisé avec le reste du parc réseau de la mairie (fusion et renumérotation de VLANs existants, création de VLANs de réserve).\n- La bascule physique et la recette réseau en environnement de production, avec une contrainte forte : aucune intervention possible pendant les horaires d'ouverture au public.",
    "technologies": ["Aruba 2530", "VLAN", "SSH", "PuTTY", "LibreNMS", "Câblage réseau", "Supervision réseau"],
    "image": "assets/switch_migration.png",
    "lien": "https://github.com/gcemvoutou/migration-switch-reseau.git"
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

  // Initialisation de l'arbre des compétences
  renderSkillsTree();

  // Mise à jour dynamique de l'année du copyright
  const copyrightYear = document.getElementById('copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
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
  
  // Regrouper les projets par contexte (entreprise, scolaire, perso)
  const categories = {
    'entreprise': {
      title: 'Projets en Entreprise',
      icon: 'fa-building-shield',
      projects: []
    },
    'scolaire': {
      title: 'Projets Scolaires',
      icon: 'fa-graduation-cap',
      projects: []
    },
    'perso': {
      title: 'Projets Personnels',
      icon: 'fa-laptop-code',
      projects: []
    }
  };
  
  projectsToRender.forEach(project => {
    const ctx = project.contexte;
    if (categories[ctx]) {
      categories[ctx].projects.push(project);
    } else {
      categories['perso'].projects.push(project);
    }
  });
  
  // Rendu de chaque catégorie
  Object.keys(categories).forEach(key => {
    const group = categories[key];
    if (group.projects.length === 0) return;
    
    // Créer la section du groupe
    const groupSection = document.createElement('div');
    groupSection.classList.add('projects-group');
    
    // Titre de la rubrique
    const groupHeader = document.createElement('h3');
    groupHeader.classList.add('projects-group-title');
    groupHeader.innerHTML = `<i class="fa-solid ${group.icon}"></i> ${group.title}`;
    groupSection.appendChild(groupHeader);
    
    // Grille spécifique à cette rubrique
    const groupGrid = document.createElement('div');
    groupGrid.classList.add('projects-group-grid');
    
    group.projects.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('project-card');
      card.setAttribute('data-id', project.id);
      
      const techSpanList = project.technologies.slice(0, 3).map(tech => `<span>${tech}</span>`).join(' • ');
      
      let categoryIcon = 'fa-server';
      if (project.categorie === 'infrastructure') categoryIcon = 'fa-network-wired';
      if (project.categorie === 'réseau') categoryIcon = 'fa-shield-halved';
      if (project.categorie === 'dev') categoryIcon = 'fa-code';
      
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
            ${(project.lien !== '#' && project.statut !== 'a_venir') ? `
              <a href="${project.lien}" target="_blank" class="action-btn link-btn" title="Voir le code">
                <i class="fa-brands fa-github"></i>
              </a>
            ` : ''}
          </div>
          <h4 class="project-title">${project.titre}</h4>
          <div class="project-meta">
            <span class="${contextBadgeClass}">${project.contexte}</span>
            ${project.statut === 'a_venir' ? `<span class="status-badge" style="background-color: rgba(128, 128, 128, 0.15); color: #aaaaaa; border: 1px solid rgba(128, 128, 128, 0.3);">À venir</span>` : ''}
            <span class="project-category">${project.categorie.toUpperCase()}</span>
          </div>
          <p class="project-excerpt">${project.description}</p>
          <div class="project-techs">${techSpanList}</div>
        </div>
      `;
      
      groupGrid.appendChild(card);
    });
    
    groupSection.appendChild(groupGrid);
    grid.appendChild(groupSection);
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
  document.getElementById('modalCategory').innerHTML = `${project.categorie.toUpperCase()}`;
  
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

// ==================================================
// FORMULAIRE DE CONTACT (EmailJS)
// ==================================================

// Clé publique EmailJS - sans risque à exposer côté client (faite pour ça)
emailjs.init('DcFh8IKc1fnIFAjHn');

const EMAILJS_SERVICE_ID = 'service_w3vyoef';
const EMAILJS_TEMPLATE_ID = 'template_3wdf9mm';

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();
 
    const submitBtn = document.getElementById('submitBtn');
    const statusBox = document.getElementById('formStatus');

    // État "envoi en cours"
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours...';
    statusBox.style.display = 'none';
    statusBox.className = 'form-status';

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm);

      statusBox.classList.add('success');
      statusBox.innerHTML = '<i class="fa-solid fa-circle-check"></i> Votre message a bien été envoyé, je vous répondrai rapidement !';
      contactForm.reset();
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      statusBox.classList.add('error');
      statusBox.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Une erreur est survenue. Merci de réessayer ou de m\'écrire directement à emvoutouclara@gmail.com';
    } finally {
      statusBox.style.display = 'flex';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Envoyer le message';
    }
  });
}

// ==================================================
// ARBRE DES COMPÉTENCES DÉROULANT (ACCORDÉON)
// ==================================================

const SKILLS_DATA = [
  {
    category: "Systèmes & Infrastructure",
    icon: "fa-server",
    subthemes: [
      {
        name: "Windows Server 2022",
        icon: "fa-brands fa-windows",
        tags: ["Active Directory", "PowerShell", "DNS", "DHCP", "GPO", "UOs"]
      },
      {
        name: "Linux (Debian / Ubuntu)",
        icon: "fa-brands fa-linux",
        tags: ["Administration CLI", "SSH", "Services", "Bash", "Configuration système"]
      },
      {
        name: "Virtualisation",
        icon: "fa-solid fa-cubes",
        tags: ["VirtualBox", "VMware Workstation Pro"]
      },
      {
        name: "Support utilisateurs / ITSM",
        icon: "fa-solid fa-headset",
        tags: ["Octopus ITSM", "Création & suivi tickets", "Résolution incidents"]
      }
    ]
  },
  {
    category: "Réseaux & Cybersécurité",
    icon: "fa-shield-halved",
    subthemes: [
      {
        name: "Routage & Commutation",
        icon: "fa-solid fa-network-wired",
        tags: ["VLAN", "Adressage IP", "Switches", "Routage"]
      },
      {
        name: "Supervision réseau",
        icon: "fa-solid fa-eye",
        tags: ["CheckMK", "SNMP", "Monitoring", "Analyse d'alertes"]
      },
      {
        name: "Firewall OPNsense",
        icon: "fa-solid fa-shield-halved",
        tags: ["Filtrage", "NAT", "Interfaces", "Configuration réseau"]
      },
      {
        name: "Sécurité active",
        icon: "fa-solid fa-lock",
        tags: ["Analyse alertes", "Détection comptes compromis", "Cyberassurance"]
      }
    ]
  }
];

function renderSkillsTree() {
  const container = document.getElementById('skills-tree');
  if (!container) return;

  container.innerHTML = SKILLS_DATA.map((cat, catIdx) => {
    const catId = `cat-${catIdx}`;
    return `
      <div class="tree-category-wrapper">
        <button class="tree-category-btn" aria-expanded="false" aria-controls="${catId}-content" id="${catId}-btn">
          <span class="tree-title-wrapper">
            <i class="fa-solid ${cat.icon} tree-icon"></i>
            <span class="tree-category-name">${cat.category}</span>
          </span>
          <i class="fa-solid fa-chevron-right tree-chevron"></i>
        </button>
        <div id="${catId}-content" class="tree-category-content" role="region" aria-labelledby="${catId}-btn">
          <div class="tree-category-inner-wrapper">
            <div class="tree-category-inner">
              ${cat.subthemes.map((sub, subIdx) => {
                const subId = `sub-${catIdx}-${subIdx}`;
                return `
                  <div class="tree-subtheme-wrapper">
                    <button class="tree-subtheme-btn" aria-expanded="false" aria-controls="${subId}-content" id="${subId}-btn">
                      <span class="tree-title-wrapper">
                        <i class="${sub.icon} tree-icon-sub"></i>
                        <span class="tree-subtheme-name">${sub.name}</span>
                      </span>
                      <i class="fa-solid fa-chevron-right tree-chevron-sub"></i>
                    </button>
                    <div id="${subId}-content" class="tree-subtheme-content" role="region" aria-labelledby="${subId}-btn">
                      <div class="tree-subtheme-inner-wrapper">
                        <div class="tree-subtheme-inner">
                          <div class="skill-tags">
                            ${sub.tags.map((tag, tagIdx) => `
                              <span class="staggered-tag" style="--stagger-delay: ${tagIdx * 50}ms">${tag}</span>
                            `).join('')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach event listeners for category expand
  const categoryBtns = container.querySelectorAll('.tree-category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);
      const content = btn.nextElementSibling;
      content.classList.toggle('open');
    });
  });

  // Attach event listeners for subtheme expand
  const subthemeBtns = container.querySelectorAll('.tree-subtheme-btn');
  subthemeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);
      const content = btn.nextElementSibling;
      content.classList.toggle('open');
    });
  });
}
