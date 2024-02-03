import Product from "./product"

describe('Choose Product', () => {
    beforeEach(() => {
        cy.visit('')
      })
      it('Verify add product - success', () => {
        Product.verifyProductHero()
        cy.wait(5000)
        cy.get('.message-success').should('be.visible')
      })
      
      it('Verify add product - append qty to cart', () => {
        Product.verifyProductHero()
        cy.get('.counter-number').should('be.visible')
      })

      it('Verify Failed add product - Not choose size or color ', () => {
        Product.negativeProductAddtoCart()
      })

      it('Verify Failed add product - The requested qty is not available ', () => {
        Product.negativeProductBag()
      })

      it('Verify Failed add product - qty equal to 0 ', () => {
        Product.negativeProductHero()
      })

})