package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^User is already on login page$")
	public void user_is_already_on_login_page()
	{
		System.setProperty("webdriver.chrome.driver", "D:/Testing/Automation/Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		driver.get("https://www.freecrm.com");
	}
	
	@When("^Title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM()
	{
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("#1 Free CRM for Any Business: Online Customer Relationship Software", title);
	}
	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username,String password) 
	{
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		
	}

	@Then("^User click on login button$")
	public void user_click_on_login_button() 
	{
		WebElement element = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
    	js.executeScript("arguments[0].click();", element);
	}

	@Then("^User is on home page$")
	public void user_is_on_home_page() 
	{
	    String title = driver.getTitle();
	    System.out.println("Home page title:" +title);
	    Assert.assertEquals("CRMPRO", title);
	}
	
	@Then("^User mouse over on contact tab$")
	public void user_mouse_over_on_contact_tab() 
	{
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
	}

	@Then("^User click on new contact link$")
	public void user_click_on_new_contact_link() 
	{
	    driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	}

	@Then("^User enters the contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_the_contact_details_and_and(String arg1, String arg2, String arg3)
	{
	    driver.findElement(By.id("first_name")).sendKeys(arg1);
	    driver.findElement(By.id("surname")).sendKeys(arg2);
	    driver.findElement(By.id("company_position")).sendKeys(arg3);
	}

	@Then("^User click on save button$")
	public void user_click_on_save_button() 
	{
	    driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}

	
	@Then("^User close the browser$")
	public void User_close_the_browser()
	{
		driver.quit();
	}
	
}
