describe("Counters", () => {
  beforeEach(() => {
    cy.visit("https://testcon.lt/")
  });

  it('displays counter value', () => {
    cy.get('.et_pb_section_3').scrollIntoView()
    cy.contains('span.percent-value', '5', { timeout: 10000 })
  })
});
