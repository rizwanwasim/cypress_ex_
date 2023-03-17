import { LoginPage} from "./pages/login.cy";

const loginPage = new LoginPage()
// const emailTest='rizwan.wasim@eurustechnologies.com'
// const password = 'StarGate22_@'
// const url = 'https://admin.demo.litmusscale.com/'
const username= "Admin"
const password = "admin123"
const url = 'https://opensource-demo.orangehrmlive.com/'

describe('Demo For Test', () => {
    
    it('login',()=>{
        // cy.visit('https://admin.demo.litmusscale.com/')
        loginPage.openPage(url)

        loginPage.enterUsername(username)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
    })

    it.skip('login',()=>{
        // cy.visit('https://admin.demo.litmusscale.com/')
        loginPage.openPage(url)

        loginPage.enterUsername(username)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
    })
    
})