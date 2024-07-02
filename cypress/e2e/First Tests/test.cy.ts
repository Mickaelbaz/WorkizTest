import { User } from "../../support/Constant";
import { DashboardPage } from "../../support/PageObject/DashboardPage";
import { LoginPage } from "../../support/PageObject/LoginPage";
import { NewJobPage } from "../../support/PageObject/NewJobPage";
import { SchedulePage } from "../../support/PageObject/SchedulePage/SchedulePage";
import { SchedulePopup } from "../../support/PopupObject/SchedulePopup/SchedulePopup";

describe("Workiz QA Automation Engineer Task", () => {
  it("create a lead for a client", () => {
    cy.visit('https://homeassessment.tests.workiz.com/');
    LoginPage.login(User.WORKIZ_USER)
    DashboardPage.sideMenu.openSchedulePage()
    SchedulePage.todayButton.should("be.visible")
    SchedulePage.scheduleTime.find('.dhx_marked_timespan').eq(3).as('from')
    SchedulePage.scheduleTime.find('.dhx_now_time').as('to')
    cy.trigger('mousemove').click({ force: true })
    SchedulePopup.scheduleTypeLead.click().should('have.attr', 'checked')
    SchedulePopup.continueButton.click().should('not.exist')
    

  })
});
