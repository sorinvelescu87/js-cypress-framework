export class BrokenImages {
    // getImageNaturalWidth(nthImage) {
    //     cy.get("#content img").eq(nthImage)
    //         .then(($img) => {
    //             cy.log('image natural width', $img[0].naturalWidth)
    //             return $img[0].naturalWidth 
    //         });
    // }

    nthImageIsBroken(nthImage) {
        cy.get("#content img").eq(nthImage).should('be.visible').and(($img) => {
            expect($img[0].naturalWidth).to.equal(0)
        })
    }

    nthImageIsIsNotBroken(nthImage) {
        cy.get("#content img").eq(nthImage).should('be.visible').and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    }
}