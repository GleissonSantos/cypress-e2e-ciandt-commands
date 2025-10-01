# 🚀 Cypress E2E Testing - CI&T Commands Project

[![Cypress Tests](https://img.shields.io/badge/cypress-tests-brightgreen)](https://cypress.io)
[![CI/CD Pipeline](https://github.com/GleissonSantos/cypress-e2e-ciandt-commands/actions/workflows/pipeline-actions.yml/badge.svg)](https://github.com/GleissonSantos/cypress-e2e-ciandt-commands/actions/workflows/pipeline-actions.yml)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

## 📋 Sobre o Projeto

Este projeto contém uma suíte completa de testes automatizados E2E (End-to-End) utilizando **Cypress** para validar as funcionalidades da aplicação **Serverest**. Os testes cobrem cenários de login, registro de usuários, administração e funcionalidades de e-commerce, com **comandos customizados** para reutilização e **pipeline automatizado de CI/CD**.

## 🚀 Pipeline de CI/CD

O projeto inclui um **pipeline automatizado** configurado com **GitHub Actions** que:

- ✅ **Executa automaticamente** em push e pull requests na branch `main`
- ✅ **Utiliza Node.js 20 LTS** com cache otimizado do npm
- ✅ **Executa testes Cypress** em modo headless
- ✅ **Ambiente Ubuntu latest** para execução dos testes
- ✅ **Integração com cypress-io/github-action@v6**

### 📊 Status dos Testes

Os testes são executados automaticamente a cada commit. Você pode acompanhar o status no badge acima ou na [aba Actions](https://github.com/GleissonSantos/cypress-e2e-ciandt-commands/actions) do repositório.

## 🎯 Funcionalidades Testadas

### 🔐 **Autenticação**
- Login com credenciais válidas/inválidas
- Registro de usuários regulares e administradores
- Validações de campos obrigatórios
- Logout do sistema

### 👥 **Gestão de Usuários**
- Cadastro de usuários regulares
- Cadastro de administradores
- Validação de emails duplicados
- Validação de formatos de email

### 🛒 **E-commerce (Usuários Regulares)**
- Busca de produtos existentes e inexistentes
- Adição de produtos ao carrinho
- Remoção de produtos do carrinho
- Validação de carrinho vazio

### ⚙️ **Administração**
- Acesso ao painel administrativo
- Validação de funcionalidades exclusivas de admin
- Gerenciamento de usuários e produtos

## 🛠️ **Tecnologias Utilizadas**

- **[Cypress](https://cypress.io/)** - Framework de testes E2E
- **[Faker.js](https://fakerjs.dev/)** - Geração de dados dinâmicos
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD Pipeline
- **JavaScript ES6+** - Linguagem de programação

## 📁 **Estrutura do Projeto**

```
cypress-e2e-ciandt-commands/
├── .github/
│   └── workflows/
│       └── pipeline-actions.yml         # Pipeline de CI/CD
├── cypress/
│   ├── e2e/
│   │   ├── admin-acess.cy.js           # Testes de acesso administrativo
│   │   ├── login.cy.js                 # Testes de login
│   │   ├── regular-customer-acess.cy.js # Testes de usuário regular
│   │   └── user-registration.cy.js     # Testes de registro
│   ├── support/
│   │   ├── commands/
│   │   │   ├── login.commands.js       # Comandos de login
│   │   │   ├── navigation.commands.js  # Comandos de navegação
│   │   │   ├── product.commands.js     # Comandos de produtos
│   │   │   ├── registration.commands.js # Comandos de registro
│   │   │   └── validation.commands.js  # Comandos de validação
│   │   ├── commands.js                 # Importação de todos os comandos
│   │   └── e2e.js                      # Configurações globais
├── cypress.config.js                   # Configuração do Cypress
├── package.json                        # Dependências do projeto
├── .gitignore                          # Arquivos ignorados pelo Git
└── README.md                           # Documentação do projeto
```

## ⚡ **Pré-requisitos**

Antes de executar os testes, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

```bash
# Verificar versão do Node.js
node --version

# Verificar versão do npm
npm --version
```

## 🚀 **Instalação**

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/cypress-e2e-ciandt.git
cd cypress-e2e-ciandt
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Instale o Cypress:**
```bash
npx cypress install
```

## 🧪 **Executando os Testes**

### **Modo Local**

#### **Linha de Comando (Headless)**
```bash
# Executar todos os testes
npx cypress run

# Executar testes no Chrome
npx cypress run --browser chrome

# Executar testes no Firefox  
npx cypress run --browser firefox
```

#### **Interface Gráfica (Interativo)**
```bash
# Abrir o Cypress Test Runner
npx cypress open
```

### **Execução via Pipeline (GitHub Actions)**
Os testes são executados automaticamente:
- ✅ A cada **push** na branch `main`
- ✅ A cada **pull request** para a branch `main`
- ✅ Logs disponíveis na [aba Actions](https://github.com/GleissonSantos/cypress-e2e-ciandt-commands/actions)

## 🧪 **Cenários de Teste**

### **📝 Login (login.cy.js)**
- ✅ Login com email inválido
- ✅ Login sem email
- ✅ Login de usuário regular com sucesso
- ✅ Login de administrador com sucesso

### **👤 Registro de Usuários (user-registration.cy.js)**
- ✅ Registro sem senha
- ✅ Registro com email inválido
- ✅ Registro sem email
- ✅ Registro de usuário simples com sucesso
- ✅ Registro de administrador com sucesso
- ✅ Registro com email já cadastrado

### **🛒 Acesso de Cliente (regular-customer-access.cy.js)**
- ✅ Busca de produto existente
- ✅ Busca de produto inexistente
- ✅ Adição de produtos ao carrinho
- ✅ Limpeza do carrinho
- ✅ Logout com sucesso

### **⚙️ Acesso Administrativo (admin-access.cy.js)**
- ✅ Validação de funcionalidades do painel admin

## 🎨 **Comandos Customizados**

O projeto utiliza comandos customizados organizados por categoria:

```javascript
// Navegação
cy.acessLoginPage()
cy.acessRegistrationPage()

// Login
cy.tryingLogin(email, password)
cy.userSucessfulyLogin(name, email, password)
cy.adminSucessfulLogin(name, email, password)

// Registro
cy.sucessfulRegularCustomerRegister(name, email, password)
cy.sucessfulAdministratorRegister(name, email, password)
cy.tryingInsucessRegistration(name, email, password)

// Validações
cy.validateErrorMessage(message)
cy.validateUserDashboard()
cy.validateAdminDashboard()
cy.validateEmptyShoppingCart()

// Produtos
cy.searchProduct(productName)
cy.addProductToCart(productName)
```

## 📞 **Suporte**

Para dúvidas ou problemas:
- Abra uma [issue](https://github.com/GleissonSantos/cypress-e2e-ciandt-commands/issues)
- Verifique os [logs do pipeline](https://github.com/GleissonSantos/cypress-e2e-ciandt-commands/actions)

---

**Desenvolvido por Gleisson Santos**
