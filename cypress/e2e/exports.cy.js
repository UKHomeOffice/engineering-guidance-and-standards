import {testing_params} from "../support/testing_params";
import {Validator} from '@cfworker/json-schema';

describe("JSON exports validate against their schemas", () => {
    it("standards.json is valid", () => {
        const schemaUri = `${testing_params.TEST_ROOT_URL}/standards.schema.json`;

        cy.request(schemaUri)
            .then(schemaResponse => {
                const validator = new Validator(schemaResponse.body);

                cy.request(`${testing_params.TEST_ROOT_URL}/standards.json`)
                    .then(jsonResponse => {
                        const result = validator.validate(jsonResponse.body)

                        if (result.errors.length > 0) {
                            const tableData = result.errors.map(error => ({
                                "Schema Location": error.keywordLocation,
                                "Instance Location": error.instanceLocation,
                                "Error": error.error,
                            }));

                            return cy.task('table', tableData)
                                // Task has to complete before the expect fails, or it doesn't log.
                                .then(() => result);
                        }
                        else return result
                    })
                    .then(result =>
                        expect(result.valid, "standards.json does not conform to standards.schema.json").true
                    );
            });
    })
})
