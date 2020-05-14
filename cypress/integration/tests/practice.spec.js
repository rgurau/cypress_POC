
import { closeBanner } from '../../utils/Pages/popUp'
import { logIn } from '../../utils/Pages/home'
import { validateUrlIncludes } from '../../utils/utils'

describe('Sunrise', () => {
    before(() => {
        cy.visit('/en/home')

        it('Should load the correct URL', () => {
            cy.url().should('contain', 'home')
            cy.location('pathname').should('include', '/en/home')
        })
    })

    // describe('', () => {
        it('Should close the banner', () => {
            cy.get('#modalAnnounce > .modal-dialog > .modal-content > .modal-header > .close > span > img')
            cy.get('.btn-yellow').click()
        // })

        // it('Customer is able to access the login page', () => {
            cy.get('.link-user').click()
            cy.url().should('contain', 'login')
        // })

        // it('Should fill the login form and sign in', () => {
            cy.get(':nth-child(3) > input').clear().type('mockuser@gmail.com', { delay: 100 })
                .should('have.value', 'mockuser@gmail.com')
            cy.get(':nth-child(4) > input').clear().type('SunPassword', { delay: 200 })
            .should('have.value', 'SunPassword')
            cy.get('.login-box-sign-in-btn').click()
        // })

        cy.url().should('contain', 'user')

        // nav to basket
        cy.contains('Cart').click()
        // cy.get('.not-empty').click()
        cy.get('.nav-minicart')
        cy.get('.nav-minicart > .btn-yellow').click()

            // fill delivery details
            cy.get('#shipping-title-selectSelectBoxItArrowContainer').then( option => {
                cy.wrap(option)
                option[0].click()
                cy.get('[data-val="Mr."]').click({ multiple:true, force:true })
            })
            cy.get('#input-firstNameShipping').clear().type('Mock')
            cy.get('#input-lastNameShipping').clear().type('User')
            cy.get('#input-streetNameShipping').clear().type('42, Quensberry Road')
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
