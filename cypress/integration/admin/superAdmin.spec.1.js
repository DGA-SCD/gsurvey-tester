/// <reference types="Cypress" />

const username = Cypress.env("superAdmin");
const password = Cypress.env("superAdminPassword");

describe("เข้าสู่ระบบ", () => {

    beforeEach(() => {
        cy.login(username, password)
    })

    it("ตรวจสอบ profile", () => {
        cy.get('.rounded-circle')
        .click()
        cy.get('.text-muted').should('have.text', 'super admin')
    })


})