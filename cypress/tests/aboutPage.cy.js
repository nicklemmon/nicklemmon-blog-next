describe('The about page', () => {
  it('renders with a relevant heading and page title', () => {
    cy.visit('/about')

    cy.findByRole('heading', { name: 'About', level: 1 }).should('be.visible')
    cy.title().should('include', 'About')
  })

  it('renders with an image of me', () => {
    cy.visit('/about')

    cy.findByRole('img', { name: 'Nick Lemmon' }).should('be.visible')
    cy.findByRole('heading', { name: 'About Me' }).should('be.visible')
  })
})
