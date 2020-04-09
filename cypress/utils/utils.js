


function validateUrlIncludes(sURL) {
    cy.url().should('include',sURL)
}

function typeValue(element, value){
    cy.get(element).clear().type(value)

}

function clickOn(element){
    cy.get(element).click({force:true})
}




exports.validateUrlIncludes = validateUrlIncludes
exports.typeValue = typeValue
exports.clickOn = clickOn
