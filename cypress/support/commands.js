// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

 import {topHeader} from "../support/pom_files/header";
 import {form} from "../support/pom_files/loginPage_pom";


 Cypress.Commands.add('loginToSite', (username, password) => {
     cy.get(topHeader.login).click()
     cy.get(form.email).type(username, {force: true})       
     cy.get(form.password).type(password, {force: true})
     cy.get(form.login).click({force: true})
     });
