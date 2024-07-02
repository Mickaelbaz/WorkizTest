import { BasePage } from "../BasePage"

export enum ScheduleFormat {
    DAY = 'day',
    WEEK = 'week',
    MONTH = ' month',
    TIMELINE = 'timeline',
    TIMELINE_WEEK = 'timeline week'
}

export class SchedulePage extends BasePage {

    static get todayButton() {
        return cy.get('.dhx_cal_today_button')
    }

    static getScheduleView(format: ScheduleFormat) {
        return cy.get(`._schViews span:contains(${format})`)
    }

    static get scheduleTime() {
        return cy.get('.dhx_scale_holder_now')
    }
}
