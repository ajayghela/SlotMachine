describe('Typing', () => {
    it('0.1: Navigating to new URL', () => {
      //cy.visit('http://uitestingplayground.com/textinput');
      //cy.task('setBaseUrl', '');
      cy.visit('https://www.apple.com');
      cy.get('.globalnav-link-search').click().type("iPhone 14").type("{enter}").type("{enter}");
      });
    //it('0.2: Find the search bar', () => {
      //cy.get('a[class="globalnav-link globalnav-link-search"]').click();
      //     cy.get('.globalnav-link globalnav-link-search');
      //cy.get('.globalnav-link');
      //});
    });
    //it('0.2 Searchbox element', () => {
      //  cy.get('.form-control');
    //});