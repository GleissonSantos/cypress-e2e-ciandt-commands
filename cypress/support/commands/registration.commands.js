
Cypress.Commands.add('sucessfulAdministratorRegister', (admName, admEmail, admPassword) => {
    cy.get('input[data-testid="nome"]').type(admName)
    cy.get('input[data-testid="email"]').type(admEmail)
    cy.get('input[data-testid="password"]').type(admPassword)
    cy.get('[id="administrador"]').check()
    cy.get('button[data-testid="cadastrar"]').click()
    cy.get('.alert-link').should('have.text', 'Cadastro realizado com sucesso')
})


Cypress.Commands.add('sucessfulRegularCustomerRegister', (name, email, password) => {
    cy.get('input[data-testid="nome"]').type(name)
    cy.get('input[data-testid="email"]').type(email)
    cy.get('input[data-testid="password"]').type(password)
    cy.get('button[data-testid="cadastrar"]').click()
    cy.get('.alert-link').should('have.text', 'Cadastro realizado com sucesso')
})


Cypress.Commands.add('tryingInsucessRegistration', (name, email, password, isAdmin = false) => {
    if (name) cy.get('input[data-testid="nome"]').type(name);
    if (email) cy.get('input[data-testid="email"]').type(email);
    if (password) cy.get('input[data-testid="password"]').type(password);
    if (isAdmin) cy.get('[id="administrador"]').check();
    cy.get('button[data-testid="cadastrar"]').click();
});
