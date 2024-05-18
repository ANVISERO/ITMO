import com.ANVISERO.Utils;
import com.ANVISERO.model.MainPage;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class LoginTest {

    @BeforeAll
    public static void setUp() {
        Utils.prepareDrivers();
    }

    @Test
    @DisplayName("loginSuccessTest")
    void loginSuccessTest() {
        List<WebDriver> drivers = Utils.getDrivers();
        drivers.parallelStream().forEach(webDriver -> {
            MainPage mainPage = new MainPage(webDriver);
            webDriver.get(Utils.BASE_URL);
            mainPage.doLogin();
            WebElement login = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='right-top-menu-uname']"));
            assertEquals(Utils.CORRECT_USERNAME, login.getText());
        });
        drivers.forEach(WebDriver::quit);
    }

    @Test
    @DisplayName("loginIncorrectPasswordTest")
    void loginIncorrectPasswordTest() {
        List<WebDriver> drivers = Utils.getDrivers();
        drivers.parallelStream().forEach(webDriver -> {
            MainPage mainPage = new MainPage(webDriver);
            webDriver.get(Utils.BASE_URL);
            mainPage.doIncorrectLogin();
            assertThrows(TimeoutException.class, () -> Utils.getElementBySelector(webDriver, By.xpath("//div[@id='right-top-menu-uname']")));
        });
        drivers.forEach(WebDriver::quit);
    }

    @Test
    @DisplayName("logoutTest")
    void logoutTest() {
        List<WebDriver> drivers = Utils.getDrivers();
        drivers.parallelStream().forEach(webDriver -> {
            MainPage mainPage = new MainPage(webDriver);
            webDriver.get(Utils.BASE_URL);
            mainPage.doLogin();
            Utils.waitUntilPageLoads(webDriver, 4);
            mainPage.doLogout();
            String currentUrl = webDriver.getCurrentUrl();
            assertEquals(Utils.BASE_URL, currentUrl);
        });
        drivers.forEach(WebDriver::quit);
    }
}
