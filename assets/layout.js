/* ============================================================
   layout.js — injeta a sidebar e a topbar comuns a todas as
   telas internas. Mantém a navegação coerente e sem links mortos.
   Use em páginas internas adicionando:
     <div data-layout data-title="Título da página"></div>
   e envolvendo o conteúdo em <main id="page"> ... </main>
   ============================================================ */
(function () {
  'use strict';

  // Itens de navegação por perfil.
  var NAV = {
    gestor: [
      { icon: 'dashboard', label: 'Painel', href: 'painel-nacional.html' },
      { icon: 'school', label: 'PPGs', href: 'ppgs.html' },
      { icon: 'public', label: 'Internacionalização', href: 'internacionalizacao.html' },
      { icon: 'groups', label: 'Comitês Temáticos', href: 'comites.html' },
      { icon: 'bar_chart', label: 'Relatórios CAPES', href: 'relatorios.html' },
      { icon: 'settings', label: 'Configurações', href: 'configuracoes.html' }
    ],
    coordenador: [
      { icon: 'dashboard', label: 'Meu Painel', href: 'painel-coordenador.html' },
      { icon: 'edit_note', label: 'Cadastro do PPG', href: 'cadastro-ppg.html' },
      { icon: 'public', label: 'Convênios', href: 'internacionalizacao.html' },
      { icon: 'bar_chart', label: 'Relatórios CAPES', href: 'relatorios.html' },
      { icon: 'settings', label: 'Configurações', href: 'configuracoes.html' }
    ]
  };

  function profile() {
    var id = sessionStorage.getItem('ppg_profile') || 'gestor';
    return id;
  }

  function buildSidebar(activeFile) {
    var pid = profile();
    var items = NAV[pid] || NAV.gestor;
    var links = items.map(function (it) {
      var active = it.href === activeFile;
      return '<a href="' + it.href + '" ' + (active ? 'aria-current="page"' : '') +
        ' class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-body-sm font-medium transition-colors ' +
        (active
          ? 'bg-primary text-on-primary shadow-sm'
          : 'text-on-surface-variant hover:bg-surface-container') + '">' +
        '<span class="material-symbols-outlined" style="font-size:20px">' + it.icon + '</span>' +
        '<span>' + it.label + '</span></a>';
    }).join('');

    return '' +
      '<aside class="hidden lg:flex flex-col w-64 shrink-0 bg-surface-container-lowest border-r border-surface-container-high min-h-screen sticky top-0">' +
        '<div class="px-5 py-5 border-b border-surface-container-high">' +
          '<div class="flex items-center gap-2.5">' +
            '<div class="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary">' +
              '<span class="material-symbols-outlined" style="font-size:20px">account_balance</span></div>' +
            '<div><p class="font-display font-bold text-on-surface leading-tight">Pós-Graduação</p>' +
            '<p class="text-label-sm text-on-surface-variant" data-bind="escopo"></p></div>' +
          '</div>' +
        '</div>' +
        '<nav class="flex-1 px-3 py-4 flex flex-col gap-1">' + links + '</nav>' +
        '<div class="p-3 border-t border-surface-container-high">' +
          '<button data-mock="Novo registro iniciado" class="w-full flex items-center justify-center gap-2 bg-primary-container text-on-primary py-2.5 rounded-lg text-body-sm font-semibold hover:bg-primary transition-colors">' +
          '<span class="material-symbols-outlined" style="font-size:20px">add</span>Novo Registro</button>' +
        '</div>' +
      '</aside>';
  }

  function buildTopbar(title, crumb) {
    var crumbHtml = crumb ? '<p class="text-label-sm text-on-surface-variant mb-0.5">' + crumb + '</p>' : '';
    return '' +
      '<header class="sticky top-0 z-30 bg-surface-bright/90 backdrop-blur border-b border-surface-container-high">' +
        '<div class="flex items-center gap-4 px-6 py-3.5">' +
          // botão menu mobile
          '<button onclick="PPG.toast(\'Menu disponível no desktop neste protótipo\',\'info\')" class="lg:hidden text-on-surface-variant"><span class="material-symbols-outlined">menu</span></button>' +
          '<div class="flex-1 min-w-0">' + crumbHtml +
            '<h1 class="font-display text-headline-md text-primary truncate">' + (title || '') + '</h1>' +
          '</div>' +
          '<div class="hidden md:flex items-center gap-2 bg-surface-container-low rounded-lg px-3 py-2 w-72">' +
            '<span class="material-symbols-outlined text-on-surface-variant" style="font-size:20px">search</span>' +
            '<input data-mock="" placeholder="Buscar recursos…" class="bg-transparent outline-none text-body-sm w-full placeholder:text-on-surface-variant">' +
          '</div>' +
          '<button data-mock="Nenhuma notificação nova" class="relative text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">notifications</span>' +
            '<span class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-error rounded-full"></span></button>' +
          '<button data-mock="Central de ajuda" class="text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">help</span></button>' +
          // chip de perfil + troca
          '<button onclick="PPG.switchProfile()" title="Trocar de perfil" class="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full hover:bg-surface-container transition-colors">' +
            '<div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-label-sm font-bold" data-bind="avatar"></div>' +
            '<div class="text-left hidden sm:block"><p class="text-label-sm font-semibold text-on-surface leading-tight" data-bind="nome"></p>' +
            '<p class="text-label-sm text-on-surface-variant leading-tight" data-bind="papel"></p></div>' +
            '<span class="material-symbols-outlined text-on-surface-variant" style="font-size:18px">unfold_more</span>' +
          '</button>' +
        '</div>' +
        // faixa indicadora do perfil ativo
        '<div class="px-6 py-1.5 bg-primary/5 border-t border-primary/10 flex items-center gap-2 text-label-sm text-primary">' +
          '<span class="material-symbols-outlined" style="font-size:16px">visibility</span>' +
          'Você está navegando como <strong data-bind="papel"></strong> — clique no avatar para alternar de perfil.' +
        '</div>' +
      '</header>';
  }

  function mount() {
    var slot = document.querySelector('[data-layout]');
    if (!slot) return;
    var title = slot.getAttribute('data-title') || '';
    var crumb = slot.getAttribute('data-crumb') || '';
    var activeFile = location.pathname.split('/').pop();

    var wrapper = document.createElement('div');
    wrapper.className = 'flex min-h-screen';
    wrapper.innerHTML = buildSidebar(activeFile) +
      '<div class="flex-1 min-w-0 flex flex-col">' + buildTopbar(title, crumb) +
      '<div id="layout-content" class="flex-1"></div></div>';

    // Move o <main id="page"> para dentro do layout.
    var page = document.getElementById('page');
    slot.replaceWith(wrapper);
    if (page) wrapper.querySelector('#layout-content').appendChild(page);

    if (window.PPG) window.PPG.wire();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else { mount(); }
})();
