import LoginPage from "../../support/LoginPage"
const LoginData = require('../../fixtures/LoginData.json')
describe('Login functionality', () => {
    beforeEach(() => {
        cy.visit('')
        cy.wait(2000)
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('.base').should('contain', 'Customer Login')
      })
    it('Verify successful login with valid credentials', () => { 
      cy.logindefault(LoginData["correct-logindata"].email1, LoginData["correct-logindata"].defaultpassword)
      cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
    })
    it('Verify successful login after changing password', () => {
        cy.logindefault(LoginData["correct-logindata"].email2, LoginData["correct-logindata"].defaultpassword)
        cy.wait(2000)
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
        cy.url().should('contain', '/customer/account/')
        cy.get('.change-password').click()
        cy.wait(2000)
        cy.url().should('contain', '/customer/account/edit/changepass/1/')
        cy.changingpassword(LoginData["correct-logindata"].defaultpassword, LoginData["correct-logindata"]["new-password"], LoginData["correct-logindata"]["new-password"])
        cy.url().should('contain', '/customer/account/login/')
        //re-login with new password "Qwerty123456"
        cy.loginnewpassword(LoginData["correct-logindata"].email2, LoginData["correct-logindata"]["new-password"])
        cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible') 
        //Change password back to default "Qwerty12345", so we can run this case over and over again
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
        cy.url().should('contain', '/customer/account/')
        cy.get('.change-password').click()
        cy.wait(2000)
        cy.url().should('contain', '/customer/account/edit/changepass/1/')
        cy.changingpassword(LoginData["correct-logindata"]["new-password"], LoginData["correct-logindata"].defaultpassword, LoginData["correct-logindata"].defaultpassword)
      })
  })