/// <reference types="cypress" />
import loginPage from '../pages/LoginPage'

describe('Login - SauceDemo - Next QA - Cypress', () => {
    beforeEach(() => {

        cy.visit('/')
        cy.fixture('./dados_login.json').as('dados')
    })

    it('Realizar login com sucesso', () => {
        cy.get('@dados').then((dados) => {
            loginPage.login_success(dados.valid.user, dados.valid.password)
            loginPage.click_login()
        })
        cy.get('span[class="title"]').should('have.text', 'Products')
    })

    it('Validar login com senha inválida', () => {
        cy.get('@dados').then((dados) => {
            loginPage.login_success(dados.invalid_password.user, dados.invalid_password.password)
            loginPage.click_login()
        })
        cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
})