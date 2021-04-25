/// <reference types="cypress" />

context('Window', () => {
  it('[VISITOR] Access the homepage', () => {
    cy.visit('/')
    cy.contains('h1', 'Static App - justalk')
  })
  it('[VISITOR] Access the moment page', () => {
    cy.visit('/moments')
    cy.contains('h1', 'Moments')
  })
  it('[VISITOR] Access the history page', () => {
    cy.visit('/histories')
    cy.contains('h1', 'Histories')
  })
  it('[VISITOR] Access the history page yearly', () => {
    cy.visit('/histories/2019')
    cy.contains('h1', 'Histories 2019')
  })
})
