class Cart {
    btnCart = '.showcart'
    btnViewCart = ':nth-child(7) > .secondary > .action > span'
    txtcartItemInCart = '.count'

    //positive
    clickBtnViewCart() {
        cy.get(this.btnCart).click()
        cy.get(this.btnViewCart).click()
    }

    cartIsEmpty() {
        cy.get(this.btnCart).click()
        cy.contains('You have no items in your shopping cart.')
    }

    cartHasItems() {
        cy.wait(3000)
        cy.get(this.btnCart).click()
        cy.get(this.txtcartItemInCart).then(($num)=> {
            const num1 = parseInt($num.text());
            expect(num1).equal(1);
        })
        
    }
}

export default new Cart()