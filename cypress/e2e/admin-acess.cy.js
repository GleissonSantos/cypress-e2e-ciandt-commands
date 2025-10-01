/// <reference types="cypress"  />
import { faker } from '@faker-js/faker';

describe('Admin access', () => {
    
    // Test cases       

    // Validate login with admin user
    it('Validate admin login functionality', () => {

        const adminData = { name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password(4) };
        cy.adminSucessfulLogin(adminData.name, adminData.email, adminData.password);
        cy.validateAdminDashboard();
    })

})