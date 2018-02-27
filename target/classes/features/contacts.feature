Feature: Free CRM Contacts Feature

#With Examples keyword
Scenario Outline: Free CRM Contacts Test Scenario

Given User is already on login page
When Title of login page is Free CRM
Then User enters "<username>" and "<password>"
Then User click on login button
Then User is on home page
Then User mouse over on contact tab
Then User click on new contact link
Then User enters the contact details "<firstname>" and "<lastname>" and "<position>" 
Then User click on save button
Then User close the browser

Examples:
		| username | password | firstname | lastname | position |
		| naveenk  | test@123 | Tom 	  | peter	 | Manager  |
		| naveenk  | test@123 | David	  | nack  	 | QA		|