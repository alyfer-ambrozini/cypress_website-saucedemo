class LoginPage{
    login_success(user, password){
        cy.findById('user-name').type(user)
        cy.findById('password').type(password)           
    }
    click_login(){
        cy.findById('login-button').click()    
    }
}
export default new LoginPage