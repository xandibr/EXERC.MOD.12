

context('Comprando Produtos', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login()
        cy.visit('produtos')
    });

    it('Fazendo as compras', () => {
        cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3680 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-XL').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()

        cy.get('.post-3850 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()

        cy.get('.post-2900 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-32').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()


    });

    it.only('Compras ao carrinho', () => {

        var quantidade =

            cy.addProdutos('Abominable Hoodie', 'XL', 'Green', 2);
            cy.addProdutos('Atlas Fitness Tank', 'XL', 'Blue', 1);
            cy.addProdutos('Autumn Pullie', 'XL', 'Purple', 1);
            cy.addProdutos('Caesar Warm-Up Pant', '32', 'Gray', 1)
        
    });
    it('Compras ao carrinho', () => {

        var quantidade =

            cy.addProdutos('Atlas Fitness Tank', 'XL', 'Blue', 1)

    });
    it('Compras ao carrinho', () => {

        var quantidade =

            cy.addProdutos('Autumn Pullie', 'XL', 'Purple', 1)

    });
    it('Compras ao carrinho', () => {

        var quantidade =

            cy.addProdutos('Caesar Warm-Up Pant', '32', 'Gray', 1)
    });

});