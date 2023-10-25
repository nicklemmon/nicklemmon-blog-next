describe('The navigation', () => {
  beforeEach(() => cy.visit('/'))

  it('opens and renders navigation links', () => {
    cy.findByRole('banner').within(() => {
      cy.findByRole('button', { name: 'Open Menu' }).click()

      cy.findByRole('navigation').within(() => {
        cy.findByRole('link', { name: 'Home' }).should('have.attr', 'href', '/')
        cy.findByRole('link', { name: 'Archives' }).should(
          'have.attr',
          'href',
          '/archives'
        )
        cy.findByRole('link', { name: 'About' }).should(
          'have.attr',
          'href',
          '/about'
        )
      })
    })
  })

  it('closes the navigation when a link to the current page is clicked', () => {
    cy.findByRole('banner').within(() => {
      cy.findByRole('button', { name: 'Open Menu' }).click()
    })
    cy.findByRole('link', { name: 'Home' }).click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByRole('navigation').should('not.be.visible')
  })

  it('closes when clicking the close button', () => {
    cy.findByRole('banner').within(() => {
      cy.findByRole('button', { name: 'Open Menu' }).click()
      cy.findByRole('button', { name: 'Close Menu' })
        .should('be.visible')
        .click()
    })

    cy.findByRole('navigation').should('not.be.visible')
    cy.findByRole('banner').within(() => {
      cy.findByRole('button', { name: 'Open Menu' }).should('be.visible')
    })
  })

  it('closes when the user hits the "esc" key', () => {
    cy.findByRole('banner').within(() => {
      cy.findByRole('button', { name: 'Open Menu' }).click()
    })
    cy.focused().realType('{esc}')
    cy.findByRole('navigation').should('not.be.visible')
  })
})
