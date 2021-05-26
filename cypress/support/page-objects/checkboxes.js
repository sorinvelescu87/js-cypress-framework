export class Checkboxes {
    assertNthCheckboxIsChecked(nthChecbox) {
        cy.get("#checkboxes input").eq(nthChecbox).should('be.checked'); 
    }

    assertNthCheckboxIsUnchecked(nthChecbox) {
        cy.get("#checkboxes input").eq(nthChecbox).should('not.be.checked'); 
    }

    checkNthCheckbox(nthCheckbox) {
        cy.get("#checkboxes input").eq(nthCheckbox).check();
    }
    uncheckNthCheckbox(nthCheckbox) {
        cy.get("#checkboxes input").eq(nthCheckbox).uncheck();
    }
}