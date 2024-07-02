import { User } from "../../Constant"
import { DashboardPage } from "../DashboardPage/DashboardPage"

export class LoginPage {

    static get userNameField() {
        return cy.get('[placeholder="Email Address"]')
    }

    static get passwordField() {
        return cy.get('[placeholder="Password"]')
    }

    static get loginButton() {
        return cy.get('[type="submit"]:contains(LOGIN)')
    }

    static login(user: User) {
        this.loginButton.should('be.visible')
        this.fillCredentials(user)
        cy.intercept({method: 'GET', url: '**packages/getPlan/', times: 1}).as('getPlanRequest')
        this.loginButton.click()
        cy.wait('@getPlanRequest').its('response.statusCode').should('eq', 200)
        DashboardPage.salesDataComponent.should('be.visible')
        cy.log('✔ Login action success ✔')
    }

    static fillCredentials(user: User) {
        cy.log('😎 Lets fill the Credentials 😎')
        let uPw: string[] = user.split(',').map((item: string) => item.trim())
        this.userNameField.focus().type(uPw[0])
        this.passwordField.focus().type(uPw[1])
    }
}
