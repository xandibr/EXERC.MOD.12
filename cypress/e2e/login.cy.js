context('Login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')      
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Fazendo login', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    });
})