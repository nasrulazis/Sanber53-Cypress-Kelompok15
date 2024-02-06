const CreateAccountData = require('../../fixtures/CreateAccountData.json')
import CreateAccountPage from '../../support/CreateAccountPage'
describe('Create Account functionality', () => {
    it('Verify successful create an account', () => {
      cy.visit('')
      cy.wait(2000)
      cy.get(CreateAccountPage.CreateAccount_link).click()
      cy.get('.base').should('contain', 'Create New Customer Account')
      cy.get(CreateAccountPage.FirstName_field).type(`Firstname${Date.now()}`) //random name
      cy.get(CreateAccountPage.LastName_field).type(`Lastname${Date.now()}`) //random name
      cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`) //random valid email
      cy.get(CreateAccountPage.Password_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.PasswordConfirmation_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get('.message-success > div').should('contain','Thank you for registering with Main Website Store.' )
      cy.url().should('contain', 'customer/account/')
    })
  })