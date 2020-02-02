const user = "User Test"


context('Loggin Stuff', () => {
  beforeEach(() => {
    
  })    
  
  it('Loggin works', () => {
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
      cy.get('.jumbotron > .btn').click();
    });

    it('Document title with no loggin', ()=> {
      cy.document().then(doc=> {
        expect(doc.title).to.eq('React Hooks Blog');
      })
    })

    it('Document title with loggin', ()=> {
      cy.get('#login-username').type(user);
      cy.get('#login-password').type('patata');
      cy.get(':nth-child(1) > form > .btn').click();
      cy.document().then(doc => {
        expect(doc.title).to.eq(`${user} - React Hooks Blog`);
      } )
  })
    
  })