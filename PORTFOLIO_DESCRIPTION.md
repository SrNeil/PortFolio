# 🍽️ RESTAURANTE APP — DOCUMENTAÇÃO DE PORTFÓLIO

![Pagina inicial](image.png)
*(Sugestão: Colocar uma imagem do Dashboard Admin ou da Tela Inicial do Cliente)*

## 1️⃣ Visão Geral

### **Qual é o nome do sistema?**
**Restaurante Management System (RMS)**

### **Que problema real dos restaurantes este sistema resolve?**
Resolve a ineficiência no fluxo de pedidos e a complexidade da gestão financeira em Moçambique. Elimina os erros de comunicação entre o atendimento e a cozinha, automatiza o cálculo de taxas e reconciliação de pagamentos móveis (M-Pesa/e-Mola), e oferece uma visão clara da rentabilidade do negócio em tempo real.

### **Para que tipo de restaurante ele foi pensado?**
Projetado para **restaurantes médios e grandes**, incluindo estabelecimentos com serviço de mesa completo, fast-food e operações de take-away/delivery com alto volume de pedidos.

### **O sistema é web, mobile ou híbrido?**
É um sistema **Web Progressivo (PWA)** totalmente responsivo, funcionando perfeitamente em desktops, tablets (para garçons/cozinha) e smartphones.

### **O projeto está em produção, teste ou demo?**
O projeto está em fase de **Beta Avançado (Demo Funcional)**, com 50% das funcionalidades core (Pagamentos, Pedidos, KDS, Admin) totalmente implementadas e testadas.

---

## 2️⃣ Funcionalidades Principais


### **Que tipos de pedidos o sistema suporta?**
Suporta um fluxo ominicanal:
- **Mesa (Dine-in):** Pedidos feitos pelo garçom ou QR Code na mesa.
- **Balcão (Kiosk):** Autoatendimento rápido.
- **Take-away:** Encomenda para levantar.
- **Delivery:** Gestão completa de entregas com custos calculados.

### **Existe gestão de mesas?**
**Sim.** O sistema identifica pedidos por número de mesa e permite o acompanhamento do status de cada mesa individualmente.

### **O sistema tem painel da cozinha?**
**Sim (KDS - Kitchen Display System).** Um painel digital em tempo real substitui as impressoras de papel, ordenando pedidos por prioridade e tempo de espera, com alertas visuais para atrasos.

### **Existe impressão automática de pedidos?**
O sistema possui arquitetura para tal, mas prioriza o fluxo digital sustentável (KDS). Controlador de impressão (`printing.controller.ts`) já existente na base de código.

### **Como funciona a gestão de produtos e categorias?**
Gestão completa via Admin Dashboard:
- CRUD de Produtos com suporte a imagens, preços, e tempos de preparo.
- Categorias organizáveis.
- **Bulk Updates:** Atualização em massa da disponibilidade de produtos com um clique.

### **Existe gestão de estoque?**
Gestão de **Disponibilidade em Tempo Real**. O admin pode marcar produtos como "Esgotado" instantaneamente, o que reflete imediatamente em todos os terminais (Cliente, Kiosk, Garçom).

### **O sistema gera relatórios? Quais?**
Sim, relatórios financeiros detalhados:
- Receita por período.
- Vendas por método de pagamento (M-Pesa vs e-Mola vs Cash).
- Produtos mais populares.
- Desempenho financeiro líquido (após taxas).

### **O sistema tem histórico de vendas?**
Sim, histórico completo e imutável de todas as transações, acessível tanto para o admin quanto para o cliente (suas próprias compras).

### **Existe controle de usuários e permissões?**
**Sim (RBAC - Role Based Access Control).**
- **Admin:** Acesso total.
- **Cozinha:** Apenas KDS.
- **Garçom:** Apenas POS e Pedidos.
- **Cliente:** Apenas interface de compra.

### **Suporta descontos, promoções ou taxas?**
Sim.
- **Taxas:** Cálculo automático de IVA (16%) e taxas de processamento de pagamentos móveis.
- **Promoções:** Suporte a preços promocionais na estrutura do produto.

---

## 3️⃣ Fluxo do Sistema


### **Como funciona o fluxo completo do pedido até à entrega?**
1.  **Criação:** O pedido é registado (Apps do Cliente, Garçom ou Kiosk).
2.  **Processamento:** O backend valida stock, preços e processa o pagamento (se pré-pago).
3.  **Despacho:** O backend emite um evento via WebSocket.
4.  **Cozinha:** O KDS recebe o pedido instantaneamente com som de alerta.
5.  **Produção:** O Chef marca "Em Preparação" e depois "Pronto".
6.  **Entrega:** O TV Display avisa o cliente (ou Garçom leva à mesa).
7.  **Finalização:** Pedido marcado como "Entregue/Concluído" e arquivado.

### **O sistema suporta tempo real?**
**Absolutamente.** Utiliza **Socket.io** para comunicação bi-direcional. Mudanças de status na cozinha refletem em milissegundos na tela do cliente.

---

## 4️⃣ Tecnologias Utilizadas

### **Front-end**
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Linguagem:** TypeScript
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) (para design system rápido e consistente)
- **State/Data:** React Hooks + Axios
- **Real-time:** Socket.io Client
- **Charts:** Recharts (para dashboards analíticos)

### **Back-end**
- **Runtime:** Node.js
- **Framework:** [Express.js](https://expressjs.com/)
- **Linguagem:** TypeScript
- **Database Driver:** `pg` (PostgreSQL client) com queries otimizadas em raw SQL para performance máxima.
- **Real-time:** Socket.io Server
- **Validação:** Zod

### **Base de Dados**
- **PostgreSQL 15:** Escolhido pela robustez, suporte a transações complexas (ACID) e fiabilidade na gestão financeira.

### **Usaste APIs próprias?**
Sim, uma API RESTful completa desenvolvida do zero, seguindo padrões de arquitetura em camadas (Controllers, Services, Routes).

### **O sistema é responsivo?**
Sim, "Mobile-First". A interface adapta-se fluidamente de smartphones pequenos a grandes monitores de cozinha (TVs) e desktops de gestão.

---

## 5️⃣ Decisões Técnicas


### **Por que escolheste essa stack tecnológica?**
- **Next.js + Tailwind:** Combinação imbatível para velocidade de desenvolvimento e performance de carregamento (SEO e UX).
- **Express + Raw SQL:** Para ter controle absoluto sobre as queries de banco de dados, garantindo que relatórios financeiros complexos sejam gerados em milissegundos, sem o overhead de um ORM pesado.
- **TypeScript:** Segurança de tipos em todo o stack, reduzindo drasticamente bugs em produção.

### **Como garantiste performance?**
- **Caching:** Cache estratégico (Redis-ready) para listagens de produtos.
- **Otimização de Queries:** Índices no banco de dados e queries SQL manuais para agregação de dados.
- **Lazy Loading:** Carregamento de componentes pesados apenas quando necessários no frontend.

### **Como garantiste segurança?**
- **Autenticação:** JWT (JSON Web Tokens) com Access e Refresh tokens.
- **Hash:** Bcrypt para senhas.
- **Validação:** Zod para garantir que nenhum dado inválido entre no sistema.
- **Helmet:** Proteção de headers HTTP.

### **O sistema suporta múltiplos restaurantes?**
Atualmente desenhado para **Single-Tenant** (focado em uma cadeia ou restaurante único), mas com arquitetura modular pronta para escalar para SaaS (Multi-tenant) no futuro.

---

## 6️⃣ Benefícios para o Restaurante

### **Como o sistema reduz erros?**
Elimina a "folha de papel" ilógica. O pedido vai direto do digital para a tela da cozinha. Não há ambiguidade na letra do garçom nem pedidos perdidos.

### **Que impacto tem no controle financeiro?**
Transparência total. O dono sabe exatamente quanto entrou via M-Pesa, quanto foi dinheiro, e quanto foi de taxa. O sistema faz a reconciliação automática, evitando furtos e desvios.

### **Que ganhos o restaurante tem no dia a dia?**
**Rotatividade de Mesa.** Com pedidos e pagamentos mais rápidos, o cliente ocupa a mesa por menos tempo após comer, aumentando o número de clientes atendidos por noite.

---

## 7️⃣ Diferenciais do Projeto

### **O que este sistema faz melhor que outros?**
- **Foco Local (Moçambique):** Integração nativa profunda com **M-Pesa e e-Mola**, algo que sistemas internacionais ignoram.
- **UX Premium:** Uma interface que não parece "software corporativo chato", mas sim uma app moderna e vibrante que dá prazer em usar.

---

## 8️⃣ Segurança e Confiabilidade

### **Como os dados são protegidos?**
- Criptografia em trânsito (HTTPS).
- Sanitização de inputs para prevenir SQL Injection.
- Logs de auditoria para todas as ações críticas (quem criou o produto, quem cancelou o pedido).

### **Existe script de Backup?**
Sim, scripts automatizados via Docker para dump diário do PostgreSQL.

---

## 9️⃣ Demonstração

![kiosk](image-3.png)*Painel KDS em acção*

![menu cliente](image-2.png)

### **Que tipo de restaurante já pode usar este sistema hoje?**
Qualquer restaurante que queira modernizar o atendimento, especialmente aqueles com alto volume de pagamentos móveis.

---

## 🔥 O Pitch em 1 Frase

> "Um ecossistema digital completo que transforma restaurantes moçambicanos, integrando pedidos ágeis, cozinha inteligente e finanças locais numa única plataforma moderna e eficiente."


![Menu cliente](image-1.png)
![Kiosk menu](image-2.png)
![ecra tv](image-3.png)
![Cozinha kds](image-4.png)
![Dashboard admin](image-5.png)
![Dashboard admin 2](image-6.png)
![Finance admin](image-7.png)
![users admin management](image-8.png)
![configuracoes admin](image-9.png)
![Staff pos](image-10.png)
![staff relatorios](image-11.png)