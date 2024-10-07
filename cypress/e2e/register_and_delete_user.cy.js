// Register and delete user test
describe('Test Case 1: Should register a new user, then delete it successfully.', () => {
  beforeEach(() => {
    // 1. Launch browser, 
    // 2. navigate to url,
    // 3. Verify that home page is visible successfully
    cy.launchPage();
    // Load user data from fixture
    cy.fixture('RegisterData').as('user');
  });

  it('Register the user and then delete it', () => {
    cy.get('@user').then((user) => {
      cy.registerUser(user);
      cy.deleteAccount();
    });
  });
});


