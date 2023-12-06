describe('Nop Commerce',()=>{

    it('Register Test',()=>{
        cy.visit('https://www.nopcommerce.com/en')
        cy.get("[class='btn black-border-button']").first().click();
        cy.get('.frontend-button').invoke('removeAttr','target').click()
        cy.get("[class='ico-login']").click()
        cy.get("[class='button-1 register-button']").click()
        cy.get("[id='gender-male']").click();
        cy.get("[id='FirstName']").type('Srinivas')
        cy.get("[id='LastName']").type('K')
        
        cy.wait(2000).get("[name='DateOfBirthDay']").contains('12').click({ force: true })
        cy.wait(2000).get("[name='DateOfBirthMonth']").contains('June').click({ force: true })
        cy.wait(2000).get("[name='DateOfBirthYear']").contains('1985').click({ force: true })
        cy.get("[id='Email']").type('usa@gmail.com')
        cy.get("[id='Password']").type("Srinivas")
        cy.get("[id='ConfirmPassword']").type("Srinivas")
        cy.get("[id='register-button']").click()
 


        // cy.get("[class='inputs date-of-birth']").within(()=>{
        //     cy.contains('12').select()
        // })
        //cy.get('.date-picker-wrapper > .valid').type('2')

    
    })

})