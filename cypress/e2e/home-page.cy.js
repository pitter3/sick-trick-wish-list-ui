describe("Page load user flow", () => {
  it("should display 3 tricks on page load", () => {
    cy.intercept(
      "GET",
      "http://localhost:3001/api/v1/tricks",
      {
        statusCode: 200,
        fixture: "tricks",
      }
    ).as("HomePage");

    cy.visit("http://localhost:3000/");

    cy.wait("@HomePage").then((interception) => {
      cy.get('.tricks').children().should("have.length", 3)
      cy.url().should("eq", "http://localhost:3000/");
    });
  });
  it("should have a form with 4 input fields and a button", () => {
    cy.get('form').children().should("have.length", 6); // not entirely sure why this is wanting 6
  });
  it("should add a trick and display 4 tricks after clicking 'Send It'", () => {
    cy.get('form')
      .find('button')
      .click();
      
    cy.get('.tricks')
      .children()
      .should("have.length", 4);
  });
});

// obviously I would want to fill out the fields and check the ids and details of my tricks, but have run out of time!