/// <reference types="cypress" />

import payloads from "../fixtures/payloads-bookings.json"

describe('Get bookings', () => {
    var id = ''
     
    beforeEach(() => {
        cy.createBooking(payloads[0]).then((response) => {
            expect(response.status).equal(200)
            id = response.body.bookingid
        })
    })

    it('Get booking id', () => {
        cy.getBookingId(id).then((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.deep.equal(payloads[0])
        }) 
    })

    it('Get booking Ids', () => {
        cy.getBookingIds().then((response) => {
            expect(response.status).equal(200)
            expect(response.body).not.empty
        })
    })

    it('Get booking id non-existent.', () => {
        cy.getBookingId(15548914).then((response) => {
            expect(response.status).equal(404)
        })
    })
})