import Checkout from "./checkout"
import Cart from "../view-update-cart/cart"
import Product from "../choose-product/product"


describe('Process to Checkout', () => {
    beforeEach(() => {
        cy.visit('')
        Product.verifyProductHero()
        Cart.cartHasItems()
        Checkout.clickBtnCheckout()
    })

    it('Verify checkout - Success', () => {
        Checkout.verifyShippingAdressPage()
        Checkout.fillShippingAdressForm()
        Checkout.clickBtnNext()
        Checkout.verifyReviewAndPayments()
        Checkout.clickPlaceOrder()
    })

    it('Verify Failed Checkout - Not choose Shipping method', () => {
        Checkout.verifyShippingAdressPage()
        Checkout.clickBtnNext()
        Checkout.verifyShippingMethodMissing()
    })

    it('Verify Failed Apply Discount Code', () => {
        Checkout.verifyShippingAdressPage()
        Checkout.fillShippingAdressForm()
        Checkout.clickBtnNext()
        Checkout.verifyReviewAndPayments()
        Checkout.clickApplyDiscountCode()
        Checkout.clickBtnApplyDiscount()
        Checkout.verifyDiscountCodeRequired()
    })
})