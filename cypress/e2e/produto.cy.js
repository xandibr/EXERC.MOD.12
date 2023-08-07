context('Comprando Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Fazendo as compras', () => {
        cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()


    });

});