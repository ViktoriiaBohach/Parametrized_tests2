//  <reference types="cypress"/> 

//   it('Quering elements', () => {
//   cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/assertions');
//   cy.get('#query-btn').should('contain', 'Button');

//   cy.get('li:contains("bananas")').should('contain', 'bananas');
//   cy.contains('bananas').should('contain', 'bananas');
//   cy.contains('li.third', 'bananas').should('contain', 'bananas');
//   cy.get('#querying').contains('bananas').should('have.class', 'third');

//   cy.get('.query-form').within( () => {
//     cy.get('#inputEmail').should('have.attr', 'placeholder', 'Email');
//     cy.get('#inputPassword').should('have.attr', 'placeholder', 'Password');

//     // should be unreachable
//     // cy.get('#inputName').should('have.attr', 'placeholder', 'Password');
//   })

//   cy.root().should('contain', 'bananas');

//   cy.get('div.col-xs-5 form').within( () => {
//     cy.root().should('have.class', 'query-form');
//   })
// })

describe('Using before method', () => {
  before(()=> {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('nb-card-header:contains("Material Light")').click();
    cy.get('[ng-reflect-icon="menu-outline"]').click();
    cy.get('[class="menu-title ng-tns-c141-19"]').click();
    cy.get('[class="menu-title ng-tns-c141-23"]').click();
    cy.get('[ng-reflect-icon="menu-outline"]').click();
  })

describe('Test suite for toaster configuration', () => {
  
    it('Test1', () => {
      cy.get('[data-name="chevron-down"]').click()
      .eq(0)

      
//     expect(element).to.have.text('Column content');
//     expect(element).to.have.html('Column content');
//     expect(element).to.contain('Column content');
//     })
    
//     it('Test2', () => {
//       cy.visit('https://google.com/')
//     })
    
//     it('Test3', () => {
//       cy.visit('https://google.com/')
//     })
    
//     it('Test4', () => {
//       cy.visit('https://google.com/')

//     })
    })
})
})