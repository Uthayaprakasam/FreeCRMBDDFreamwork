package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "D:/workspace/FreeCRMBDDFramework/src/main/java/features/login.feature",//path of the feature file 
glue={"stepDefinition"},//path of the step definition file
format ={"pretty","html:test-output","json:json_output/cucunber.json","junit:junit_output/cucumber.xml"},//It will display different output file 
dryRun=false,//It will check mapping the feature and step definition file
monochrome=true,//It will display proper output readable format
strict=true //It will check any missing steps in feature and step definition file

)

public class TestRunner {

}
