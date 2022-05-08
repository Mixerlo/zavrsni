import {topHeader,mainMenu} from "../../support/pom_files/header"
import {form} from "../../support/pom_files/loginPage_pom"


const customerUser = Cypress.env("customerUser")

describe('Visa page tests', function() {
    beforeEach('Navigate to Login page and log in ', function() {
        cy.visit(Cypress.env("baseUrl"))
        cy.loginToSite(customerUser.username, customerUser.password) 
        // cy.get(topHeader.login).click()
        // cy.get(form.email).type(customerUser.username, {force:true})
        // cy.get(form.password).type(customerUser.password,{force:true})
        // cy.get(form.login).click({force: true})
    });

    it.only('Check if the submit visa app works', function(){
        cy.get(mainMenu.visa).click({force:true})
        cy.url().should('include', '/visa')
    }) 

    it.only('Test to see if the Visa page leads the user to the Visa submission', function(){
        
        cy.get(mainMenu.visa).click({force:true})
        cy.get('#from_country').select("AF",{force:true})
        cy.get('#to_country').select("DJ",{force:true})
        cy.get('#date').type("16-05-2022",{force:true})
        cy.get('#submit').click({force:true})
        cy.url().should('include', '/visa/submit/af/dj')
        // cy.get(mainMenu.visa).click({force:true})
        // cy.get(visaForm.cityName).click()
    })

    it('Test to submit a visa application with no info', function(){
        cy.get(mainMenu.visa).click({force:true})
        cy.get('#from_country').select("AF",{force:true})
        cy.get('#to_country').select("DJ",{force:true})
        cy.get('#date').type("16-05-2022",{force:true})
        cy.get('#submit').click({force:true})
        cy.url().should('include', '/visa/submit/af/dj')
        cy.get('#submit').click({force:true})
        cy.url().should('include', 'success/visa')
        //this is a bug in site, it shouldnt allow proceeding further
    })
        
})

