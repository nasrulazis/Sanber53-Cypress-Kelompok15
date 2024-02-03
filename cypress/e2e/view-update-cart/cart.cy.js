import Product from "../choose-product/product"
import Cart from "./cart"

describe('View And Update Cart', () => {
    beforeEach(() => {
        cy.visit('')
      })

      it('Verify the cart was empty', () => {
        Cart.cartIsEmpty()
      })

      it('Verify page for view and update shopping cart', () => {
        Product.verifyProductHero()
        cy.wait(8000)
        Cart.clickBtnViewCart()
        cy.url('').should('contain', '/checkout/cart/')
      })

      it('Verify updated shopping cart - success', () => {
        Product.verifyProductHero()
        cy.wait(8000)
        Cart.clickBtnViewCart()
        cy.get('[data-role="cart-item-qty"]').click().clear().type(20)        
        cy.get('.update > span').click()
        cy.contains(20)
      })

      it('Verify delete product from shopping cart - success', () => {
        Product.verifyProductHero()
        cy.wait(8000)
        Cart.clickBtnViewCart()
        cy.get('.action-delete').click()
        cy.wait(5000)
        cy.contains('You have no items in your shopping cart.')
      })
})