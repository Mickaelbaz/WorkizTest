export class SchedulePopup {

    static get scheduleTypeJob() {
        return cy.get('.list [value="job"]')
    }

    static get scheduleTypeLead() {
        return cy.get('.list [value="lead"]')
    }

    static get continueButton() {
        return cy.get('button:contains(Continue)')
    }
}
