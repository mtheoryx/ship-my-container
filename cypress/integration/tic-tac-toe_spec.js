describe("First app visit", () => {
  it("Visits the app", () => {
    cy.visit("localhost:3000");
  });
  it("Should have no selected squares", () => {
    cy.get(".game-board")
      .find(".square")
      .each(square => {
        cy.get(square).should("have.text", "");
      });
  });
  it("should be waiting on X for the move", () => {
    cy.get(".status").should("not.contain", "O");
    cy.get(".status").should("contain", "X");
  });
  it("should make a move as X, and see a square marked with X", () => {
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(2) > :nth-child(3)"
    ).click();
    // Assert that the thing has an X
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(2) > :nth-child(3)"
    ).should("have.text", "X");
    // Assert that the thing does not have an O
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(2) > :nth-child(3)"
    ).should("not.have.text", "O");
  });
});
describe("Taking turns", () => {
  it("Should be expecting player 0 to make a move", () => {
    cy.get(".status").should("not.contain", "X");
    cy.get(".status").should("contain", "O");
  });
  it("Should click the middle square as O, and get marked", () => {
    cy.get(":nth-child(3) > :nth-child(2)").click();
    cy.get(":nth-child(3) > :nth-child(2)").should("have.text", "O");
    cy.get(":nth-child(3) > :nth-child(2)").should("not.have.text", "X");
  });
  it("Should now see player X is next in line", () => {
    cy.get(".status").should("not.contain", "O");
    cy.get(".status").should("contain", "X");
  });
});

describe("Winning the game", () => {
  it("Visits and start the game", () => {
    cy.visit("localhost:3000");
    // X takes top right
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(2) > :nth-child(3)"
    ).click();
    // O Take middle
    cy.get(":nth-child(3) > :nth-child(2)").click();
    // X takes middle right
    cy.get(":nth-child(3) > :nth-child(3)").click();
    // O takes middle left
    cy.get(":nth-child(3) > :nth-child(1)").click();
    // X takes bottom right
    cy.get(":nth-child(4) > :nth-child(3)").click();
    /**
      [][][x]
      [o][o][x]
      [][][x]
     */
    // Should declare X the winner
    cy.get(".status").should("contain", "Winner: X");
  });
});
xdescribe("Restart the game", () => {});
xdescribe("Keeping score", () => {});
