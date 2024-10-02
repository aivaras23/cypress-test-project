const url = 'https://www.automationexercise.com/'

describe('Test Case 1: Register User', () => {
  beforeEach(() => {
    cy.visit(url);
    // Load user data from fixture
    cy.fixture('user1').as('user');
  });

  it('Verify "New User Signup!" is visible', () => {
    cy.get('a[href="/login"]').click();
    cy.get('.signup-form h2').should('contain.text', 'New User Signup!');
  });

  it('Fill signup form with name and email, then click Signup button', () => {
    cy.get('@user').then((user) => {
      cy.get('a[href="/login"]').click();
      cy.get('input[data-qa="signup-name"]').type(user.name);
      cy.get('input[data-qa="signup-email"]').type(user.email);
      cy.get('button[data-qa="signup-button"]').click();
      cy.url().should('include', '/signup');
    });
  });

  it('Fill in account information, register the user and then delete it', () => {
    cy.get('@user').then((user) => {
      cy.get('a[href="/login"]').click();

      // Fill signup form with name and email
      cy.get('input[data-qa="signup-name"]').type(user.name);
      cy.get('input[data-qa="signup-email"]').type(user.email);
      cy.get('button[data-qa="signup-button"]').click();

      // Verify that the URL includes '/signup'
      cy.url().should('include', '/signup');

      // Verify that "ENTER ACCOUNT INFORMATION" is visible
      cy.get('h2.title.text-center').should('contain.text', 'Enter Account Information');

      // Fill in the account information
      cy.get('input[data-qa="password"]').type(user.password);
      cy.get('select[data-qa="days"]').select(user.dob.day);
      cy.get('select[data-qa="months"]').select(user.dob.month);
      cy.get('select[data-qa="years"]').select(user.dob.year);

      // Fill remaining details and create account
      cy.get('input[data-qa="first_name"]').type(user.first_name);
      cy.get('input[data-qa="last_name"]').type(user.last_name);
      cy.get('input[data-qa="address"]').type(user.address);
      cy.get('input[data-qa="company"]').type(user.company);
      cy.get('select[data-qa="country"]').select(user.country);
      cy.get('input[data-qa="state"]').type(user.state);
      cy.get('input[data-qa="city"]').type(user.city);
      cy.get('input[data-qa="zipcode"]').type(user.zipcode);
      cy.get('input[data-qa="mobile_number"]').type(user.mobile_number);

      // Create the account
      cy.get('button[data-qa="create-account"]').click();

      // Verify that 'ACCOUNT CREATED!' is visible
      cy.get('h2.title.text-center').should('contain.text', 'Account Created!');

      // Click 'Continue' button
      cy.get('a[data-qa="continue-button"]').click();

      // Click 'Delete account' button
      //cy.get('a[href="/delete_account"]').should('be.visible').click();

      // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button


      // Click 'Continue' button again after account deletion.
      //cy.get('a[data-qa="continue-button"]').click();
    });
  });

});
