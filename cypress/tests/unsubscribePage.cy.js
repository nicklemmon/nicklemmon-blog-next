describe('the unsubscribe page', () => {
  it('renders the page with relevant content and a title', () => {
    cy.visit('/unsubscribe')

    cy.title().should('include', 'Unsubscribed Successfully')
    cy.findByRole('heading', { name: 'Unsubscribed Successfully' }).should(
      'be.visible'
    )
  })
})
