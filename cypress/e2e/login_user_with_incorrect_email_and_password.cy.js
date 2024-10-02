const url = 'https://www.automationexercise.com/'
describe('Test Case 3: Login User with incorrect email and password', () => {

  beforeEach(() => {
    cy.visit(url);
    // Load user data from fixture
    cy.fixture('IncorrectUserData').as('user');
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

      cy.contains('Your email or password is incorrect!').should('be.visible');
    });
  });
})