# SIGA - Portfolio Project Data

## 1. Informação Essencial

### 1) Nome Completo
**SIGA – Sistema Integrado de Gestão Académica**

### 2) Problema que o SIGA resolve
O SIGA resolve a desorganização e ineficiência na gestão académica tradicional, eliminando:
- A descentralização de dados (informações espalhadas em papéis e planilhas).
- A gestão manual e propensa a erros de notas, matrículas e pagamentos.
- A falta de transparência e comunicação entre secretaria, tesouraria, docentes e estudantes.
- A lentidão na emissão de documentos e na regularização financeira.

### 3) Público-Alvo
- Universidades e Institutos Superiores.
- Escolas Técnicas e Profissionais.
- Centros de Formação.
- Instituições de ensino privadas que necessitam de gestão financeira integrada.

### 4) Principais Funcionalidades
- [x] **Gestão de estudantes** (Cadastro completo, documentos, histórico)
- [x] **Gestão de matrículas** (Inscrição em disciplinas, validação de pré-requisitos)
- [x] **Gestão de pagamentos** (Mensalidades, multas, reconciliação bancária)
- [x] **Geração de recibos/guias** (Emissão automática de comprovativos)
- [x] **Gestão de disciplinas e Turmas** (Alocação de docentes, horários, salas)
- [x] **Portal do Estudante** (Acesso a notas, plano analítico, financeiro, horários)
- [x] **Portal do Docente** (Gestão de turmas, lançamento de notas, pautas)
- [x] **Lançamento de notas** (Sistema seguro com validação de pesos e datas)
- [x] **Histórico Escolar** (Plano analítico detalhado com cálculo de médias e CH)
- [x] **Sistema de Permissões (RBAC)** (Perfis distintos para Admin, Secretaria, Tesouraria, Coordenação, Docente e Estudante)
- [x] **Relatórios Financeiros** (Conciliação, devedores, receitas)
- [x] **Dashboard com Estatísticas** (KPIs em tempo real por função)

### 5) Tecnologias Usadas
- **Front-end**: Next.js 14 (App Router), React, TypeScript.
- **Estilização**: Tailwind CSS, Shadcn/ui (Componentes modernos e acessíveis), Lucide React (Ícones).
- **Gerenciamento de Estado**: React Context API, SWR (Data Fetching).
- **Back-end (Simulado/Mock)**: MSW (Mock Service Worker) 2.0 com persistência em LocalStorage (Simulação completa de API RESTful).
- **Testes**: Playwright (E2E Testing).
- **Outros**: Date-fns (Manipulação de datas), Zod (Validação).

### 6) O Diferencial (O que torna o SIGA especial)
- **UX/UI Premium**: Design limpo, moderno e responsivo, focado na usabilidade (ao contrário dos sistemas académicos "feios" e complexos tradicionais).
- **Arquitetura Orientada a Papéis**: Cada utilizador vê apenas o que precisa, com dashboards personalizados para sua função.
- **Feedback Visual Imediato**: Sistema de notificações (Toasts) e estados de carregamento (Skeletons) para uma experiência fluida.
- **Gestão Financeira Detalhada**: Visualização clara de parcelas, descontos e multas, integrada diretamente ao bloqueio/desbloqueio de serviços académicos.
- **Resiliência**: Funciona offline/online com persistência local para demonstrações e testes robustos.

### 7) Estado do Projeto
- **Em Desenvolvimento / Protótipo Funcional**: O frontend está completo com fluxos de trabalho funcionais simulados via MSW. Pronto para integração com backend real.

### 8) Objetivo Comercial
- **Portfólio de Alta Complexidade**: Demonstrar capacidade de arquitetar e implementar sistemas complexos, com múltiplas regras de negócio e perfis de utilizador.
- **Base para SaaS**: Estrutura pronta para ser conectada a uma API real e comercializada para pequenas e médias instituições de ensino.

---

## 2. Galeria de Imagens (Screenshots)

*As capturas de tela serão inseridas aqui após a geração.*
![alt text](image.png)

### 1. Dashboards
*(Espaço para imagens dos dashboards de Admin, Tesouraria, etc.)*
![alt text](image-1.png)

### 2. Gestão Académica
*(Espaço para imagens de lista de alunos, matrículas)*
![alt text](image-11.png)

### 3. Gestão Financeira
*(Espaço para imagens de faturas, recibos)*
![alt text](image-3.png)
![alt text](image-12.png)

### 4. Portal do Docente
*(Espaço para imagens de lançamento de notas)*
![alt text](image-10.png)

### 5. Portal do Estudante
*(Espaço para imagens de notas, histórico, financeiro)*
![alt text](image-4.png)
![alt text](image-5.png)
![alt text](image-6.png)
![alt text](image-7.png)
![alt text](image-8.png)
![alt text](image-9.png)
### 6. Geral
*(Espaço para imagens de Login, Configurações)*
