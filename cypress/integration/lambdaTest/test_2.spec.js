/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const userdata = require("../../fixtures/example.json");

describe('Assignment task:Cypress 101', () => {
    before('', () => {
        cy.visit('/');
    });

    it('Test Case 2:', () => {
        cy.viewport("samsung-note9");
        cy.contains('a', 'Input Form Submit').click();
        cy.get('#seleniumform').should("be.visible");
        cy.get('#name').type(userdata.name);
        cy.get('#inputEmail4').type(userdata.email);
        cy.get('#inputPassword4').type(userdata.password);
        cy.get('#company').type(userdata.company);
        cy.get('#websitename').type(userdata.website);
        cy.xpath('//select[@name="country"]').select(userdata.country);
        cy.get('#inputCity').type(userdata.city);
        cy.get('#inputAddress1').type(userdata.address1);
        cy.get('#inputAddress2').type(userdata.address2);
        cy.get('#inputState').type(userdata.state);
        cy.get('#inputZip').type(userdata.zipcode);
        cy.xpath('//button[@type="submit"]').contains("Submit").should("be.visible").click();
        cy.lighthouse({
            performance: 70,
            accessibility: 80,
            "best-practices": 80,
            seo: 80,
            pwa: 30,
        });
        cy.get('#seleniumform').should("not.be.visible")
        cy.get(".success-msg.hidden").should("have.text", "Thanks for contacting us, we will get back to you shortly.").and("be.visible");
        Cypress.session.clearAllSavedSessions();
    });

});