/// <reference types="cypress" />

describe("As a user, I want to register my account to Cermati.com", () => {

    it("It should be able to visit the website", () => {
        const URL = "https://www.cermati.com/gabung";
        cy.visit(URL);
    });
    
    it("It should be able to input email", () => {
        const inputEmail = cy.get("#email");
        inputEmail.type("johndoe@gmail.com");
    });

    it("It should be able to input password", () => {
        const inputPassword = cy.get("#password");
        inputPassword.type("John123456");
    });

    it("It should be able to input confirmation password", () => {
        const inputConfirmationPassword = cy.get("#confirm-password");
        inputConfirmationPassword.type("John123456");
    });

    it("It should be able to input first name", () => {
        const inputFirstName = cy.get("#first-name");
        inputFirstName.type("Haris Kaisar");
    });

    it("It should be able to input last name", () => {
        const inputLastName = cy.get("#last-name");
        inputLastName.type("Daniels");
    });

    it("It should be able to input mobile phone", () => {
        const inputMobilePhone = cy.get("#mobile-phone");
        inputMobilePhone.type("08989558571");
    });

    it("It should be able to input residence", () => {
        const inputResidence = cy.get("#residence-city");
        inputResidence.click();
        inputResidence.type("Bog");
        cy.get(".autocomplete-list-item").contains("KABUPATEN BOGOR").then((option) => {
            cy.wrap(option).contains("KABUPATEN BOGOR").click();
        });
    });

    it("It should be able to click submit button", () => {
        const button = cy.get("button[type='submit']");
        button.click();
        cy.wait(3000);
    });

});