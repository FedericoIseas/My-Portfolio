/* ============================================================
   main.js — Portfolio Core Logic
   ============================================================
   Handles: theme toggle, mobile menu, scroll effects,
   dynamic section rendering, and scroll-reveal animations.
   ============================================================ */

/* ============================================================
   0. NON-CRITICAL RESOURCE ACTIVATION
   ============================================================ */

// Activate Material Symbols font (was loaded with media="print" to avoid
// blocking the initial render; switch to "all" as soon as JS runs).
(function activateDeferredStylesheets() {
  const el = document.getElementById('material-symbols-css');
  if (el) el.media = 'all';
})();

/* ============================================================
   1. THEME (Dark / Light Mode)
   ============================================================ */

function initTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else {
    // Default to light; only use prefers-color-scheme if no saved pref
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
  updateThemeIcon();
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  icon.textContent = isDark ? 'light_mode' : 'dark_mode';
}

/* ============================================================
   2. MOBILE MENU
   ============================================================ */

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('navbar__mobile-menu--open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close on link click
  mobileMenu.querySelectorAll('.navbar__mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileMenu();
  });
}

function openMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.classList.add('navbar__hamburger--active');
  mobileMenu.classList.add('navbar__mobile-menu--open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;
  hamburger.classList.remove('navbar__hamburger--active');
  mobileMenu.classList.remove('navbar__mobile-menu--open');
  document.body.style.overflow = '';
}

/* ============================================================
   3. NAVBAR SCROLL EFFECT
   ============================================================ */

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 10) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   4. SCROLL REVEAL (IntersectionObserver)
   ============================================================ */

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============================================================
   5. DYNAMIC SECTION RENDERING
   ============================================================ */

/** Render all dynamic sections (called on init and language change) */
function renderDynamicSections() {
  // Update CV download links based on active language
  const cvLinks = document.querySelectorAll('a[href*="CV_Iseas_Federico.pdf"], a[href*="CV_Federico_Iseas_EN.pdf"]');
  const cvUrl = currentLang === 'es' ? 'resources/docs/CV_Iseas_Federico.pdf' : 'resources/docs/CV_Federico_Iseas_EN.pdf';
  cvLinks.forEach(link => {
    link.setAttribute('href', cvUrl);
  });

  renderProjects();
  renderExperience();
  renderSkills();
  renderCourses();
  renderLanguages();
  renderFooter();

  // Render main page education percentage if element exists
  const mainPercentEl = document.getElementById('edu-percentage-main');
  if (mainPercentEl && typeof getPlanStatistics === 'function') {
    const stats = getPlanStatistics();
    const percentTotal = Math.round((stats.approved / stats.total) * 100);
    const percentInter = Math.round((stats.interApproved / stats.interTotal) * 100);

    if (currentLang === 'es') {
      mainPercentEl.innerHTML = `
        Licenciatura: ${percentTotal}% completado<br>
        Título Intermedio (Analista): ${percentInter}% completado
      `;
    } else {
      mainPercentEl.innerHTML = `
        Bachelor's: ${percentTotal}% completed<br>
        Associate's: ${percentInter}% completed
      `;
    }
  }

  // Update Hero progress bars if they exist
  const heroProgressTotalVal = document.getElementById('hero-progress-total-val');
  const heroProgressTotalFill = document.getElementById('hero-progress-total-fill');
  const heroProgressInterVal = document.getElementById('hero-progress-inter-val');
  const heroProgressInterFill = document.getElementById('hero-progress-inter-fill');

  if (typeof getPlanStatistics === 'function') {
    const stats = getPlanStatistics();
    const percentTotal = Math.round((stats.approved / stats.total) * 100);
    const percentInter = Math.round((stats.interApproved / stats.interTotal) * 100);

    if (heroProgressTotalVal) heroProgressTotalVal.textContent = `${percentTotal}%`;
    if (heroProgressTotalFill) {
      setTimeout(() => {
        heroProgressTotalFill.style.width = `${percentTotal}%`;
      }, 100);
    }

    if (heroProgressInterVal) heroProgressInterVal.textContent = `${percentInter}%`;
    if (heroProgressInterFill) {
      setTimeout(() => {
        heroProgressInterFill.style.width = `${percentInter}%`;
      }, 100);
    }
  }


  // If on education page
  if (document.getElementById('subjects-container')) {
    renderSubjects();
  }

  // Re-apply static translations
  applyTranslations();

  // Re-init scroll reveal for newly created elements
  initScrollReveal();
}

/* ---- PROJECTS ---- */
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const projects = getData('projects');
  container.innerHTML = projects.map((p, i) => {
    const isFeatured = p.featured;
    const hasHighlights = p.highlights && p.highlights.length > 0;

    return `
      <article class="project-card${isFeatured ? ' project-card--featured' : ''} reveal${i > 0 ? ` reveal--delay-${Math.min(i, 4)}` : ''}">
        ${p.image ? `
          <div class="project-card__image-wrapper">
            <img src="${p.image}" alt="${p.title}" class="project-card__image" loading="lazy">
          </div>
        ` : ''}
        <div class="project-card__content-wrapper">
          ${isFeatured ? `
            <div class="project-card__badge">
              <span class="material-symbols-rounded">star</span>
              ${t('projects.featured')}
            </div>
          ` : ''}
          <h3 class="project-card__title">
            ${(() => {
        // Check if title has something in parentheses e.g. "SignumID (signumID.com.ar)"
        const match = p.title.match(/^(.*?)\s*\((.*?)\)$/);
        if (match && (p.links.demo || p.links.repo)) {
          const mainTitle = match[1];
          const linkText = match[2];
          return `
                  ${mainTitle} 
                  <a href="${p.links.demo || p.links.repo}" target="_blank" rel="noopener noreferrer" class="project-card__title-link">
                    (${linkText})
                  </a>
                `;
        }
        return p.title;
      })()}
          </h3>
          <p class="project-card__description">${p.description}</p>
          ${hasHighlights ? `
            <button class="project-card__toggle-details" onclick="toggleProjectDetails('${p.id}')" id="toggle-${p.id}">
              <span class="material-symbols-rounded">expand_more</span>
              ${t('projects.details.toggle')}
            </button>
            <div class="project-card__details" id="details-${p.id}">
              <ul class="project-card__highlights">
                ${p.highlights.map(h => `<li class="project-card__highlight">${h}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
          <div class="project-card__stack">
            ${p.stack.map(s => `<span class="project-card__tag">${s}</span>`).join('')}
          </div>
          <div class="project-card__links">
            ${p.links.demo ? `
              <a href="${p.links.demo}" target="_blank" rel="noopener noreferrer" class="project-card__link">
                <span class="material-symbols-rounded">open_in_new</span>
                ${t('projects.link.demo')}
              </a>
            ` : ''}
            ${p.links.repo ? `
              <a href="${p.links.repo}" target="_blank" rel="noopener noreferrer" class="project-card__link">
                <span class="material-symbols-rounded">code</span>
                ${t('projects.link.repo')}
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ---- Toggle project details accordion ---- */
function toggleProjectDetails(id) {
  const details = document.getElementById(`details-${id}`);
  const toggle = document.getElementById(`toggle-${id}`);
  if (!details || !toggle) return;

  const isOpen = details.classList.contains('project-card__details--open');
  details.classList.toggle('project-card__details--open');
  toggle.classList.toggle('project-card__toggle-details--open');

  // Update button text
  const textNode = toggle.childNodes[toggle.childNodes.length - 1];
  if (textNode) {
    textNode.textContent = isOpen ? t('projects.details.toggle') : t('projects.details.toggle.open');
  }
}

/* ---- EXPERIENCE ---- */
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  const experience = getData('experience');
  container.innerHTML = experience.map((e, i) => {
    const periodEnd = e.periodEnd === 'present' ? t('experience.present') : e.periodEnd;

    return `
      <div class="timeline__item${e.current ? ' timeline__item--current' : ''} reveal reveal--delay-${Math.min(i + 1, 4)}">
        <div class="timeline__dot"></div>
        <div class="timeline__header">
          <h3 class="timeline__title">${e.title}</h3>
          <p class="timeline__company">${e.company}</p>
          <div class="timeline__meta">
            <span class="timeline__meta-item">
              <span class="material-symbols-rounded">calendar_month</span>
              ${e.period} — ${periodEnd}
            </span>
            <span class="timeline__meta-item">
              <span class="material-symbols-rounded">location_on</span>
              ${e.location}
            </span>
          </div>
        </div>
        <ul class="timeline__bullets">
          ${e.bullets.map(b => `<li class="timeline__bullet">${b}</li>`).join('')}
        </ul>
        ${e.highlight ? `
          <div class="timeline__highlight">
            <span class="material-symbols-rounded">emoji_events</span>
            ${e.highlight}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

/* ---- SKILLS ---- */
function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  const skills = getData('skills');
  container.innerHTML = skills.map((s, i) => `
    <div class="skills__category reveal reveal--delay-${Math.min(i + 1, 4)}">
      <h3 class="skills__category-title">
        <span class="material-symbols-rounded">${s.icon}</span>
        ${t(s.category)}
      </h3>
      <div class="skills__tags">
        ${s.items.map(item => `<span class="skills__tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ---- COURSES ---- */
function renderCourses() {
  const container = document.getElementById('courses-grid');
  if (!container) return;

  const courses = getData('courses');
  container.innerHTML = courses.map(c => `
    <div class="course-card">
      <div class="course-card__content">
        <h4 class="course-card__title">${c.title}</h4>
        <div class="course-card__meta">
          <span class="course-card__provider">${c.provider}</span>
          <span class="course-card__year">${c.year}</span>
        </div>
      </div>
      ${c.certLink ? `
        <a href="${c.certLink}" target="_blank" rel="noopener noreferrer" class="course-card__cert-link">
          <span class="material-symbols-rounded">description</span>
          ${t('courses.cert')}
        </a>
      ` : ''}
    </div>
  `).join('');
}

/* ---- LANGUAGES ---- */
function renderLanguages() {
  const container = document.getElementById('languages-grid');
  if (!container) return;

  container.innerHTML = `
    <div class="lang-card">
      <div class="lang-card__info">
        <h4 class="lang-card__name">${t('lang.es.name')}</h4>
        <p class="lang-card__level">
          <span class="lang-card__level-tag">${t('lang.es.level')}</span>
        </p>
      </div>
    </div>
    <div class="lang-card">
      <div class="lang-card__info">
        <h4 class="lang-card__name">${t('lang.en.name')}</h4>
        <p class="lang-card__level">${t('lang.en.reading')}</p>
        <p class="lang-card__level">${t('lang.en.speaking')}</p>
      </div>
    </div>
  `;
}

/* ---- FOOTER ---- */
function renderFooter() {
  const el = document.getElementById('footer-copy');
  if (!el) return;
  el.textContent = t('footer.copy');
}

/* ---- SUBJECTS (Education page) ---- */
function renderSubjects() {
  const statsContainer = document.getElementById('edu-stats-wrapper');
  const subjectsContainer = document.getElementById('subjects-container');
  if (!subjectsContainer) return;

  // 1. Render Stats (Both Bachelor's and Associate's intermediate title)
  if (statsContainer && typeof getPlanStatistics === 'function') {
    const stats = getPlanStatistics();
    const percentTotal = Math.round((stats.approved / stats.total) * 100);
    const percentInter = Math.round((stats.interApproved / stats.interTotal) * 100);

    statsContainer.innerHTML = `
      <div class="edu-stats__wrapper-grid">
        <!-- Licenciatura en Informática (Total) -->
        <div class="edu-stats__block">
          <h3 class="edu-stats__block-title">${t('edu.stats.title.total')}</h3>
          <div class="edu-stats__header">
            <span class="edu-stats__text">
              <strong>${stats.approved}</strong> ${t('edu.stats.of')} <strong>${stats.total}</strong> ${t('edu.stats.approved')} (${percentTotal}%)
            </span>
          </div>
          <div class="edu-stats__progress-bar">
            <div class="edu-stats__progress-fill" style="width: ${percentTotal}%"></div>
          </div>
          <div class="edu-stats__badges">
            <span class="edu-badge edu-badge--approved-pill">${t('edu.status.approved')}: ${stats.approved}</span>
            <span class="edu-badge edu-badge--progress-pill">${t('edu.status.in_progress')}: ${stats.inProgress}</span>
            <span class="edu-badge edu-badge--pending-pill">${t('edu.status.pending')}: ${stats.pending}</span>
          </div>
        </div>

        <!-- Analista Universitario (Intermediate) -->
        <div class="edu-stats__block">
          <h3 class="edu-stats__block-title">${t('edu.stats.title.inter')}</h3>
          <div class="edu-stats__header">
            <span class="edu-stats__text">
              <strong>${stats.interApproved}</strong> ${t('edu.stats.of')} <strong>${stats.interTotal}</strong> ${t('edu.stats.approved')} (${percentInter}%)
            </span>
          </div>
          <div class="edu-stats__progress-bar">
            <div class="edu-stats__progress-fill" style="width: ${percentInter}%"></div>
          </div>
          <div class="edu-stats__badges">
            <span class="edu-badge edu-badge--approved-pill">${t('edu.status.approved')}: ${stats.interApproved}</span>
            <span class="edu-badge edu-badge--progress-pill">${t('edu.status.in_progress')}: ${stats.interInProgress}</span>
            <span class="edu-badge edu-badge--pending-pill">${t('edu.status.pending')}: ${stats.interPending}</span>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Render Semester List (Visible directly as simple blocks)
  if (typeof planEstudios !== 'undefined') {
    subjectsContainer.innerHTML = planEstudios.map((block, index) => {
      // If it is a milestone separator (EFIP)
      if (block.hissMilestone) {
        const title = currentLang === 'es' ? block.milestoneNameES : block.milestoneNameEN;
        return `
          <div class="edu-page__milestone reveal">
            <div class="edu-page__milestone-line"></div>
            <span class="edu-page__milestone-text">${title}</span>
            <div class="edu-page__milestone-line"></div>
          </div>
        `;
      }

      // If it is a semester block
      const semesterTitle = currentLang === 'es' ? block.semesterNameES : block.semesterNameEN;
      const approvedCount = block.subjects.filter(s => s.status === 'approved').length;
      const totalCount = block.subjects.length;

      return `
        <div class="edu-semester-block reveal">
          <div class="edu-semester-header">
            <div class="edu-semester-title-group">
              <span class="material-symbols-rounded edu-semester-icon">folder_open</span>
              <h3 class="edu-semester-title">${semesterTitle}</h3>
              <span class="edu-semester-counter">(${approvedCount}/${totalCount})</span>
            </div>
          </div>
          <div class="edu-semester-body">
            <div class="edu-page__subjects">
              ${block.subjects.map(s => {
        const name = currentLang === 'es' ? s.nameES : s.nameEN;
        let statusLabel = t(`edu.status.${s.status}`);
        let typeLabel = s.type ? t(`edu.type.${s.type}`) : '';
        let gradeLabel = s.grade ? `${s.grade}` : '';

        return `
                  <div class="edu-subject-card edu-subject-card--${s.status}">
                    <div class="edu-subject-card__main">
                      <div class="edu-subject-card__title-group">
                        <h4 class="edu-subject-card__title">${name}</h4>
                        <div class="edu-subject-card__badges">
                          <span class="edu-badge edu-badge--${s.status}">${statusLabel}</span>
                          ${gradeLabel ? `<span class="edu-badge edu-badge--grade">${gradeLabel}</span>` : ''}
                          ${typeLabel ? `<span class="edu-badge edu-badge--type">${typeLabel}</span>` : ''}
                        </div>
                      </div>
                    </div>
                    ${s.status === 'approved' && s.summaryES ? `
                      <div class="edu-subject-card__summary">
                        <span class="material-symbols-rounded">info</span>
                        <p class="edu-subject-card__summary-text">
                          <em>${currentLang === 'es' ? s.summaryES : s.summaryEN}</em>
                        </p>
                      </div>
                    ` : ''}
                  </div>
                `;
      }).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

/* ============================================================
   6. CONTACT FORM
   ============================================================ */

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) return;

    // Mailto approach (works without backend)
    const subject = encodeURIComponent(`Contacto desde Portfolio — ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:federicoiseas@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ============================================================
   7. LANGUAGE TOGGLE
   ============================================================ */

function initLanguageToggle() {
  const btn = document.getElementById('lang-toggle');
  const btnMobile = document.getElementById('lang-toggle-mobile');

  const toggle = () => {
    const next = currentLang === 'es' ? 'en' : 'es';
    setLanguage(next);
  };

  if (btn) btn.addEventListener('click', toggle);
  if (btnMobile) btnMobile.addEventListener('click', toggle);
}

/* ============================================================
   8. SMOOTH SCROLL
   ============================================================ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navbar = document.getElementById('navbar');
        const offset = navbar ? navbar.offsetHeight : 64;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================================
   9. INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Init theme (before render to avoid flash)
  initTheme();

  // Init language
  initLanguage();

  // Render dynamic content
  renderDynamicSections();

  // Setup interactions
  initMobileMenu();
  initNavbarScroll();
  initScrollReveal();
  initContactForm();
  initLanguageToggle();
  initSmoothScroll();

  // Theme toggle button
  const themeBtn = document.getElementById('theme-toggle');
  const themeBtnMobile = document.getElementById('theme-toggle-mobile');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);
});
