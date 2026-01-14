describe('The index page', () => {
  beforeEach(() => cy.visit('/'))

  it('renders with relevant heading and page title', () => {
    cy.findByRole('heading', {
      name: /A frontend engineering leader driven to create accessible user interfaces at scale/g,
    }).should('be.visible')
    cy.title().should('eq', 'Nick Lemmon, Front End Engineering Leader')
  })

  it('renders the correct links', () => {
    cy.findByRole('banner').within(() => {
      cy.findByRole('link', { name: 'Nick Lemmon' }).should(
        'have.attr',
        'href',
        '/'
      )
    })

    cy.findByRole('main').within(() => {
      cy.findByRole('link', {
        name: 'Nick Lemmon on CodePen (Opens in a new tab)',
      })
        .should('be.visible')
        .should('have.attr', 'href', 'https://codepen.io/nicklemmon')
      cy.findByRole('link', {
        name: 'Nick Lemmon on GitHub (Opens in a new tab)',
      })
        .should('be.visible')
        .should('have.attr', 'href', 'https://github.com/nicklemmon')
      cy.findByRole('link', {
        name: 'Nick Lemmon on LinkedIn (Opens in a new tab)',
      })
        .should('be.visible')
        .should('have.attr', 'href', 'https://linkedin.com/in/nicklemmon')

      // A maximum of four article cards should render and none should have an empty href
      cy.get('[data-id="article-card"]')
        .should('have.length', 4)
        .should('not.have.attr', 'href', '')

      cy.findByRole('link', { name: 'Archives' })
        .should('be.visible')
        .should('have.attr', 'href', '/archives')
    })

    cy.findByRole('contentinfo').within(() => {
      cy.findByRole('link', {
        name: 'Nick Lemmon on CodePen (Opens in a new tab)',
      }).should('have.attr', 'href', 'https://codepen.io/nicklemmon')
      cy.findByRole('link', {
        name: 'Nick Lemmon on GitHub (Opens in a new tab)',
      }).should('have.attr', 'href', 'https://github.com/nicklemmon')
      cy.findByRole('link', {
        name: 'Nick Lemmon on LinkedIn (Opens in a new tab)',
      }).should('have.attr', 'href', 'https://linkedin.com/in/nicklemmon')
    })
  })
})
