/// <reference types="cypress" />

context('Window', () => {
  it('[VISITOR] Access the homepage', () => {
    cy.visit('/')
    cy.contains('h1', 'My Sweet Diane')
  })
  it('[VISITOR] Access the menu page', () => {
    cy.visit('/menu')
    cy.contains('h1', 'menu')
  })
  it('[VISITOR] Access the history page', () => {
    cy.visit('/histories')
    cy.contains('h1', 'histories')
  })
  it('[VISITOR] Access the moment page', () => {
    cy.visit('/moments')
    cy.contains('h1', 'moments')
  })
})
