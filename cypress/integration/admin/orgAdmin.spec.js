/// <reference types="Cypress" />

const username = Cypress.env("orgAdmin");
const password = Cypress.env("orgAdminPassword");

describe("เข้าสู่ระบบ", () => {

    beforeEach(() => {
        cy.login(username, password)
    })

    it("ตรวจสอบ profile", () => {
        cy.get('.rounded-circle')
        .click()
        cy.get('.text-muted').should('have.text', 'organization admin')
    })
})