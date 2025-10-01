/// <reference types="cypress"  />
import { faker } from '@faker-js/faker';

describe('Login at Serverest', () => {

    beforeEach('Acesss servertest login page', () => {

        cy.acessLoginPage()
    })

    // Test cases

    // 
    it('Login with invalid email', () => {
        const invalidEmail = 'invalidemail@teste';
        const password = faker.internet.password(4);

        cy.tryingLogin(invalidEmail, password);
        cy.validateErrorMessage('×Email deve ser um email válido')
    })

    it('Login without email', () => {
        const randomPassword = faker.internet.password(4);

        cy.get('input[data-testid="senha"]').type(randomPassword)
        cy.get('button[data-testid="entrar"]').click()
        cy.validateErrorMessage('×Email é obrigatório')
    })

    it('Suceessful regular login', () => {
        const userData = { name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password(4) };

        cy.userSucessfulyLogin(userData.name, userData.email, userData.password);
        cy.validateUserDashboard();
    })

    it('sucessful admin login', () => {
        const userData = { name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password(4) };
       
        cy.adminSucessfulLogin(userData.name, userData.email, userData.password);
        cy.validateAdminDashboard();
    })

})

