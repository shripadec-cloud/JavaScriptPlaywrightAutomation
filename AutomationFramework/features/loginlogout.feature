Feature: Verify the Login and Logout functionalities
 
  Scenario: Verify the Login functioanlity with valid credentials
    Given I launch browser
    When I navigate the Application URL
    Then I find the Login Page
    When I enter username in username text field
    When I enter password in password text field
    When I click on Login button
    Then I find the home Page
    When I clcik on User Profile Icon
    When I click on Logout Link
    Then I find the Login Page