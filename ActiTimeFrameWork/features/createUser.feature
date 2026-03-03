Feature: Creation of User

Background: Lauch Application ActiTime
Given I Launch the Browser
When I Navigate to the URL
Then  I SHould see the Login Page

When I Enter the valid username
When I Enter the valid password
When I Click on Login Button
Then I Should land on HomePage

Scenario: Create a User and Save it

Given I Click on User Tab
When I Click on Add User
When I Enter the User Details
Then I Should Create User