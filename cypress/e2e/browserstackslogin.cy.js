describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.com')
    cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click()
    cy.get('#ap_email').type("arthilakshmimurugan@gmail.com")
    cy.get('.a-button-inner > #continue').click()
    cy.get('#ap_password').type("password")
    

    

    
  })
})