import {topHeader} from "../../support/pom_files/header"
import {form} from "../../support/pom_files/loginPage_pom"

const customerUser = Cypress.env("customerUser")

describe('Login page tests', function() {
    beforeEach('Navigate to Login page', function() {
        cy.visit(Cypress.env("baseUrl"))
        cy.get(topHeader.login).click()
    });

    it('Login with no info', function() {   
        cy.get(form.login).click({force: true})       
            cy.get(form.email).invoke('prop', 'validationMessage')
              .should('equal', form.inputFieldEmpty)
     });
     
    it('Log in with proper info', function() {
        // cy.get(form.login).click({force: true})
        cy.get(form.email).type(customerUser.username, {force:true})
        cy.get(form.password).type(customerUser.password,{force:true})
        cy.get(form.login).click({force: true})
    })

     it('Login with proper email - wrong password', function() {
         cy.get(form.email).type(customerUser.username, {force:true})
         cy.get(form.password).type(customerUser.wrongPassword, {force:true})
         cy.get(form.login).click({force:true})
         cy.get(form.wrongCredentials, {timeout:2000}).should('have.text', form.wrongCredentialsText)
     })

     it('Login with wrong email - proper password', function(){
         cy.get(form.email).type(customerUser.wrongUsername, {force:true})
         cy.get(form.password).type(form.password, {force:true})
         cy.get(form.login).click({force:true})
         cy.get(form.wrongCredentials, {timeout:2000}).should('have.text', form.wrongCredentialsText)
     })

})