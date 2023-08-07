describe("Checks Order form and the POSTS an order", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", {
      fixture: "OrdersOnPageLoad.json",
    }).as("getOrders");

    cy.visit("http://localhost:3000/");
    cy.wait("@getOrders"); // Wait for the GET request to complete before proceeding
    cy.wait(1000); 
  });

  it("displays order form and options with existing orders on page load", () => {
    
    cy.get('h1').should("have.text", "Burrito Builder");
    cy.get('input').should("exist");
    cy.get('[name="beans"]').should("exist");
    cy.get('[name="carnitas"]').should("exist");
    cy.get('[name="sofritas"]').should("exist");
    cy.get('[name="lettuce"]').should("exist");
    cy.get('[name="queso fresco"]').should("exist");
    cy.get('[name="pico de gallo"]').should("exist");
    cy.get('[name="hot sauce"]').should("exist");
    cy.get('[name="guacamole"]').should("exist");
    cy.get('[name="jalapenos"]').should("exist");
    cy.get('[name="cilantro"]').should("exist");
    cy.get('[name="sour cream"]').should("exist");

    cy.get('p').should("exist");
    cy.get(':nth-child(15)').should("have.text", "Submit Order");
    cy.get(".order").should("have.length", 3); 
    
    cy.get(':nth-child(1) > h3').should("have.text", "Droid 1");
    cy.get(':nth-child(1) > .ingredient-list > :nth-child(1)').should("contain.text", "beans");
    cy.get(':nth-child(1) > .ingredient-list > :nth-child(2)').should("contain.text", "lettuce");
    cy.get(':nth-child(1) > .ingredient-list > :nth-child(3)').should("contain.text", "carnitas");
    cy.get(':nth-child(1) > .ingredient-list > :nth-child(4)').should("contain.text", "queso fresco");
    cy.get(':nth-child(1) > .ingredient-list > :nth-child(5)').should("contain.text", "jalapeno");
    cy.get(':nth-child(2) > h3').should("have.text", "Droid 2");
    cy.get(':nth-child(2) > .ingredient-list > :nth-child(1)').should("contain.text", "steak");
    cy.get(':nth-child(2) > .ingredient-list > :nth-child(2)').should("contain.text", "pico de gallo");
    cy.get(':nth-child(2) > .ingredient-list > :nth-child(3)').should("contain.text", "lettuce");
    cy.get(':nth-child(2) > .ingredient-list > :nth-child(4)').should("contain.text", "carnitas");
    cy.get(':nth-child(2) > .ingredient-list > :nth-child(5)').should("contain.text", "queso fresco");
    cy.get(':nth-child(2) > .ingredient-list > :nth-child(6)').should("contain.text", "jalapeno");
    cy.get(':nth-child(3) > h3').should("have.text", "Droid 3");
    cy.get(':nth-child(3) > .ingredient-list > :nth-child(1)').should("contain.text", "sofritas");
    cy.get(':nth-child(3) > .ingredient-list > :nth-child(2)').should("contain.text", "beans");
    cy.get(':nth-child(3) > .ingredient-list > :nth-child(3)').should("contain.text", "sour cream");
    cy.get(':nth-child(3) > .ingredient-list > :nth-child(4)').should("contain.text", "carnitas");
    cy.get(':nth-child(3) > .ingredient-list > :nth-child(5)').should("contain.text", "queso fresco");
    
    
  });
});





