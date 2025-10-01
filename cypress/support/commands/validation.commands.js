
Cypress.Commands.add('validateAdminDashboard', () => {  
    cy.get('[data-testid="cadastrar-usuarios"]').should('be.visible').should('have.text', 'Cadastrar Usuários');
    cy.get('[data-testid="listar-usuarios"]').should('be.visible').should('have.text', 'Listar Usuários');
    cy.get('[data-testid="cadastrar-produtos"]').should('be.visible').should('have.text', 'Cadastrar Produtos');
    cy.get('[data-testid="listar-produtos"]').should('be.visible').should('have.text', 'Listar Produtos');
    cy.get('[data-testid="link-relatorios"]').should('be.visible').should('have.text', 'Relatórios');
});

Cypress.Commands.add('validateUserDashboard', () => {
    cy.get('h1').should('be.visible').should('have.text', 'Serverest Store');
});


Cypress.Commands.add('validateEmptyShoppingCart', () => {
    cy.get('.card').should('have.length', 0);
    cy.get('[data-testid="shopping-cart-empty-message"]')
        .should('be.visible')
        .should('have.text', 'Seu carrinho está vazio');
});


Cypress.Commands.add('validateErrorMessage', (message) => {
    cy.get('[role="alert"]').should('be.visible').should('have.text', message);
});


Cypress.Commands.add('validateSuccessMessage', (message) => {
    cy.get('.alert-link').should('be.visible').should('have.text', message);
});