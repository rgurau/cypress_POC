import { typeValue, clickOn } from '../../utils/utils'
import { closeBanner } from '../../utils/Pages/popUp'

let SIGN_IN_USER = '.link-user',
EMAIL = ':nth-child(3) > input',
EMAIL_VALUE = 'mockuser@gmail.com',
PASSWORD = ':nth-child(4) > input',
PASSWORD_VALUE = 'SunPassword',
LOG_IN = '.login-box-sign-in-btn'

function logIn(){
    clickOn(SIGN_IN_USER)
    closeBanner()
    typeValue(EMAIL, EMAIL_VALUE)
    typeValue(PASSWORD, PASSWORD_VALUE)
    cy.screenshot('login page','fullPage')
    cy.pause()
    clickOn(LOG_IN)
}

// cy.get('.link-user').click({force:true})
// cy.get(':nth-child(3) > input').clear().type('mockuser@gmail.com')
// cy.get(':nth-child(4) > input').clear().type('SunPassword')
// cy.get('.login-box-sign-in-btn').click()

module.exports = { logIn }