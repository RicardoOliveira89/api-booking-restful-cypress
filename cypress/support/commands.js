Cypress.Commands.add('createToken', (payload) => {
    cy.request({
        method: 'POST',
        url: 'auth',
        failOnStatusCode: false,
        header: {
            "Content-Type": "application/json"
        },
        body: payload
        }).then((response) => { return response})
})

Cypress.Commands.add('createBooking', (payload) => {
    cy.request({
        method: 'POST',
        url: '/booking',
        failOnStatusCode: false,
        header: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: payload
        }).then((response) => { return response})
})

Cypress.Commands.add('getBookingIds', () => {
    cy.request({
        method: 'GET',
        url: '/booking',
        failOnStatusCode: true
    }).then((response) => {return response})
})

Cypress.Commands.add('getBookingId', (bookingId) => {
    cy.request({
        method: 'GET',
        url: `/booking/${bookingId}`,
        failOnStatusCode: false
    }).then((response) => {return response})
})

Cypress.Commands.add('updateBooking', (payload, id, token) => {
    cy.request({
        method: 'PUT',
        url: `/booking/${id}`,
        failOnStatusCode: false,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Cookie": `token=${token}`
        },
        body: payload
    }).then((response) => {return response})
})

Cypress.Commands.add('deleteBooking', (id, token) => {
    cy.request({
        method: 'DELETE',
        url: `/booking/${id}`,
        failOnStatusCode: false,
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`
        }, 
    }).then((response) => {return response})
})