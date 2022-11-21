describe('home page', () => {
  it('the h1 contains the right text', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').contains('Home');
  });

  it('the list displays the right items', () => {
    cy.visit('http://localhost:3000');
    cy.get('li').eq(0).contains('hi');
  });
});
