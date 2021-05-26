export class Dropdown {
    getDropDown() {
        return cy.get('#dropdown');
    }

    selectOption(value) {
        return this.getDropDown().select(value);
    }

    getSelectedValue() {
        return this.getDropDown().find('[selected="selected"]');
    }

    selectedOptionShouldHaveValue(value) {
        return this.getSelectedValue().should('have.value', value);
    }
}