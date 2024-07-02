import { BasePage } from "../BasePage";

export interface NewJobFields {
  clientName: string;
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  unit: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  jobType: string;
  jobSource: string;
  description?: string;
  startingDate: string;
  endingDate: string;
  teamMembers?: string | string[];
}

export class NewJobPage extends BasePage {
  static get clientNameField() {
    return cy.get('[name="name"]');
  }

  static get companyNameField() {
    return cy.get('[name="client_company_name"]');
  }

  static get phoneField() {
    return cy.get('[name="primary_phone"]');
  }

  static get emailField() {
    return cy.get('[name="email_address"]');
  }

  static get addressField() {
    return cy.get('[name="address"]');
  }

  static get unitField() {
    return cy.get('[name="unit"]');
  }

  static get cityField() {
    return cy.get('[name="city"]');
  }

  static get regionField() {
    return cy.get('[name="state"]');
  }

  static get postalCodeField() {
    return cy.get('[name="zipcode"]');
  }

  static get countrySelectField() {
    return cy.get(
      '[data-test-id="components_form_select_div"]:contains(Country)'
    );
  }

  static get jobTypeSelectField() {
    return cy.get(
      '[data-test-id="components_form_select_div"]:contains(Job Type)'
    );
  }

  static get jobSourceSelectField() {
    return cy.get(
      '[data-test-id="components_form_select_div"]:contains(Country)'
    );
  }

  static get descriptionField() {
    return cy.get('[name="description"]');
  }

  static get startDateField() {
    return cy.get('[name="job_date"]');
  }

  static get endDateField() {
    return cy.get('[name="job_end_date"]');
  }

  static get assignTeamMembersSelectField() {
    return cy.get('[id="teamAssignment"]');
  }

  static get createButton() {
    return cy.get("button:contains(Create)");
  }

  static selectCountry(country: string) {
    this.countrySelectField.find(".react-select__indicator").click();
    this.countrySelectField.find('[aria-live="polite"]').select(country);
  }

  static selectJobType(jobType: string) {
    this.jobTypeSelectField.find(".react-select__indicator").click();
    this.jobTypeSelectField.find('[aria-live="polite"]').select(jobType);
  }

  static selectJobSource(jobSource: string) {
    this.jobSourceSelectField.find(".react-select__indicator").click();
    this.jobSourceSelectField.find('[aria-live="polite"]').select(jobSource);
  }

  static selectEndingDateToNextMonth(date: string) {
    let month: string;
    let day: string;

    month = date.substring(3, 5);
    day = date.substring(0, 2);
    if (day.charAt(0) === "0") day = day.charAt(1);
    cy.get('.react-datepicker .react-datepicker__navigation--nex').click()
    cy.get('.react-datepicker__month .react-datepicker__day').filter(day).click();
  }

  static createNewJob(newJobFields: NewJobFields) {
    newJobFields.clientName &&
      this.clientNameField.type(newJobFields.clientName);
    newJobFields.companyName &&
      this.companyNameField.type(newJobFields.companyName);
    newJobFields.phoneNumber && this.phoneField.type(newJobFields.phoneNumber);
    newJobFields.emailAddress &&
      this.emailField.type(newJobFields.emailAddress);
    newJobFields.address && this.addressField.type(newJobFields.address);
    newJobFields.city && this.cityField.type(newJobFields.city);
    newJobFields.region && this.regionField.type(newJobFields.region);
    newJobFields.postalCode &&
      this.postalCodeField.type(newJobFields.postalCode);
    newJobFields.country && this.selectCountry(newJobFields.country);
    newJobFields.jobType && this.selectJobType(newJobFields.jobType);
    newJobFields.jobSource && this.selectJobSource(newJobFields.jobSource);
    newJobFields.endingDate && this.selectEndingDateToNextMonth(newJobFields.endingDate)
  }
}
