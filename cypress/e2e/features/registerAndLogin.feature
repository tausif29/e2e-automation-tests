Feature: UserRegistrationAndLogin 

    Scenario Outline: Register a user and login Scenario

        ##User Registration Steps
        Given I open the website
        When I click on "Create an Account" link and navigate to the "Registration" page
        When I enter all the user details and click on create an account button
        Then I verify user registration is successful along with account details
        When I logout from the account

        ##User Login Steps
        Given I open the website
        When I click on "Sign In" link and navigate to the "Login" page
        When I login to the account with newly created credentials
        Then I verify user logged in successfully

        