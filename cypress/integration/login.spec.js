import { isExportDeclaration } from "typescript";

describe('My First Test', function() {
    it('Loggin works', function() {
      const user = "User Test"
      cy.visit('http://localhost:3000')
  
      cy.get('#login-username').type(user);
      cy.get('#login-password').type('patata');
      cy.get(':nth-child(1) > form > .btn').click()

      cy.get('.jumbotron > .btn').should(($p) => {
        expect($p).to.contain('Logout')
      });

      cy.get('p > b').should((x) =>{
        expect(x).to.contain(user)
      })

      cy.get('.badge').should(x=>expect(x).to.contain(user))
    })
  })