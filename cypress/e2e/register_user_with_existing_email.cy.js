const url = 'https://www.automationexercise.com/'
describe('Test Case 5: Register User with existing email', () => {

  beforeEach(() => {
    cy.visit(url);
    // Load user data from fixture
    cy.fixture('user2').as('user');
  });

  it('Register User with existing email', () => {
    cy.get('a[href="/login"]').click();
    cy.get('.signup-form h2').should('contain.text', 'New User Signup!');

    cy.get('@user').then((user) => {
      cy.get('a[href="/login"]').click();

      // Fill signup form with name and email
      cy.get('input[data-qa="signup-name"]').type(user.name);
      cy.get('input[data-qa="signup-email"]').type(user.email);
      cy.get('button[data-qa="signup-button"]').click();

      cy.contains('Email Address already exist!').should('be.visible');
    });
  });
})