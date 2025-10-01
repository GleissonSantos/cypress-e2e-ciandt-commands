/// <reference types="cypress"  />
import { faker } from '@faker-js/faker';

describe('Register new user at Serverest', () => {

  beforeEach('Acesss servertest new user page', () => {

    cy.acessRegistrationPage()
  })

  // Test cases
  it('Register new user without password', () => {

    const dataUser = {randomEmail: faker.internet.email(), randomName: faker.person.fullName()}

    cy.tryingInsucessRegistration(dataUser.randomName, dataUser.randomEmail,'')
    cy.validateErrorMessage('×Password é obrigatório')
  })

  it('Register new user with invalid email', () => {
    const dataUser = {randomName: faker.person.fullName(), randomPassword: faker.internet.password(4)} 

    cy.tryingInsucessRegistration(dataUser.randomName, 'invalidEmail@teste', dataUser.randomPassword)
    cy.validateErrorMessage('×Email deve ser um email válido')
  })

  it('Register new user without email', () => {
    const dataUser = {randomName: faker.person.fullName(), randomPassword: faker.internet.password(4)} 

    cy.tryingInsucessRegistration(dataUser.randomName, '', dataUser.randomPassword)
    cy.validateErrorMessage('×Email é obrigatório')
  })

  it('Register new simple user successful', () => {

    const dataUser = {randomEmail: faker.internet.email(), randomPassword: faker.internet.password(4), randomName: faker.person.fullName()}
    
    cy.sucessfulRegularCustomerRegister(dataUser.randomName, dataUser.randomEmail, dataUser.randomPassword)
  })

  it('Register new admin user successful', () => {
    const dataUser = {randomEmail: faker.internet.email(), randomPassword: faker.internet.password(4), randomName: faker.person.fullName()}
    
    cy.sucessfulAdministratorRegister(dataUser.randomName, dataUser.randomEmail, dataUser.randomPassword)
  })

  it('Register new user with already registered email', () => {
    const dataUser = {randomEmail: faker.internet.email(), randomPassword: faker.internet.password(4), randomName: faker.person.fullName()}

    cy.sucessfulRegularCustomerRegister(dataUser.randomName, dataUser.randomEmail, dataUser.randomPassword)
    cy.acessRegistrationPage()
    cy.tryingInsucessRegistration(dataUser.randomName, dataUser.randomEmail, dataUser.randomPassword)
    cy.validateErrorMessage('×Este email já está sendo usado')
  })
})
