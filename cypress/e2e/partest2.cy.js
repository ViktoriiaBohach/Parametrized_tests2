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
//     })
    
//     it('Test2', () => {    
//     })
    
//     it('Test3', () => {  
//     })
    
//     it('Test4', () => {      

//     })
    })
})
})