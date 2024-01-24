describe("comments", () => {
  it("go to blog page", () => {
    cy.visit("localhost:3002/blog");
    cy.get(".blog_card_link__RhLT0 blog_card_title__kBgny").should(
      "be.visible"
    );
  });
});
