//  Custom command to navigate to the login page
Cypress.Commands.add('acessLoginPage', () => {
    cy.visit('https://front.serverest.dev/login')
})

//  Custom command to navigate to the user registration page
Cypress.Commands.add('acessRegistrationPage', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
})
