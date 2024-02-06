class EditAccount {
    fieldFirstName = '#firstname'
    fieldLastName = '#lastname'
    fieldEmail = '#email'
    fieldPassword = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    fieldCurrentPassword = '#current-password'
    fieldNewPassword = '#password'
    fieldNewPasswordConfirmation = '#password-confirmation'

    dropdownMenuAccount = ':nth-child(2) > .customer-welcome > .customer-name > .action'
    dropdownItemAccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'

    btnMenuSignIn = '.panel > .header > .authorization-link > a'
    btnSignIn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    btnEdit = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
    btnSave = '#form-validate > .actions-toolbar > div.primary > .action'

    checkBoxEmail = '#change-email'
    checkBoxPassword = '#change-password'

    //credential
    newFirstName = 'John'
    newLastName = 'Doe'
    currentEmail = 'test.sanbercode@yopmail.com'
    newEmail = 'test.sanbercode12345@yopmail.com'
    wrongEmail = 'lorem ipsum'
    currentPassword = 'Password12345'
    newPassword = 'Password123'


    loginUser() {
        cy.get(this.btnMenuSignIn).click()
        cy.get(this.fieldEmail).type(`${this.currentEmail}`)
        cy.get(this.fieldPassword).type(`${this.currentPassword}`)
        cy.get(this.btnSignIn).click()

    }

    navigateToEditPage() {
        cy.wait(2000)
        cy.get(this.dropdownMenuAccount).click()
        cy.get(this.dropdownItemAccount).click()
        cy.get(this.btnEdit).click()
    }

    verifyChangeAccountDataSuccess() {
        cy.get(this.fieldFirstName).clear().type(`${this.newFirstName}`)
        cy.get(this.fieldLastName).clear().type(`${this.newLastName}`)
        cy.get(this.btnSave).click()
    }

    verifyChangeAccountDataFailed() {
        cy.get(this.fieldFirstName).clear()
        cy.get(this.fieldLastName).clear()
        cy.get(this.btnSave).click()
    }

    verifyChangeEmailSuccess() {
        cy.get(this.checkBoxEmail).check()
        cy.get(this.fieldEmail).clear().type(`${this.newEmail}`)
        cy.get(this.fieldCurrentPassword).clear().type(`${this.currentPassword}`)
        cy.get(this.btnSave).click()
    }

    reverseEmailCreds() {
        cy.get(this.fieldEmail).type(`${this.newEmail}`)
        cy.get(this.fieldPassword).type(`${this.currentPassword}`)
        cy.get(this.btnSignIn).click()
        this.navigateToEditPage()

        //change email back to first creds
        cy.get(this.checkBoxEmail).check()
        cy.get(this.fieldEmail).clear().type(`${this.currentEmail}`)
        cy.get(this.fieldCurrentPassword).clear().type(`${this.currentPassword}`)
        cy.get(this.btnSave).click()
    }

    verifyChangeEmailFailed() {
        cy.get(this.checkBoxEmail).check()
        cy.get(this.fieldEmail).clear().type(`${this.wrongEmail}`)
        cy.get(this.fieldCurrentPassword).clear().type(`${this.currentPassword}`)
        cy.get(this.btnSave).click()
    }

    verifyChangePasswordSuccess() {
        cy.get(this.checkBoxPassword).check()
        cy.get(this.fieldCurrentPassword).clear().type(`${this.currentPassword}`)
        cy.get(this.fieldNewPassword).clear().type(`${this.newPassword}`)
        cy.get(this.fieldNewPasswordConfirmation).clear().type(`${this.newPassword}`)
        cy.get(this.btnSave).click()
    }

    reversePasswordCreds() {
        cy.get(this.fieldEmail).type(`${this.currentEmail}`)
        cy.get(this.fieldPassword).type(`${this.newPassword}`)
        cy.get(this.btnSignIn).click()
        cy.get(this.btnEdit).click()

        //change password back to first creds
        cy.get(this.checkBoxPassword).check()
        cy.get(this.fieldCurrentPassword).clear().type(`${this.newPassword}`)
        cy.get(this.fieldNewPassword).clear().type(`${this.currentPassword}`)
        cy.get(this.fieldNewPasswordConfirmation).clear().type(`${this.currentPassword}`)
        cy.get(this.btnSave).click()
    }

    verifyChangePasswordFailed() {
        cy.get(this.checkBoxPassword).check()
        cy.get(this.fieldCurrentPassword).clear().type(`${this.currentPassword}`)
        cy.get(this.fieldNewPassword).clear().type(`1`)
        cy.get(this.fieldNewPasswordConfirmation).clear().type(`1`)
        cy.get(this.btnSave).click()
    }

}

export default new EditAccount()