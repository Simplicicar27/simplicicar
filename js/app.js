/**
 * ═══════════════════════════════════════════════════════════
 *  SIMPLICICAR DISPLAY — js/app.js
 *  Logique de rotation, construction des slides, horloge
 * ═══════════════════════════════════════════════════════════
 */

// ── CONFIG ──────────────────────────────────────────────────
const CONFIG = {
  durationMs: 8000,   // Durée d'affichage par voiture (millisecondes)
};

// ── ÉLÉMENTS DOM ────────────────────────────────────────────
const stage    = document.getElementById('stage');
const thumbBar = document.getElementById('thumbBar');
const pFill    = document.getElementById('pFill');
const clockEl  = document.getElementById('clock');
const vehCount = document.getElementById('vehCount');

// ── ÉTAT ────────────────────────────────────────────────────
let current = 0;
let timerId = null;
let rafId   = null;
let t0      = null;

// ── CONSTRUCTION DES SLIDES ─────────────────────────────────
function buildSlide(car, index) {
  const slide = document.createElement('div');
  slide.className = 'slide' + (index === 0 ? ' active' : '');

  const featureTags = car.features.map(f => {
    const isHi = car.hi && car.hi.includes(f);
    return `<span class="feat${isHi ? ' hi' : ''}">${f}</span>`;
  }).join('');

  slide.innerHTML = `
    <div class="slide-photo">
      <img src="${car.img}" alt="${car.brand} ${car.model}" loading="lazy">
      <div class="slash-overlay"></div>
      <div class="photo-km">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        ${car.km}
      </div>
      <div class="photo-year">${car.year}</div>
      <div class="photo-price">
        <div class="photo-price-label">Prix TTC</div>
        <div class="photo-price-amount">${car.price}</div>
      </div>
    </div>

    <div class="slide-info">
      <div class="car-header">
        <div class="car-brand">${car.brand}</div>
        <div class="car-model">${car.model}</div>
        <div class="car-version">${car.version}</div>
      </div>

      <div class="divider"></div>

      <div class="specs-grid">
        <div class="spec hi">
          <div class="spec-label">Énergie</div>
          <div class="spec-val pink">${car.energy}</div>
        </div>
        <div class="spec">
          <div class="spec-label">Puissance</div>
          <div class="spec-val">${car.power}</div>
        </div>
        <div class="spec">
          <div class="spec-label">Boîte</div>
          <div class="spec-val">${car.gearbox}</div>
        </div>
        <div class="spec">
          <div class="spec-label">Couleur</div>
          <div class="spec-val">${car.color}</div>
        </div>
        <div class="spec">
          <div class="spec-label">DPE</div>
          <div class="spec-val">
            <span class="dpe-badge">
              <span class="dpe-letter">${car.dpe}</span>
              Classe ${car.dpe}
            </span>
          </div>
        </div>
        <div class="spec hi">
          <div class="spec-label">Kilométrage</div>
          <div class="spec-val">${car.km}</div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="features-block">
        <div class="features-label">Équipements notables</div>
        <div class="features-wrap">${featureTags}</div>
      </div>

      <div class="slide-bottom">
        <div class="ref-tag">Réf. ${car.ref}</div>
        <div class="guarantee-tag">
          <svg width="13" height="13" fill="none" stroke="#E8005A" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Garantie ${car.garantie}
        </div>
        <div class="dispo-tag">Disponible immédiatement</div>
      </div>
    </div>
  `;
  return slide;
}

function buildThumb(car, index) {
  const thumb = document.createElement('div');
  thumb.className = 'thumb' + (index === 0 ? ' active' : '');
  thumb.dataset.index = index;
  thumb.innerHTML = `
    <img src="${car.img}" alt="${car.brand} ${car.model}">
    <div class="thumb-name">${car.brand} ${car.model}</div>
  `;
  thumb.addEventListener('click', () => goTo(index));
  return thumb;
}

// ── COUNTER ─────────────────────────────────────────────────
function buildCounter() {
  const el = document.createElement('div');
  el.className = 'slide-counter';
  el.id = 'counter';
  return el;
}

function updateCounter(index) {
  const el = document.getElementById('counter');
  if (el) {
    el.innerHTML = `<em>${String(index + 1).padStart(2, '0')}</em> / ${String(CARS.length).padStart(2, '0')}`;
  }
}

// ── PROGRESS BAR ────────────────────────────────────────────
function startProgress() {
  if (rafId) cancelAnimationFrame(rafId);
  t0 = performance.now();

  function tick(now) {
    const elapsed = now - t0;
    const pct = Math.min(100, (elapsed / CONFIG.durationMs) * 100);
    pFill.style.width = pct + '%';
    if (pct < 100) rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);
}

// ── NAVIGATION ──────────────────────────────────────────────
function getSlides() { return stage.querySelectorAll('.slide'); }
function getThumbs() { return thumbBar.querySelectorAll('.thumb'); }

function goTo(index) {
  const slides = getSlides();
  const thumbs = getThumbs();

  // Désactiver l'actuel
  slides[current].classList.remove('active');
  thumbs[current].classList.remove('active');

  // Activer le nouveau
  current = index;
  slides[current].classList.add('active');
  thumbs[current].classList.add('active');

  // Scroller la miniature dans la vue
  thumbs[current].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

  updateCounter(current);
  startProgress();

  // Réinitialiser le timer
  clearTimeout(timerId);
  timerId = setTimeout(nextSlide, CONFIG.durationMs);
}

function nextSlide() {
  goTo((current + 1) % CARS.length);
}

// ── HORLOGE ─────────────────────────────────────────────────
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  clockEl.textContent = `${h}:${m}`;
}

// ── INIT ────────────────────────────────────────────────────
function init() {
  // Compteur de véhicules
  vehCount.textContent = CARS.length + ' véhicule' + (CARS.length > 1 ? 's' : '');

  // Construire slides et miniatures
  CARS.forEach((car, i) => {
    stage.appendChild(buildSlide(car, i));
    thumbBar.appendChild(buildThumb(car, i));
  });

  // Compteur
  thumbBar.appendChild(buildCounter());
  updateCounter(0);

  // Horloge
  updateClock();
  setInterval(updateClock, 10000);

  // Démarrer la rotation
  startProgress();
  timerId = setTimeout(nextSlide, CONFIG.durationMs);
}

// Lancement
init();
