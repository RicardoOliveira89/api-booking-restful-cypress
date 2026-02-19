///<reference types="cypress" />

import payload from '../fixtures/payload-user.json'

describe('Create token', () => {
    it('Create token', () => {
        cy.createToken(payload).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.token).not.empty
        })
    })
})