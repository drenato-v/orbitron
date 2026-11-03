/* transicao.js — fade com o planeta do Orbitron entre as páginas do site. */
(function () {
  'use strict';
  var reduz = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var css = document.createElement('style');
  css.textContent =
    '#veu{position:fixed;inset:0;z-index:9999;background:#000;display:grid;place-items:center;pointer-events:none;opacity:1;transition:opacity .45s ease}' +
    '#veu.fora{opacity:0}' +
    '#veu img{width:64px;height:64px;opacity:.9;animation:veu-gira 1.6s ease-in-out infinite}' +
    '@keyframes veu-gira{0%,100%{transform:scale(.92) rotate(-6deg)}50%{transform:scale(1) rotate(6deg)}}' +
    '@media (prefers-reduced-motion:reduce){#veu{transition:none}#veu img{animation:none}}';
  document.head.appendChild(css);

  var veu = document.createElement('div');
  veu.id = 'veu';
  veu.setAttribute('aria-hidden', 'true');
  veu.innerHTML = '<img src="assets/favicon.svg" alt="">';

  function montar() {
    document.body.appendChild(veu);
    // revela a página
    requestAnimationFrame(function () { requestAnimationFrame(function () { veu.classList.add('fora'); }); });
  }
  if (document.body) montar(); else document.addEventListener('DOMContentLoaded', montar);

  // volta pelo histórico (bfcache): garante que o véu esteja aberto
  window.addEventListener('pageshow', function (e) { if (e.persisted) veu.classList.add('fora'); });

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#' || /^(mailto:|tel:|https?:)/i.test(href)) return;
    if (!/\.html(\?|#|$)/i.test(href)) return; // só páginas internas
    var destino = new URL(href, location.href);
    if (destino.pathname === location.pathname) return; // mesma página: deixa o navegador rolar
    e.preventDefault();
    if (reduz) { location.href = destino.href; return; }
    veu.classList.remove('fora');
    setTimeout(function () { location.href = destino.href; }, 420);
  });
})();
