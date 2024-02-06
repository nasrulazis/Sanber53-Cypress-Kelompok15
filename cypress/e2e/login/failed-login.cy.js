import LoginPage from "../../support/LoginPage"
const LoginData = require('../../fixtures/LoginData.json')
describe('Login functionality', () => {
    beforeEach(() => { 
        cy.visit('')
        LoginPage.ClickSignIn_link()
        cy.wait(2000)
      })
    it('Verify failed login with empty fields', () => {
        LoginPage.ClickSignIn_btn()
        cy.get(LoginPage.EmailError_field).should('contain', LoginPage.RequiredField_errormessage)
        cy.get(LoginPage.PasswodError_field).should('contain', LoginPage.RequiredField_errormessage)
    })
    it('Verify failed login with empty email field', () => {
        cy.get(LoginPage.Password_field).type(LoginData["correct-logindata"].defaultpassword) 
        LoginPage.ClickSignIn_btn()
        cy.get(LoginPage.EmailError_field).should('contain', LoginPage.RequiredField_errormessage)
    })
    it('Verify failed login with empty password field', () => {
        cy.get(LoginPage.Email_field).type(LoginData["correct-logindata"].email1) 
        LoginPage.ClickSignIn_btn()
        cy.get(LoginPage.PasswodError_field).should('contain', LoginPage.RequiredField_errormessage)
    })
    it('Verify failed login with invalid email', () => {
        cy.get(LoginPage.Email_field).type(LoginData["wrong-logindata"]["invalid-email"]) 
        cy.get(LoginPage.Password_field).type(LoginData["correct-logindata"].defaultpassword) 
        LoginPage.ClickSignIn_btn()
        cy.get(LoginPage.EmailError_field).should('contain', LoginPage.InvalidEMail_errormessage)
    })
    it('Verify failed login with wrong email', () => {
        cy.get(LoginPage.Email_field).type(LoginData["wrong-logindata"]["wrong-email"]) 
        cy.get(LoginPage.Password_field).type(LoginData["correct-logindata"].defaultpassword) 
        LoginPage.ClickSignIn_btn()
        cy.get(LoginPage.WrongCredentialserror_field).should('contain', LoginPage.WrongCredentials_errormessage)
    })
    it('Verify failed login with wrong password', () => {
        cy.get(LoginPage.Email_field).type(LoginData["correct-logindata"].email1) 
        cy.get(LoginPage.Password_field).type(LoginData["wrong-logindata"]["wrong-password"]) 
        LoginPage.ClickSignIn_btn()
        cy.get(LoginPage.WrongCredentialserror_field).should('contain', LoginPage.WrongCredentials_errormessage)
    })
  })