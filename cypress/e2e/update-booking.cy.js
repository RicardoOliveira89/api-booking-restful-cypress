///<reference types ="cypress" />

import payloadsBooking from '../fixtures/payloads-bookings.json'
import payloadUser from '../fixtures/payload-user.json'

describe('Update bookings', () => {
    var id = ''
    var token = ''
    
    beforeEach(() => {
        cy.createToken(payloadUser).then((response_token) => {
            expect(response_token.status).equal(200)
            token = response_token.body.token
        })

        cy.createBooking(payloadsBooking[0]).then((response_booking) => {
            expect(response_booking.status).equal(200)
            id = response_booking.body.bookingid
        })
    })

    it('Update booking', () => {
        cy.updateBooking(payloadsBooking[1], id, token).then((response_update) => {
            expect(response_update.status).equal(200);
            expect(response_update.body).to.deep.equal(payloadsBooking[1]);
        })   
    })

    it('Update booking partitial', () => {
        cy.updateBooking(payloadsBooking[2], id, token).then((response_update) => {
            expect(response_update.status).equal(200);
            expect(response_update.body).to.deep.equal(payloadsBooking[2]);
        })
    })
})