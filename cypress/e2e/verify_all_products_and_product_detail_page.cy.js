describe('Test Case 8: Verify All Products and product detail page', () => {
  it('should submit the contact us form', () => {
    // 1. Launch browser, 
    // 2. navigate to url,
    // 3. Verify that home page is visible successfully
    cy.launchPage();
    // 4. Click on 'Products' button
    cy.contains('Products').click();
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should('include', '/products');
    // 6. The products list is visible
    cy.get('.features_items')
      .children()
      .should('have.length.greaterThan', 0); // Ensures the div has more than 0 children
    // 7. Click on 'View Product' of first product
    cy.get('a[href="/product_details/1"]').click();
    // 8. User is landed to product detail page
    cy.url().should('include', '/product_details/1');
    // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
    cy.get('.product-information')
      .children()
      .should('have.length.greaterThan', 0);
    // Verify product name
    cy.get('.product-information h2').should('contain.text', 'Blue Top')
    // Verify Category
    cy.get('.product-information p').eq(0).should('contain.text', 'Category: Women > Tops')
    // Verify Price
    cy.get('.product-information span').should('contain.text', 'Rs. 500')
    // Verify availability
    cy.get('.product-information p').eq(1).find('b').should('contain.text', 'Availability');
    cy.get('.product-information p').eq(1).should('contain.text', 'In Stock').and('be.visible');
    // Verify condition
    cy.get('.product-information p').eq(2).find('b').should('contain.text', 'Condition');
    cy.get('.product-information p').eq(2).should('contain.text', 'New').and('be.visible');
    // Verify brand
    cy.get('.product-information p').eq(3).find('b').should('contain.text', 'Brand');
    cy.get('.product-information p').eq(3).should('contain.text', 'Polo').and('be.visible');
  });
});