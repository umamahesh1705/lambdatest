/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
describe('Assignment task:Cypress 101', () => {

    it('Test Case 1:', () => {
        cy.visit('/');
        cy.get("a").contains("Drag & Drop Sliders").click({ force: true });
        cy.get('#rangeSuccess').should("have.text", "15");
        cy.xpath('//input[@type="range"]').eq(2).invoke("val", 95).trigger("click");
        cy.get('#rangeSuccess').invoke('val', 95).then((el) => {
            expect(el.text()).to.eq('95');
        });
        cy.screenshot('CompletePage')
    });
})