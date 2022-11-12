/// <reference types="cypress" />
import { faker } from '@faker-js/faker/';
const firstName = faker.name.firstName()
const lastName = faker.name.lastName()

describe('SauceDemo - Next QA - Cypress', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Realizar a compra de um produto com sucesso', () => {
      cy.login('standard_user', 'secret_sauce')      
      cy.get('[id="add-to-cart-sauce-labs-onesie"]').click()
      cy.get('[id="shopping_cart_container"]').click()
      cy.get('[id="checkout"]').click()
      cy.get('[id="first-name"]').type(firstName)
      cy.get('[id="last-name"]').type(lastName)
      cy.log(`Digitou o nome do usuário: ${firstName} ${lastName}`)
      cy.get('[id="postal-code"]').type("18430000")
      cy.get('[id="continue"]').click()
      cy.get('[id="finish"]').click()
      cy.get('h2[class="complete-header"]').should('have.text', "THANK YOU FOR YOUR ORDER")

    })
  
})