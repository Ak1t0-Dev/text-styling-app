describe("app spec", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("REACT_APP_URL"));
  });

  it("should change the style of text in an editor: bold", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("bold").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-weight",
      "700"
    );
  });

  it("should change the style of text in an editor: italic", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("italic").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-style",
      "italic"
    );
  });

  it("should change the style of text in an editor: red", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("red").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "color",
      "rgb(255, 0, 0)"
    );
  });

  it("should change the style of text in an editor: orange", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("orange").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "color",
      "rgb(255, 165, 0)"
    );
  });

  it("should change the style of text in an editor: yellow", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("yellow").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "color",
      "rgb(255, 255, 0)"
    );
  });

  it("should change the style of text in an editor: green", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("green").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "color",
      "rgb(0, 128, 0)"
    );
  });

  it("should change the style of text in an editor: blue", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("blue").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "color",
      "rgb(0, 0, 255)"
    );
  });

  it("should change the style of text in an editor: indigo", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("indigo").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "color",
      "rgb(75, 0, 130)"
    );
  });

  it("should change the style of text in an editor: purple", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("purple").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "color",
      "rgb(128, 0, 128)"
    );
  });

  it("should change the style of text in an editor: black", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("black").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "color",
      "rgb(0, 0, 0)"
    );
  });

  it("should change the style of text in an editor: 8px", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("8px").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-size",
      "8px"
    );
  });

  it("should change the style of text in an editor: 12px", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("12px").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-size",
      "12px"
    );
  });

  it("should change the style of text in an editor: 16px", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("16px").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-size",
      "16px"
    );
  });

  it("should change the style of text in an editor: 20px", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("20px").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-size",
      "20px"
    );
  });

  it("should change the style of text in an editor: 24px", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("24px").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-size",
      "24px"
    );
  });

  it("should change the style of text in an editor: 28px", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("28px").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-size",
      "28px"
    );
  });

  it("should change the style of text in an editor: 32px", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("32px").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-size",
      "32px"
    );
  });

  it("should change the style of text in an editor: 36px", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("36px").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-size",
      "36px"
    );
  });

  it("should change the style of text in an editor: bold, italic, red, 36px", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("bold").click();
    cy.get("span").contains("italic").click();
    cy.get("span").contains("red").click();
    cy.get("span").contains("36px").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-weight",
      "700"
    );
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-style",
      "italic"
    );
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "color",
      "rgb(255, 0, 0)"
    );
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-size",
      "36px"
    );
  });

  it("should reset the style when a button is clicked twice", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("italic").click();
    cy.get("span").contains("italic").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "not.have.css",
      "font-style",
      "italic"
    );
  });

  it("should reset the color when another color is adjusted", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("red").click();
    cy.get("span").contains("orange").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "not.have.css",
      "color",
      "rgb(255, 0, 0)"
    );
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "color",
      "rgb(255, 165, 0)"
    );
  });

  it("should reset the font-size when another font-size is adjusted", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{selectAll}");
    cy.get("span").contains("8px").click();
    cy.get("span").contains("32px").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "not.have.css",
      "font-size",
      "8px"
    );
    cy.get(".public-DraftStyleDefault-block>span").should(
      "have.css",
      "font-size",
      "32px"
    );
  });

  it("should not change style when the text is not selected", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get("span").contains("italic").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "not.have.css",
      "font-style",
      "italic"
    );
  });

  it("should not change style when the text is not selected and cursole is among the text", () => {
    cy.get(".public-DraftEditor-content").type("Hello, World");
    cy.get(".public-DraftEditor-content").type("{leftArrow}".repeat(3));
    cy.get("span").contains("red").click();
    cy.get(".public-DraftStyleDefault-block>span").should(
      "not.have.css",
      "color",
      "rgb(255, 0, 0)"
    );
  });
});
