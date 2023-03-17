  export class LoginPage{
    
    welcome_text= 'Welcome! Please Login to your account.'
    username_box= '#textfield-username'
    password_box= '#textfield-password'
    // username= "Admin"
    // password = "admin123"


    openPage(url, text){
      // cy.visit('https://admin.demo.litmusscale.com/')
      cy.visit(url)
      cy.wait(2)
      // cy.get('.mt-2').should('have.text',text)
      cy.get('.oxd-text--h5').should('have.text','Login')
      cy.wait(2)
    }
    // it('Login page Welcome message is displayed', () => {
    enterUsername(username){
    // enterUsername(username_box,username){

      // cy.get(username_box).type('Admin')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    }
    // enterPassword(password_box,password){
    enterPassword(password){

      // cy.get(password_box).type('admin123')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
      cy.wait(1)
    }
  
    clickLogin(){
      // cy.get('#login-btn').click()
      cy.get('.oxd-button').click()
      cy.wait(3)
      cy.url().should('include', '/dashboard')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
      cy.end()
    }
  }
    // cy.contains('User Name/Email')
    // cy.visit('https://admin.demo.litmusscale.com/')
    // cy.get('.MuiInputBase-root')
    // cy.get(username_box).type('rizwan.wasim@eurustechnologies.com')
    // cy.get(':nth-child(2) > .css-tzsjye > .MuiFormLabel-root')
    // cy.get(password_box).type('StarGate22_@')
    // cy.wait(1)
    // cy.get('#login-btn').click()
    // cy.wait(3)
    // cy.url().should('include', '/dashboard')
    // // print('welcome message is shown')
    // // End the test and move on to the next one
    // cy.end()
  // })
  // it('Login Form is displayed',() => {
    // cy.wait(2)
    // // cy.contains('User Name/Email')
    // cy.visit('https://admin.demo.litmusscale.com/')
    // // cy.get('.MuiInputBase-root')
    // cy.get('#textfield-username').type('rizwan.wasim@eurustechnologies.com')
    // // cy.get(':nth-child(2) > .css-tzsjye > .MuiFormLabel-root')
    // cy.get('#textfield-password').type('StarGate22_@')
    // cy.wait(1)
    // cy.get('#login-btn').click()
    // cy.wait(3)
    // cy.url().should('include', '/dashboard')
    // Close the browser window when the test finishes
    // cy.visit('about:blank')
  // }
//   )
// })
// }