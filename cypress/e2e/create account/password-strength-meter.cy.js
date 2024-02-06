import CreateAccountPage from '../../support/CreateAccountPage'
describe('Password Strength Meter functionality', () => {
    beforeEach(() => { 
        cy.visit('')
        cy.wait(2000)
        cy.get(CreateAccountPage.CreateAccount_link).click()
        cy.get('.base').should('contain', 'Create New Customer Account')
      })
    it('Verify password strength meter: Weak', () => {
        cy.get(CreateAccountPage.FirstName_field).type(`Firstname${Date.now()}`) 
        cy.get(CreateAccountPage.LastName_field).type(`Lastname${Date.now()}`)
        cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`) 
        cy.get(CreateAccountPage.Password_field).type('12345678Qq')
        cy.get(CreateAccountPage.CreateAccount_btn).click()
        cy.get(CreateAccountPage.PasswordStrengthMeter).should('contain', 'Weak')
      })
    it('Verify password strength meter: Medium', () => {
        cy.get(CreateAccountPage.FirstName_field).type(`Firstname${Date.now()}`) 
        cy.get(CreateAccountPage.LastName_field).type(`Lastname${Date.now()}`)
        cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`) 
        cy.get(CreateAccountPage.Password_field).type('Qwerty12345')
        cy.get(CreateAccountPage.CreateAccount_btn).click()
        cy.get(CreateAccountPage.PasswordStrengthMeter).should('contain', 'Medium')
    })
    it('Verify password strength meter: Strong', () => {
        cy.get(CreateAccountPage.FirstName_field).type(`Firstname${Date.now()}`) 
        cy.get(CreateAccountPage.LastName_field).type(`Lastname${Date.now()}`)
        cy.get(CreateAccountPage.Email_field).type(`${Date.now()}-Kelompok15@Sanber53.com`) 
        cy.get(CreateAccountPage.Password_field).type('Qwerty12345@')
        cy.get(CreateAccountPage.CreateAccount_btn).click()
        cy.get(CreateAccountPage.PasswordStrengthMeter).should('contain', 'Strong')
      })
  })