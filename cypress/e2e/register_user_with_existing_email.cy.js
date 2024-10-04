describe('Test Case 5: Register User with existing email', () => {
  beforeEach(() => {
    // 1. Launch browser, 
    // 2. navigate to url,
    // 3. Verify that home page is visible successfully
    cy.launchPage();
    // Load user data from fixture
    cy.fixture('user2').as('user');
  });
  it('Register User with existing email', () => {
    // 4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click();
    // 5. Verify 'New User Signup!' is visible
    cy.get('.signup-form h2').should('contain.text', 'New User Signup!');

    cy.get('@user').then((user) => {
      // 6. Enter name and already registered email address
      cy.get('input[data-qa="signup-name"]').type(user.name);
      cy.get('input[data-qa="signup-email"]').type(user.email);
      // 7. Click 'Signup' button
      cy.get('button[data-qa="signup-button"]').click();
      // 8. Verify error 'Email Address already exist!' is visible
      cy.contains('Email Address already exist!').should('be.visible');
    });
  });
})