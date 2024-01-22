describe('Basics', () => {
    beforeEach(() => {
      cy.visit("/jobs");
    });
    it("0.1 visit explanation text input", () => { 
      cy.url().then((url) => {
        cy.log(`printing the URL: ${url}`);
        expect(url).to.contains('/jobs'); 
      });
    });
    it('0.2title validation',() => {
      cy.title().then((title) => {
        cy.wait(300);
        cy.log(title);
        expect(title).to.be.equal("PHANTOM | Careers");
      });
    });
    it('0.3find input', () => {
      //cy.get(".has-link-hover-effect");
      //cy.get('a[data-text = "Send Portfolio"]');
      cy.contains('Send Portfolio').click();
    });
});
 
  