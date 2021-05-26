export class AddRemove {
    getAddElementButton() {
        return cy.get("button").contains("Add Element");
    }

    getDeleteElements() {
        return cy.get("#elements button");
    }

    addElements(noOfElements) {
        for(let i=1; i <= noOfElements; i++) {
            this.getAddElementButton().click();
        }
    }

    deleteNthElement(nth) {
        this.getDeleteElements().eq(nth-1).click();
    }

    deleteAllElements() {
        return this.getDeleteElements().each(($el) => {
            cy.wrap($el).click();
        })
    }
}