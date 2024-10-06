import 'cypress-file-upload';

Cypress.Commands.add('launchPage', () => {
    const url = Cypress.config('url');
    cy.visit(url);
    cy.get('header').should('not.be.empty');
})

Cypress.Commands.add('registerUser', (user) => {
    // 4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click();
    // 5. Verify 'New User Signup!' is visible
    cy.get('.signup-form h2').should('contain.text', 'New User Signup!');
    // 6. Enter name and email address
    cy.get('input[data-qa="signup-name"]').type(user.name);
    cy.get('input[data-qa="signup-email"]').type(user.email);
    // 7. Click 'Signup' button
    cy.get('button[data-qa="signup-button"]').click();
    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get('h2.title.text-center').should('contain.text', 'Enter Account Information');
    // 9. Fill details: Title, Name, Email, Password, Date of birth
    cy.get('input[data-qa="password"]').type(user.password);
    cy.get('select[data-qa="days"]').select(user.dob.day);
    cy.get('select[data-qa="months"]').select(user.dob.month);
    cy.get('select[data-qa="years"]').select(user.dob.year);
    // 10. Select checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').check().should('be.checked');
    // 11. Select checkbox 'Receive special offers from our partners!'
    cy.get('#optin').check().should('be.checked');
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('input[data-qa="first_name"]').type(user.first_name);
    cy.get('input[data-qa="last_name"]').type(user.last_name);
    cy.get('input[data-qa="address"]').type(user.address);
    cy.get('input[data-qa="address2"]').type(user.address2);
    cy.get('input[data-qa="company"]').type(user.company);
    cy.get('select[data-qa="country"]').select(user.country);
    cy.get('input[data-qa="state"]').type(user.state);
    cy.get('input[data-qa="city"]').type(user.city);
    cy.get('input[data-qa="zipcode"]').type(user.zipcode);
    cy.get('input[data-qa="mobile_number"]').type(user.mobile_number);
    // 13. Click 'Create Account button'
    cy.get('button[data-qa="create-account"]').click();
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    cy.get('h2.title.text-center').should('contain.text', 'Account Created!');
    // 15. Click 'Continue' button
    cy.get('a[data-qa="continue-button"]').click();
});

Cypress.Commands.add('loginUser', (user) => {
    // 4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click();
    // 5. Verify 'Login to your account' is visible
    cy.get('.login-form h2').should('contain.text', 'Login to your account');
    // 6. Enter correct email address and password
    cy.get('input[data-qa="login-email"]').type(user.email);
    cy.get('input[data-qa="login-password"]').type(user.password);
    // 7. Click 'login' button
    cy.get('button[data-qa="login-button"]').click();
    // 8. Verify that 'Logged in as username' is visible
    cy.contains('Logged in as ' + user.name).should('be.visible');
});

Cypress.Commands.add('deleteAccount', () => {
    // 9. Click 'Delete account' button
    cy.get('a[href="/delete_account"]').should('be.visible').click();
    // 10. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.get('h2.title.text-center').should('contain.text', 'Account Deleted!');
    cy.get('a[data-qa="continue-button"]').click();
});

