/// <reference types="cypress"  />
import { faker } from '@faker-js/faker';

describe('Regulary customer acess', () => {

    // Test cases

    it('Search an existent product', () => {
        const userData = { name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password(4) };

        cy.userSucessfulyLogin(userData.name, userData.email, userData.password);
        cy.searchProduct('Cypress Product');
        cy.get('.card').should('have.length.greaterThan', 0)
    })

    it('Search a non-existent product', () => {
        const userData = { name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password(4) };

        cy.userSucessfulyLogin(userData.name, userData.email, userData.password);
        cy.searchProduct('NonExistentProduct12345');
        cy.get('.card').should('have.length', 0)

    })

    it('Add products to shopping list', () => {
        const userData = { name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password(4) };

        cy.userSucessfulyLogin(userData.name, userData.email, userData.password);
        cy.addProductToCart('Cypress Product');
        cy.get('h1').should('be.visible').should('have.text', 'Lista de Compras')
        cy.get('[class="card col-3"]').should('have.length', 1)
            .invoke('text').should('include', 'Cypress Product')

    })

    it('Clear shopping list', () => {
        const userData = { name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password(4) };

        cy.userSucessfulyLogin(userData.name, userData.email, userData.password);
        cy.addProductToCart('Cypress Product');
        cy.get('[data-testid="limparLista"]').click()
        cy.validateEmptyShoppingCart();
    })

    it('Logout with success', () => {
        const userData = { name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password(4) };
        cy.userSucessfulyLogin(userData.name, userData.email, userData.password);
        cy.get('button[data-testid="logout"]').click()
        cy.get('[class="font-robot"]').should('be.visible').should('have.text', 'Login')

    })
})

