
Cypress.Commands.add('acessLoginPage', () => {
    cy.visit('https://front.serverest.dev/login')
})


Cypress.Commands.add('acessRegistrationPage', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
})
