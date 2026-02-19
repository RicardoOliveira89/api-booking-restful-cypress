///<reference types ="cypress" />

import payloadsBooking from '../fixtures/payloads-bookings.json'

describe('Create bookings', () => {        
    it('Create booking', () => {
        cy.createBooking(payloadsBooking[0]).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.booking.firstname).equal(payloadsBooking[0].firstname)
            expect(response.body.booking.lastname).equal(payloadsBooking[0].lastname)
            expect(response.body.booking.totalprice).equal(payloadsBooking[0].totalprice)
            expect(response.body.booking.depositpaid).equal(payloadsBooking[0].depositpaid)
            expect(response.body.booking.bookingdates).to.deep.equal(payloadsBooking[0].bookingdates)
            expect(response.body.booking.additionalneeds).equal(payloadsBooking[0].additionalneeds)
        })
    })
})