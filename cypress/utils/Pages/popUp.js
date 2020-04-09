let MODAL_ANNOUNCE = '#modalAnnounce > .modal-dialog > .modal-content > .modal-header > .close > span > img'
let MODAL_ANNOUNCE_OK = '.btn-yellow'

 function closeBanner(){
    cy.get(MODAL_ANNOUNCE)
    cy.get(MODAL_ANNOUNCE_OK).click()
}

exports.closeBanner = closeBanner