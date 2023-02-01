describe('Homework Viktoriia Bohach', () => {

    describe('Parametrized Test', () => {
      const data = [
        {testData: 'example.first.middle.lastname@email.com', expectedResult: 'example.first.middle.lastname@email.com'},
        {testData: 'example@subdomain.email.com', expectedResult: 'example@subdomain.email.com'},
        {testData: 'example+firstname+lastname@email.com', expectedResult: 'example+firstname+lastname@email.com'},
        {testData: 'example@234.234.234.234', expectedResult: 'example@234.234.234.234'},
{testData: 'example@[234.234.234.234]', expectedResult: 'example@[234.234.234.234]'},
{testData: '“example”@email.com', expectedResult: '“example”@email.com'},
{testData: '0987654321@example.com', expectedResult: '0987654321@example.com'},
{testData: 'example@email-one.com', expectedResult: 'example@email-one.com'},
{testData: 'example@email.com', expectedResult: 'example@email.com'},
{testData: '_______@email.com', expectedResult: '_______@email.com'},
{testData: 'example@email.name', expectedResult: 'example@email.name'},
{testData: 'example@email.co.jp', expectedResult: 'example@email.co.jp'},
{testData: 'example.firstname-lastname@email.com', expectedResult: 'example.firstname-lastname@email.com'},
{testData: 'extremely.”odd\value”@example.com', expectedResult: 'extremely.”odd\value”@example.com'},
{testData: 'extremely.unusual.”@”.unusual.com@example.com', expectedResult: 'extremely.unusual.”@”.unusual.com@example.com'},
{testData: 'very.”(),:;<>[]”.VERY.”very@\\ “very”.unusual@strange.email.example.com', expectedResult: 'very.”(),:;<>[]”.VERY.”very@\\ “very”.unusual@strange.email.example.com'},
      ]
      
      data.forEach(({testData, expectedResult}) => {
        it(`positive test ${testData}`, () => {
          cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
          cy.get('nb-card-header:contains("Material Light")').click();
          cy.get('[data-name="menu"]').click();
          cy.get('a:contains("Forms")').click();
          cy.get('a:contains("Form Layouts")').click();
          cy.get('[data-name="menu"]').click();
          cy.get('div input[type="email"]#exampleInputEmail1').type(`${testData}`);
          cy.get('div input[type="email"]#exampleInputEmail1').should("contain.value", `${expectedResult}`);
        })
      })
    })
  })