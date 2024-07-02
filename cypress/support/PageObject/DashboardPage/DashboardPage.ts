import { BasePage } from "../BasePage";

export class DashboardPage extends BasePage {

    static get salesDataComponent() {
        return cy.get('[data-test-id="components_dnd_sortableCard_div"]:contains(Sales)')
    }
}
