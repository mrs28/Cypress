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

    it ("Prueba de actualización del gráfico", ()=>{
        cy.visit("http://zero.webappsecurity.com/")
        cy.get("#signin_button").click()
        cy.get("#user_login").type("username")
        cy.get("#user_password").type("password")
        cy.get(".btn").click()
        cy.get("#money_map_tab > a").click()
        cy.get("#ext-sprite-1259").should("be.visible")
        cy.get("#ext-sprite-1167 >tspan").click()
        cy.get("#ext-sprite-1259").should("be.visible")
    })
})