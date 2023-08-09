

context('Comprando Produtos', () => {

    beforeEach(() => {
        cy.login()
    });

    it.only('Adicionando produtos ao carrinho', () => {
        cy.visit('produtos')
        cy.addProdutos('Abominable Hoodie', 'XL', 'Green')
        cy.visit('produtos')
        cy.addProdutos('Atlas Fitness Tank', 'XL', 'Blue')
        cy.visit('produtos/page/2/')
        cy.addProdutos('Autumn Pullie', 'XL', 'Purple')
        cy.visit('produtos/page/2/')
        cy.addProdutos('Caesar Warm-Up Pant', '32', 'Gray')

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.page-title').should('contain', 'Pedido recebido')
    });
});