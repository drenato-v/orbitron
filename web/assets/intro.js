/*
 * intro.js — abertura animada da landing do Orbitron.
 * Órbitas se desenham, planetas entram em movimento, o logo aparece e a cena
 * se abre para a página. Roda uma vez por sessão (force com ?intro=1),
 * pode ser pulada com clique, toque ou tecla, e não roda com "reduzir movimento".
 */
(function () {
  'use strict';
  var forcar = /[?&]intro=1/.test(location.search);
  var reduz = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var visto = false;
  try { visto = sessionStorage.getItem('orbitron-intro') === '1'; } catch (e) {}
  if (!forcar && (reduz || visto)) return;
  try { sessionStorage.setItem('orbitron-intro', '1'); } catch (e) {}

  var root = document.documentElement;
  root.classList.add('intro-on');

  var css = document.createElement('style');
  css.textContent = [
    '#intro{position:fixed;inset:0;z-index:10000;background:#000;display:grid;place-items:center;overflow:hidden;cursor:pointer;transition:opacity .7s ease,visibility .7s}',
    '#intro.sai{opacity:0;visibility:hidden}',
    '#intro .cena{position:relative;width:min(760px,92vw);aspect-ratio:760/520;transition:transform .9s cubic-bezier(.6,0,.2,1),filter .9s}',
    '#intro.sai .cena{transform:scale(1.18);filter:blur(3px)}',
    '#intro svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}',
    '#intro .orb{fill:none;stroke:rgba(255,255,255,.16);stroke-width:1;stroke-dasharray:var(--l);stroke-dashoffset:var(--l);animation:in-draw 1.3s cubic-bezier(.6,0,.2,1) forwards}',
    '#intro .orb.m{stroke:rgba(255,215,138,.55)}',
    '#intro .sol{fill:#fff3d6;transform-origin:380px 260px;transform:scale(0);animation:in-pop .7s .15s cubic-bezier(.2,1.4,.4,1) forwards}',
    '#intro .glow{transform-origin:380px 260px;opacity:0;animation:in-glow 1.4s .2s ease-out forwards}',
    '#intro .pl{opacity:0;animation:in-fade .5s forwards}',
    '#intro .marca{position:absolute;left:50%;top:78%;width:min(420px,70vw);transform:translate(-50%,-50%);aspect-ratio:628/131;',
    '  clip-path:inset(0 100% 0 0);animation:in-wipe .9s 1s cubic-bezier(.6,0,.2,1) forwards}',
    '#intro .marca img{width:100%;height:auto;display:block;filter:drop-shadow(0 0 18px rgba(255,255,255,.18))}',
    '#intro .marca img{animation:in-luz 1.2s 1.6s ease-in-out forwards}',
    '@keyframes in-luz{0%{filter:drop-shadow(0 0 18px rgba(255,255,255,.18))}45%{filter:drop-shadow(0 0 26px rgba(255,215,138,.55)) brightness(1.15)}100%{filter:drop-shadow(0 0 18px rgba(255,255,255,.18))}}',
    '#intro .pular{position:absolute;right:20px;bottom:18px;font:500 11px/1 ui-monospace,"JetBrains Mono",Menlo,monospace;letter-spacing:.2em;color:rgba(255,255,255,.35);text-transform:uppercase;opacity:0;animation:in-fade .4s .6s forwards}',
    '@keyframes in-draw{to{stroke-dashoffset:0}}',
    '@keyframes in-pop{to{transform:scale(1)}}',
    '@keyframes in-glow{0%{opacity:0;transform:scale(.4)}60%{opacity:1}100%{opacity:.85;transform:scale(1)}}',
    '@keyframes in-fade{to{opacity:1}}',
    '@keyframes in-wipe{to{clip-path:inset(0 0 0 0)}}',
    // o título da landing espera a abertura terminar para subir
    '.intro-on .hero .rv{opacity:0!important;transform:translateY(28px)!important}',
    '.intro-on #nav{opacity:0}',
    '#nav{transition:opacity .8s ease .2s}'
  ].join('');
  document.head.appendChild(css);

  // órbitas (elipses inclinadas, como o Sistema Solar visto de cima e de lado)
  var CX = 380, CY = 260, TILT = 0.36;
  var ORBS = [
    { rx: 70, c: '#b9b3a8', r: 2.6, t: 2.4, m: true },
    { rx: 112, c: '#e8cf9c', r: 3.6, t: 3.4 },
    { rx: 156, c: '#8fb6ff', r: 3.8, t: 4.4 },
    { rx: 204, c: '#e0896a', r: 3.0, t: 5.6 },
    { rx: 264, c: '#e3c49b', r: 6.4, t: 7.4 },
    { rx: 326, c: '#e8d7a8', r: 5.6, t: 9.4 }
  ];
  var svg = '<svg viewBox="0 0 760 520" aria-hidden="true"><defs>' +
    '<radialGradient id="in-g"><stop offset="0" stop-color="rgba(255,225,160,.95)"/><stop offset=".22" stop-color="rgba(255,195,110,.45)"/><stop offset="1" stop-color="rgba(255,170,70,0)"/></radialGradient></defs>' +
    '<g transform="rotate(-8 ' + CX + ' ' + CY + ')">';
  ORBS.forEach(function (o, i) {
    var ry = o.rx * TILT, l = Math.round(Math.PI * (3 * (o.rx + ry) - Math.sqrt((3 * o.rx + ry) * (o.rx + 3 * ry))) + 4);
    var d = 'M' + (CX + o.rx) + ' ' + CY + 'A' + o.rx + ' ' + ry + ' 0 1 1 ' + (CX - o.rx) + ' ' + CY + 'A' + o.rx + ' ' + ry + ' 0 1 1 ' + (CX + o.rx) + ' ' + CY;
    svg += '<path class="orb' + (o.m ? ' m' : '') + '" d="' + d + '" style="--l:' + l + ';animation-delay:' + (i * 0.09).toFixed(2) + 's"/>';
    var ini = (0.15 + i * 0.37) % 1; // fase inicial de cada planeta
    svg += '<circle class="pl" r="' + o.r + '" fill="' + o.c + '" style="animation-delay:' + (0.5 + i * 0.09).toFixed(2) + 's">' +
      '<animateMotion dur="' + o.t + 's" begin="' + (-ini * o.t).toFixed(2) + 's" repeatCount="indefinite" path="' + d + '"/></circle>';
  });
  svg += '</g><circle class="glow" cx="' + CX + '" cy="' + CY + '" r="70" fill="url(#in-g)"/><circle class="sol" cx="' + CX + '" cy="' + CY + '" r="11"/></svg>';

  var el = document.createElement('div');
  el.id = 'intro';
  el.setAttribute('role', 'presentation');
  el.innerHTML = '<div class="cena">' + svg +
    '<div class="marca"><img src="assets/orbitron.png" alt=""></div></div>' +
    '<div class="pular">Clique para pular</div>';

  var saiu = false, timer;
  function sair() {
    if (saiu) return; saiu = true; clearTimeout(timer);
    el.classList.add('sai');
    root.classList.remove('intro-on');
    setTimeout(function () { el.remove(); }, 950);
    ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function (ev) { removeEventListener(ev, sair, true); });
  }
  function montar() {
    document.body.appendChild(el);
    var toque = window.matchMedia && matchMedia('(pointer: coarse)').matches;
    var en = window.OrbitronI18n ? OrbitronI18n.lang === 'en' : (function () { try { return localStorage.getItem('orbitron-lang') === 'en'; } catch (e) { return false; } })();
    el.querySelector('.pular').textContent = en ? (toque ? 'Tap to skip' : 'Click to skip') : (toque ? 'Toque para pular' : 'Clique para pular');
    timer = setTimeout(sair, 2900);
    ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function (ev) { addEventListener(ev, sair, { capture: true, passive: true }); });
  }
  if (document.body) montar(); else document.addEventListener('DOMContentLoaded', montar);
})();
