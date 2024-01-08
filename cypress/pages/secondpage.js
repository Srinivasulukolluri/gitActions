class secondPage{

    bankProject(){

        return cy.xpath("//*[contains(text(),'Bank Project')]").click({force:true})
        
    }

 SendCredentials(){

   return cy.xpath("//input[@name='uid']").type('mngr546831')
  // cy.get(':nth-child(1) > :nth-child(2) > input').type('mngr546831')
   // cy.wait(2000).get("[id='message23']").type('mngr546831')
   
 }
 sendPaword(){
   cy.get("[name='password']").type('yzydEry')
   return
 }

 ClickLogin(){
    cy.get("[name='btnLogin']").click({force:true})
 }

    
}
export default secondPage;

//module.exports = secondPage;