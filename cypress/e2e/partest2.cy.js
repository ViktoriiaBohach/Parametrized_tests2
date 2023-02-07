describe('Using before method', () => {
  beforeEach(()=> {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('nb-card-header:contains("Material Light")').click();
    // cy.get('[ng-reflect-icon="menu-outline"]').click();
    cy.get('[class="menu-title ng-tns-c141-19"]').click();
    cy.get('[class="menu-title ng-tns-c141-23"]').click();
    // cy.get('[ng-reflect-icon="menu-outline"]').click();
  });

describe('Test suite for toaster configuration', () => {


  
    it('Test1', () => {
      cy.get('nb-select[class="mat-ripple position-select appearance-outline size-medium status-basic shape-rectangle nb-transition"] nb-icon[icon="chevron-down-outline"]').click();
      cy.get('#nb-option-24').click();
      cy.get('input[name="title"]')
        .type(' Position top right!')
        .then( el => {
        expect(el.val()).to.be.eq('HI there! Position top right!');

      cy.get('input[name="content"]')
        .type(' Position top right!')
        .then( el => {
        expect(el.val()).to.be.eq("I'm cool toaster! Position top right!"); 
        })
        cy.get('nb-select[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
        cy.get('#nb-option-33').click();
        cy.get('.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();
             
  })
})
})
})
