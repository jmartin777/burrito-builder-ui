describe("Checks Order form and the POSTS an order", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", {
      fixture: "OrdersOnPageLoad.json",
    }).as("getOrders");

    cy.visit("http://localhost:3000/");
    cy.wait("@getOrders"); 
    cy.wait(1000); 
  });

  it("inputs a name in the order form", () => {

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

  cy.intercept("POST", "http://localhost:3001/api/v1/orders", {
      statusCode:201,
      fixture: "NewOrder.json",
    }).as("postOrder");
  cy.get('input').type("Test User");
  cy.get('input').should("have.value", "Test User");
  cy.get('[name="beans"]').click();
  cy.get('[name="lettuce"]').click();
  cy.get('[name="carnitas"]').click();
  cy.get('[name="queso fresco"]').click();
  cy.get('[name="jalapenos"]').click();

  
  cy.get(':nth-child(15)').click();
  cy.wait("@postOrder");
  
  
  cy.get('.order').should("have.length", 4);
  cy.get(':nth-child(4) > h3').should("have.text", "Test User");
  cy.get(':nth-child(4) > .ingredient-list > :nth-child(1)').should("contain.text", "beans");
  cy.get(':nth-child(4) > .ingredient-list > :nth-child(2)').should("contain.text", "lettuce");
  cy.get(':nth-child(4) > .ingredient-list > :nth-child(3)').should("contain.text", "carnitas");
  cy.get(':nth-child(4) > .ingredient-list > :nth-child(4)').should("contain.text", "queso fresco");
  cy.get(':nth-child(4) > .ingredient-list > :nth-child(5)').should("contain.text", "jalapeno");
});

});
