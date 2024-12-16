/// <reference types="cypress"/>

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/public");
  });

  it("initializes as 0", () => {
    cy.get("#display").should("have.value", "0");
  });

  it("should have all the buttons visible", () => {
    cy.get(".number").each((number) => {
      cy.wrap(number).should("be.visible");
    });
  });

  it("Puts a number on the screen when a button is pressed", () => {
    cy.get(".number").each((number) => {
      let curNum: string = number.text();
      cy.get(number).click();
      cy.get("#display").should("have.value", curNum);
      cy.get("#C").click();
    });
  });

  it("Should clear numbers when pressing C", () => {
    cy.get("button").contains("5").click();
    cy.get("#C").click();
    cy.get("#display").should("have.value", "0");
  });
});
