// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('logindefault', (email, password) => { 
    cy.get('[name="login[username]"]').type(email) 
    cy.get('[name="login[password]"]').type(password) 
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
})
Cypress.Commands.add('loginnewpassword', (email, password) => { 
    cy.get('[name="login[username]"]').type(email) 
    cy.get('[name="login[password]"]').type(password) 
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
})
Cypress.Commands.add('changingpassword', (currentpassword, newpassword, passwordconfirm) => { 
    cy.get('#current-password').type(currentpassword)
    cy.get('#password').type(newpassword)
    cy.get('#password-confirmation').type(passwordconfirm)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.message-success > div').should('contain', 'You saved the account information.')
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })