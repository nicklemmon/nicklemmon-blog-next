describe('Accessibility', () => {
  beforeEach(() => {
    cy.injectAxe()
  })

  it('has no detectable accessibility violations on the index page', () => {
    cy.visit('/')
    cy.checkA11y()
  })

  it('has no detectable accessibility violations on the about page', () => {
    cy.visit('/about')
    cy.checkA11y()
  })

  it('has no detectable accessibility violations on the archives page', () => {
    cy.visit('/archives')
    cy.checkA11y()
  })

  it('has no detectable accessibility violations on the resume page', () => {
    cy.visit('/resume')
    cy.checkA11y()
  })

  it('has no detectable accessibility violations on the 404 page', () => {
    cy.visit('/does-not-exist', { failOnStatusCode: false })
    cy.checkA11y()
  })

  it('has no detectable accessibility violations on a blog post page', () => {
    // Visit the homepage first to get a blog post link
    cy.visit('/')

    // Click on the first article card to navigate to a post
    cy.get('[data-id="article-card"]').first().click()

    // Check accessibility on the blog post page
    cy.checkA11y()
  })
})
