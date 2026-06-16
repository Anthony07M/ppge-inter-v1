/* ============================================================
   Tema compartilhado — Plataforma Programa de Pós-Graduação
   Identidade "High-Value Forest" reaproveitada do design system
   gerado no Stitch. Carregue ESTE arquivo logo após o CDN do
   Tailwind em todas as páginas para manter consistência visual.
   ============================================================ */
(function () {
  // Injeta as fontes e os ícones uma única vez.
  var head = document.head;
  function link(href) {
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = href;
    head.appendChild(l);
  }
  link('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Hanken+Grotesk:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  // Estilos base globais.
  var style = document.createElement('style');
  style.textContent = [
    ".material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;vertical-align:middle;}",
    "body{font-family:'Inter',sans-serif;background-color:#faf9f6;color:#1a1c1a;}",
    "h1,h2,h3,h4,.font-display{font-family:'Hanken Grotesk',sans-serif;}",
    /* foco acessível */
    "a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,[tabindex]:focus-visible{outline:2px solid #2d5a27;outline-offset:2px;border-radius:4px;}",
    /* transição suave para reduzir sensação de 'recarga' entre páginas */
    "@media (prefers-reduced-motion:no-preference){.page-enter{animation:fade .25s ease;}@keyframes fade{from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:none;}}}",
    /* scrollbar discreta */
    "::-webkit-scrollbar{width:10px;height:10px;}::-webkit-scrollbar-thumb{background:#dadad7;border-radius:9999px;}::-webkit-scrollbar-thumb:hover{background:#c2c9bb;}"
  ].join('\n');
  head.appendChild(style);

  // Configuração do Tailwind (precisa existir antes do Tailwind processar).
  window.tailwind = window.tailwind || {};
  window.tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'on-tertiary-container': '#bec5bd', 'outline-variant': '#c2c9bb',
          'tertiary-fixed': '#dde4dc', 'primary': '#154212', 'on-tertiary-fixed': '#161d18',
          'error': '#ba1a1a', 'on-surface-variant': '#42493e', 'on-surface': '#1a1c1a',
          'on-tertiary': '#ffffff', 'primary-fixed': '#bcf0ae', 'on-error': '#ffffff',
          'surface-variant': '#e2e3df', 'background': '#faf9f6', 'on-primary-fixed': '#002201',
          'primary-container': '#2d5a27', 'secondary-fixed-dim': '#c5c7c5', 'on-background': '#1a1c1a',
          'on-error-container': '#93000a', 'on-tertiary-fixed-variant': '#414843',
          'surface-tint': '#3b6934', 'secondary-container': '#dee0de', 'tertiary-container': '#4b524c',
          'inverse-on-surface': '#f1f1ed', 'on-primary': '#ffffff', 'surface-container-high': '#e8e8e5',
          'surface': '#faf9f6', 'on-secondary-fixed': '#191c1b', 'on-secondary-container': '#606362',
          'outline': '#72796e', 'on-primary-fixed-variant': '#23501e', 'on-primary-container': '#9dd090',
          'surface-dim': '#dadad7', 'secondary': '#5c5f5e', 'tertiary-fixed-dim': '#c1c8c1',
          'surface-container-low': '#f4f4f0', 'primary-fixed-dim': '#a1d494', 'surface-bright': '#faf9f6',
          'surface-container-lowest': '#ffffff', 'tertiary': '#343b36', 'inverse-surface': '#2f312f',
          'inverse-primary': '#a1d494', 'on-secondary': '#ffffff', 'secondary-fixed': '#e1e3e1',
          'surface-container': '#eeeeea', 'surface-container-highest': '#e2e3df', 'on-secondary-fixed-variant': '#444746',
          'error-container': '#ffdad6', 'success': '#88b04b'
        },
        borderRadius: { 'DEFAULT': '0.25rem', 'lg': '0.5rem', 'xl': '0.75rem', 'full': '9999px' },
        fontFamily: {
          'display': ['Hanken Grotesk', 'sans-serif'],
          'headline-xl': ['Hanken Grotesk'], 'headline-lg': ['Hanken Grotesk'],
          'headline-md': ['Hanken Grotesk'], 'headline-lg-mobile': ['Hanken Grotesk'],
          'body-lg': ['Inter'], 'body-md': ['Inter'], 'body-sm': ['Inter'],
          'label-md': ['Inter'], 'label-sm': ['Inter']
        },
        fontSize: {
          'headline-xl': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '700' }],
          'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '600' }],
          'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
          'headline-lg-mobile': ['28px', { lineHeight: '36px', fontWeight: '600' }],
          'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
          'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
          'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
          'label-md': ['14px', { lineHeight: '16px', letterSpacing: '0.01em', fontWeight: '600' }],
          'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.03em', fontWeight: '500' }]
        }
      }
    }
  };
})();
