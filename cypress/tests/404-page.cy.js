describe('the error page', () => {
  it('renders the error in the title and a link back to the landing page', () => {
    cy.visit('/whatever', { failOnStatusCode: false })

    cy.title().should('include', '404 Error')
    cy.findByRole('heading', { name: '404 Error' })
    cy.findByRole('link', { name: 'Take me somewhere legit' })
      .should('be.visible')
      .should('have.attr', 'href', '/')
  })
})
