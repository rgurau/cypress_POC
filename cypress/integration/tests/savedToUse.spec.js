///<reference types="Cypress"/>

describe('', ()=>{
    it('', ()=>{
        cy.get('[data-cy="someInput"]').as('input')
        cy.get('@input').then($input =>{
            expect($input.text()).to.equal('2')
        })
        cy.get('@input').then($input =>{
            cy.wrap($input).should('be', '2')
        })


        cy.get('').dblclick();
        cy.get('').invoke('text').should('equl','');
        cy.get('').select('')
        cy.get('').trigger('mouseover')
        .then(() => {
            debugger
        })

        cy.get('').trigger('mouseover')
        .debug()

        //export CYPRESS_ENV_VAR
        //unset CUPRESS_ENV_VAR

        //cypress open --env MY_ENV="dev"

        cy.stub(api, 'getUser')
            .returns({name:'Kim'})
    })
})