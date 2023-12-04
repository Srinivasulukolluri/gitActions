import 'cypress-iframe'

describe('Handling Frames',()=>{

    it('Approach1',()=>{

    cy.visit("https://the-internet.herokuapp.com/iframe")

    const iframe =cy.get("#mce_0_ifr")
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)

    iframe.clear().type("welcome {cmd+a}")

    cy.get("[title='Bold']").click()

    })

    it.skip('Approach2--by using custom commands',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")
    
       cy.getIframe("#mce_0_ifr").clear().type("welcome {cmd+a}")
       cy.get("[title='Bold']").click()
    
        })



        it('Approach3--by using cypress iframe plugin',()=>{

            cy.visit("https://the-internet.herokuapp.com/iframe")
        
            cy.frameLoaded("#mce_0_ifr");
            cy.iframe("#mce_0_ifr").clear().type("Welcome {cmd+a}");
            cy.get("[title='Bold']").click()
            })



})