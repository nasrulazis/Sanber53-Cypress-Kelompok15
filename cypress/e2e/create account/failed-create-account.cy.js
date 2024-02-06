const CreateAccountData = require('../../fixtures/CreateAccountData.json')
import CreateAccountPage from '../../support/CreateAccountPage'
describe('Create Account functionality', () => {
    beforeEach(() => { 
        cy.visit('')
        cy.wait(2000)
        cy.get(CreateAccountPage.CreateAccount_link).click()
        cy.get('.base').should('contain', 'Create New Customer Account')
      })
    it('Verify failed create an account with empty fields', () => {
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.FirstNameerror_field).should('contain', CreateAccountPage.RequiredField_errormessage)
      cy.get(CreateAccountPage.LastNameerror_field).should('contain', CreateAccountPage.RequiredField_errormessage)
      cy.get(CreateAccountPage.Emailerror_field).should('contain', CreateAccountPage.RequiredField_errormessage)
      cy.get(CreateAccountPage.Passworderror_field).should('contain', CreateAccountPage.RequiredField_errormessage)
      cy.get(CreateAccountPage.PasswordConfirmationerror_field).should('contain', CreateAccountPage.RequiredField_errormessage)
    })
    it('Verify failed create an account with invalid email', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Email_field).type(CreateAccountData['wrong-createaccountdata']['invalid-email'])
      cy.get(CreateAccountPage.Password_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.PasswordConfirmation_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.wait(1000)
      cy.get(CreateAccountPage.Emailerror_field).should('be.visible')
    })
    it('Verify failed create an account with registered email', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Email_field).type(CreateAccountData['wrong-createaccountdata']['registered-email'])
      cy.get(CreateAccountPage.Password_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.PasswordConfirmation_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get('.message-error > div').should('be.visible')
    })
    it('Verify failed create an account with empty first name field', () => {
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`)
      cy.get(CreateAccountPage.Password_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.PasswordConfirmation_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.FirstNameerror_field).should('contain', CreateAccountPage.RequiredField_errormessage)
    })
    it('Verify failed create an account with empty last name field', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`)
      cy.get(CreateAccountPage.Password_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.PasswordConfirmation_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.LastNameerror_field).should('contain', CreateAccountPage.RequiredField_errormessage)
    })
    it('Verify failed create an account with empty email field', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Password_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.PasswordConfirmation_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.Emailerror_field).should('contain', CreateAccountPage.RequiredField_errormessage)
    })
    it('Verify failed create an account with empty password field', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`)
      cy.get(CreateAccountPage.PasswordConfirmation_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.Passworderror_field).should('contain', CreateAccountPage.RequiredField_errormessage)
    })
    it('Verify failed create an account with empty confirmation password field', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`)
      cy.get(CreateAccountPage.Password_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.PasswordConfirmationerror_field).should('contain', CreateAccountPage.RequiredField_errormessage)
    })
    it('Verify failed create an account with wrong input confirmation password field', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`)
      cy.get(CreateAccountPage.Password_field).type(CreateAccountData['correct-createaccountdata']['default-password'])
      cy.get(CreateAccountPage.PasswordConfirmation_field).type(CreateAccountData['wrong-createaccountdata']['wrong-password'])
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.PasswordConfirmationerror_field).should('contain', 'Please enter the same value again.')
    })
    it('Verify failed create an account with password less than 8 characters', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`)
      cy.get(CreateAccountPage.Password_field).type('Qwerty1')
      cy.get(CreateAccountPage.PasswordConfirmation_field).type('Qwerty1')
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.Passworderror_field).should('contain', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    })
    it('Verify failed create an account password without using Lower Case and Special Characters', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`)
      cy.get(CreateAccountPage.Password_field).type('QWERTYUIOPASDFGH12345')
      cy.get(CreateAccountPage.PasswordConfirmation_field).type('QWERTYUIOPASDFGH12345')
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.Passworderror_field).should('contain', CreateAccountPage.MinimumRequirement_errormessage)
    })
    it('Verify failed create an account password without using Uper Case and Special Characters', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`)
      cy.get(CreateAccountPage.Password_field).type('qwerty12345')
      cy.get(CreateAccountPage.PasswordConfirmation_field).type('qwerty12345')
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.Passworderror_field).should('contain', CreateAccountPage.MinimumRequirement_errormessage)
    })
    it('Verify failed create an account password without using Digits and Special Characters', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`)
      cy.get(CreateAccountPage.Password_field).type('qwertyASDFG')
      cy.get(CreateAccountPage.PasswordConfirmation_field).type('qwertyASDFG')
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.Passworderror_field).should('contain', CreateAccountPage.MinimumRequirement_errormessage)
    })
    it('Verify failed create an account password without using Digits and lower case', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`)
      cy.get(CreateAccountPage.Password_field).type('QWERTY!@#$%^')
      cy.get(CreateAccountPage.PasswordConfirmation_field).type('QWERTY!@#$%^')
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.Passworderror_field).should('contain', CreateAccountPage.MinimumRequirement_errormessage)
    })
    it('Verify failed create an account password without using Digits and Upper case', () => {
      cy.get(CreateAccountPage.FirstName_field).type(CreateAccountData['correct-createaccountdata']['first-name'])
      cy.get(CreateAccountPage.LastName_field).type(CreateAccountData['correct-createaccountdata']['last-name'])
      cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`)
      cy.get(CreateAccountPage.Password_field).type('qwerty!@#$%^')
      cy.get(CreateAccountPage.PasswordConfirmation_field).type('qwerty!@#$%^')
      cy.get(CreateAccountPage.CreateAccount_btn).click()
      cy.get(CreateAccountPage.Passworderror_field).should('contain', CreateAccountPage.MinimumRequirement_errormessage)
    })
  })