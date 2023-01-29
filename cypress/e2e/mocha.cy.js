// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('test suite 1', () => {
it('Test1', () => {
  cy.visit('https://google.com/')
})

it('Test2', () => {
  cy.visit('https://google.com/')
})

it('Test3', () => {
  cy.visit('https://google.com/')
})

it('Test4', () => {
  cy.visit('https://google.com/')
})
})


describe('test suite 2', () => {
  it('Test1', () => {
    cy.visit('https://google.com/')
  })
  
  it('Test2', () => {
    cy.visit('https://google.com/')
  })
  
  it.skip('Test3', () => { //скіпає тест, але відображається в репортах
    cy.visit('https://google.com/')
  })
  
  it.only('Test4', () => { //запускає лише цей тест
    cy.visit('https://google.com/')
  })
  })