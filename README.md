# Plataforma Programa de Pós-Graduação — Protótipo

Protótipo navegável (HTML + Tailwind via CDN + JavaScript) para apresentação da proposta a equipes não-técnicas. Todas as funcionalidades são **simuladas** (mock): nenhum dado é gravado em servidor. O objetivo é demonstrar o **fluxo** e a **experiência** das telas.

## Como visualizar

Não precisa instalar nada. Há duas formas:

1. **Abrir direto:** dê um duplo-clique em `index.html`. Funciona em qualquer navegador moderno com internet (o Tailwind e as fontes são carregados via CDN).
2. **Servidor local (recomendado para navegação entre páginas):**
   ```bash
   # dentro da pasta do projeto
   python3 -m http.server 8000
   # depois abra http://localhost:8000 no navegador
   ```

## Deploy estático

O projeto é 100% estático. Basta subir a pasta inteira para qualquer um destes serviços (todos têm plano gratuito):

- **Netlify:** arraste a pasta na área de "deploy manual".
- **GitHub Pages:** suba os arquivos num repositório e ative o Pages na branch principal.
- **Vercel / Cloudflare Pages:** conecte o repositório; não há etapa de build.

Requisito único: acesso à internet do lado de quem visualiza, porque o estilo (Tailwind) e os ícones vêm de CDN.

## Estrutura de arquivos

```
.
├── index.html                 → Login + escolha de perfil
├── painel-nacional.html       → Dashboard do Gestor Nacional
├── painel-coordenador.html    → Dashboard do Coordenador
├── ppgs.html                  → Lista de Programas de Pós-Graduação
├── cadastro-ppg.html          → Cadastro/edição de PPG e linhas temáticas
├── internacionalizacao.html   → Convênios internacionais (tabela)
├── convenio.html              → Detalhe/edição de um convênio
├── comites.html               → Governança de comitês temáticos
├── relatorios.html            → Centro de Relatórios CAPES
├── configuracoes.html         → Perfil e preferências
└── assets/
    ├── theme.js               → Tema (cores, fontes, config Tailwind)
    ├── app.js                 → Mocks: perfil, toasts, filtros, navegação
    └── layout.js              → Sidebar e topbar compartilhadas
```

## Como funcionam os mocks

- **Perfis:** a escolha (Gestor Nacional / Coordenador) é guardada em `sessionStorage`. O menu lateral e as telas iniciais mudam conforme o perfil. O botão do avatar (canto superior direito) alterna entre os dois a qualquer momento.
- **Ações simuladas:** botões com `data-mock="mensagem"` mostram um aviso (toast) em vez de executar algo real. Formulários com `data-mock-form` exibem confirmação de "salvo" sem enviar dados.
- **Filtros de tabela:** os campos de busca filtram as linhas visíveis no próprio navegador (`data-filter`).

## Personalizar

- **Cores e fontes:** edite `assets/theme.js` (bloco `colors` e `fontFamily`).
- **Itens do menu por perfil:** edite o objeto `NAV` em `assets/layout.js`.
- **Dados de exemplo:** estão diretamente no HTML de cada tela (tabelas, KPIs, nomes).

## Observação sobre a apresentação

Como o estilo depende de CDN, recomenda-se testar a navegação com antecedência no local da apresentação (rede/firewall). Se houver risco de internet instável, é possível "congelar" o Tailwind e as fontes localmente — me avise que preparo essa versão offline.
