describe('Login', () => {
  it('Consegue preencher o formulário', () => {
    cy.visit('/login')

    cy.get('#login_usuario')
      .type('teste@email.com')
      .should("have.value", "teste@email.com")

    cy.get('#login_password')
      .type('123321')
      .should("have.value", "123321");
  })
})
