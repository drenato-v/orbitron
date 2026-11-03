/*
 * i18n.js — Português / English para o site do Orbitron.
 *
 * O português é o idioma do HTML. Ao trocar para inglês, cada texto visível
 * (e os atributos title, aria-label, alt e placeholder) é procurado no
 * dicionário EN abaixo pela sua versão em português. Textos que mudam
 * sozinhos (data, painel do planeta) são traduzidos por um MutationObserver.
 *
 * Para traduzir um texto novo: copie o texto em português exatamente como
 * aparece na página e acrescente a linha  "texto em pt": "text in en".
 */
(function () {
  'use strict';
  var EN = {
    // ---------- comuns ----------
    'Orbitron · Simulador Orbital': 'Orbitron · Orbital Simulator',
    'Abrir': 'Open', 'simulador': 'simulator', 'Abrir o simulador': 'Open the simulator',
    'Voltar à página inicial': 'Back to home page', 'Página inicial': 'Home',
    'Resultados': 'Results', 'Código no GitHub': 'Code on GitHub',
    'Português': 'Português', 'English': 'English',
    'Mudar para inglês': 'Switch to Portuguese',

    // ---------- landing ----------
    'A ideia': 'The idea', 'Física': 'Physics', 'Como funciona': 'How it works', 'Roadmap': 'Roadmap',
    'REFERÊNCIA': 'REFERENCE', 'ÉPOCA': 'EPOCH', 'DATA': 'DATE',
    'Órbitas': 'Orbits', 'calculadas,': 'calculated,', 'não desenhadas.': 'not drawn.',
    'O Sistema Solar movido apenas pelas leis da física, e conferido, número por número, contra as efemérides da NASA.':
      'The Solar System driven only by the laws of physics, and checked, number by number, against NASA’s ephemerides.',
    'Explorar o Sistema Solar': 'Explore the Solar System', 'Entender a ideia': 'Understand the idea',
    'O problema': 'The problem', 'A proposta': 'The proposal',
    'A maioria das animações do Sistema Solar só desenha círculos bonitos. Elas não dizem o quanto estão erradas.':
      'Most Solar System animations just draw pretty circles. They never tell you how wrong they are.',
    'O Orbitron calcula cada órbita a partir da gravidade e mede, com números, o erro que cada simplificação introduz.':
      'Orbitron computes every orbit from gravity and measures, in numbers, the error each simplification introduces.',
    '01 · A física em degraus': '01 · Physics, step by step',
    'Três níveis.': 'Three levels.', 'Três experimentos.': 'Three experiments.',
    'Cada nível acrescenta uma camada de física. Comparar um com o outro mostra exatamente o que cada efeito contribui para o movimento real dos planetas.':
      'Each level adds a layer of physics. Comparing one with another shows exactly what each effect contributes to the real motion of the planets.',
    'NÍVEL 01': 'LEVEL 01', 'NÍVEL 02': 'LEVEL 02', 'NÍVEL 03': 'LEVEL 03',
    'Dois corpos e uma solução analítica: cada planeta gira em sua elipse perfeita em torno do Sol.':
      'Two bodies and an analytic solution: each planet travels its perfect ellipse around the Sun.',
    'IGNORA →': 'IGNORES →', 'a atração entre os planetas': 'the pull between planets',
    'Newton, N corpos': 'Newton, N bodies',
    'Todos puxam todos. Integração numérica passo a passo, com integradores Verlet e Runge-Kutta 4.':
      'Everything pulls on everything. Step-by-step numerical integration with Verlet and Runge-Kutta 4 integrators.',
    'a relatividade': 'relativity',
    'Newton + Relatividade': 'Newton + Relativity',
    'A correção da relatividade geral entra na força. É ela que explica o avanço anômalo do periélio de Mercúrio.':
      'The general-relativity correction enters the force. It explains the anomalous advance of Mercury’s perihelion.',
    'quase nada, na escala dos planetas': 'almost nothing, at planetary scale',
    '02 · O experimento principal': '02 · The main experiment',
    'O periélio de Mercúrio avança cerca de': 'Mercury’s perihelion advances about',
    '574 segundos de arco por século': '574 arcseconds per century',
    '. A gravidade dos outros planetas explica uns 531″. Os 43″ que sobram são a assinatura de Einstein, e o simulador precisa reencontrá-los.':
      '. The gravity of the other planets explains some 531″. The remaining 43″ are Einstein’s signature, and the simulator has to find them again.',
    'OBSERVADO': 'OBSERVED', '574″ / século': '574″ / century',
    'NÍVEL 02 · NEWTON, N CORPOS': 'LEVEL 02 · NEWTON, N BODIES',
    'NÍVEL 03 · RELATIVIDADE GERAL': 'LEVEL 03 · GENERAL RELATIVITY',
    'Valores de referência da literatura. O registro dos resultados medidos pelo Orbitron fica em docs/validacao.md.':
      'Reference values from the literature. Results measured by Orbitron are logged in docs/validacao.md.',
    'Planetas com condições': 'Planets with real', 'iniciais reais': 'initial conditions',
    'Níveis de física': 'Comparable levels', 'comparáveis': 'of physics',
    'Efeméride da NASA': 'NASA ephemeris', 'usada como gabarito': 'used as the answer key',
    'Chaves de API.': 'API keys.', 'Horizons é público': 'Horizons is public',
    '03 · Como funciona': '03 · How it works',
    'Da NASA ao': 'From NASA to', 'gráfico de erro.': 'the error plot.',
    'Os dados reais entram de um lado e saem do outro como comparação. No meio, quem calcula é só o nosso código.':
      'Real data goes in on one side and comes out the other as a comparison. In between, only our code does the math.',
    'Passo 01': 'Step 01', 'Passo 02': 'Step 02', 'Passo 03': 'Step 03', 'Passo 04': 'Step 04',
    'Buscar': 'Fetch', 'Preparar': 'Prepare', 'Simular': 'Simulate', 'Comparar': 'Compare',
    'O': 'The',
    'baixa do JPL as posições e velocidades reais de todos os planetas numa data.':
      'downloads from JPL the real positions and velocities of every planet on a given date.',
    'A resposta bruta fica guardada intacta e é convertida em condições iniciais em':
      'The raw response is stored untouched and converted into initial conditions in',
    'O motor em C, offline e determinístico, integra o sistema por anos ou séculos e grava as trajetórias.':
      'The C engine, offline and deterministic, integrates the system for years or centuries and writes the trajectories.',
    'A posição calculada é confrontada com a do Horizons na mesma data. O resultado vira gráfico de erro.':
      'The computed position is checked against Horizons on the same date. The result becomes an error plot.',
    'Uma responsabilidade por parte': 'One job per part',
    'Python busca e analisa. C calcula a física. A web só desenha.': 'Python fetches and analyses. C computes the physics. The web only draws.',
    'Motor sem internet': 'Offline engine',
    'Lê e escreve arquivos. Testável, reproduzível e pronto para WebAssembly.': 'Reads and writes files. Testable, reproducible and ready for WebAssembly.',
    'Dados com linhagem': 'Data with lineage',
    'Tudo é gerado por scripts a partir da resposta bruta da API.': 'Everything is generated by scripts from the raw API response.',
    '04 · Roadmap': '04 · Roadmap',
    'Hoje, planetas.': 'Today, planets.', 'Depois, foguetes.': 'Next, rockets.',
    'O mesmo motor vai crescer em fases, até simular asteroides e transferências orbitais de foguetes.':
      'The same engine will grow in phases, up to simulating asteroids and rocket orbital transfers.',
    'FASE 0': 'PHASE 0', 'FASE 1': 'PHASE 1', 'FASE 2': 'PHASE 2', 'FASE 3': 'PHASE 3', 'FASE 4': 'PHASE 4',
    'EM CURSO': 'IN PROGRESS', 'PRÓXIMA': 'NEXT',
    'Fundação': 'Foundation', 'Nova estrutura do projeto': 'New project structure',
    'Arquitetura, física e validação documentadas': 'Architecture, physics and validation documented',
    'Primeiros dados reais do Horizons': 'First real data from Horizons',
    'Motor básico': 'Basic engine', 'Vetores, corpos e sistema em C, com testes': 'Vectors, bodies and system in C, with tests',
    'Leitura e escrita de trajetórias': 'Reading and writing trajectories',
    'Integrador de Euler semi-implícito': 'Semi-implicit Euler integrator',
    'Três níveis de física': 'Three levels of physics', 'Kepler analítico': 'Analytic Kepler',
    'Newton N corpos, Verlet e RK4': 'Newton N-body, Verlet and RK4', 'Relatividade geral': 'General relativity',
    'Visualização': 'Visualization', 'Motor em WebAssembly': 'Engine in WebAssembly',
    'Sistema Solar 3D com Three.js': '3D Solar System with Three.js',
    'Além dos planetas': 'Beyond the planets', 'Asteroides: Apophis, 13/04/2029': 'Asteroids: Apophis, 2029-04-13',
    'Foguetes: empuxo e massa variável': 'Rockets: thrust and variable mass',
    'Explore o': 'Explore the', 'Sistema Solar.': 'Solar System.',
    'A Axion transforma ciência e engenharia em produtos digitais. O Orbitron é um dos nossos projetos: física de verdade, explicada de um jeito que qualquer pessoa consegue explorar.':
      'Axion turns science and engineering into digital products. Orbitron is one of our projects: real physics, explained in a way anyone can explore.',
    'Quem fez': 'Made by', 'FUNDADOR · AXION': 'FOUNDER · AXION',
    'Desenvolvedor apaixonado por física, espaço e software. Criador do Orbitron, um simulador que leva a sério a pergunta "quão certo isso está?".':
      'Developer passionate about physics, space and software. Creator of Orbitron, a simulator that takes the question "how right is this?" seriously.',
    'Contato & redes': 'Contact & social', 'Site da Axion': 'Axion website',
    'Axion. Todos os direitos reservados.': 'Axion. All rights reserved.', 'Efemérides:': 'Ephemerides:',

    // planetas (landing em maiúsculas, simulador em minúsculas)
    'MERCÚRIO': 'MERCURY', 'VÊNUS': 'VENUS', 'TERRA': 'EARTH', 'MARTE': 'MARS', 'JÚPITER': 'JUPITER',
    'SATURNO': 'SATURN', 'URANO': 'URANUS', 'NETUNO': 'NEPTUNE',
    'Mercúrio': 'Mercury', 'Vênus': 'Venus', 'Terra': 'Earth', 'Marte': 'Mars', 'Júpiter': 'Jupiter',
    'Saturno': 'Saturn', 'Urano': 'Uranus', 'Netuno': 'Neptune', 'Sol': 'Sun', 'Lua': 'Moon',
    'Mer': 'Mer', 'Vên': 'Ven', 'Ter': 'Ear', 'Mar': 'Mar', 'Júp': 'Jup', 'Sat': 'Sat', 'Ura': 'Ura', 'Net': 'Nep',

    // ---------- simulador ----------
    'Sistema Solar em 3D: arraste para girar, role para aproximar, botão direito para mover':
      '3D Solar System: drag to rotate, scroll to zoom, right button to pan',
    'Menu do Orbitron': 'Orbitron menu', 'Navegação do Orbitron': 'Orbitron navigation',
    'A física': 'The physics', 'Sistema Solar · órbitas reais': 'Solar System · real orbits',
    'arrastar: girar · rolar: zoom · botão direito: mover': 'drag: rotate · scroll: zoom · right button: pan',
    'clique: escolher · duplo clique: seguir · Esc: voltar ao Sol': 'click: select · double click: follow · Esc: back to the Sun',
    'espaço: pausa · ←→ dias · 1–8 planetas': 'space: pause · ←→ days · 1–8 planets',
    'Controles': 'Controls', 'Pausar': 'Pause', 'Tocar': 'Play', 'Inverter o tempo': 'Reverse time',
    '1 d/s': '1 d/s', '20 d/s': '20 d/s', '100 d/s': '100 d/s', '1 ano/s': '1 yr/s',
    'Ir para a data': 'Go to date', 'Hoje': 'Today',
    'Distâncias: log': 'Distances: log', 'Distâncias: reais': 'Distances: real',
    'Órbitas': 'Orbits', 'Nomes': 'Names', 'Eclíptica': 'Ecliptic', '⌂ Sol': '⌂ Sun',
    'Longitude λ': 'Longitude λ', 'Latitude β': 'Latitude β', 'Distância ao Sol': 'Distance to Sun',
    'Velocidade orbital': 'Orbital speed', 'Período': 'Period', 'Posição (x, y, z)': 'Position (x, y, z)',
    'Distância à Terra': 'Distance to Earth',
    'Tour guiado': 'Guided tour', 'Fazer o tour': 'Take the tour', 'Primeira vez aqui?': 'First time here?',
    'Anterior': 'Back', 'Próximo': 'Next', 'Concluir': 'Finish', 'Fechar o tour': 'Close tour', 'Pular': 'Skip',

    // tour
    'Bem-vindo ao Orbitron': 'Welcome to Orbitron',
    'Este é o Sistema Solar de hoje, com cada planeta na posição em que está agora. Arraste para girar a vista e role para aproximar.':
      'This is today’s Solar System, with every planet where it is right now. Drag to rotate the view and scroll to zoom.',
    'Posições reais': 'Real positions',
    'As posições vêm dos elementos orbitais publicados pelo JPL, da NASA. O painel mostra a distância ao Sol e a velocidade da Terra neste instante.':
      'Positions come from the orbital elements published by NASA’s JPL. The panel shows Earth’s distance to the Sun and its speed right now.',
    'Órbitas são elipses': 'Orbits are ellipses',
    'Mercúrio tem a órbita mais alongada entre os planetas. Repare no painel: ele acelera perto do Sol e desacelera longe dele, como Kepler descreveu.':
      'Mercury has the most elongated orbit of all planets. Watch the panel: it speeds up near the Sun and slows down far from it, just as Kepler described.',
    'O peso de Júpiter': 'Jupiter’s weight',
    'Júpiter tem mais massa que todos os outros planetas juntos. No nível 2 do motor, é ele quem mais desvia os outros planetas das elipses perfeitas.':
      'Jupiter is more massive than all the other planets combined. In level 2 of the engine, it is the main reason the others drift from perfect ellipses.',
    'O tamanho real do vazio': 'The true size of the void',
    'Com distâncias reais, os planetas internos se espremem perto do Sol. Por isso a vista usa escala logarítmica por padrão.':
      'With real distances, the inner planets crowd close to the Sun. That is why the view uses a logarithmic scale by default.',
    'Controle o tempo': 'Control time',
    'Agora passa um ano por segundo. Use a barra para pausar, inverter o tempo, mudar a velocidade ou ir para qualquer data.':
      'Now one year passes every second. Use the bar to pause, reverse time, change speed or jump to any date.',
    'O que vem aí': 'What comes next',
    'Em breve, o motor em C vai mover esta vista e comparar cada planeta com a NASA. Acompanhe o roadmap na página inicial.':
      'Soon the C engine will drive this view and compare every planet with NASA. Follow the roadmap on the home page.',

    // ---------- resultados ----------
    'Resultados das simulações': 'Simulation results',
    'Os números que o motor produz.': 'The numbers the engine produces.',
    'Carregue uma ou mais pastas de': 'Load one or more folders from',
    'geradas pelo motor em C. Nada é calculado aqui: a página apenas lê os arquivos e desenha os gráficos.':
      'generated by the C engine. Nothing is computed here: the page only reads the files and draws the charts.',
    'Arraste pastas de execução aqui': 'Drop run folders here',
    'ou': 'or', 'Escolher pasta': 'Choose folder', 'Escolher arquivos': 'Choose files',
    'Cada pasta deve conter': 'Each folder should contain',
    'Execuções carregadas': 'Loaded runs', 'Nenhuma execução carregada ainda.': 'No runs loaded yet.',
    'Erro relativo de energia': 'Relative energy error', 'Trajetórias · vista de cima': 'Trajectories · top view',
    'Configuração usada': 'Configuration used', 'remover': 'remove', 'Limpar tudo': 'Clear all',
    'tempo (anos)': 'time (years)', 'Formato esperado': 'Expected format',
    'Colunas': 'Columns', 'Arquivo': 'File', 'Obrigatório': 'Required', 'Opcional': 'Optional',
    'sim': 'yes', 'não': 'no',
    'Cópia da configuração da execução': 'Copy of the run configuration',
    'Posição e velocidade de cada corpo': 'Position and velocity of each body',
    'Energia total e erro relativo': 'Total energy and relative error',
    'Sem energia.csv nesta seleção.': 'No energia.csv in this selection.',
    'Sem trajetorias.csv nesta seleção.': 'No trajetorias.csv in this selection.',
    'Arquivos não reconhecidos foram ignorados:': 'Unrecognised files were ignored:',
    'Corpos': 'Bodies', 'pontos': 'points', 'Duração': 'Duration', 'anos': 'years', 'Passo': 'Step', 'dias': 'days',
    'Erro final': 'Final error',
    'arquivos': 'files', 'Gráfico': 'Chart', 'Tabela': 'Table', 'Visualização': 'View', 'Escala radial': 'Radial scale',
    'erro_relativo · escala log': 'erro_relativo · log scale', 'x, y (UA) · eclíptica': 'x, y (AU) · ecliptic',
    'Erro máximo': 'Max error'
  };

  var MESES_PT = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  var MESES_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var KEY = 'orbitron-lang';
  var lang = 'pt';
  try { lang = localStorage.getItem(KEY) || 'pt'; } catch (e) {}
  var q = /[?&]lang=(pt|en)/.exec(location.search); if (q) lang = q[1];

  var orig = new WeakMap(), origAttr = new WeakMap(), feito = new WeakMap();
  var ATTRS = ['title', 'aria-label', 'alt', 'placeholder'];
  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };

  function tr(s) {
    var k = norm(s);
    if (!k) return null;
    if (Object.prototype.hasOwnProperty.call(EN, k)) return EN[k];
    var m = /^(\d{2}) (jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez) (-?\d+)$/.exec(k);
    if (m) return MESES_EN[MESES_PT.indexOf(m[2])] + ' ' + m[1] + ', ' + m[3];
    m = /^seguindo (.+)$/.exec(k); if (m) return 'following ' + (EN[m[1]] || m[1]);
    return null;
  }
  // números e unidades do painel do planeta (1.234,56 → 1,234.56)
  function trNumero(s) {
    if (!/\d/.test(s)) return null;
    var out = s.replace(/[.,]/g, function (c) { return c === '.' ? ',' : '.'; })
      .replace(/ UA\b/g, ' AU').replace(/\bdias\b/g, 'days').replace(/\bluz\b/g, 'light');
    return out !== s ? out : null;
  }
  function noPainel(n) { var p = n.parentElement; return p && p.closest && p.closest('#info dd'); }

  function traduzNo(n) {
    if (n.nodeType !== 3) return;
    var p = n.parentElement; if (!p || /^(SCRIPT|STYLE|CODE)$/.test(p.tagName) || p.closest('[data-i18n-skip]')) return;
    var v = n.nodeValue;
    if (lang === 'en') {
      if (feito.get(n) === v) return; // já traduzido por nós: evita laço com o observer
      var t = tr(v) || (noPainel(n) ? trNumero(v) : null);
      if (t === null) return;
      if (!orig.has(n)) orig.set(n, v);
      var lead = /^\s*/.exec(v)[0], trail = /\s*$/.exec(v)[0];
      var novo = lead + t + trail;
      feito.set(n, novo);
      if (novo !== v) n.nodeValue = novo;
    } else if (orig.has(n)) { n.nodeValue = orig.get(n); orig.delete(n); feito.delete(n); }
  }
  function traduzAttrs(el) {
    if (el.nodeType !== 1) return;
    ATTRS.forEach(function (a) {
      if (!el.hasAttribute(a)) return;
      var store = origAttr.get(el) || {};
      if (lang === 'en') {
        var v = el.getAttribute(a), t = tr(v);
        if (t === null) return;
        if (!(a in store)) store[a] = v;
        origAttr.set(el, store);
        if (t !== v) el.setAttribute(a, t);
      } else if (a in store) { el.setAttribute(a, store[a]); delete store[a]; }
    });
  }
  function varrer(raiz) {
    if (raiz.nodeType === 3) { traduzNo(raiz); return; }
    if (raiz.nodeType !== 1) return;
    traduzAttrs(raiz);
    var w = document.createTreeWalker(raiz, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    var n; while ((n = w.nextNode())) { if (n.nodeType === 3) traduzNo(n); else traduzAttrs(n); }
  }

  var obs = new MutationObserver(function (ms) {
    if (lang !== 'en') return;
    ms.forEach(function (m) {
      if (m.type === 'characterData') traduzNo(m.target);
      else if (m.type === 'attributes') traduzAttrs(m.target);
      else m.addedNodes.forEach(varrer);
    });
  });

  var tituloPT = null;
  function aplicar(l) {
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    document.documentElement.lang = l === 'en' ? 'en' : 'pt-BR';
    if (tituloPT === null) tituloPT = document.title;
    document.title = l === 'en' ? (document.documentElement.getAttribute('data-title-en') || tituloPT) : tituloPT;
    varrer(document.body);
    document.querySelectorAll('[data-lang-toggle]').forEach(function (b) {
      b.textContent = l === 'en' ? 'PT' : 'EN';
      b.setAttribute('aria-label', l === 'en' ? 'Mudar para português' : 'Switch to English');
      b.setAttribute('title', l === 'en' ? 'Português' : 'English');
    });
    document.dispatchEvent(new CustomEvent('orbitron:lang', { detail: l }));
  }

  window.OrbitronI18n = {
    get lang() { return lang; },
    t: function (s) { return lang === 'en' ? (tr(s) || s) : s; },
    set: aplicar,
    toggle: function () { aplicar(lang === 'en' ? 'pt' : 'en'); }
  };

  function iniciar() {
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-lang-toggle]');
      if (b) { e.preventDefault(); window.OrbitronI18n.toggle(); }
    });
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    aplicar(lang);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();
