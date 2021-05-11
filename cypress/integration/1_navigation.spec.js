/// <reference types="cypress" />

context('Window', () => {
  it('[VISITOR] Navigating from home to menu', () => {
    cy.visit('/')
    cy.get('body').click()
    cy.visit('/menu')
  })
  it('[VISITOR] Navigating from menu to home', () => {
    cy.visit('/menu')
    cy.get('nav > div > span > span:nth-child(2)').click()
    cy.url().should('eq', 'http://localhost:3000/');
  })
  it('[VISITOR] Navigating from menu to histories', () => {
    cy.visit('/menu')
    cy.get('nav > div > span > span:nth-child(4)').click()
    cy.visit('/histories')
    cy.url().should('contain', '/histories')
  })
  it('[VISITOR] Navigating from menu to moments', () => {
    cy.visit('/menu')
    cy.get('nav > div > span > span:nth-child(5)').click()
    cy.url().should('contain', '/moments')
  })
  it('[VISITOR] Navigating from moments to menu', () => {
    cy.visit('/moments')
    cy.get('nav > div > span > span:nth-child(3)').click()
    cy.url().should('contain', '/menu')
  })
  it('[VISITOR] Navigating from histories to menu', () => {
    cy.visit('/histories')
    cy.get('nav > div > span > span:nth-child(3)').click()
    cy.url().should('contain', '/menu')
  })
  it('[VISITOR] Navigating with backbutton from histories to menu', () => {
    cy.visit('/')
    cy.visit('/menu')
    cy.url().should('contain', '/menu')
    cy.visit('/moments')
    cy.url().should('contain', '/moments')
    cy.visit('/histories')
    cy.url().should('contain', '/histories')
    cy.get("div[class^='styles_menu'] > span").click()
    cy.url().should('contain', '/moments')
    cy.get("div[class^='styles_menu'] > span").click()
    cy.url().should('contain', '/menu')
    cy.get("div[class^='styles_menu'] > span").click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
