class 
    LoginPage{
        SignIn_link= '.panel > .header > .authorization-link > a'
        SignIn_btn= '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'
        Email_field= '[name="login[username]"]'
        Password_field= '[name="login[password]"]'
        EmailError_field= '#email-error'
        PasswodError_field= '#pass-error'
        WrongCredentialserror_field= '.message-error > div'
        RequiredField_errormessage = 'This is a required field'
        WrongCredentials_errormessage= 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'
        InvalidEMail_errormessage= 'Please enter a valid email address (Ex: johndoe@domain.com).'


    
    ClickSignIn_btn(){
        cy.get(this.SignIn_btn).click()
    }
    ClickSignIn_link(){
        cy.get(this.SignIn_link).click()
    }
}
export default new LoginPage()