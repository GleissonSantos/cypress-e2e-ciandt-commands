# 🚀 Cypress E2E Testing - CI&T Command### 🛍️ **E-commerce (Regular Users)**
- Search for existing and non-existing products
- Add products to cart
- Remove products from cart
- Empty cart validationject

[![Cypress Tests](https://img.shields.io/badge/cypress-tests-brightgreen)](https://cypress.io)
[![CI/CD Pipeline](https://github.com/GleissonSantos/cypress-e2e-ciandt-commands/actions/workflows/pipeline-actions.yml/badge.svg)](https://github.com/GleissonSantos/cypress-e2e-ciandt-commands/actions/workflows/pipeline-actions.yml)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

## 📋 About the Project

This project contains a complete E2E (End-to-End) automated testing suite using **Cypress** to validate **Serverest** application functionalities. The tests cover login scenarios, user registration, administration, and e-commerce features, with **custom commands** for reusability and **automated CI/CD pipeline**.

## 🚀 CI/CD Pipeline

The project includes an **automated pipeline** configured with **GitHub Actions** that:

- ✅ **Runs automatically** on push and pull requests to `main` branch
- ✅ **Uses Node.js 20 LTS** with optimized npm cache
- ✅ **Executes Cypress tests** in headless mode
- ✅ **Ubuntu latest environment** for test execution
- ✅ **Integration with cypress-io/github-action@v6**

### 📊 Test Status

Tests are executed automatically on every commit. You can track the status in the badge above or in the repository's [Actions tab](https://github.com/GleissonSantos/cypress-e2e-ciandt-commands/actions).

## 🎯 Tested Features

### 🔐 **Authentication**
- Login with valid/invalid credentials
- Regular user and administrator registration
- Required field validations
- System logout

### 👥 **User Management**
- Regular user registration
- Administrator registration
- Duplicate email validation
- Email format validation

### 🛒 **E-commerce (Usuários Regulares)**
- Busca de produtos existentes e inexistentes
- Adição de produtos ao carrinho
- Remoção de produtos do carrinho
- Validação de carrinho vazio

### ⚙️ **Administration**
- Access to administrative panel
- Admin-exclusive functionality validation
- User and product management

## 🛠️ **Technologies Used**

- **[Cypress](https://cypress.io/)** - E2E Testing Framework
- **[Faker.js](https://fakerjs.dev/)** - Dynamic data generation
- **[Node.js](https://nodejs.org/)** - JavaScript Runtime
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD Pipeline
- **JavaScript ES6+** - Programming Language

## 📁 **Project Structure**

```
cypress-e2e-ciandt-commands/
├── .github/
│   └── workflows/
│       └── pipeline-actions.yml         # CI/CD Pipeline
├── cypress/
│   ├── e2e/
│   │   ├── admin-acess.cy.js           # Administrative access tests
│   │   ├── login.cy.js                 # Login tests
│   │   ├── regular-customer-acess.cy.js # Regular user tests
│   │   └── user-registration.cy.js     # Registration tests
│   ├── support/
│   │   ├── commands/
│   │   │   ├── login.commands.js       # Login commands
│   │   │   ├── navigation.commands.js  # Navigation commands
│   │   │   ├── product.commands.js     # Product commands
│   │   │   ├── registration.commands.js # Registration commands
│   │   │   └── validation.commands.js  # Validation commands
│   │   ├── commands.js                 # All commands import
│   │   └── e2e.js                      # Global configurations
├── cypress.config.js                   # Cypress configuration
├── package.json                        # Project dependencies
├── .gitignore                          # Git ignored files
└── README.md                           # Project documentation
```

## ⚡ **Prerequisites**

Before running the tests, make sure you have installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn**

```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

## 🚀 **Installation**

1. **Clone the repository:**
```bash
git clone https://github.com/GleissonSantos/cypress-e2e-ciandt-commands.git
cd cypress-e2e-ciandt-commands
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install Cypress:**
```bash
npx cypress install
```

## 🧪 **Running the Tests**

### **Local Mode**

#### **Command Line (Headless)**
```bash
# Run all tests
npx cypress run

# Run tests in Chrome
npx cypress run --browser chrome

# Run tests in Firefox  
npx cypress run --browser firefox
```

#### **Graphical Interface (Interactive)**
```bash
# Open Cypress Test Runner
npx cypress open
```

### **Pipeline Execution (GitHub Actions)**
Tests are executed automatically:
- ✅ On every **push** to `main` branch
- ✅ On every **pull request** to `main` branch
- ✅ Logs available in [Actions tab](https://github.com/GleissonSantos/cypress-e2e-ciandt-commands/actions)

## 🧪 **Test Scenarios**

### **📝 Login (login.cy.js)**
- ✅ Login with invalid email
- ✅ Login without email
- ✅ Successful regular user login
- ✅ Successful administrator login

### **👤 User Registration (user-registration.cy.js)**
- ✅ Registration without password
- ✅ Registration with invalid email
- ✅ Registration without email
- ✅ Successful simple user registration
- ✅ Successful administrator registration
- ✅ Registration with already registered email

### **�️ Customer Access (regular-customer-access.cy.js)**
- ✅ Search for existing product
- ✅ Search for non-existing product
- ✅ Add products to cart
- ✅ Clear cart
- ✅ Successful logout

### **⚙️ Administrative Access (admin-access.cy.js)**
- ✅ Admin panel functionalities validation

## 🎨 **Custom Commands**

The project uses custom commands organized by category:

```javascript
// Navigation
cy.acessLoginPage()
cy.acessRegistrationPage()

// Login
cy.tryingLogin(email, password)
cy.userSucessfulyLogin(name, email, password)
cy.adminSucessfulLogin(name, email, password)

// Registration
cy.sucessfulRegularCustomerRegister(name, email, password)
cy.sucessfulAdministratorRegister(name, email, password)
cy.tryingInsucessRegistration(name, email, password)

// Validations
cy.validateErrorMessage(message)
cy.validateUserDashboard()
cy.validateAdminDashboard()
cy.validateEmptyShoppingCart()

// Products
cy.searchProduct(productName)
cy.addProductToCart(productName)
```

## 📞 **Support**

For questions or issues:
- Open an [issue](https://github.com/GleissonSantos/cypress-e2e-ciandt-commands/issues)
- Check the [pipeline logs](https://github.com/GleissonSantos/cypress-e2e-ciandt-commands/actions)

---

**Developed by Gleisson Santos**
