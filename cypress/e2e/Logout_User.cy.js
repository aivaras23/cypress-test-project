const url = 'https://www.automationexercise.com/'
describe('Test Case 4: Logout User', () => {

  beforeEach(() => {
    cy.visit(url);
    // Load user data from fixture
    cy.fixture('user2').as('user');
  });

  it('Log in to the account and then logout.', () => {
    cy.get('a[href="/login"]').click();
    cy.get('.login-form h2').should('contain.text', 'Login to your account');

    cy.get('@user').then((user) => {
      cy.get('a[href="/login"]').click();

      // Fill signup form with name and email
      cy.get('input[data-qa="login-email"]').type(user.email);
      cy.get('input[data-qa="login-password"]').type(user.password);
      cy.get('button[data-qa="login-button"]').click();

      cy.contains('Logged in as ' + user.name).should('be.visible');

      cy.get('a[href="/logout"]').should('be.visible').click();
      cy.url().should('include', '/login');
    });
  });
})