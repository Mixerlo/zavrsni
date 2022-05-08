import {topHeader} from "../../support/pom_files/header"
import {form} from "../../support/pom_files/loginPage_pom"
import {signUpForm} from "../../support/pom_files/signUpPage_pom"

describe('Login page tests', function() {
    beforeEach('Navigate to Sign Up page', function() {
        cy.visit(Cypress.env("baseUrl"))
        cy.get(topHeader.signup).click()
    });

    it('Try to Sign Up with no info', function(){
        cy.get(signUpForm.signUpButton).click({force:true})
        cy.get(signUpForm.firstName).invoke('prop', 'validationMessage').should('equal', form.inputFieldEmpty)
    })

    it('Check if all fields have the empty field warning', function(){
        cy.get(signUpForm.firstName).click({force:true}).invoke('prop','validationMessage')
    });

    it('Check if Sign Up function is working', function(){
        cy.get(signUpForm.firstName).click({force:true}).type('asdfg',{force:true})
        cy.get(signUpForm.lastName).click({force:true}).type('asdfg',{force:true})
        cy.get(signUpForm.phone).click({force:true}).type('asdfg',{force:true})
        cy.get(signUpForm.email).click({force:true}).type('asdfg',{force:true})
        cy.get(signUpForm.password).click({force:true}).type('asdgf',{force:true})
        cy.get(signUpForm.signUpButton).click({force:true})
        cy.url().should('include', '/login')
        cy.get('.message > .alert-success').should('have.text', '\n          Signup successfull please login.        ')
        
    })
    it('Check if the login button leads to the login page', function(){
        cy.get(signUpForm.logInButton).click({force:true})
        cy.url().should('include', '/login')
    })
})

    