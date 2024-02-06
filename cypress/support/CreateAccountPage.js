class 
    CreateAccountPage{
        CreateAccount_link= '.panel > .header > :nth-child(3) > a'
        CreateAccount_btn= '#form-validate > .actions-toolbar > div.primary > .action > span'
        FirstName_field= '#firstname'
        LastName_field= '#lastname'
        Email_field= '#form-validate > .account > :nth-child(3)'
        Password_field= '#password'
        PasswordConfirmation_field= '#password-confirmation'
        FirstNameerror_field= '#firstname-error'
        LastNameerror_field= '#lastname-error'
        Emailerror_field= '#email_address-error'
        Passworderror_field= '#password-error'
        PasswordConfirmationerror_field= '#password-confirmation-error'
        RequiredField_errormessage= 'This is a required field'
        MinimumRequirement_errormessage= 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.'
        PasswordStrengthMeter= '#password-strength-meter-label'

}
export default new CreateAccountPage()