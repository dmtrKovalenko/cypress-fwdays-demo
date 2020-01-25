describe("Advanced", () => {
  beforeEach(() => {
    cy.visit("https://fwdays.com/en/event/QA-fwdays20-online-conference");
  });

  it("Shows conference title", () => {
    cy.contains("QA fwdays'20 онлайн-конференція");
  });

  it("Scrolls to sections using top navigation menu", () => {
    cy.contains("Онлайн-конференція").scrollIntoView();

    ["Спікери", "Програма", "Місце проведення"].forEach(navigationItem => {
      cy.get("#event-menu-trigger").click();
      cy.contains(".event-menu a.go-to-block", navigationItem).click();

      cy.contains("h2", navigationItem).should('be.visible');
    });
  });

  context.skip("Registration", () => {
    beforeEach(() => {
      cy.get("#event_action_mob-QA-fwdays20-online-conference").click();
    });

    it("Validates email input", () => {
      cy.get("#user_email_modal-signup-payment:invalid").should(
        "have.length",
        0
      );
      cy.get("#user_email_modal-signup-payment").type("tralalala");
      cy.get("#user_email_modal-signup-payment:invalid").should(
        "have.length",
        1
      );
    });

    it("Opens login with Facebook", () => {
      cy.get(".login-social-buttons .btn--facebook")
        .eq(1)
        .click();
    });
  });
});
