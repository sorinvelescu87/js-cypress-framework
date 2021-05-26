export class Utils {
    assertLength(selector, length) {
        return selector.should("have.length", length);
    }

    clickOn(selector) {
        return selector.click();
    }

    rightClickOn(selector) {
        return selector.rightclick();
    }

    elementShouldNotExist(selector) {
        return selector.should('not.exist');
    }

    goToPage(url) {
        cy.visit(url);
    }

    assertTagLine(tagLine) {
        cy.location().then((loc) => {
            if (loc.href.indexOf('dynamic_controls') > -1) {
                cy.get("h4").eq(0).should("have.text", tagLine);
            } 
            else if (loc.href.indexOf('forgot_password') > -1 || loc.href.indexOf('login') > -1) {
                cy.get("h2").eq(0).should("have.text", tagLine);
            } 
            else {
                cy.get("h3").eq(0).should("have.text", tagLine);
            }
        });
    }

    assertElementIsDisplayed(selector) {
        cy.get(selector).should('be.visible');
    }

    expectAlertToContain(alertText) {
        cy.on('window:alert', (str) => {
            expect(str).to.contain(alertText);
        });
    }

    type(key, selector) {
        selector.type(key);
    }
}