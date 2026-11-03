/*
 * tour.js — tour guiado do simulador.
 * Usa só a API pública window.orrery (câmera, data, escala, seleção).
 * Não calcula nada: cada passo apenas move a câmera e explica o que está na tela.
 */
(function () {
  'use strict';
  var t = function (s) { return window.OrbitronI18n ? OrbitronI18n.t(s) : s; };
  var $ = function (s) { return document.querySelector(s); };

  var PASSOS = [
    { titulo: 'Bem-vindo ao Orbitron',
      texto: 'Este é o Sistema Solar de hoje, com cada planeta na posição em que está agora. Arraste para girar a vista e role para aproximar.',
      agir: function (o) { o.setScale('log'); o.setDate(new Date()); o.play(20); o.focusSun(); } },
    { titulo: 'Posições reais', foco: '#card',
      texto: 'As posições vêm dos elementos orbitais publicados pelo JPL, da NASA. O painel mostra a distância ao Sol e a velocidade da Terra neste instante.',
      agir: function (o) { o.select('earth', true); } },
    { titulo: 'Órbitas são elipses', foco: '#card',
      texto: 'Mercúrio tem a órbita mais alongada entre os planetas. Repare no painel: ele acelera perto do Sol e desacelera longe dele, como Kepler descreveu.',
      agir: function (o) { o.play(20); o.select('mercury', true); } },
    { titulo: 'O peso de Júpiter',
      texto: 'Júpiter tem mais massa que todos os outros planetas juntos. No nível 2 do motor, é ele quem mais desvia os outros planetas das elipses perfeitas.',
      agir: function (o) { o.select('jupiter', true); } },
    { titulo: 'O tamanho real do vazio', foco: '#scale',
      texto: 'Com distâncias reais, os planetas internos se espremem perto do Sol. Por isso a vista usa escala logarítmica por padrão.',
      agir: function (o) { o.focusSun(); o.setScale('linear'); } },
    { titulo: 'Controle o tempo', foco: '#bar',
      texto: 'Agora passa um ano por segundo. Use a barra para pausar, inverter o tempo, mudar a velocidade ou ir para qualquer data.',
      agir: function (o) { o.setScale('log'); var b = $('[data-speed="365"]'); if (b) b.click(); else o.play(365); } },
    { titulo: 'O que vem aí',
      texto: 'Em breve, o motor em C vai mover esta vista e comparar cada planeta com a NASA. Acompanhe o roadmap na página inicial.',
      agir: function (o) { var b = $('[data-speed="20"]'); if (b) b.click(); o.focusSun(); }, link: ['Roadmap', 'index.html#roadmap'] }
  ];

  var css = document.createElement('style');
  css.textContent = [
    '#tour{position:fixed;left:50%;bottom:96px;transform:translate(-50%,16px);width:min(440px,calc(100% - 32px));padding:18px 20px 16px;opacity:0;pointer-events:none;transition:opacity .35s,transform .45s cubic-bezier(.2,.7,.1,1);z-index:20}',
    '#tour.on{opacity:1;transform:translate(-50%,0);pointer-events:auto}',
    '#tour .k{display:flex;justify-content:space-between;align-items:center;font:11px/1 var(--mono);letter-spacing:.14em;color:var(--muted);text-transform:uppercase}',
    '#tour .x{background:none;border:0;color:var(--muted);font:16px/1 var(--mono);cursor:pointer;padding:4px}',
    '#tour .x:hover{color:var(--strong)}',
    '#tour h2{margin:12px 0 8px;font:600 17px/1.2 var(--mono);color:var(--strong);letter-spacing:.02em}',
    '#tour p{margin:0;font-size:14px;line-height:1.55;color:var(--text)}',
    '#tour .pe{display:flex;align-items:center;justify-content:space-between;margin-top:16px;gap:10px}',
    '#tour .dots{display:flex;gap:6px}',
    '#tour .dots i{width:6px;height:6px;border-radius:50%;background:var(--line);transition:.3s}',
    '#tour .dots i.on{background:#ffd78a;width:18px;border-radius:3px}',
    '#tour .bt{display:flex;gap:6px}',
    '#tour a.b{text-decoration:none;display:inline-flex;align-items:center}',
    '#tour .b.pri{color:#02030a;background:var(--strong);border-color:var(--strong)}',
    '#tour .b.pri:hover{background:#fff}',
    '.tour-foco{box-shadow:0 0 0 2px rgba(255,215,138,.75),0 0 30px rgba(255,215,138,.25)!important;transition:box-shadow .3s}',
    '#tour-chip{position:fixed;left:50%;bottom:96px;transform:translateX(-50%);display:flex;align-items:center;gap:12px;padding:10px 12px 10px 16px;font:12px/1 var(--mono);color:var(--strong);z-index:19;animation:chip-in .6s cubic-bezier(.2,.7,.1,1) both}',
    '#tour-chip[hidden]{display:none}',
    '#tour-chip .b.pri{color:#02030a;background:var(--strong);border-color:var(--strong)}',
    '@keyframes chip-in{from{opacity:0;transform:translate(-50%,12px)}}',
    '@media (max-width:560px){#tour,#tour-chip{bottom:150px}}'
  ].join('');
  document.head.appendChild(css);

  var el = document.createElement('div');
  el.id = 'tour'; el.className = 'panel'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-live', 'polite');
  el.setAttribute('aria-label', 'Tour guiado');
  document.body.appendChild(el);

  var chip = document.createElement('div');
  chip.id = 'tour-chip'; chip.className = 'panel'; chip.hidden = true;
  chip.innerHTML = '<span>Primeira vez aqui?</span><button class="b pri" type="button" data-tour-start>Fazer o tour</button><button class="b" type="button" data-chip-x aria-label="Fechar o tour">✕</button>';
  document.body.appendChild(chip);

  var i = -1, focoAtual = null;
  function foco(sel) {
    if (focoAtual) focoAtual.classList.remove('tour-foco');
    focoAtual = sel ? $(sel) : null;
    if (focoAtual) focoAtual.classList.add('tour-foco');
  }
  function render() {
    var p = PASSOS[i], ult = i === PASSOS.length - 1;
    el.innerHTML =
      '<div class="k"><span>' + t('Tour guiado') + ' · ' + (i + 1) + '/' + PASSOS.length + '</span>' +
      '<button class="x" type="button" data-tour-x aria-label="' + t('Fechar o tour') + '">✕</button></div>' +
      '<h2>' + t(p.titulo) + '</h2><p>' + t(p.texto) + '</p>' +
      '<div class="pe"><div class="dots">' + PASSOS.map(function (_, k) { return '<i class="' + (k === i ? 'on' : '') + '"></i>'; }).join('') + '</div>' +
      '<div class="bt">' + (i > 0 ? '<button class="b" type="button" data-tour-prev>' + t('Anterior') + '</button>' : '') +
      (p.link ? '<a class="b" href="' + p.link[1] + '">' + t(p.link[0]) + '</a>' : '') +
      '<button class="b pri" type="button" data-tour-next>' + t(ult ? 'Concluir' : 'Próximo') + '</button></div></div>';
  }
  function ir(k) {
    if (!window.orrery) return;
    i = Math.max(0, Math.min(PASSOS.length - 1, k));
    render(); foco(PASSOS[i].foco);
    try { PASSOS[i].agir(window.orrery); } catch (e) { console.error(e); }
    el.classList.add('on');
    var nx = el.querySelector('[data-tour-next]'); if (nx) nx.focus({ preventScroll: true });
  }
  function fechar() {
    el.classList.remove('on'); foco(null); i = -1;
    try { localStorage.setItem('orbitron-tour', 'visto'); } catch (e) {}
  }
  function abrir() { chip.hidden = true; ir(0); }

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target : null; if (!a) return;
    if (a.closest('[data-tour-start]')) { e.preventDefault(); abrir(); var m = $('#brand'); if (m && m.getAttribute('aria-expanded') === 'true') m.click(); }
    else if (a.closest('[data-tour-next]')) { i === PASSOS.length - 1 ? fechar() : ir(i + 1); }
    else if (a.closest('[data-tour-prev]')) ir(i - 1);
    else if (a.closest('[data-tour-x]')) fechar();
    else if (a.closest('[data-chip-x]')) { chip.hidden = true; try { localStorage.setItem('orbitron-tour', 'visto'); } catch (e2) {} }
  });
  // setas do teclado navegam no tour sem conflitar com os atalhos do simulador
  window.addEventListener('keydown', function (e) {
    if (i < 0) return;
    if (e.key === 'Escape') { fechar(); e.stopImmediatePropagation(); }
    else if (e.key === 'ArrowRight' && e.altKey) ir(i + 1);
    else if (e.key === 'ArrowLeft' && e.altKey) ir(i - 1);
  }, true);
  document.addEventListener('orbitron:lang', function () { if (i >= 0) render(); });

  var visto = false;
  try { visto = localStorage.getItem('orbitron-tour') === 'visto'; } catch (e) {}
  if (/[?&]tour=1/.test(location.search)) setTimeout(abrir, 900);
  else if (!visto) setTimeout(function () { if (i < 0) chip.hidden = false; }, 1600);

  window.OrbitronTour = { abrir: abrir, fechar: fechar, ir: ir };
})();
