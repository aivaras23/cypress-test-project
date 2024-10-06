// Login and delete user test
describe('Test Case 2: Should login as a user with the correct email and password, then delete the account successfully', () => {
  beforeEach(() => {
    // 1. Launch browser, 
    // 2. navigate to url,
    // 3. Verify that home page is visible successfully
    cy.launchPage();
    // Load user data from fixture
    cy.fixture('User1').as('user');
  });

  it('Register a new user first', () => {
    cy.get('@user').then((user) => {
      cy.registerUser(user);
    });
  });

  it('Log in to the account and delete it', () => {
    cy.get('@user').then((user) => {
      cy.loginUser(user);
      cy.deleteAccount();
    });
  });
});