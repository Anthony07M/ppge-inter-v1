# Proposta — Plataforma Programa de Pós-Graduação

Documento de apresentação do protótipo. Escrito para leitura por toda a equipe, técnica ou não.

## 1. O que é

Uma plataforma única para **gerir Programas de Pós-Graduação (PPG)** em dois níveis:

- **Visão nacional (governança):** acompanhar a rede de universidades, convênios internacionais, comitês temáticos e indicadores CAPES de todos os programas.
- **Visão do programa (coordenação):** cada coordenador gerencia o cadastro do seu PPG, suas linhas de pesquisa, convênios e a preparação dos dados para a CAPES/Sucupira.

O protótipo é navegável e usa dados fictícios. Serve para alinhar a equipe sobre **como o sistema vai funcionar** antes de qualquer desenvolvimento.

## 2. Os dois perfis de usuário

A plataforma reconhece quem está usando e adapta o que aparece. No protótipo, a troca é visível: basta clicar no avatar (canto superior direito) ou escolher o perfil já na tela de login.

| | **Gestor Nacional** | **Coordenador de PPG** |
|---|---|---|
| Visão | Toda a rede nacional | Apenas o seu programa |
| Tela inicial | Dashboard Nacional | Painel do Programa |
| Foco | Monitorar, comparar, auditar | Cadastrar, atualizar, prestar contas |
| Menu | PPGs, Internacionalização, Comitês, Relatórios | Cadastro do PPG, Convênios, Relatórios |

## 3. O fluxo de navegação

```
                          ┌─────────────────┐
                          │   LOGIN          │
                          │ (escolhe perfil) │
                          └───────┬─────────┘
                  ┌───────────────┴───────────────┐
                  ▼                               ▼
        ┌──────────────────┐            ┌──────────────────────┐
        │ GESTOR NACIONAL  │            │ COORDENADOR DE PPG    │
        │ Dashboard        │            │ Painel do Programa    │
        └───────┬──────────┘            └──────────┬───────────┘
                │                                   │
   ┌────────────┼─────────────┐         ┌───────────┼───────────┐
   ▼            ▼             ▼         ▼            ▼           ▼
┌──────┐  ┌───────────┐  ┌─────────┐ ┌──────────┐ ┌─────────┐ ┌──────────┐
│ PPGs │  │Internacio-│  │Comitês  │ │Cadastro  │ │Convênios│ │Relatórios│
│lista │  │nalização  │  │temáticos│ │do PPG    │ │         │ │CAPES     │
└──┬───┘  └────┬──────┘  └─────────┘ └──────────┘ └────┬────┘ └──────────┘
   ▼           ▼                                        ▼
┌──────────┐ ┌────────────┐                      ┌────────────┐
│Cadastro  │ │Detalhe do  │                      │Detalhe do  │
│do PPG    │ │convênio    │                      │convênio    │
└──────────┘ └────────────┘                      └────────────┘
```

Ambos os perfis compartilham as telas de **Convênios**, **Relatórios** e **Configurações**, mas com escopo de dados diferente.

## 4. As telas, uma a uma

1. **Login (`index.html`)** — Acesso institucional com e-mail/senha ou SSO. Aqui o usuário também escolhe entrar como Gestor ou Coordenador, o que define toda a navegação seguinte.

2. **Dashboard Nacional (`painel-nacional.html`)** — Visão macro do Gestor: total de universidades, PPGs conectados, produções e convênios; mapa de distribuição pelo país; ranking das redes coordenadoras.

3. **Painel do Programa (`painel-coordenador.html`)** — Visão do Coordenador: conceito CAPES, corpo docente, discentes, produção do ano, alerta de prazo da coleta Sucupira e lista de pendências.

4. **Lista de PPGs (`ppgs.html`)** — Tabela de todos os programas com busca, filtros e situação (ativo, em avaliação). É o ponto de entrada para abrir e editar cada cadastro.

5. **Cadastro de PPG (`cadastro-ppg.html`)** — Formulário com dados institucionais (nível, modalidade, conceito, coordenação) e gestão das linhas de pesquisa (adicionar/remover).

6. **Internacionalização (`internacionalizacao.html`)** — Tabela de convênios com universidades estrangeiras, filtros por país e tipo de acordo, e indicadores (países parceiros, alunos em intercâmbio, acordos ativos).

7. **Detalhe do Convênio (`convenio.html`)** — Edição completa de um acordo: vigência, objeto, documentos anexos e estatísticas da parceria.

8. **Comitês Temáticos (`comites.html`)** — Governança de um comitê (ex.: Saúde Única), com abas de membros, universidades envolvidas e impacto/produção (gráficos e publicações recentes).

9. **Relatórios CAPES (`relatorios.html`)** — Geração e exportação (Excel/PDF) de indicadores baseados na Plataforma Sucupira.

10. **Configurações (`configuracoes.html`)** — Perfil do usuário, preferências de notificação e idioma, troca de perfil e encerramento de sessão.

## 5. O que está simulado

Por ser um protótipo de proposta, estas ações **mostram o comportamento esperado, mas não gravam dados**:

- Login e troca de perfil (guardados apenas durante a sessão do navegador).
- Botões "Salvar", "Exportar", "Gerar relatório", "Remover" — exibem uma confirmação visual.
- Filtros de busca funcionam de verdade sobre os dados de exemplo na tela.

Nenhuma integração externa (CAPES, Sucupira, e-mail, SSO) está conectada — esses pontos ficam marcados como próximos passos.

## 6. Identidade visual

A linha visual segue o conceito **"High-Value Forest"**: verde-floresta institucional sobre fundos claros e quentes, transmitindo estabilidade e seriedade acadêmica. Tipografia Hanken Grotesk (títulos) + Inter (texto e dados), pensada para telas densas de informação. Componentes com cantos suaves, bordas finas e sombras discretas.

## 7. Próximos passos sugeridos

1. Validar este fluxo com a equipe e ajustar telas/campos.
2. Definir as integrações prioritárias (Sucupira é a candidata natural).
3. Especificar regras de permissão por perfil em detalhe.
4. A partir do protótipo aprovado, iniciar o desenvolvimento do sistema real (back-end, banco de dados, autenticação).

---

*Protótipo para fins de demonstração. Dados fictícios.*
