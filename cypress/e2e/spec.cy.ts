

describe('Basic webpage usage flux, correct way', () => {
  it('Makes a basic flux', () => {

    cy.visit('/')
    cy.contains(`Scan your ID`)
    const button = cy.get('button').contains('TAKE PICTURE')
    button.click()
    cy.contains('Room lighting is too low')
    cy.get("video").should("be.visible")
    cy.intercept(
      {
        method: 'POST',
        url: '/evaluations',
      },
      // Nothing too fancy, we want to check here if it correctly approves. A little response modification.
      (request)=>{
        request.reply({
          summary: {
            outcome: "Approved"
          }
        })
      }
    ).as('evaluate')

    // The URL is called correctly.
    cy.wait(["@evaluate"])
    // Since we have a little timeout to change...
    cy.contains('ACCEPTED', { timeout: 3000 })
  })
})

describe('Basic webpage usage flux, no response', () => {
  it('Makes a basic flux', () => {

    cy.visit('/')
    cy.contains(`Scan your ID`)
    const button = cy.get('button').contains('TAKE PICTURE')
    button.click()
    cy.contains('Room lighting is too low')
    cy.get("video").should("be.visible")
    cy.intercept(
      {
        method: 'POST',
        url: '/evaluations',
      },
      // Nothing too fancy, we want to check here if it correctly approves. A little response modification.
      (request)=>{
        request.reply({
          summary: {
            outcome: "Too much glare"
          }
        })
      }
    ).as('evaluate')

    // The URL is called correctly.
    cy.wait(["@evaluate"])
    // Since we have a little timeout to change...
    cy.get("video").should("be.visible")
    // And if there is to be loading eternally...
    cy.end()
  })
})

