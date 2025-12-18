# 🎁 WEBSITE DE RECARGA DE GIFTCARDS — GameNation

## 1️⃣ Visão Geral do Projeto

**Qual é o nome da plataforma?**
GameNation

**O projeto é um website, web app ou PWA?**
É uma **Web App (SPA - Single Page Application)** moderna e responsiva, construída para funcionar como uma aplicação nativa no navegador.

**Que problema real este sistema resolve?**
Resolve a dificuldade de acesso a conteúdos digitais globais (jogos, música, streaming) em Moçambique. Muitos serviços internacionais exigem cartões de crédito internacionais, que são inacessíveis para grande parte da população. A GameNation permite adquirir estes serviços usando métodos de pagamento locais e moeda local (Metical).

**Para que mercado foi pensado?**
Focado no mercado moçambicano 🇲🇿, atendendo:
- **Gamers**: Steam, PlayStation, Xbox.
- **Consumidores de Streaming**: Netflix, Spotify.
- **Usuários de Mobile**: Recargas Vodacom, Movitel, mCel.
- **Usuários Apple**: App Store & iTunes.

**O projeto está em produção, demo ou MVP?**
O projeto está em estágio de **"Code Complete" (MVP Avançado)**. Possui todas as funcionalidades essenciais implementadas, testadas e prontas para deploy, com documentação completa para operação.

---

## 2️⃣ Tipos de Gift Cards

**Que tipos de gift cards o sistema suporta?**
O sistema é versátil e suporta múltiplas categorias:
- **Streaming**: Netflix, Spotify Premium.
- **Jogos**: Steam Wallet, PlayStation Store (PSN), Xbox Live/Game Pass.
- **Lojas de Apps**: Apple (App Store/iTunes).
- **Telecomunicações**: Recargas móveis (Vodacom, mCel, Movitel).

**Os valores são fixos ou variáveis?**
Os produtos utilizam **valores fixos** (Face Value) pré-definidos para facilitar a gestão de stock e preços (ex: 500 MZN, 1000 MZN, 1 Mês, 3 Meses).

**Existe suporte para moedas diferentes?**
O sistema opera internamente em **Meticais (MZN)** para o usuário final, mas os produtos digitais subjacentes podem representar valores em outras moedas (USD/EUR) convertidos para o mercado local.

**Os códigos são digitais, automáticos ou manuais?**
- **Digitais**: Sim, 100% digital.
- **Automáticos**: O sistema possui lógica para entrega automática de códigos *após* a confirmação do pagamento.
- **Gestão de Stock**: Os códigos são carregados previamente no banco de dados e reservados/atribuídos automaticamente no momento da compra.

---

## 3️⃣ Fluxo de Compra (Core Flow)

**Como funciona o fluxo completo de compra?**
1.  **Catálogo**: Usuário navega pelos produtos, usa filtros ou busca.
2.  **Carrinho**: Adiciona itens ao carrinho (com persistência local).
3.  **Identificação**: No checkout, o login/registo é obrigatório para garantir a segurança da entrega.
4.  **Checkout**: Usuário confirma dados de contato (email/telefone) e escolhe método de pagamento.
5.  **Pagamento**: Usuário realiza a transferência (M-Pesa) e aguarda confirmação.
6.  **Entrega**: Após validação do admin, o sistema envia o código automaticamente por email e exibe na tela de confirmação.

**O usuário precisa criar conta?**
**Sim**. A autenticação é obrigatória para finalizar a compra. Isso cria um vínculo seguro entre a compra e o usuário, permitindo histórico e reenvio de códigos caso necessário.

**O pagamento é feito antes ou depois?**
O pagamento é **pré-pago**. O código só é libertado após a confirmação do recebimento do valor.

**O gift card é entregue automaticamente?**
O processo de *atribuição* do código é automático pelo sistema assim que o pedido é marcado como "Pago" no painel administrativo. Não é necessário copiar e colar códigos manualmente a cada venda.

**O código chega por:**
- **Email**: Sim (via integração SendGrid).
- **Tela**: Sim (na página de confirmação do pedido).
- **Histórico**: Sim (na área do perfil do usuário).

**Existe histórico de compras?**
Sim. Os usuários têm acesso a uma área "Meus Pedidos" onde podem ver todas as compras passadas e recuperar os códigos adquiridos.

---

## 4️⃣ Pagamentos & Fintech

**Que métodos de pagamento estão disponíveis?**
- **M-Pesa** (Principal foco local).
- **Transferência Bancária / Cartão** (Placeholder implementado na UI para expansão).

**O sistema valida pagamento em tempo real?**
Atualmente opera num modelo **Híbrido/Manual Seguro**:
- O usuário faz a transferência M-Pesa.
- O sistema notifica o Admin (Email/Telegram).
- O Admin valida o recebimento e aprova no painel com um clique.
- *Nota: A infraestrutura backend (Webhooks) já está preparada para integração total via API da Vodacom para validação em tempo real futura.*

**Existe proteção contra fraude?**
Sim.
- O código só é revelado após confirmação explícita do pagamento.
- Antes do pagamento, o código fica apenas "reservado" no banco de dados, impedindo que seja vendido para outra pessoa, mas sem revelá-lo ao comprador.

**Há confirmação automática de pagamento?**
O sistema dispara emails automáticos de "Pedido Recebido" e "Pagamento Confirmado" (com o código) assim que o status muda.

**O sistema suporta reembolsos?**
O sistema permite o cancelamento de pedidos não pagos, libertando o stock reservado automaticamente. Reembolsos financeiros são geridos externamente, mas o cancelamento no sistema garante a integridade do stock.

---

## 5️⃣ Tecnologias Utilizadas

**Que tecnologia usaste no front-end?**
- **React 19**: A versão mais recente para máxima performance.
- **Vite**: Build tool ultra-rápida.
- **TailwindCSS**: Para estilização moderna e responsiva.
- **Framer Motion**: Para animações fluidas e micro-interações (loading, transições).
- **Radix UI**: Componentes acessíveis e robustos.

**Que tecnologia usaste no back-end?**
- **Supabase**: Backend-as-a-Service (BaaS) poderoso.
- **PostgreSQL**: Banco de dados relacional robusto.
- **Edge Functions (Deno)**: Para lógica de negócios sensível (criar pedidos, processar webhooks, upload de códigos) rodando server-side.

**Que base de dados usaste?**
- **PostgreSQL** (via Supabase). Uso intensivo de **Stored Procedures** e **Triggers** para garantir integridade transacional (ex: garantir que um mesmo código nunca seja vendido duas vezes simultaneamente).

**Existe integração com APIs externas?**
- **SendGrid**: Para envio transacional de emails.
- **Telegram Bot API**: Para notificações em tempo real de vendas para o admin.

**Como é feita a segurança dos códigos?**
- **Row Level Security (RLS)**: Regras estritas no banco de dados impedem que qualquer usuário (mesmo autenticado) leia a tabela de códigos, exceto o sistema durante o processo de entrega.
- **Atribuição Atômica**: Função SQL dedicada para reservar códigos evitando "Race Conditions" (vendas duplicadas).

**Usaste webhooks?**
Sim, para notificações e preparação para gateways de pagamento.

**O sistema é escalável?**
Sim. Construído sobre arquitetura Serverless (Edge Functions) e banco de dados gerenciado, pode escalar automaticamente com o aumento da demanda sem gestão de servidores.

**O sistema é responsivo/mobile-first?**
Totalmente responsivo. A interface foi desenhada pensando primeiramente na experiência mobile, dado o perfil do usuário moçambicano.

---

## 6️⃣ Painel Administrativo

**Existe painel admin?**
Sim, um painel completo e seguro (`/admin`).

**O admin consegue:**
- **Gerir Gift Cards**: Upload em massa via CSV ou manual.
- **Ver Vendas**: Listagem completa de pedidos com status e filtros.
- **Gerir Estoque**: Visualização de níveis de stock com alertas.
- **Aprovar Pagamentos**: Com um clique, liberar os códigos para o cliente.

**Existe relatório financeiro?**
O painel exibe um dashboard com métricas chave (KPIs): Vendas Totais, Pedidos Hoje, Receita Mensal.

**Existe controlo de estoque de códigos?**
Sim. O sistema monitora a quantidade de códigos "disponíveis" vs "reservados" vs "vendidos" e alerta quando o stock está baixo.

**Existe sistema de logs/auditoria?**
Sim, o banco de dados registra as ações críticas para rastreabilidade.

---

## 7️⃣ Experiência do Usuário (UX)

**O processo de compra é simples?**
Extremamente simplificado em 3 passos: Escolher -> Identificar -> Pagar.

**Existe feedback visual?**
Sim. Utiliza "Skeletons" para loading, "Toasts" para notificações de sucesso/erro e animações de transição de página para uma sensação de app nativa.

**O site é rápido?**
Sim, o uso de Vite + React e o carregamento otimizado de assets garantem navegação instantânea.

**O design foi pensado para confiança?**
Sim. Design escuro (Dark Mode) "Gamer", profissional, com paleta de cores consistente (Verde Neon/Roxo) que transmite modernidade e segurança.

---

## 8️⃣ Segurança & Confiabilidade

**Os códigos são criptografados?**
Os códigos são armazenados de forma segura e acessados apenas via funções privilegiadas do servidor (não expostos na API pública).

**Existe autenticação segura?**
Sim, utiliza **Supabase Auth** (email/password), com suporte robusto a sessões (JWT), recuperação de senha e verificação de email.

**Existe proteção contra compras duplicadas?**
Sim. O uso de chaves de idempotência e transações ACID no banco de dados impede que um clique duplo gere cobrança ou reserva duplicada errônea.

**Existe backup dos dados?**
A infraestrutura do Supabase fornece backups automáticos e Point-in-Time Recovery (PITR).

---

## 9️⃣ Diferenciais do Projeto

**O que torna este site diferente dos concorrentes?**
- **Foco Local**: Adaptado para a realidade de pagamentos de Moçambique.
- **UI/UX Superior**: Não parece um site antigo; tem animações e fluidez de app moderna.
- **Transparência**: O cliente recebe notificações constantes sobre o estado do pedido.
- **Integridade de Estoque**: Sistema técnico robusto que garante que você nunca paga por um código que não existe.

---

## 🔥 Headline do Projeto

> **"A plataforma definitiva para gamers em Moçambique adquirirem gift cards digitais instantaneamente, com a segurança e facilidade do pagamento via M-Pesa."**

---

## 📸 Telas para o Portfólio

Para o seu portfólio visual, recomendo capturar:

1.  **Home Hero Section**: Mostrando a proposta de valor e destaque dos cards.
2.  **Catálogo/Grid de Produtos**: Mostrando a variedade (Netflix, Steam, etc.).
3.  **Checkout**: O formulário limpo e opções de pagamento.
4.  **Confirmação de Pedido**: O momento "mágico" onde o código é revelado.
5.  **Mobile View**: Mostrar como fica perfeito no celular.
6.  **Admin Dashboard**: Mostrar os gráficos e a lista de pedidos para demonstrar a complexidade do back-office.

---
*Documentação gerada automaticamente baseada na análise do código fonte da versão v1.0.0*


![Home](image.png)
![loja](image-1.png)
![sugerir gift](image-2.png)
![Perguntas e respostas frequentes](image-3.png)
![entrar em contacto](image-4.png)
![meus pedidos](image-5.png)
![Detalhes dos pedidos](image-6.png)
![ver codigos](image-7.png)
![painel admin](image-8.png)
![pedidos admin](image-9.png)
![Adicionar codigo](image-10.png)
![sotck de codigos](image-11.png)
![gestao de usuarios](image-12.png)
![Financeiro](image-13.png)
![configuracoes do site](image-14.png)
![chatbot](image-15.png)