# CLAUDE.md — Contexto do projeto

> Arquivo lido automaticamente pelo Claude Code ao abrir o projeto.
> Mantenha-o atualizado: é a memória compartilhada entre o VSCode e as conversas no chat.
> Quando tomar uma decisão importante, registre aqui em uma linha.

## O que é

Protótipo navegável (estático) de uma **Plataforma de gestão de Programas de Pós-Graduação (PPG)**.
Objetivo: apresentar a proposta a uma equipe não-técnica. Todas as funcionalidades são **mockadas** — nada grava em servidor. O foco é demonstrar **fluxo** e **experiência**.

Desenvolvedor: solo (uma pessoa cuida de tudo).

## Stack

- HTML multipage (um arquivo por tela).
- Tailwind via CDN (`cdn.tailwindcss.com?plugins=forms,container-queries`) — config inline em `assets/theme.js`.
- JavaScript puro, sem framework, sem build step.
- Ícones: Material Symbols Outlined. Fontes: Hanken Grotesk (títulos) + Inter (corpo/dados).
- **Sem back-end, sem banco, sem npm.** Deploy é só subir os arquivos estáticos.

## Sistema de design — "High-Value Forest"

Verde-floresta institucional sobre fundos claros e quentes. Transmite estabilidade e seriedade acadêmica.

- `primary` #154212 · `primary-container` #2d5a27 · `success` #88b04b
- fundo `background`/`surface` #faf9f6 · cartões `surface-container-lowest` #ffffff
- Cantos suaves, bordas finas 1px (`surface-container-high`), sombras discretas.
- Tokens completos em `assets/theme.js` (não duplicar cores soltas nas telas; usar as classes do tema).

## Arquitetura de arquivos

```
index.html                 → Login + escolha de perfil (NÃO usa layout.js)
painel-nacional.html       → Dashboard do Gestor Nacional
painel-coordenador.html    → Dashboard do Coordenador
ppgs.html                  → Lista de PPGs
cadastro-ppg.html          → Cadastro/edição de PPG + linhas temáticas
internacionalizacao.html   → Convênios internacionais (tabela)
convenio.html              → Detalhe/edição de um convênio
comites.html               → Governança de comitês temáticos (abas)
relatorios.html            → Centro de Relatórios CAPES
configuracoes.html         → Perfil e preferências
assets/theme.js            → Tema: fontes, ícones, config Tailwind
assets/app.js              → Mocks: perfil, toasts, filtros, data-bindings
assets/layout.js           → Sidebar + topbar compartilhadas (objeto NAV define o menu por perfil)
```

## Convenções importantes (seguir ao editar/criar telas)

- Toda tela interna tem, no topo: `<div data-layout data-title="..." data-crumb="..."></div>` e envolve o conteúdo em `<main id="page">`. O `layout.js` injeta sidebar e topbar.
- A tela de **login é a exceção**: não carrega `layout.js`.
- Ordem dos scripts no fim do `<body>`: `theme.js` (no `<head>`), depois `app.js` e `layout.js`.
- Ações fake: botão com `data-mock="mensagem"` mostra toast; form com `data-mock-form="mensagem"` confirma sem enviar.
- Filtro de tabela: `input[data-filter="#idDaTabela"]`.
- Conteúdo por perfil: `data-only="gestor"` ou `data-only="coordenador"`.
- Binding de dados do perfil: `data-bind="nome|papel|escopo|avatar"`.
- Para um menu novo aparecer, adicione o item no objeto `NAV` dentro de `assets/layout.js`.

## Os dois perfis (troca visível pelo avatar no topo)

| | Gestor Nacional | Coordenador de PPG |
|---|---|---|
| Pessoa (mock) | Dra. Helena Souza | Prof. Marcos Rebouças |
| Visão | Rede nacional / CAPES | Apenas o seu programa |
| Home | painel-nacional.html | painel-coordenador.html |

Perfil ativo é guardado em `sessionStorage` (chave `ppg_profile`).

## Decisões já tomadas

- Nome do produto: "Programa de Pós-Graduação" (descartada a marca antiga "EcoSystem/Admin Global").
- Multipage em vez de single-page app (decisão do dev).
- O "seletor de perfil" pós-login foi **integrado à tela de login** em vez de virar tela separada (menos cliques).
- Documentação para humanos: `PROPOSTA.md` (equipe) e `README.md` (deploy).

## Próximos passos / em aberto

- Validar o fluxo com a equipe e ajustar telas/campos.
- Definir integrações prioritárias (Sucupira é a candidata natural).
- Especificar regras de permissão por perfil em detalhe.
- (Opcional) versão "offline": congelar Tailwind + fontes localmente para apresentação sem internet.

## Como rodar

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```
