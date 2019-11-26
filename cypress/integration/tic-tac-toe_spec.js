import chaiColors from "chai-colors";
chai.use(chaiColors);

describe("First app visit", () => {
  it("Visits the app", () => {
    cy.visit("localhost:3000");
  });
  it("Should have no selected squares", () => {
    cy.get("#game-board")
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
    /**
    [ ][ ][x]
    [ ][ ][ ]
    [ ][ ][ ]
    */
    const targetSquare = cy.get("#game-board").find("#2");
    targetSquare.click();
    // Assert that the thing has an X
    targetSquare.should("have.text", "X");
    // Assert that the thing does not have an O
    targetSquare.should("not.have.text", "O");
    // The text of the X should be red
    targetSquare.should("have.css", "color").and("eq", "rgb(102, 51, 153)");
  });
});
describe("Taking turns", () => {
  /**
    [ ][ ][x]
    [ ][ ][ ]
    [ ][ ][ ]
    */
  it("Should be expecting player 0 to make a move", () => {
    cy.get(".status").should("not.contain", "X");
    cy.get(".status").should("contain", "O");
  });
  it("Should click the middle square as O, and get marked", () => {
    /**
    [ ][ ][x]
    [ ][O][ ]
    [ ][ ][ ]
    */
    cy.get("#game-board")
      .find("#4")
      .click();
    cy.get("#game-board")
      .find("#4")
      .should("have.text", "O");
    cy.get("#game-board")
      .find("#4")
      .should("not.have.text", "X");
  });
  it("Should now see player X is next in line", () => {
    cy.get(".status").should("not.contain", "O");
    cy.get(".status").should("contain", "X");
  });
});

describe("Winning the game", () => {
  it("Visits and start the game", () => {
    cy.visit("localhost:3000");

    // @TODO: Why does it not like this var?
    // const board = cy.get("#game-board");

    // X takes top right
    cy.get("#game-board")
      .find("#2")
      .click();
    // O Take middle
    cy.get("#game-board")
      .find("#4")
      .click();
    // X takes middle right
    cy.get("#game-board")
      .find("#5")
      .click();
    // O takes middle left
    cy.get("#game-board")
      .find("#3")
      .click();
    // X takes bottom right
    cy.get("#game-board")
      .find("#8")
      .click();
    /**
      [ ][ ][x]
      [o][o][x]
      [ ][ ][x]
     */
    // Should declare X the winner
    cy.get(".status").should("contain", "Winner: X");
  });
});
xdescribe("Restart the game", () => {});
xdescribe("Keeping score", () => {});
