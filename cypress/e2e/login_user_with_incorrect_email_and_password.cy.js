describe('Test Case 3: Login User with incorrect email and password', () => {
  beforeEach(() => {
    // 1. Launch browser, 
    // 2. navigate to url,
    // 3. Verify that home page is visible successfully
    cy.launchPage();
    // Load user data from fixture
    cy.fixture('IncorrectUserData').as('user');
  });

  it('Log in to the account.', () => {
    // 4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click();
    // 5. Verify 'Login to your account' is visible
    cy.get('.login-form h2').should('contain.text', 'Login to your account');

    cy.get('@user').then((user) => {
      // 6. Enter incorrect email address and password
      cy.get('input[data-qa="login-email"]').type(user.email);
      cy.get('input[data-qa="login-password"]').type(user.password);
      // 7. Click 'login' button
      cy.get('button[data-qa="login-button"]').click();
      // 8. Verify error 'Your email or password is incorrect!' is visible
      cy.contains('Your email or password is incorrect!').should('be.visible');
    });

  });
})