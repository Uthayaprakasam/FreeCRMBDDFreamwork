$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/workspace/FreeCRMBDDFramework/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#without Examples keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#Given User is already on login page"
    },
    {
      "line": 7,
      "value": "#When Title of login page is Free CRM"
    },
    {
      "line": 8,
      "value": "#Then User enters \"naveenk\" and \"test@123\""
    },
    {
      "line": 9,
      "value": "#Then User click on login button"
    },
    {
      "line": 10,
      "value": "#Then User is on home page"
    },
    {
      "line": 11,
      "value": "#Then User close the browser"
    },
    {
      "line": 17,
      "value": "#With Examples keyword"
    }
  ],
  "line": 18,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User mouse over on contact tab",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User click on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User enters the contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 32,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Tom",
        "peter",
        "Manager"
      ],
      "line": 33,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "David",
        "nack",
        "QA"
      ],
      "line": 34,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User mouse over on contact tab",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User click on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User enters the contact details \"Tom\" and \"peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 8614049573,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 19933159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 235177755,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 6524107647,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 17107721,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_mouse_over_on_contact_tab()"
});
formatter.result({
  "duration": 309052731,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_new_contact_link()"
});
formatter.result({
  "duration": 1965482362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 33
    },
    {
      "val": "peter",
      "offset": 43
    },
    {
      "val": "Manager",
      "offset": 55
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 349314376,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_save_button()"
});
formatter.result({
  "duration": 2047623447,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_close_the_browser()"
});
formatter.result({
  "duration": 948023410,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User mouse over on contact tab",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User click on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User enters the contact details \"David\" and \"nack\" and \"QA\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 7093072221,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 14719421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 205301394,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 7465081715,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 11374357,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_mouse_over_on_contact_tab()"
});
formatter.result({
  "duration": 143832425,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_new_contact_link()"
});
formatter.result({
  "duration": 1523077139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 33
    },
    {
      "val": "nack",
      "offset": 45
    },
    {
      "val": "QA",
      "offset": 56
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 389362012,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_save_button()"
});
formatter.result({
  "duration": 2179956834,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_close_the_browser()"
});
formatter.result({
  "duration": 746745975,
  "status": "passed"
});
});