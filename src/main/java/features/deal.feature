Feature: Free CRM Deals Feature

#With Examples keyword
Scenario: Free CRM Deals Test Scenario

Given User is already on login page
When Title of login page is Free CRM
Then User enters username and password
| naveenk | test@123 |
Then User click on login button
Then User is on home page
Then User mouse over on deals tab
Then User click on new deals link
Then User enters the deals details title and amount and probability and commission
| test | 1000 | 50 | 10 | 
Then User click on save button
Then User close the browser