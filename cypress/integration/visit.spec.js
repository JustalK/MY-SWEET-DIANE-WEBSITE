/// <reference types="cypress" />

context('Window', () => {
  it('[VISITOR] Access the homepage', () => {
    cy.visit('/')
    cy.contains('h1', 'Static App - justalk')
  })
  it('[VISITOR] Access the homepage', () => {
    cy.visit('/page')
    cy.contains('h1', 'Page')
  })
})
