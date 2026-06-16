/* ============================================================
   app.js — camada de simulação do protótipo
   Tudo aqui é "da boca pra fora": nenhum dado é salvo de verdade
   além de um sessionStorage para lembrar o perfil escolhido e dar
   continuidade à navegação. Serve para demonstrar o FLUXO.
   ============================================================ */
(function () {
  'use strict';

  // ---------- Perfil ativo (Gestor Nacional x Coordenador) ----------
  var PROFILES = {
    gestor: {
      id: 'gestor',
      nome: 'Dra. Helena Souza',
      papel: 'Gestor Nacional',
      escopo: 'Visão nacional · CAPES',
      avatar: 'HS',
      home: 'painel-nacional.html'
    },
    coordenador: {
      id: 'coordenador',
      nome: 'Prof. Marcos Rebouças',
      papel: 'Coordenador de PPG',
      escopo: 'Informática Aplicada · UFXX',
      avatar: 'MR',
      home: 'painel-coordenador.html'
    }
  };

  function getProfile() {
    var id = sessionStorage.getItem('ppg_profile') || 'gestor';
    return PROFILES[id] || PROFILES.gestor;
  }
  function setProfile(id) {
    if (PROFILES[id]) sessionStorage.setItem('ppg_profile', id);
  }

  // ---------- Toast ----------
  function toast(msg, kind) {
    kind = kind || 'success';
    var host = document.getElementById('toast-host');
    if (!host) {
      host = document.createElement('div');
      host.id = 'toast-host';
      host.style.cssText = 'position:fixed;right:24px;bottom:24px;z-index:9999;display:flex;flex-direction:column;gap:8px;';
      document.body.appendChild(host);
    }
    var palette = {
      success: { bg: '#2d5a27', icon: 'check_circle' },
      info: { bg: '#343b36', icon: 'info' },
      error: { bg: '#ba1a1a', icon: 'error' }
    }[kind] || { bg: '#2d5a27', icon: 'check_circle' };

    var el = document.createElement('div');
    el.style.cssText = 'display:flex;align-items:center;gap:10px;background:' + palette.bg +
      ';color:#fff;padding:12px 16px;border-radius:8px;box-shadow:0 8px 24px rgba(45,90,39,.18);' +
      'font:500 14px Inter,sans-serif;max-width:360px;transform:translateY(8px);opacity:0;transition:.2s;';
    el.innerHTML = '<span class="material-symbols-outlined" style="font-size:20px">' + palette.icon + '</span><span>' + msg + '</span>';
    host.appendChild(el);
    requestAnimationFrame(function () { el.style.transform = 'none'; el.style.opacity = '1'; });
    setTimeout(function () {
      el.style.opacity = '0'; el.style.transform = 'translateY(8px)';
      setTimeout(function () { el.remove(); }, 220);
    }, 2600);
  }

  // ---------- Intercepta ações "fake" ----------
  // Qualquer elemento com data-mock="mensagem" mostra um toast e não recarrega.
  // data-mock-kind opcional (success|info|error). data-goto navega de fato.
  function wireMockActions(root) {
    (root || document).querySelectorAll('[data-mock]').forEach(function (el) {
      if (el.__wired) return; el.__wired = true;
      el.addEventListener('click', function (e) {
        if (el.tagName === 'A' && !el.getAttribute('data-goto')) e.preventDefault();
        toast(el.getAttribute('data-mock'), el.getAttribute('data-mock-kind'));
      });
    });
    // Formulários nunca enviam de verdade.
    (root || document).querySelectorAll('form[data-mock-form]').forEach(function (f) {
      if (f.__wired) return; f.__wired = true;
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        toast(f.getAttribute('data-mock-form') || 'Dados salvos', 'success');
      });
    });
  }

  // ---------- Aplica perfil em qualquer header/sidebar ----------
  // Elementos com data-bind="nome|papel|escopo|avatar" recebem o valor.
  function applyProfile(root) {
    var p = getProfile();
    (root || document).querySelectorAll('[data-bind]').forEach(function (el) {
      var key = el.getAttribute('data-bind');
      if (p[key] != null) el.textContent = p[key];
    });
    // Mostra/esconde por perfil: data-only="gestor" ou data-only="coordenador"
    (root || document).querySelectorAll('[data-only]').forEach(function (el) {
      el.style.display = (el.getAttribute('data-only') === p.id) ? '' : 'none';
    });
    // Marca o link de navegação da página atual.
    var here = location.pathname.split('/').pop();
    (root || document).querySelectorAll('[data-nav]').forEach(function (el) {
      if (el.getAttribute('data-nav') === here) el.setAttribute('data-active', 'true');
    });
  }

  // ---------- Troca de perfil (botão no header) ----------
  function switchProfile() {
    var p = getProfile();
    var next = p.id === 'gestor' ? 'coordenador' : 'gestor';
    setProfile(next);
    toast('Perfil alterado para ' + PROFILES[next].papel, 'info');
    setTimeout(function () { location.href = PROFILES[next].home; }, 500);
  }

  // ---------- Filtro de tabela simples (busca cliente) ----------
  // input[data-filter="#idDaTabela"] filtra linhas <tbody> por texto.
  function wireFilters(root) {
    (root || document).querySelectorAll('[data-filter]').forEach(function (input) {
      if (input.__wired) return; input.__wired = true;
      input.addEventListener('input', function () {
        var table = document.querySelector(input.getAttribute('data-filter'));
        if (!table) return;
        var q = input.value.trim().toLowerCase();
        table.querySelectorAll('tbody tr').forEach(function (tr) {
          tr.style.display = tr.textContent.toLowerCase().indexOf(q) > -1 ? '' : 'none';
        });
      });
    });
  }

  // ---------- Boot ----------
  function boot() {
    document.body.classList.add('page-enter');
    applyProfile(document);
    wireMockActions(document);
    wireFilters(document);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else { boot(); }

  // Exposto para uso inline nas páginas.
  window.PPG = {
    toast: toast,
    getProfile: getProfile,
    setProfile: setProfile,
    switchProfile: switchProfile,
    profiles: PROFILES,
    wire: function () { wireMockActions(); wireFilters(); applyProfile(); }
  };
})();
