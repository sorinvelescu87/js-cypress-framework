import { Utils } from "../utils"
const utils = new Utils();

export class FileDownload {
    getFile(fileName) {
        return cy.contains(fileName);
    }

    downloadFile(fileName) {
        cy.request({
            url: '/download/' + fileName,
            encoding: 'binary'
          })
          .then((response) => {
            cy.writeFile('/Users/svelescu/Proj/internet-herokuapp/downloads/' + fileName, response.body, 'binary')
          });
    }

    readTxtFile(fileName, expectedText) {
        cy.readFile('downloads/' + fileName ).should('eq', expectedText);
    }

    checkHeaders(fileName) {
        cy.request({
            url: '/download/' + fileName,
            encoding: 'binary'
          })
          .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.headers, 'response headers').to.include({
                    'content-disposition': 'attachment; filename="' + fileName + '"'
                });        
            });
    }
}