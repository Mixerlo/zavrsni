import {topHeader,mainMenu} from "../../support/pom_files/header"
import {form} from "../../support/pom_files/loginPage_pom"
const customerUser = Cypress.env("customerUser")

describe('Visa page tests', function() {
    beforeEach('Log in to site ', function() {
        cy.visit(Cypress.env("baseUrl"))
        cy.loginToSite(customerUser.username, customerUser.password)
        cy.get(mainMenu.flights).click()
    });

    it('Check if Origin alert works', function(){
        cy.get(".btn-lg").click({force:true})
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Please fill out origin')
        })
    }) 
    it.only('Check if destination alert works', function(){
        //cy.get('autocomplete').click().focused().type('a'+'{downarrow}{enter}',{force:true});
        cy.get('#input').type('ae')
        cy.get(".btn-lg").click({force:true})
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Please fill out destination')
        })
        
    })


})