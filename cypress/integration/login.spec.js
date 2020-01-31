describe('My First Test', function() {
    it('finds the content "type"', function() {
      cy.visit('http://localhost:3000')
  
      cy.get('#login-username').type('hola');
      cy.get('#login-password').type('patata');
      cy.get('.btn').click()
    })
  })