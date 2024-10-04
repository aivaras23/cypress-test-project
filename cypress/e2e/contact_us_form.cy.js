const fileName = 'contactmsg.txt';
describe('Test Case 6: Contact Us Form', () => {
  beforeEach(() => {
    // 1. Launch browser, 
    // 2. navigate to url,
    // 3. Verify that home page is visible successfully
    cy.launchPage();
    // Load user data from fixture
    cy.fixture('ContactUsForm').as('contact');
  });
  it('should submit the contact us form', () => {
    // 4. Click on 'Contact Us' button
    cy.get('a[href="/contact_us"]').click();
    // 5. Verify 'GET IN TOUCH' is visible
    cy.get('.contact-form h2').should('contain.text', 'Get In Touch');
    // 6. Enter name, email, subject and message
    cy.get('@contact').then((contact) => {
      cy.url().should('include', '/contact_us');
      // Fill signup form with name and email
      cy.get('input[data-qa="name"]').type(contact.name);
      cy.get('input[data-qa="email"]').type(contact.email);
      cy.get('input[data-qa="subject"]').type(contact.subject);
      cy.get('textarea[data-qa="message"]').type(contact.message);
      // 7. Upload file
      cy.get('input[type="file"]').attachFile(fileName);
      // 8. Click 'Submit' button
      cy.get('input[data-qa="submit-button"]').click();
      // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
      cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
      // 11. Click 'Home' button and verify that landed to home page successfully
      cy.get('a.btn.btn-success').click();
      cy.url().should('eq', Cypress.config('url'));
    });
  });
});
