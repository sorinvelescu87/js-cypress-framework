export class Frames {
    goToExample(pageName) {
        cy.contains(pageName).click();
    }
}