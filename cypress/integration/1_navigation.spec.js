/// <reference types="cypress" />

context('Window', () => {
  it('[VISITOR] Navigating from home to menu', () => {
    cy.visit('/')
    cy.get('body').click()
    cy.visit('/menu')
  })
})
