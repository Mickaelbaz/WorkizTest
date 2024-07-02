export class SideMenu {

    get scheduleButton() {
        return cy.get('.scheduleLink')
    }

    openSchedulePage() {
        cy.intercept({method: 'GET', url: '**/schedule_settings/', times: 1}).as('scheduleSettings')
        this.scheduleButton.click()
        cy.wait('@scheduleSettings').its('response.statusCode').should('eq', 200)
    }
}
