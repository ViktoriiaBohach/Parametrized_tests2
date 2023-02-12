describe('Using before method', () => {
  beforeEach(()=> {
    Cypress.config('defaultCommandTimeout', 15000);
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('nb-card-header:contains("Material Light")').click();
    cy.get('[class="menu-title ng-tns-c141-19"]').click();
    cy.get('[class="menu-title ng-tns-c141-23"]').click();
  })

// describe('Test suite for toaster configuration', () => {
  
  it('Test1', () => {
      
    cy.get('nb-select[ng-reflect-selected="top-right"]').click();
      cy.get('#nb-option-24').click();
      cy.get('input[name="title"]')
        .clear()
        .type('Position top right!')
        .then( el => {
        expect(el.val()).to.be.eq('Position top right!')
        })

      cy.get('input[name="content"]')
        .clear()
        .type('Position top right!')
        .then( el => {
        expect(el.val()).to.be.eq('Position top right!')
        })

        cy.get('input[name="timeout"]')
        .clear()
        .type('5000')
        .then( el => {
        expect(el.val()).to.be.eq('5000')
        })

        cy.get('nb-select[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
        cy.get('#nb-option-33').click();
        cy.get('.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();
        
       // toast contains text
        cy.get('span[class="title subtitle"]')
        .then( el => {
        expect(el.text()).includes('Toast 2. Position top right!')
        })

        cy.get('div[class="message"]')
        .then( elem => {
        expect(elem.text()).includes('Position top right!')
        })

        // toast contains icon
        cy.get('g[data-name="checkmark"]')
        .then( element => {
        expect(element.attr('data-name')).to.eq('checkmark');
        })
  })

  it('Test2', () => {
    cy.get('nb-select[ng-reflect-selected="top-right"]').click();
    cy.get('#nb-option-25').click();
    cy.get('input[name="title"]')
      .clear()
      .type('Position top left!')
      .then( el => {
      expect(el.val()).to.be.eq('Position top left!');
      })

    cy.get('input[name="content"]')
      .clear()
      .type('Position top left!')
      .then( el => {
      expect(el.val()).to.be.eq('Position top left!'); 
      })

      cy.get('input[name="timeout"]')
      .clear()
      .type('6000')
      .then( el => {
      expect(el.val()).to.be.eq('6000'); 
      })

      cy.get('nb-select[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
      cy.get('#nb-option-34').click();
      cy.get('.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();

      // toast contains text
      cy.get('span[class="title subtitle"]')
      .then( elem => {
      expect(elem.text()).includes('Toast 2. Position top left!')
      })

      cy.get('div[class="message"]')
      .then( element => {
      expect(element.text()).includes('Position top left!')
      })

      // toast contains icon
       cy.get('g[data-name="question-mark"]')
       .then( element => {
       expect(element.attr('data-name')).to.eq('question-mark');
       })
})


it('Test3', () => {
  cy.get('nb-select[ng-reflect-selected="top-right"]').click();
  cy.get('#nb-option-26').click();
  cy.get('input[name="title"]')
    .clear()
    .type('Position bottom left!')
    .then( el => {
    expect(el.val()).to.be.eq('Position bottom left!');
    })

  cy.get('input[name="content"]')
    .clear()
    .type('Position bottom left!')
    .then( el => {
    expect(el.val()).to.be.eq('Position bottom left!'); 
    })

    cy.get('input[name="timeout"]')
    .clear()
    .type('7000')
    .then( el => {
    expect(el.val()).to.be.eq('7000'); 
    })

    cy.get('nb-select[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
    cy.get('#nb-option-35').click();
    cy.get('.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();

    // toast contains text
    cy.get('span[class="title subtitle"]')
    .then( elem => {
    expect(elem.text()).includes('Toast 2. Position bottom left!')
    })

    cy.get('div[class="message"]')
    .then( element => {
    expect(element.text()).includes('Position bottom left!')
    })

    // toast contains icon
    cy.get('g[data-name="alert-triangle"]')
    .then( element => {
    expect(element.attr('data-name')).to.eq('alert-triangle');
    })
})

it('Test4', () => {
  cy.get('nb-select[ng-reflect-selected="top-right"]').click();
  cy.get('#nb-option-27').click();
  cy.get('input[name="title"]')
    .clear()
    .type('Position bottom right!')
    .then( el => {
    expect(el.val()).to.be.eq('Position bottom right!');
    })

  cy.get('input[name="content"]')
    .clear()
    .type('Position bottom right!')
    .then( el => {
    expect(el.val()).to.be.eq('Position bottom right!'); 
    })

    cy.get('input[name="timeout"]')
    .clear()
    .type('8000')
    .then( el => {
    expect(el.val()).to.be.eq('8000'); 
    })

    cy.get('nb-select[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
    cy.get('#nb-option-36').click();
    cy.get('.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();

// toast contains text
cy.get('span[class="title subtitle"]')
.then( elem => {
expect(elem.text()).includes('Toast 2. Position bottom right!')
})

cy.get('div[class="message"]')
.then( element => {
expect(element.text()).includes('Position bottom right!')
})

 // toast contains icon
 cy.get('g[data-name="flash"]')
 .then( element => {
 expect(element.attr('data-name')).to.eq('flash');
 })
})
})