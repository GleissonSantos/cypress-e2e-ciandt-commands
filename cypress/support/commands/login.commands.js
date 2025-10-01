// Command to attempt login with given credentials
Cypress.Commands.add('tryingLogin', (email, password) => {
    cy.get('input[data-testid="email"]').type(email);
    cy.get('input[data-testid="senha"]').type(password);
    cy.get('button[data-testid="entrar"]').click();
});

// Command to perform a successful login for a regular user
Cypress.Commands.add('userSucessfulyLogin', (name, email, password) => {
    cy.acessRegistrationPage()
    cy.sucessfulRegularCustomerRegister(name, email, password)
    cy.acessLoginPage()
    cy.get('input[data-testid="email"]').type(email)
    cy.get('input[data-testid="senha"]').type(password)
    cy.get('button[data-testid="entrar"]').click()
    cy.get('h1').should('be.visible').should('have.text', 'Serverest Store')

})

// Command to perform a successful login for an admin user
Cypress.Commands.add('adminSucessfulLogin', (admName, admEmail, admPassword) => {
    cy.acessRegistrationPage()
    cy.sucessfulAdministratorRegister(admName, admEmail, admPassword)
    cy.acessLoginPage()
    cy.get('input[data-testid="email"]').type(admEmail)
    cy.get('input[data-testid="senha"]').type(admPassword)
    cy.get('button[data-testid="entrar"]').click()
    cy.get('h1').should('be.visible').should('have.text', `Bem Vindo  ${admName}`)
})

// Command to logout 
Cypress.Commands.add('logout', () => {
    cy.get('[data-testid="logout"]').click();
    cy.url().should('include', '/login');
    cy.get('h1').should('have.text', 'Login');
});