package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealStepDefinition {
	
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
	@Then("^User enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) 
	{
		List<List<String>> data = credentials.raw();
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
		
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
	
	@Then("^User mouse over on deals tab$")
	public void user_mouse_over_on_deals_tab() 
	{
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
	}

	@Then("^User click on new deals link$")
	public void user_click_on_new_deals_link() 
	{
	    driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}

	@Then("^User enters the deals details title and amount and probability and commission")
	public void user_enters_the_deals_details_and_and(DataTable dealData)
	{
		List<List<String>> dealValues = dealData.raw();
	    driver.findElement(By.id("title")).sendKeys(dealValues.get(0).get(0));
	    driver.findElement(By.id("amount")).sendKeys(dealValues.get(0).get(1));
	    driver.findElement(By.id("probability")).sendKeys(dealValues.get(0).get(2));
	    driver.findElement(By.id("commission")).sendKeys(dealValues.get(0).get(3));
	    
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
