import 'cypress-file-upload';

describe('File uplodad',()=>{

it('Single file upload',()=>{

    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("[id='file-upload']").attachFile('test_1.pdf');
    cy.get("#file-submit").click();
    cy.wait(5000)
    cy.get("[class='example'] h3").should('have.text','File Uploaded!')


})
it('File upload and rename',()=>{

    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("[id='file-upload']").attachFile({filePath:'test_1.pdf',fileName:'myfile.pdf'});
    cy.get("#file-submit").click();
    cy.wait(5000)
    cy.get("[class='example'] h3").should('have.text','File Uploaded!')


    
})

it('File upload Drag and Drop',()=>{

    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("[id='drag-drop-upload']").attachFile('test_1.pdf',{subjectType:'drag-n-drop'});
    cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
    .contains("test_1.pdf");


    
})
it('Multiple files upload',()=>{
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
    cy.get("#filesToUpload").attachFile(["test_1.pdf","test_2.pdf"])
    cy.wait(5000)
    cy.get(":nth-child(6)>strong").should('contain.text','Files You Selected:');

    
})
it.skip('File upload and shadow Dom',()=>{

    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/");
    cy.get("[class='smart-browse-input']",{includeShadowDom:true}).attachFile("test_1.pdf")
    cy.wait(5000)
    cy.get("[class='smart-item-name']",{includeShadowDom:true})
    .contains('test_1.pdf')

    
})




})