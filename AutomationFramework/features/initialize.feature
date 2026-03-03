Feature: Initalize Browser and Navigate URL of the Application
 
  Scenario: Launch and Navigate Application URL
    Given I launch browser
    When I navigate the Application URL
    Then I find the Login Page
    Then  I close Application