Feature: Free CRM Login Feature

#without Examples keyword
#Scenario: Free CRM Login Test Scenario

#Given User is already on login page
#When Title of login page is Free CRM
#Then User enters "naveenk" and "test@123"
#Then User click on login button
#Then User is on home page
#Then User close the browser





#With Examples keyword
Scenario Outline: Free CRM Login Test Scenario

Given User is already on login page
When Title of login page is Free CRM
Then User enters "<username>" and "<password>"
Then User click on login button
Then User is on home page
Then User close the browser

Examples:
		| username | password |
		| naveenk  | test@123 |
		| Tom	   | test1234 |