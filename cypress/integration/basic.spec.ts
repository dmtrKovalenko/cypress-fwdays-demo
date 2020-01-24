describe("Speakers", () => {
  beforeEach(() => {
    cy.visit("https://fwdays.com/en/event/QA-fwdays20-online-conference");
  });

  it("displays all speakers", () => {
    cy.contains("Спікери");
    cy.get("#speakers-event .speaker-card").should("have.length", 6);
  });
});
