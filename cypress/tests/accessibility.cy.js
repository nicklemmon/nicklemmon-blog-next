describe('Accessibility', () => {
  it('has no detectable accessibility violations on the index page', () => {
    cy.visit('/')
    cy.injectAxe()
    cy.checkA11y()
  })

  it('has no detectable accessibility violations on the about page', () => {
    cy.visit('/about')
    cy.injectAxe()
    cy.checkA11y()
  })

  it('has no detectable accessibility violations on the archives page', () => {
    cy.visit('/archives')
    cy.injectAxe()
    cy.checkA11y()
  })

  it('has no detectable accessibility violations on the resume page', () => {
    cy.visit('/resume')
    cy.injectAxe()
    cy.checkA11y()
  })

  it('has no detectable accessibility violations on the 404 page', () => {
    cy.visit('/does-not-exist', { failOnStatusCode: false })
    cy.injectAxe()
    cy.checkA11y()
  })

  it('has no detectable accessibility violations on a blog post page', () => {
    // Visit the homepage first to get a blog post link
    cy.visit('/')

    // Click on the first article card to navigate to a post
    cy.get('[data-id="article-card"]').first().click()

    // Inject axe after navigation
    cy.injectAxe()
    cy.checkA11y()
  })
})
