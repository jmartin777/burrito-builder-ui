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
  })

  it("cannot submit an order without a name and ingredient", () => {
    cy.get(':nth-child(15)').should("be.disabled");
    cy.get('input').type("Test User");
    cy.get(':nth-child(15)').should("be.disabled");
    cy.get(".order").should("have.length", 3);
  });
});
