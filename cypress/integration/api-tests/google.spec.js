const cypress = require("cypress");

describe("Testing Google Search", () => {
  it("Searching Cypress on the Google", () => {
    cy.visit('https://www.google.com/');
    cy.get("input[name='q']").type('Cypress').type('{enter}');
    cy.contains('https://www.cypress.io/');
  });
});
