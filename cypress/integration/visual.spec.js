describe("Visual regression", () => {
  beforeEach(() => {
    cy.visit("https://fwdays.com/en/event/QA-fwdays20-online-conference");
    cy.contains("QA fwdays'20 онлайн-конференція")
  })
  
  it("Shows main page", () => {
    cy.percySnapshot("Main");
  });

  it("Shows registration modal", () => {
    cy.get("#event_action_mob-QA-fwdays20-online-conference").click();
    
    cy.get('.remodal').should('be.visible')
    cy.percySnapshot("Register");
  });
});
