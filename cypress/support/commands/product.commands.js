
Cypress.Commands.add('searchProduct', (productName) => {
    cy.get('input[data-testid="pesquisar"]').clear().type(productName);
    cy.get('button[data-testid="botaoPesquisar"]').click();
});


Cypress.Commands.add('addProductToCart', (productName) => {
    cy.searchProduct(productName);
    cy.get('.card').should('contain.text', productName);
    cy.get('[data-testid="adicionarNaLista"]').first().click();
});