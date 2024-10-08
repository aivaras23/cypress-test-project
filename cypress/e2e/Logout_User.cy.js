describe('Test Case 4: Logout User successfully', () => {
  beforeEach(() => {
    // 1. Launch browser, 
    // 2. navigate to url,
    // 3. Verify that home page is visible successfully
    cy.launchPage();
    // Load user data from fixture
    cy.fixture('adminUser').as('user');
  });

  it('Log in to the account and then logout.', () => {
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
      // 9. Click 'Logout' button
      cy.get('a[href="/logout"]').should('be.visible').click();
      // 10. Verify that user is navigated to login page
      cy.url().should('include', '/login');
    });

  });
})