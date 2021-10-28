// temperature.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />

describe("temperature conversion app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has a home page", () => {
    cy.contains("Choose what you want to convert!").should("exist");
  });

  it("converts from celsius to fahrenheit", () => {
    cy.contains("Convert celsius to fahrenheit").click();
    cy.get('[data-test="form-input"]').type("100");
    cy.get('[data-testForm="formSubmit"]').submit();
    cy.get('[data-type="output"]').should("include.text", "100 °C equal");

    // TODO: use `cy.contains()` to select the link to the c2f page
    // and use `.click()` to go to the page
    // TODO: use `cy.get()` to select the input element and
    // use `.type("100")` to put a value into it
    // TODO: use `cy.get()` to select the form and `.submit()` it
    // TODO: select the output div.
    // It `.should("include.text", "100 °C equal")`.
  });

  // TODO: create a second test for the other conversion page
});
