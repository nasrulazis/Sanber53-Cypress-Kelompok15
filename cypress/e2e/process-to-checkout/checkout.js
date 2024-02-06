class Checkout {
    btnCheckOut = '#top-cart-btn-checkout'
    txtShippingTitle = '#shipping > .step-title'
    txtEmailAdress = '#customer-email-fieldset > .required > label.label > span'
    txtFirstName = '[name="shippingAddress.firstname"] > .label > span'
    txtLastName = '[name="shippingAddress.lastname"] > .label > span'
    txtCompany = '[name="shippingAddress.company"] > .label > span'
    txtStreetAdress = 'legend.label > span'
    txtCity = '[name="shippingAddress.city"] > .label > span'
    txtStateProvince = '[name="shippingAddress.region_id"] > .label > span'
    txtPostalCode = '[name="shippingAddress.postcode"] > .label > span'
    txtCountry = '[name="shippingAddress.postcode"] > .label > span'
    txtPhoneNumber = '[name="shippingAddress.telephone"] > label.label > span'
    txtShippingMethodTitle = '.checkout-shipping-method > .step-title'
    etxEmailAdress = '#customer-email-fieldset > .required > .control > #customer-email'
    etxFirstName = '[name="shippingAddress.firstname"] .input-text'
    etxLastName = '[name="shippingAddress.lastname"] .input-text'
    etxCompany = '[name="shippingAddress.company"] .input-text'
    etxStreetAdress1 = '.street .input-text'
    etxCity = '[name="shippingAddress.city"] .input-text'
    drpStateProvince = '[name="shippingAddress.region_id"] .select'
    etxPostalCode = '[name="shippingAddress.postcode"] .input-text'
    drpCountry = '[name="shippingAddress.country_id"] .select'
    etxPhoneNumber = '[name="shippingAddress.telephone"] .input-text'
    btnNext = '.button'
    btnRadioShipping = ':nth-child(2) > :nth-child(1) > .radio'

    txtPaymentMethod = '.payment-group > .step-title'
    txtCheckMoneyOrder = '.payment-method-title > .label > span'
    txtOrderSummary = 'span.title'
    txtCartSubtotal = '.sub > .mark'
    txtCartSubtotalAmount = '.sub > .amount > .price'
    txtShipping = '.mark > .label' 
    txtShippingAmount = '.shipping > .amount > .price'
    txtShippingValue = '.mark > .value'
    txtOrderTotal = '.mark > strong'
    txtOrderTotalAmount = 'strong > .price'
    txtShipToTitle = '.ship-to > .shipping-information-title'
    txtShipMethod = '.ship-via > .shipping-information-title'

    btnPlaceOrder = '.payment-method-content > :nth-child(4) > div.primary > .action'
    txtShippingMethodMissing = '#co-shipping-method-form > .message'

    txtApplyDiscountCode = '#block-discount-heading'
    extDiscountCode = '#discount-code'
    btnApplyDiscount = '#discount-form > .actions-toolbar > .primary > .action'
    txtDiscountCodeError = '#discount-code-error'

    clickApplyDiscountCode(){
        cy.get(this.txtApplyDiscountCode).click()
    }

    clickBtnApplyDiscount(){
        cy.get(this.btnApplyDiscount).click()
    }

    verifyDiscountCodeRequired(){
        cy.get(this.txtDiscountCodeError).contains('This is a required field.')
    }

    verifyShippingMethodMissing(){
        cy.get(this.txtShippingMethodMissing).contains('The shipping method is missing. Select the shipping method and try again.')
    }

    verifyReviewAndPayments(){
        cy.get(this.txtPaymentMethod).should('be.visible')
        cy.get(this.txtCheckMoneyOrder).should('be.visible')
        cy.get(this.txtOrderSummary).should('be.visible')
        cy.get(this.txtCartSubtotal).should('be.visible')
        cy.get(this.txtCartSubtotalAmount).should('be.visible')
        cy.get(this.txtShipping).should('be.visible')
        cy.get(this.txtShippingAmount).should('be.visible')
        cy.get(this.txtShippingValue).should('be.visible')
        cy.get(this.txtOrderTotal).should('be.visible')
        cy.get(this.txtOrderTotalAmount).should('be.visible')
        cy.get(this.txtShipToTitle).should('be.visible')
        cy.get(this.txtShipMethod).should('be.visible')
    }

    clickBtnCheckout(){
        cy.get(this.btnCheckOut).click()
        cy.wait(10000)
    }

    verifyShippingAdressPage(){
        cy.get(this.txtShippingTitle).should('be.visible')
        cy.get(this.txtEmailAdress).should('be.visible')
        cy.get(this.txtFirstName).should('be.visible')
        cy.get(this.txtLastName).should('be.visible')
        cy.get(this.txtCompany).should('be.visible')
        cy.get(this.txtStreetAdress).should('be.visible')
        cy.get(this.txtCity).should('be.visible')
        cy.get(this.txtStateProvince).should('be.visible')
        cy.get(this.txtPostalCode).should('be.visible')
        cy.get(this.txtCountry).should('be.visible')
        cy.get(this.txtPhoneNumber).should('be.visible')
        cy.get(this.txtShippingMethodTitle).should('be.visible')
    }
    
    fillShippingAdressForm(){
        cy.get(this.etxEmailAdress).type('testingmagento@gmail.com')
        cy.get(this.etxFirstName).type('testing')
        cy.get(this.etxLastName).type('magento')
        cy.get(this.etxCompany).type('magentoInc')
        cy.get(this.etxStreetAdress1).eq(0).type('test')
        cy.get(this.etxCity).type('test')
        cy.get(this.drpStateProvince).select('Alaska')
        cy.get(this.drpCountry).select('United States')
        cy.get(this.etxPostalCode).type('62311')
        cy.get(this.etxPhoneNumber).type('081123123123')
        cy.get(this.btnRadioShipping).click()
    }
    clickBtnNext(){
        cy.get(this.btnNext).click()
        cy.wait(5000)
    }

    clickPlaceOrder(){
        cy.get(this.btnPlaceOrder).click()
        cy.wait(5000)
    }

    
}

export default new Checkout()