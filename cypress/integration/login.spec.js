describe('My First Test', function() {
    it('Loggin works', function() {
      cy.visit('http://localhost:3000')
  
      cy.get('#login-username').type('hola');
      cy.get('#login-password').type('patata');
      cy.get(':nth-child(1) > form > .btn').click()
    })
  })