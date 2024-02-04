class Cart {
    btnCart = '.showcart'
    btnViewCart = ':nth-child(7) > .secondary > .action > span'

    //positive
    clickBtnViewCart() {
        cy.get(this.btnCart).click()
        cy.get(this.btnViewCart).click()
    }

    cartIsEmpty() {
        cy.get(this.btnCart).click()
        cy.contains('You have no items in your shopping cart.')
    }
}

export default new Cart()