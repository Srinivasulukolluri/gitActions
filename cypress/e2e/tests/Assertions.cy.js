//require('cypress-xpath');
describe('Assertions demo',()=>{

    it("implicit assertions",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // should ,and  keywords

    //cy.url().should('include','orangehrmlive.com')
    //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //cy.url().should('contain','orangehrm')

   /* cy.url().should('include','orangehrmlive.com').should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .should('contain','orangehrm')*/

    cy.url().should('include','orangehrmlive.com').and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orangehrm')
    .and('not.contain','greenhrm')

    cy.title().should('include','Orange').and('eq','OrangeHRM')
    .and('contain','HRM')

    cy.get('.orangehrm-login-branding > img').should('be.visible')
    .and('exist')
    
    cy.xpath("//a").should('have.length','5')
    cy.get("input[name='username']").type("Admin")
    .should('have.value','Admin')

    cy.get("input[name='password']").type("admin123").should('have.value','admin123')

    })
it.skip('Explicit Assertions',() =>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admin")
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit']").click()

    let expName="Paul Collings";

    cy.get("[class='oxd-userdropdown-name']").then((x)=>{
    
        let actName=x.text()

        //BDD style assertions
        expect(actName).to.equal(expName)
        expect(actName).to.not.equal(expName)

        //TDD style assertions

        assert.equal(actName,expName)
        assert.notequal(actName,expName)

    })

})

})





