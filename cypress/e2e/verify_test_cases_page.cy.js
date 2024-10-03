describe('Test Case 7: Verify Test Cases Page', () => {
  it('should redirect to the test cases page.', () => {
    // 1. Launch browser,
    // 2. navigate to url,
    // 3. Verify that home page is visible successfully
    cy.launchPage();
    // 4. Click on 'Test Cases' button
    cy.contains('Test Cases').click();
    // 5. Verify user is navigated to test cases page successfully
    cy.get('h2.title.text-center').should('contain.text', 'Test Cases');
    cy.url().should('include', '/test_cases');
  });
});