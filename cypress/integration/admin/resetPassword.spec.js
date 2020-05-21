/// <reference types="Cypress" />

const username = Cypress.env("orgAdmin");

describe("ลืมรหัสผ่าน", () => {
    it("ใส่ email เพื่อขอรหัสผ่านใหม่", () => {
        cy.visit('/pages/login')
        cy.contains(' ลืมรหัสผ่าน')
        .click()
        cy.get('.input-group > .form-control')
        .type(username)
        cy.contains('รีเซ็ตรหัสผ่าน').click()
        cy.get('.teal').should('have.text', 'กรุณาเช็คอีเมล์ของท่าน')
    })
})