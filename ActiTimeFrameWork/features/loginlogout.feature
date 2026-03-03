Feature: : Login and Logout for ActiTime Apllication

Scenario: To Verfiy the Login and Logout for the Application

Given I Launch the Browser
When I Navigate to the URL
Then  I SHould see the Login Page

When I Enter the valid username
When I Enter the valid password
When I Click on Login Button
Then I Should land on HomePage

When I Click on Logout Link
Then I Should see Login Page

