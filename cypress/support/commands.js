import 'cypress-file-upload';

Cypress.Commands.add('launchPage', () => {
    const url = Cypress.config('url');
    cy.visit(url);
    cy.get('header').should('not.be.empty');
})