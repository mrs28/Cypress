describe("Test suite - conjunto de pruebas", () => {

    it ("Validar página de inicio", ()=>{
        cy.visit("http://zero.webappsecurity.com/")
        //ubico el elemento y luego valido que esté visible
        cy.get(".active > img").should("be.visible")
        //Copiar texto tal cual tenga sus minísculas mayúsculas
        cy.get(".active > .custom > h4").contains("Online Banking")
    })

    it ("Validar página 2", ()=>{
        
    })

    it ("Validar página 3", ()=>{
        
    })
})