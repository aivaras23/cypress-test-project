const url = 'https://www.automationexercise.com/'
describe('Test Case 2: Login User with correct email and password, then delete account', () => {

  beforeEach(() => {
    cy.visit(url);
    // Load user data from fixture
    cy.fixture('user2').as('user');
  });

  it('Log in to the account.', () => {
    cy.get('a[href="/login"]').click();
    cy.get('.login-form h2').should('contain.text', 'Login to your account');

    cy.get('@user').then((user) => {
      cy.get('a[href="/login"]').click();

      // Fill signup form with name and email
      cy.get('input[data-qa="login-email"]').type(user.email);
      cy.get('input[data-qa="login-password"]').type(user.password);
      cy.get('button[data-qa="login-button"]').click();

      cy.contains('Logged in as ' + user.name).should('be.visible');

      // Click 'Delete account' button
      cy.get('a[href="/delete_account"]').should('be.visible').click();

      // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

      cy.get('h2.title.text-center').should('contain.text', 'Account Deleted!');

      // Click 'Continue' button
      cy.get('a[data-qa="continue-button"]').click();
    });
  });
})