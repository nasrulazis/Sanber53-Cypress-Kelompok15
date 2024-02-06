import EditAddress from "./edit_address"

describe('Edit User Address', () => {

    beforeEach(() => {
        cy.visit('')
        EditAddress.loginUser()
    })

    context('Edit Billing Address', () => {
        beforeEach(() => {
            EditAddress.navigateToEditBillingAddressPage()
        })
        //Change user's billing address - positive
        it('Successfully changing billing address', () => {

            EditAddress.verifyChangeAddressSuccess()
            cy.get('.message-success').should('be.visible')
        })

        it('Failed changing billing address - Empty Input', () => {

            EditAddress.verifyChangeAddressFailed()
            cy.get('#firstname-error').should('be.visible')
            cy.get('#lastname-error').should('be.visible')
            cy.get('#telephone-error').should('be.visible')
            cy.get('#street_1-error').should('be.visible')
            cy.get('#city-error').should('be.visible')
            cy.get('#zip-error').should('be.visible')
            cy.get('#country-error').should('be.visible')
        })

    })


    context('Edit Shipping Address', () => {
        beforeEach(() => {
            EditAddress.navigateToEditShippingAddressPage()
        })
        //Change user's billing address - positive
        it('Successfully changing shipping address', () => {
            EditAddress.verifyChangeAddressSuccess()
            cy.get('.message-success').should('be.visible')
        })

        it('Failed changing shipping address - Empty Input', () => {

            EditAddress.verifyChangeAddressFailed()
            cy.get('#firstname-error').should('be.visible')
            cy.get('#lastname-error').should('be.visible')
            cy.get('#telephone-error').should('be.visible')
            cy.get('#street_1-error').should('be.visible')
            cy.get('#city-error').should('be.visible')
            cy.get('#zip-error').should('be.visible')
            cy.get('#country-error').should('be.visible')
        })
    })
})

//case 1: Change user billing address - success
//case 2: Change user billing address - failed (empty input)
//case 3: Change user billing address - success
//case 4: Change user billing address - failed (empty input)