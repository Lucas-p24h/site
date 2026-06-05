/* ══════════════════════════════════════════════
   PROTESTO24H — Componentes e Scripts v2
   ══════════════════════════════════════════════ */

const ROOT = document.documentElement.dataset.root || './';
const WPP_LINK = 'https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os serviços da Protesto24h.';

/* ── NAV HTML ── */
const NAV_HTML = `
<nav id="main-nav">
  <div class="nav-inner">
    <a class="nav-logo" href="{R}index.html"><img src="{R}imagens/logo-p24h/logo-horizontal.png" alt="Protesto24h" height="38" style="width:auto;display:block;"></a>
    <button class="nav-toggle" id="navToggle" aria-label="Menu">☰</button>
    <ul class="nav-links" id="navLinks">
      <li><a href="{R}index.html">Home</a></li>
      <li class="has-submenu">
        <a href="#" role="button" aria-haspopup="true">Serviços <span class="nav-arrow">▾</span></a>
        <ul class="submenu">
          <li><a href="{R}servicos/cobranca.html">📞 Cobrança</a></li>
          <li><a href="{R}servicos/protesto-online.html">📋 Protesto Online</a></li>
          <li><a href="{R}servicos/cobranca-protesto.html">🔗 Cobrança + Protesto</a></li>
          <li class="submenu-sep"></li>
          <li><a href="{R}servicos/consulta-protesto.html">🔍 Consulta Protesto</a></li>
          <li><a href="{R}servicos/carta-anuencia.html">📄 Carta de Anuência</a></li>
          <li><a href="{R}servicos/cancelamento-protesto.html">✖ Cancelamento</a></li>
          <li><a href="{R}servicos/instrumento-protesto.html">📑 Instrumento de Protesto</a></li>
          <li class="submenu-sep"></li>
          <li><a href="{R}servicos/api-integracoes.html">⚡ API e Integrações</a></li>
        </ul>
      </li>
      <li><a href="{R}sobre.html">O Protesto24h</a></li>
      <li><a href="{R}preco.html">Preço</a></li>
      <li><a href="{R}duvidas.html">Dúvidas</a></li>
      <li><a href="{R}blog/index.html">Blog</a></li>
      <li><a href="{R}contato.html">Contato</a></li>
    </ul>
    <div class="nav-actions">
      <a href="https://app.protesto24h.com.br/login" class="nav-login">Entrar</a>
      <a href="https://app.protesto24h.com.br/cadastro" class="nav-cta">Cadastre-se</a>
    </div>
  </div>
</nav>`;

/* ── FOOTER HTML ── */
const FOOTER_HTML = `
<footer id="main-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <a class="logo" href="{R}index.html">Protesto24h</a>
      <p>A plataforma mais ágil do Brasil para cobrança extrajudicial e protesto de títulos. Digital, seguro e transparente.</p>
      <div class="footer-social">
        <a href="https://linkedin.com" title="LinkedIn" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://instagram.com" title="Instagram" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="https://youtube.com" title="YouTube" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
        </a>
        <a href="${WPP_LINK}" title="WhatsApp" target="_blank" rel="noopener" style="background:rgba(37,211,102,.15);border-color:rgba(37,211,102,.3);color:#25d366;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.999 0C5.373 0 0 5.373 0 11.999c0 2.117.554 4.1 1.523 5.82L0 24l6.335-1.493A11.955 11.955 0 0012 24c6.627 0 12-5.372 12-12S18.627 0 12 0zm.001 21.818a9.818 9.818 0 01-4.964-1.341l-.356-.211-3.761.887.938-3.666-.232-.376A9.808 9.808 0 012.18 12c0-5.42 4.4-9.818 9.819-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.817 9.818z"/></svg>
        </a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Serviços</h5>
      <ul>
        <li><a href="{R}servicos/cobranca.html">Cobrança</a></li>
        <li><a href="{R}servicos/protesto-online.html">Protesto Online</a></li>
        <li><a href="{R}servicos/cobranca-protesto.html">Cobrança + Protesto</a></li>
        <li><a href="{R}servicos/consulta-protesto.html">Consulta Protesto</a></li>
        <li><a href="{R}servicos/api-integracoes.html">API e Integrações</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Empresa</h5>
      <ul>
        <li><a href="{R}sobre.html">Sobre nós</a></li>
        <li><a href="{R}blog/index.html">Blog</a></li>
        <li><a href="{R}contato.html">Contato</a></li>
        <li><a href="#">Carreiras</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Suporte</h5>
      <ul>
        <li><a href="{R}duvidas.html">Dúvidas Frequentes</a></li>
        <li><a href="{R}servicos/carta-anuencia.html">Carta de Anuência</a></li>
        <li><a href="{R}servicos/cancelamento-protesto.html">Cancelamento</a></li>
        <li><a href="{R}servicos/instrumento-protesto.html">Instrumento</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Legal</h5>
      <ul>
        <li><a href="{R}termos.html">Termos de uso</a></li>
        <li><a href="{R}termos.html">Privacidade</a></li>
        <li><a href="{R}termos.html">LGPD</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Protesto24h. CNPJ: 21.803.804/0001-75. Todos os direitos reservados.</span>
    <div class="footer-seals">
      <span class="seal">🔒 SSL</span>
      <span class="seal">✓ LGPD</span>
      <span class="seal">🛡 Seguro</span>
    </div>
  </div>
</footer>

<a id="wpp-float" href="${WPP_LINK}" target="_blank" rel="noopener" title="Falar no WhatsApp">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.999 0C5.373 0 0 5.373 0 11.999c0 2.117.554 4.1 1.523 5.82L0 24l6.335-1.493A11.955 11.955 0 0012 24c6.627 0 12-5.372 12-12S18.627 0 12 0zm.001 21.818a9.818 9.818 0 01-4.964-1.341l-.356-.211-3.761.887.938-3.666-.232-.376A9.808 9.808 0 012.18 12c0-5.42 4.4-9.818 9.819-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.817 9.818z"/></svg>
  <span class="wpp-tooltip">Falar no WhatsApp</span>
</a>
<button id="sticky-cta">Solicitar atendimento →</button>`;

/* ── INJECT COMPONENTS ── */
function injectComponents() {
  const nav    = document.getElementById('nav-placeholder');
  const footer = document.getElementById('footer-placeholder');
  if (nav)    nav.outerHTML    = NAV_HTML.replace(/\{R\}/g, ROOT);
  if (footer) footer.outerHTML = FOOTER_HTML.replace(/\{R\}/g, ROOT);
}

/* ── MOBILE MENU ── */
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
  });

  document.querySelectorAll('.has-submenu > a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      if (window.innerWidth <= 768) {
        const sub = a.parentElement.querySelector('.submenu');
        if (sub) {
          const isOpen = sub.style.display === 'flex';
          sub.style.display = isOpen ? 'none' : 'flex';
          sub.style.flexDirection = 'column';
        }
      }
    });
  });

  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    try {
      const href = a.getAttribute('href') || '';
      const resolved = href.replace('{R}', '').replace('../', '').replace('./', '');
      if (path.includes(resolved) && resolved.length > 5) {
        a.closest('li').classList.add('active');
      }
    } catch(e) {}
  });
}

/* ── STICKY CTA ── */
function initStickyCta() {
  const btn = document.getElementById('sticky-cta');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 600);
  });
  btn.addEventListener('click', () => {
    const root = document.documentElement.dataset.root || './';
    window.location.href = root + 'contato.html';
  });
}

/* ── SCROLL ANIMATIONS ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 65);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07 });
  els.forEach(el => obs.observe(el));
}

/* ── ANIMATED COUNTERS ── */
function animateCounter(el) {
  const target   = parseFloat(el.dataset.count);
  const prefix   = el.dataset.prefix || '';
  const suffix   = el.dataset.suffix || '';
  const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
  const duration = 1800;
  const start    = performance.now();
  const update   = (now) => {
    const p     = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val   = eased * target;
    el.textContent = prefix + (decimals ? val.toFixed(decimals) : Math.floor(val).toLocaleString('pt-BR')) + suffix;
    if (p < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounter(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

/* ── ROI CALCULATOR (com volumetria real) ── */
function initROI() {
  const fmt = n => 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits:0, maximumFractionDigits:0 });

  function getPlan(vol) {
    if (vol <= 150)  return { name:'Basic',      price:21.90, commission:0.10 };
    if (vol <= 600)  return { name:'Silver',     price:19.90, commission:0.06 };
    if (vol <= 2000) return { name:'Gold',       price:17.90, commission:0.02 };
    return              { name:'Enterprise', price:15.90, commission:0.00 };
  }

  function calc() {
    const avg  = parseFloat(document.getElementById('roiAvg')?.value)  || 0;
    const num  = parseFloat(document.getElementById('roiNum')?.value)   || 0;
    const rate = parseFloat(document.getElementById('roiRate')?.value)  || 0;

    const plan       = getPlan(num);
    const portfolio  = avg * num;
    const recovered  = portfolio * (rate / 100);
    const numRec     = Math.round(num * (rate / 100));
    const fixedCost  = plan.price * num;
    const commission = recovered * plan.commission;
    const totalFee   = fixedCost + commission;
    const net        = recovered - totalFee;
    const roi        = totalFee > 0 ? Math.round((net / totalFee) * 100) : 0;

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('roiTotal',     fmt(recovered));
    set('roiPortfolio', fmt(portfolio));
    set('roiNumRec',    `${numRec} de ${num}`);
    set('roiPlanName',  plan.name);
    set('roiFixedCost', `− ${fmt(fixedCost)}`);
    const fmtPrice = p => 'R$ ' + p.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
    set('roiFixedFormula', `${fmtPrice(plan.price)}/título × ${Math.floor(num)} título${Math.floor(num) !== 1 ? 's' : ''}`);
    set('roiCommission',plan.commission > 0 ? `− ${plan.commission * 100}% de ${fmt(recovered)}` : `Incluso no plano`);
    set('roiTotalFee',  `− ${fmt(totalFee)}`);
    set('roiNet',       fmt(net));
    set('roiPct',       roi.toLocaleString('pt-BR') + '%');
  }

  function sync(inputId, rangeId) {
    const inp = document.getElementById(inputId);
    const rng = document.getElementById(rangeId);
    if (!inp || !rng) return;
    inp.addEventListener('input', () => { rng.value = inp.value; calc(); });
    rng.addEventListener('input', () => { inp.value = rng.value; calc(); });
  }

  if (document.getElementById('roiAvg')) {
    sync('roiAvg',  'roiAvgR');
    sync('roiNum',  'roiNumR');
    sync('roiRate', 'roiRateR');
    calc();
  }
}

/* ── FAQ ACCORDION ── */
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  document.querySelectorAll('.faq-cat').forEach(cat => {
    cat.addEventListener('click', () => {
      document.querySelectorAll('.faq-cat').forEach(c => c.classList.remove('active'));
      cat.classList.add('active');
      const target = cat.dataset.cat;
      document.querySelectorAll('.faq-item').forEach(item => {
        item.style.display = (target === 'all' || item.dataset.cat === target) ? '' : 'none';
      });
    });
  });
}

/* ── LOGOS CAROUSEL ── */
function initLogos() {
  document.querySelectorAll('.logos-track').forEach(track => {
    if (track.dataset.cloned) return;
    track.dataset.cloned = '1';
    const clone = track.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.parentElement.appendChild(clone);
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  injectComponents();
  setTimeout(() => {
    initNav();
    initStickyCta();
    initReveal();
    initCounters();
    initROI();
    initFAQ();
    initLogos();
  }, 10);
});
