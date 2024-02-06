import EditAccount from "./edit_account"

describe('Edit Account Information', () => {
    beforeEach(() => {
        cy.visit('')
        EditAccount.loginUser()
        EditAccount.navigateToEditPage()
    })

    //Change user's firstname and lastname - positive
    it('Successfully changing user firstname and lastname', () => {
        EditAccount.verifyChangeAccountDataSuccess()
        cy.get('.message-success').should('be.visible')
    })

    //Change user's firstname and lastname - negative
    it('Failed changing user firstname and lastname - Empty Input', () => {
        EditAccount.verifyChangeAccountDataFailed()
        cy.get('#firstname-error').should('be.visible')
        cy.get('#lastname-error').should('be.visible')

    })

    //Change user's email - positive
    it('Successfully changing user email', () => {
        EditAccount.verifyChangeEmailSuccess()
        cy.get('.message-success').should('be.visible')
        EditAccount.reverseEmailCreds()
    })

    //Change user's email - negative
    it('Failed changing user email - Invalid Format', () => {
        EditAccount.verifyChangeEmailFailed()
        cy.get('#email-error').contains('Please enter a valid email address.')
    })

    //Change user's password - positive
    it('Successfully changing user password', () => {
        EditAccount.verifyChangePasswordSuccess()
        cy.get('.message-success').should('be.visible')
        EditAccount.reversePasswordCreds()
    })

    //Change user's password - negative
    it('Failed changing user password - Invalid Format', () => {
        EditAccount.verifyChangePasswordFailed()
        cy.get('#password-error').contains('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    })

})