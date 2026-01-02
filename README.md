<h1 align="center">DevBills</h1>

<h3 align="center">Dashboard de Controle Financeiro Pessoal</h3>

<br>

<p align="center">
  <a href="#art-sobre-o-projeto">Sobre o Projeto</a> | 
  <a href="#computer-tecnologias-usadas">Tecnologias Usadas</a> | 
  <a href="#package-como-rodar">Como Rodar</a>
</p>

<br>

# :art: Sobre o Projeto

O **DevBills** é uma aplicação Fullstack desenvolvida para facilitar o controle financeiro pessoal. Com uma interface moderna e intuitiva, o usuário consegue gerenciar suas entradas e saídas, visualizar o saldo atual e analisar seus gastos através de gráficos interativos.

O grande diferencial técnico deste projeto é o uso de **TypeScript Estrito** em toda a aplicação, garantindo maior segurança e previsibilidade no código, além de uma arquitetura de Back-end robusta utilizando Prisma ORM.

<br>

## ✨ Features Principais

* **Dashboard Interativo:** Visão geral de Saldo, Receitas e Despesas com indicadores visuais.
* **Gráficos Dinâmicos:** Análise de despesas por categoria utilizando *Recharts*.
* **Filtros Temporais:** Navegação fluida entre meses e anos para histórico financeiro.
* **Gestão de Transações:** Cadastro detalhado de entradas e saídas com categorias personalizadas.
* **Feedback Visual:** Validação de formulários e tratamento de erros (Toasts e Bordas de erro).
* **Responsividade:** Layout adaptado para diferentes tamanhos de tela.

# :computer: Tecnologias Usadas

### Front-end (Interface)
* **React** (Biblioteca de UI)
* **TypeScript** (Tipagem Estática)
* **Tailwind CSS** (Estilização Utilitária)
* **Recharts** (Biblioteca de Gráficos)
* **React Hook Form** (Gestão de formulários)
* **Axios** (Consumo de API)

### Back-end (API)
* **Node.js & Express** (Servidor)
* **TypeScript** (Super-set Javascript)
* **Prisma ORM** (Interação com Banco de Dados)
* **MongoDB** (Banco de Dados NoSQL)
* **Zod** (Validação de Dados)

# :package: Como Rodar o Projeto Localmente

Este projeto é dividido em duas partes: API (Back-end) e Web (Front-end). Siga os passos abaixo:

1.  **Clone o repositório:**
    ```sh
    git clone [https://github.com/EltonVitorettiJr/DevBills.git](https://github.com/EltonVitorettiJr/DevBills.git)
    cd DevBills
    ```

2.  **Configure o Banco de Dados:**
    Certifique-se de ter uma instância do **MongoDB** rodando (localmente ou via Atlas/Docker).

3.  **Rodando a API (Back-end):**
    ```sh
    cd devbills-api
    npm install
    
    # Crie um arquivo .env na pasta 'devbills-api' com a URL do seu banco
    # DATABASE_URL="mongodb+srv://..."
    
    npx prisma generate
    npm run dev
    ```

4.  **Rodando a Interface (Front-end):**
    Abra um novo terminal na pasta raiz do projeto:
    ```sh
    cd devbills-web (ou o nome da sua pasta frontend)
    npm install
    npm run dev
    ```

5.  **Acesse:**
    O Front-end estará disponível em `http://localhost:5173` (ou a porta que o Vite indicar).

## 📦 Variáveis de Ambiente (.env)

Exemplo de configuração para o Back-end:

```env
DATABASE_URL="sua_string_de_conexao_mongodb"
PORT=3000
FRONT_URL="http://localhost:5173"
