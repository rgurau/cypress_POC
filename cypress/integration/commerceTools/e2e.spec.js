
import { closeBanner } from '../../utils/Pages/popUp'
import { logIn } from '../../utils/Pages/home'
import { validateUrlIncludes } from '../../utils/utils'

describe('Sunrise', () => {
    before(() =>{
    })

    it('e2e', () => {
        cy.visit('/en/home')
        closeBanner()
        validateUrlIncludes('home')
        logIn()
    // nav to chekout page
        cy.get('.not-empty').click()
        cy.get('.nav-minicart')
        cy.get('.nav-minicart > .btn-yellow').click()

    // fill delivery details
        cy.get('#shipping-title-selectSelectBoxItArrowContainer').then(option =>{
            cy.wrap(option)
            option[0].click()
            cy.get('[data-val="Mr."]').click({multiple:true, force:true})
        })
        cy.get('#input-firstNameShipping').clear().type('Mock')
        cy.get('#input-lastNameShipping').clear().type('User')
        cy.get('#input-streetNameShipping').clear().type('42, Quessberry Road')
        cy.get('#input-cityShipping').clear().type('Gatwick')
        cy.get('#input-postalCodeShipping').clear().type('RH60NP')

        cy.get('.checkout-product-name').eq(0).invoke('text').should('equal','Top "Forever and Always“')
        cy.get('.checkout-product-name').eq(1).invoke('text').should('equal','Slip-On Shoes ”H259” Hogan white')
        cy.get('.checkout-product-name').eq(2).invoke('text').should('equal','Perfume ”Haiku” Mirko Buffini 30ml')

        

        cy.get('#input-emailShipping').clear().type('mockuser@gmail.com')
        cy.get('#shipping-continue-checkout-btn-xs').click()
        cy.get('#shipping-method-0').click()
        cy.get('#shipping-continue-checkout-btn-xs').click()
        cy.get('#payment-type-prepaid').check()
        cy.get('#shipping-continue-checkout-btn-xs').click()

        cy.scrollTo('bottom')
        cy.get('.order-total').invoke('text').should('equal','TotalEUR 378.25')
    }) 
})
