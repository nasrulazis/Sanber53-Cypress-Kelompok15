class EditAddress {
    fieldFirstName = '#firstname'
    fieldLastName = '#lastname'
    fieldEmail = '#email'
    fieldPassword = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    fieldCurrentPassword = '#current-password'
    
    fieldCompany = '#company'
    fieldPhone = '#telephone'
    fieldStreetFirst = '#street_1'
    fieldStreetSecond = '#street_2'
    fieldStreetThird = '#street_3'
    fieldCity = '#city'
    fieldProvince = '#region'
    fieldCode = '#zip'
    fieldCountry = '#country' 

    newFirstName = 'Bigdaddy'
    newLastName = 'Notail'
    newCompany = 'Google'
    newPhone = '081111111111'
    newStreet = 'Test Street'
    newCity = 'Depok'
    newState = 'West Java'
    newCode = '123456'
    newCountry = 'Indonesia'


    dropdownMenuAccount = ':nth-child(2) > .customer-welcome > .customer-name > .action'
    dropdownItemAccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'

    btnMenuSignIn = '.panel > .header > .authorization-link > a'
    btnSignIn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    btnEditBillingAddress = '.box-billing-address > .box-actions > .action > span'

    btnEditShippingAddress = '.box-shipping-address > .box-actions > .action > span'
    btnSave = '#form-validate > .actions-toolbar > div.primary > .action'

    checkBoxEmail = '#change-email'
    checkBoxPassword = '#change-password'

    //credential
    currentEmail = 'test.sanbercode@yopmail.com'
    currentPassword = 'Password12345'


    loginUser() {
        cy.get(this.btnMenuSignIn).click()
        cy.get(this.fieldEmail).type(`${this.currentEmail}`)
        cy.get(this.fieldPassword).type(`${this.currentPassword}`)
        cy.get(this.btnSignIn).click()

    }

    navigateToEditBillingAddressPage() {
        cy.wait(2000)
        cy.get(this.dropdownMenuAccount).click()
        cy.get(this.dropdownItemAccount).click()
        cy.get(this.btnEditBillingAddress).click()
    }

    navigateToEditShippingAddressPage() {
        cy.wait(2000)
        cy.get(this.dropdownMenuAccount).click()
        cy.get(this.dropdownItemAccount).click()
        cy.get(this.btnEditShippingAddress).click()
    }

    verifyChangeAddressSuccess() {
        cy.get(this.fieldFirstName).clear().type(`${this.newFirstName}`)
        cy.get(this.fieldLastName).clear().type(`${this.newLastName}`)
        cy.get(this.fieldCompany).clear().type(`${this.newCompany}`)
        cy.get(this.fieldPhone).clear().type(`${this.newPhone}`)
        cy.get(this.fieldCountry).select(`${this.newCountry}`)
        cy.get(this.fieldStreetFirst).clear().type(`${this.newStreet}`)
        cy.get(this.fieldStreetSecond).clear().type(`${this.newStreet}`)
        cy.get(this.fieldStreetThird).clear().type(`${this.newStreet}`)
        cy.get(this.fieldCity).clear().type(`${this.newCity}`)
        cy.get(this.fieldProvince).clear().type(`${this.newState}`)
        cy.get(this.fieldCode).clear().type(`${this.newCode}`)
        cy.get(this.btnSave).click()
        
    }

    verifyChangeAddressFailed() {
        cy.get(this.fieldFirstName).clear()
        cy.get(this.fieldLastName).clear()
        cy.get(this.fieldCompany).clear()
        cy.get(this.fieldPhone).clear()
        cy.get(this.fieldCountry).select(``)
        cy.get(this.fieldStreetFirst).clear()
        cy.get(this.fieldStreetSecond).clear()
        cy.get(this.fieldStreetThird).clear()
        cy.get(this.fieldCity).clear()
        cy.get(this.fieldProvince).clear()
        cy.get(this.fieldCode).clear()
        cy.get(this.btnSave).click()
        
    }
}

export default new EditAddress()