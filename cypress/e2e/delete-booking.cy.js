/// <reference types="cypress" />

import payloadUser from '../fixtures/payload-user.json'
import payloadsBooking from '../fixtures/payloads-bookings.json'

describe('Delete bookings', () => {
    let id = ''
    let token = ''

    beforeEach(() => {
        cy.createBooking(payloadsBooking[0]).then((response_booking) => {
            expect(response_booking.status).equal(200)
            id = response_booking.body.bookingid
        })

        cy.createToken(payloadUser).then((response_token) => {
            expect(response_token.status).equal(200)
            token = response_token.body.token
        })
    })

    it('Delete booking', () => {
        cy.deleteBooking(id, token).then((response_delete) => {
            expect(response_delete.status).equal(201)
            cy.getBookingId(id).then((response_get) => {
                expect(response_get.status).equal(404)
            })
        })
    })
})