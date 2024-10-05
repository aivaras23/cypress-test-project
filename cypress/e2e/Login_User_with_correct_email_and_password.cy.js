describe('Test Case 2: Should login as a user with the correct email and password, then delete the account successfully', () => {
  beforeEach(() => {
    // 1. Launch browser, 
    // 2. navigate to url,
    // 3. Verify that home page is visible successfully
    cy.launchPage();
    // Load user data from fixture
    cy.fixture('User1').as('user');
  });
  // firstly register a new account
  it('Fill in account information, register the user and then delete it', () => {
    cy.get('@user').then((user) => {
      cy.get('a[href="/login"]').click();
      cy.get('.signup-form h2').should('contain.text', 'New User Signup!');
      cy.get('input[data-qa="signup-name"]').type(user.name);
      cy.get('input[data-qa="signup-email"]').type(user.email);
      cy.get('button[data-qa="signup-button"]').click();
      cy.get('h2.title.text-center').should('contain.text', 'Enter Account Information');
      cy.get('input[data-qa="password"]').type(user.password);
      cy.get('select[data-qa="days"]').select(user.dob.day);
      cy.get('select[data-qa="months"]').select(user.dob.month);
      cy.get('select[data-qa="years"]').select(user.dob.year);
      cy.get('#newsletter').check().should('be.checked');
      cy.get('#optin').check().should('be.checked');
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
      cy.get('button[data-qa="create-account"]').click();
      cy.get('h2.title.text-center').should('contain.text', 'Account Created!');
      cy.get('a[data-qa="continue-button"]').click();
    });
  });


  it('Log in to the account.', () => {
    // 4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click();
    // 5. Verify 'Login to your account' is visible
    cy.get('.login-form h2').should('contain.text', 'Login to your account');

    cy.get('@user').then((user) => {
      // 6. Enter correct email address and password
      cy.get('input[data-qa="login-email"]').type(user.email);
      cy.get('input[data-qa="login-password"]').type(user.password);
      // 7. Click 'login' button
      cy.get('button[data-qa="login-button"]').click();
      // 8. Verify that 'Logged in as username' is visible
      cy.contains('Logged in as ' + user.name).should('be.visible');
      // 9. Click 'Delete Account' button
      cy.get('a[href="/delete_account"]').should('be.visible').click();
      // 10. Verify that 'ACCOUNT DELETED!' is visible
      cy.get('h2.title.text-center').should('contain.text', 'Account Deleted!');
      // Click 'Continue' button
      cy.get('a[data-qa="continue-button"]').click();
    });

  });
})