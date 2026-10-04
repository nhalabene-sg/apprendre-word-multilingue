(() => {
  const course = window.COURSE;
  const t = window.COURSE_UI;
  if (!course) throw new Error('Dados do curso em falta.');
  if (!t) throw new Error('Textos da interface em falta.');

  const levelRanges = [
    { key: 'start', end: 4 },
    { key: 'beginner', end: 10 },
    { key: 'basic', end: 18 },
    { key: 'intermediate', end: 27 },
    { key: 'advanced', end: 42 },
    { key: 'professional', end: 57 },
    { key: 'projects', end: 60 }
  ];

  function levelKeyForIndex(index) {
    return levelRanges.find(range => index + 1 <= range.end)?.key || 'projects';
  }

  const flatLessons = [];
  course.modules.forEach((module, moduleIndex) => {
    module.lessons.forEach((lesson, lessonIndex) => {
      flatLessons.push({ ...lesson, module, moduleIndex, lessonIndex, levelKey: levelKeyForIndex(flatLessons.length) });
    });
  });

  const storageKey = `aprender-office-${course.slug}-${t.locale}-v3`;
  const memoryStorage = {};
  const storage = {
    get(key) {
      try { return window.localStorage.getItem(key); }
      catch { return memoryStorage[key] || null; }
    },
    set(key, value) {
      try { window.localStorage.setItem(key, value); }
      catch { memoryStorage[key] = value; }
    }
  };
  let saved = {};
  try { saved = JSON.parse(storage.get(storageKey) || '{}'); }
  catch { saved = {}; }
  let current = Math.min(Number(saved.current) || 0, flatLessons.length - 1);
  let completed = new Set(Array.isArray(saved.completed) ? saved.completed : []);
  let practiceState = saved.practice && typeof saved.practice === 'object' ? saved.practice : {};
  let guideState = saved.guide && typeof saved.guide === 'object' ? saved.guide : {};
  let selectedLevel = 'all';
  let toastTimer;
  let coachTimer;

  const $ = (selector) => document.querySelector(selector);
  const nav = $('#courseNav');
  const lessonRoot = $('#lesson');
  const progressBar = $('#progressBar');
  const progressText = $('#progressText');
  const progressCount = $('#progressCount');
  const prevButton = $('#prevButton');
  const nextButton = $('#nextButton');
  const search = $('#lessonSearch');
  const levelFilter = $('#levelFilter');

  function escapeHTML(value = '') {
    return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
  }

  function format(template, values = {}) {
    return String(template).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
  }

  function save() {
    storage.set(storageKey, JSON.stringify({ current, completed: [...completed], practice: practiceState, guide: guideState }));
  }

  function lessonId(index) {
    return flatLessons[index].id || `${course.slug}-${index + 1}`;
  }

  function updateProgress() {
    const percent = Math.round((completed.size / flatLessons.length) * 100);
    progressBar.style.width = `${percent}%`;
    progressText.textContent = `${percent}%`;
    progressCount.textContent = format(t.progressCount, { done: completed.size, total: flatLessons.length });
  }

  function levelLabel(item) {
    return t.levels.find(level => level.key === item.levelKey)?.label || item.level;
  }

  function renderLevelFilter() {
    if (!levelFilter) return;
    const levels = [{ key: 'all', label: t.allLevels }, ...t.levels];
    levelFilter.innerHTML = levels.map(level => {
      const count = level.key === 'all' ? flatLessons.length : flatLessons.filter(item => item.levelKey === level.key).length;
      return `<button type="button" class="level-chip${selectedLevel === level.key ? ' active' : ''}" data-level="${level.key}">${escapeHTML(level.label)}<span>${count}</span></button>`;
    }).join('');
    levelFilter.querySelectorAll('[data-level]').forEach(button => button.addEventListener('click', () => {
      selectedLevel = button.dataset.level;
      renderLevelFilter();
      renderNav(search.value);
    }));
  }

  function renderNav(filter = '') {
    const term = filter.trim().toLocaleLowerCase(t.locale);
    nav.innerHTML = '';
    course.modules.forEach((module, moduleIndex) => {
      const matches = module.lessons.map((lesson, lessonIndex) => ({ lesson, lessonIndex })).filter(({ lesson, lessonIndex }) => {
        const index = flatLessons.findIndex(item => item.moduleIndex === moduleIndex && item.lessonIndex === lessonIndex);
        const haystack = `${module.title} ${lesson.title} ${lesson.intro}`.toLocaleLowerCase(t.locale);
        const matchesLevel = selectedLevel === 'all' || flatLessons[index].levelKey === selectedLevel;
        return matchesLevel && (!term || haystack.includes(term));
      });
      if (!matches.length) return;
      const group = document.createElement('section');
      group.className = 'module-group';
      group.innerHTML = `<div class="module-title">${escapeHTML(module.number)} · ${escapeHTML(module.title)}</div>`;
      matches.forEach(({ lesson, lessonIndex }) => {
        const index = flatLessons.findIndex(item => item.moduleIndex === moduleIndex && item.lessonIndex === lessonIndex);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `lesson-link${index === current ? ' active' : ''}`;
        button.dataset.index = index;
        button.innerHTML = `<span class="lesson-num">${lessonIndex + 1}</span><span>${escapeHTML(lesson.title)}</span><span class="lesson-check">${completed.has(lessonId(index)) ? '✓' : ''}</span>`;
        button.addEventListener('click', () => goTo(index));
        group.appendChild(button);
      });
      nav.appendChild(group);
    });
    if (!nav.children.length) nav.innerHTML = `<p style="padding:16px;color:var(--muted);font-size:.85rem">${escapeHTML(t.noLessons)}</p>`;
  }

  function excelScene(item) {
    const topic = `${item.module.title} ${item.title}`.toLocaleLowerCase(t.locale);
    if (/gráfico|gráfic|graphique|chart|painel|panel|tableau de bord|dashboard/.test(topic)) {
      return `<div class="scene chart-scene"><div class="kpi-row"><span><b>4 820</b>${escapeHTML(t.scene.sales)}</span><span><b>68</b>${escapeHTML(t.scene.orders)}</span><span><b>+12%</b>${escapeHTML(t.scene.growth)}</span></div><div class="mini-chart" aria-label="${escapeHTML(t.scene.chartAria)}"><i style="height:42%"></i><i style="height:66%"></i><i style="height:53%"></i><i style="height:88%"></i><i style="height:74%"></i></div></div>`;
    }
    if (/fórmula|formula|formule|funç|función|fonction|function|soma|suma|somme|sum\b|se\b|si\b|if\b|procv|procv|vlookup|procx|buscarx|recherchex|xlookup|filtrar|filtrer|filter|ordenar|trier|sort|único|unique|nome|nombre|nom|name|referência|referencia|référence|reference/.test(topic)) {
      return `<div class="scene"><div class="formula-bar"><b>fx</b><span>${escapeHTML(t.scene.formula)}</span></div>${sheetHTML(true)}</div>`;
    }
    if (/tabela dinâmica|tabla dinámica|tableau croisé|pivot table|subtotal|cenário|escenario|scénario|scenario|solver|análise|análisis|analyse|analysis/.test(topic)) {
      return `<div class="scene pivot-scene"><div class="pivot-grid"><b>${escapeHTML(t.scene.category)}</b><b>${escapeHTML(t.scene.total)}</b><span>${escapeHTML(t.scene.stationery)}</span><span>1 240</span><span>${escapeHTML(t.scene.archive)}</span><span>980</span><strong>${escapeHTML(t.scene.grandTotal)}</strong><strong>2 220</strong></div><div class="field-list"><b>${escapeHTML(t.scene.fields)}</b><span>☑ ${escapeHTML(t.scene.product)}</span><span>☑ ${escapeHTML(t.scene.sales)}</span><span>☐ ${escapeHTML(t.scene.region)}</span></div></div>`;
    }
    if (/power query|importar|importer|import|csv|limpar|limpiar|nettoyer|clean|duplicados|duplicados|doublons|duplicates|validação|validación|validation|ordenar|ordenar|trier|sort|filtro|filtre|filter|texto|texte|text|datas|fechas|dates/.test(topic)) {
      return `<div class="scene data-scene"><div class="query-steps"><b>${escapeHTML(t.scene.appliedSteps)}</b><span>✓ ${escapeHTML(t.scene.source)}</span><span>✓ ${escapeHTML(t.scene.headers)}</span><span class="active">${escapeHTML(t.scene.changedTypes)}</span></div>${sheetHTML(false)}</div>`;
    }
    return `<div class="scene">${sheetHTML(false)}</div>`;
  }

  function sheetHTML(formulaMode) {
    const columns = ['A', 'B', 'C', 'D', 'E', 'F'];
    const rows = [1, 2, 3, 4, 5, 7, 9, 10, 11, 20];
    const values = {
      A1: t.scene.product, B1: t.scene.price, C1: t.scene.quantity, D1: t.scene.total, E1: t.scene.status,
      A2: t.scene.notebook, B2: '3,50', C2: '4', D2: formulaMode ? '=B2*C2' : '14,00', E2: t.scene.paid,
      A3: t.scene.pen, B3: '1,20', C3: '10', D3: '12,00', E3: t.scene.paid,
      A4: t.scene.folder, B4: '4,90', C4: '3', D4: '14,70', E4: t.scene.pending
    };
    const headers = `<div class="cell head"></div>${columns.map(column => `<div class="cell head" data-column="${column}">${column}</div>`).join('')}`;
    const cells = rows.map(row => `<div class="cell head" data-row="${row}">${row}</div>${columns.map(column => {
      const reference = `${column}${row}`;
      return `<div class="cell" data-cell="${reference}">${escapeHTML(values[reference] || '')}</div>`;
    }).join('')}`).join('');
    return `<div class="sheet-shell"><div class="cell-readout"><span>${escapeHTML(t.selectedCell)}</span><strong id="sceneCellRef">—</strong></div><div class="sheet-viewport"><div class="sheet">${headers}${cells}</div></div></div>`;
  }

  function wordScene(item) {
    const topic = `${item.module.title} ${item.title}`.toLocaleLowerCase(t.locale);
    if (/índice|index|table des matières|contents|citaç|cita|citation|bibliografia|bibliografía|bibliographie|bibliography|referência|referencia|référence|reference|legenda|leyenda|légende|caption|figuras|figures/.test(topic)) {
      return `<div class="word-page toc-page"><h3>${escapeHTML(t.scene.annualReport)}</h3><h4>${escapeHTML(t.scene.contents)}</h4><p>1. ${escapeHTML(t.scene.introduction)} <span>2</span></p><p>2. ${escapeHTML(t.scene.results)} <span>4</span></p><p>3. ${escapeHTML(t.scene.conclusions)} <span>8</span></p><small>${escapeHTML(t.scene.fieldsUpdated)}</small></div>`;
    }
    if (/tabela|tabla|table|imagem|imagen|image|smartart|caixa de texto|cuadro de texto|zone de texte|text box|formas|formes|shapes|boletim|boletín|bulletin|newsletter/.test(topic)) {
      return `<div class="word-page visual-page"><h3>${escapeHTML(t.scene.teamNewsletter)}</h3><div class="doc-columns"><div><div class="image-placeholder">${escapeHTML(t.scene.image)}</div><small>${escapeHTML(t.scene.figureCaption)}</small></div><div><h4>${escapeHTML(t.scene.results)}</h4><p>${escapeHTML(t.scene.shortInfo)}</p><div class="doc-table"><b>${escapeHTML(t.scene.month)}</b><b>${escapeHTML(t.scene.total)}</b><span>${escapeHTML(t.scene.september)}</span><span>82</span></div></div></div></div>`;
    }
    if (/comentário|comentario|commentaire|comment|alterações|cambios|modifications|changes|revisão|revisión|révision|review|editor|éditeur|acessibilidade|accesibilidad|accessibilité|accessibility/.test(topic)) {
      return `<div class="word-page review-page"><h3>${escapeHTML(t.scene.monthlyReport)}</h3><p>${escapeHTML(t.scene.reviewBefore)} <mark>${escapeHTML(t.scene.trackedChange)}</mark> ${escapeHTML(t.scene.reviewAfter)}</p><p>${escapeHTML(t.scene.clearDocument)}</p><aside class="comment-bubble"><b>${escapeHTML(t.scene.comment)}</b><span>${escapeHTML(t.scene.confirmValue)}</span></aside></div>`;
    }
    if (/orientaç|orientación|orientation|secç|sección|section|coluna|columna|colonne|column|folheto|folleto|brochure|capa|portada|couverture|cover|cabeçalho|encabezado|en-tête|header|rodapé|pie de página|pied de page|footer|página|page/.test(topic)) {
      return `<div class="word-page layout-page"><header>${escapeHTML(t.scene.companyReport)}</header><h3>${escapeHTML(t.scene.featuredProject)}</h3><div class="doc-columns"><p>${escapeHTML(t.scene.firstColumn)}</p><p>${escapeHTML(t.scene.secondColumn)}</p></div><footer>${escapeHTML(t.scene.page)} 1</footer></div>`;
    }
    if (/formulário|formulario|formulaire|form|controlo|control|contrôle|modelo|plantilla|modèle|template|proteger|protéger|protect/.test(topic)) {
      return `<div class="word-page form-page"><h3>${escapeHTML(t.scene.materialRequest)}</h3><label>${escapeHTML(t.scene.name)} <span>${escapeHTML(t.scene.writeHere)}</span></label><label>${escapeHTML(t.scene.department)} <span>${escapeHTML(t.scene.chooseOption)} ▾</span></label><label>${escapeHTML(t.scene.date)} <span>02/10/2026</span></label><p>☐ ${escapeHTML(t.scene.confirmData)}</p></div>`;
    }
    return `<div class="word-page"><h3>${escapeHTML(t.scene.monthlyReport)}</h3><p><strong>${escapeHTML(t.scene.objective)}</strong> ${escapeHTML(t.scene.documentGoal)}</p><p>${escapeHTML(t.scene.documentAdvice)}</p></div>`;
  }

  function actionLabel(step, index) {
    const strong = step.match(/<strong>(.*?)<\/strong>/i);
    if (strong) return stripToText(strong[1]).slice(0, 28);
    const code = step.match(/<code>(.*?)<\/code>/i);
    if (code) return stripToText(code[1]).slice(0, 28);
    const keys = [...step.matchAll(/<kbd>(.*?)<\/kbd>/gi)].map(match => stripToText(match[1]));
    if (keys.length) return keys.join(' + ').slice(0, 28);
    const text = stripToText(step);
    const rules = course.slug === 'excel'
      ? [
          [/guardar|ficheiro|livro em branco|abra o excel/i, t.actions.file],
          [/gráfico|tabela dinâmica|segmentação|minigráfico/i, t.actions.insert],
          [/validação|ordenar|filtro|remover duplicados/i, t.actions.data],
          [/imprimir|orientação|margens|área de impressão/i, t.actions.pageLayout],
          [/proteger|rever/i, t.actions.review],
          [/fórmula|soma|média|mínimo|máximo|procv|procx/i, t.actions.formulas],
          [/célula|linha|coluna|intervalo|grelha/i, t.actions.grid],
          [/formata|negrito|cor|limite|tipo de letra/i, t.actions.home]
        ]
      : [
          [/guardar|ficheiro|documento em branco|abra o word|exportar|pdf/i, t.actions.file],
          [/imagem|tabela|cabeçalho|rodapé|número de página/i, t.actions.insert],
          [/margem|orientação|quebra|coluna|esquema/i, t.actions.layout],
          [/tema|cores|tipos de letra/i, t.actions.design],
          [/índice|citação|bibliografia|legenda|referência cruzada/i, t.actions.references],
          [/impressão em série|destinatário|correspondência/i, t.actions.mailings],
          [/comentário|alterações|editor|acessibilidade|idioma/i, t.actions.review],
          [/painel de navegação|zoom|ver/i, t.actions.view],
          [/texto|parágrafo|negrito|lista|selecion/i, t.actions.home]
        ];
    const match = rules.find(([pattern]) => pattern.test(text));
    return match ? match[1] : `${t.action} ${index + 1}`;
  }

  function commandPath(step, index) {
    const strong = step.match(/<strong>(.*?)<\/strong>/i);
    if (strong) {
      const candidate = stripToText(strong[1]);
      if (!/exerc[ií]cio aut[oó]nomo|exercice autonome|ejercicio aut[oó]nomo|independent exercise/i.test(candidate)) return candidate;
    }
    const code = step.match(/<code>(.*?)<\/code>/i);
    if (code) return stripToText(code[1]);
    const keys = [...step.matchAll(/<kbd>(.*?)<\/kbd>/gi)].map(match => stripToText(match[1]));
    if (keys.length) return keys.join(' + ');
    return format(t.workspaceArea, { course: course.name }) || actionLabel(step, index);
  }

  function expectedResult(item, index) {
    const template = index === item.steps.length - 1 ? t.finalResultTemplate : t.expectedResultTemplate;
    return format(template, { title: item.title, course: course.name, current: index + 1, total: item.steps.length });
  }

  function stepDetails(item, index) {
    const safeIndex = Math.max(0, Math.min(index, item.steps.length - 1));
    return {
      where: commandPath(item.steps[safeIndex], safeIndex),
      action: stripToText(item.steps[safeIndex]),
      result: expectedResult(item, safeIndex)
    };
  }

  function detailedStepHTML(item, value, index) {
    const details = stepDetails(item, index);
    return `<article class="step beginner-step"><span class="step-number">${index + 1}</span><div class="step-content"><p class="step-main">${value}</p><div class="step-guidance"><span><b>${escapeHTML(t.whereToClick)}</b>${escapeHTML(details.where)}</span><span><b>${escapeHTML(t.whatToDo)}</b>${escapeHTML(details.action)}</span><span><b>${escapeHTML(t.expectedResult)}</b>${escapeHTML(details.result)}</span></div></div></article>`;
  }

  function ribbonHTML() {
    const tabs = course.slug === 'excel'
      ? [t.actions.file, t.actions.home, t.actions.insert, t.actions.pageLayout, t.actions.formulas, t.actions.data, t.actions.review]
      : [t.actions.file, t.actions.home, t.actions.insert, t.actions.design, t.actions.layout, t.actions.references, t.actions.mailings, t.actions.review, t.actions.view];
    return tabs.map((label, index) => `<span data-ribbon="${escapeHTML(label)}"${index === 1 ? ' class="default-tab"' : ''}>${escapeHTML(label)}</span>`).join('');
  }

  function setupGlobalNavigation() {
    const topbar = document.querySelector('.topbar');
    const actions = document.querySelector('.top-actions');
    const otherCourseLink = document.querySelector('.sidebar-footer a');
    if (!topbar || !actions || !otherCourseLink || document.querySelector('#globalNavigation')) return;
    const deployed = /\/(?:pt-PT|fr-FR|es-ES|en-GB)\//i.test(window.location.pathname) && !/Portugu%C3%AAs|Fran%C3%A7ais|Espa%C3%B1ol|English/i.test(window.location.pathname);
    const languages = [
      { locale: 'pt-PT', folder: '01 - Português de Portugal (pt-PT)', label: 'Português de Portugal' },
      { locale: 'fr-FR', folder: '02 - Français (fr-FR)', label: 'Français' },
      { locale: 'es-ES', folder: '03 - Español (es-ES)', label: 'Español' },
      { locale: 'en-GB', folder: '04 - English (en-GB)', label: 'English' }
    ];
    const languageOptions = languages.map(language => `<option value="${deployed ? `../${language.locale}/index.html` : `../../${language.folder}/${course.name}/index.html`}"${language.locale === t.locale ? ' selected' : ''}>${escapeHTML(language.label)}</option>`).join('');
    const navigation = document.createElement('nav');
    navigation.id = 'globalNavigation';
    navigation.className = 'global-navigation';
    navigation.setAttribute('aria-label', t.completeNavigation);
    navigation.innerHTML = `
      <a class="portal-home" href="${deployed ? '../index.html' : '../../index.html'}" title="${escapeHTML(t.portalHome)}"><span aria-hidden="true">⌂</span><b>${escapeHTML(t.portalHome)}</b></a>
      <div class="course-switch" aria-label="${escapeHTML(t.switchCourse)}">
        ${course.slug === 'excel' ? '<strong aria-current="page">X</strong>' : `<a href="${escapeHTML(otherCourseLink.getAttribute('href'))}" title="${escapeHTML(t.openExcel)}">X</a>`}
        ${course.slug === 'word' ? '<strong aria-current="page">W</strong>' : `<a href="${escapeHTML(otherCourseLink.getAttribute('href'))}" title="${escapeHTML(t.openWord)}">W</a>`}
      </div>
      <label class="language-switcher"><span>${escapeHTML(t.switchLanguage)}</span><select id="languageSwitcher" aria-label="${escapeHTML(t.switchLanguage)}">${languageOptions}</select></label>`;
    topbar.insertBefore(navigation, actions);
    $('#languageSwitcher').addEventListener('change', event => { window.location.href = event.target.value; });
  }

  function extractRawShortcuts(item) {
    if (Array.isArray(item.shortcuts) && item.shortcuts.length) return item.shortcuts;
    const shortcuts = [];
    [...item.steps, item.tip || ''].forEach(value => {
      const htmlCombos = [...value.matchAll(/<kbd>.*?<\/kbd>(?:\s*\+\s*<kbd>.*?<\/kbd>)*/gi)]
        .map(match => match[0].replace(/<\/?kbd>/gi, '').replace(/\s*\+\s*/g, ' + ').trim());
      const plain = stripToText(value);
      const plainCombos = plain.match(/(?:Ctrl|Alt|Shift|F\d{1,2}|Tab)(?:\s*\+\s*(?:Ctrl|Alt|Shift|F\d{1,2}|Tab|Enter|Seta|[A-Z0-9=]))+/gi) || [];
      shortcuts.push(...htmlCombos, ...plainCombos.map(combo => combo.replace(/\s*\+\s*/g, ' + ')));
    });
    return [...new Set(shortcuts)].slice(0, 8);
  }

  function localiseKey(key) {
    const normal = key.trim().toLocaleLowerCase(t.locale);
    if (/^(ctrl|control|controlo)$/.test(normal)) return t.keyboardKeys.ctrl;
    if (/^(shift|maj|may[uú]s)$/.test(normal)) return t.keyboardKeys.shift;
    if (normal === 'alt') return t.keyboardKeys.alt;
    if (/^(enter|entr[eé]e|intro)$/.test(normal)) return t.keyboardKeys.enter;
    if (/^(tab|tabulation|tabulador)$/.test(normal)) return t.keyboardKeys.tab;
    if (/^(seta|fl[eè]che|flecha|arrow)$/.test(normal)) return t.keyboardKeys.arrow;
    if (/^(espa[cç]o|espace|espacio|space|barra de espa[cç]o)$/.test(normal)) return t.keyboardKeys.space;
    if (/^(esc|[eé]chap)$/.test(normal)) return t.keyboardKeys.escape;
    return key.trim();
  }

  function keyboardHTML(item) {
    const shortcuts = extractRawShortcuts(item);
    if (!shortcuts.length) return '';
    const combos = shortcuts.map((shortcut, comboIndex) => {
      const keys = shortcut.split(/\s*\+\s*/).map(key => `<kbd style="--key-order:${comboIndex}">${escapeHTML(localiseKey(key))}</kbd>`).join('<i>+</i>');
      return `<span class="keyboard-combo">${keys}</span>`;
    }).join('');
    return `<aside class="keyboard-coach"><div class="keyboard-heading"><span aria-hidden="true">⌨</span><p><strong>${escapeHTML(t.keyboardShortcuts)}</strong><small>${escapeHTML(t.keyboardHelp)}</small></p></div><div class="keyboard-combos">${combos}</div></aside>`;
  }

  function previewHTML(item) {
    const actions = item.steps.map((step, index) => `<button type="button" class="guide-target" data-guide="${index}" data-click-label="${escapeHTML(t.clickHere)}"><span>${index + 1}</span>${escapeHTML(actionLabel(step, index))}</button>`).join('');
    const dots = item.steps.map((_, index) => `<button type="button" class="guide-dot" data-dot="${index}" aria-label="${escapeHTML(format(t.stepLabel, { current: index + 1, total: item.steps.length }))}"></button>`).join('');
    const first = stepDetails(item, 0);
    const interfaceNote = format(t.interfaceLanguageNote, { language: t.languageName, locale: t.locale });
    const controls = `<div class="demo-toolbar"><div class="locale-card"><span>${escapeHTML(t.interfaceLanguage)}</span><strong>${escapeHTML(t.languageName)} · ${escapeHTML(t.locale)}</strong><small>${escapeHTML(interfaceNote)}</small></div><div class="demo-control-group"><label for="coachSpeed">${escapeHTML(t.animationSpeed)}</label><select id="coachSpeed"><option value="5600">${escapeHTML(t.slowSpeed)}</option><option value="3600">${escapeHTML(t.normalSpeed)}</option></select><div class="demo-buttons"><button id="coachPlay" type="button">▶ ${escapeHTML(t.playDemo)}</button><button id="coachPause" type="button" disabled>Ⅱ ${escapeHTML(t.pauseDemo)}</button></div></div></div>`;
    const flow = `<div class="animation-flow" aria-hidden="true"><span><i>1</i>${escapeHTML(t.locateControl)}</span><span><i>2</i>${escapeHTML(t.performClick)}</span><span><i>3</i>${escapeHTML(t.verifyChange)}</span></div>`;
    const reproduce = `<div class="reproduce-bar"><span aria-hidden="true">🖥</span><p><strong>${escapeHTML(t.reproduceNow)}</strong><small>${escapeHTML(format(t.reproduceHelp, { course: course.name }))}</small></p><button id="coachDone" type="button">✓ ${escapeHTML(t.markStepDone)}</button></div>`;
    const coach = `${flow}<div class="guide-progress" aria-label="${escapeHTML(t.stepByStep)}">${dots}</div><div class="instruction-panel" aria-live="polite"><div><span>1</span><p><b>${escapeHTML(t.whereToClick)}</b><strong id="guideWhere">${escapeHTML(first.where)}</strong></p></div><div><span>2</span><p><b>${escapeHTML(t.whatToDo)}</b><strong id="guideDo">${escapeHTML(first.action)}</strong></p></div><div><span>3</span><p><b>${escapeHTML(t.expectedResult)}</b><strong id="guideResult">${escapeHTML(first.result)}</strong></p></div></div>${reproduce}<div class="click-coach"><span class="coach-count" id="coachCount">1/${item.steps.length}</span><p><strong id="coachStatus">${escapeHTML(t.demoPaused)}</strong><span id="coachText">${escapeHTML(first.action)}</span></p><button id="coachNext" type="button">${escapeHTML(t.showNextPoint)}</button></div>`;
    const cursor = `<div class="demo-cursor" id="demoCursor" aria-hidden="true"><i>↖</i><b>${escapeHTML(t.clickHere)}</b></div><div class="result-stamp" aria-hidden="true">✓ ${escapeHTML(t.verifyChange)}</div>`;
    const keyboard = keyboardHTML(item);
    if (course.slug === 'excel') {
      return `<div class="guided-block" id="guidedBlock"><div class="guide-heading"><div><strong>${escapeHTML(t.visualGuide)}</strong><span>${escapeHTML(t.visualGuideHelp)}</span></div><span class="live-badge">${escapeHTML(t.stepByStep)}</span></div>${controls}${keyboard}<div class="office-preview" id="officePreview" data-demo-zone="ribbon" aria-label="${escapeHTML(t.excelSimulation)}"><div class="preview-titlebar">${escapeHTML(t.excelWorkbookTitle)}</div><div class="preview-ribbon">${ribbonHTML()}</div><div class="guided-actions">${actions}</div>${excelScene(item)}${cursor}</div>${coach}</div>`;
    }
    return `<div class="guided-block" id="guidedBlock"><div class="guide-heading"><div><strong>${escapeHTML(t.visualGuide)}</strong><span>${escapeHTML(t.visualGuideHelp)}</span></div><span class="live-badge">${escapeHTML(t.stepByStep)}</span></div>${controls}${keyboard}<div class="office-preview" id="officePreview" data-demo-zone="ribbon" aria-label="${escapeHTML(t.wordSimulation)}"><div class="preview-titlebar">${escapeHTML(t.wordDocumentTitle)}</div><div class="preview-ribbon">${ribbonHTML()}</div><div class="guided-actions">${actions}</div><div class="word-page-wrap">${wordScene(item)}</div>${cursor}</div>${coach}</div>`;
  }

  function stripTags(value = '') {
    const node = document.createElement('div');
    node.innerHTML = value;
    return escapeHTML(node.textContent || '');
  }

  function imageHTML(image) {
    if (!image) return '';
    return `<figure class="real-shot"><div class="shot-header"><strong>${format(t.realScreenshot, { course: escapeHTML(course.name) })}</strong><span>${escapeHTML(t.referenceInterface)}</span></div><button class="zoom-image" type="button" data-src="${escapeHTML(image.file)}" data-caption="${escapeHTML(image.caption)}" aria-label="${escapeHTML(t.enlargeImage)}"><img src="${escapeHTML(image.file)}" alt="${escapeHTML(image.alt)}"></button><figcaption>${escapeHTML(image.caption)} · <a href="${escapeHTML(image.source)}" target="_blank" rel="noreferrer">${escapeHTML(t.microsoftSource)}</a></figcaption></figure>`;
  }

  function finishHTML() {
    if (current !== flatLessons.length - 1) return '';
    const remaining = flatLessons.length - completed.size;
    const complete = remaining === 0;
    return `<section class="course-finish ${complete ? 'complete' : ''}" id="courseFinish"><div class="finish-icon">${complete ? '✓' : '🏁'}</div><div><h2 id="finishTitle">${complete ? escapeHTML(t.courseComplete) : escapeHTML(t.almostComplete)}</h2><p id="finishText">${complete ? format(t.completedLessons, { total: flatLessons.length, course: escapeHTML(course.name) }) : format(remaining === 1 ? t.remainingOne : t.remainingMany, { remaining })}</p><button class="action-button" id="reviewIncomplete" type="button">${complete ? escapeHTML(t.reviewFromStart) : escapeHTML(t.firstIncomplete)}</button></div></section>`;
  }

  function renderLesson() {
    clearInterval(coachTimer);
    const item = flatLessons[current];
    const done = completed.has(lessonId(current));
    const savedTasks = Array.isArray(practiceState[lessonId(current)]) ? practiceState[lessonId(current)] : [];
    const objectives = item.objectives.map(value => `<li>${escapeHTML(value)}</li>`).join('');
    const steps = item.steps.map((value, index) => detailedStepHTML(item, value, index)).join('');
    const exerciseGroups = [
      {
        type: 'guided',
        title: t.guidedExercise,
        intro: item.practice.intro,
        tasks: item.practice.tasks
      },
      {
        type: 'independent',
        title: t.independentExercise,
        intro: t.independentIntro,
        tasks: [
          format(t.independentTask1, { title: item.title }),
          format(t.independentTask2, { course: course.name }),
          t.independentTask3
        ]
      },
      {
        type: 'challenge',
        title: t.challenge,
        intro: t.challengeIntro,
        tasks: [
          format(t.challengeTask1, { title: item.title }),
          t.challengeTask2,
          t.challengeTask3
        ]
      }
    ];
    if (item.lessonIndex === item.module.lessons.length - 1) {
      exerciseGroups.push({
        type: 'project',
        title: t.moduleProject,
        intro: format(t.projectIntro, { module: item.module.title }),
        tasks: [
          format(t.projectTask1, { lessons: item.module.lessons.map(lesson => lesson.title).join(' · ') }),
          format(t.projectTask2, { module: item.module.title }),
          format(t.projectTask3, { course: course.name })
        ]
      });
    }
    let taskIndex = 0;
    const exercises = exerciseGroups.map(group => {
      const groupTasks = group.tasks.map(task => {
        const index = taskIndex++;
        return `<label><input type="checkbox" data-task="${index}"${savedTasks[index] ? ' checked' : ''}><span>${escapeHTML(task)}</span></label>`;
      }).join('');
      return `<section class="exercise-group ${group.type}"><div class="exercise-label">${escapeHTML(group.title)}</div><p>${escapeHTML(group.intro)}</p><div class="task-list">${groupTasks}</div></section>`;
    }).join('');
    const totalTasks = taskIndex;
    const checkedTasks = savedTasks.slice(0, totalTasks).filter(Boolean).length;
    const options = item.quiz.options.map((option, index) => `<label class="quiz-option"><input type="radio" name="quiz" value="${index}"><span>${escapeHTML(option)}</span></label>`).join('');

    document.title = format(t.documentTitle, { title: item.title, course: course.name });
    $('#crumb').textContent = `${item.module.number} · ${item.module.title}`;
    $('#lessonPosition').textContent = `${current + 1} / ${flatLessons.length}`;
    prevButton.disabled = current === 0;
    nextButton.disabled = current === flatLessons.length - 1;

    lessonRoot.innerHTML = `
      <div class="eyebrow"><span class="tag">${escapeHTML(levelLabel(item))}</span><span class="tag neutral">${escapeHTML(item.duration)}</span><span class="tag neutral">${format(t.lessonPosition, { current: current + 1, total: flatLessons.length })}</span></div>
      <h1>${escapeHTML(item.title)}</h1>
      <p class="lead">${escapeHTML(item.intro)}</p>
      <section class="mission-card"><span>${escapeHTML(t.missionKicker)}</span><div><h2>${escapeHTML(item.practice.intro)}</h2><p>${format(t.missionHelp, { course: escapeHTML(course.name) })}</p></div></section>
      <section class="learning-card"><h2>${escapeHTML(t.learningEnd)}</h2><ul>${objectives}</ul></section>
      <section class="section"><h2 class="section-title">${format(t.doIn, { course: escapeHTML(course.name) })}</h2><div class="steps">${steps}</div><div class="tip"><strong>${escapeHTML(t.tip)}</strong> ${item.tip}</div></section>
      ${imageHTML(item.image)}
      ${previewHTML(item)}
      <section class="practice-card"><div class="practice-heading"><div><h2>${escapeHTML(t.practiceHeading)}</h2><p>${escapeHTML(t.practiceIntroduction)}</p></div><strong id="practiceProgress">${format(t.practiceProgress, { done: checkedTasks, total: totalTasks })}</strong></div><div class="exercise-program">${exercises}</div></section>
      <section class="quiz-card"><h2>${escapeHTML(t.verifyLearning)}</h2><p>${escapeHTML(item.quiz.question)}</p><div class="quiz-options">${options}</div><button class="action-button" id="checkAnswer" type="button">${escapeHTML(t.checkAnswer)}</button><div class="quiz-result" id="quizResult"></div><div class="completion-banner ${done ? 'show' : ''}" id="completionBanner"><span>✓</span><span>${escapeHTML(t.lessonComplete)} ${escapeHTML(current === flatLessons.length - 1 ? t.seeSummary : t.canContinue)}</span></div></section>
      ${finishHTML()}`;

    $('#checkAnswer').addEventListener('click', checkAnswer);
    document.querySelectorAll('[data-task]').forEach(input => input.addEventListener('change', updatePracticeState));
    const zoom = $('.zoom-image');
    if (zoom) zoom.addEventListener('click', openImage);
    const review = $('#reviewIncomplete');
    if (review) review.addEventListener('click', reviewIncomplete);
    setupCoach(item);
    updatePracticeState(false);
    renderLevelFilter();
    renderNav(search.value);
    updateProgress();
    save();
  }

  function updateFinishState() {
    const card = $('#courseFinish');
    if (!card) return;
    const remaining = flatLessons.length - completed.size;
    const complete = remaining === 0;
    card.classList.toggle('complete', complete);
    $('.finish-icon').textContent = complete ? '✓' : '🏁';
    $('#finishTitle').textContent = complete ? t.courseComplete : t.almostComplete;
    $('#finishText').textContent = complete ? format(t.completedLessons, { total: flatLessons.length, course: course.name }) : format(remaining === 1 ? t.remainingOne : t.remainingMany, { remaining });
    $('#reviewIncomplete').textContent = complete ? t.reviewFromStart : t.firstIncomplete;
  }

  function reviewIncomplete() {
    const index = flatLessons.findIndex((_, lessonIndex) => !completed.has(lessonId(lessonIndex)));
    goTo(index === -1 ? 0 : index);
  }

  function setupCoach(item) {
    const targets = [...document.querySelectorAll('.guide-target')];
    const dots = [...document.querySelectorAll('.guide-dot')];
    const preview = $('#officePreview');
    const cursor = $('#demoCursor');
    const text = $('#coachText');
    const count = $('#coachCount');
    const status = $('#coachStatus');
    const play = $('#coachPlay');
    const pause = $('#coachPause');
    const next = $('#coachNext');
    const speed = $('#coachSpeed');
    const doneButton = $('#coachDone');
    const ribbonTabs = [...document.querySelectorAll('[data-ribbon]')];
    const sheetCells = [...document.querySelectorAll('[data-cell]')];
    const cellReadout = $('#sceneCellRef');
    const block = $('#guidedBlock');
    let step = 0;
    let playing = false;
    let finished = false;
    const savedGuideSteps = Array.isArray(guideState[lessonId(current)]) ? guideState[lessonId(current)] : [];
    const doneSteps = new Set(savedGuideSteps.filter(index => Number.isInteger(index) && index >= 0 && index < targets.length));
    const setDemoSpeed = () => {
      const duration = Number(speed.value);
      block.style.setProperty('--demo-duration', `${duration}ms`);
      block.style.setProperty('--demo-phase-two', `${Math.round(duration * .3)}ms`);
      block.style.setProperty('--demo-phase-three', `${Math.round(duration * .6)}ms`);
    };
    setDemoSpeed();

    const stop = (announce = true) => {
      clearInterval(coachTimer);
      coachTimer = undefined;
      playing = false;
      play.disabled = false;
      pause.disabled = true;
      if (announce) status.textContent = t.demoPaused;
      block.classList.remove('is-playing');
    };

    const moveCursor = target => requestAnimationFrame(() => {
      if (!cursor || !preview || !target) return;
      const previewRect = preview.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      cursor.style.setProperty('--cursor-x', `${targetRect.left - previewRect.left + Math.min(targetRect.width * .72, targetRect.width - 18)}px`);
      cursor.style.setProperty('--cursor-y', `${targetRect.top - previewRect.top + targetRect.height * .62}px`);
    });

    const show = () => {
      const details = stepDetails(item, step);
      targets.forEach((target, index) => {
        target.classList.toggle('guide-active', index === step);
        target.classList.toggle('guide-complete', doneSteps.has(index));
        target.setAttribute('aria-current', index === step ? 'step' : 'false');
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === step);
        dot.classList.toggle('guide-complete', doneSteps.has(index));
      });
      count.textContent = `${step + 1}/${targets.length}`;
      text.textContent = details.action;
      $('#guideWhere').textContent = details.where;
      $('#guideDo').textContent = details.action;
      $('#guideResult').textContent = details.result;
      next.textContent = step === targets.length - 1 ? t.restartGuide : t.showNextPoint;
      doneButton.classList.toggle('done', doneSteps.has(step));
      doneButton.textContent = doneSteps.has(step) ? `✓ ${t.stepDone}` : `✓ ${t.markStepDone}`;
      doneButton.setAttribute('aria-pressed', String(doneSteps.has(step)));
      preview.dataset.demoZone = step === 0 ? 'ribbon' : step === targets.length - 1 ? 'result' : 'workspace';
      ribbonTabs.forEach(tab => tab.classList.toggle('tab-active', details.where.toLocaleLowerCase(t.locale).includes(tab.textContent.toLocaleLowerCase(t.locale))));
      const referenceMatch = `${details.where} ${details.action}`.match(/\b([A-F])\s*(1|2|3|4|5|7|9|10|11|20)\b/i);
      const reference = referenceMatch ? `${referenceMatch[1].toUpperCase()}${referenceMatch[2]}` : '';
      let selectedCell;
      sheetCells.forEach(cell => {
        const active = Boolean(reference) && cell.dataset.cell === reference;
        cell.classList.toggle('selected', active);
        if (active) selectedCell = cell;
      });
      if (cellReadout) cellReadout.textContent = reference || '—';
      if (selectedCell) {
        const viewport = selectedCell.closest('.sheet-viewport');
        if (viewport) {
          viewport.scrollTop = Math.max(0, selectedCell.offsetTop - 82);
          viewport.scrollLeft = Math.max(0, selectedCell.offsetLeft - 120);
        }
      }
      moveCursor(targets[step]);
    };
    const advance = (manual = true) => {
      if (manual) stop();
      step = step === targets.length - 1 ? 0 : step + 1;
      finished = false;
      play.innerHTML = `▶ ${escapeHTML(t.playDemo)}`;
      show();
    };

    const start = () => {
      clearInterval(coachTimer);
      if (finished) step = 0;
      finished = false;
      playing = true;
      block.classList.add('is-playing');
      play.disabled = true;
      pause.disabled = false;
      status.textContent = t.demoPlaying;
      show();
      coachTimer = setInterval(() => {
        if (step === targets.length - 1) {
          stop(false);
          finished = true;
          status.textContent = t.demoFinished;
          play.innerHTML = `↻ ${escapeHTML(t.replayDemo)}`;
          return;
        }
        advance(false);
      }, Number(speed.value));
    };

    const toggleDone = () => {
      if (doneSteps.has(step)) doneSteps.delete(step);
      else doneSteps.add(step);
      guideState[lessonId(current)] = [...doneSteps].sort((a, b) => a - b);
      save();
      show();
      if (doneSteps.size === targets.length) showToast(t.guideComplete);
    };

    targets.forEach((target, index) => target.addEventListener('click', () => { stop(); step = index; finished = false; show(); }));
    dots.forEach((dot, index) => dot.addEventListener('click', () => { stop(); step = index; finished = false; show(); }));
    next.addEventListener('click', () => advance(true));
    play.addEventListener('click', start);
    pause.addEventListener('click', stop);
    doneButton.addEventListener('click', toggleDone);
    speed.addEventListener('change', () => {
      const resume = playing;
      stop(false);
      setDemoSpeed();
      status.textContent = resume ? t.speedChanged : t.demoPaused;
      if (resume) start();
    });
    window.addEventListener('resize', () => moveCursor(targets[step]), { passive: true });
    show();
  }

  function stripToText(value = '') {
    const node = document.createElement('div');
    node.innerHTML = value;
    return node.textContent || '';
  }

  function updatePracticeState(showMessage = true) {
    const tasks = [...document.querySelectorAll('[data-task]')];
    const state = tasks.map(task => task.checked);
    practiceState[lessonId(current)] = state;
    const progress = $('#practiceProgress');
    if (progress) progress.textContent = format(t.practiceProgress, { done: state.filter(Boolean).length, total: tasks.length });
    save();
    if (showMessage && tasks.length && tasks.every(task => task.checked)) showToast(t.practiceComplete);
  }

  function checkAnswer() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    const result = $('#quizResult');
    if (!selected) {
      result.className = 'quiz-result show wrong';
      result.textContent = t.chooseAnswer;
      return;
    }
    const item = flatLessons[current];
    const correct = Number(selected.value) === item.quiz.answer;
    result.className = `quiz-result show ${correct ? 'correct' : 'wrong'}`;
    result.innerHTML = correct ? `<strong>${escapeHTML(t.correct)}</strong> ${escapeHTML(item.quiz.explain)}` : `<strong>${escapeHTML(t.notYet)}</strong> ${escapeHTML(t.reviewTryAgain)}`;
    if (correct) {
      completed.add(lessonId(current));
      $('#completionBanner').classList.add('show');
      updateProgress();
      renderNav(search.value);
      save();
      updateFinishState();
      showToast(t.lessonCompleteToast);
    }
  }

  function goTo(index) {
    current = Math.max(0, Math.min(index, flatLessons.length - 1));
    renderLesson();
    lessonRoot.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  }

  function openImage(event) {
    const button = event.currentTarget;
    $('#dialogImage').src = button.dataset.src;
    $('#dialogImage').alt = button.dataset.caption;
    $('#dialogCaption').textContent = button.dataset.caption;
    $('#imageDialog').showModal();
  }

  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function applyColorScheme(scheme) {
    const dark = scheme === 'dark';
    document.documentElement.dataset.colorScheme = dark ? 'dark' : 'light';
    const button = $('#themeButton');
    if (!button) return;
    const label = dark ? t.activateLightMode : t.activateDarkMode;
    button.textContent = dark ? '☀' : '☾';
    button.setAttribute('aria-label', label);
    button.title = label;
  }

  const initialColorScheme = document.documentElement.dataset.colorScheme === 'dark' ? 'dark' : 'light';
  applyColorScheme(initialColorScheme);
  setupGlobalNavigation();

  function closeMenu() {
    document.body.classList.remove('menu-open');
    $('#menuButton').setAttribute('aria-expanded', 'false');
  }

  prevButton.addEventListener('click', () => goTo(current - 1));
  nextButton.addEventListener('click', () => goTo(current + 1));
  search.addEventListener('input', () => renderNav(search.value));
  $('#menuButton').addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    $('#menuButton').setAttribute('aria-expanded', String(open));
  });
  $('#scrim').addEventListener('click', closeMenu);
  $('#focusButton').addEventListener('click', () => document.body.classList.toggle('focus-mode'));
  $('#themeButton').addEventListener('click', () => {
    const next = document.documentElement.dataset.colorScheme === 'dark' ? 'light' : 'dark';
    applyColorScheme(next);
    storage.set('office-academy-color-scheme', next);
    showToast(next === 'dark' ? t.darkModeEnabled : t.lightModeEnabled);
  });
  $('#closeImage').addEventListener('click', () => $('#imageDialog').close());
  $('#imageDialog').addEventListener('click', event => { if (event.target === $('#imageDialog')) $('#imageDialog').close(); });
  $('#resetProgress').addEventListener('click', () => {
    if (!window.confirm(t.resetConfirm)) return;
    completed = new Set();
    practiceState = {};
    current = 0;
    save();
    renderLesson();
    showToast(t.progressReset);
  });
  document.addEventListener('keydown', event => {
    if (event.altKey && event.key === 'ArrowRight' && current < flatLessons.length - 1) goTo(current + 1);
    if (event.altKey && event.key === 'ArrowLeft' && current > 0) goTo(current - 1);
  });

  renderLesson();
})();
