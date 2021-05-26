/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { FileUpload } from '../../support/page-objects/file-upload'
const utils = new Utils();
const fileUpload = new FileUpload();

describe(data.file_upload.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.file_upload.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.file_upload.tagLine)
    });

    it('should upload hello_world.txt file', () => {
        fileUpload.uploadFile('../../downloads/hello_world.txt');
    });

    it('should upload test-data.json file', () => {
        fileUpload.uploadFile('test-data.json');
    });
});