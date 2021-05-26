export class HorizontalSlider {
    getInput() {
        return cy.get('#content input');
    }

    getInputValue() {
        return cy.get('#content span#range').invoke('text').then(parseFloat);
    }

    updateInputValue(updateValue) {
        this.getInput().invoke('val', updateValue).trigger('change');
    }

    assertValue(value) {
        this.getInputValue().should('equal', value);
    }
}