class Product {
    // Positive
    btnProductHero = ':nth-child(4) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo'
    btnProductBag = ':nth-child(5) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo'
    btnSizeHero = '#option-label-size-143-item-166'
    btnColorHero = '#option-label-color-93-item-52'
    btnAddToCart= '#product-addtocart-button'    

    verifyProductHero() {
        cy.get(this.btnProductHero).click()
        cy.wait(5000)
        cy.get(this.btnSizeHero).click()
        cy.wait(5000)
        cy.get(this.btnColorHero).click()
        cy.wait(5000)
        cy.get(this.btnAddToCart).click()
        
    }

    // Negative
    negativeProductHero() {
        cy.get(this.btnProductHero).click()
        cy.wait(5000)        
        cy.get(this.btnSizeHero).click()
        cy.wait(5000)
        cy.get(this.btnColorHero).click()
        cy.wait(5000)
        cy.get('#qty').click().clear().type(0)
        cy.wait(5000)
        cy.get(this.btnAddToCart).click()        
        cy.contains('Please enter a quantity greater than 0.')       
    }

    negativeProductAddtoCart() {
        cy.get(this.btnProductHero).click()
        cy.wait(5000)
        cy.get(this.btnColorHero).click()
        cy.wait(5000)
        cy.get(this.btnAddToCart).click()
        cy.wait(5000)
        cy.contains('This is a required field.')
    }

    negativeProductBag() {
        cy.get(this.btnProductBag).click()        
        cy.wait(10000)
        cy.get(this.btnAddToCart).click()
        cy.wait(20000)
        cy.get('.message-error').should('be.visible')
    }
}

export default new Product()